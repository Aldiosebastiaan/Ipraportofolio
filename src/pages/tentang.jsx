import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import image_ipra from "../assets/ipra_geng.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.7, ease: "easeOut" },
  }),
};

export default function Tentang() {
  const [activeSection, setActiveSection] = useState(null);

  const handleToggle = (section) => {
    setActiveSection((prev) => (prev === section ? null : section));
  };

  return (
    <div className="flex items-start justify-center min-h-screen p-6 sm:p-8 bg-gradient-to-r from-gray-900 via-black to-gray-800">
      <div className="relative w-full max-w-7xl">
        {/* Title */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          custom={0}
          className="mt-6 sm:mt-12 text-center text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-wider text-white drop-shadow-[0_6px_6px_rgba(0,0,0,0.6)]"
        >
          TENTANG
          <span className="block">KAMI</span>
        </motion.h1>

        {/* Content */}
        <div className="grid items-center grid-cols-1 gap-10 mt-12 md:grid-cols-2">
          {/* Left: Visi & Misi */}
          <div className="px-4 py-6 sm:px-6">
            <div className="flex flex-col gap-12 sm:gap-16">
              {/* VISI */}
              <motion.section
                onClick={() => handleToggle("visi")}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="space-y-4 cursor-pointer"
              >
                <motion.h2
                  animate={{ y: activeSection === "visi" ? -10 : 0 }}
                  transition={{ duration: 0.4 }}
                  className={`text-5xl font-light sm:text-6xl md:text-7xl ${
                    activeSection === "visi" ? "text-white" : "text-gray-400"
                  }`}
                >
                  VISI
                </motion.h2>

                {/* Garis dengan animasi */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="h-[2px] w-full bg-gray-300/60 origin-left"
                />

                <AnimatePresence>
                  {activeSection === "visi" && (
                    <motion.div
                      key="visi-content"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-xl leading-relaxed text-justify text-gray-100/90">
                        Mewujudkan pemuda dan remaja yang beriman, kreatif,
                        bersatu, dan berdaya guna bagi masyarakat, bangsa, dan
                        negara.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.section>

              {/* MISI */}
              <motion.section
                onClick={() => handleToggle("misi")}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="space-y-4 cursor-pointer"
              >
                <motion.h2
                  animate={{ y: activeSection === "misi" ? -10 : 0 }}
                  transition={{ duration: 0.4 }}
                  className={`text-5xl font-light sm:text-6xl md:text-7xl ${
                    activeSection === "misi" ? "text-white" : "text-gray-400"
                  }`}
                >
                  MISI
                </motion.h2>

                {/* Garis dengan animasi */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="h-[2px] w-full bg-gray-300/60 origin-left"
                />

                <AnimatePresence>
                  {activeSection === "misi" && (
                    <motion.ul
                      key="misi-content"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="max-w-xl space-y-2 leading-relaxed text-justify list-disc list-inside text-gray-100/90"
                    >
                      {[
                        "Meningkatkan keimanan dan ketakwaan pemuda-remaja melalui kegiatan keagamaan dan pembinaan karakter.",
                        "Menumbuhkan rasa kebersamaan, solidaritas, dan kepedulian sosial di kalangan pemuda dan remaja.",
                        "Turut berkontribusi dalam pembangunan masyarakat melalui kegiatan positif, edukatif, dan bermanfaat.",
                      ].map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -30 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 30 }}
                          transition={{ delay: i * 0.2, duration: 0.5 }}
                        >
                          {item}
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </motion.section>
            </div>
          </div>

          {/* Right: Photo with hover */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center px-4 sm:px-6 md:justify-end"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="w-full sm:w-[580px] md:w-[640px] lg:w-[720px] shadow-2xl rounded-xl overflow-hidden bg-white"
            >
              <img
                src={image_ipra}
                alt="Foto kegiatan"
                className="object-cover w-full h-72 sm:h-96 md:h-[28rem] transition-transform duration-300"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
