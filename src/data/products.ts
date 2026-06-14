import {
  Globe, Code2, Car, Bike, Layers, AppWindow, Smartphone, LifeBuoy,
  Briefcase, Wrench, Bug, BarChart2, Tag,
} from "lucide-react";
import type { Product } from "../types";

// ─── Edit your products & environments here ───────────────────────────────────
export const PRODUCTS: Product[] = [
  {
    id: "freesbe",
    name: "Freesbe",
    gradient: "from-purple-500 via-pink-500 to-indigo-500",
    icon: Globe,
    environments: [
      {
        id: 1,
        name: "Production",
        site: { href: "https://freesbe.com/", icon: Globe },
        strapi: { href: "https://admin.freesbe.com/admin" },
        accent: "from-emerald-500 to-teal-500",
        badge: "Live",
      },
      {
        id: 2,
        name: "Stage",
        site: { href: "https://stage.freesbe.com/", icon: Code2 },
        strapi: { href: "https://stage.freesbe.com/api/admin/" },
        accent: "from-amber-500 to-orange-500",
      },
      {
        id: 3,
        name: "Dev",
        site: { href: "https://dev.freesbe.com", icon: Code2 },
        strapi: { href: "https://dev.freesbe.com/api/admin/" },
        accent: "from-sky-500 to-indigo-500",
      },
      {
        id: 4,
        name: "Dev 3",
        site: { href: "https://dev3.freesbe.com", icon: Code2 },
        strapi: { href: "https://dev3.freesbe.com/api/admin/" },
        accent: "from-violet-500 to-purple-500",
      },
    ],
  },
  {
    id: "rental",
    name: "Freesbe Rental",
    gradient: "from-rose-500 via-orange-500 to-amber-500",
    icon: Car,
    environments: [
      {
        id: 1,
        name: "Production",
        site: { href: "https://rental.freesbe.com/", icon: Globe },
        strapi: { href: "https://admin-rental.freesbe.com/admin/auth/login" },
        accent: "from-emerald-500 to-teal-500",
        badge: "Live",
      },
      {
        id: 2,
        name: "Stage",
        site: { href: "https://stage-rental.freesbe.com/", icon: Code2 },
        strapi: { href: "https://stage-rental.freesbe.com/api/admin/" },
        accent: "from-amber-500 to-orange-500",
      },
      {
        id: 3,
        name: "Dev",
        site: { href: "https://dev-rental.freesbe.com/", icon: Code2 },
        strapi: { href: "https://dev-rental.freesbe.com/api/admin/auth/login" },
        accent: "from-sky-500 to-indigo-500",
      },
    ],
  },
  {
    id: "metro",
    name: "Metro",
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
    icon: Bike,
    environments: [
      {
        id: 1,
        name: "Production",
        site: { href: "https://prod.metro.co.il/", icon: Globe },
        strapi: { href: "http://185.70.250.61/admin" },
        accent: "from-emerald-500 to-teal-500",
        badge: "Live",
      },
    ],
  },
  {
    id: "others",
    name: "Standalone Sites",
    gradient: "from-slate-500 via-gray-500 to-zinc-500",
    icon: AppWindow,
    environments: [
      {
        id: 1,
        name: "Careers",
        site: { href: "https://careers.freesbe.com/", icon: Briefcase },
        accent: "from-pink-500 to-rose-500",
      },
      {
        id: 2,
        name: "Service",
        site: { href: "https://service.freesbe.com/", icon: Wrench },
        accent: "from-cyan-500 to-sky-500",
      },
      {
        id: 3,
        name: "Car Fleet",
        site: { href: "https://freesbe.com/car-fleet", icon: Car },
        accent: "from-indigo-500 to-blue-500",
      },
    ],
  },
  {
    id: "app",
    name: "App",
    gradient: "from-green-500 via-emerald-500 to-teal-500",
    icon: Smartphone,
    environments: [
      {
        id: 1,
        name: "Production",
        strapi: { href: "https://app.freesbe.com/admin" },
        accent: "from-emerald-500 to-teal-500",
        badge: "Live",
      },
      {
        id: 2,
        name: "Dev",
        strapi: { href: "https://app-dev.freesbe.com/admin" },
        accent: "from-sky-500 to-indigo-500",
      },
      {
        id: 3,
        name: "Support",
        site: { href: "https://app-support.freesbe.com/", icon: LifeBuoy },
        accent: "from-amber-500 to-orange-500",
      },
    ],
  },
  {
    id: "thirdparty",
    name: "Global Tools",
    gradient: "from-violet-500 via-fuchsia-500 to-purple-500",
    icon: Layers,
    environments: [
      {
        id: 1,
        name: "Sentry",
        site: { href: "https://freesbe.sentry.io/projects/", icon: Bug },
        accent: "from-violet-500 to-fuchsia-500",
      },
      {
        id: 2,
        name: "PostHog",
        site: { href: "https://us.posthog.com/project/52571/home", icon: BarChart2 },
        accent: "from-orange-500 to-amber-500",
      },
      {
        id: 3,
        name: "Tag Manager",
        site: { href: "https://tagmanager.google.com/#/container/accounts/6065230515/containers/98228637/workspaces/657", icon: Tag },
        accent: "from-blue-500 to-cyan-500",
      },
    ],
  },
];
// ────────────────────────────────────────────────────────────────────────────
