/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import ProductShowcase from "./components/ProductShowcase";
import ValueProp from "./components/ValueProp";
import FlavorQuiz from "./components/FlavorQuiz";
import BrandStory from "./components/BrandStory";
import LimitedEdition from "./components/LimitedEdition";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-drpepper-black selection:bg-drpepper-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <ProductShowcase />
        <ValueProp />
        <FlavorQuiz />
        <BrandStory />
        <LimitedEdition />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
