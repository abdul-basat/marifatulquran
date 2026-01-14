import { useEffect, useRef } from "react";
import { useInView, animate } from "framer-motion";

interface AnimatedCounterProps {
  to: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export default function AnimatedCounter({ to, suffix = "", duration = 2.5, className }: AnimatedCounterProps) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    const node = nodeRef.current;
    if (isInView && node) {
      const controls = animate(1, to, {
        duration,
        ease: "easeOut",
        onUpdate(value) {
          node.textContent = Math.floor(value) + suffix;
        },
      });
      return () => controls.stop();
    }
  }, [isInView, to, suffix, duration]);

  return <span ref={nodeRef} className={className}>1{suffix}</span>;
}
