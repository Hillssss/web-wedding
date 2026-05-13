"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music, Pause, Play, MailOpen } from "lucide-react";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // File path as requested
  const musicUrl = "/sounds/Bruno Mars - Marry You Official Lyric Video.mp3";

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.4;
    }
  }, []);

  const handleOpenInvitation = () => {
    setIsOpen(true);
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(err => {
        console.log("Autoplay blocked:", err);
      });
    }
    // Enable scrolling
    document.body.style.overflow = "auto";
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Prevent scrolling until opened to ensure "Buka Undangan" is the first interaction
  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      {/* Welcome Overlay / Cover */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
          >
            {/* Background Image / Pattern */}
            <div className="absolute inset-0 opacity-40 pointer-events-none">
              <img 
                src="/images/hero4.JPEG" 
                alt="Background" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="relative text-center space-y-12 px-6">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="space-y-6"
              >
                <p className="text-primary tracking-[0.4em] uppercase text-xs md:text-sm font-medium">Undangan Ngunduh Mantu</p>
                <div className="space-y-2">
                  <h1 className="text-5xl md:text-8xl font-playfair text-primary">Syahlan & Fenny</h1>
                  <p className="text-white font-playfair text-xl md:text-2xl italic">17 Mei 2026</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <button
                  onClick={handleOpenInvitation}
                  className="group relative inline-flex items-center gap-3 px-10 py-4 bg-primary text-white rounded-full text-lg font-medium shadow-[0_10px_30px_rgba(var(--primary-rgb),0.3)] hover:shadow-[0_15px_40px_rgba(var(--primary-rgb),0.4)] transform hover:-translate-y-1 transition-all duration-300"
                >
                  <MailOpen className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  Buka Undangan
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="fixed bottom-6 right-6 z-50">
        <audio ref={audioRef} src={musicUrl} loop />
        
        {/* Only show floating button after invitation is opened */}
        {isOpen && (
          <motion.button
            onClick={togglePlay}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full shadow-2xl transition-colors ${
              isPlaying ? "bg-primary text-white" : "bg-white text-primary"
            }`}
          >
            {isPlaying && (
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-primary rounded-full -z-10"
              />
            )}

            <AnimatePresence mode="wait">
              {isPlaying ? (
                <motion.div
                  key="pause"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="relative"
                >
                  <Pause className="w-5 h-5 md:w-6 md:h-6" />
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-1 -right-1"
                  >
                    <Music className="w-3 h-3 opacity-70" />
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div
                  key="play"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Play className="ml-1 w-5 h-5 md:w-6 md:h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        )}
      </div>
    </>
  );
}
