import { motion } from "motion/react";
import { Menu, X, Search, ShoppingBag } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-drpepper-black/80 backdrop-blur-md py-4 border-b border-white/10" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="w-10 h-10 bg-drpepper-burgundy rounded-full flex items-center justify-center font-display font-bold text-xl italic tracking-tighter">
            DP
          </div>
          <span className="font-display font-bold text-2xl tracking-tighter uppercase hidden sm:block">
            Dr Pepper
          </span>
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          {["Products", "Flavorverse", "Rewards", "About"].map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium uppercase tracking-widest hover:text-drpepper-accent transition-colors"
            >
              {item}
            </motion.a>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <button className="hover:text-drpepper-accent transition-colors">
            <Search size={20} />
          </button>
          <button className="hover:text-drpepper-accent transition-colors relative">
            <ShoppingBag size={20} />
            <span className="absolute -top-2 -right-2 bg-drpepper-accent text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </button>
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-drpepper-black border-b border-white/10 px-6 py-8"
        >
          <div className="flex flex-col gap-6">
            {["Products", "Flavorverse", "Rewards", "About"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-xl font-display font-bold uppercase tracking-tighter"
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
