import Hero from "@/components/wedding/Hero";
import Story from "@/components/wedding/Story";
import EventDetails from "@/components/wedding/EventDetails";
import RSVPForm from "@/components/wedding/RSVPForm";
import GiftRegistry from "@/components/wedding/GiftRegistry";
import Gallery from "@/components/wedding/Gallery";
import Countdown from "@/components/wedding/Countdown";
import BrideGroom from "@/components/wedding/BrideGroom";
import MusicPlayer from "@/components/wedding/MusicPlayer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <MusicPlayer />
      <Hero />
      <BrideGroom />
      <Countdown />
      <Story />
      <EventDetails />
      <Gallery />
      <RSVPForm />
      <GiftRegistry />
      
      {/* Footer */}
      <footer className="py-12 px-6 border-t border-primary/10 text-center space-y-4 bg-white">
        <h3 className="font-playfair text-2xl text-primary">Syahlan & Fenny</h3>
        <p className="text-muted-foreground text-sm tracking-[0.2em] uppercase italic">
          "And of everything we created pairs, that you may remember."
        </p>
        <p className="text-xs text-muted-foreground opacity-50 pt-8">
          &copy; 2026 Hillsss.
        </p>
      </footer>
    </main>
  );
}
