import React from "react";
import { motion } from "framer-motion";
import { 
    Facebook, 
    Twitter, 
    Instagram, 
    Linkedin, 
    Youtube,
    Mail,
    Phone,
    MapPin,
    ArrowRight,
    RectangleGoggles ,
    // VRHeadset,
    Send
} from "lucide-react";

function Footer() {
    const currentYear = new Date().getFullYear();

    // Footer links data
   

    const socialLinks = [
        { icon: Facebook, href: "#", color: "hover:text-blue-400" },
        { icon: Twitter, href: "#", color: "hover:text-blue-300" },
        { icon: Instagram, href: "#", color: "hover:text-pink-400" },
        { icon: Linkedin, href: "#", color: "hover:text-blue-500" },
        { icon: Youtube, href: "#", color: "hover:text-red-400" }
    ];

    const contactInfo = [
        { icon: Mail, text: "miraq.vr@gmail.com", href: "mailto:miraq.vr@gmail.com" },
        { icon: Phone, text: "+91 83010 89693", href: "tel:+91 83010 89693" },
        { icon: MapPin, text: "FM94+PR9, Highway Road, Koyilandy, Kerala", href: "#" }
    ];

    return (
        <footer className="relative bg-bg-2 bg-cover bg-no-repeat border border-gray-700 rounded-3xl w-full  overflow-hidden  p-6 md:p-8 shadow-inner-white-strong mt-8">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#4FD9D6]/5 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#D700CE]/5 via-transparent to-transparent"></div>
                
                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.02]">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `linear-gradient(#4FD9D6 1px, transparent 1px),
                            linear-gradient(90deg, #4FD9D6 1px, transparent 1px)`,
                        backgroundSize: '50px 50px'
                    }} />
                </div>
                
                {/* Floating Particles */}
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-[#4FD9D6] rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -20, 0],
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0]
                        }}
                        transition={{
                            duration: 4 + Math.random() * 3,
                            repeat: Infinity,
                            delay: Math.random() * 2
                        }}
                    />
                ))}
            </div>

            {/* Main Footer Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Top Section */}
               

                {/* Contact Info Section */}
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 p-6 bg-gray-800/30 rounded-2xl border border-gray-700/50"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    {contactInfo.map((contact, index) => (
                        <motion.a
                            key={index}
                            href={contact.href}
                            className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-200 group"
                            whileHover={{ x: 5 }}
                        >
                            <div className="p-2 bg-gray-700/50 rounded-lg group-hover:bg-[#4FD9D6]/20 transition-colors duration-200">
                                <contact.icon className="w-4 h-4" />
                            </div>
                            <span>{contact.text}</span>
                        </motion.a>
                    ))}
                </motion.div>

                {/* Bottom Section */}
                <div className="border-t border-gray-700/50 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        {/* Copyright */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            className="text-gray-400 text-sm"
                        >
                            © {currentYear} MiraQ Technologies. All rights reserved. 
                            <span className="mx-2">•</span>
                            {/* <span>Made with ❤️ in the Metaverse</span> */}
                        </motion.div>

                        {/* Social Links */}
                        <motion.div 
                            className="flex items-center gap-4"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <span className="text-gray-400 text-sm mr-2">Follow us:</span>
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    className={`p-2 bg-gray-800/50 rounded-lg text-gray-400 ${social.color} transition-all duration-200 border border-transparent hover:border-[#4FD9D6]/30`}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <social.icon className="w-4 h-4" />
                                </motion.a>
                            ))}
                        </motion.div>

                        {/* Additional Links */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex items-center gap-4 text-sm text-gray-400"
                        >
                            <a href="#" className="hover:text-[#4FD9D6] transition-colors duration-200">
                                Privacy Policy
                            </a>
                            <span>•</span>
                            <a href="#" className="hover:text-[#4FD9D6] transition-colors duration-200">
                                Terms of Service
                            </a>
                            <span>•</span>
                            <a href="#" className="hover:text-[#4FD9D6] transition-colors duration-200">
                                Cookie Policy
                            </a>
                        </motion.div>
                    </div>
                </div>

                {/* VR Experience Badge */}
                <motion.div
                    className="absolute bottom-4 right-4"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <div className="relative">
                        <div className="absolute inset-0 bg-[#4FD9D6] rounded-full animate-ping opacity-20"></div>
                        <div className="relative px-4 py-2 bg-gradient-to-r from-[#4FD9D6] to-[#D700CE] rounded-full text-white text-xs font-bold flex items-center gap-2">
                            <RectangleGoggles className="w-3 h-3" />
                            VR Ready Experience
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Floating VR Elements */}
            <motion.div
                className="absolute bottom-10 left-10 text-2xl opacity-20"
                animate={{
                    y: [0, -15, 0],
                    rotate: [0, 10, 0]
                }}
                transition={{ duration: 6, repeat: Infinity }}
            >
                🕶️
            </motion.div>

            <motion.div
                className="absolute top-10 right-10 text-xl opacity-20"
                animate={{
                    y: [0, 10, 0],
                    rotate: [0, -10, 0]
                }}
                transition={{ duration: 5, repeat: Infinity, delay: 2 }}
            >
                🌌
            </motion.div>
        </footer>
    );
}

export default Footer;