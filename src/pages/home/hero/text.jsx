import React from "react";
import { motion } from "framer-motion";
import name from "../../../assets/HERO_IMAGES/icons/name.png";
import man from "../../../assets/HERO_IMAGES/icons/man_img.png";
import women from "../../../assets/HERO_IMAGES/icons/women_flip_img.png";
import notch from "../../../assets/HERO_IMAGES/icons/notch.png";
import vr from "../../../assets/HERO_IMAGES/icons/vr notch image.png";

function Hero() {
    const tagline = "Innovate Explore Live";
    const slowTransition = { duration: 2.5, ease: "easeOut" };

    // Floating animation for continuous movement
    const floatingAnimation = {
        y: [0, -15, 0],
        transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
        }
    };

    return (
        <div className="bg-bg-2 bg-cover bg-no-repeat border border-gray-600 rounded-3xl md:flex w-full shadow-2xl md:h-[750px] h-[900px] overflow-hidden relative md:mb-8 mb-6">
            
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Floating particles */}
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-gradient-to-r from-[#4FD9D6] to-[#D700CE] rounded-full opacity-30"
                        initial={{ 
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight,
                            scale: 0
                        }}
                        animate={{ 
                            y: [null, -100, null],
                            x: [null, Math.random() * 50 - 25, null],
                            scale: [0, 1, 0],
                            opacity: [0, 0.5, 0]
                        }}
                        transition={{
                            duration: 4 + Math.random() * 3,
                            repeat: Infinity,
                            delay: Math.random() * 2
                        }}
                    />
                ))}
                
                {/* Gradient Orbs */}
                <motion.div 
                    className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-[#4FD9D6]/20 to-[#D700CE]/20 rounded-full blur-3xl"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 6, repeat: Infinity }}
                />
                <motion.div 
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-[#D700CE]/15 to-[#00FF87]/15 rounded-full blur-3xl"
                    animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.2, 0.4] }}
                    transition={{ duration: 8, repeat: Infinity }}
                />
            </div>

            {/* Premium Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex items-center justify-center z-50">
                <motion.div 
                    className="relative w-48 h-10"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <img src={notch} alt="Notch" className="w-full h-full" />
                    <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-[#4FD9D6] to-[#D700CE] opacity-0 rounded-lg"
                        animate={{ opacity: [0, 0.3, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </motion.div>
            </div>

            {/* Animated VR Icon */}
            <motion.div 
                className="absolute top-[3px] md:left-[710px] left-[170px] z-50"
                animate={floatingAnimation}
            >
                <div className="relative">
                    <img src={vr} alt="VR" className="w-12 h-12" />
                    <motion.div 
                        className="absolute -inset-2 bg-gradient-to-r from-[#4FD9D6] to-[#D700CE] rounded-full blur-sm"
                        animate={{ opacity: [0, 0.5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </div>
            </motion.div>

            {/* Left Content - Enhanced */}
            <div className="hidden md:flex md:w-1/2 h-full justify-start px-8 items-center relative z-10">
                <div className="space-y-6">
                    <motion.h1
                        className="font-[MuseoModerno] md:text-[100px] font-extrabold text-white tracking-wide leading-none"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        {Array.from("MiraQ").map((char, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, y: 60, rotateY: 90 }}
                                animate={{ opacity: 1, y: 0, rotateY: 0 }}
                                transition={{ 
                                    delay: index * 0.2, 
                                    type: "spring", 
                                    stiffness: 200,
                                    damping: 15
                                }}
                                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#4FD9D6] via-[#FFFFFF] to-[#D700CE] hover:from-[#D700CE] hover:to-[#4FD9D6] transition-all duration-500"
                                whileHover={{ scale: 1.1, y: -5 }}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </motion.h1>

                    {/* Enhanced Tagline */}
                    <motion.div 
                        className="relative"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                    >
                        <motion.p className="text-[32px] font-MuseoModerno text-white flex space-x-3 tracking-wider">
                            {tagline.split(" ").map((word, wordIndex) => (
                                <motion.span 
                                    key={wordIndex} 
                                    className="relative inline-block"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    {word.split("").map((char, charIndex) => (
                                        <motion.span
                                            key={charIndex}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ 
                                                delay: 1.5 + (wordIndex * 0.3) + (charIndex * 0.05), 
                                                type: "spring", 
                                                stiffness: 500 
                                            }}
                                            className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#00FF87] to-[#60EFFF]"
                                        >
                                            {char}
                                        </motion.span>
                                    ))}
                                    {wordIndex < tagline.split(" ").length - 1 && "\u00A0"}
                                </motion.span>
                            ))}
                        </motion.p>
                        
                        {/* Underline effect */}
                        <motion.div 
                            className="h-1 bg-gradient-to-r from-[#4FD9D6] to-[#D700CE] rounded-full mt-2"
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ delay: 2.5, duration: 1.5 }}
                        />
                    </motion.div>

                    {/* CTA Button */}
                    <motion.button
                        className="mt-8 px-12 py-4 text-lg font-bold rounded-2xl bg-gradient-to-r from-[#4FD9D6] to-[#D700CE] text-white shadow-2xl relative overflow-hidden group"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2.8 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="relative z-10">Start VR Journey</span>
                        <motion.div 
                            className="absolute inset-0 bg-gradient-to-r from-[#D700CE] to-[#4FD9D6] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                        <motion.div 
                            className="absolute -inset-1 bg-gradient-to-r from-[#4FD9D6] to-[#D700CE] rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                    </motion.button>
                </div>
            </div>

            {/* Right Stage - Enhanced */}
            <div className="md:w-1/2 h-full bg-bg-3 bg-cover bg-no-repeat relative overflow-hidden">
                {/* Mobile Header */}
                <div className="md:hidden flex justify-center items-center h-[45%] relative z-10">
                    <div className="text-center space-y-4">
                        <motion.h1
                            className="font-[MuseoModerno] text-[70px] font-extrabold text-white tracking-wide"
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            {Array.from("MiraQ").map((char, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.15, type: "spring", stiffness: 300 }}
                                    className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#4FD9D6] to-[#D700CE]"
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </motion.h1>
                        <motion.p className="text-[24px] font-MuseoModerno text-white">
                            {tagline.split("").map((char, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05, type: "spring", stiffness: 500 }}
                                    className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF87] to-[#60EFFF]"
                                >
                                    {char === " " ? "\u00A0" : char}
                                </motion.span>
                            ))}
                        </motion.p>
                    </div>
                </div>

                <div className="absolute inset-0">
                    {/* Enhanced Woman with glow */}
                    <motion.div 
                        className="relative"
                        initial={{ x: "100vw", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ ...slowTransition, delay: 0.2 }}
                    >
                        <img
                            src={women}
                            alt="Woman"
                            className="absolute bottom-0 right-2 md:right-12 lg:right-25 w-[70%] sm:w-[60%] md:w-[55%] z-20 pointer-events-none drop-shadow-2xl"
                        />
                        <motion.div 
                            className="absolute bottom-0 right-2 md:right-12 lg:right-25 w-[70%] sm:w-[60%] md:w-[55%] h-full bg-gradient-to-r from-[#D700CE] to-[#4FD9D6] opacity-0 rounded-full blur-xl z-10"
                            animate={{ opacity: [0, 0.3, 0] }}
                            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                        />
                    </motion.div>

                    {/* Enhanced Man with glow */}
                    <motion.div 
                        className="relative"
                        initial={{ x: "-100vw", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ ...slowTransition, delay: 0.6 }}
                    >
                        <img
                            src={man}
                            alt="Man"
                            className="absolute bottom-0 left-2 md:left-12 lg:left-5 w-[75%] sm:w-[70%] md:w-[65%] z-30 pointer-events-none drop-shadow-2xl"
                        />
                        <motion.div 
                            className="absolute bottom-0 left-2 md:left-12 lg:left-5 w-[75%] sm:w-[70%] md:w-[65%] h-full bg-gradient-to-r from-[#4FD9D6] to-[#00FF87] opacity-0 rounded-full blur-xl z-20"
                            animate={{ opacity: [0, 0.4, 0] }}
                            transition={{ duration: 5, repeat: Infinity, delay: 2 }}
                        />
                    </motion.div>

                    {/* Connection line between characters */}
                    <motion.div 
                        className="absolute bottom-1/4 left-1/2 w-1 h-32 bg-gradient-to-b from-[#4FD9D6] to-[#D700CE] z-10"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 128, opacity: 1 }}
                        transition={{ delay: 3, duration: 1.5 }}
                    />
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div 
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 4 }}
            >
                <div className="flex flex-col items-center space-y-2">
                    <motion.div 
                        className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <motion.div 
                            className="w-1 h-3 bg-white/70 rounded-full mt-2"
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    </motion.div>
                    <span className="text-white/70 text-sm font-light">Scroll to Explore</span>
                </div>
            </motion.div>
        </div>
    );
}

export default Hero;