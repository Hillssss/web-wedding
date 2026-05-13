"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const TimeUnit = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center">
    <div className="relative overflow-hidden bg-white/40 backdrop-blur-md rounded-2xl w-20 h-24 md:w-28 md:h-32 flex items-center justify-center shadow-lg border border-white/50">
      <AnimatePresence mode="wait">
        <motion.span
          key={value}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-playfair font-bold text-primary"
        >
          {value.toString().padStart(2, "0")}
        </motion.span>
      </AnimatePresence>
    </div>
    <span className="mt-3 text-sm md:text-base font-medium tracking-widest uppercase text-muted-foreground">
      {label}
    </span>
  </div>
);

export default function Countdown() {
  const targetDate = new Date("2026-05-17T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-4 mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-playfair text-primary">Hari Spesial Kami</h2>
          <div className="w-24 h-1 bg-primary/20 mx-auto rounded-full" />
          <p className="text-muted-foreground tracking-[0.2em] uppercase text-sm font-medium">
            17 Mei 2026
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 justify-center items-center">
          <TimeUnit value={timeLeft.days} label="Hari" />
          <TimeUnit value={timeLeft.hours} label="Jam" />
          <TimeUnit value={timeLeft.minutes} label="Menit" />
          <TimeUnit value={timeLeft.seconds} label="Detik" />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-16 text-muted-foreground italic font-playfair text-lg"
        >
          “Merayakan hari bahagia bersama keluarga tercinta”
        </motion.p>
      </div>
    </section>
  );
}
