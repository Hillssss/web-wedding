"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BrideGroom() {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-muted-foreground leading-relaxed italic">
            Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/i serta kerabat sekalian untuk menghadiri acara pernikahan kami :
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          
          {/* Mempelai Pria */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center space-y-6"
          >
            <div className="relative aspect-[3/4] w-full rounded-full overflow-hidden border-8 border-secondary/20 shadow-2xl mx-auto max-w-sm">
              <img
                src="/images/hero5.JPEG"
                alt="Syahlan Nurdin"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="space-y-2">
              <h1 className="text-3xl md:text-4xl font-playfair text-primary">
                Syahlan Nurdin
              </h1>
              <p className="text-muted-foreground text-lg italic">
                Putra Pertama dari Bapak Jefri (Alm.) & Ibu Erna Ganefiwati
              </p>
            </div>
          </motion.div>

          {/* Mempelai Wanita */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center space-y-6"
          >
            <div className="relative aspect-[3/4] w-full rounded-full overflow-hidden border-8 border-secondary/20 shadow-2xl mx-auto max-w-sm">
              <img
                src="/images/hero6.JPEG"
                alt="Mempelai Wanita"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="space-y-2">
              <h1 className="text-3xl md:text-4xl font-playfair text-primary">
                Fenny Karlina Dewi Putri
              </h1>
              <p className="text-muted-foreground text-lg italic">
                Putri Pertama dari Bapak Syahrial (Alm.) & Ibu Enung Nurhayati
              </p>
            </div>
          </motion.div>

        </div>

        {/* Ornament Tengah */}
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        >
          <span className="text-8xl font-playfair text-primary/10 select-none">&</span>
        </motion.div>
      </div>
    </section>
  );
}
