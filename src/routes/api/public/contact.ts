import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  message: z.string().trim().min(1).max(2000),
});

const RECIPIENT = "gajawadasuryakiran2004@gmail.com";

function encodeRFC2047(str: string) {
  // UTF-8 base64 encoded subject so non-ASCII chars work
  return `=?UTF-8?B?${Buffer.from(str, "utf-8").toString("base64")}?=`;
}

function buildRawEmail(opts: {
  to: string;
  from: string;
  replyTo: string;
  subject: string;
  text: string;
}) {
  const lines = [
    `To: ${opts.to}`,
    `From: ${opts.from}`,
    `Reply-To: ${opts.replyTo}`,
    `Subject: ${encodeRFC2047(opts.subject)}`,
    "MIME-Version: 1.0",
    'Content-Type: text/plain; charset="UTF-8"',
    "Content-Transfer-Encoding: 7bit",
    "",
    opts.text,
  ];
  const raw = lines.join("\r\n");
  return Buffer.from(raw, "utf-8")
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

export const Route = createFileRoute("/api/public/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let body: unknown;
        try {
          body = await request.json();
        } catch {
          return new Response(JSON.stringify({ error: "Invalid JSON" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
          });
        }

        const parsed = schema.safeParse(body);
        if (!parsed.success) {
          return new Response(
            JSON.stringify({ error: parsed.error.issues[0].message }),
            { status: 400, headers: { "Content-Type": "application/json" } },
          );
        }

        const LOVABLE_API_KEY = process.env.LOVABLE_API_KEY;
        const GOOGLE_MAIL_API_KEY = process.env.GOOGLE_MAIL_API_KEY;
        if (!LOVABLE_API_KEY) {
          return new Response(
            JSON.stringify({ error: "LOVABLE_API_KEY not configured" }),
            { status: 500, headers: { "Content-Type": "application/json" } },
          );
        }
        if (!GOOGLE_MAIL_API_KEY) {
          return new Response(
            JSON.stringify({ error: "GOOGLE_MAIL_API_KEY not configured" }),
            { status: 500, headers: { "Content-Type": "application/json" } },
          );
        }

        const { name, email, message } = parsed.data;
        const subject = `New portfolio contact from ${name}`;
        const text = [
          `You received a new message from your portfolio site.`,
          ``,
          `Name:    ${name}`,
          `Email:   ${email}`,
          ``,
          `Message:`,
          message,
        ].join("\n");

        const raw = buildRawEmail({
          to: RECIPIENT,
          from: RECIPIENT,
          replyTo: email,
          subject,
          text,
        });

        const gmailRes = await fetch(
          "https://connector-gateway.lovable.dev/google_mail/gmail/v1/users/me/messages/send",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${LOVABLE_API_KEY}`,
              "X-Connection-Api-Key": GOOGLE_MAIL_API_KEY,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ raw }),
          },
        );

        if (!gmailRes.ok) {
          const errBody = await gmailRes.text();
          console.error("Gmail send failed", gmailRes.status, errBody);
          return new Response(
            JSON.stringify({ error: "Failed to send email" }),
            { status: 502, headers: { "Content-Type": "application/json" } },
          );
        }

        return new Response(JSON.stringify({ success: true }), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
      },
    },
  },
});
