import { useState } from "react";
import { Copy, Check, ExternalLink } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { LinkVariant } from "../types";

const VARIANT_STYLES: Record<LinkVariant, string> = {
  green: "bg-emerald-500/10 border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/20",
  purple: "bg-violet-500/10 border-violet-500/30 text-violet-300 hover:bg-violet-500/20",
};

export function LinkButton({
  href,
  icon,
  label,
  variant,
  className = "",
}: {
  href: string;
  icon: LucideIcon;
  label: string;
  variant: LinkVariant;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);
  const Icon = icon;

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(href);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div
      className={`group/btn relative flex items-center justify-between gap-3 w-full px-3.5 py-2.5 rounded-lg border text-[13px] font-medium transition-colors ${VARIANT_STYLES[variant]} ${className}`}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        title={href}
        aria-label={label}
        className="absolute inset-0 rounded-lg focus:outline-none"
      />
      <span className="flex items-center gap-2 min-w-0 pointer-events-none">
        <Icon size={14} strokeWidth={2} className="flex-shrink-0" />
        <span className="truncate">{label}</span>
      </span>
      <button
        onClick={handleCopy}
        title="Copy URL"
        className="relative z-10 flex-shrink-0 -mr-0.5 p-0.5 rounded transition-colors hover:bg-white/10"
        aria-label={`Copy ${label} URL`}
      >
        {copied ? (
          <Check size={13} className="text-emerald-300" />
        ) : (
          <>
            <ExternalLink size={13} className="opacity-60 group-hover/btn:hidden" />
            <Copy size={13} className="hidden group-hover/btn:block opacity-80" />
          </>
        )}
      </button>
    </div>
  );
}
