import { useEffect, useState } from "react";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";

const banners = [
    "./images/banner/banner1.png",
    "./images/banner/banner2.png",
    "./images/banner/banner3.png",
];

const BannerSlider = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % banners.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    const prevSlide = () => {
        setIndex((prev) =>
            prev === 0 ? banners.length - 1 : prev - 1
        );
    };

    const nextSlide = () => {
        setIndex((prev) => (prev + 1) % banners.length);
    };

    return (
        <div className="relative w-full h-[400px] overflow-hidden rounded-xl">
            {banners.map((img, i) => (
                <img
                    key={i}
                    src={img}
                    className={`absolute w-full h-full object-cover transition-opacity duration-500
                    ${i === index ? "opacity-100" : "opacity-0"}`}
                 alt="banner"/>
            ))}

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {banners.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`w-5 h-1  ${
                            i === index ? "bg-primary" : "bg-textMuted"
                        }`}
                    />
                ))}
            </div>

            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-bg/40 hover:bg-bg/60 text-text p-3">
                <FaChevronLeft />
            </button>

            {/* Right arrow */}
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-bg/40 hover:bg-bg/60 text-text p-3">
                <FaChevronRight />
            </button>
        </div>
    );
};

export default BannerSlider;
