import { motion } from "motion/react";
import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-drpepper-black border-t border-white/5 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-drpepper-burgundy rounded-full flex items-center justify-center font-display font-bold text-lg italic tracking-tighter">
                DP
              </div>
              <span className="font-display font-bold text-xl tracking-tighter uppercase">
                Dr Pepper
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              The oldest major soft drink in America. 
              A unique blend of 23 flavors that has been 
              unapologetically original since 1885.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-drpepper-accent hover:border-drpepper-accent transition-all group"
                >
                  <Icon size={18} className="text-white/60 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold uppercase tracking-widest text-xs mb-8">Products</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li><a href="#" className="hover:text-white transition-colors">Dr Pepper Classic</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Dr Pepper Cherry</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Dr Pepper Zero Sugar</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Limited Editions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold uppercase tracking-widest text-xs mb-8">Company</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold uppercase tracking-widest text-xs mb-8">Legal</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Settings</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Accessibility</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/5 gap-6">
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/20">
            © 2026 Dr Pepper/Seven Up, Inc. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/20">Designed for Originals</span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/20">Est. 1885</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
