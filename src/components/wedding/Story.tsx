"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Story() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-24">
        {/* Story Text */}
        <div className="flex-1 space-y-6">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-playfair text-primary"
          >
          Satu Ikatan, Satu Tujuan
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4 text-muted-foreground leading-relaxed text-lg"
          >
            <p>
              Tentang ketenangan, cinta, dan kasih sayang dalam pernikahan.
            </p>
            <p>
             “Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang…”
            </p>
            <p className="font-playfair italic text-primary text-2xl pt-4">
              "(Ar-Rum ayat 21)"
            </p>
          </motion.div>
        </div>

        {/* Story Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex-1 relative aspect-[4/5] w-full max-w-md rounded-2xl overflow-hidden shadow-2xl"
        >
          <Image
            src="/images/hero2.JPEG"
            alt="Couple Story"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl" />
        </motion.div>
      </div>
    </section>
  );
}
