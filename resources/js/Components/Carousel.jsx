import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
    {
        id: 1,
        image: "/images/PUMELTO.svg",
        title: "Temukan Rasa Favoritmu",
        description: "Beragam varian pudding lezat dengan kualitas terbaik.",
    },
    {
        id: 2,
        image: "/images/PUMELTO.svg",
        title: "Belanja Mudah & Cepat",
        description: "Pesan pudding secara online, bayar dan langsung dikirim.",
    },
    {
        id: 3,
        image: "/images/PUMELTO.svg",
        title: "Promo Spesial Hari Ini",
        description: "Diskon hingga 30% untuk varian tertentu!",
    },
];

const Carousel = () => {
    const [index, setIndex] = useState(0);

    const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

    useEffect(() => {
        const timer = setTimeout(() => nextSlide(), 6000);
        return () => clearTimeout(timer);
    }, [index]);

    return (
        <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-2xl shadow-lg group">
            <AnimatePresence mode="wait">
                <motion.img
                    key={slides[index].id}
                    src={slides[index].image}
                    alt={slides[index].title}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </AnimatePresence>

            {/* Overlay Text */}
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-center px-6 sm:px-12 md:px-16 lg:px-24 text-white z-10">
                <motion.h2
                    key={slides[index].title}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-xl sm:text-3xl font-bold mb-2"
                >
                    {slides[index].title}
                </motion.h2>
                <motion.p
                    key={slides[index].description}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-sm sm:text-base text-white/90"
                >
                    {slides[index].description}
                </motion.p>
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-black p-2 rounded-full transition hidden group-hover:flex"
            >
                <ChevronLeft />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-black p-2 rounded-full transition hidden group-hover:flex"
            >
                <ChevronRight />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`w-3 h-3 rounded-full ${i === index ? "bg-white" : "bg-white/40"
                            } transition`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
