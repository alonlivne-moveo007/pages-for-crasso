import {
  Globe, Code2, Car, Bike, Layers, Smartphone, LifeBuoy,
  Briefcase, Wrench, Bug, BarChart2, Tag, ShoppingBag, Image, Eye, Cloud,
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
      {
        id: 5,
        name: "Figma",
        figma: { href: "https://www.figma.com/design/JiDVQ5zJKCHWBaSKeaEmP6/Car-pages" },
        accent: "from-amber-500 to-orange-500",
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
    id: "carfleet",
    name: "Car Fleet",
    gradient: "from-indigo-500 via-blue-500 to-sky-500",
    icon: Car,
    environments: [
      {
        id: 1,
        name: "Production",
        site: { href: "https://freesbe.com/car-fleet", icon: Globe },
        accent: "from-emerald-500 to-teal-500",
      },
      {
        id: 2,
        name: "Stage",
        site: { href: "https://stage.freesbe.com/car-fleet", icon: Code2 },
        accent: "from-amber-500 to-orange-500",
      },
      {
        id: 3,
        name: "Dev",
        site: { href: "https://dev.freesbe.com/car-fleet", icon: Code2 },
        accent: "from-sky-500 to-indigo-500",
      },
      {
        id: 4,
        name: "Dev 3",
        site: { href: "https://dev3.freesbe.com/car-fleet", icon: Code2 },
        accent: "from-violet-500 to-purple-500",
      },
    ],
  },
  {
    id: "service",
    name: "Service",
    gradient: "from-cyan-500 via-sky-500 to-blue-500",
    icon: Wrench,
    environments: [
      {
        id: 1,
        name: "Prod",
        site: { href: "https://service.freesbe.com/", icon: Globe },
        accent: "from-emerald-500 to-teal-500",
      },
      {
        id: 2,
        name: "Stage",
        site: { href: "https://stage-service.freesbe.com/", icon: Code2 },
        accent: "from-amber-500 to-orange-500",
      },
      {
        id: 3,
        name: "Dev",
        site: { href: "https://dev-service.freesbe.com/", icon: Code2 },
        accent: "from-sky-500 to-indigo-500",
      },
      {
        id: 4,
        name: "Renault – Prod",
        site: { href: "https://service.freesbe.com/?tem=renault", icon: Globe },
        accent: "from-emerald-500 to-teal-500",
      },
      {
        id: 5,
        name: "Renault – Stage",
        site: { href: "https://stage-service.freesbe.com/?tem=renault", icon: Code2 },
        accent: "from-amber-500 to-orange-500",
      },
      {
        id: 6,
        name: "Renault – Dev",
        site: { href: "https://dev-service.freesbe.com/?tem=renault", icon: Code2 },
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
      },
      {
        id: 2,
        name: "Figma",
        figma: { href: "https://www.figma.com/design/fWw0Z6BbKSaQ0GtyWK29iT/Freesbe-Motors" },
        accent: "from-amber-500 to-orange-500",
      },
    ],
  },
  {
    id: "accessories",
    name: "Accessories",
    gradient: "from-fuchsia-500 via-pink-500 to-purple-500",
    icon: ShoppingBag,
    environments: [
      {
        id: 1,
        name: "Used Cars – Prod",
        site: { href: "https://accessories.freesbe.com/", icon: ShoppingBag },
        accent: "from-emerald-500 to-teal-500",
      },
      {
        id: 2,
        name: "Used Cars – Dev",
        site: { href: "https://accessories-dev.freesbe.com/", icon: Code2 },
        accent: "from-sky-500 to-indigo-500",
      },
      {
        id: 3,
        name: "New Cars – Prod",
        site: { href: "https://accessories-new.freesbe.com/", icon: ShoppingBag },
        accent: "from-purple-500 to-fuchsia-500",
      },
    ],
  },
  {
    id: "careers",
    name: "Careers",
    gradient: "from-pink-500 via-rose-500 to-red-500",
    icon: Briefcase,
    environments: [
      {
        id: 1,
        name: "Production",
        site: { href: "https://careers.freesbe.com/", icon: Briefcase },
        strapi: { href: "https://careers-admin.freesbe.com/admin" },
        accent: "from-emerald-500 to-teal-500",
      },
      {
        id: 2,
        name: "Dev",
        site: { href: "https://dev-career.freesbe.com/jobs", icon: Code2 },
        strapi: { href: "https://dev-career.freesbe.com/api/admin" },
        accent: "from-violet-500 to-purple-500",
      },
      {
        id: 3,
        name: "Figma",
        figma: { href: "https://figma.com/design/prHKTjS1pdxiAurguoxis3/Careers" },
        accent: "from-amber-500 to-orange-500",
      },
    ],
  },
  {
    id: "app",
    name: "App-Support",
    gradient: "from-green-500 via-emerald-500 to-teal-500",
    icon: Smartphone,
    environments: [
      {
        id: 1,
        name: "Production",
        site: { href: "https://app-support.freesbe.com/", icon: LifeBuoy },
        strapi: { href: "https://app.freesbe.com/admin" },
        accent: "from-emerald-500 to-teal-500",
      },
      {
        id: 2,
        name: "Dev",
        strapi: { href: "https://app-dev.freesbe.com/admin" },
        accent: "from-sky-500 to-indigo-500",
      },
      {
        id: 3,
        name: "Figma",
        figma: { href: "https://www.figma.com/design/yz79ce7YTyhc1w3knOvDdD/App?node-id=8287-36823&t=EkwD6Gj0OsgkURAZ-0" },
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
      {
        id: 4,
        name: "ImageKit",
        site: { href: "https://imagekit.io/login/", icon: Image },
        accent: "from-rose-500 to-pink-500",
      },
      {
        id: 5,
        name: "Clarity",
        site: { href: "https://clarity.microsoft.com/", icon: Eye },
        accent: "from-sky-500 to-blue-500",
      },
      {
        id: 6,
        name: "Salesforce",
        site: { href: "https://carasso.my.salesforce.com", icon: Cloud },
        accent: "from-blue-500 to-sky-500",
      },
    ],
  },
];
// ────────────────────────────────────────────────────────────────────────────
