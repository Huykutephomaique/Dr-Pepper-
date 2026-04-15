import { motion } from "motion/react";

const STATS = [
  "23 SECRET FLAVORS",
  "ESTABLISHED 1885",
  "LOVED BY MILLIONS",
  "NOT FOR EVERYONE",
  "THE ORIGINAL REBEL",
  "CULT FAVORITE",
  "UNEXPECTED BLEND",
];

export default function TrustBar() {
  return (
    <div className="py-12 bg-drpepper-burgundy/10 border-y border-white/5 overflow-hidden">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-20 items-center"
        >
          {[...STATS, ...STATS].map((stat, i) => (
            <div key={i} className="flex items-center gap-6">
              <span className="text-2xl md:text-4xl font-display font-black tracking-tighter opacity-20 uppercase">
                {stat}
              </span>
              <div className="w-2 h-2 rounded-full bg-drpepper-accent" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
