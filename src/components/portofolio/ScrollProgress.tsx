import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const setScrollProgress = (scrolled: number, total: number) => {
      const pct = total > 0 ? (scrolled / total) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, pct)));
    };
    const updateWindow = () =>
      setScrollProgress(
        window.scrollY,
        document.documentElement.scrollHeight - window.innerHeight,
      );

    window.addEventListener("scroll", updateWindow, { passive: true });
    const panels = document.querySelectorAll<HTMLElement>("main, aside#work");
    const panelHandlers = new Map<HTMLElement, () => void>();
    panels.forEach((panel) => {
      const handler = () => setScrollProgress(panel.scrollTop, panel.scrollHeight - panel.clientHeight);
      panelHandlers.set(panel, handler);
      panel.addEventListener("scroll", handler, { passive: true });
    });
    updateWindow();

    return () => {
      window.removeEventListener("scroll", updateWindow);
      panelHandlers.forEach((handler, panel) => panel.removeEventListener("scroll", handler));
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 z-100 h-0.5 w-full bg-transparent"
      aria-hidden="true"
    >
      <div
        className="h-full bg-foreground transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
