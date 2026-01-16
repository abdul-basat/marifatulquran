import Header from "@/components/Header";
import Footer from "@/components/Footer";
import pattern from "@/assets/pattern.jpg";
import SEO from "@/components/SEO";
import CourseCard from "@/components/CourseCard";
import type { CourseData } from "@/components/CourseCard";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Courses() {
   const [activeFilter, setActiveFilter] = useState("All");

   const fadeInUp: Variants = {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
   };

   const staggerContainer: Variants = {
      hidden: { opacity: 0 },
      visible: {
         opacity: 1,
         transition: {
            staggerChildren: 0.1
         }
      }
   };

   const categories = ["All", "Scholar Course", "Quranic Studies", "Specialization", "Short Courses"];

   const courses: (CourseData & { category: string })[] = [
      {
         name: "درسِ نظامی",
         description: "مستند اور مکمل دینی نصاب",
         duration: "8 سال",
         eligibility: "مڈل، میٹرک، ایف اے",
         mode: "Online",
         teachers: "Male/Female separate",
         category: "Scholar Course",
         image: "quran-hadees classes.jpg"
      },
      {
         name: "کلیۃُ الشریعہ (عالم / عالمہ)",
         description: "BS سسٹم کے مطابق چار سالہ عالم کورس",
         duration: "4 سال (8 سیمسٹر)",
         eligibility: "BA پاس",
         fee: "3000 روپے ماہانہ",
         mode: "Online",
         teachers: "Male/Female separate",
         category: "Scholar Course",
         image: "4-year-aalima-course.jpg"
      },
      {
         name: "تخصص فی الفقہ (مفتی / مفتیہ)",
         description: "افتاء اور فقہی تحقیق کی اعلیٰ تخصص",
         duration: "2 سال",
         eligibility: "درسِ نظامی مکمل",
         fee: "3000 روپے ماہانہ",
         mode: "Online",
         teachers: "Male/Female separate",
         category: "Specialization",
         image: "takhassus-fil-fiqh-course.jpg"
      },
      {
         name: "قاری / قاریہ کورس",
         description: "مکمل تجوید، قرأت اور فقہی اصول",
         duration: "2 سال",
         eligibility: "پانچویں جماعت پاس",
         mode: "Online",
         teachers: "Male/Female separate",
         category: "Quranic Studies",
         image: "tajweed-course.jpg"
      },
      {
         name: "ناظرہ قرآن (تجوید کے ساتھ)",
         description: "قرآن مجید درست تجوید کے ساتھ پڑھنا",
         duration: "6 ماہ",
         eligibility: "ہر مسلمان",
         fee: "2000 روپے ماہانہ",
         mode: "Online",
         category: "Quranic Studies",
         image: "faizan-tajweed-course.jpg"
      },
      {
         name: "مدنی قاعدہ کورس",
         description: "قرآن پڑھنے کی مضبوط بنیاد",
         duration: "3 ماہ (یا صلاحیت کے مطابق)",
         eligibility: "ہر عمر",
         fee: "1500 روپے ماہانہ",
         mode: "Online",
         oneToOne: "Available",
         category: "Quranic Studies",
         image: "admission-open.jpg"
      },
      {
         name: "حفظِ قرآن",
         description: "مکمل قرآن مجید حفظ کرنے کا کورس",
         duration: "طالب علم کی صلاحیت کے مطابق",
         eligibility: "ناظرہ مکمل اور درست",
         mode: "Online",
         teachers: "Male/Female separate",
         category: "Quranic Studies",
         image: "arbi-ibarat-course.jpg"
      },
      {
         name: "فیضانِ شریعت کورس",
         description: "بنیادی دینی اور شرعی تعلیم",
         duration: "مناسب مدت",
         eligibility: "پانچویں جماعت پاس",
         mode: "Online",
         category: "Short Courses",
         image: "faizan-shriat-course.jpg"
      },
      {
         name: "نعت کورس",
         description: "نعت خوانی اور آواز کی تربیت",
         duration: "مناسب مدت",
         eligibility: "شوق رکھنے والے",
         mode: "Online",
         category: "Short Courses",
         image: "naat-course.jpg"
      },
      {
         name: "تلاوت و لہجات",
         description: "آواز، لہجہ اور روانی کی اصلاح",
         duration: "مناسب مدت",
         eligibility: "اچھی آواز، درست ناظرہ",
         mode: "Online",
         category: "Short Courses",
         image: "tajweed-lehjat-course.jpg"
      },
      {
         name: "امامت کورس (صرف مرد حضرات)",
         description: "مسجد کی امامت کی مکمل عملی تربیت",
         duration: "6 ماہ",
         eligibility: "کم از کم پانچویں جماعت",
         fee: "1500 روپے ماہانہ",
         mode: "Online",
         gender: "Male only",
         category: "Short Courses",
         image: "imamat-course.jpg"
      },
      {
         name: "Online Tafseer-ul-Qur’an Course",
         description: "روزمرہ زندگی سے جڑی قرآن فہمی",
         duration: "1 گھنٹہ فی کلاس (روزانہ / ہفتہ وار)",
         eligibility: "Worldwide",
         language: "اردو + ضرورت کے مطابق انگلش",
         mode: "Online (Google Meet)",
         audience: "Worldwide",
         category: "Quranic Studies",
         image: "tafseer-course.jpg"
      }
   ];

   const filteredCourses = activeFilter === "All"
      ? courses
      : courses.filter(course => course.category === activeFilter);

   return (
      <div className="min-h-screen bg-background flex flex-col">
         <SEO title="Courses" description="Browse our academic programs including Dars-e-Nizami, Hifz-ul-Quran, Tajweed, and short Islamic courses." />
         <Header />
         <main className="flex-1">
            {/* Page Header */}
            <section className="bg-secondary text-primary py-20 relative overflow-hidden">
               <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${pattern})` }} />
               <div className="container px-4 relative z-10 text-center">
                  <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">Academic Programs</h1>
                  <p className="text-lg opacity-90 max-w-2xl mx-auto">Explore our diverse range of courses designed to connect you with sacred knowledge.</p>
               </div>
            </section>

            {/* Course Grid */}
            <section className="py-16 bg-muted/30">
               <div className="container px-4 mb-10">
                  <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                     {categories.map((category) => (
                        <Button
                           key={category}
                           variant={activeFilter === category ? "default" : "outline"}
                           onClick={() => setActiveFilter(category)}
                           className={`rounded-full px-6 py-2 transition-all duration-300 ${activeFilter === category
                              ? "bg-primary text-white shadow-md hover:bg-primary/90"
                              : "bg-background text-muted-foreground hover:text-primary hover:border-primary/50"
                              }`}
                        >
                           {category}
                        </Button>
                     ))}
                  </div>
               </div>

               <motion.div
                  className="container px-4"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  key={activeFilter} // Re-animate on filter change
               >
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                     {filteredCourses.map((course, index) => (
                        <motion.div key={index} variants={fadeInUp} className="h-full">
                           <CourseCard course={course} />
                        </motion.div>
                     ))}
                  </div>
               </motion.div>
            </section>
         </main>
         <Footer />
      </div>
   );
}
