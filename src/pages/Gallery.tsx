import { useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { courseImages, getCourseImageUrl } from "@/config/courseGallery";
import { cn } from "@/lib/utils";
import SEO from "@/components/SEO";
import pattern from "@/assets/pattern.jpg";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      duration: 0.7, 
      ease: [0.22, 1, 0.36, 1] 
    } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
    setTimeout(() => setSelectedImage(null), 300);
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return;
    
    if (direction === "next") {
      setSelectedImage((selectedImage + 1) % courseImages.length);
    } else {
      setSelectedImage((selectedImage - 1 + courseImages.length) % courseImages.length);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") navigateImage("prev");
    if (e.key === "ArrowRight") navigateImage("next");
    if (e.key === "Escape") closeLightbox();
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO 
        title="Course Gallery - معرفۃ القرآن" 
        description="Browse all course posters and announcements from Marifat Ul Quran - معرفۃ القرآن للبنین و للبنات" 
      />
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-secondary text-primary py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${pattern})` }} />
          <div className="container relative z-10 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-heading font-bold mb-4"
            >
              Course Posters Gallery
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg opacity-90 max-w-3xl mx-auto"
            >
              Explore our comprehensive range of Islamic courses and programs
            </motion.p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {courseImages.map((image, index) => (
                <motion.div
                  key={image}
                  variants={fadeInUp}
                  className="group relative cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <div className="relative overflow-hidden rounded-lg shadow-lg bg-card border-2 border-primary/20 hover:border-secondary/60 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    {/* Image Container */}
                    <div className="aspect-[3/4] relative overflow-hidden">
                      <img
                        src={getCourseImageUrl(image)}
                        alt={`Course poster ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
                      {/* View icon overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                          <svg
                            className="w-8 h-8 text-primary"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Lightbox Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogOverlay className="bg-black/90 backdrop-blur-sm" />
        <DialogContent
          className="max-w-7xl w-full p-0 bg-transparent border-none shadow-none"
          onKeyDown={handleKeyDown}
          showCloseButton={false}
        >
          {selectedImage !== null && (
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-50 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm"
                onClick={closeLightbox}
                aria-label="Close"
              >
                <X className="h-6 w-6" />
              </Button>

              {/* Previous Button */}
              {courseImages.length > 1 && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 z-50 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm"
                  onClick={() => navigateImage("prev")}
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-8 w-8" />
                </Button>
              )}

              {/* Next Button */}
              {courseImages.length > 1 && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 z-50 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm"
                  onClick={() => navigateImage("next")}
                  aria-label="Next image"
                >
                  <ChevronRight className="h-8 w-8" />
                </Button>
              )}

              {/* Image Counter */}
              {courseImages.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-50 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
                  {selectedImage + 1} / {courseImages.length}
                </div>
              )}

              {/* Main Image */}
              <motion.img
                key={selectedImage}
                src={getCourseImageUrl(courseImages[selectedImage])}
                alt={`Course poster ${selectedImage + 1}`}
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
