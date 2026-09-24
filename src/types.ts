import type { LucideIcon } from "lucide-react";

export type LinkVariant = "green" | "purple" | "figma" | "medusa";

export type Environment = {
  id: number;
  name: string;
  site?: { href: string; icon: LucideIcon; iconUrl?: string };
  strapi?: { href: string; label?: string };
  figma?: { href: string; label?: string };
  medusa?: { href: string; label?: string };
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
  /** Optional logo image URL; when set, replaces the gradient tile + lucide icon */
  iconUrl?: string;
  /**
   * Which column this card sits in on wide screens: 1 = left, 2 = right.
   * Within a column, cards appear in the order they're listed below.
   * Defaults to the left column. On narrow screens everything stacks into a
   * single column: all of column 1, then all of column 2.
   */
  column?: 1 | 2;
  environments: Environment[];
};
