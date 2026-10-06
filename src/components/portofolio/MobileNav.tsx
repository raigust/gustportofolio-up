export function MobileNav() {
  return (
    <nav
      aria-label="Section navigation"
      className="sticky top-3 z-40 mx-auto flex w-fit items-center gap-1 rounded-full border border-hairline bg-surface/90 p-1 backdrop-blur lg:hidden"
    >
      {[
        { label: "About", href: "#about" },
        { label: "Work", href: "#work" },
        { label: "Contact", href: "#contact" },
      ].map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="inline-flex h-10 items-center rounded-full px-4 text-xs text-muted-foreground transition-colors hover:bg-surface-elevated hover:text-foreground"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
