import React from 'react';
import video from "../../../assets/videos/vr-video-com.mp4";
import SectionTwo from '../section-two/SectionTwo';


function SectionOne() {
  return (
    <div className="bg-bg-2 bg-cover bg-no-repeat border border-gray-700 rounded-3xl md:flex w-full  md:h-[600px] overflow-hidden relative p-8 shadow-inner-white-strong">
      <div className='md:flex md:justify-between w-full h-full items-center'>


        {/* Left Section - Video Player */}
        <div className="md:w-[48%] flex justify-center items-center">
          <div className="relative rounded-2xl overflow-hidden border-2 border-gray-600 shadow-2xl w-full max-w-2xl">
            {/* Premium Video Player */}
            <video
              className="w-full h-[150px] md:h-[450px] object-cover transform hover:scale-105 transition-transform duration-700"
              controls
              autoPlay
              muted
              loop
              playsInline
              poster="/path-to-poster-image.jpg"
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Video Overlay Effects */}
            <div className='hidden md:flex'>
              <div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
            <div className="absolute top-4 right-4 bg-black/50 px-3 py-1 rounded-full text-white text-sm font-medium">
              🔴 LIVE DEMO
            </div>

              </div>

            </div>
        
          </div>
        </div>

        {/* Right Section - Premium Content */}
        <div className="md:w-[48%] flex justify-center items-center mt-8 md:mt-0">
          <div className="text-left px-4 md:px-8 md:space-y-8 max-w-2xl">

            {/* Animated Gradient Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-[Josefin Sans] leading-tight">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#4FD9D6] via-[#A855F7] to-[#D700CE] animate-gradient-x">
                  Explore in the
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#D700CE] via-[#4FD9D6] to-[#A855F7] animate-gradient-x delay-1000">
                  metaverse one
                </span>
              </h1>
            </div>

            {/* Premium Tagline */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                pixel with
              </span>
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-[MuseoModerno] text-transparent bg-clip-text bg-gradient-to-r from-[#00FF87] to-[#60EFFF] animate-pulse">
                MiraQ
              </span>
            </div>

            {/* CTA Section */}
            <div className="flex flex-col md:flex-row md:items-center md:gap-8 md:mt-6">
              <span className="text-3xl sm:text-4xl md:text-5xl font-bold font-[Josefin Sans] text-white mb-4 md:mb-0">
                at a time
              </span>

              {/* Premium Button */}
              <a
                href="tel:7025784463"
                className="group relative inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-white rounded-2xl bg-gradient-to-r from-[#4FD9D6] to-[#D700CE] hover:from-[#D700CE] hover:to-[#4FD9D6] transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 animate-pulse-slow"
              >
                <span className="relative z-10">Book a Demo</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-[#4FD9D6] to-[#D700CE] rounded-2xl blur-sm opacity-75 group-hover:opacity-100 group-hover:blur-md transition-all duration-300"></div>
              </a>
            </div>

            {/* Stats Bar */}
            <div className="flex justify-start items-center gap-6 pt-6 border-t border-gray-600/50 ">
              <div className="text-center">
                <div className="md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4FD9D6] to-[#00FF87]">Fresh</div>
                <div className="md:text-sm  text-[10px] text-gray-300">Innovative Approach</div>
              </div>
              <div className="text-center">
                <div className="md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#D700CE] to-[#A855F7]">40+</div>
                <div className="md:text-sm  text-[10px] text-gray-300">VR Solutions</div>
              </div>
              <div className="text-center">
                <div className="md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00FF87] to-[#60EFFF]">100%</div>
                <div className="md:text-sm  text-[10px] text-gray-300">Quality Focus</div>
              </div>
              <div className="text-center">
                <div className="md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#F7931E]">10+</div>
                <div className="md:text-sm  text-[10px] text-gray-300">Team Members</div>
              </div>
              <div className='hidden md:flex'>
                <div className="text-center">
                  <div className="md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#9D50BB] to-[#6E48AA]">Quick</div>
                  <div className="text-sm text-[7px] text-gray-300">Turnaround</div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionOne;