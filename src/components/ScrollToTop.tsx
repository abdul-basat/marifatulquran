import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";

export default function ScrollToTop() {
  const [pathname] = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  // Reset scroll on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Handle scroll visibility
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[60]"
        >
          <Button
            onClick={scrollToTop}
            size="icon"
            className="h-12 w-12 md:h-14 md:w-14 rounded-full shadow-2xl bg-secondary hover:bg-secondary/90 text-primary border-2 border-white/20 transition-all duration-300 hover:scale-110 active:scale-95 group"
          >
            <ArrowUp className="h-6 w-6 md:h-7 md:w-7 group-hover:-translate-y-1 transition-transform duration-300" />
            <span className="sr-only">Scroll to top</span>
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
