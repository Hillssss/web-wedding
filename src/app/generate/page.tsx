"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Copy, ExternalLink, Send, Share2, Wand2, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function GenerateLink() {
  const [guestName, setGuestName] = useState("");
  const [generatedLink, setGeneratedLink] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const [origin, setOrigin] = useState("");

  useEffect(() => {
    setOrigin(window.location.origin);
  }, []);

  const handleGenerate = () => {
    if (!guestName.trim()) return;
    const encodedName = encodeURIComponent(guestName.trim());
    const link = `${origin}/?to=${encodedName}`;
    setGeneratedLink(link);
  };

  const handleCopy = () => {
    if (!generatedLink) return;
    navigator.clipboard.writeText(generatedLink);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleWhatsApp = () => {
    if (!generatedLink) return;
    const message = `Assalamualaikum wr.wb .Bismillahirrahmanirrahim.

Kepada Yth.
Bapak/Ibu/Saudara/i.

Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan kami:

Syahlan ＆ Fenny

Untuk informasi lengkap mengenai acara, silakan kunjungi tautan undangan berikut:
${generatedLink}

Merupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.

Mohon maaf, undangan disampaikan melalui pesan ini. Terima kasih atas perhatian dan doanya.

Wassalamualaikum warahmatullahi wabarakatuh.

Kami yang berbahagia,
Syahlan ＆ Fenny`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleTestLink = () => {
    if (!generatedLink) return;
    window.open(generatedLink, "_blank");
  };

  return (
    <main className="min-h-screen bg-[#f5ebe0] flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-xl"
      >
        <Card className="border-none shadow-2xl bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center space-y-2 pb-8">
            <CardTitle className="text-4xl font-playfair text-[#a67c52]">Syahlan & Fenny</CardTitle>
            <CardDescription className="text-lg">Generator Link Undangan Tamu</CardDescription>
          </CardHeader>

          <CardContent className="space-y-8">
            {/* Input Section */}
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground ml-1">Nama Tamu :</label>
                <Input
                  placeholder="Contoh: Hilal Dan Patner"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  className="bg-white h-12 text-lg border-[#e6d5c3] focus:ring-[#a67c52]"
                />
              </div>

              <Button 
                onClick={handleGenerate}
                disabled={!guestName.trim()}
                className="w-full h-14 text-lg bg-[#8a8a8a] hover:bg-[#707070] text-white shadow-lg transition-all"
              >
                <Wand2 className="mr-2 w-5 h-5" />
                Buat Link Undangan
              </Button>
            </div>

            {/* Result Section */}
            {generatedLink && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="space-y-6 pt-6 border-t border-[#e6d5c3]"
              >
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground ml-1">Hasil Generate :</label>
                  <div className="flex gap-2">
                    <Input
                      readOnly
                      value={generatedLink}
                      className="bg-[#fcfaf7] h-12 text-sm border-[#e6d5c3] font-mono text-muted-foreground"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Button 
                    variant="outline" 
                    onClick={handleCopy}
                    className="h-12 border-[#e6d5c3] text-[#a67c52] hover:bg-[#f5ebe0]"
                  >
                    {isCopied ? <Check className="mr-2 w-4 h-4" /> : <Copy className="mr-2 w-4 h-4" />}
                    {isCopied ? "Tersalin" : "Copy Link"}
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={handleTestLink}
                    className="h-12 border-[#e6d5c3] text-[#a67c52] hover:bg-[#f5ebe0]"
                  >
                    <ExternalLink className="mr-2 w-4 h-4" />
                    Test Link
                  </Button>
                </div>

                <div className="space-y-3">
                  <Button 
                    onClick={handleWhatsApp}
                    className="w-full h-14 bg-[#25D366] hover:bg-[#128C7E] text-white shadow-md text-lg"
                  >
                    <Send className="mr-2 w-5 h-5" />
                    Kirim Undangan via WhatsApp
                  </Button>
                  
                  <Button 
                    variant="ghost"
                    className="w-full h-12 text-muted-foreground"
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({
                          title: 'Undangan Pernikahan Syahlan & Fenny',
                          text: `Assalamualaikum wr.wb .Bismillahirrahmanirrahim.

Kepada Yth.
Bapak/Ibu/Saudara/i.

Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan kami:

Syahlan ＆ Fenny

Untuk informasi lengkap mengenai acara, silakan kunjungi tautan undangan berikut:

Merupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.

Mohon maaf, undangan disampaikan melalui pesan ini. Terima kasih atas perhatian dan doanya.

Wassalamualaikum warahmatullahi wabarakatuh.

Kami yang berbahagia,
Syahlan ＆ Fenny`,
                          url: generatedLink,
                        });
                      }
                    }}
                  >
                    <Share2 className="mr-2 w-4 h-4" />
                    Bagikan ke Media Sosial Lainnya
                  </Button>
                </div>
              </motion.div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </main>
  );
}
