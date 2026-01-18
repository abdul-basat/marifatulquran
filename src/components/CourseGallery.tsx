import { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight, ArrowRight, ZoomIn } from "lucide-react";
import { courseImages, getCourseImageUrl } from "@/config/courseGallery";
import { cn } from "@/lib/utils";

export default function CourseGallery() {
    // Get latest 10 images
    const latestImages = courseImages.slice(0, 10);

    // Carousel setup
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true, align: "center", slidesToScroll: 1 },
        [Autoplay({ delay: 3000, stopOnInteraction: false })]
    );

    // Lightbox setup
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const openLightbox = (index: number) => {
        setSelectedImageIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    const navigateLightbox = useCallback((direction: "prev" | "next") => {
        if (direction === "next") {
            setSelectedImageIndex((prev) => (prev + 1) % latestImages.length);
        } else {
            setSelectedImageIndex((prev) => (prev - 1 + latestImages.length) % latestImages.length);
        }
    }, [latestImages.length]);

    // Keyboard navigation for lightbox
    useEffect(() => {
        if (!lightboxOpen) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight") navigateLightbox("next");
            if (e.key === "ArrowLeft") navigateLightbox("prev");
            if (e.key === "Escape") closeLightbox();
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [lightboxOpen, navigateLightbox]);

    return (
        <section className="py-20 bg-background overflow-hidden">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 space-y-4"
                >
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary">
                        Course Posters Gallery
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Explore our comprehensive range of Islamic courses and programs through our course posters.
                    </p>
                </motion.div>

                {/* Carousel */}
                <div className="relative max-w-7xl mx-auto">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex -ml-4">
                            {latestImages.map((image, index) => (
                                <div
                                    key={index}
                                    className="flex-[0_0_80%] min-w-0 pl-4 sm:flex-[0_0_50%] md:flex-[0_0_33.33%] lg:flex-[0_0_25%]"
                                >
                                    <div
                                        className="relative group cursor-pointer overflow-hidden rounded-xl shadow-md border border-border/50 bg-card hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                                        onClick={() => openLightbox(index)}
                                    >
                                        <div className="aspect-[3/4] overflow-hidden relative">
                                            <img
                                                src={getCourseImageUrl(image)}
                                                alt={`Course Poster ${index + 1}`}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                loading="lazy"
                                            />
                                            {/* Hover Overlay */}
                                            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />

                                            {/* View Icon */}
                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <div className="bg-background/90 backdrop-blur-sm p-3 rounded-full shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
                                                    <ZoomIn className="w-6 h-6 text-primary" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* View All Button */}
                <div className="mt-12 text-center">
                    <Link href="/gallery">
                        <Button size="lg" className="group text-lg px-8 py-6 rounded-full shadow-lg hover:bg-primary/90">
                            View All Course Posters
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>

                {/* Lightbox Modal */}
                <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
                    <DialogContent
                        showCloseButton={false}
                        className="max-w-[100vw] h-[100vh] p-0 bg-transparent border-none shadow-none flex items-center justify-center focus:outline-none"
                    >
                        <DialogTitle className="sr-only">Course Poster Viewer</DialogTitle>
                        <DialogDescription className="sr-only">
                            Viewing a full screen version of a course poster from the gallery.
                        </DialogDescription>
                        <div
                            className="relative w-full h-full flex flex-col items-center justify-center pointer-events-auto"
                            onClick={closeLightbox}
                        >
                            {/* Close Button */}
                            <Button
                                variant="ghost"
                                size="icon"
                                className="absolute top-2 right-2 md:top-4 md:right-4 z-50 bg-black/50 hover:bg-black/70 text-white rounded-full p-2"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    closeLightbox();
                                }}
                            >
                                <X className="h-6 w-6" />
                            </Button>

                            {/* Images */}
                            <div
                                className="relative flex items-center justify-center w-full h-full p-4"
                                onClick={(e) => e.stopPropagation()} // Prevent close when clicking image area/controls
                            >
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="absolute left-2 md:left-8 z-50 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 hidden sm:flex"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        navigateLightbox("prev");
                                    }}
                                >
                                    <ChevronLeft className="h-8 w-8" />
                                </Button>

                                <img
                                    src={getCourseImageUrl(latestImages[selectedImageIndex])}
                                    alt="Course Poster Full View"
                                    className="max-h-full max-w-full object-contain rounded-lg shadow-2xl"
                                />

                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="absolute right-2 md:right-8 z-50 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 hidden sm:flex"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        navigateLightbox("next");
                                    }}
                                >
                                    <ChevronRight className="h-8 w-8" />
                                </Button>

                                {/* Counter */}
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 px-4 py-1 rounded-full text-white text-sm backdrop-blur-sm">
                                    {selectedImageIndex + 1} / {latestImages.length}
                                </div>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        </section>
    );
}
