import React from 'react'
import { motion } from 'framer-motion';
import video from "../../../assets/videos/vr-video.mp4";
import frame1 from "../../../assets/VR/Group 6.png";
import ve from "../../../assets/VR/ve (2).jpg";
import v2 from "../../../assets/VR/ve (3).jpg";
import v4 from "../../../assets/VR/ve (6).jpg";

function SectionOne() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const staggerSlideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="bg-bg-2 bg-cover bg-no-repeat border border-gray-400 rounded-3xl md:flex w-full shadow-inner-white-strong md:h-[500px] overflow-hidden relative p-6 flex items-center justify-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      <div className='md:flex md:justify-between w-full'>
        {/* Left Section - Video */}
        <motion.div 
          className="md:w-[50%] flex justify-start items-center bg-bg-2 bg-cover bg-no-repeat  shadow-2xl rounded-3xl p-4 "
          variants={slideInLeft}
        >
          {/* Video Player */}
          <motion.div 
            className="rounded-2xl overflow-hidden border-2 border-gray-500 w-full"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <video
              className="w-full h-[150px] md:h-[370px] object-cover"
              controls
              autoPlay
              muted
              loop
              poster="/path-to-poster-image.jpg"
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </motion.div>

        {/* Right Section - Images */}
        <motion.div 
          className='md:w-[50%]'
          variants={slideInRight}
        >
          <div className='hidden md:flex justify-center items-center gap-5'>
            {/* Main Image */}
            <motion.img 
              src={ve} 
              className='md:w-[400px] md:h-[400px] rounded-tr-[70px] object-cover'
              alt="VR Experience 1"
              variants={staggerSlideInRight}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            />
            
            {/* Small Images Column */}
            <motion.div 
              className='flex flex-col gap-3'
              variants={containerVariants}
            >
              <motion.img 
                src={v2} 
                className='md:w-[200px] md:h-[200px] rounded-tr-[70px] object-cover'
                alt="VR Experience 2"
                variants={staggerSlideInRight}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              />
              <motion.img 
                src={v4} 
                className='md:w-[200px] md:h-[200px] rounded-tr-[70px] object-cover'
                alt="VR Experience 3"
                variants={staggerSlideInRight}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              />
            </motion.div>
          </div>

          {/* Mobile Layout */}
          <motion.div 
            className='md:hidden flex flex-col items-center gap-4 mt-4'
            variants={containerVariants}
          >
            <motion.img 
              src={ve} 
              className='w-full max-w-[300px] h-[200px] rounded-tr-[50px] object-cover'
              alt="VR Experience 1"
              variants={slideInRight}
              whileHover={{ scale: 1.03 }}
            />
            <div className='flex gap-4'>
              <motion.img 
                src={v2} 
                className='w-[140px] h-[140px] rounded-tr-[40px] object-cover'
                alt="VR Experience 2"
                variants={staggerSlideInRight}
                whileHover={{ scale: 1.03 }}
              />
              <motion.img 
                src={v4} 
                className='w-[140px] h-[140px] rounded-tr-[40px] object-cover'
                alt="VR Experience 3"
                variants={staggerSlideInRight}
                whileHover={{ scale: 1.03 }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default SectionOne