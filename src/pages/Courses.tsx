import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, BookOpen, Users, Phone } from "lucide-react";
import pattern from "@/assets/pattern.jpg";
import SEO from "@/components/SEO";

export default function Courses() {
   const whatsappNumber = "923181955634";

   const getWhatsAppLink = (courseName: string) => {
      const message = `السلام علیکم ورحمۃ اللہ وبرکاتہ! مجھے کورس *${courseName}* میں داخلہ مطلوب ہے۔`;
      return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
   };

   const courses = [
      {
         title: "درسِ نظامی",
         duration: "8 سال",
         eligibility: "وہ طلبہ و طالبات جن کی تعلیم بی اے سے کم ہو\nجیسے: مڈل، میٹرک، ایف اے",
         icon: GraduationCap,
      },
      {
         title: "کلیۃ الشریعہ (عالم / عالمہ کورس)",
         duration: "",
         eligibility: "کم از کم بی اے پاس طلبہ و طالبات",
         icon: BookOpen,
      },
      {
         title: "قاری / قاریہ کورس",
         duration: "",
         eligibility: "پانچویں جماعت پاس",
         icon: BookOpen,
      },
      {
         title: "فیضانِ شریعت کورس",
         duration: "",
         eligibility: "پانچویں جماعت پاس طلبہ و طالبات",
         icon: BookOpen,
      },
      {
         title: "ناظرہ قرآن کورس",
         duration: "",
         eligibility: "ہر مسلمان کے لیے",
         icon: BookOpen,
      },
      {
         title: "مدنی قاعدہ کورس (ابتدائی)",
         duration: "",
         eligibility: "ہر مسلمان کے لیے",
         icon: BookOpen,
      },
      {
         title: "حفظِ قرآن کورس",
         duration: "",
         eligibility: "جن کا ناظرہ مکمل اور درست ہو",
         icon: BookOpen,
      },
      {
         title: "تخصص فی الفقہ (مفتی / مفتیہ)",
         duration: "",
         eligibility: "درسِ نظامی کسی مستند سنی بورڈ سے مکمل ہو",
         icon: GraduationCap,
         category: "تخصصات"
      },
      {
         title: "تخصص فی اللغۃ العربیہ",
         duration: "",
         eligibility: "درسِ نظامی کسی مستند سنی بورڈ سے مکمل ہو",
         icon: GraduationCap,
         category: "تخصصات"
      },
      {
         title: "تخصص فی الحدیث",
         duration: "",
         eligibility: "درسِ نظامی کسی مستند سنی بورڈ سے مکمل ہو",
         icon: GraduationCap,
         category: "تخصصات"
      },
      {
         title: "تخصص فی التوقیت",
         duration: "",
         eligibility: "درسِ نظامی کسی مستند سنی بورڈ سے مکمل ہو",
         icon: GraduationCap,
         category: "تخصصات"
      },
      {
         title: "تخصص فی الدعوہ",
         duration: "",
         eligibility: "درسِ نظامی کسی مستند سنی بورڈ سے مکمل ہو",
         icon: GraduationCap,
         category: "تخصصات"
      },
      {
         title: "نعت کورس",
         duration: "",
         eligibility: "نعت پڑھنے کا شوق رکھنے والے",
         icon: BookOpen,
      },
      {
         title: "تلاوت و لہجات کورس",
         duration: "",
         eligibility: "اچھی آواز والے\nناظرہ بالکل درست ہو",
         icon: BookOpen,
      },
      {
         title: "امامت کورس",
         duration: "",
         eligibility: "صرف مرد حضرات\nکم از کم پانچویں جماعت تک تعلیم یافتہ",
         icon: Users,
      },
   ];

   return (
      <div className="min-h-screen bg-background flex flex-col">
         <SEO title="Courses - کورسز" description="Explore our online Islamic courses - معرفۃ القرآن للبنین و للبنات" />
         <Header />
         <main className="flex-1">
            {/* Page Header with Urdu */}
            <section className="bg-secondary text-primary py-20 relative overflow-hidden">
               <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${pattern})` }} />
               <div className="container relative z-10 text-center">
                  <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">دستیاب کورسز</h1>
                  <p className="text-lg opacity-90 max-w-3xl mx-auto" style={{ fontFamily: "'Mehr Nastaleeq', serif", direction: 'rtl', lineHeight: '2.5' }}>
                     معرفۃ القرآن للبنین و للبنات - آن لائن اکیڈمی
                  </p>
               </div>
            </section>

            {/* Introduction Section */}
            <section className="py-16 bg-gradient-to-b from-muted/30 to-background">
               <div className="container max-w-4xl">
                  <div className="text-center space-y-6" style={{ fontFamily: "'Mehr Nastaleeq', serif", direction: 'rtl', lineHeight: '2.8', fontSize: '1.35rem' }}>
                     <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ fontFamily: "'Mehr Nastaleeq', serif" }}>
                        بسم اللہ الرحمن الرحیم
                     </h2>

                     <div className="bg-card p-8 rounded-xl shadow-lg border-2 border-secondary/20 space-y-6">
                        <p className="text-primary font-semibold">
                           الحمدللہ!
                        </p>
                        <p>
                           اگر آپ یا آپ کے گھر کا کوئی فرد گھر بیٹھے مستند دینی تعلیم حاصل کرنا چاہتے ہیں تو یہ پیغام آپ کے لیے ہے۔
                        </p>
                        <p>
                           ہماری آن لائن اکیڈمی <span className="font-bold text-primary">معرفۃ القرآن للبنین و للبنات</span> ڈیرہ اسماعیل خان سے طلبہ و طالبات کو ایک منظم، بااعتماد اور انتہائی سستا دینی تعلیمی نظام فراہم کر رہی ہے۔
                        </p>
                        <p className="text-lg font-semibold text-secondary">
                           آپ گھر بیٹھے علمِ دین حاصل کر سکتے ہیں۔
                        </p>
                     </div>
                  </div>
               </div>
            </section>

            {/* Key Features */}
            <section className="py-16 bg-muted/30">
               <div className="container max-w-5xl">
                  <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ fontFamily: "'Mehr Nastaleeq', serif", direction: 'rtl' }}>
                     ✨ داخلے جاری ہیں ✨
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6 mb-12">
                     <div className="bg-card p-6 rounded-xl shadow-md border-l-4 border-l-primary" style={{ fontFamily: "'Mehr Nastaleeq', serif", direction: 'rtl', lineHeight: '2.5' }}>
                        <h3 className="text-xl font-bold text-primary mb-4">علمِ دین کا سفر اب بہت آسان ہو گیا ہے</h3>
                        <ul className="space-y-3">
                           <li className="flex items-start gap-3">
                              <span className="text-secondary text-xl">✔</span>
                              <span>صرف ایک ٹچ موبائل ہونا چاہیے</span>
                           </li>
                           <li className="flex items-start gap-3">
                              <span className="text-secondary text-xl">✔</span>
                              <span>مکمل آن لائن نظام</span>
                           </li>
                           <li className="flex items-start gap-3">
                              <span className="text-secondary text-xl">✔</span>
                              <span>کسی ایپ یا دفتر آنے کی ضرورت نہیں</span>
                           </li>
                           <li className="flex items-start gap-3">
                              <span className="text-secondary text-xl">✔</span>
                              <span>واٹس ایپ پر صرف ایک میسج کریں اور اپنا داخلہ کنفرم کریں</span>
                           </li>
                        </ul>
                     </div>

                     <div className="bg-card p-6 rounded-xl shadow-md border-l-4 border-l-secondary" style={{ fontFamily: "'Mehr Nastaleeq', serif", direction: 'rtl', lineHeight: '2.5' }}>
                        <h3 className="text-xl font-bold text-primary mb-4">💰 انتہائی سستا تعلیمی نظام</h3>
                        <ul className="space-y-3">
                           <li className="flex items-start gap-3">
                              <span className="text-primary">•</span>
                              <span>فیس عام لوگوں کی استطاعت کے مطابق ہے</span>
                           </li>
                           <li className="flex items-start gap-3">
                              <span className="text-primary">•</span>
                              <span>دیہات اور دور دراز علاقوں کے طلبہ و طالبات بھی آسانی سے پڑھ سکتے ہیں</span>
                           </li>
                           <li className="flex items-start gap-3">
                              <span className="text-primary">•</span>
                              <span>مرد و خواتین دونوں کے لیے یکساں سہولت</span>
                           </li>
                        </ul>
                     </div>
                  </div>

                  <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 p-6 rounded-xl shadow-md" style={{ fontFamily: "'Mehr Nastaleeq', serif", direction: 'rtl', lineHeight: '2.5' }}>
                     <h3 className="text-xl font-bold text-primary mb-4 text-center">🌸 علیحدہ اور بااخلاق نظام</h3>
                     <div className="grid md:grid-cols-3 gap-4 text-center">
                        <div className="bg-background/80 p-4 rounded-lg">
                           <p>مردوں کے لیے مرد اساتذہ</p>
                        </div>
                        <div className="bg-background/80 p-4 rounded-lg">
                           <p>خواتین کے لیے خواتین اساتذہ</p>
                        </div>
                        <div className="bg-background/80 p-4 rounded-lg">
                           <p>مکمل باپردہ، بااخلاق اور اسلامی ماحول</p>
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            {/* Courses Grid */}
            <section className="py-16">
               <div className="container">
                  <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ fontFamily: "'Mehr Nastaleeq', serif", direction: 'rtl' }}>
                     📘 دستیاب کورسز کی مکمل تفصیل
                  </h2>
                  <p className="text-center text-muted-foreground mb-12" style={{ fontFamily: "'Mehr Nastaleeq', serif", direction: 'rtl', fontSize: '1.1rem' }}>
                     تخصصات (اسپیشلائزیشن کورسز)
                  </p>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                     {courses.map((course, index) => {
                        const Icon = course.icon;
                        return (
                           <Card key={index} className="flex flex-col h-full hover:shadow-xl transition-all hover:-translate-y-1 border-2 hover:border-secondary/50">
                              <CardHeader className="pb-4">
                                 <div className="flex items-start justify-between gap-4 mb-3">
                                    <div className="bg-secondary/10 p-3 rounded-lg shrink-0">
                                       <Icon className="h-6 w-6 text-secondary" />
                                    </div>
                                    {course.category && (
                                       <Badge variant="secondary" className="shrink-0" style={{ fontFamily: "'Mehr Nastaleeq', serif", fontSize: '0.9rem' }}>
                                          {course.category}
                                       </Badge>
                                    )}
                                 </div>
                                 <CardTitle
                                    className="text-xl font-bold text-primary text-right leading-relaxed"
                                    style={{ fontFamily: "'Mehr Nastaleeq', serif", direction: 'rtl', fontSize: '1.4rem', lineHeight: '2' }}
                                 >
                                    {course.title}
                                 </CardTitle>
                              </CardHeader>

                              <CardContent className="flex-1 space-y-4">
                                 {course.duration && (
                                    <div
                                       className="bg-muted/50 p-3 rounded-lg text-right"
                                       style={{ fontFamily: "'Mehr Nastaleeq', serif", direction: 'rtl', lineHeight: '2' }}
                                    >
                                       <span className="text-sm text-muted-foreground">مدت: </span>
                                       <span className="font-semibold text-primary">{course.duration}</span>
                                    </div>
                                 )}

                                 <div className="space-y-2">
                                    <p
                                       className="text-sm font-semibold text-secondary text-right"
                                       style={{ fontFamily: "'Mehr Nastaleeq', serif", direction: 'rtl' }}
                                    >
                                       🎓 اہلیت:
                                    </p>
                                    <p
                                       className="text-sm text-muted-foreground text-right whitespace-pre-line"
                                       style={{ fontFamily: "'Mehr Nastaleeq', serif", direction: 'rtl', lineHeight: '2.2' }}
                                    >
                                       {course.eligibility}
                                    </p>
                                 </div>

                                 <Button
                                    asChild
                                    className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold mt-4"
                                    style={{ fontFamily: "'Mehr Nastaleeq', serif", fontSize: '1.1rem' }}
                                 >
                                    <a
                                       href={getWhatsAppLink(course.title)}
                                       target="_blank"
                                       rel="noopener noreferrer"
                                       className="flex items-center justify-center gap-2"
                                    >
                                       <Phone className="h-4 w-4" />
                                       رابطہ کریں
                                    </a>
                                 </Button>
                              </CardContent>
                           </Card>
                        );
                     })}
                  </div>
               </div>
            </section>

            {/* Registration Info */}
            <section className="py-16 bg-gradient-to-b from-muted/30 to-secondary/10">
               <div className="container max-w-4xl">
                  <div className="bg-card p-8 md:p-12 rounded-2xl shadow-xl border-2 border-secondary/30" style={{ fontFamily: "'Mehr Nastaleeq', serif", direction: 'rtl', lineHeight: '2.8' }}>
                     <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">
                        🏛 ادارے کی رجسٹریشن
                     </h3>
                     <p className="text-center text-lg mb-8">
                        ہماری اکیڈمی دعوتِ اسلامی کے بورڈ <span className="font-bold text-secondary">کنز المدارس (انٹرنیشنل)</span> سے منسلک و ملحق ہے، اور تمام کورسز کی اسناد کنز المدارس بورڈ کے ذریعے دی جاتی ہیں۔
                     </p>

                     <div className="bg-gradient-to-r from-primary to-secondary p-8 rounded-xl text-white text-center space-y-4 shadow-lg">
                        <Phone className="h-12 w-12 mx-auto mb-4" />
                        <p className="text-xl font-bold">
                           📩 بس واٹس ایپ پر ایک میسج کریں
                        </p>
                        <p className="text-lg">
                           اور اپنا داخلہ کنفرم کریں
                        </p>
                        <Button
                           size="lg"
                           className="bg-white text-primary hover:bg-white/90 font-bold mt-4"
                           style={{ fontFamily: "'Mehr Nastaleeq', serif", fontSize: '1.2rem' }}
                        >
                           رابطہ کریں
                        </Button>
                     </div>

                     <p className="text-center text-lg mt-8 text-secondary font-semibold">
                        💬 علم حاصل کریں — عمل کی روشنی پھیلائیں 🌿
                     </p>
                  </div>
               </div>
            </section>
         </main>
         <Footer />
      </div>
   );
}
