import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Sparkles, ArrowRight, RefreshCcw } from "lucide-react";

const QUESTIONS = [
  {
    id: 1,
    text: "How do you start your morning?",
    options: [
      { label: "With a bold challenge", value: "classic" },
      { label: "With a sweet surprise", value: "cherry" },
      { label: "With a smooth vibe", value: "cream" },
      { label: "With zero distractions", value: "zero" },
    ],
  },
  {
    id: 2,
    text: "What's your ideal weekend?",
    options: [
      { label: "Exploring hidden gems", value: "classic" },
      { label: "A high-energy party", value: "cherry" },
      { label: "Chilling by the beach", value: "cream" },
      { label: "Mastering a new skill", value: "zero" },
    ],
  },
  {
    id: 3,
    text: "Pick a color palette:",
    options: [
      { label: "Deep Burgundy & Gold", value: "classic" },
      { label: "Vibrant Red & Black", value: "cherry" },
      { label: "Soft Pink & White", value: "cream" },
      { label: "Matte Black & Silver", value: "zero" },
    ],
  },
];

const RESULTS = {
  classic: {
    name: "The Original Rebel",
    product: "Dr Pepper Classic",
    desc: "You're a purist who appreciates the complex things in life. You don't follow trends—you set them.",
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=400",
  },
  cherry: {
    name: "The Wild Card",
    product: "Dr Pepper Cherry",
    desc: "You're bold, energetic, and always have a trick up your sleeve. Life is a party, and you're the guest of honor.",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef03a7403f?auto=format&fit=crop&q=80&w=400",
  },
  cream: {
    name: "The Smooth Operator",
    product: "Dr Pepper Strawberries & Cream",
    desc: "You're sophisticated, calm, and collected. You know that the best things in life are smooth and sweet.",
    image: "https://images.unsplash.com/photo-1543253687-c931c8e01820?auto=format&fit=crop&q=80&w=400",
  },
  zero: {
    name: "The High Achiever",
    product: "Dr Pepper Zero Sugar",
    desc: "You're focused, efficient, and demand the best without any of the fluff. You want it all, and you get it.",
    image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?auto=format&fit=crop&q=80&w=400",
  },
};

export default function FlavorQuiz() {
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({});
  const [result, setResult] = useState<keyof typeof RESULTS | null>(null);

  const handleAnswer = (value: string) => {
    const newScores = { ...scores, [value]: (scores[value] || 0) + 1 };
    setScores(newScores);

    if (step < QUESTIONS.length - 1) {
      setStep(step + 1);
    } else {
      // Calculate result
      const winner = Object.entries(newScores).reduce((a, b) => (a[1] > b[1] ? a : b))[0];
      setResult(winner as keyof typeof RESULTS);
    }
  };

  const reset = () => {
    setStep(0);
    setScores({});
    setResult(null);
  };

  return (
    <section id="flavorverse" className="py-24 px-6 bg-drpepper-burgundy/5">
      <div className="max-w-4xl mx-auto glass-panel rounded-[40px] overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-12 flex flex-col justify-center bg-drpepper-burgundy/20">
            <Sparkles className="text-drpepper-accent mb-6" size={32} />
            <h2 className="text-4xl font-display font-bold tracking-tighter uppercase mb-4">
              Find Your <br />
              <span className="text-drpepper-accent">Flavor Soul.</span>
            </h2>
            <p className="text-white/60 mb-8">
              Answer 3 quick questions to discover which Dr Pepper blend matches your personality.
            </p>
            <div className="flex gap-2">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className={`h-1 flex-1 rounded-full transition-all duration-500 ${
                    i <= step ? "bg-drpepper-accent" : "bg-white/10"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="p-12 bg-drpepper-black/40 min-h-[400px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {!result ? (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex flex-col gap-6"
                >
                  <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/40">
                    Question 0{step + 1}
                  </span>
                  <h3 className="text-2xl font-display font-bold tracking-tighter">
                    {QUESTIONS[step].text}
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    {QUESTIONS[step].options.map((option) => (
                      <button
                        key={option.label}
                        onClick={() => handleAnswer(option.value)}
                        className="p-4 rounded-2xl border border-white/10 hover:border-drpepper-accent hover:bg-drpepper-accent/10 text-left transition-all group flex items-center justify-between"
                      >
                        <span className="font-medium">{option.label}</span>
                        <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                      </button>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center"
                >
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-drpepper-accent mb-6">
                    <img
                      src={RESULTS[result].image}
                      alt={RESULTS[result].product}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-[0.3em] text-drpepper-accent mb-2 block">
                    Your Match
                  </span>
                  <h3 className="text-3xl font-display font-bold tracking-tighter mb-4">
                    {RESULTS[result].name}
                  </h3>
                  <p className="text-white/60 text-sm mb-8">
                    {RESULTS[result].desc}
                  </p>
                  <div className="flex flex-col gap-3">
                    <button className="w-full py-4 bg-drpepper-accent rounded-2xl font-bold uppercase tracking-widest text-sm hover:brightness-110 transition-all">
                      Shop {RESULTS[result].product}
                    </button>
                    <button
                      onClick={reset}
                      className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors"
                    >
                      <RefreshCcw size={14} /> Retake Quiz
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
