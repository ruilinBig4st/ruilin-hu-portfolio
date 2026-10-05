"use client";

import { portfolio } from "@/lib/portfolio-data";
import { useActiveSection } from "@/hooks/use-active-section";

export function MobileNav() {
  const activeSection = useActiveSection();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/80 bg-ink/90 backdrop-blur lg:hidden">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4">
        <a href="#" className="focus-ring rounded-md">
          <span className="block text-sm font-semibold text-white">{portfolio.name}</span>
          <span className="block text-xs text-muted">{portfolio.role}</span>
        </a>
        <nav aria-label="Mobile navigation" className="overflow-x-auto">
          <ul className="flex min-w-max items-center gap-1">
            {portfolio.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`focus-ring rounded-md px-3 py-2 text-xs font-medium transition hover:text-white ${
                    activeSection === item.href.split("#")[1] ? "bg-white/5 text-accent" : "text-muted"
                  }`}
                  aria-current={activeSection === item.href.split("#")[1] ? "true" : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
