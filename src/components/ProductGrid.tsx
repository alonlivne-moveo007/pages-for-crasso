import { motion } from "framer-motion";
import { PRODUCTS } from "../data/products";
import { containerVariants } from "../lib/animations";
import { ProductCard } from "./ProductCard";

export function ProductGrid() {
  return (
    <motion.div
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {PRODUCTS.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </motion.div>
  );
}
