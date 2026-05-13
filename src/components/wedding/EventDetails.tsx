"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function EventDetails() {
  const details = [
    {
      icon: <Calendar className="w-6 h-6 text-primary" />,
      title: "Tanggal",
      description: "Minggu, 17 Mei 2026",
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "Waktu",
      description: "10:00 WIB - Selesai",
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "Lokasi",
      description: "Kediaman Mempelai Lelaki",
    },
  ];

  return (
    <section className="py-24 bg-background px-6">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-playfair mb-4">Perayaan Bahagia</h2>
          <p className="text-muted-foreground">Dengan penuh sukacita, kami mengundang Anda untuk hadir dan berbagi kebahagiaan bersama kami.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {details.map((detail, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="border-none shadow-lg bg-white/50 backdrop-blur-sm">
                <CardContent className="pt-8 pb-8 flex flex-col items-center gap-4">
                  <div className="p-4 bg-primary/10 rounded-full">{detail.icon}</div>
                  <h3 className="font-playfair text-xl">{detail.title}</h3>
                  <p className="text-muted-foreground">{detail.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Map Placeholder */}
   <motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 1 }}
  className="aspect-video w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white relative"
>
  <img
    src="/images/image.png"
    alt="Map"
    className="absolute inset-0 w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-black/35 flex items-center justify-center">
    <div className="text-center space-y-4 text-white">
      <MapPin className="w-12 h-12 mx-auto" />

      <p className="font-playfair text-xl">
        Tampilan Peta Interaktif
      </p>

      <a
        href="https://maps.app.goo.gl/YjB1X4JjygtgZfaS8?g_st=iw"
        target="_blank"
        className="inline-block px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
      >
        Buka di Google Maps
      </a>
    </div>
  </div>
</motion.div>
      </div>
    </section>
  );
}
