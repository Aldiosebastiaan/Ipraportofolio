import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import LombaVoli1 from "../assets/LombaVoli_1.jpg";
import LombaVoli2 from "../assets/LombaVoli_1.jpg";
import LombaVoli3 from "../assets/LombaVoli_1.jpg";

import Fest_1 from "../assets/ipra_fest1.jpg";


const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.7, ease: "easeOut" },
  }),
};

export default function EventPage() {
  const [selected, setSelected] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const kegiatan = [
    {
      id: 1,
      title: "Lomba Voli Antar RT",
      date: "17 Agustus 2025",
      desc: "Kegiatan yang dilaksanakan sebagai bentuk memeriahkan acara kemerdekaan NKRI ke-80.",
      foto: LombaVoli1,
      dokumentasi: [
        "/assets/LombaVoli_1.jpg",
        "/assets/event1_2.jpg",
        "/assets/event1_3.jpg",
      ],
    },
    {
      id: 2,
      title: "IPRA FEST 2025",
      date: "23 Agustus 2025",
      desc: "Acara malam pentas seni yang dihadirkan oleh perwakilan setiap RT dari warga RW 36.",
      foto: Fest_1,
      dokumentasi: [
        "/assets/event2_1.jpg",
        "/assets/event2_2.jpg",
      ],
    },
    {
      id: 3,
      title: "Jalan Sehat Merdeka 2025",
      date: "24 Agustus 2025",
      desc: "Puncak acara dari kegiatan dari RW 36 dengan mengundang hiburan serta hadiah menarik.",
      foto: "/assets/event3.jpg",
      dokumentasi: [
        "/assets/event3_1.jpg",
        "/assets/event3_2.jpg",
        "/assets/event3_3.jpg",
        "/assets/event3_4.jpg",
      ],
    },
  ];

  const handlePrev = () => {
    if (!selected) return;
    setCurrentIndex((prev) =>
      prev === 0 ? selected.dokumentasi.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    if (!selected) return;
    setCurrentIndex((prev) =>
      prev === selected.dokumentasi.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-8 text-white bg-gradient-to-r from-gray-900 via-black to-gray-800">
      {/* Title */}
      <motion.h1
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        custom={0}
        className="mb-30 mt-6 sm:mt-12 text-center text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-wider drop-shadow-[0_6px_6px_rgba(0,0,0,0.6)]"
      >
        DOKUMENTASI
        <span className="block">KEGIATAN</span>
      </motion.h1>

      {/* Grid dokumentasi */}
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 max-w-7xl">
        {kegiatan.map((item, i) => (
<motion.div
  key={item.id}
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  custom={i}
  className="flex flex-col overflow-hidden transition shadow-lg bg-white/10 rounded-xl hover:shadow-2xl"
>
  {/* Gambar event */}
  <img
    src={item.foto}
    alt={item.title}
    className="object-cover w-full h-56"
  />

  {/* Konten card */}
  <div className="flex flex-col flex-grow p-6">
    <div>
      <h3 className="text-2xl font-bold">{item.title}</h3>
      <p className="text-sm text-gray-400">{item.date}</p>
      <p className="mt-3 leading-relaxed text-gray-200">{item.desc}</p>
    </div>

    {/* Tombol kecil tetap di bawah kanan */}
    <div className="flex justify-end mt-auto">
      <button
        onClick={() => {
          setSelected(item);
          setCurrentIndex(0);
        }}
        className="text-sm font-medium text-blue-400 hover:text-blue-300"
      >
        Lihat Detail →
      </button>
    </div>
  </div>
</motion.div>


        ))}
      </div>


      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="w-full max-w-3xl p-6 mx-4 overflow-hidden text-black bg-white shadow-xl rounded-xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >

              {/* Galeri foto */}
              <div className="relative w-full h-80">
                <img
                  src={selected.dokumentasi[currentIndex]}
                  alt={selected.title}
                  className="object-cover w-full h-full rounded-lg"
                />

                {/* Tombol Close*/}
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="absolute p-2 text-white rounded-full bg-black/50 top-2 right-2 hover:bg-black"
                  onClick={() => setSelected(null)}
                >
                  <X size={22} />
                </motion.button>

                {/* Tombol navigasi kiri */}
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
                  className="absolute p-2 text-white -translate-y-1/2 rounded-full bg-black/50 top-1/2 left-4 hover:bg-black"
                  onClick={handlePrev}
                >
                  <ChevronLeft size={28} />
                </motion.button>

                {/* Tombol navigasi kanan */}
                <motion.button
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
                  className="absolute p-2 text-white -translate-y-1/2 rounded-full bg-black/50 top-1/2 right-4 hover:bg-black"
                  onClick={handleNext}
                >
                  <ChevronRight size={28} />
                </motion.button>
              </div>


              {/* Detail Event */}
              <div className="mt-4">
                <h3 className="text-2xl font-bold">{selected.title}</h3>
                <p className="text-sm text-gray-600">{selected.date}</p>
                <p className="mt-2 text-gray-800">{selected.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
