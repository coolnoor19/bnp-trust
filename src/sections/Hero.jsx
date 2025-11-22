import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: true, margin: "-80px" });

  const textVariants = {
    hidden: { opacity: 0, x: -60 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.35,
        delay: i * 0.2,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div
      className="w-full bg-cover bg-center bg-no-repeat"
    //   style={{
    //     backgroundImage: `url('/bnplogo.png')`, // <-- add your background here
    //   }}
    >
      {/* Soft overlay */}
      <div className="w-full min-h-screen bg-[#BFE2F3]/90 px-6 md:px-12 lg:px-20 pt-32 pb-20 flex justify-center">
        <div className="max-w-7xl w-full flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-28">

          {/* LEFT CONTENT */}
          <div className="flex-1" ref={textRef}>
            <motion.h1
              custom={0}
              variants={textVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-4xl md:text-5xl font-extrabold text-black leading-tight"
            >
              Together, We Can Change Lives
            </motion.h1>

            <motion.p
              custom={1}
              variants={textVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-lg md:text-xl font-semibold text-black mt-4"
            >
              {/* Nous donnons le pouvoir médiatique à nos partenaires */}
            </motion.p>

            <motion.p
              custom={2}
              variants={textVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-md md:text-lg text-black/80 mt-6 leading-relaxed"
            >
              Empowering underprivileged <span className="font-bold">communities through education, healthcare,</span>and social support—one step, one smile, one life at a time.
              <span className="font-bold"> one smile, one life at a time </span>
             
            </motion.p>

            <motion.a
              custom={3}
              variants={textVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block mt-8 px-8 py-4 bg-black text-white rounded-full text-sm md:text-md tracking-wide shadow-lg hover:bg-black/90 transition"
            >
              Support Our Mission
            </motion.a>
          </div>

          {/* RIGHT IMAGE CARD */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 flex justify-center"
          >
            <motion.div
              className="bg-white/60 backdrop-blur-md border border-black/10 rounded-xl p-6 shadow-xl"
              style={{ rotate: "-3deg" }}
              whileHover={{ rotate: "0deg", scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <img
                src="/bnplogo.png"
                className="w-[280px] md:w-[350px] lg:w-[420px]"
                alt="BNP Logo"
              />

              <div className="mt-4 text-center">
                <h3 className="text-xl font-semibold text-black">BNP</h3>
                <p className="text-md text-black/80">
                  Charitable Trust <br /> Founder – Niranjan Patnaik
                </p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
