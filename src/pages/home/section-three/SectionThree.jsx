import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Book, Users, GraduationCap, Globe, Brain, Rocket, Star, Award, Video, Shield } from 'lucide-react';
import SchoolDemoPopup from './SchoolDemoPopup/SchoolDemoPopup';

function SectionThree() {


     const [isSchoolPopupOpen, setIsSchoolPopupOpen] = useState(false);
    
    const openSchoolPopup = () => setIsSchoolPopupOpen(true);
    const closeSchoolPopup = () => setIsSchoolPopupOpen(false);

  const features = [
    { icon: <Shield className="w-6 h-6" />, text: "Safe & Controlled Environment" },
    { icon: <Video className="w-6 h-6" />, text: "Live Teacher Dashboard" },
    { icon: <Users className="w-6 h-6" />, text: "Multi-student Sessions" },
    { icon: <Award className="w-6 h-6" />, text: "Progress Tracking" },
    { icon: <Rocket className="w-6 h-6" />, text: "Easy Setup" },
    { icon: <Star className="w-6 h-6" />, text: "Curriculum Aligned" }
  ];

  return (
    <div className="bg-bg-2 bg-cover bg-no-repeat border border-gray-700 rounded-3xl w-full min-h-[700px] overflow-hidden relative p-6 md:p-8 shadow-inner-white-strong mt-8">
                  <SchoolDemoPopup isOpen={isSchoolPopupOpen} onClose={closeSchoolPopup} />

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Educational Elements */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360, 0],
              opacity: [0, 0.7, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            {['📚', '🔬', '🧪', '🌍', '💡', '🚀'][i % 6]}
          </motion.div>
        ))}
        
        {/* Gradient Orbs */}
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-cyan-500/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/15 to-pink-500/15 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#4FD9D6] to-[#D700CE] text-white font-bold mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Rocket className="w-5 h-5" />
            VR EDUCATION SOLUTIONS
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Transform Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FD9D6] via-[#D700CE] to-[#00FF87]">
              Classroom
            </span>
          </motion.h2>

          <motion.p 
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Bring learning to life with immersive VR experiences designed specifically for educational institutions. 
            From elementary schools to universities, we create unforgettable educational journeys.
          </motion.p>
        </motion.div>



        {/* Features Grid */}
   {/* <motion.div 
  className="flex flex-wrap justify-center gap-3 mt-12"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.6 }}
>
  {features.map((feature, index) => (
    <motion.div
      key={index}
      className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-white/5 border border-white/10 cursor-pointer"
      whileHover={{ scale: 1.05, backgroundColor: 'rgba(79, 217, 214, 0.1)' }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="text-[#4FD9D6]">
        {feature.icon}
      </div>
      <span className="text-white text-sm font-medium">{feature.text}</span>
    </motion.div>
  ))}
</motion.div> */}

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-12 p-8 rounded-3xl bg-gradient-to-r from-[#4FD9D6]/10 to-[#D700CE]/10 border border-white/20 backdrop-blur-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-white mb-4">Ready to Transform Your School?</h3>
          <p className="text-gray-300 mb-6">Join 500+ educational institutions already using MiraQ VR</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button 
                    onClick={openSchoolPopup}
              className="px-8 py-4 bg-gradient-to-r from-[#4FD9D6] to-[#D700CE] text-white font-bold rounded-2xl shadow-2xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book School Demo
            </motion.button>
            <motion.button 
              className="px-8 py-4 border-2 border-white/20 text-white font-bold rounded-2xl backdrop-blur-lg"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
            >
              Download Brochure
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default SectionThree;