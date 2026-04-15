import { motion } from "motion/react";
import { Send } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter uppercase mb-8">
            Ready to <span className="text-drpepper-accent">Join the Cult?</span>
          </h2>
          <p className="text-white/60 text-lg mb-12 max-w-2xl mx-auto">
            Get exclusive access to limited drops, secret flavors, and the latest news from the Flavorverse. 
            No spam, just pure originality.
          </p>

          <form className="relative max-w-md mx-auto mb-12" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-white/5 border border-white/10 rounded-full py-5 px-8 outline-none focus:border-drpepper-accent transition-all text-sm"
            />
            <button className="absolute right-2 top-2 bottom-2 px-6 bg-drpepper-accent rounded-full font-bold uppercase tracking-widest text-[10px] flex items-center gap-2 hover:brightness-110 transition-all">
              Join Now <Send size={14} />
            </button>
          </form>

          <div className="flex flex-wrap justify-center gap-8 text-white/40">
            <div className="flex flex-col items-center">
              <span className="text-2xl font-display font-bold text-white">100%</span>
              <span className="text-[10px] uppercase tracking-widest">Original</span>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="flex flex-col items-center">
              <span className="text-2xl font-display font-bold text-white">23</span>
              <span className="text-[10px] uppercase tracking-widest">Flavors</span>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="flex flex-col items-center">
              <span className="text-2xl font-display font-bold text-white">∞</span>
              <span className="text-[10px] uppercase tracking-widest">Possibilities</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
