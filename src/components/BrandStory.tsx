import { motion } from "motion/react";

const STORIES = [
  {
    title: "Be Yourself.",
    desc: "In a world of copies, be an original. Dr Pepper has been doing it since 1885.",
    image: "https://images.unsplash.com/photo-1523301343968-6a6ebf63c672?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Bold Choices.",
    desc: "We don't play it safe. Neither should you. Every sip is a statement.",
    image: "https://images.unsplash.com/photo-1514525253344-f814d074358a?auto=format&fit=crop&q=80&w=800",
  },
];

export default function BrandStory() {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-12">
          {STORIES.map((story, i) => (
            <motion.div
              key={story.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group"
            >
              <h3 className="text-4xl md:text-5xl font-display font-bold tracking-tighter uppercase mb-4 group-hover:text-drpepper-accent transition-colors">
                {story.title}
              </h3>
              <p className="text-white/60 text-lg leading-relaxed max-w-md">
                {story.desc}
              </p>
            </motion.div>
          ))}
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="pt-8 border-t border-white/10"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-drpepper-black overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${i}`} alt="User" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
              <span className="text-sm font-bold uppercase tracking-widest text-white/40">
                Join 10M+ Fans
              </span>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 gap-6 h-[600px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-[40px] overflow-hidden h-full"
          >
            <img
              src={STORIES[0].image}
              alt="Lifestyle"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="flex flex-col gap-6 h-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[40px] overflow-hidden flex-1"
            >
              <img
                src={STORIES[1].image}
                alt="Lifestyle"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-drpepper-burgundy rounded-[40px] p-8 flex flex-col justify-end"
            >
              <span className="text-5xl font-display font-black italic tracking-tighter mb-2">139</span>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/60">Years of Originality</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
