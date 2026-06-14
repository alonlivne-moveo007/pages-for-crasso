import { AmbientBackground } from "./components/AmbientBackground";
import { PageHeader } from "./components/PageHeader";
import { ProductGrid } from "./components/ProductGrid";
import { ThemeToggle } from "./components/ThemeToggle";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#0b0b1a] flex items-start justify-center px-6 sm:px-10 py-12">
      <AmbientBackground />

      <div className="fixed top-5 right-5 sm:top-6 sm:right-6 z-20">
        <ThemeToggle />
      </div>

      <div className="relative z-10 w-full max-w-[1700px] flex flex-col gap-12 pb-8">
        <PageHeader />
        <ProductGrid />
        <p className="text-xs text-white/20 text-center">
          © {new Date().getFullYear()} Freesbe
        </p>
      </div>
    </div>
  );
}
