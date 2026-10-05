import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
};

export function ButtonLink({ children, className = "", href, variant = "primary", ...props }: ButtonLinkProps) {
  const styles = {
    primary: "border-accent bg-accent text-ink hover:bg-transparent hover:text-accent",
    secondary: "border-line bg-white/5 text-white hover:border-accent hover:text-accent",
    ghost: "border-transparent bg-transparent text-muted hover:text-accent"
  };
  const isInternal = href.startsWith("/") || href.startsWith("#");

  const sharedClass = `focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md border px-5 py-2.5 text-sm font-semibold transition ${styles[variant]} ${className}`;

  if (isInternal) {
    return (
      <Link href={href} className={sharedClass} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <a className={sharedClass} href={href} {...props}>
      {children}
    </a>
  );
}
