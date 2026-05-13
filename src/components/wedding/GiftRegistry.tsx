"use client";

import { motion } from "framer-motion";
import { Copy, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

export default function GiftRegistry() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const accounts = [
    {
      bank: "Bank BCA",
      number: "6820670602",
      owner: "Syahlan Nurdin",
      id: "bca",
    },
    {
      bank: "Bank BNI",
      number: "0576293874",
      owner: "Fenny Karlina Dewi Putri",
      id: "bni",
    },
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <Gift className="w-12 h-12 text-primary mx-auto opacity-70" />
          <h2 className="text-4xl md:text-5xl font-playfair">Hadiah Pernikahan</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Kehadiran Anda di pernikahan kami adalah hadiah terbesar dari semuanya. Namun, jika Anda ingin menghormati kami dengan sebuah hadiah, sumbangan untuk masa depan kami bersama akan sangat kami hargai.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {accounts.map((account) => (
            <motion.div
              key={account.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Card className="border border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors">
                <CardContent className="p-8 space-y-4">
                  <p className="text-xl font-playfair font-semibold">{account.bank}</p>
                  <div className="space-y-1">
                    <p className="text-2xl font-mono tracking-wider">{account.number}</p>
                    <p className="text-sm text-muted-foreground uppercase tracking-widest">a.n {account.owner}</p>
                  </div>
                  <Button 
                    variant="outline" 
                    className="gap-2"
                    onClick={() => copyToClipboard(account.number, account.id)}
                  >
                    {copied === account.id ? "Copied!" : "Copy Account"}
                    <Copy className="w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
