import { motion } from "framer-motion";
import { PRODUCTS } from "../data/products";
import { containerVariants } from "../lib/animations";
import { ProductCard } from "./ProductCard";

export function ProductGrid() {
  return (
    <motion.div
      className="columns-1 lg:columns-2 gap-8"
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
