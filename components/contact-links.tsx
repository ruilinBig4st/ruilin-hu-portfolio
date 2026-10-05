import { portfolio } from "@/lib/portfolio-data";

export function ContactLinks() {
  return (
    <ul className="flex items-center gap-3" aria-label="Contact links">
      {portfolio.socialLinks.map((link) => {
        const Icon = link.icon;
        return (
          <li key={link.label}>
            {link.href ? (
              <a
                href={link.href}
                className="focus-ring inline-flex size-10 items-center justify-center rounded-md border border-line bg-white/5 text-muted transition hover:border-accent hover:text-accent"
                target={link.external || link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.external || link.href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={link.label}
              >
                <Icon className="size-4" aria-hidden="true" />
              </a>
            ) : (
              <span
                className="inline-flex size-10 cursor-not-allowed items-center justify-center rounded-md border border-line bg-white/[0.02] text-muted/50"
                title={link.disabledReason}
                aria-label={`${link.label} unavailable`}
                aria-disabled="true"
              >
                <Icon className="size-4" aria-hidden="true" />
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
}
