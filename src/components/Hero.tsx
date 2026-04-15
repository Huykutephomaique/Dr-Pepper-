import { motion } from "motion/react";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Video/Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-drpepper-black/60 via-drpepper-black/40 to-drpepper-black z-10" />
        <img
          src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=2000"
          alt="Dr Pepper Splash"
          className="w-full h-full object-cover scale-110 animate-pulse-slow"
          referrerPolicy="no-referrer"
        />
        {/* Simulated Bubbles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: "110%", x: `${Math.random() * 100}%`, opacity: 0 }}
            animate={{
              y: "-10%",
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "linear",
            }}
            className="absolute w-1 h-1 bg-white rounded-full z-20"
          />
        ))}
      </div>

      <div className="relative z-30 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-drpepper-burgundy/30 border border-drpepper-burgundy/50 text-xs font-bold uppercase tracking-[0.3em] text-drpepper-accent">
            The Original 23
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter leading-[0.9] mb-8 uppercase">
            Not For <br />
            <span className="text-gradient">Everyone.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/70 mb-10 leading-relaxed font-light">
            A unique blend of 23 secret flavors that defies explanation. 
            Bold, quirky, and unapologetically original since 1885.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-drpepper-burgundy rounded-full font-bold uppercase tracking-widest overflow-hidden transition-all hover:bg-drpepper-accent"
            >
              <span className="relative z-10 flex items-center gap-2">
                Try It Now <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 hover:bg-white/10 transition-all font-bold uppercase tracking-widest"
            >
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                <Play size={14} fill="white" />
              </div>
              Explore the Flavorverse
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-white/40">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-drpepper-accent to-transparent" />
      </motion.div>
    </section>
  );
}
