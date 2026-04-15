import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Clock, AlertCircle } from "lucide-react";

export default function LimitedEdition() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 12,
    minutes: 45,
    seconds: 30,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto relative rounded-[40px] overflow-hidden bg-gradient-to-r from-drpepper-burgundy to-drpepper-cherry p-12 md:p-20">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=1000"
            alt="Splash"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-widest mb-8">
              <AlertCircle size={14} className="text-drpepper-accent" />
              Limited Drop
            </div>
            <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter uppercase mb-6 leading-none">
              Dark Berry <br />
              <span className="text-white/40">Is Back.</span>
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-md">
              The fan-favorite flavor returns for a limited time. 
              Once it's gone, it's gone. Don't miss out on the mystery.
            </p>
            
            <div className="flex gap-4 md:gap-8 mb-10">
              {[
                { label: "Hours", value: timeLeft.hours },
                { label: "Mins", value: timeLeft.minutes },
                { label: "Secs", value: timeLeft.seconds },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-1">
                    {String(item.value).padStart(2, "0")}
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-white/40">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            <button className="px-10 py-4 bg-white text-drpepper-black rounded-full font-bold uppercase tracking-widest hover:bg-drpepper-accent hover:text-white transition-all">
              Secure Your Pack
            </button>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            className="relative aspect-square max-w-md mx-auto lg:ml-auto"
          >
            <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl animate-pulse" />
            <img
              src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=800"
              alt="Limited Edition Can"
              className="relative z-10 w-full h-full object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
