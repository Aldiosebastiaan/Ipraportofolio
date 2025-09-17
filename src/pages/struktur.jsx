import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import fotoKetua from "../assets/ketua.png";
import fotoWakil from "../assets/wakil_ketua.png";

const Struktur = () => {
    const [selected, setSelected] = useState(null);

    const strukturData = [
        {
            id: "ketua",
            nama: "Fernando Arya Ramadhani",
            jabatan: "Ketua",
            foto: fotoKetua,
            deskripsi:
                "Merupakan Ketua organisasi yang bertanggung jawab atas seluruh kegiatan.",
        },
        {
            id: "wakil",
            nama: "Efendi Widhi Kusama Dirgantara Putra, S.Si, S.H, M.H",
            jabatan: "Wakil Ketua",
            foto: fotoWakil,
            deskripsi:
                "Wakil Ketua membantu Ketua dalam menjalankan tugas dan fungsi organisasi.",
        },
    ];

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 40, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 15,
            },
        },
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 text-white bg-gradient-to-r from-gray-900 via-black to-gray-800">
            {/* Title */}
            <motion.h1
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-30 mt-6 sm:mt-12 text-center text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-wider text-white drop-shadow-[0_6px_6px_rgba(0,0,0,0.6)]"
            >
                STRUKTUR
                <span className="block">ORGANISASI</span>
            </motion.h1>

            {/* Grid */}
            <motion.div
                className="grid grid-cols-1 gap-16 mb-10 md:grid-cols-2"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
            >
                {strukturData.map((person) => (
                    <motion.div
                        key={person.id}
                        variants={cardVariants}
                        className="flex flex-col items-center cursor-pointer"
                        whileHover={{ y: -12, scale: 1.05 }}
                        onClick={() => setSelected(person)}
                    >
                        <div className="relative overflow-hidden rounded-lg shadow-2xl w-78 h-120">
  {/* Foto */}
  <motion.img
    src={person.foto}
    alt={person.nama}
    className="object-cover w-full h-full rounded-lg"
    initial={{ opacity: 0, y: 40, scale: 0.9 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  />

  {/* Shine effect */}
  <motion.div
    className="absolute inset-0 rounded-lg pointer-events-none"
    initial={{ x: "-150%" }}
    animate={{ x: "150%" }}
    transition={{
      repeat: Infinity,
      repeatType: "loop",
      duration: 3,
      ease: "linear",
    }}
  >
    <div className="w-1/3 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
  </motion.div>

  {/* Bayangan glow di bawah */}
  <div className="absolute w-56 h-6 -translate-x-1/2 rounded-full -bottom-8 left-1/2 bg-white/20 blur-xl" />
</div>



                        <p className="mt-8 text-2xl font-semibold">{person.nama}</p>
                        <p className="text-gray-400">{person.jabatan}</p>
                    </motion.div>
                ))}
            </motion.div>

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
                            className="w-full max-w-md p-6 mx-4 text-black bg-white rounded-xl"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selected.foto}
                                alt={selected.nama}
                                className="object-cover w-full mb-4 rounded-lg h-102"
                            />
                            <h3 className="text-2xl font-bold">{selected.nama}</h3>
                            <p className="text-gray-600">{selected.jabatan}</p>
                            <p className="mt-4 text-gray-800">{selected.deskripsi}</p>

                            <button
                                className="px-4 py-2 mt-6 text-white transition bg-gray-900 rounded-lg hover:bg-gray-700"
                                onClick={() => setSelected(null)}
                            >
                                Tutup
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Struktur;
