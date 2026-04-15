import { motion } from "motion/react";
import { ShoppingCart, ExternalLink } from "lucide-react";

const PRODUCTS = [
  {
    id: 1,
    name: "Dr Pepper Classic",
    desc: "The original 23-flavor blend that started it all.",
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=600",
    color: "from-drpepper-burgundy to-drpepper-cherry",
  },
  {
    id: 2,
    name: "Dr Pepper Cherry",
    desc: "A smooth, sweet twist on the classic flavor profile.",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef03a7403f?auto=format&fit=crop&q=80&w=600",
    color: "from-red-900 to-drpepper-burgundy",
  },
  {
    id: 3,
    name: "Dr Pepper Strawberries & Cream",
    desc: "The newest obsession. Creamy, fruity, and bold.",
    image: "https://images.unsplash.com/photo-1543253687-c931c8e01820?auto=format&fit=crop&q=80&w=600",
    color: "from-pink-900 to-drpepper-burgundy",
  },
  {
    id: 4,
    name: "Dr Pepper Zero Sugar",
    desc: "All the flavor, none of the sugar. Zero compromises.",
    image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?auto=format&fit=crop&q=80&w=600",
    color: "from-gray-900 to-black",
  },
];

export default function ProductShowcase() {
  return (
    <section id="products" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter uppercase mb-4">
            Pick Your <span className="text-drpepper-accent">Poison.</span>
          </h2>
          <p className="text-white/60 text-lg">
            Whether you're a classic purist or a flavor explorer, there's a Dr Pepper for your unique personality.
          </p>
        </div>
        <button className="px-6 py-3 border border-white/10 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-white/5 transition-all">
          View All Products
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {PRODUCTS.map((product, i) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -10 }}
            className="group relative bg-white/5 rounded-3xl overflow-hidden border border-white/10"
          >
            <div className={`absolute inset-0 bg-gradient-to-b ${product.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
            
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-8 relative z-10">
              <h3 className="text-2xl font-display font-bold tracking-tighter mb-2 group-hover:text-drpepper-accent transition-colors">
                {product.name}
              </h3>
              <p className="text-white/50 text-sm mb-6 line-clamp-2">
                {product.desc}
              </p>
              
              <div className="flex items-center gap-4">
                <button className="flex-1 bg-white text-drpepper-black py-3 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-drpepper-accent hover:text-white transition-all flex items-center justify-center gap-2">
                  <ShoppingCart size={16} /> Buy Now
                </button>
                <button className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all">
                  <ExternalLink size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
