"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function Gallery() {
  const images = [
    { src: "/images/hero3.JPEG", alt: "Couple 1", span: "col-span-2 row-span-2" },
    { src: "/images/sahlan.jpeg", alt: "Couple 2", span: "col-span-1 row-span-1" },
    { src: "/images/sahlan2.jpeg", alt: "Venue", span: "col-span-1 row-span-2" },
    { src: "/images/sahlan3.jpeg", alt: "Couple 3", span: "col-span-1 row-span-1" },
  ];

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-playfair mb-4">Galeri</h2>
          <p className="text-muted-foreground">Momen yang Terabadikan</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`${img.span} relative overflow-hidden rounded-xl shadow-lg group`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
