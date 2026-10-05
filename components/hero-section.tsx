import { ArrowDown, Download, Mail } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { portfolio } from "@/lib/portfolio-data";

export function HeroSection() {
  return (
    <section id="home" className="flex min-h-[88vh] scroll-mt-24 flex-col justify-center py-16 md:py-24 lg:min-h-screen" aria-labelledby="hero-title">
      <div className="reveal max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">
          {portfolio.location} / Data Analytics Portfolio
        </p>
        <h1 id="hero-title" className="mt-5 text-4xl font-semibold leading-tight text-white md:text-6xl">
          {portfolio.headline}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted md:text-xl">{portfolio.subheadline}</p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="#projects">
            <ArrowDown className="size-4" aria-hidden="true" />
            View Projects
          </ButtonLink>
          <ButtonLink href={portfolio.resumeUrl} variant="secondary">
            <Download className="size-4" aria-hidden="true" />
            Download Resume
          </ButtonLink>
          <ButtonLink href="#contact" variant="ghost">
            <Mail className="size-4" aria-hidden="true" />
            Contact Me
          </ButtonLink>
        </div>
      </div>
      <div className="mt-14 grid gap-3 sm:grid-cols-3">
        {portfolio.credentials.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.label} className="rounded-lg border border-line bg-panel/70 p-4 shadow-glow">
              <Icon className="size-5 text-accent" aria-hidden="true" />
              <p className="mt-4 text-xs uppercase tracking-[0.18em] text-muted">{item.label}</p>
              <p className="mt-1 text-sm font-semibold text-white">{item.value}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
