import React, { useState } from "react";
import { motion } from "framer-motion";
import './image-slider.css';

import hiphop from "/src/assets/images/hip hop.png";
import Spanish from "/src/assets/images/Spanish.jpeg";
import French from "/src/assets/images/French.jpeg";
import RnB from "/src/assets/images/R&B.jpeg";
import indian from "/src/assets/images/indian.jpeg";

const ImageSlider = () => {
    const [positionIndex, setPositionIndex] = useState(0);

    const handleNext = () => {
        setPositionIndex((prevIndex) => (prevIndex + 1) % 5);
    };

    const images = [RnB, hiphop, Spanish, French, indian];

    const positions = ["farleft", "left", "center", "right", "farright"];

    const imageVariants = {
        farleft: { x: '-90%', scale: 0.5, zIndex: 1 },
        left: { x: '-50%', scale: 0.7, zIndex: 2 },
        center: { x: '0%', scale: 1, zIndex: 5 },
        right: { x: '50%', scale: 0.7, zIndex: 2 },
        farright: { x: '90%', scale: 0.5, zIndex: 1 },
    };

    return (
        <div>
            <div className="flex items-center justify-center h-screen relative">
                {images.map((image, index) => (
                    <motion.img
                        key={index}
                        src={image}
                        alt="music"
                        className="rounded-[12px]"
                        initial="center"
                        animate={positions[(positionIndex + index) % 5]}
                        variants={imageVariants}
                        transition={{ duration: 0.5 }}
                        style={{ width: '40%', position: 'absolute' }}
                    />
                ))}

                <button className="text-white bg-green-500 rounded-md py-2 px-4 absolute bottom-4" onClick={handleNext}>Next</button>
            </div>
        </div>
    );
}

export default ImageSlider;
