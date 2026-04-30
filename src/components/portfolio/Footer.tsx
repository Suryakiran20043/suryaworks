export function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="text-lg font-display font-bold gradient-text">Surya Kiran</div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Gajawada Surya Kiran. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
