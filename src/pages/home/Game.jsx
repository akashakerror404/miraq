import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Play, Sword, Trophy, Users, Zap, Sparkles, Gamepad, Crown, Target, Shield } from 'lucide-react';

function GamingSection() {
  const [activeGame, setActiveGame] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const smoothX = useSpring(mouseX, { damping: 20, stiffness: 300 });
  const smoothY = useSpring(mouseY, { damping: 20, stiffness: 300 });

  const rotateX = useTransform(smoothY, [0, 800], [15, -15]);
  const rotateY = useTransform(smoothX, [0, 800], [-15, 15]);

  const games = [
    {
      title: "Cyber Arena",
      players: "2.4K Online",
      rating: "4.9/5",
      genre: "Battle Royale",
      gradient: "from-purple-500 to-pink-600",
      icon: "⚔️"
    },
    {
      title: "Neon Racers",
      players: "1.8K Online",
      rating: "4.8/5",
      genre: "Racing",
      gradient: "from-cyan-500 to-blue-600",
      icon: "🏎️"
    },
    {
      title: "Mystic Quest",
      players: "3.1K Online",
      rating: "4.9/5",
      genre: "RPG",
      gradient: "from-green-500 to-emerald-600",
      icon: "🧙"
    },
    {
      title: "Space Odyssey",
      players: "2.7K Online",
      rating: "4.7/5",
      genre: "Adventure",
      gradient: "from-orange-500 to-red-600",
      icon: "🚀"
    }
  ];

  const stats = [
    { value: "50K+", label: "Active Players", icon: Users },
    { value: "99.9%", label: "Uptime", icon: Zap },
    { value: "4.9★", label: "Rating", icon: Trophy },
    { value: "10ms", label: "Latency", icon: Target }
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = sectionRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    };

    sectionRef.current.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      if (sectionRef.current) {
        sectionRef.current.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <div 
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Floating Game Elements */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, 50, 0],
              rotate: [0, 360, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          >
            {['🎮', '👾', '🕹️', '🌟', '⚡', '🔥', '💫', '🎯'][i % 8]}
          </motion.div>
        ))}

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
        
        {/* Pulsing Orbs */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{ scale: [1.5, 1, 1.5], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold mb-6 backdrop-blur-lg"
            whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
          >
            <Gamepad className="w-5 h-5" />
            MIRAQ GAMING UNIVERSE
            <Sparkles className="w-5 h-5" />
          </motion.div>

          <motion.h1 
            className="text-6xl md:text-8xl font-bold text-white mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Enter The{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 animate-gradient-x">
              Arena
            </span>
          </motion.h1>

          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Immerse yourself in next-generation VR gaming experiences. 
            Compete, collaborate, and conquer in breathtaking virtual worlds.
          </motion.p>
        </motion.div>

        {/* Main Gaming Dashboard */}
        <motion.div 
          className="grid lg:grid-cols-3 gap-8 mb-16"
          style={{
            rotateX: rotateX,
            rotateY: rotateY,
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Game Cards */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {games.map((game, index) => (
              <motion.div
                key={index}
                className={`relative rounded-3xl p-6 backdrop-blur-lg border-2 cursor-pointer overflow-hidden group ${
                  activeGame === index 
                    ? 'border-purple-400 scale-105' 
                    : 'border-white/10 hover:border-white/30'
                }`}
                whileHover={{ y: -10, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveGame(index)}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${game.gradient} opacity-10 group-hover:opacity-20 transition-opacity`} />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{game.icon}</div>
                    <div className="flex items-center gap-2 text-yellow-400">
                      <Crown className="w-4 h-4" />
                      <span className="text-sm font-bold">{game.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{game.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{game.genre}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-green-400">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-sm">{game.players}</span>
                    </div>
                    <motion.button 
                      className="px-4 py-2 bg-white/10 rounded-full text-white text-sm font-medium backdrop-blur-lg"
                      whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.2)' }}
                    >
                      Play Now
                    </motion.button>
                  </div>
                </div>

                {/* Hover Effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>

          {/* Active Game Preview */}
          <motion.div 
            className="relative rounded-3xl overflow-hidden backdrop-blur-lg border-2 border-white/20"
            layoutId="active-game"
          >
            <div className={`h-full bg-gradient-to-br ${games[activeGame].gradient} p-8`}>
              <div className="text-center text-white">
                <motion.div 
                  className="text-6xl mb-4"
                  key={games[activeGame].icon}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                >
                  {games[activeGame].icon}
                </motion.div>
                
                <motion.h3 
                  className="text-3xl font-bold mb-2"
                  key={games[activeGame].title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {games[activeGame].title}
                </motion.h3>
                
                <motion.p 
                  className="text-lg opacity-90 mb-6"
                  key={games[activeGame].genre}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {games[activeGame].genre}
                </motion.p>

                <motion.div 
                  className="space-y-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex justify-between text-sm">
                    <span>Players Online</span>
                    <span className="font-bold">{games[activeGame].players}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Community Rating</span>
                    <span className="font-bold">{games[activeGame].rating}</span>
                  </div>
                </motion.div>

                <motion.button 
                  className="mt-6 w-full py-4 bg-black/30 rounded-2xl font-bold text-lg backdrop-blur-lg border border-white/20"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(0,0,0,0.5)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  Enter Game
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="grid md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                className="text-center p-6 rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10"
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl mb-3">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <motion.button
            className="group relative px-12 py-6 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold rounded-2xl text-xl overflow-hidden"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-3">
              <Play className="w-6 h-6" />
              Launch Gaming Platform
              <Sparkles className="w-6 h-6" />
            </span>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.3 }}
            />
          </motion.button>
          
          <motion.p 
            className="text-gray-400 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Join 50,000+ players in the ultimate VR gaming experience
          </motion.p>
        </motion.div>
      </div>

      {/* Floating Navigation */}
      <motion.div 
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4 backdrop-blur-lg bg-white/10 rounded-2xl p-2 border border-white/20"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        {['Home', 'Games', 'Leaderboard', 'Shop', 'Profile'].map((item, index) => (
          <motion.button
            key={item}
            className="px-4 py-2 rounded-xl text-white text-sm font-medium"
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.2)' }}
            whileTap={{ scale: 0.9 }}
          >
            {item}
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
}

export default GamingSection;