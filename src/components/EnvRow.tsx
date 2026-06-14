import { Code2, PenTool } from "lucide-react";
import type { Environment } from "../types";
import { LinkButton } from "./LinkButton";
import strapiLogo from "../assets/strapi.svg";
import figmaLogo from "../assets/figma.svg";

export function EnvRow({ env }: { env: Environment }) {
  // A row with only one link lets that button span both columns.
  const linkCount = [env.site, env.strapi, env.figma].filter(Boolean).length;
  const single = linkCount === 1;

  return (
    <div className="grid grid-cols-[minmax(120px,180px)_1fr_1fr] items-center gap-4 px-card py-1 border-t border-white/[0.06]">
      <div className="flex items-center gap-2 min-w-0">
        <div className={`w-2 h-2 rounded-full flex-shrink-0 bg-gradient-to-br ${env.accent}`} />
        <span className="text-sm font-medium text-white/70 truncate">{env.name}</span>
        {env.badge && (
          <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/20">
            {env.badge}
          </span>
        )}
      </div>

      {env.site && (
        <LinkButton
          href={env.site.href}
          icon={env.site.icon}
          iconUrl={env.site.iconUrl}
          label={`Website – ${env.name}`}
          variant="green"
          className={single ? "col-span-2" : ""}
        />
      )}

      {env.strapi && (
        <LinkButton
          href={env.strapi.href}
          icon={Code2}
          iconUrl={strapiLogo}
          label={env.strapi.label ?? `Strapi – ${env.name}`}
          variant="purple"
          className={single ? "col-span-2" : ""}
        />
      )}

      {env.figma && (
        <LinkButton
          href={env.figma.href}
          icon={PenTool}
          iconUrl={figmaLogo}
          label={env.figma.label ?? "Figma"}
          variant="figma"
          className={single ? "col-span-2" : ""}
        />
      )}
    </div>
  );
}
