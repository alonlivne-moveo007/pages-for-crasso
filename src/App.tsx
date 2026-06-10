import { useState } from "react";
import type { Variants } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe, LayoutDashboard, Code2, Monitor, Car, Briefcase, Wrench, Bike,
  MoreHorizontal, Layers, Bug, ChevronDown, Copy, Check, BarChart2, Tag,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

// ─── Edit your products & environments here ───────────────────────────────────
type Environment = {
  id: number;
  name: string;
  site: { href: string; icon: LucideIcon };
  strapi?: { href: string; label?: string };
  accent: string;
  card: string;
  badge?: string;
};

type Product = {
  id: string;
  name: string;
  description: string;
  avatarUrl?: string;
  environments: Environment[];
};

const PRODUCTS: Product[] = [
  {
    id: "freesbe",
    name: "Freesbe",
    description: "Environments & Admin Access",
    environments: [
      {
        id: 1,
        name: "Production",
        site: { href: "https://freesbe.com/", icon: Globe },
        strapi: { href: "https://admin.freesbe.com/admin" },
        accent: "from-emerald-500 to-teal-500",
        card: "bg-emerald-500/[0.07] border-emerald-500/25",
        badge: "Live",
      },
      {
        id: 2,
        name: "Stage",
        site: { href: "https://stage.freesbe.com/", icon: Monitor },
        strapi: { href: "https://stage.freesbe.com/api/admin/" },
        accent: "from-amber-500 to-orange-500",
        card: "bg-amber-500/[0.07] border-amber-500/25",
      },
      {
        id: 3,
        name: "Dev",
        site: { href: "https://dev.freesbe.com", icon: Code2 },
        strapi: { href: "https://dev.freesbe.com/api/admin/" },
        accent: "from-sky-500 to-indigo-500",
        card: "bg-sky-500/[0.07] border-sky-500/25",
      },
      {
        id: 4,
        name: "Dev 3",
        site: { href: "https://dev3.freesbe.com", icon: Code2 },
        strapi: { href: "https://dev3.freesbe.com/api/admin/" },
        accent: "from-violet-500 to-purple-500",
        card: "bg-violet-500/[0.07] border-violet-500/25",
      },
    ],
  },
  {
    id: "rental",
    name: "Freesbe Rental",
    description: "Environments & Admin Access",
    environments: [
      {
        id: 1,
        name: "Production",
        site: { href: "https://rental.freesbe.com/", icon: Globe },
        strapi: { href: "https://admin-rental.freesbe.com/admin/auth/login" },
        accent: "from-emerald-500 to-teal-500",
        card: "bg-emerald-500/[0.07] border-emerald-500/25",
        badge: "Live",
      },
      {
        id: 2,
        name: "Stage",
        site: { href: "https://stage-rental.freesbe.com/", icon: Monitor },
        strapi: { href: "https://stage-rental.freesbe.com/api/admin/" },
        accent: "from-amber-500 to-orange-500",
        card: "bg-amber-500/[0.07] border-amber-500/25",
      },
      {
        id: 3,
        name: "Dev",
        site: { href: "https://dev-rental.freesbe.com/", icon: Code2 },
        strapi: { href: "https://dev-rental.freesbe.com/api/admin/auth/login" },
        accent: "from-sky-500 to-indigo-500",
        card: "bg-sky-500/[0.07] border-sky-500/25",
      },
    ],
  },
  {
    id: "metro",
    name: "Metro",
    description: "Environments & Admin Access",
    environments: [
      {
        id: 1,
        name: "Production",
        site: { href: "https://prod.metro.co.il/", icon: Globe },
        strapi: { href: "http://185.70.250.61/admin" },
        accent: "from-emerald-500 to-teal-500",
        card: "bg-emerald-500/[0.07] border-emerald-500/25",
        badge: "Live",
      },
    ],
  },
  {
    id: "thirdparty",
    name: "3rd Party",
    description: "External Tools & Services",
    environments: [
      {
        id: 1,
        name: "Sentry",
        site: { href: "https://freesbe.sentry.io/projects/", icon: Bug },
        accent: "from-violet-500 to-fuchsia-500",
        card: "bg-violet-500/[0.07] border-violet-500/25",
      },
      {
        id: 2,
        name: "PostHog",
        site: { href: "https://us.posthog.com/project/52571/home", icon: BarChart2 },
        accent: "from-orange-500 to-amber-500",
        card: "bg-orange-500/[0.07] border-orange-500/25",
      },
      {
        id: 3,
        name: "Tag Manager",
        site: { href: "https://tagmanager.google.com/#/container/accounts/6065230515/containers/98228637/workspaces/657", icon: Tag },
        accent: "from-blue-500 to-cyan-500",
        card: "bg-blue-500/[0.07] border-blue-500/25",
      },
    ],
  },
  {
    id: "others",
    name: "Standalone Sites",
    description: "Standalone Sites",
    environments: [
      {
        id: 1,
        name: "Careers",
        site: { href: "https://careers.freesbe.com/", icon: Briefcase },
        accent: "from-pink-500 to-rose-500",
        card: "bg-pink-500/[0.07] border-pink-500/25",
      },
      {
        id: 2,
        name: "Service",
        site: { href: "https://service.freesbe.com/", icon: Wrench },
        accent: "from-cyan-500 to-sky-500",
        card: "bg-cyan-500/[0.07] border-cyan-500/25",
      },
    ],
  },
];
// ────────────────────────────────────────────────────────────────────────────

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const profileVariants: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: EASE } },
};

function Avatar({ name, avatarUrl, icon }: { name: string; avatarUrl?: string; icon?: LucideIcon }) {
  if (avatarUrl)
    return <img src={avatarUrl} alt={name} className="w-full h-full object-cover rounded-full" />;
  if (icon) {
    const Icon = icon;
    return <Icon size={28} className="text-white" strokeWidth={1.5} />;
  }
  return (
    <span className="text-2xl font-bold text-white tracking-tight">
      {name.slice(0, 2).toUpperCase()}
    </span>
  );
}

function LinkRow({
  href,
  icon,
  accent,
  label,
  dimmed = false,
}: {
  href: string;
  icon: LucideIcon;
  accent?: string;
  label: string;
  dimmed?: boolean;
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
    <div className="group relative flex items-center w-full border-t border-white/[0.06] bg-white/[0.02] transition-all duration-200 hover:bg-white/[0.07]">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 focus:outline-none"
        aria-label={label}
      />
      <div className="flex items-center flex-1 px-4 py-3.5 pointer-events-none min-w-0">
        <div
          className={`flex items-center justify-center w-8 h-8 rounded-lg flex-shrink-0 transition-transform duration-300 group-hover:scale-110 ${
            dimmed
              ? "bg-white/[0.06] border border-white/10"
              : `bg-gradient-to-br ${accent} shadow-md`
          }`}
        >
          <Icon size={15} className={dimmed ? "text-white/60" : "text-white"} strokeWidth={2} />
        </div>
        <span
          className={`flex-1 text-center text-[13px] tracking-wide ${
            dimmed ? "font-medium text-white/55" : "font-semibold text-white/85"
          }`}
        >
          {label}
        </span>
      </div>
      <button
        onClick={handleCopy}
        className="relative z-10 mr-3 p-1.5 rounded-md transition-all duration-200 hover:bg-white/10 flex-shrink-0"
        title="Copy URL"
      >
        {copied
          ? <Check size={13} className="text-emerald-400" />
          : <Copy size={13} className="text-white/40" />}
      </button>
    </div>
  );
}

function EnvCard({ env }: { env: Environment }) {
  const isStandalone = !env.strapi;

  return (
    <div className={`w-full rounded-2xl overflow-hidden border backdrop-blur-md ${env.card}`}>
      <div className="flex items-center gap-2 px-4 pt-3 pb-2">
        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${env.accent}`} />
        <span className="text-[13px] font-bold tracking-wide text-white/75">{env.name}</span>
        {env.badge && (
          <span className="ml-auto text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/20">
            {env.badge}
          </span>
        )}
      </div>

      <LinkRow
        href={env.site.href}
        icon={env.site.icon}
        accent={env.accent}
        label={isStandalone ? env.name : "Website"}
      />

      {env.strapi && (
        <>
          <div className="flex items-center px-4">
            <div className="w-px h-3 bg-white/10 ml-[15px]" />
          </div>
          <LinkRow
            href={env.strapi.href}
            icon={LayoutDashboard}
            label={env.strapi.label ?? "Strapi"}
            dimmed
          />
        </>
      )}

      <div className="h-1" />
    </div>
  );
}

function ProductSection({ product, delay }: { product: Product; delay: number }) {
  const [isOpen, setIsOpen] = useState(true);
  const isRental = product.id === "rental";
  const isMetro = product.id === "metro";
  const isOthers = product.id === "others";
  const isThirdParty = product.id === "thirdparty";
  const gradientFrom = isRental
    ? "from-rose-500 via-orange-500 to-amber-500"
    : isMetro
    ? "from-blue-500 via-cyan-500 to-teal-500"
    : isOthers
    ? "from-slate-500 via-gray-500 to-zinc-500"
    : isThirdParty
    ? "from-violet-500 via-fuchsia-500 to-purple-500"
    : "from-purple-500 via-pink-500 to-indigo-500";

  return (
    <motion.div
      className="w-full flex flex-col gap-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      custom={delay}
    >
      <motion.button
        className="flex flex-col items-center gap-3 text-center w-full focus:outline-none"
        variants={profileVariants}
        onClick={() => setIsOpen((o) => !o)}
      >
        <div className="relative">
          <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${gradientFrom} blur-md opacity-70 scale-110`} />
          <div className={`relative w-20 h-20 rounded-full p-[3px] bg-gradient-to-br ${gradientFrom}`}>
            <div className="w-full h-full rounded-full bg-[#13131f] flex items-center justify-center overflow-hidden">
              <Avatar
                name={product.name}
                avatarUrl={product.avatarUrl}
                icon={isRental ? Car : isMetro ? Bike : isOthers ? MoreHorizontal : isThirdParty ? Layers : undefined}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-bold text-white tracking-tight">{product.name}</h2>
          <p className="text-sm text-white/50">{product.description}</p>
        </div>
        <ChevronDown
          size={14}
          className={`text-white/30 transition-transform duration-300 ${isOpen ? "rotate-0" : "-rotate-90"}`}
        />
      </motion.button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-3">
              {product.environments.map((env) => (
                <EnvCard key={env.id} env={env} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#0b0b1a] flex items-start justify-center px-4 py-12">
      {/* Ambient blobs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-purple-700/20 blur-[120px]" />
        <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] rounded-full bg-indigo-700/20 blur-[120px]" />
        <div className="absolute -bottom-40 left-1/3 w-[400px] h-[400px] rounded-full bg-rose-700/15 blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-5xl flex flex-col gap-10 pb-8">
        {/* Page header */}
        <div className="text-center pt-2">
          <h1 className="text-3xl font-bold text-white tracking-tight">Freesbe Internal</h1>
          <p className="text-sm text-white/40 mt-2">Dev links & admin access</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-start">
          {PRODUCTS.map((product, i) => (
            <ProductSection key={product.id} product={product} delay={i * 0.15} />
          ))}
        </div>

        <p className="text-xs text-white/20 text-center">
          © {new Date().getFullYear()} Freesbe
        </p>
      </div>
    </div>
  );
}
