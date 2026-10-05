import { Mail } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { ContactLinks } from "@/components/contact-links";
import { Section } from "@/components/section";
import { portfolio } from "@/lib/portfolio-data";

export function ContactSection() {
  return (
    <Section id="contact" eyebrow="Contact" title="Open to data roles and interview conversations.">
      <div className="rounded-lg border border-line bg-panel/70 p-6 md:p-8">
        <p className="max-w-2xl text-base leading-8 text-muted">
          I am interested in Data Analyst, Data Scientist, Business Analyst, and AI-data related opportunities where analysis can guide better product, marketing, finance, or operations decisions.
        </p>
        <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
          <ButtonLink href={portfolio.contact.emailHref}>
            <Mail className="size-4" aria-hidden="true" />
            Contact Me
          </ButtonLink>
          <ContactLinks />
        </div>
      </div>
    </Section>
  );
}
