import { Download, FileText } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { Section } from "@/components/section";
import { portfolio } from "@/lib/portfolio-data";

export function ResumeSection() {
  return (
    <Section id="resume" eyebrow="Resume" title="Ready for analyst and data-focused interviews.">
      <div className="rounded-lg border border-line bg-panel/70 p-6 md:p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-md border border-line bg-white/5 text-accent">
              <FileText className="size-5" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Ruilin Hu Resume</h3>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
                Download the latest one-page resume with updated project experience, technical skills, and contact information.
              </p>
            </div>
          </div>
          <ButtonLink href={portfolio.resumeUrl} variant="secondary" className="shrink-0">
            <Download className="size-4" aria-hidden="true" />
            Download Resume
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}
