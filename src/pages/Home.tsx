import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, Globe, Award, CheckCircle, ArrowRight, Star, Quote } from "lucide-react";
import { Link } from "wouter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import heroBgLight from "@/assets/hero-bg-light.jpg";
import pattern from "@/assets/pattern.jpg";
import AnimatedCounter from "@/components/AnimatedCounter";
import onlineLearning from "@/assets/online-learning.jpg";
import campus from "@/assets/campus.jpg";

import studentMale from "@/assets/student-male.jpg";
import studentMale2 from "@/assets/student-male-2.jpg";
import studentFemale from "@/assets/student-female.jpg";
import SEO from "@/components/SEO";

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
              alt="Background"
              className="w-full h-full object-cover"
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
            >
              <Link href="/admissions">
                <Button size="lg" className="bg-secondary text-primary hover:bg-secondary/90 font-bold text-lg px-8 h-12 shadow-xl hover:scale-105 transition-transform duration-300">
                  Apply Now
                </Button>
              </Link>
              <Link href="/courses">
                <Button size="lg" className="bg-white/20 backdrop-blur-md text-white border-2 border-white/50 hover:bg-white/30 font-bold text-lg px-8 h-12 shadow-lg hover:scale-105 transition-transform duration-300">
                  Explore Courses
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-primary text-white relative overflow-hidden">
          <motion.div
            className="container"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/20">
              {[
                { count: 100, label: "Free Students", suffix: "+" },
                { count: 300, label: "Video Lectures", suffix: "+" },
                { count: 20, label: "Expert Teachers", suffix: "+" },
                { count: 100, label: "Merit Based", suffix: "%" }
              ].map((stat, i) => (
                <motion.div key={i} variants={fadeInUp} className="p-4 group hover:-translate-y-1 transition-transform duration-300">
                  <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                    <AnimatedCounter to={stat.count} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm opacity-90 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
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

        {/* Testimonials Section */}
        <section className="py-20 bg-primary/5">
          <motion.div
            className="container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
              <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-primary">Success Stories</motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground">Hear from our students and alumni about their journey.</motion.p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Ahmed Ali", role: "Dars-e-Nizami Student", img: studentMale, quote: "The environment here is spiritually uplifting. The teachers don't just teach books; they teach character. It has been a transformative experience for me." },
                { name: "Fatima Zahra", role: "Online Tajweed Graduate", img: studentFemale, quote: "As a working professional, the online flexibility was perfect. I can finally recite the Quran correctly. The female tutors are incredibly patient and qualified." },
                { name: "Umar Farooq", role: "Hifz-ul-Quran Alumni", img: studentMale2, quote: "Completing my Hifz at Marifat Ul Quran was the best decision of my life. The focus on Tajweed and revision ensured I never forget what I memorized." }
              ].map((student, i) => (
                <motion.div key={i} variants={fadeInUp} className="h-full">
                  <Card className="p-6 border-none shadow-md bg-white relative h-full flex flex-col hover:shadow-xl transition-shadow duration-300">
                    <Quote className="absolute top-6 right-6 h-8 w-8 text-secondary/20" />
                    <div className="flex items-center gap-4 mb-4">
                      <img src={student.img} alt={student.name} className="w-16 h-16 rounded-full object-cover border-2 border-secondary" />
                      <div>
                        <h4 className="font-bold text-primary">{student.name}</h4>
                        <p className="text-xs text-muted-foreground">{student.role}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground italic flex-1">
                      "{student.quote}"
                    </p>
                    <div className="flex gap-1 mt-4 text-secondary">
                      {[1, 2, 3, 4, 5].map((_, starI) => (
                        <Star key={starI} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </Card>
                </motion.div>
              ))}
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
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-heading font-bold">Begin Your Journey of Sacred Knowledge</motion.h2>
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
