"use client";

import { portfolio } from "@/lib/portfolio-data";
import { ContactLinks } from "@/components/contact-links";
import { useActiveSection } from "@/hooks/use-active-section";

export function SidebarNav() {
  const activeSection = useActiveSection();

  return (
    <aside className="sticky top-0 hidden h-screen flex-col justify-between py-10 lg:flex">
      <div>
        <a href="#main-content" className="focus-ring sr-only focus:not-sr-only">
          Skip to content
        </a>
        <a href="#" className="focus-ring block rounded-md">
          <p className="text-xl font-semibold text-white">{portfolio.name}</p>
          <p className="mt-1 text-sm text-muted">{portfolio.role}</p>
        </a>
        <nav aria-label="Primary navigation" className="mt-12">
          <ul className="space-y-2">
            {portfolio.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`focus-ring group flex items-center gap-3 rounded-md py-2 text-sm font-medium transition hover:text-white ${
                    activeSection === item.href.split("#")[1] ? "text-white" : "text-muted"
                  }`}
                  aria-current={activeSection === item.href.split("#")[1] ? "true" : undefined}
                >
                  <span
                    className={`h-px bg-line transition group-hover:w-12 group-hover:bg-accent ${
                      activeSection === item.href.split("#")[1] ? "w-12 bg-accent" : "w-8"
                    }`}
                  />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <ContactLinks />
    </aside>
  );
}
