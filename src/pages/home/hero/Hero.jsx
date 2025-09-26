import React from "react";
import { motion } from "framer-motion";
import name from "../../../assets/HERO_IMAGES/icons/name.png";
import man from "../../../assets/HERO_IMAGES/icons/man_img.png";
import women from "../../../assets/HERO_IMAGES/icons/women_flip_img.png";
import notch from "../../../assets/HERO_IMAGES/icons/notch.png";
import vr from "../../../assets/HERO_IMAGES/icons/vr notch image.png";

function Hero() {
    const tagline = "Innovate Explore Live";
    const slowTransition = { duration: 2.5, ease: "easeOut" }; // smooth + slow

    return (
        <div className="bg-bg-2 bg-cover bg-no-repeat border border-gray-400 rounded-3xl md:flex w-full shadow-inner-white-strong md:h-[700px] h-[850px] overflow-hidden relative md:mb-6 mb-4">


            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex items-center justify-center z-50">
                <div className="relative w-40 h-8">
                    <img src={notch} alt="Notch" className="w-full h-full" />

                </div>
            </div>
            <div className="absolute  top-[3px] md:left-[710px] left-[170px] z-50">
                <div className="relative">
                    <img
                        src={vr}
                        alt="VR"
                        className="  w-10 h-10 "
                    />

                </div>


            </div>
            {/* left content */}
            <div className="hidden md:flex md:w-1/2 h-full justify-start px-5 items-center">
                <div className="relative">
                    {/* Holographic Background Effect */}
                    <motion.div
                        className="absolute -inset-8 bg-gradient-to-br from-[#4FD9D6]/10 via-[#D700CE]/5 to-[#00FF87]/10 rounded-3xl"
                        animate={{
                            opacity: [0.3, 0.6, 0.3],
                            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
                        }}
                        transition={{ duration: 8, repeat: Infinity }}
                        style={{
                            backgroundSize: '200% 200%'
                        }}
                    />

                    {/* Floating Grid Pattern */}
                    <div className="absolute inset-0 opacity-[0.02]">
                        <div className="absolute inset-0" style={{
                            backgroundImage: `linear-gradient(#4FD9D6 1px, transparent 1px),
                                linear-gradient(90deg, #4FD9D6 1px, transparent 1px)`,
                            backgroundSize: '50px 50px'
                        }} />
                    </div>

                    <div className="relative z-10 space-y-10">
                        {/* Main Logo with VR Glow Effect */}
                        <div className="relative">
                            <motion.h1
                                className="font-[MuseoModerno] md:text-[90px] font-black text-white tracking-tighter leading-none"
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                            >
                                {Array.from("MiraQ").map((char, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{
                                            opacity: 0,
                                            y: 80,
                                            rotateX: 90,
                                            filter: "blur(10px)"
                                        }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                            rotateX: 0,
                                            filter: "blur(0px)"
                                        }}
                                        transition={{
                                            delay: index * 0.15,
                                            duration: 1.2,
                                            type: "spring",
                                            stiffness: 100,
                                            damping: 15
                                        }}
                                        whileHover={{
                                            scale: 1.3,
                                            y: -10,
                                            color: "#4FD9D6",
                                            textShadow: `
                                    0 0 20px #4FD9D6,
                                    0 0 40px #4FD9D6,
                                    0 0 60px #4FD9D6
                                `,
                                            transition: { duration: 0.3 }
                                        }}
                                        className="inline-block cursor-pointer relative"
                                    >
                                        {char}
                                        {/* Letter Glow Effect */}
                                        <motion.span
                                            className="absolute inset-0 opacity-0"
                                            whileHover={{ opacity: 1 }}
                                            style={{
                                                textShadow: `
                                        0 0 30px #4FD9D6,
                                        0 0 60px #4FD9D6,
                                        0 0 90px #4FD9D6
                                    `
                                            }}
                                        >
                                            {char}
                                        </motion.span>
                                    </motion.span>
                                ))}
                            </motion.h1>

                            {/* Animated Subtitle */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1.2, duration: 1 }}
                                className="flex items-center gap-4 mt-4"
                            >
                                <motion.div
                                    className="w-16 h-0.5 bg-gradient-to-r from-[#4FD9D6] to-[#D700CE]"
                                    animate={{ width: ['0%', '100%', '100%'] }}
                                    transition={{ delay: 1.5, duration: 1.5 }}
                                />
                                <motion.p
                                    className="text-xl font-light text-gray-300"
                                    animate={{
                                        background: "linear-gradient(45deg, #4FD9D6, #D700CE, #00FF87)",
                                        backgroundClip: "text",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent"
                                    }}
                                    transition={{ delay: 1.8, duration: 2 }}
                                >
                                    Virtual Reality Pioneers
                                </motion.p>
                            </motion.div>
                        </div>

                        {/* Holographic Tagline */}
                        <motion.div
                            className="relative"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2 }}
                        >
                            <motion.p
                                className="text-2xl font-medium text-white leading-relaxed p-6 rounded-2xl backdrop-blur-lg border border-white/10 bg-white/5"
                                whileHover={{
                                    boxShadow: `
                            0 0 30px rgba(79, 217, 214, 0.3),
                            inset 0 1px 0 rgba(255, 255, 255, 0.2)
                        `,
                                    borderColor: 'rgba(79, 217, 214, 0.5)',
                                    scale: 1.02
                                }}
                            >
                                Crafting <span className="text-[#4FD9D6]">immersive digital worlds</span>
                                that blur the line between reality and imagination
                            </motion.p>

                            {/* Corner Accents */}
                            <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-[#4FD9D6] rounded-tl-lg" />
                            <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-[#D700CE] rounded-tr-lg" />
                            <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-[#00FF87] rounded-bl-lg" />
                            <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-[#A855F7] rounded-br-lg" />
                        </motion.div>

                        {/* Interactive Stats Grid */}
                        <motion.div
                            className="grid grid-cols-3 gap-6"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 2.5 }}
                        >
                            {[
                                { number: "50+", label: "VR Worlds", color: "#4FD9D6", icon: "🌐" },
                                { number: "99.9%", label: "Immersion", color: "#D700CE", icon: "🔥" },
                                { number: "4.9★", label: "Rating", color: "#00FF87", icon: "⭐" }
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    className="text-center p-4 rounded-xl backdrop-blur-sm border border-white/5 bg-white/5"
                                    whileHover={{
                                        y: -5,
                                        borderColor: stat.color,
                                        boxShadow: `0 10px 30px ${stat.color}20`
                                    }}
                                    animate={{
                                        background: `linear-gradient(45deg, ${stat.color}05, ${stat.color}10)`
                                    }}
                                >
                                    <div className="text-2xl mb-1">{stat.icon}</div>
                                    <div className="text-3xl font-bold mb-1" style={{ color: stat.color }}>
                                        {stat.number}
                                    </div>
                                    <div className="text-sm text-gray-400">{stat.label}</div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Holographic CTA Buttons */}
                        <motion.div
                            className="flex gap-4"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 3 }}
                        >
                            <motion.button
                                className="group relative px-10 py-4 bg-gradient-to-r from-[#4FD9D6] to-[#D700CE] text-white font-bold rounded-xl overflow-hidden"
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 20px 40px rgba(79, 217, 214, 0.4)"
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="relative z-10 flex items-center gap-3">
                                    <motion.span
                                        animate={{ rotate: [0, 15, 0] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >

                                    </motion.span>
                                    Book a Demo
                                    <motion.span
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    >
                                        →
                                    </motion.span>
                                </span>

                                {/* Button Glow Effect */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-[#D700CE] to-[#4FD9D6] opacity-0 group-hover:opacity-100"
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.button>

                            <motion.button
                                className="group relative px-8 py-4 border-2 border-white/20 text-white font-bold rounded-xl backdrop-blur-lg"
                                whileHover={{
                                    scale: 1.05,
                                    borderColor: "#4FD9D6",
                                    backgroundColor: "rgba(79, 217, 214, 0.1)"
                                }}
                            >
                                <span className="flex items-center gap-2">
                                    Live Demo
                                </span>
                            </motion.button>
                        </motion.div>
                    </div>

                    {/* Floating VR Elements */}
                    <motion.div
                        className="absolute -top-6 -right-6 text-4xl"
                        animate={{
                            y: [0, -20, 0],
                            rotate: [0, 10, 0]
                        }}
                        transition={{ duration: 6, repeat: Infinity }}
                    >
                        🕶️
                    </motion.div>

                    <motion.div
                        className="absolute -bottom-4 -left-4 text-3xl"
                        animate={{
                            y: [0, 15, 0],
                            rotate: [0, -15, 0]
                        }}
                        transition={{ duration: 5, repeat: Infinity, delay: 2 }}
                    >
                        🌌
                    </motion.div>

                    {/* Particle Effects */}
                    {[...Array(8)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-[#4FD9D6] rounded-full"
                            style={{
                                left: `${20 + i * 10}%`,
                                top: `${80 + (i % 3) * 10}%`,
                            }}
                            animate={{
                                y: [0, -30, 0],
                                opacity: [0, 1, 0],
                                scale: [0, 1, 0]
                            }}
                            transition={{
                                duration: 3 + i,
                                repeat: Infinity,
                                delay: i * 0.5
                            }}
                        />
                    ))}
                </div>
            </div>
            {/* right stage (images) */}
            <div className="md:w-1/2 h-full bg-bg-3 bg-cover bg-no-repeat relative ">
                <div className="md:hidden flex flex-col justify-center items-center h-[70%] px-4 relative overflow-hidden">
                    {/* Mobile-Specific Background Effects */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-[#4FD9D6]/15 via-[#D700CE]/10 to-[#00FF87]/10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    />

                    {/* Floating Particles for Mobile */}
                    {[...Array(12)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-[#4FD9D6] rounded-full"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                y: [0, -40, 0],
                                opacity: [0, 1, 0],
                                scale: [0, 1.5, 0]
                            }}
                            transition={{
                                duration: 3 + Math.random() * 2,
                                repeat: Infinity,
                                delay: Math.random() * 2
                            }}
                        />
                    ))}

                    <div className="relative z-10 text-center space-y-6">
                        {/* Enhanced Logo with Mobile Optimization */}
                        <motion.div className="relative">
                            <motion.h1
                                className="font-[MuseoModerno] text-[52px] font-black text-white leading-tight"
                                initial={{ opacity: 0, y: -30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                {Array.from("MiraQ").map((char, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{
                                            opacity: 0,
                                            y: 60,
                                            scale: 0.8
                                        }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                            scale: 1
                                        }}
                                        transition={{
                                            delay: index * 0.12,
                                            type: "spring",
                                            stiffness: 200,
                                            damping: 12
                                        }}
                                        whileHover={{
                                            scale: 1.2,
                                            color: "#4FD9D6",
                                            textShadow: "0 0 20px rgba(79, 217, 214, 0.8)"
                                        }}
                                        className="inline-block mx-0.5"
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                            </motion.h1>

                            {/* Animated Underline */}
                            <motion.div
                                className="h-1 bg-gradient-to-r from-[#4FD9D6] via-[#D700CE] to-[#00FF87] mx-auto mt-2"
                                initial={{ width: 0 }}
                                animate={{ width: "60%" }}
                                transition={{ delay: 1, duration: 1 }}
                            />
                        </motion.div>

                        {/* Enhanced Tagline for Mobile */}
                        <motion.div className="space-y-4">
                            <motion.p
                                className="text-lg text-gray-300 font-light leading-relaxed px-2"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.2 }}
                            >
                                Redefining reality through{" "}
                                <span className="text-[#4FD9D6] font-medium">immersive VR experiences</span>
                            </motion.p>

                            {/* Mobile-Optimized Stats */}
                            <motion.div
                                className="flex justify-center gap-6"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1.5 }}
                            >
                                {[
                                    { number: "50+", label: "Projects", color: "#4FD9D6" },
                                    { number: "100%", label: "Quality", color: "#D700CE" },
                                    { number: "24/7", label: "Support", color: "#00FF87" }
                                ].map((stat, index) => (
                                    <motion.div
                                        key={index}
                                        className="text-center"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <div
                                            className="text-2xl font-bold mb-1"
                                            style={{ color: stat.color }}
                                        >
                                            {stat.number}
                                        </div>
                                        <div className="text-xs text-gray-400">{stat.label}</div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* Mobile CTA Buttons */}
                        <motion.div
                            className="flex flex-col gap-3 pt-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.8 }}
                        >
                            <motion.button
                                className="py-4 bg-gradient-to-r from-[#4FD9D6] to-[#D700CE] text-white font-bold rounded-2xl shadow-lg flex items-center justify-center gap-2"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <motion.span
                                    animate={{ rotate: [0, 15, 0] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    
                                </motion.span>
                                Start VR Journey
                                <motion.span
                                    animate={{ x: [0, 3, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    →
                                </motion.span>
                            </motion.button>

                            <motion.button
                                className="py-3 border-2 border-white/20 text-white font-semibold rounded-2xl backdrop-blur-lg"
                                whileHover={{ backgroundColor: "rgba(79, 217, 214, 0.1)" }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Watch Demo
                            </motion.button>
                        </motion.div>

                        {/* Scroll Indicator for Mobile */}
                        <motion.div
                            className="pt-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2.2 }}
                        >
                            <motion.div
                                className="flex flex-col items-center space-y-1"
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <div className="text-gray-400 text-sm">Scroll to explore</div>
                                <motion.div
                                    className="w-4 h-6 border-2 border-gray-400 rounded-full flex justify-center"
                                    animate={{ y: [0, 8, 0] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    <div className="w-1 h-2 bg-gray-400 rounded-full mt-1" />
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Mobile-Specific Floating Elements */}
                    <motion.div
                        className="absolute top-4 right-4 text-2xl"
                        animate={{
                            y: [0, -15, 0],
                            rotate: [0, 10, 0]
                        }}
                        transition={{ duration: 4, repeat: Infinity }}
                    >
                        🕶️
                    </motion.div>

                    <motion.div
                        className="absolute bottom-4 left-4 text-xl"
                        animate={{
                            y: [0, 10, 0],
                            rotate: [0, -10, 0]
                        }}
                        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                    >
                        🌌
                    </motion.div>
                </div>

                <div className="absolute inset-0">
                    {/* Woman slides in from right */}
                    <motion.img
                        src={women}
                        alt="Woman"
                        initial={{ x: "100vw", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ ...slowTransition, delay: 0.2 }}
                        className="absolute bottom-0 right-2 md:right-12 lg:right-25 w-[70%] sm:w-[60%] md:w-[55%] z-20 pointer-events-none"
                    />

                    {/* Man slides in from left (BIGGER size) */}
                    <motion.img
                        src={man}
                        alt="Man"
                        initial={{ x: "-100vw", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ ...slowTransition, delay: 0.6 }}
                        className="absolute bottom-0 left-2 md:left-12 lg:left-5 w-[75%] sm:w-[70%] md:w-[65%] z-30 pointer-events-none"
                    />
                </div>
            </div>
        </div>
    );
}

export default Hero;
