import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Loader, CheckCircle, AlertCircle } from "lucide-react";

function BookDemoPopup({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        message: ""
    });
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error'

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // API endpoint - replace with your actual API URL
            const API_URL = "https://interview.akashak.online/api/book-demo";
            
            const response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify({
                    name: formData.name.trim(),
                    phone: formData.phone.trim(),
                    message: formData.message.trim(),
                    timestamp: new Date().toISOString(),
                    source: "website-demo-request"
                })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            
            // Handle successful submission
            setSubmitStatus('success');
            console.log("API Response:", result);
            
            // Reset form after successful submission
            setTimeout(() => {
                setFormData({ name: "", phone: "", message: "" });
                setIsSubmitting(false);
                onClose();
            }, 2000);
            
        } catch (error) {
            console.error("Error submitting form:", error);
            setSubmitStatus('error');
            setIsSubmitting(false);
            
            // Auto-hide error message after 3 seconds
            setTimeout(() => {
                setSubmitStatus(null);
            }, 3000);
        }
    };

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const resetForm = () => {
        setFormData({ name: "", phone: "", message: "" });
        setSubmitStatus(null);
        setIsSubmitting(false);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    onClick={handleOverlayClick}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-700/50 shadow-2xl max-w-md w-full relative overflow-hidden"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ type: "spring", damping: 25 }}
                    >
                        {/* Header */}
                        <div className="relative p-6 border-b border-gray-700/50">
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-[#4FD9D6]/10 to-[#D700CE]/10"
                                animate={{
                                    opacity: [0.3, 0.6, 0.3],
                                }}
                                transition={{ duration: 4, repeat: Infinity }}
                            />
                            
                            <div className="relative z-10 flex items-center justify-between">
                                <motion.h3 
                                    className="text-2xl font-bold bg-gradient-to-r from-[#4FD9D6] to-[#D700CE] bg-clip-text text-transparent"
                                    initial={{ y: -20 }}
                                    animate={{ y: 0 }}
                                    transition={{ delay: 0.1 }}
                                >
                                    Book a Demo
                                </motion.h3>
                                
                                {!isSubmitting && (
                                    <motion.button
                                        onClick={onClose}
                                        className="p-2 hover:bg-gray-700/50 rounded-full transition-colors duration-200"
                                        whileHover={{ scale: 1.1, rotate: 90 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <X className="w-5 h-5 text-gray-400" />
                                    </motion.button>
                                )}
                            </div>
                            
                            <motion.p 
                                className="relative z-10 text-gray-300 mt-2"
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                Experience the future of VR with a personalized demo
                            </motion.p>
                        </div>

                        {/* Success/Error Messages */}
                        {submitStatus === 'success' && (
                            <motion.div
                                className="mx-6 mt-4 p-4 bg-green-500/10 border border-green-500/30 rounded-xl flex items-center gap-3"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                <CheckCircle className="w-5 h-5 text-green-400" />
                                <div>
                                    <p className="text-green-400 font-medium">Success!</p>
                                    <p className="text-green-300 text-sm">We'll contact you within 24 hours.</p>
                                </div>
                            </motion.div>
                        )}

                        {submitStatus === 'error' && (
                            <motion.div
                                className="mx-6 mt-4 p-4 bg-red-500/10 border border-red-500/30 rounded-xl flex items-center gap-3"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                <AlertCircle className="w-5 h-5 text-red-400" />
                                <div>
                                    <p className="text-red-400 font-medium">Error submitting form</p>
                                    <p className="text-red-300 text-sm">Please try again or contact support.</p>
                                </div>
                            </motion.div>
                        )}

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="p-6 space-y-4">
                            <motion.div
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                {/* <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Full Name *
                                </label> */}
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    disabled={isSubmitting}
                                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:outline-none focus:border-[#4FD9D6] focus:ring-2 focus:ring-[#4FD9D6]/20 text-white transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                    placeholder="Enter your full name"
                                />
                            </motion.div>

                            <motion.div
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                {/* <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Phone Number *
                                </label> */}
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    required
                                    disabled={isSubmitting}
                                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:outline-none focus:border-[#4FD9D6] focus:ring-2 focus:ring-[#4FD9D6]/20 text-white transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                    placeholder="Enter your phone number"
                                />
                            </motion.div>

                            <motion.div
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                {/* <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Message
                                </label> */}
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows="4"
                                    disabled={isSubmitting}
                                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:outline-none focus:border-[#4FD9D6] focus:ring-2 focus:ring-[#4FD9D6]/20 text-white resize-none transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                    placeholder="Tell us about your requirements..."
                                />
                            </motion.div>

                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 bg-gradient-to-r from-[#4FD9D6] to-[#D700CE] text-white font-bold rounded-xl shadow-lg relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                                whileHover={!isSubmitting ? { 
                                    scale: 1.02,
                                    boxShadow: "0 20px 40px rgba(79, 217, 214, 0.3)"
                                } : {}}
                                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.6 }}
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    {isSubmitting ? (
                                        <>
                                            <Loader className="w-5 h-5 animate-spin" />
                                            Submitting...
                                        </>
                                    ) : submitStatus === 'success' ? (
                                        <>
                                            <CheckCircle className="w-5 h-5" />
                                            Submitted!
                                        </>
                                    ) : (
                                        <>
                                            <motion.span
                                                animate={{ rotate: [0, 15, 0] }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                            >
                                                
                                            </motion.span>
                                            Submit Request
                                            <motion.span
                                                animate={{ x: [0, 3, 0] }}
                                                transition={{ duration: 1.5, repeat: Infinity }}
                                            >
                                                →
                                            </motion.span>
                                        </>
                                    )}
                                </span>
                                
                                {/* Button glow effect */}
                                {!isSubmitting && (
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-[#D700CE] to-[#4FD9D6] opacity-0 group-hover:opacity-100"
                                        transition={{ duration: 0.3 }}
                                    />
                                )}
                            </motion.button>
                        </form>

                        {/* Footer */}
                        <motion.div 
                            className="px-6 py-4 bg-gray-900/50 border-t border-gray-700/50 text-center"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.7 }}
                        >
                            <p className="text-xs text-gray-400">
                                We'll contact you within 24 hours to schedule your demo
                            </p>
                        </motion.div>

                        {/* Corner decorations */}
                        <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-[#4FD9D6] rounded-tl-xl" />
                        <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-[#D700CE] rounded-tr-xl" />
                        <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-[#00FF87] rounded-bl-xl" />
                        <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-[#A855F7] rounded-br-xl" />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default BookDemoPopup;