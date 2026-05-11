import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import { Globe, LayoutDashboard, Code2, Monitor, Car, Briefcase, Wrench, Bike } from "lucide-react";
import type { LucideIcon } from "lucide-react";

// ─── Edit your products & environments here ───────────────────────────────────
type Environment = {
  id: number;
  name: string;
  site: { href: string; icon: LucideIcon };
  strapi?: { href: string; label?: string }; // optional — standalone sites omit this
  accent: string;
  card: string; // subtle bg + border tint for the card
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
      {
        id: 5,
        name: "Careers",
        site: { href: "https://careers.freesbe.com/", icon: Briefcase },
        accent: "from-pink-500 to-rose-500",
        card: "bg-pink-500/[0.07] border-pink-500/25",
      },
      {
        id: 6,
        name: "Service",
        site: { href: "https://service.freesbe.com/", icon: Wrench },
        accent: "from-cyan-500 to-sky-500",
        card: "bg-cyan-500/[0.07] border-cyan-500/25",
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
];
// ────────────────────────────────────────────────────────────────────────────

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

const profileVariants: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: EASE } },
};

function Avatar({ name, avatarUrl, icon }: { name: string; avatarUrl?: string; icon?: LucideIcon }) {
  if (avatarUrl)
    return (
      <img src={avatarUrl} alt={name} className="w-full h-full object-cover rounded-full" />
    );
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

function ChevronRight() {
  return (
    <svg
      className="w-3.5 h-3.5 text-white/30 transition-all duration-300 group-hover:text-white/60 group-hover:translate-x-0.5 flex-shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}

function EnvCard({ env }: { env: Environment }) {
  const SiteIcon = env.site.icon;
  const isStandalone = !env.strapi;

  return (
    <div className={`w-full rounded-2xl overflow-hidden border backdrop-blur-md ${env.card}`}>
      {/* Env label row */}
      <div className="flex items-center gap-2 px-4 pt-3 pb-2">
        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${env.accent}`} />
        <span className="text-[13px] font-bold tracking-wide text-white/75">
          {env.name}
        </span>
        {env.badge && (
          <span className="ml-auto text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/20">
            {env.badge}
          </span>
        )}
      </div>

      {/* Website row */}
      <a
        href={env.site.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center w-full px-4 py-3.5 border-t border-white/[0.06] bg-white/[0.02] transition-all duration-200 hover:bg-white/[0.07] focus:outline-none cursor-pointer no-underline"
      >
        <div className={`flex items-center justify-center w-8 h-8 rounded-lg flex-shrink-0 bg-gradient-to-br ${env.accent} shadow-md transition-transform duration-300 group-hover:scale-110`}>
          <SiteIcon size={15} className="text-white" strokeWidth={2} />
        </div>
        <span className="absolute inset-0 flex items-center justify-center text-[13px] font-semibold text-white/85 tracking-wide pointer-events-none">
          {isStandalone ? env.name : "Website"}
        </span>
        <ChevronRight />
      </a>

      {/* Strapi row — only for paired environments */}
      {env.strapi && (
        <>
          <div className="flex items-center px-4">
            <div className="w-px h-3 bg-white/10 ml-[15px]" />
          </div>
          <a
            href={env.strapi.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center w-full px-4 py-3.5 border-t border-white/[0.06] bg-white/[0.02] transition-all duration-200 hover:bg-white/[0.07] focus:outline-none cursor-pointer no-underline"
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-lg flex-shrink-0 bg-white/[0.06] border border-white/10 transition-transform duration-300 group-hover:scale-110">
              <LayoutDashboard size={15} className="text-white/60" strokeWidth={2} />
            </div>
            <span className="absolute inset-0 flex items-center justify-center text-[13px] font-medium text-white/55 tracking-wide pointer-events-none">
              {env.strapi?.label ?? "Strapi"}
            </span>
            <ChevronRight />
          </a>
        </>
      )}

      <div className="h-1" />
    </div>
  );
}

function ProductSection({ product, delay }: { product: Product; delay: number }) {
  const isRental = product.id === "rental";
  const isMetro = product.id === "metro";
  const gradientFrom = isRental
    ? "from-rose-500 via-orange-500 to-amber-500"
    : isMetro
    ? "from-blue-500 via-cyan-500 to-teal-500"
    : "from-purple-500 via-pink-500 to-indigo-500";

  return (
    <motion.div
      className="w-full flex flex-col gap-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      custom={delay}
    >
      {/* Product header */}
      <motion.div
        className="flex flex-col items-center gap-4 text-center"
        variants={profileVariants}
      >
        <div className="relative">
          <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${gradientFrom} blur-md opacity-70 scale-110`} />
          <div className={`relative w-20 h-20 rounded-full p-[3px] bg-gradient-to-br ${gradientFrom}`}>
            <div className="w-full h-full rounded-full bg-[#13131f] flex items-center justify-center overflow-hidden">
              <Avatar
                name={product.name}
                avatarUrl={product.avatarUrl}
                icon={isRental ? Car : isMetro ? Bike : undefined}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-bold text-white tracking-tight">{product.name}</h2>
          <p className="text-sm text-white/50">{product.description}</p>
        </div>
      </motion.div>

      {/* Environment cards */}
      <div className="w-full flex flex-col gap-3">
        {product.environments.map((env) => (
          <motion.div key={env.id} variants={itemVariants}>
            <EnvCard env={env} />
          </motion.div>
        ))}
      </div>
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

      <div className="relative z-10 w-full max-w-5xl flex flex-col gap-8 pb-8">
        {/* Two sections per row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-start">
          {PRODUCTS.map((product, i) => (
            <ProductSection key={product.id} product={product} delay={i * 0.15} />
          ))}
        </div>

        <p className="text-xs text-white/20 text-center mt-2">
          © {new Date().getFullYear()} Freesbe
        </p>
      </div>
    </div>
  );
}
