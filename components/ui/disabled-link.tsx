import type { ReactNode } from "react";

type DisabledLinkProps = {
  children: ReactNode;
  reason?: string;
  className?: string;
};

export function DisabledLink({ children, reason, className = "" }: DisabledLinkProps) {
  return (
    <span
      className={`inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-md border border-line bg-white/[0.03] px-4 py-2 text-sm font-medium text-muted ${className}`}
      title={reason}
      aria-disabled="true"
    >
      {children}
    </span>
  );
}
