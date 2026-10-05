import { BarChart3, MapPin, Terminal } from "lucide-react";
import type { ProjectScreenshot } from "@/types/portfolio";

type ProjectVisualProps = {
  item: ProjectScreenshot;
};

export function ProjectVisual({ item }: ProjectVisualProps) {
  const Icon = item.kind === "map" ? MapPin : item.kind === "terminal" ? Terminal : BarChart3;

  return (
    <div className="overflow-hidden rounded-lg border border-line bg-panel/70">
      <div className="relative flex aspect-[16/10] items-center justify-center bg-[linear-gradient(135deg,rgba(94,234,212,0.08),rgba(255,255,255,0.03))]">
        <div className="absolute inset-0 grid grid-cols-6 gap-px opacity-20" aria-hidden="true">
          {Array.from({ length: 36 }).map((_, index) => (
            <span key={index} className="bg-white/5" />
          ))}
        </div>
        <div className="relative flex size-16 items-center justify-center rounded-lg border border-accent/30 bg-ink/80 text-accent shadow-glow">
          <Icon className="size-7" aria-hidden="true" />
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-white">{item.title}</h3>
        <p className="mt-2 text-sm leading-6 text-muted">{item.description}</p>
      </div>
    </div>
  );
}
