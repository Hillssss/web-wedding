"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function RSVPForm() {
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState("");
  const [message, setMessage] = useState("");

  const [wishes, setWishes] = useState<any[]>([]);
const [currentPage, setCurrentPage] = useState(1);

const itemsPerPage = 6;

const totalPages = Math.ceil(
  wishes.length / itemsPerPage
);

const startIndex =
  (currentPage - 1) * itemsPerPage;

const currentWishes = wishes.slice(
  startIndex,
  startIndex + itemsPerPage
);

  const fetchWishes = async () => {
    const { data, error } = await supabase
      .from("wishes")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      return;
    }

    setWishes(data || []);
  };

  useEffect(() => {
    fetchWishes();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !attendance) {
     toast.error("Nama dan kehadiran wajib diisi");
      return;
    }

    try {
      setLoading(true);

      const { error } = await supabase
        .from("wishes")
        .insert([
          {
            name,
            attendance,
            message,
          },
        ]);

      if (error) {
       toast.error("Gagal mengirim ucapan");
        return;
      }

      await fetchWishes();

     toast.success("Ucapan berhasil dikirim");

      setName("");
      setAttendance("");
      setMessage("");
    } catch (err) {
      toast.error("Terjadi kesalahan");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="rsvp" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="border-none shadow-2xl">
            <div className="h-3 bg-primary rounded-t-xl" />

            <CardHeader className="text-center pt-12">
              <CardTitle className="text-4xl font-playfair mb-2">
                Harapan
              </CardTitle>

              <CardDescription className="text-l">
                Kepada Bapak/Ibu/Saudara/i yang ingin memberikan
                ucapan kepada kami dapat dituliskan di bawah ini
              </CardDescription>
            </CardHeader>

            <CardContent className="p-8 md:p-12">
              
              {/* FORM */}
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <Label htmlFor="name">
                    Nama Lengkap
                  </Label>

                  <Input
                    id="name"
                    placeholder="Nama"
                    required
                    className="bg-background"
                    value={name}
                    onChange={(e) =>
                      setName(e.target.value)
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="attendance">
                    Kehadiran
                  </Label>

                  <Select
                    value={attendance}
                    onValueChange={(value) =>
                      setAttendance(value ?? "")
                    }
                  >
                    <SelectTrigger className="bg-background w-full">
                      <SelectValue placeholder="Pilih Kehadiran" />
                    </SelectTrigger>

                    <SelectContent className="min-w-[300px]">
                      <SelectItem value="Ya">
                        Ya, saya akan datang
                      </SelectItem>

                      <SelectItem value="Tidak">
                        Mohon maaf, saya tidak dapat hadir
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">
                    Pesan untuk Mempelai
                  </Label>

                  <Textarea
                    id="message"
                    placeholder="Optional"
                    className="bg-background min-h-[100px]"
                    value={message}
                    onChange={(e) =>
                      setMessage(e.target.value)
                    }
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full py-6 text-lg font-playfair tracking-wider"
                >
                  {loading
                    ? "Mengirim..."
                    : "Kirim Ucapan"}
                </Button>
              </form>

              {/* UCAPAN */}
              <div className="mt-10">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-playfair">
                    Ucapan
                  </h3>

                  <p className="text-muted-foreground mt-2">
                    Doa dan harapan terbaik untuk mempelai
                  </p>
                </div>

                <div className="space-y-4 max-h-[350px] overflow-y-auto pr-2">
                  
                  {wishes.length === 0 && (
                    <div className="text-center text-muted-foreground py-10 border rounded-lg">
                      Belum ada ucapan
                    </div>
                  )}

                  {currentWishes.map((item) => (
                    <div
                      key={item.id}
                      className="border rounded-2xl p-5 bg-background"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold text-xs">
                          {item.name}
                        </h3>

                      <div
  className={`w-9 h-9 rounded-full flex items-center justify-center ${
    item.attendance === "Ya"
      ? "bg-green-100 text-green-700"
      : "bg-red-100 text-red-700"
  }`}
>
  {item.attendance === "Ya" ? (
    <Check className="w-5 h-5" />
  ) : (
    <X className="w-5 h-5" />
  )}
</div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">
                        {item.message || "-"}
                      </p>
                    </div>
                  ))}

                </div>
              </div>

            </CardContent>
          </Card>
        </motion.div>
      </div>

      {totalPages > 1 && (
  <div className="flex items-center justify-center gap-2 mt-6">
    
    <Button
      type="button"
      variant="outline"
      size="sm"
      disabled={currentPage === 1}
      onClick={() =>
        setCurrentPage((prev) => prev - 1)
      }
    >
      Prev
    </Button>

    {Array.from(
      { length: totalPages },
      (_, index) => (
        <Button
          key={index}
          type="button"
          size="sm"
          variant={
            currentPage === index + 1
              ? "default"
              : "outline"
          }
          onClick={() =>
            setCurrentPage(index + 1)
          }
        >
          {index + 1}
        </Button>
      )
    )}

    <Button
      type="button"
      variant="outline"
      size="sm"
      disabled={currentPage === totalPages}
      onClick={() =>
        setCurrentPage((prev) => prev + 1)
      }
    >
      Next
    </Button>

  </div>
)}
    </section>
  );
}