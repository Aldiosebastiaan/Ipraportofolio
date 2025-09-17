import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
};

export default function Kontak() {
    return (
        <div className="flex flex-col min-h-screen text-white bg-gradient-to-r from-gray-900 via-black to-gray-800">
            {/* Main content */}
            <main className="flex flex-col items-center flex-grow px-10 pt-10 pb-6">
                {/* Judul */}
                <motion.h1
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.6 }}
                    custom={0}
                    className="mb-15 mt-30 text-center text-4xl sm:text-5xl font-extrabold tracking-wide drop-shadow-[0_6px_6px_rgba(0,0,0,0.5)]"
                >
                    KONTAK & INFORMASI IPRA
                </motion.h1>

                {/* Isi Kontak */}
                <div className="grid w-full max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Alamat */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.4 }}
                        custom={1}
                        className="p-6 transition shadow-lg rounded-xl bg-white/10 hover:shadow-2xl"
                    >
                        <h3 className="mb-2 text-xl font-semibold">Alamat Sekretariat</h3>
                        <p className="leading-relaxed text-gray-300">
                           📍 Perumahan Taman Batursari Indah RW 36, Desa Batursari, Kec, Mranggen, Kab.Demak
                        </p>
                    </motion.div>

                    {/* Kontak */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.4 }}
                        custom={2}
                        className="p-6 transition shadow-lg rounded-xl bg-white/10 hover:shadow-2xl"
                    >
                        <h3 className="mb-2 text-xl font-semibold">Kontak</h3>
                        <p className="text-gray-300">📞 0812-3456-7890</p>
                        <p className="text-gray-300">✉️ ipra36official@gmail.com</p>
                    </motion.div>

                    {/* Media Sosial */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.4 }}
                        custom={3}
                        className="p-6 transition shadow-lg rounded-xl bg-white/10 hover:shadow-2xl"
                    >
                        <h3 className="mb-2 text-xl font-semibold">Media Sosial</h3>
                        <p className="text-gray-300">📷 Instagram: @ipra36official</p>
                        <p className="text-gray-300">📘 Facebook: IPRA 36 Community</p>
                        <p className="text-gray-300">▶️ YouTube: IPRA Official</p>
                    </motion.div>
                </div>
            </main>

            {/* Footer */}
            <footer className="py-6 mt-8 text-sm text-center text-gray-400 border-t border-white/10 bg-black/30">
                © {new Date().getFullYear()} IPRA 36 Official. All rights reserved.
            </footer>

        </div>
    );
}
