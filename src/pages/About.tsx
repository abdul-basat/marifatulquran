import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BookOpen, Clock, DollarSign, GraduationCapIcon, Award, Users, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import pattern from "@/assets/pattern.jpg";
import SEO from "@/components/SEO";

export default function About() {
  const whatsappNumber = "923181955634";

  const getWhatsAppLink = (courseName: string) => {
    const message = `السلام علیکم ورحمۃ اللہ وبرکاتہ! مجھے اس کورس *${courseName}* میں داخلہ مطلوب ہے۔`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
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
        "باقاعدہ چیمہ قاری کورس"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO title="تجوید کورسز | Tajweed Courses" description="ادارہ معرفۃُ القرآن للبنین و للبنات - آن لائن تجوید کورسز کی مکمل معلومات" />
      <Header />
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-gradient-to-br from-primary via-primary/90 to-secondary text-primary-foreground py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${pattern})` }} />

          {/* Decorative Islamic Pattern */}
          <div className="absolute top-0 left-0 w-32 h-32 opacity-20">
            <svg viewBox="0 0 100 100" className="w-full h-full text-secondary">
              <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="1" />
            </svg>
          </div>

          <div className="container relative z-10">
            {/* Arabic Greeting */}
            <div className="text-center mb-8" dir="rtl">
              <p className="text-2xl md:text-3xl mb-4" style={{ fontFamily: "'Mehr Nastaliq Web', 'Amiri', serif" }}>
                🌸✨ السلام علیکم ورحمۃ اللہ وبرکاتہ ✨🌸
              </p>
            </div>

            {/* Institution Name */}
            <div className="text-center" dir="rtl">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-white outline-none focus:outline-none" style={{ fontFamily: "'Mehr Nastaliq Web', 'Amiri', serif", outline: 'none' }}>
                📚🌷 ادارہ معرفۃُ القرآن للبنین و للبنات 🌷📚
              </h1>
              <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-lg md:text-xl mb-4" style={{ fontFamily: "'Mehr Nastaliq Web', 'Amiri', serif" }}>
                <span className="bg-secondary/20 px-4 py-2 rounded-lg backdrop-blur-sm">🖥️ آن لائن</span>
                <span className="bg-secondary/20 px-4 py-2 rounded-lg backdrop-blur-sm">🔗 ملحق کنزالمدارس انٹرنیشنل بورڈ</span>
              </div>
            </div>

            {/* Subtitle */}
            <div className="text-center mt-8" dir="rtl">
              <h2 className="text-2xl md:text-3xl font-semibold" style={{ fontFamily: "'Mehr Nastaliq Web', 'Amiri', serif" }}>
                💫 تجوید کورسز کی مکمل اور تفصیلی معلومات 💫
              </h2>
              <p className="text-lg mt-3 opacity-90" style={{ fontFamily: "'Mehr Nastaliq Web', 'Amiri', serif" }}>
                الحمدللہ! ہمارے ادارے میں تجوید کے تین معیاری اور منظم کورسز کرائے جا رہے ہیں 👇
              </p>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section className="py-16 bg-gradient-to-b from-background to-muted/30">
          <div className="container">
            <div className="grid gap-8 max-w-5xl mx-auto">
              {courses.map((course, index) => {
                const Icon = course.icon;
                const colorClasses = {
                  emerald: "from-emerald-50 to-emerald-100 dark:from-emerald-950 dark:to-emerald-900 border-emerald-200 dark:border-emerald-800",
                  amber: "from-amber-50 to-amber-100 dark:from-amber-950 dark:to-amber-900 border-amber-200 dark:border-amber-800",
                  purple: "from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 border-purple-200 dark:border-purple-800"
                };

                return (
                  <div key={course.id} className={`bg-gradient-to-br ${colorClasses[course.color]} border-2 rounded-xl md:rounded-2xl p-4 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]`}>
                    {/* Course Number Badge */}
                    <div className="flex items-center justify-between mb-4 md:mb-6">
                      <div className="flex items-center gap-2 md:gap-3">
                        <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center font-bold text-lg md:text-xl shadow-md">
                          {index + 1}
                        </div>
                        <Icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                      </div>
                    </div>

                    {/* Course Title */}
                    <div className="mb-3 md:mb-4" dir="rtl">
                      <h3 className="text-xl md:text-3xl font-bold text-primary mb-1 md:mb-2 leading-tight" style={{ fontFamily: "'Mehr Nastaliq Web', 'Amiri', serif" }}>
                        🌼 {course.name} 🌼
                      </h3>
                      <p className="text-xs md:text-sm text-muted-foreground">({course.nameEng})</p>
                    </div>

                    {/* Course Description */}
                    <div className="mb-4 md:mb-6" dir="rtl">
                      <p className="text-base md:text-xl text-foreground/90 leading-relaxed" style={{ fontFamily: "'Mehr Nastaliq Web', 'Amiri', serif" }}>
                        📘 {course.description}
                      </p>
                    </div>

                    {/* Course Features (for Qari Course) */}
                    {course.features && (
                      <div className="mb-6 bg-card/50 rounded-xl p-4" dir="rtl">
                        <p className="font-semibold mb-3 text-primary" style={{ fontFamily: "'Mehr Nastaliq Web', 'Amiri', serif" }}>
                          📚 یہ ایک مکمل اور جامع قاری کورس ہے، جس میں شامل ہیں:
                        </p>
                        <ul className="space-y-2">
                          {course.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2" style={{ fontFamily: "'Mehr Nastaliq Web', 'Amiri', serif" }}>
                              <span className="text-secondary text-xl mt-1">✨</span>
                              <span className="text-foreground/80">{feature}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="mt-4 pt-4 border-t border-border/50" dir="rtl">
                          <p className="text-sm font-semibold mb-2 text-primary" style={{ fontFamily: "'Mehr Nastaliq Web', 'Amiri', serif" }}>
                            📝 اس کورس کے تحت:
                          </p>
                          <div className="space-y-2">
                            <p className="text-sm flex items-start gap-2" style={{ fontFamily: "'Mehr Nastaliq Web', 'Amiri', serif" }}>
                              <span>📌</span>
                              <span>کنزالمدارس انٹرنیشنل بورڈ کے باقاعدہ امتحانات ہوتے ہیں</span>
                            </p>
                            <p className="text-sm flex items-start gap-2" style={{ fontFamily: "'Mehr Nastaliq Web', 'Amiri', serif" }}>
                              <span>📜</span>
                              <span>بورڈ کی سرکاری سند دی جاتی ہے</span>
                            </p>
                            <p className="text-sm flex items-start gap-2" style={{ fontFamily: "'Mehr Nastaliq Web', 'Amiri', serif" }}>
                              <span>🎓</span>
                              <span>جو مدارس میں تدریس اور دینی خدمات کے لیے نہایت مفید ہے</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Duration and Fee */}
                    <div className="grid grid-cols-2 gap-2 md:gap-4">
                      <div className="bg-card rounded-lg p-3 md:p-4 text-center border border-border/50">
                        <Clock className="w-5 h-5 md:w-6 md:h-6 mx-auto mb-1 md:mb-2 text-secondary" />
                        <p className="text-[10px] md:text-xs text-muted-foreground mb-0.5 md:mb-1">Duration</p>
                        <p className="font-bold text-primary text-sm md:text-lg" dir="rtl" style={{ fontFamily: "'Mehr Nastaliq Web', 'Amiri', serif" }}>
                          ⏰ {course.duration}
                        </p>
                      </div>
                      <div className="bg-card rounded-lg p-3 md:p-4 text-center border border-border/50">
                        <DollarSign className="w-5 h-5 md:w-6 md:h-6 mx-auto mb-1 md:mb-2 text-secondary" />
                        <p className="text-[10px] md:text-xs text-muted-foreground mb-0.5 md:mb-1">Monthly Fee</p>
                        <p className="font-bold text-primary text-sm md:text-lg" dir="rtl" style={{ fontFamily: "'Mehr Nastaliq Web', 'Amiri', serif" }}>
                          💰 {course.fee}
                        </p>
                      </div>
                    </div>

                    {/* WhatsApp Contact Button */}
                    <Button
                      asChild
                      className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold mt-4"
                      style={{ fontFamily: "'Mehr Nastaleeq', serif", fontSize: '1.1rem' }}
                    >
                      <a
                        href={getWhatsAppLink(course.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <Phone className="h-4 w-4" />
                        رابطہ کریں
                      </a>
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Exam System Section */}
        <section className="py-16 bg-card">
          <div className="container max-w-4xl">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 border-2 border-primary/20">
              <div className="text-center mb-8" dir="rtl">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2" style={{ fontFamily: "'Mehr Nastaliq Web', 'Amiri', serif" }}>
                  🧾 امتحان کا نظام
                </h2>
              </div>

              <div className="space-y-4" dir="rtl">
                {[
                  { icon: "📌", text: "تعلیم مکمل طور پر آن لائن ہوگی" },
                  { icon: "📌", text: "امتحان آن لائن نہیں ہوگا" },
                  { icon: "📍", text: "امتحان کے لیے قریبی سینٹر / مدرسہ جانا ہوگا" },
                  { icon: "✅", text: "امتحان کی تمام ذمہ داری ادارہ خود ادا کرے گا" },
                  { icon: "👉", text: "طالب علم کو صرف پیپر دینے جانا ہوگا" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-card rounded-lg p-4 hover:bg-muted/50 transition-colors">
                    <span className="text-2xl">{item.icon}</span>
                    <p className="text-lg flex-1" style={{ fontFamily: "'Mehr Nastaliq Web', 'Amiri', serif" }}>
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Classes & Teachers Section */}
        <section className="py-16 bg-gradient-to-b from-muted/30 to-background">
          <div className="container max-w-5xl">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Classes Method */}
              <div className="bg-card rounded-2xl p-8 shadow-lg border-2 border-primary/20 hover:shadow-xl transition-all">
                <div className="text-center mb-6" dir="rtl">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl">📡</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary" style={{ fontFamily: "'Mehr Nastaliq Web', 'Amiri', serif" }}>
                    کلاسز کا طریقہ
                  </h3>
                </div>
                <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-950 dark:to-emerald-900 rounded-xl p-6 border border-emerald-200 dark:border-emerald-800" dir="rtl">
                  <p className="text-lg text-center leading-relaxed" style={{ fontFamily: "'Mehr Nastaliq Web', 'Amiri', serif" }}>
                    📞 تمام کلاسز واٹس ایپ گروپ کال کے ذریعے لائیو ہوں گی
                  </p>
                </div>
              </div>

              {/* Teachers */}
              <div className="bg-card rounded-2xl p-8 shadow-lg border-2 border-secondary/20 hover:shadow-xl transition-all">
                <div className="text-center mb-6" dir="rtl">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary" style={{ fontFamily: "'Mehr Nastaliq Web', 'Amiri', serif" }}>
                    اساتذہ کا انتظام
                  </h3>
                </div>
                <div className="space-y-4" dir="rtl">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 rounded-xl p-4 border border-blue-200 dark:border-blue-800">
                    <p className="text-center flex items-center justify-center gap-2" style={{ fontFamily: "'Mehr Nastaliq Web', 'Amiri', serif" }}>
                      <span>🌸</span>
                      <span>طلبہ (للبنین) کے لیے میل اساتذہ</span>
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-950 dark:to-pink-900 rounded-xl p-4 border border-pink-200 dark:border-pink-800">
                    <p className="text-center flex items-center justify-center gap-2" style={{ fontFamily: "'Mehr Nastaliq Web', 'Amiri', serif" }}>
                      <span>🌸</span>
                      <span>طالبات (للبنات) کے لیے فیمیل اساتذہ موجود ہیں</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-br from-primary via-primary/95 to-secondary text-primary-foreground">
          <div className="container max-w-3xl text-center" dir="rtl">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-5xl mb-4">ℹ️</div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "'Mehr Nastaliq Web', 'Amiri', serif" }}>
                مزید کسی بھی قسم کی معلومات کے لیے
              </h2>
              <p className="text-xl mb-6" style={{ fontFamily: "'Mehr Nastaliq Web', 'Amiri', serif" }}>
                بلا جھجھک ہم سے رابطہ فرمائیں 🌺
              </p>

              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-lg leading-relaxed" style={{ fontFamily: "'Mehr Nastaliq Web', 'Amiri', serif" }}>
                  🤲 اللہ تعالیٰ ہم سب کو قرآنِ مجید درست تجوید کے ساتھ پڑھنے،<br />
                  سمجھنے اور آگے پہنچانے کی توفیق عطا فرمائے<br />
                  آمین یا رب العالمین 🤍
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
