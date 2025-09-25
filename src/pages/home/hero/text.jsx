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

    return (
        <div className="bg-bg-2 bg-cover bg-no-repeat border border-gray-400 rounded-3xl md:flex w-full shadow-inner-white-strong md:h-[700px] h-screen  relative md:mb-6 mb-4">

            {/* Top center notch with VR inside */}
            {/* <div className="fixed top-6 left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                <div className="relative w-40 h-8">
                    <img src={notch} alt="Notch" className="w-full h-full" />
                    <img
                        src={vr}
                        alt="VR"
                        className="absolute inset-0 m-auto w-20 z-50 h-16"
                    />
                </div>
            </div> */}

            {/* Left content */}
            <div className="flex md:w-1/2 h-full justify-start items-start">



                <div className="md:py-48 py-14 md:px-10 ">


                    <div className="flex justify-start items-center">
                        <motion.h1
                            className="font-[MuseoModerno] md:text-[80px] font-extrabold text-white tracking-wide"
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
                                    className="inline-block"
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </motion.h1>
                    </div>

                    {/* Tagline */}
                    <motion.p className="md:text-[27px] font-MuseoModerno text-white flex space-x-1 mt-2">
                        {tagline.split("").map((char, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05, type: "spring", stiffness: 500 }}
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                    </motion.p>

                </div>
            </div>

            {/* Right stage (images) */}
            <div className="md:w-1/2 h-full bg-bg-3 bg-cover bg-no-repeat relative">
       
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

                    {/* Man slides in from left */}
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