import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { UsersRound } from "lucide-react";
import WhatWeDo from "../components/WhatWeDo";
import Impact from "../components/Impact";
import StoriesOfChange from "../components/StoriesOfChange";

// SplitText component for fancy heading animation
const SplitText = ({ text, delayStep = 0.03, className }) => {
  const letters = useMemo(() => text.split(""), [text]);

  return (
    <h2 className={`inline-block overflow-hidden ${className}`}>
      {letters.map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.45,
            delay: i * delayStep,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </h2>
  );
};

const BoardOfTrusteesSection = () => {
  const trustees = [
    {
      name: "Niranjan Patnaik",
      role: "Founder & Chairman",
      img: "/CBI-AAP-2025.jpg",
    },
    {
      name: "Anjali Mishra",
      role: "Co-Founder, Women Empowerment Lead",
      img: "/trustee2.jpg",
    },
    {
      name: "Rohit Sen",
      role: "Finance & Operations Director",
      img: "/trustee3.jpg",
    },
  ];

  return (
    <section
      className="w-full py-24 md:py-32 relative overflow-hidden"
      style={{
        background: "url('/bg.png') center/cover no-repeat",
      }}
    >
      {/* Decorative assets */}
      <img
        src="/hirondelle-4.png"
        className="absolute top-10 right-10 w-40 opacity-20"
      />
      <img
        src="/brush-patch.webp"
        className="absolute bottom-0 left-0 w-60 opacity-30"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">

        {/* Heading */}
        <div className="text-center mb-14">
          <div style={{ fontFamily: "'Gloria Hallelujah', cursive" }}>
            <SplitText
              text="Board of Trustees"
              className="text-4xl md:text-5xl font-extrabold text-[#0A4C8B]"
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-gray-600 max-w-2xl mx-auto mt-4"
          >
            “Guiding the mission, shaping the vision — our trustees stand as pillars of hope,
            compassion, and leadership at BNP Charitable Trust.”
          </motion.p>
        </div>

        {/* Trustee Message Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 mb-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-[#0F72CE] mb-4">
              Message from the Board
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              At BNP Charitable Trust, our purpose is rooted in service, dignity, and compassion.
              We believe that every act of kindness creates a ripple effect that touches
              thousands of lives.  
              <br />
              <br />
              Our Board of Trustees is committed to ensuring transparency, accountability,
              and impact-driven action while supporting sustainable change for generations to come.
            </p>
          </motion.div>

          <motion.img
            src="/CBI-AAP-2025.jpg"
            alt="Trustee Leader"
            className="rounded-3xl w-full h-[400px] object-cover shadow-xl"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          />
        </div>

        {/* Trustees Grid */}
        <h3 className="text-3xl font-bold text-[#0F72CE] text-center mb-10">
          Meet Our Trustees
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {trustees.map((t, idx) => (
            <motion.div
              key={idx}
              className="rounded-3xl bg-white p-6 shadow-xl border border-gray-100 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <img
                src={t.img}
                alt={t.name}
                className="w-40 h-40 mx-auto rounded-full object-cover mb-4 shadow-md"
              />

              <h4 className="text-xl font-bold text-[#0A4C8B]">{t.name}</h4>
              <p className="text-gray-500 text-sm mb-3">{t.role}</p>

              <p className="text-gray-600 text-sm leading-relaxed">
                Dedicated to community upliftment, transparency, and impactful humanitarian efforts.
              </p>
            </motion.div>
          ))}
        </div>

      </div>
      <WhatWeDo/>
<Impact/>
<StoriesOfChange/>
    </section>
  );
};

export default BoardOfTrusteesSection;
