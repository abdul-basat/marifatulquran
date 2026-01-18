import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, Globe, Award, CheckCircle, ArrowRight, Star, Quote, GraduationCap, FileText, Info, Images, Phone, User } from "lucide-react";
import { Link } from "wouter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import AnimatedCounter from "@/components/AnimatedCounter";

// Image paths from public/images (WebP preferred)
const heroBgLight = "/images/hero/hero-bg-light.webp";
const pattern = "/images/hero/pattern.webp";
const onlineLearning = "/images/campus/online-learning.webp";
const campus = "/images/campus/campus.webp";


import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import SEO from "@/components/SEO";
import CourseGallery from "@/components/CourseGallery";
import { cn } from "@/lib/utils";

export default function Home() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  const driftInLeft: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.0, ease: "easeOut" } }
  };

  const driftInRight: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.0, ease: "easeOut" } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const titleWord: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const imageZoom: Variants = {
    hidden: { scale: 1.05, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 1.5, ease: "easeOut" } }
  };

  const headingText = "Marifat Ul Quran".split(" ");
  const videoRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any>(null);
  const [hasAutoPlayed, setHasAutoPlayed] = useState(false);
  const isInViewRef = useRef(false);

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  useEffect(() => {
    // Load YouTube Iframe API
    if (!(window as any).YT) {
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    }

    const onPlayerReady = (event: any) => {
      if (isInViewRef.current && !hasAutoPlayed) {
        event.target.playVideo();
        setHasAutoPlayed(true);
      }
    };

    const initPlayer = () => {
      playerRef.current = new (window as any).YT.Player('youtube-player', {
        videoId: 'frZkUdcFUuE',
        host: 'https://www.youtube-nocookie.com', // Privacy-enhanced mode - reduces cookies
        playerVars: {
          'playsinline': 1,
          'modestbranding': 1,
          'rel': 0,
          'controls': 1,
          'origin': window.location.origin, // Required for nocookie mode
        },
        events: {
          'onReady': onPlayerReady,
          'onStateChange': (event: any) => {
            // Optional: Handle state changes if needed
          }
        }
      });
    };

    if ((window as any).YT && (window as any).YT.Player) {
      initPlayer();
    } else {
      (window as any).onYouTubeIframeAPIReady = initPlayer;
    }

    return () => {
      if (playerRef.current && playerRef.current.destroy) {
        playerRef.current.destroy();
      }
    };
  }, []); // Empty dependency array to run once

  useEffect(() => {
    const node = videoRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isInViewRef.current = entry.isIntersecting;
          if (entry.isIntersecting) {
            // Only autoplay if it hasn't played automatically yet
            if (!hasAutoPlayed && playerRef.current && playerRef.current.playVideo) {
              playerRef.current.playVideo();
              setHasAutoPlayed(true);
            }
          } else {
            // Pause when scrolled away
            if (playerRef.current && playerRef.current.pauseVideo) {
              playerRef.current.pauseVideo();
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(node);

    return () => {
      observer.unobserve(node);
    };
  }, [hasAutoPlayed]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO title="Home" description="Welcome to Marifat Ul Quran, a beacon of sacred Islamic knowledge offering Dars-e-Nizami, Hifz, and online courses." />
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[600px] flex items-center justify-center text-center text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 z-0">
            <motion.img
              src={heroBgLight}
              alt="Marifat Ul Quran Islamic Academy Background"
              className="w-full h-full object-cover"
              // @ts-ignore - fetchpriority is valid HTML attribute
              fetchpriority="high"
              loading="eager"
              decoding="async"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 10, ease: "linear", repeat: Infinity, repeatType: "reverse" }} // Ken Burns effect
            />
            <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px]" />
          </div>

          <div className="container relative z-10 px-4 py-20 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block px-6 py-2 rounded-full bg-secondary text-primary font-bold text-sm mb-4 shadow-lg backdrop-blur-sm"
            >
              Admissions Open for 2025-26 Session
            </motion.div>

            {/* Cinematic Title Reveal */}
            <motion.h1
              className="font-heading text-5xl md:text-7xl font-bold leading-tight drop-shadow-md flex flex-wrap justify-center gap-x-4"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {headingText.map((word, index) => (
                <motion.span key={index} variants={titleWord}>
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.8 }}
              className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-light drop-shadow-sm"
            >
              A beacon of sacred knowledge, illuminating hearts with the eternal light of the Quran and Sunnah.
            </motion.p>
            {/* Quick Navigation Icon Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="mt-12"
            >

              <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                {[
                  {
                    name: "Admissions",
                    href: "/admissions",
                    icon: GraduationCap,
                    bgColor: "bg-gradient-to-br from-amber-400/90 to-yellow-500/90",
                    hoverBgColor: "group-hover:from-amber-300 group-hover:to-yellow-400",
                    borderColors: "from-amber-400 via-yellow-500 to-orange-500"
                  },
                  {
                    name: "Courses",
                    href: "/courses",
                    icon: BookOpen,
                    bgColor: "bg-gradient-to-br from-blue-400/90 to-cyan-500/90",
                    hoverBgColor: "group-hover:from-blue-300 group-hover:to-cyan-400",
                    borderColors: "from-blue-400 via-cyan-500 to-teal-500"
                  },
                  {
                    name: "Results",
                    href: "/results",
                    icon: FileText,
                    bgColor: "bg-gradient-to-br from-green-400/90 to-emerald-500/90",
                    hoverBgColor: "group-hover:from-green-300 group-hover:to-emerald-400",
                    borderColors: "from-green-400 via-emerald-500 to-teal-500"
                  },
                  {
                    name: "About",
                    href: "/about",
                    icon: Info,
                    bgColor: "bg-gradient-to-br from-purple-400/90 to-pink-500/90",
                    hoverBgColor: "group-hover:from-purple-300 group-hover:to-pink-400",
                    borderColors: "from-purple-400 via-pink-500 to-rose-500"
                  },
                  {
                    name: "Gallery",
                    href: "/gallery",
                    icon: Images,
                    bgColor: "bg-gradient-to-br from-indigo-400/90 to-violet-500/90",
                    hoverBgColor: "group-hover:from-indigo-300 group-hover:to-violet-400",
                    borderColors: "from-indigo-400 via-violet-500 to-purple-500"
                  },
                  {
                    name: "Contact",
                    href: "/contact",
                    icon: Phone,
                    bgColor: "bg-gradient-to-br from-rose-400/90 to-red-500/90",
                    hoverBgColor: "group-hover:from-rose-300 group-hover:to-red-400",
                    borderColors: "from-rose-400 via-red-500 to-pink-500"
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 1.2 + (index * 0.1),
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    whileHover={{ scale: 1.15, y: -8 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative"
                  >
                    <Link href={item.href}>
                      <div className={cn(
                        "group relative flex flex-col items-center gap-2 cursor-pointer"
                      )}>
                        {/* Animated multicolor border ring */}
                        <div className="relative w-16 h-16 md:w-20 md:h-20">
                          {/* Rotating gradient border wrapper */}
                          <div
                            className={cn(
                              "absolute inset-0 rounded-full animate-rotate-gradient",
                              "opacity-75 group-hover:opacity-100",
                              "transition-opacity duration-500",
                              "p-[3px]"
                            )}
                            style={{
                              background: (() => {
                                const colors = item.borderColors.split(' ');
                                const colorMap: Record<string, string> = {
                                  'from-amber-400': '#fbbf24',
                                  'via-yellow-500': '#eab308',
                                  'to-orange-500': '#f97316',
                                  'from-blue-400': '#60a5fa',
                                  'via-cyan-500': '#06b6d4',
                                  'to-teal-500': '#14b8a6',
                                  'from-green-400': '#4ade80',
                                  'via-emerald-500': '#10b981',
                                  'from-purple-400': '#a78bfa',
                                  'via-pink-500': '#ec4899',
                                  'to-rose-500': '#f43f5e',
                                  'from-indigo-400': '#818cf8',
                                  'via-violet-500': '#8b5cf6',
                                  'to-purple-500': '#a855f7',
                                  'from-rose-400': '#fb7185',
                                  'via-red-500': '#ef4444',
                                  'to-pink-500': '#ec4899',
                                };
                                const mappedColors = colors.map(c => colorMap[c] || c).filter(Boolean);
                                return `conic-gradient(from 0deg, ${mappedColors.join(', ')})`;
                              })(),
                            }}
                          >
                            <div className="w-full h-full rounded-full bg-background" />
                          </div>

                          {/* Button container with shining color */}
                          <div className={cn(
                            "absolute inset-[3px] rounded-full flex items-center justify-center",
                            "shadow-2xl backdrop-blur-sm",
                            "transition-all duration-500",
                            item.bgColor,
                            item.hoverBgColor,
                            "group-hover:shadow-[0_0_30px_rgba(255,255,255,0.6)]",
                            "group-hover:scale-105"
                          )}>
                            {/* Inner glow effect */}
                            <div className="absolute inset-0 rounded-full bg-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

                            {/* Shine effect */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <item.icon className="relative z-10 w-7 h-7 md:w-8 md:h-8 text-white group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 drop-shadow-lg" />
                          </div>
                        </div>

                        <span className="text-white/90 text-xs md:text-sm font-medium group-hover:text-white transition-colors duration-300 whitespace-nowrap drop-shadow-md">
                          {item.name}
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 overflow-hidden">
          <div className="container">
            <motion.div
              className="grid md:grid-cols-2 gap-12 items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div variants={driftInLeft} className="space-y-6">
                <h2 className="text-4xl font-bold text-primary">About Marifat Ul Quran</h2>
                <div className="w-20 h-1 bg-secondary rounded-full" />
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Marifat Ul Quran stands as a fortress of Islamic learning, dedicated to preserving and propagating the sacred sciences. Our institution is built on the foundations of sincerity, academic rigor, and spiritual purification.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  We offer a comprehensive curriculum that blends traditional Dars-e-Nizami with modern educational requirements, ensuring our graduates are well-equipped to serve the Ummah in the contemporary world.
                </p>
                <ul className="space-y-3 mt-4">
                  {[
                    "Pure Islamic Environment",
                    "Affiliated with Recognized Boards",
                    "Qualified & Experienced Faculty",
                    "Focus on Character Building (Tarbiyah)"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-primary font-medium">
                      <CheckCircle className="h-5 w-5 text-secondary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/about">
                  <Button className="mt-4 shadow-md hover:shadow-lg transition-all" variant="outline">Read Our History</Button>
                </Link>
              </motion.div>

              <motion.div variants={driftInRight} className="relative">
                <div className="absolute -inset-4 bg-secondary/20 rounded-xl transform rotate-3" />
                <img src={campus} alt="Campus Life" className="relative rounded-xl shadow-xl w-full object-cover aspect-video hover:scale-[1.02] transition-transform duration-700 ease-out" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="container max-w-5xl mx-auto px-4">
            <motion.div
              ref={videoRef}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="space-y-8"
            >
              <motion.div variants={fadeInUp} className="text-center space-y-4">
                <h2 className="text-4xl font-bold text-primary">Watch Our Story</h2>
                <div className="w-20 h-1 bg-secondary rounded-full mx-auto" />
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Discover the journey of Marifat Ul Quran and how we're shaping the future of Islamic education.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="relative w-full rounded-xl overflow-hidden shadow-2xl bg-black"
                style={{ aspectRatio: "16/9" }}
              >
                <div id="youtube-player" className="absolute inset-0 w-full h-full" />
              </motion.div>
            </motion.div>
          </div>
        </section>


        {/* Courses Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: `url(${pattern})` }} />
          <motion.div
            className="container relative z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-primary">Our Academic Programs</motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground">Comprehensive Islamic education pathways designed for diverse learning needs.</motion.p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Dars-e-Nizami", icon: BookOpen, desc: "The premier 8-year Alim/Alimah scholar course covering Arabic grammar, Fiqh, Hadith, and Tafseer.", color: "text-primary" },
                { title: "Online Courses", icon: Globe, desc: "Flexible learning for global students. Master Quran, Tajweed, and Islamic basics from home.", color: "text-primary" },
                { title: "Short Courses", icon: Award, desc: "Specialized short courses including Tarjama-ul-Quran, Seerat-un-Nabi, and Fiqh-ul-Masail.", color: "text-secondary" }
              ].map((course, i) => (
                <motion.div key={i} variants={fadeInUp} className="h-full">
                  <Card className={`border-t-4 ${i === 1 ? 'border-t-secondary' : 'border-t-primary'} shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card group h-full flex flex-col`}>
                    <CardHeader>
                      <div className={`w-16 h-16 rounded-full ${i === 1 ? 'bg-secondary/10' : 'bg-primary/10'} flex items-center justify-center mb-4 ${i === 1 ? 'group-hover:bg-secondary' : 'group-hover:bg-primary'} group-hover:text-white transition-colors duration-300`}>
                        <course.icon className={`h-8 w-8 ${course.color} group-hover:text-white transition-colors`} />
                      </div>
                      <CardTitle className="text-2xl font-bold text-primary">{course.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 flex-1 flex flex-col">
                      <p className="text-muted-foreground flex-1">{course.desc}</p>
                      <Link href="/courses" className="w-full">
                        <Button className="w-full group/btn mt-2" variant={i === 1 ? "default" : "default"}>
                          {i === 1 ? "Start Learning" : i === 2 ? "Explore All" : "View Details"}
                          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Course Gallery Section */}
        <CourseGallery />

        {/* FAQ Section */}
        <section className="py-20 bg-background">
          <motion.div
            className="container max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <div className="text-center mb-12 space-y-4">
              <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-primary">Frequently Asked Questions</motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground">Common questions about admissions, academics, and student life.</motion.p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {[
                { q: "Is the Dars-e-Nizami degree recognized?", a: "Yes, our Dars-e-Nizami program is affiliated with Tanzeem Al-Madaris AhleSunnat Pakistan, which is recognized by the HEC as equivalent to an MA in Islamic Studies/Arabic." },
                { q: "Do you offer online classes for international students?", a: "Absolutely. We have a dedicated online learning system for international students with flexible timings and one-on-one sessions." },
                { q: "What is the fee structure?", a: "Marifat Ul Quran offers free education to deserving students on merit. For others, we have a very affordable fee structure. Specifics are provided upon admission inquiry." },
                { q: "Is there a hostel facility available?", a: "Currently, we operate as a Day Scholar institution. We do not provide hostel facilities at this time." },
                { q: "Can I apply for multiple courses?", a: "Yes, provided the timings do not clash. For example, you can enroll in a short course while pursuing your Hifz education." },
                { q: "How do I verify my certificate?", a: "You can use our online Verification Portal (link in header) or contact the administration office with your roll number." }
              ].map((faq, i) => (
                <motion.div key={i} variants={fadeInUp}>
                  <AccordionItem value={`item-${i}`} className="border-b border-primary/20">
                    <AccordionTrigger className="text-lg font-semibold text-primary hover:text-secondary text-left">{faq.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </section>

        {/* Testimonials Section - SEO Optimized with Schema.org */}
        <section className="py-20 bg-primary/5" aria-labelledby="testimonials-heading">
          {/* Schema.org JSON-LD for Reviews */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "EducationalOrganization",
                "name": "Marifat Ul Quran",
                "url": "https://maarifatulquran.com",
                "review": [
                  {
                    "@type": "Review",
                    "author": { "@type": "Person", "name": "Ahmed Ali" },
                    "reviewBody": "The environment here is spiritually uplifting. The teachers don't just teach books; they teach character. It has been a transformative experience for me.",
                    "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
                  },
                  {
                    "@type": "Review",
                    "author": { "@type": "Person", "name": "Fatima Zahra" },
                    "reviewBody": "As a working professional, the online flexibility was perfect. I can finally recite the Quran correctly. The female tutors are incredibly patient and qualified.",
                    "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
                  },
                  {
                    "@type": "Review",
                    "author": { "@type": "Person", "name": "Umar Farooq" },
                    "reviewBody": "Completing my Hifz at Marifat Ul Quran was the best decision of my life. The focus on Tajweed and revision ensured I never forget what I memorized.",
                    "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
                  },
                  {
                    "@type": "Review",
                    "author": { "@type": "Person", "name": "Zainab Bibi" },
                    "reviewBody": "I am amazed by the progress my son has made. Not just in memorization, but his adab and akhlaq have improved tremendously. The teachers are very caring.",
                    "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
                  },
                  {
                    "@type": "Review",
                    "author": { "@type": "Person", "name": "Yusuf Khan" },
                    "reviewBody": "The Seerat-un-Nabi course opened my eyes. It was concise yet so deep. Highly recommended for anyone wanting to connect with the Prophet's (PBUH) life.",
                    "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
                  },
                  {
                    "@type": "Review",
                    "author": { "@type": "Person", "name": "Aisha Siddiqa" },
                    "reviewBody": "Distance learning here feels like being on campus. The live sessions are interactive, and the recording availability helps when I miss a class. A true blessing.",
                    "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
                  }
                ],
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "5",
                  "reviewCount": "6",
                  "bestRating": "5"
                }
              })
            }}
          />
          <motion.div
            className="container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <header className="text-center max-w-2xl mx-auto mb-12 space-y-4">
              <motion.h2 id="testimonials-heading" variants={fadeInUp} className="text-4xl font-bold text-primary">Student Success Stories & Reviews</motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground">Hear from our students and alumni about their Islamic education journey at Marifat Ul Quran Online Academy.</motion.p>
            </header>

            <div className="px-12 relative">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                plugins={[
                  Autoplay({
                    delay: 5000,
                    stopOnInteraction: false,
                  }),
                ]}
                setApi={setApi}
                className="w-full"
              >
                <CarouselContent className="-ml-4 py-4">
                  {[
                    { name: "Ahmed Ali", role: "Dars-e-Nizami Student", gender: "male", color: "from-blue-500 to-cyan-500", quote: "The environment here is spiritually uplifting. The teachers don't just teach books; they teach character. It has been a transformative experience for me." },
                    { name: "Fatima Zahra", role: "Online Tajweed Graduate", gender: "female", color: "from-pink-500 to-rose-500", quote: "As a working professional, the online flexibility was perfect. I can finally recite the Quran correctly. The female tutors are incredibly patient and qualified." },
                    { name: "Umar Farooq", role: "Hifz-ul-Quran Alumni", gender: "male", color: "from-emerald-500 to-teal-500", quote: "Completing my Hifz at Marifat Ul Quran was the best decision of my life. The focus on Tajweed and revision ensured I never forget what I memorized." },
                    { name: "Zainab Bibi", role: "Parent of Hifz Student", gender: "female", color: "from-purple-500 to-violet-500", quote: "I am amazed by the progress my son has made. Not just in memorization, but his adab and akhlaq have improved tremendously. The teachers are very caring." },
                    { name: "Yusuf Khan", role: "Short Course Participant", gender: "male", color: "from-amber-500 to-orange-500", quote: "The Seerat-un-Nabi course opened my eyes. It was concise yet so deep. Highly recommended for anyone wanting to connect with the Prophet's (PBUH) life." },
                    { name: "Aisha Siddiqa", role: "Online Alimah Student", gender: "female", color: "from-indigo-500 to-blue-500", quote: "Distance learning here feels like being on campus. The live sessions are interactive, and the recording availability helps when I miss a class. A true blessing." }
                  ].map((student, i) => (
                    <CarouselItem key={i} className="pl-4 md:basis-1/2 lg:basis-1/3">
                      <motion.article
                        variants={fadeInUp}
                        className="h-full"
                        itemScope
                        itemType="https://schema.org/Review"
                      >
                        <Card className="p-6 border-none shadow-md bg-white relative h-full flex flex-col hover:shadow-xl transition-shadow duration-300">
                          <Quote className="absolute top-6 right-6 h-8 w-8 text-secondary/20" aria-hidden="true" />
                          <div className="flex items-center gap-4 mb-4">
                            {/* Avatar with gradient background and icon */}
                            <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${student.color} flex items-center justify-center border-2 border-white shadow-lg`} aria-hidden="true">
                              <User className="w-8 h-8 text-white" />
                            </div>
                            <div itemProp="author" itemScope itemType="https://schema.org/Person">
                              <h3 className="font-bold text-primary" itemProp="name">{student.name}</h3>
                              <p className="text-xs text-muted-foreground">{student.role}</p>
                            </div>
                          </div>
                          <blockquote className="text-muted-foreground italic flex-1" itemProp="reviewBody">
                            "{student.quote}"
                          </blockquote>
                          <div className="flex gap-1 mt-4 text-secondary" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                            <meta itemProp="ratingValue" content="5" />
                            <meta itemProp="bestRating" content="5" />
                            {[1, 2, 3, 4, 5].map((_, starI) => (
                              <Star key={starI} className="h-4 w-4 fill-current" aria-label="5 star rating" />
                            ))}
                          </div>
                        </Card>
                      </motion.article>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious aria-label="Previous testimonial" />
                <CarouselNext aria-label="Next testimonial" />
              </Carousel>
              <div className="flex justify-center gap-2 mt-8" role="tablist" aria-label="Testimonial navigation">
                {Array.from({ length: count }).map((_, index) => (
                  <button
                    key={index}
                    role="tab"
                    aria-selected={index + 1 === current}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index + 1 === current ? "bg-secondary w-8" : "bg-primary/20 hover:bg-primary/40"
                      }`}
                    onClick={() => api?.scrollTo(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-white relative overflow-hidden">
          <img src={onlineLearning} alt="Learning" className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay" />
          <motion.div
            className="container relative z-10 text-center space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-heading font-bold text-secondary">Begin Your Journey of Sacred Knowledge</motion.h2>
            <motion.p variants={fadeInUp} className="text-xl opacity-90 max-w-2xl mx-auto">
              Enrollment for the new academic session is now open. Join a community of thousands of students dedicated to the Deen.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/admissions">
                <Button size="lg" className="bg-secondary text-primary hover:bg-secondary/90 font-bold px-10 shadow-lg hover:scale-105 transition-transform">
                  Apply for Admission
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white/20 font-bold px-10 shadow-lg hover:scale-105 transition-transform">
                  Contact Admissions
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
