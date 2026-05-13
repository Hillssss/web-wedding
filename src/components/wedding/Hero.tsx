"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [guestName, setGuestName] =
    useState("Tamu Undangan");

  useEffect(() => {
    const params = new URLSearchParams(
      window.location.search
    );

    const to = params.get("to");

    if (to) {
      setGuestName(to);
    }
  }, []);

  return (
    <section className="relative h-screen w-full flex items-end justify-center overflow-hidden pb-32">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero4.JPEG"
          alt="Wedding Hero"
          fill
          className="object-cover brightness-75 scale-110"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 mb-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col items-center justify-center gap-3"
        >
          <div className="flex items-center justify-center gap-4 text-xl md:text-2xl font-light italic">
            <div className="h-[1px] w-12 bg-white/50" />

            <span>Dear</span>

            <div className="h-[1px] w-12 bg-white/50" />
          </div>

          <h2 className="text-4xl md:text-2xl font-semibold text-center">
            {guestName}
          </h2>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest opacity-70">
          Scroll
        </span>

        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
}