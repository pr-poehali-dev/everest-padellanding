import HeroSection from "@/components/HeroSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";

export default function Index() {
  return (
    <div className="min-h-screen font-body overflow-x-hidden">
      <HeroSection />
      <GallerySection />
      <ContactSection />
    </div>
  );
}
