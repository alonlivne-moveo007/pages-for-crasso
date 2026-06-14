import type { LucideIcon } from "lucide-react";

export type LinkVariant = "green" | "purple";

export type Environment = {
  id: number;
  name: string;
  site: { href: string; icon: LucideIcon };
  strapi?: { href: string; label?: string };
  /** Tailwind gradient for the status dot, e.g. "from-emerald-500 to-teal-500" */
  accent: string;
  badge?: string;
};

export type Product = {
  id: string;
  name: string;
  /** Tailwind gradient for the header tile + card glow */
  gradient: string;
  /** Symbol shown in the card header */
  icon: LucideIcon;
  environments: Environment[];
};
