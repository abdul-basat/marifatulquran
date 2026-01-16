import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { courseImages, getCourseImageUrl } from "@/config/courseGallery";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";

interface CourseGalleryProps {
  className?: string;
}

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
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1] 
    } 
  }
};

export default function CourseGallery({ className }: CourseGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [desktopApi, setDesktopApi] = useState<CarouselApi>();
  const [desktopCurrent, setDesktopCurrent] = useState(0);

  // Randomize and get at least 10 images for desktop carousel
  const displayedImages = useMemo(() => {
    const shuffled = [...courseImages].sort(() => Math.random() - 0.5);
    // Show at least 10 images, or all if less than 10
    return shuffled.slice(0, Math.max(10, courseImages.length));
  }, []);

  // Get original index for lightbox navigation
  const getOriginalIndex = (displayedIndex: number) => {
    const imageName = displayedImages[displayedIndex];
    return courseImages.indexOf(imageName);
  };

  const openLightbox = (index: number, isFromDesktop: boolean = false) => {
    if (isFromDesktop) {
      // Use original index from full array
      const originalIndex = getOriginalIndex(index);
      setSelectedImage(originalIndex);
    } else {
      // From carousel, use direct index
      setSelectedImage(index);
    }
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

  // Mobile/Tablet Carousel auto-rotation setup
  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Desktop Carousel setup
  useEffect(() => {
    if (!desktopApi) return;

    setDesktopCurrent(desktopApi.selectedScrollSnap());

    desktopApi.on("select", () => {
      setDesktopCurrent(desktopApi.selectedScrollSnap());
    });
  }, [desktopApi]);

  return (
    <>
      <section className={cn("py-20 bg-gradient-to-b from-muted/30 to-background", className)}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="space-y-12"
          >
            <motion.div variants={fadeInUp} className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-primary">Course Posters Gallery</h2>
              <div className="w-20 h-1 bg-secondary rounded-full mx-auto" />
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Explore our comprehensive range of Islamic courses and programs through our course posters.
              </p>
            </motion.div>

            {/* Desktop Carousel View (lg and above) - At least 10 images */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="hidden lg:block w-full max-w-7xl mx-auto"
            >
              <Carousel
                setApi={setDesktopApi}
                opts={{
                  align: "start",
                  loop: true,
                  slidesToScroll: 1,
                }}
                plugins={[
                  Autoplay({
                    delay: 4000,
                    stopOnInteraction: false,
                    stopOnMouseEnter: true,
                  }),
                ]}
                className="w-full"
              >
                <CarouselContent className="-ml-4">
                  {displayedImages.map((image, index) => (
                    <CarouselItem key={`${image}-${index}`} className="pl-4 basis-1/3 xl:basis-1/4">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group relative cursor-pointer h-full"
                        onClick={() => openLightbox(index, true)}
                      >
                        <div className="relative overflow-hidden rounded-lg shadow-lg bg-card border-2 border-primary/20 hover:border-secondary/60 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
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
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="-left-12 bg-white/90 hover:bg-white shadow-lg" />
                <CarouselNext className="-right-12 bg-white/90 hover:bg-white shadow-lg" />
              </Carousel>
              
              {/* Desktop Carousel Indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {displayedImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => desktopApi?.scrollTo(index)}
                    className={cn(
                      "h-2 rounded-full transition-all duration-300",
                      desktopCurrent === index
                        ? "w-8 bg-secondary"
                        : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    )}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              
              {/* Show More Button */}
              <motion.div
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="flex justify-center mt-8"
              >
                <Link href="/gallery">
                  <Button 
                    size="lg" 
                    className="bg-secondary text-primary hover:bg-secondary/90 font-bold text-lg px-8 h-12 shadow-lg hover:scale-105 transition-transform duration-300 group"
                  >
                    View All Course Posters
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Mobile/Tablet Carousel View (below lg) */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="lg:hidden w-full max-w-2xl mx-auto"
            >
              <Carousel
                setApi={setApi}
                opts={{
                  align: "start",
                  loop: true,
                }}
                plugins={[
                  Autoplay({
                    delay: 4000,
                    stopOnInteraction: false,
                    stopOnMouseEnter: true,
                  }),
                ]}
                className="w-full"
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {courseImages.map((image, index) => (
                    <CarouselItem key={image} className="pl-2 md:pl-4 basis-full sm:basis-1/2">
                      <motion.div
                        className="group relative cursor-pointer"
                        onClick={() => openLightbox(index)}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="relative overflow-hidden rounded-lg shadow-lg bg-card border-2 border-primary/20">
                          {/* Image Container */}
                          <div className="aspect-[3/4] relative overflow-hidden">
                            <img
                              src={getCourseImageUrl(image)}
                              alt={`Course poster ${index + 1}`}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                            {/* Overlay on hover */}
                            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
                            {/* View icon overlay */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                                <svg
                                  className="w-6 h-6 text-primary"
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
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden sm:flex -left-4 md:-left-12" />
                <CarouselNext className="hidden sm:flex -right-4 md:-right-12" />
              </Carousel>
              
              {/* Carousel Indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {courseImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => api?.scrollTo(index)}
                    className={cn(
                      "h-2 rounded-full transition-all duration-300",
                      current === index
                        ? "w-8 bg-secondary"
                        : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    )}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

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
    </>
  );
}
