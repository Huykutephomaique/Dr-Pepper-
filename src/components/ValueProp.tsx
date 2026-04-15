import { motion } from "motion/react";
import { Zap, Shield, Sparkles, Flame, Droplets, Wind } from "lucide-react";

const FLAVORS = [
  { icon: Zap, label: "Amaretto", desc: "Sweet & nutty undertones" },
  { icon: Shield, label: "Almond", desc: "Rich, earthy depth" },
  { icon: Sparkles, label: "Blackberry", desc: "Wild berry sweetness" },
  { icon: Flame, label: "Licorice", desc: "Bold, spicy kick" },
  { icon: Droplets, label: "Caramel", desc: "Smooth, buttery finish" },
  { icon: Wind, label: "Vanilla", desc: "Classic aromatic warmth" },
];

export default function ValueProp() {
  return (
    <section className="py-24 bg-drpepper-black relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-drpepper-burgundy/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-display font-bold tracking-tighter uppercase mb-6"
          >
            The Secret of <span className="text-drpepper-accent">23.</span>
          </motion.h2>
          <p className="max-w-2xl mx-auto text-white/60 text-lg">
            A complex symphony of flavors that shouldn't work together, but they do. 
            Perfectly balanced, endlessly mysterious.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {FLAVORS.map((flavor, i) => (
            <motion.div
              key={flavor.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-drpepper-burgundy/20 group-hover:border-drpepper-burgundy transition-all duration-500">
                <flavor.icon className="text-drpepper-accent" size={28} />
              </div>
              <h3 className="font-display font-bold uppercase tracking-widest text-sm mb-2">
                {flavor.label}
              </h3>
              <p className="text-[10px] text-white/40 uppercase tracking-widest">
                {flavor.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 p-12 rounded-[40px] bg-gradient-to-br from-drpepper-burgundy/20 to-transparent border border-white/5 text-center"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-drpepper-burgundy mb-8 shadow-2xl shadow-drpepper-burgundy/50">
            <span className="text-3xl font-display font-black italic tracking-tighter">23</span>
          </div>
          <h3 className="text-3xl font-display font-bold uppercase tracking-tighter mb-4">
            A Recipe Locked in a Vault.
          </h3>
          <p className="max-w-xl mx-auto text-white/60 mb-8">
            The exact combination of the 23 flavors is a closely guarded secret, 
            split into two halves and kept in separate safety deposit boxes. 
            Only a handful of people know the truth.
          </p>
          <button className="text-drpepper-accent font-bold uppercase tracking-[0.2em] text-xs hover:underline underline-offset-8 transition-all">
            Learn the History
          </button>
        </motion.div>
      </div>
    </section>
  );
}
