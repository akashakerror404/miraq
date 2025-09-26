import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Play, Zap, Users, Rocket, Star, Sparkles } from 'lucide-react';

function SectionTwo() {
    const [activeFeature, setActiveFeature] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.3 });

    const features = [
        {
            icon: <Zap className="w-6 h-6 md:w-8 md:h-8" />,
            title: "Fresh Start",
            description: "No legacy systems, built with latest VR technologies",
            gradient: "from-yellow-400 to-orange-500",
            stats: "Modern Tech"
        },
        {
            icon: <Users className="w-6 h-6 md:w-8 md:h-8" />,
            title: "Early Access",
            description: "Be among the first to experience our innovative VR platform",
            gradient: "from-blue-400 to-purple-600",
            stats: "Pioneers"
        },
        {
            icon: <Rocket className="w-6 h-6 md:w-8 md:h-8" />,
            title: "Agile Development",
            description: "Quick to adapt and implement customer feedback",
            gradient: "from-green-400 to-cyan-500",
            stats: "Fast Updates"
        },
        {
            icon: <Star className="w-6 h-6 md:w-8 md:h-8" />,
            title: "Personal Touch",
            description: "Small team means personalized attention to every project",
            gradient: "from-pink-400 to-rose-600",
            stats: "Care & Focus"
        }
    ];

    return (
        <div className="bg-bg-2 bg-cover bg-no-repeat border border-gray-700 rounded-3xl w-full min-h-[800px] md:min-h-[700px] overflow-hidden relative p-6 md:p-8 shadow-inner-white-strong mt-6 md:mt-8">

            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white/30 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -20, 0],
                            opacity: [0, 0.5, 0],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            <div ref={ref} className="relative z-10 h-full">
                {/* Main Content Grid - Proper alignment */}
                <div className="flex flex-col lg:flex-row gap-8 md:gap-12 h-full items-center justify-center">

                    {/* Left Content - Perfectly aligned */}
                    <div className="w-full lg:w-1/2 max-w-2xl">
                        <motion.div
                            className="space-y-6 md:space-y-8 text-center lg:text-left"
                            initial={{ opacity: 0, x: -50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8 }}
                        >

                            {/* Badge */}
                            <motion.div
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#4FD9D6] to-[#D700CE] text-white text-sm font-bold mx-auto lg:mx-0"
                                whileHover={{ scale: 1.05 }}
                            >
                                <Sparkles className="w-4 h-4" />
                                WHY CHOOSE MIRAQ
                            </motion.div>

                            {/* Heading */}
                            <motion.h2
                                className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.2, duration: 0.8 }}
                            >
                                Experience The{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FD9D6] via-[#D700CE] to-[#00FF87]">
                                    Future
                                </span>{' '}
                                Today
                            </motion.h2>

                            {/* Description */}
                            <motion.p
                                className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.4, duration: 0.8 }}
                            >
                                Step into a world where reality meets imagination. Our cutting-edge VR technology
                                transforms how you work, play, and connect.
                            </motion.p>

                            {/* Feature Cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-8">
                                {features.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        className={`p-4 md:p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${activeFeature === index
                                                ? 'border-transparent bg-gradient-to-r from-white/10 to-white/5 shadow-2xl scale-105'
                                                : 'border-gray-600/50 bg-white/5 hover:bg-white/10'
                                            }`}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => setActiveFeature(index)}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ delay: 0.6 + index * 0.1, duration: 0.8 }}
                                    >
                                        <div className="flex items-center gap-3 md:gap-4">
                                            <div className={`p-2 md:p-3 rounded-xl bg-gradient-to-r ${feature.gradient} shadow-lg flex-shrink-0`}>
                                                {feature.icon}
                                            </div>
                                            <div className="flex-1 text-left">
                                                <h3 className="text-white font-bold text-base md:text-lg">{feature.title}</h3>
                                                <p className="text-gray-400 text-xs md:text-sm mt-1">{feature.description}</p>
                                            </div>
                                            {activeFeature === index && (
                                                <motion.div
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    className="w-2 h-2 md:w-3 md:h-3 bg-gradient-to-r from-[#4FD9D6] to-[#D700CE] rounded-full flex-shrink-0"
                                                />
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Content - Interactive Sphere - Perfectly centered */}
                    <div className="hidden md:flex w-full lg:w-1/2 flex justify-center items-center   py-8 lg:py-0">
                        <motion.div
                            className="relative w-full max-w-md h-64 md:h-80 lg:h-96"
                            initial={{ opacity: 0, x: 50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        >

                            {/* Animated Background Glow */}
                            <motion.div
                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-r from-[#4FD9D6] to-[#D700CE] rounded-full blur-3xl opacity-20"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.1, 0.3, 0.1]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />

                            {/* 3D Cube Container */}
                            <motion.div
                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-52 md:h-52 lg:w-64 lg:h-64"
                                style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
                                animate={{
                                    rotateX: [0, 360, 0],
                                    rotateY: [0, -360, 0],
                                    rotateZ: [0, 180, 0],
                                }}
                                transition={{
                                    duration: 12,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                                whileHover={{
                                    scale: 1.15,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                {/* Cube Faces with Enhanced Styling */}
                                {['front', 'back', 'right', 'left', 'top', 'bottom'].map((face, index) => (
                                    <motion.div
                                        key={face}
                                        className={`absolute w-full h-full border-2 border-white/30 shadow-2xl flex items-center justify-center backdrop-blur-sm`}
                                        style={{
                                            transform: `rotateY(${index * 90}deg) translateZ(${index < 4 ? '80px' : '80px'})`,
                                            background: `linear-gradient(135deg, 
              ${index % 3 === 0 ? '#4FD9D6' : index % 3 === 1 ? '#D700CE' : '#00FF87'}20,
              ${index % 3 === 0 ? '#D700CE' : index % 3 === 1 ? '#00FF87' : '#4FD9D6'}40
            )`,
                                        }}
                                        whileHover={{
                                            scale: 1.1,
                                            borderColor: "rgba(255,255,255,0.6)",
                                            transition: { duration: 0.2 }
                                        }}
                                    >
                                        {/* Face Content */}
                                        <div className="text-center">
                                            <motion.div
                                                className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1"
                                                animate={{
                                                    textShadow: [
                                                        "0 0 10px currentColor",
                                                        "0 0 20px currentColor",
                                                        "0 0 10px currentColor"
                                                    ]
                                                }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                            >
                                                {['VR', 'AR', 'AI', '3D', 'XR', 'MR'][index]}
                                            </motion.div>
                                            <div className="text-xs md:text-sm text-white/70 font-light">
                                                {['Virtual', 'Augmented', 'Artificial', '3D', 'Extended', 'Mixed'][index]}
                                            </div>
                                        </div>

                                        {/* Face Corner Accents */}
                                        <div className="absolute top-2 left-2 w-3 h-3 bg-white/40 rounded-full"></div>
                                        <div className="absolute top-2 right-2 w-3 h-3 bg-white/40 rounded-full"></div>
                                        <div className="absolute bottom-2 left-2 w-3 h-3 bg-white/40 rounded-full"></div>
                                        <div className="absolute bottom-2 right-2 w-3 h-3 bg-white/40 rounded-full"></div>
                                    </motion.div>
                                ))}
                            </motion.div>

                            {/* Enhanced Floating Particles with Different Sizes */}
                            {[...Array(12)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className={`absolute rounded-full shadow-lg ${i % 4 === 0 ? 'w-4 h-4 bg-[#4FD9D6]' :
                                            i % 4 === 1 ? 'w-6 h-6 bg-[#D700CE]' :
                                                i % 4 === 2 ? 'w-3 h-3 bg-[#00FF87]' :
                                                    'w-5 h-5 bg-[#A855F7]'
                                        }`}
                                    style={{
                                        left: `${5 + (i * 8)}%`,
                                        top: `${10 + (i % 5) * 18}%`,
                                    }}
                                    animate={{
                                        x: [0, 30, 0],
                                        y: [0, -25, 0],
                                        scale: [1, 1.8, 1],
                                        rotate: [0, 180, 360],
                                    }}
                                    transition={{
                                        duration: 4 + i * 0.5,
                                        repeat: Infinity,
                                        delay: i * 0.3,
                                        ease: "easeInOut"
                                    }}
                                />
                            ))}

                            {/* Connection Lines between Particles */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none">
                                <defs>
                                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#4FD9D6" stopOpacity="0.7" />
                                        <stop offset="50%" stopColor="#D700CE" stopOpacity="0.9" />
                                        <stop offset="100%" stopColor="#00FF87" stopOpacity="0.7" />
                                    </linearGradient>
                                </defs>
                                {[...Array(6)].map((_, i) => (
                                    <motion.line
                                        key={i}
                                        x1="50%"
                                        y1="50%"
                                        x2={`${15 + (i * 15)}%`}
                                        y2={`${15 + (i % 4) * 20}%`}
                                        stroke="url(#lineGradient)"
                                        strokeWidth="1"
                                        strokeDasharray="4 4"
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        animate={{ pathLength: 1, opacity: 0.6 }}
                                        transition={{ duration: 2, delay: i * 0.5 }}
                                    />
                                ))}
                            </svg>

                            {/* Enhanced Feature Display Panel */}
                            <motion.div
                                className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#4FD9D6]/30 to-[#D700CE]/30 backdrop-blur-xl rounded-2xl p-5 md:p-6 border-2 border-white/20 shadow-2xl w-72 md:w-80"
                                key={activeFeature}
                                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ duration: 0.7, type: "spring" }}
                                whileHover={{
                                    y: -5,
                                    borderColor: "rgba(255,255,255,0.4)",
                                    transition: { duration: 0.3 }
                                }}
                            >
                                {/* Panel Header */}
                                <div className="flex items-center justify-center mb-3">
                                    <motion.div
                                        className="w-3 h-3 rounded-full bg-gradient-to-r from-[#00FF87] to-[#4FD9D6] mr-2"
                                        animate={{ scale: [1, 1.5, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    />
                                    <span className="text-white/80 text-sm font-light">Active Feature</span>
                                    <motion.div
                                        className="w-3 h-3 rounded-full bg-gradient-to-r from-[#D700CE] to-[#00FF87] ml-2"
                                        animate={{ scale: [1.5, 1, 1.5] }}
                                        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                                    />
                                </div>

                                {/* Feature Content */}
                                <div className="text-center text-white">
                                    <motion.div
                                        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent"
                                        key={features[activeFeature].stats}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        {features[activeFeature].stats}
                                    </motion.div>

                                    <motion.div
                                        className="text-lg md:text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#4FD9D6] to-[#D700CE]"
                                        key={features[activeFeature].title}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        {features[activeFeature].title}
                                    </motion.div>

                                    <motion.div
                                        className="text-sm opacity-90 leading-relaxed"
                                        key={features[activeFeature].description}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.4 }}
                                    >
                                        {features[activeFeature].description}
                                    </motion.div>
                                </div>

                                {/* Panel Glow Effect */}
                                <motion.div
                                    className="absolute -inset-2 bg-gradient-to-r from-[#4FD9D6] to-[#D700CE] rounded-2xl blur-lg -z-10 opacity-0"
                                    animate={{ opacity: [0, 0.4, 0] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                />
                            </motion.div>

                            {/* Floating Tech Badges */}
                            <motion.div
                                className="absolute top-4 right-4 bg-black/40 backdrop-blur-lg rounded-full px-3 py-1 border border-white/20"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1 }}
                            >
                                <span className="text-white text-xs font-[MuseoModerno]">MIRAQ</span>
                            </motion.div>

                            <motion.div
                                className="absolute top-4 left-4 bg-black/40 backdrop-blur-lg rounded-full px-3 py-1 border border-white/20"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1.2 }}
                            >
                                <span className="text-white text-xs font-light">VR</span>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default SectionTwo;