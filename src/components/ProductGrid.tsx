import { motion } from "framer-motion";
import { PRODUCTS } from "../data/products";
import { containerVariants } from "../lib/animations";
import { ProductCard } from "./ProductCard";

// Two independent stacks, so each card's column and position are exactly what
// products.ts says — unlike a CSS multi-column box, where the browser picks the
// break point by height and the order drifts whenever a card grows or shrinks.
export function ProductGrid() {
  const left = PRODUCTS.filter((p) => (p.column ?? 1) === 1);
  const right = PRODUCTS.filter((p) => p.column === 2);

  return (
    <motion.div
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col gap-8">
        {left.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="flex flex-col gap-8">
        {right.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </motion.div>
  );
}
