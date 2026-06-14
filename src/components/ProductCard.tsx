import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { Product } from "../types";
import { EASE, cardVariants } from "../lib/animations";
import { EnvRow } from "./EnvRow";

export function ProductCard({ product }: { product: Product }) {
  const [isOpen, setIsOpen] = useState(true);
  const SymbolIcon = product.icon;

  return (
    <motion.div className="relative w-full" variants={cardVariants}>
      {/* Card glow halo */}
      <div
        className={`absolute -inset-2 rounded-3xl bg-gradient-to-br ${product.gradient} opacity-20 blur-2xl pointer-events-none`}
      />

      {/* Card surface */}
      <div className="relative rounded-2xl border border-white/10 bg-[#13131f]/80 backdrop-blur-md overflow-hidden">
        {/* Header */}
        <button
          onClick={() => setIsOpen((o) => !o)}
          className="flex items-center justify-between w-full px-6 pt-6 pb-4 text-left focus:outline-none"
        >
          <div className="flex items-center gap-3 min-w-0">
            <div className={`flex items-center justify-center w-11 h-11 rounded-xl flex-shrink-0 bg-gradient-to-br ${product.gradient} shadow-md`}>
              <SymbolIcon size={22} className="text-white" strokeWidth={2} />
            </div>
            <h2 className="text-xl font-bold text-white tracking-tight truncate">{product.name}</h2>
          </div>
          <ChevronDown
            size={20}
            className={`text-white/40 flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-0" : "-rotate-90"}`}
          />
        </button>

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
              <div className="pb-3">
                {product.environments.map((env) => (
                  <EnvRow key={env.id} env={env} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
