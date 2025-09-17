import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Tentang from './tentang.jsx';
import { div } from "framer-motion/client";
import Struktur from "./struktur.jsx";
import EventPage from "./eventpage.jsx";
import Kontak from "./kontak.jsx";

const Home = () => {
  const fullText = "“Bersatu untuk Warga, Berdaya untuk Sesama.”";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 70);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
    <section className="flex flex-col items-center justify-center px-6 py-20 md:flex-row md:gap-12 bg-gradient-to-r from-gray-900 via-black to-gray-800">
      {/* === TEKS === */}
      <motion.div
        className="space-y-6 text-center text-white md:w-1/2 md:text-left md:ml-30"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="mt-20 text-5xl font-bold leading-snug text-white md:text-7xl"
          animate={{
            textShadow: [
              "0 0 5px rgba(255,255,255,0.6)",
              "0 0 12px rgba(255,255,255,0.9)",
              "0 0 5px rgba(255,255,255,0.6)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          {displayedText}
          <span className="animate-pulse">|</span>
        </motion.h1>
      </motion.div>

      {/* === LOGO === */}
      <motion.div
        className="flex justify-center mt-30 md:w-1/2 md:mt-28"
        initial={{ scale: 0, rotate: -15, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3, type: "spring" }}
        whileHover={{ scale: 1.1, rotate: 5 }}
      >
        <img
          src="/logo_ipra.png"
          alt="IPRA 36"
          className="h-auto w-96 drop-shadow-2xl"
        />
      </motion.div>
    </section>

     <Tentang />
     <Struktur/>
     <EventPage/>
     <Kontak/>
  </div>
  );
};

export default Home;
