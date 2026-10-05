import { ContactLinks } from "@/components/contact-links";
import { portfolio } from "@/lib/portfolio-data";

export function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {portfolio.name}. Built for clear, business-focused data storytelling.
        </p>
        <ContactLinks />
      </div>
    </footer>
  );
}
