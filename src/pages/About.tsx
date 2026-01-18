import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  BookOpen,
  Clock,
  DollarSign,
  GraduationCapIcon,
  Users,
  Phone,
  CheckCircle2,
  Monitor,
  Award,
  MessageCircle,
  FileCheck,
  MapPin,
  Globe,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const pattern = "/images/hero/pattern.webp";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

export default function About() {
  const whatsappNumber = "923181955634";

  const getWhatsAppLink = (courseName: string) => {
    const message = `السلام علیکم ورحمۃ اللہ وبرکاتہ! مجھے اس کورس *${courseName}* میں داخلہ مطلوب ہے۔`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  // Animation variants
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
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

  const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const courses = [
    {
      id: 1,
      name: "مدنی قاعدہ کورس",
      nameEng: "Madani Qaida Course",
      icon: BookOpen,
      description: "صرف مدنی قاعدہ پڑھایا جاتا ہے",
      duration: "3 ماہ",
      fee: "1500 روپے",
      color: "emerald"
    },
    {
      id: 2,
      name: "چھ (6) ماہ کا ناظرہ قرآن کورس",
      nameEng: "6-Month Nazra Quran Course",
      icon: BookOpen,
      description: "اس کورس میں پورا قرآنِ مجید تجوید کے ساتھ پڑھایا جاتا ہے",
      duration: "6 ماہ",
      fee: "2000 روپے",
      color: "amber"
    },
    {
      id: 3,
      name: "دو (2) سالہ قاری کورس",
      nameEng: "2-Year Qari Course",
      icon: GraduationCapIcon,
      description: "یہ ایک مکمل اور جامع قاری کورس ہے",
      duration: "2 سال",
      fee: "رابطہ کریں",
      color: "purple",
      features: [
        "قرأت کے تمام اصول و قواعد",
        "قرأت سے متعلق فقہی مسائل",
        "فیضانِ تجوید (مکمل کتاب)",
        "صرف و نحو",
        "باقاعدہ 6 ماہ قاری کورس"
      ]
    }
  ];

  const examSystemPoints = [
    { icon: Monitor, text: "تعلیم مکمل طور پر آن لائن ہوگی" },
    { icon: FileCheck, text: "امتحان آن لائن نہیں ہوگا" },
    { icon: MapPin, text: "امتحان کے لیے قریبی سینٹر / مدرسہ جانا ہوگا" },
    { icon: CheckCircle2, text: "امتحان کی تمام ذمہ داری ادارہ خود ادا کرے گا" },
    { icon: Users, text: "طالب علم کو صرف پیپر دینے جانا ہوگا" }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO title="تجوید کورسز | Tajweed Courses" description="ادارہ معرفۃُ القرآن للبنین و للبنات - آن لائن تجوید کورسز کی مکمل معلومات" />
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-secondary text-primary py-12 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${pattern})` }} />

          <div className="container relative z-10">
            <div className="text-center space-y-6">
              {/* Institution Name */}
              <div dir="rtl" className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight outline-none focus:outline-none"
                  style={{ outline: 'none' }}
                >
                  ادارہ معرفۃُ القرآن للبنین و للبنات
                </motion.h1>
                <div className="flex flex-wrap items-center justify-center gap-4 text-sm md:text-base">
                  <motion.span
                    className="relative group"
                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                    whileHover={{ scale: 1.05 }}
                  >

                    {/* Multicolor Glowing Border Animation - Outside Only */}
                    <motion.div
                      className="absolute -inset-1 rounded-full -z-10"
                      animate={{
                        background: [
                          "linear-gradient(0deg, #3b82f6, #8b5cf6, #ec4899)",
                          "linear-gradient(90deg, #8b5cf6, #ec4899, #f59e0b)",
                          "linear-gradient(180deg, #ec4899, #f59e0b, #10b981)",
                          "linear-gradient(270deg, #f59e0b, #10b981, #3b82f6)",
                          "linear-gradient(360deg, #10b981, #3b82f6, #8b5cf6)",
                        ],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      style={{
                        filter: "blur(10px)",
                        opacity: 0.8,
                      }}
                    />
                    <motion.div
                      className="absolute -inset-1.5 rounded-full -z-10"
                      animate={{
                        background: [
                          "linear-gradient(180deg, #3b82f6, #8b5cf6, #ec4899)",
                          "linear-gradient(270deg, #8b5cf6, #ec4899, #f59e0b)",
                          "linear-gradient(360deg, #ec4899, #f59e0b, #10b981)",
                          "linear-gradient(90deg, #f59e0b, #10b981, #3b82f6)",
                          "linear-gradient(180deg, #10b981, #3b82f6, #8b5cf6)",
                        ],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 0.5,
                      }}
                      style={{
                        filter: "blur(14px)",
                        opacity: 0.6,
                      }}
                    />
                    {/* Solid Badge Background - Text is clearly visible */}
                    <div className="relative bg-primary/95 backdrop-blur-sm px-5 py-2.5 md:px-6 md:py-3 rounded-full border-2 border-primary shadow-xl flex items-center gap-2.5 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                      <div className="relative z-10 flex items-center gap-2.5">
                        <div className="p-1.5 bg-white/30 rounded-full">
                          <Globe className="w-4 h-4 md:w-5 md:h-5 text-white" />
                        </div>
                        <span className="font-bold text-white" style={{ fontFamily: "'Mehr Nastaliq Web', 'Amiri', serif" }}>آن لائن</span>
                      </div>
                    </div>
                  </motion.span>
                  <motion.span
                    className="relative group"
                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {/* Multicolor Glowing Border Animation - Outside Only */}
                    <motion.div
                      className="absolute -inset-1 rounded-full -z-10"
                      animate={{
                        background: [
                          "linear-gradient(0deg, #ec4899, #f59e0b, #10b981)",
                          "linear-gradient(90deg, #f59e0b, #10b981, #3b82f6)",
                          "linear-gradient(180deg, #10b981, #3b82f6, #8b5cf6)",
                          "linear-gradient(270deg, #3b82f6, #8b5cf6, #ec4899)",
                          "linear-gradient(360deg, #8b5cf6, #ec4899, #f59e0b)",
                        ],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      style={{
                        filter: "blur(10px)",
                        opacity: 0.8,
                      }}
                    />
                    <motion.div
                      className="absolute -inset-1.5 rounded-full -z-10"
                      animate={{
                        background: [
                          "linear-gradient(180deg, #ec4899, #f59e0b, #10b981)",
                          "linear-gradient(270deg, #f59e0b, #10b981, #3b82f6)",
                          "linear-gradient(360deg, #10b981, #3b82f6, #8b5cf6)",
                          "linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899)",
                          "linear-gradient(180deg, #8b5cf6, #ec4899, #f59e0b)",
                        ],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 0.5,
                      }}
                      style={{
                        filter: "blur(14px)",
                        opacity: 0.6,
                      }}
                    />
                    {/* Solid Badge Background - Text is clearly visible */}
                    <div className="relative bg-secondary/95 backdrop-blur-sm px-5 py-2.5 md:px-6 md:py-3 rounded-full border-2 border-secondary shadow-xl flex items-center gap-2.5 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                      <div className="relative z-10 flex items-center gap-2.5">
                        <div className="p-1.5 bg-white/30 rounded-full">
                          <Award className="w-4 h-4 md:w-5 md:h-5 text-white" />
                        </div>
                        <span className="font-bold text-white" style={{ fontFamily: "'Mehr Nastaliq Web', 'Amiri', serif" }}>ملحق کنزالمدارس انٹرنیشنل بورڈ</span>
                      </div>
                    </div>
                  </motion.span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Introduction Section */}
        <section className="pt-12 md:pt-16 pb-6 md:pb-8 bg-background">
          <div className="container max-w-4xl">
            <motion.div
              dir="rtl"
              className="text-center space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              {/* Arabic Greeting */}
              <p className="text-xl md:text-2xl font-medium text-muted-foreground mb-2" style={{ fontFamily: "'Mehr Nastaliq Web', 'Amiri', serif" }}>
                السلام علیکم ورحمۃ اللہ وبرکاتہ
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-3" style={{ fontFamily: "'Mehr Nastaliq Web', 'Amiri', serif" }}>
                تجوید کورسز کی مکمل اور تفصیلی معلومات
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto" style={{ fontFamily: "'Mehr Nastaliq Web', 'Amiri', serif" }}>
                الحمدللہ! ہمارے ادارے میں تجوید کے تین معیاری اور منظم کورسز کرائے جا رہے ہیں
              </p>
            </motion.div>
          </div>
        </section>

        {/* Courses Section */}
        <section className="pt-6 md:pt-8 pb-12 md:pb-20 bg-gradient-to-b from-background to-muted/20">
          <div className="container">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto"
            >
              {courses.map((course, index) => {
                const Icon = course.icon;

                return (
                  <motion.div
                    key={course.id}
                    variants={fadeInUp}
                    className={`group relative bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${index === 2 ? "md:col-span-2" : ""}`}
                  >
                    {/* Header with Icon and Badge */}
                    <div className="relative bg-gradient-to-br from-primary/5 via-primary/10 to-secondary/5 p-6 md:p-8 border-b border-border/50">
                      <div className="flex items-start justify-between gap-4">
                        {/* Left: Icon and Number */}
                        <div className="flex items-center gap-4">
                          <div className="relative">
                            <div className="absolute inset-0 bg-primary/20 rounded-xl blur-md group-hover:blur-lg transition-all duration-300" />
                            <div className="relative bg-primary text-primary-foreground rounded-xl w-14 h-14 md:w-16 md:h-16 flex items-center justify-center font-bold text-xl md:text-2xl shadow-lg">
                              {index + 1}
                            </div>
                          </div>
                          <div className="p-3 bg-background/80 backdrop-blur-sm rounded-xl border border-border/50 shadow-sm">
                            <Icon className="w-7 h-7 md:w-8 md:h-8 text-primary" />
                          </div>
                        </div>
                        {/* Right: Course Badge */}
                        <div className="px-3 py-1.5 bg-primary text-primary-foreground text-xs font-semibold rounded-full border border-primary/50 shadow-md">
                          Course {index + 1}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-8 space-y-6">
                      {/* Course Title */}
                      <div dir="rtl" className="space-y-2">
                        <h3 className="text-2xl md:text-3xl font-bold text-primary leading-tight" style={{ fontFamily: "'Mehr Nastaliq Web', 'Amiri', serif" }}>
                          {course.name}
                        </h3>
                        <p className="text-sm md:text-base text-muted-foreground font-medium">({course.nameEng})</p>
                      </div>

                      {/* Course Description */}
                      <div dir="rtl" className="pb-4 border-b border-border/50">
                        <p className="text-base md:text-lg text-foreground/80 leading-relaxed" style={{ fontFamily: "'Mehr Nastaliq Web', 'Amiri', serif" }}>
                          {course.description}
                        </p>
                      </div>

                      {/* Course Features (for Qari Course) */}
                      {course.features && (
                        <div className="bg-muted/50 rounded-xl p-5 md:p-6 space-y-4 border border-border/50" dir="rtl">
                          <div className="flex items-center gap-2 mb-3">
                            <Sparkles className="w-5 h-5 text-secondary" />
                            <p className="font-semibold text-primary text-base md:text-lg" style={{ fontFamily: "'Mehr Nastaliq Web', 'Amiri', serif" }}>
                              یہ ایک مکمل اور جامع قاری کورس ہے، جس میں شامل ہیں:
                            </p>
                          </div>
                          <ul className="space-y-3">
                            {course.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-base md:text-lg" style={{ fontFamily: "'Mehr Nastaliq Web', 'Amiri', serif" }}>
                                <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                                <span className="text-foreground/80 leading-relaxed">{feature}</span>
                              </li>
                            ))}
                          </ul>

                          <div className="mt-6 pt-6 border-t border-border/50 space-y-3" dir="rtl">
                            <p className="font-semibold text-primary text-base mb-3" style={{ fontFamily: "'Mehr Nastaliq Web', 'Amiri', serif" }}>
                              اس کورس کے تحت:
                            </p>
                            <div className="space-y-2.5">
                              {[
                                "کنزالمدارس انٹرنیشنل بورڈ کے باقاعدہ امتحانات ہوتے ہیں",
                                "بورڈ کی سرکاری سند دی جاتی ہے",
                                "جو مدارس میں تدریس اور دینی خدمات کے لیے نہایت مفید ہے"
                              ].map((item, idx) => (
                                <div key={idx} className="flex items-start gap-3 text-sm md:text-base" style={{ fontFamily: "'Mehr Nastaliq Web', 'Amiri', serif" }}>
                                  <CheckCircle2 className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                                  <span className="text-foreground/70">{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Duration and Fee - Modern Card Style */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-4 md:p-5 border border-primary/20 text-center group/card hover:border-primary/40 transition-colors">
                          <div className="flex flex-col items-center gap-2">
                            <div className="p-2 bg-primary/10 rounded-lg mb-1">
                              <Clock className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                            </div>
                            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Duration</p>
                            <p className="font-bold text-primary text-base md:text-lg mt-1" dir="rtl" style={{ fontFamily: "'Mehr Nastaliq Web', 'Amiri', serif" }}>
                              {course.duration}
                            </p>
                          </div>
                        </div>
                        <div className="bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-xl p-4 md:p-5 border border-secondary/20 text-center group/card hover:border-secondary/40 transition-colors">
                          <div className="flex flex-col items-center gap-2">
                            <div className="p-2 bg-secondary/10 rounded-lg mb-1">
                              <DollarSign className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
                            </div>
                            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Monthly Fee</p>
                            <p className="font-bold text-secondary text-base md:text-lg mt-1" dir="rtl" style={{ fontFamily: "'Mehr Nastaliq Web', 'Amiri', serif" }}>
                              {course.fee}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* WhatsApp Contact Button */}
                      <Button
                        asChild
                        className="w-full bg-secondary hover:bg-secondary/90 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300 group/btn"
                        size="lg"
                      >
                        <a
                          href={getWhatsAppLink(course.name)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          <Phone className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                          <span style={{ fontFamily: "'Mehr Nastaliq Web', 'Amiri', serif" }}>رابطہ کریں</span>
                        </a>
                      </Button>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Exam System Section */}
        <section className="py-12 md:py-20 bg-card">
          <div className="container max-w-4xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={scaleIn}
            >
              <Card className="border-2 border-primary/20 shadow-lg">
                <CardHeader className="text-center pb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileCheck className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl md:text-3xl" dir="rtl" style={{ fontFamily: "'Mehr Nastaliq Web', 'Amiri', serif" }}>
                    امتحان کا نظام
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-3"
                    dir="rtl"
                  >
                    {examSystemPoints.map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <motion.div
                          key={idx}
                          variants={fadeInUp}
                          className="flex items-start gap-3 bg-muted/50 rounded-lg p-4 hover:bg-muted transition-colors"
                        >
                          <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <p className="text-base md:text-lg flex-1 pt-0.5" style={{ fontFamily: "'Mehr Nastaliq Web', 'Amiri', serif" }}>
                            {item.text}
                          </p>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Classes & Teachers Section */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-muted/20 to-background">
          <div className="container max-w-5xl">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid md:grid-cols-2 gap-6 md:gap-8"
            >
              {/* Classes Method */}
              <motion.div variants={fadeInUp}>
                <Card className="h-full border-2 border-primary/20 shadow-md hover:shadow-lg transition-all">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MessageCircle className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl md:text-2xl" dir="rtl" style={{ fontFamily: "'Mehr Nastaliq Web', 'Amiri', serif" }}>
                      کلاسز کا طریقہ
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-950/50 dark:to-emerald-900/50 rounded-lg p-6 border border-emerald-200 dark:border-emerald-800" dir="rtl">
                      <p className="text-base md:text-lg text-center leading-relaxed" style={{ fontFamily: "'Mehr Nastaliq Web', 'Amiri', serif" }}>
                        تمام کلاسز واٹس ایپ گروپ کال کے ذریعے لائیو ہوں گی
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Teachers */}
              <motion.div variants={fadeInUp}>
                <Card className="h-full border-2 border-secondary/20 shadow-md hover:shadow-lg transition-all">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-secondary" />
                    </div>
                    <CardTitle className="text-xl md:text-2xl" dir="rtl" style={{ fontFamily: "'Mehr Nastaliq Web', 'Amiri', serif" }}>
                      اساتذہ کا انتظام
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/50 dark:to-blue-900/50 rounded-lg p-4 border border-blue-200 dark:border-blue-800" dir="rtl">
                      <p className="text-center text-base md:text-lg" style={{ fontFamily: "'Mehr Nastaliq Web', 'Amiri', serif" }}>
                        طلبہ (للبنین) کے لیے میل اساتذہ
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-950/50 dark:to-pink-900/50 rounded-lg p-4 border border-pink-200 dark:border-pink-800" dir="rtl">
                      <p className="text-center text-base md:text-lg" style={{ fontFamily: "'Mehr Nastaliq Web', 'Amiri', serif" }}>
                        طالبات (للبنات) کے لیے فیمیل اساتذہ موجود ہیں
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-12 md:py-20 bg-gradient-to-br from-primary via-primary/95 to-secondary text-primary-foreground relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 opacity-10">
            <motion.div
              className="absolute top-10 left-10 w-72 h-72 bg-white/20 rounded-full blur-3xl"
              animate={{
                x: [0, 100, 0],
                y: [0, 50, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-10 right-10 w-96 h-96 bg-white/15 rounded-full blur-3xl"
              animate={{
                x: [0, -80, 0],
                y: [0, -60, 0],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          {/* Pattern Overlay */}
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `url(${pattern})` }} />

          <div className="container max-w-3xl relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={scaleIn}
            >
              <Card className="bg-white/10 backdrop-blur-md border-white/30 shadow-2xl hover:shadow-3xl transition-shadow duration-500">
                <CardContent className="p-8 md:p-12 text-center space-y-6">
                  <motion.div
                    className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto"
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      rotate: {
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      },
                      scale: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                  >
                    <Sparkles className="w-8 h-8 text-white" />
                  </motion.div>
                  <div dir="rtl" className="space-y-6">
                    <motion.h2
                      className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg"
                      style={{ fontFamily: "'Mehr Nastaliq Web', 'Amiri', serif" }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      مزید کسی بھی قسم کی معلومات کے لیے
                    </motion.h2>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <Button
                        asChild
                        size="lg"
                        className="bg-white text-primary hover:bg-white/90 font-bold text-lg md:text-xl px-8 md:px-12 py-6 md:py-7 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
                      >
                        <a
                          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('السلام علیکم ورحمۃ اللہ وبرکاتہ! مجھے مزید معلومات درکار ہیں۔')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-3"
                        >
                          <Phone className="h-5 w-5 md:h-6 md:w-6" />
                          <span style={{ fontFamily: "'Mehr Nastaliq Web', 'Amiri', serif" }}>
                            بلا جھجھک ہم سے رابطہ فرمائیں
                          </span>
                        </a>
                      </Button>
                    </motion.div>
                  </div>

                  <motion.div
                    className="pt-6 border-t border-white/30"
                    dir="rtl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <p className="text-base md:text-lg leading-relaxed text-white/90" style={{ fontFamily: "'Mehr Nastaliq Web', 'Amiri', serif" }}>
                      اللہ تعالیٰ ہم سب کو قرآنِ مجید درست تجوید کے ساتھ پڑھنے، سمجھنے اور آگے پہنچانے کی توفیق عطا فرمائے
                      <br />
                      <span className="font-semibold text-white">آمین یا رب العالمین</span>
                    </p>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}