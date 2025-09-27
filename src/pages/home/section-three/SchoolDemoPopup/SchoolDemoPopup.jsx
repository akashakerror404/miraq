import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Loader, CheckCircle, AlertCircle, School } from "lucide-react";

function SchoolDemoPopup({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        schoolName: "",
        schoolType: "",
        message: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const schoolTypes = [
        "Elementary School",
        "Middle School", 
        "High School",
        "College/University",
        "Vocational School",
        "Other"
    ];

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
            // API endpoint for school demo requests
            const API_URL = "https://interview.akashak.online/api/school-demo";
            
            const response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: formData.name.trim(),
                    phone: formData.phone.trim(),
                    schoolName: formData.schoolName.trim(),
                    schoolType: formData.schoolType,
                    message: formData.message.trim(),
                    submissionType: "school-demo",
                    timestamp: new Date().toISOString(),
                })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            setSubmitStatus('success');
            console.log("API Response:", result);
            
            // Reset form after successful submission
            setTimeout(() => {
                setFormData({ 
                    name: "", 
                    phone: "", 
                    schoolName: "", 
                    schoolType: "", 
                    message: "" 
                });
                setIsSubmitting(false);
                onClose();
            }, 2000);
            
        } catch (error) {
            console.error("Error submitting school demo request:", error);
            setSubmitStatus('error');
            setIsSubmitting(false);
            
            // Auto-hide error message after 3 seconds
            setTimeout(() => {
                setSubmitStatus(null);
            }, 3000);
        }
    };

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget && !isSubmitting) {
            onClose();
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
                    onClick={handleOverlayClick}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-700/50 shadow-2xl w-full max-w-[95vw] sm:max-w-md max-h-[90vh] overflow-y-auto"
                        initial={{ scale: 0.8, opacity: 0, y: 50 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.8, opacity: 0, y: 50 }}
                        transition={{ type: "spring", damping: 25 }}
                    >
                        {/* Header - Smaller on mobile */}
                        <div className="relative p-4 sm:p-6 border-b border-gray-700/50">
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-[#00FF87]/10 to-[#A855F7]/10"
                                animate={{
                                    opacity: [0.3, 0.6, 0.3],
                                }}
                                transition={{ duration: 4, repeat: Infinity }}
                            />
                            
                            <div className="relative z-10 flex items-center justify-between">
                                <motion.h3 
                                    className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#00FF87] to-[#A855F7] bg-clip-text text-transparent"
                                    initial={{ y: -20 }}
                                    animate={{ y: 0 }}
                                    transition={{ delay: 0.1 }}
                                >
                                    School VR Demo
                                </motion.h3>
                                
                                {!isSubmitting && (
                                    <motion.button
                                        onClick={onClose}
                                        className="p-1 sm:p-2 hover:bg-gray-700/50 rounded-full transition-colors duration-200"
                                        whileHover={{ scale: 1.1, rotate: 90 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                                    </motion.button>
                                )}
                            </div>
                            
                            <motion.p 
                                className="relative z-10 text-gray-300 mt-1 sm:mt-2 text-sm sm:text-base"
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                Bring immersive VR experiences to your students
                            </motion.p>
                        </div>

                        {/* Success/Error Messages */}
                        {submitStatus === 'success' && (
                            <motion.div
                                className="mx-4 sm:mx-6 mt-3 sm:mt-4 p-3 sm:p-4 bg-green-500/10 border border-green-500/30 rounded-xl flex items-center gap-2 sm:gap-3"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                                <div>
                                    <p className="text-green-400 font-medium text-sm sm:text-base">Request Submitted!</p>
                                    <p className="text-green-300 text-xs sm:text-sm">We'll contact you within 24 hours.</p>
                                </div>
                            </motion.div>
                        )}

                        {submitStatus === 'error' && (
                            <motion.div
                                className="mx-4 sm:mx-6 mt-3 sm:mt-4 p-3 sm:p-4 bg-red-500/10 border border-red-500/30 rounded-xl flex items-center gap-2 sm:gap-3"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" />
                                <div>
                                    <p className="text-red-400 font-medium text-sm sm:text-base">Error submitting request</p>
                                    <p className="text-red-300 text-xs sm:text-sm">Please try again or contact us directly.</p>
                                </div>
                            </motion.div>
                        )}

                        {/* Form - Compact on mobile */}
                        <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                            <motion.div
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    disabled={isSubmitting}
                                    className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base bg-gray-800/50 border border-gray-700 rounded-xl focus:outline-none focus:border-[#00FF87] focus:ring-2 focus:ring-[#00FF87]/20 text-white transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                    placeholder="Your full name"
                                />
                            </motion.div>

                            <motion.div
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    required
                                    disabled={isSubmitting}
                                    className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base bg-gray-800/50 border border-gray-700 rounded-xl focus:outline-none focus:border-[#00FF87] focus:ring-2 focus:ring-[#00FF87]/20 text-white transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                    placeholder="Phone number"
                                />
                            </motion.div>

                            <motion.div
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                <input
                                    type="text"
                                    name="schoolName"
                                    value={formData.schoolName}
                                    onChange={handleInputChange}
                                    required
                                    disabled={isSubmitting}
                                    className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base bg-gray-800/50 border border-gray-700 rounded-xl focus:outline-none focus:border-[#00FF87] focus:ring-2 focus:ring-[#00FF87]/20 text-white transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                    placeholder="School name"
                                />
                            </motion.div>

                            <motion.div
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.6 }}
                            >
                                <select
                                    name="schoolType"
                                    value={formData.schoolType}
                                    onChange={handleInputChange}
                                    required
                                    disabled={isSubmitting}
                                    className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base bg-gray-800/50 border border-gray-700 rounded-xl focus:outline-none focus:border-[#00FF87] focus:ring-2 focus:ring-[#00FF87]/20 text-white transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <option value="">Select school type</option>
                                    {schoolTypes.map(type => (
                                        <option key={type} value={type}>{type}</option>
                                    ))}
                                </select>
                            </motion.div>

                            <motion.div
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.7 }}
                            >
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows="2"
                                    disabled={isSubmitting}
                                    className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base bg-gray-800/50 border border-gray-700 rounded-xl focus:outline-none focus:border-[#00FF87] focus:ring-2 focus:ring-[#00FF87]/20 text-white resize-none transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                    placeholder="Any specific requirements or questions..."
                                />
                            </motion.div>

                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-3 sm:py-4 text-sm sm:text-base bg-gradient-to-r from-[#00FF87] to-[#A855F7] text-white font-bold rounded-xl shadow-lg relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                                whileHover={!isSubmitting ? { 
                                    scale: 1.02,
                                    boxShadow: "0 20px 40px rgba(0, 255, 135, 0.3)"
                                } : {}}
                                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.8 }}
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    {isSubmitting ? (
                                        <>
                                            <Loader className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                                            <span className="text-xs sm:text-sm">Submitting...</span>
                                        </>
                                    ) : submitStatus === 'success' ? (
                                        <>
                                            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                                            <span className="text-xs sm:text-sm">Request Sent!</span>
                                        </>
                                    ) : (
                                        <>
                                            <School className="w-4 h-4 sm:w-5 sm:h-5" />
                                            <span className="text-xs sm:text-sm">Request School Demo</span>
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
                                        className="absolute inset-0 bg-gradient-to-r from-[#A855F7] to-[#00FF87] opacity-0 group-hover:opacity-100"
                                        transition={{ duration: 0.3 }}
                                    />
                                )}
                            </motion.button>
                        </form>

                        {/* Footer - Smaller on mobile */}
                        <motion.div 
                            className="px-4 sm:px-6 py-3 sm:py-4 bg-gray-900/50 border-t border-gray-700/50 text-center"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.9 }}
                        >
                            <p className="text-xs text-gray-400">
                                Perfect for classrooms, STEM programs, and educational events
                            </p>
                        </motion.div>

                        {/* Corner decorations - Smaller on mobile */}
                        <div className="absolute top-0 left-0 w-4 h-4 sm:w-6 sm:h-6 border-l-2 border-t-2 border-[#00FF87] rounded-tl-xl" />
                        <div className="absolute top-0 right-0 w-4 h-4 sm:w-6 sm:h-6 border-r-2 border-t-2 border-[#A855F7] rounded-tr-xl" />
                        <div className="absolute bottom-0 left-0 w-4 h-4 sm:w-6 sm:h-6 border-l-2 border-b-2 border-[#00FF87] rounded-bl-xl" />
                        <div className="absolute bottom-0 right-0 w-4 h-4 sm:w-6 sm:h-6 border-r-2 border-b-2 border-[#A855F7] rounded-br-xl" />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default SchoolDemoPopup;