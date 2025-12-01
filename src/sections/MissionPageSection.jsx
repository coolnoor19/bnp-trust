import React, { useMemo } from "react";
import { motion } from "framer-motion";

// Split Text Utility Component
const SplitText = ({ text, delayStep = 0.03, className = "" }) => {
  const letters = useMemo(() => text.split(""), [text]);

  return (
    <h2
      aria-hidden="true"
      className={`inline-block overflow-hidden ${className}`}
      style={{ lineHeight: 1.05 }}
    >
      {letters.map((char, i) => {
        const letter = char === " " ? "\u00A0" : char;
        return (
          <motion.span
            key={i}
            style={{ display: "inline-block" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.45,
              delay: i * delayStep,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.6 }}
          >
            {letter}
          </motion.span>
        );
      })}
    </h2>
  );
};

const MissionPageSection = () => {
  return (
    <section
      className="w-full py-24 md:py-32 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom right, #E9F5FF, #E6FFF3, #F5FBFF)",
      }}
    >
      {/* Background Blob */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 0.25, scale: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="absolute top-10 left-10 w-60 h-60 rounded-full bg-[#CDE6FF] blur-3xl opacity-40"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* MAIN HEADING */}
        <div className="text-center mb-12">
          <div style={{ fontFamily: "'Gloria Hallelujah', cursive" }}>
            <SplitText
              text="Our Mission — Empower Change"
              className="text-4xl md:text-5xl font-extrabold text-[#0A4C8B]"
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg"
          >
            “We are driven by the belief that compassion, education, and collective effort
            can rewrite the future of every child and every community.”
          </motion.p>
        </div>

        {/* GRID BLOCKS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-[#0F72CE] mb-4">Our Core Mission</h3>
            <p className="text-gray-700 leading-relaxed text-md">
              We work to uplift communities through education, healthcare, nutrition,
              empowerment, and opportunity.  
              Our mission is rooted in dignity, equality, and sustainable growth.
            </p>
          </motion.div>

          {/* Programs Extension */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-[#0F72CE] mb-4">
              What We Work On
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li>📘 Education access for every child</li>
              <li>🥗 Food security programs</li>
              <li>👩‍🦰 Women empowerment initiatives</li>
              <li>🚑 Healthcare and medical support drives</li>
              <li>🌱 Sustainable growth opportunities</li>
            </ul>
          </motion.div>

          {/* Vision Expansion */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-[#0F72CE] mb-4">Our Long-Term Vision</h3>
            <p className="text-gray-700 leading-relaxed text-md">
              To build a society that thrives on equality, compassion, and empowerment.
              A world where no child sleeps hungry, no woman is left behind,
              and communities flourish through opportunity.
            </p>
          </motion.div>

        </div>

        {/* IMPACT QUOTE */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="mt-20 bg-[#0A4C8B] text-white rounded-3xl p-10 shadow-xl text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            “Impact begins with you.”
          </h3>
          <p className="text-white/90 text-lg max-w-3xl mx-auto">
            Every contribution — big or small — becomes a stepping stone  
            toward a brighter future for those who need it most.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default MissionPageSection;
