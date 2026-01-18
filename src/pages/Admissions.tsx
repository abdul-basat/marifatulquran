import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { AlertCircle, CheckCircle, Download, ArrowRight, ArrowLeft, Users, GraduationCap, Globe, Clock, ShieldCheck, FileCheck, CreditCard, UserCheck } from "lucide-react";
const pattern = "/images/hero/pattern.webp";
import SEO from "@/components/SEO";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function Admissions() {
  const [step, setStep] = useState(1);
  const totalSteps = 4; // Increased for more detailed process

  const nextStep = () => setStep((prev) => Math.min(prev + 1, totalSteps));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const stats = [
    { icon: Users, label: "Total Students", value: 500, suffix: "+", color: "text-blue-600" },
    { icon: GraduationCap, label: "Courses Offered", value: 12, suffix: "+", color: "text-green-600" },
    { icon: Globe, label: "Countries Reached", value: 15, suffix: "+", color: "text-purple-600" },
    { icon: Clock, label: "Success Rate", value: 98, suffix: "%", color: "text-amber-600" },
  ];

  const processSteps = [
    { title: "Course Selection", description: "Choose your desired academic program.", icon: GraduationCap },
    { title: "Online Form", description: "Fill out the registration form accurately.", icon: FileCheck },
    { title: "Documentation", description: "Submit required identification and certificates.", icon: ShieldCheck },
    { title: "Verification", description: "Final approval by the administration.", icon: UserCheck },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col overflow-x-hidden">
      <SEO title="Admissions - Marifat Ul Quran" description="Apply for admission at Marifat Ul Quran. High-quality Islamic education accessible to all." />
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-secondary text-primary py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${pattern})` }} />
          <div className="container relative z-10 text-center">
            <motion.h1
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-heading font-bold mb-6 tracking-tight"
            >
              Admissions Open
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
              className="text-xl opacity-90 max-w-2xl mx-auto leading-relaxed"
            >
              Begin your journey of spiritual and academic excellence with Marifat Ul Quran. Our admission portal is open for students worldwide.
            </motion.p>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="py-12 bg-white border-b shadow-md relative z-20 -mt-10 mx-auto max-w-6xl rounded-xl">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex flex-col items-center text-center space-y-2"
                >
                  <div className={`p-3 rounded-full bg-muted/50 ${stat.color}`}>
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <span className="text-3xl font-bold text-foreground">
                    <AnimatedCounter to={stat.value as number} suffix={stat.suffix} />
                  </span>
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Important Notice */}
        <section className="py-20 bg-background">
          <div className="container px-4">
            <motion.div
              {...(fadeInUp as any)}
              className="flex flex-col md:flex-row gap-8 items-center max-w-5xl mx-auto bg-amber-50/50 p-8 rounded-2xl border border-amber-100 shadow-sm relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <ShieldCheck className="h-32 w-32 text-amber-900" />
              </div>
              <div className="bg-amber-100 p-5 rounded-2xl shadow-inner relative z-10">
                <AlertCircle className="h-12 w-12 text-amber-600 shrink-0" />
              </div>
              <div className="relative z-10 text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-amber-900 mb-4">Notice Regarding Board Examinations</h3>
                <p className="text-amber-800/80 leading-relaxed text-lg">
                  Marifat Ul Quran facilitates board examination submissions through <span className="font-bold underline text-amber-700">Tanzeem Al-Madaris</span> and <span className="font-bold underline text-amber-700">Kanzul Madaris</span>. This facility is strictly reserved for students who complete their full academic year and preparatory sessions at our Jamia.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Admission Process Timeline */}
        <section className="py-24 bg-muted/20 relative">
          <div className="container px-4">
            <motion.div
              {...(fadeInUp as any)}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Our Admission Process</h2>
              <div className="h-1.5 w-16 bg-secondary mx-auto rounded-full shadow-sm" />
            </motion.div>
            <div className="grid md:grid-cols-4 gap-10 max-w-7xl mx-auto">
              {processSteps.map((p, i) => (
                <motion.div
                  key={i}
                  {...(fadeInUp as any)}
                  transition={{ delay: i * 0.15, duration: 0.8 }}
                  className="relative group"
                >
                  <div className="bg-card p-8 rounded-2xl border-2 border-transparent transition-all duration-500 hover:shadow-lg hover:border-primary/5 hover:-translate-y-1 h-full flex flex-col items-center text-center">
                    <div className="h-16 w-16 rounded-xl bg-primary/5 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <p.icon className="h-8 w-8" />
                    </div>
                    <h4 className="text-xl font-bold mb-3">{p.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{p.description}</p>
                    <div className="absolute -top-3 -right-3 h-10 w-10 rounded-full bg-secondary flex items-center justify-center font-bold text-primary shadow-md border-4 border-white text-base">
                      {i + 1}
                    </div>
                  </div>
                  {i < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-5 transform -translate-y-1/2 z-10 opacity-20 group-hover:opacity-40 transition-opacity">
                      <ArrowRight className="h-10 w-10 text-primary" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements & Form */}
        <section className="py-28 relative">
          <div className="container px-4">
            <div className="grid lg:grid-cols-5 gap-20 max-w-7xl mx-auto">
              {/* Requirements Column */}
              <div className="lg:col-span-2 space-y-16">
                <motion.div {...(fadeInUp as any)}>
                  <h3 className="text-3xl font-bold text-primary mb-8 border-l-4 border-secondary pl-5">Requirements</h3>
                  <div className="space-y-6">
                    {[
                      { text: "Copy of Student CNIC / B-Form", icon: UserCheck },
                      { text: "Father/Guardian CNIC Copy", icon: ShieldCheck },
                      { text: "4 Passport Size Photographs", icon: CheckCircle },
                      { text: "Previous Academic Certificates", icon: FileCheck },
                      { text: "Physical & Mental Fitness Assessment", icon: CheckCircle }
                    ].map((req, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-4 bg-white p-5 rounded-xl border border-transparent shadow-sm hover:border-secondary transition-all"
                      >
                        <div className="h-10 w-10 rounded-lg bg-green-50 flex items-center justify-center text-green-600 shadow-inner">
                          <req.icon className="h-5 w-5" />
                        </div>
                        <span className="font-bold text-base text-foreground/80">{req.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div {...(fadeInUp as any)} transition={{ delay: 0.3 }}>
                  <Card className="bg-primary text-primary-foreground overflow-hidden rounded-2xl shadow-xl relative">
                    <div className="absolute top-0 right-0 p-6 opacity-10">
                      <Download className="h-24 w-24" />
                    </div>
                    <CardHeader className="relative z-10 pt-8 px-8">
                      <CardTitle className="flex items-center gap-3 text-2xl">
                        <Download className="h-6 w-6 text-secondary" />
                        Prospectus
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 relative z-10 p-8 pt-0">
                      <p className="text-primary-foreground/80 leading-relaxed text-base">
                        Explore our comprehensive guide including course details, rules, and subsidized fee structures.
                      </p>
                      <Button variant="secondary" className="w-full font-bold h-12 text-base">
                        Download Full Guide (PDF)
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              {/* Application Form Column */}
              <div className="lg:col-span-3">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <Card className="border-none shadow-xl rounded-2xl overflow-hidden bg-white">
                    <div className="h-2 bg-secondary" />
                    <CardHeader className="bg-muted/10 pt-10 pb-6 text-center">
                      <CardTitle className="text-2xl font-bold text-primary uppercase tracking-widest">Portal</CardTitle>
                      <div className="flex justify-center gap-3 mt-8">
                        {[1, 2, 3, 4].map((s) => (
                          <div
                            key={s}
                            className={`h-1.5 w-12 rounded-full transition-all duration-700 ${step >= s ? 'bg-secondary' : 'bg-muted-foreground/10'}`}
                          />
                        ))}
                      </div>
                      <p className="text-[10px] font-black text-muted-foreground mt-6 uppercase tracking-[0.3em] opacity-60">Step {step} of {totalSteps}</p>
                    </CardHeader>
                    <CardContent className="p-8 md:p-12">
                      <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
                        {/* Step 1: Personal Info */}
                        {step === 1 && (
                          <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="space-y-8"
                          >
                            <div className="grid md:grid-cols-2 gap-6">
                              <div className="space-y-2">
                                <Label htmlFor="name" className="text-xs font-bold uppercase tracking-wider opacity-60">Student Full Name</Label>
                                <Input id="name" placeholder="Ayesha Khan" className="h-12 rounded-lg border focus:border-secondary transition-colors" />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="cnic" className="text-xs font-bold uppercase tracking-wider opacity-60">CNIC / B-Form</Label>
                                <Input id="cnic" placeholder="xxxxx-xxxxxxx-x" className="h-12 rounded-lg border focus:border-secondary transition-colors" />
                              </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                              <div className="space-y-2">
                                <Label htmlFor="dob" className="text-xs font-bold uppercase tracking-wider opacity-60">Date of Birth</Label>
                                <Input id="dob" type="date" className="h-12 rounded-lg border focus:border-secondary transition-colors" />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="gender" className="text-xs font-bold uppercase tracking-wider opacity-60">Gender</Label>
                                <Select>
                                  <SelectTrigger className="h-12 rounded-lg border focus:border-secondary transition-colors">
                                    <SelectValue placeholder="Select Gender" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="female">Female</SelectItem>
                                    <SelectItem value="male">Male</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                            </div>
                          </motion.div>
                        )}

                        {/* Step 2: Guardian Info */}
                        {step === 2 && (
                          <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="space-y-8"
                          >
                            <div className="space-y-2">
                              <Label htmlFor="guardian" className="text-xs font-bold uppercase tracking-wider opacity-60">Father/Guardian Name</Label>
                              <Input id="guardian" placeholder="Enter Full Name" className="h-12 rounded-lg border focus:border-secondary transition-colors" />
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                              <div className="space-y-2">
                                <Label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider opacity-60">WhatsApp Number</Label>
                                <Input id="phone" placeholder="03xx-xxxxxxx" className="h-12 rounded-lg border focus:border-secondary transition-colors" />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="contact" className="text-xs font-bold uppercase tracking-wider opacity-60">Phone Number</Label>
                                <Input id="contact" placeholder="03xx-xxxxxxx" className="h-12 rounded-lg border focus:border-secondary transition-colors" />
                              </div>
                            </div>
                          </motion.div>
                        )}

                        {/* Step 3: Course Selection */}
                        {step === 3 && (
                          <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="space-y-8"
                          >
                            <div className="space-y-2">
                              <Label htmlFor="course" className="text-xs font-bold uppercase tracking-wider opacity-60">Choose Your Program</Label>
                              <Select>
                                <SelectTrigger className="h-14 font-bold border rounded-xl hover:border-secondary transition-all">
                                  <SelectValue placeholder="Browse All Courses" />
                                </SelectTrigger>
                                <SelectContent className="rounded-xl">
                                  <SelectItem value="alimah">Darse Nizami (Alimah Course)</SelectItem>
                                  <SelectItem value="hifz">Hifz-ul-Quran</SelectItem>
                                  <SelectItem value="tajweed">Feizan-e-Tajweed</SelectItem>
                                  <SelectItem value="tafseer">Tarjama-o-Tafseer</SelectItem>
                                  <SelectItem value="short">Short Islamic Courses</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="prev-edu" className="text-xs font-bold uppercase tracking-wider opacity-60">Previous Education</Label>
                              <Input id="prev-edu" placeholder="e.g. Matric / O-Levels / Hifz" className="h-12 rounded-lg border focus:border-secondary transition-colors" />
                            </div>
                          </motion.div>
                        )}

                        {/* Step 4: Final Confirmation */}
                        {step === 4 && (
                          <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="space-y-12"
                          >
                            <div className="space-y-2">
                              <Label htmlFor="address" className="text-xs font-bold uppercase tracking-wider opacity-60">Complete Residential Address</Label>
                              <Textarea id="address" placeholder="Write full address here" className="min-h-[120px] rounded-xl border focus:border-secondary transition-colors resize-none p-4" />
                            </div>
                            <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10 relative overflow-hidden">
                              <div className="absolute top-0 right-0 p-3 opacity-5">
                                <ShieldCheck className="h-16 w-16 text-primary" />
                              </div>
                              <div className="flex gap-4 mb-4">
                                <ShieldCheck className="h-6 w-6 text-primary shrink-0" />
                                <h5 className="font-bold text-primary uppercase text-xs tracking-widest mt-1">Student Declaration</h5>
                              </div>
                              <p className="text-base text-foreground/70 leading-relaxed italic font-medium">
                                "I hereby solemnly declare that all information provided is true. I commit to maintaining 100% attendance and strictly following the Jamia's academic regulations."
                              </p>
                            </div>
                          </motion.div>
                        )}

                        <div className="flex flex-col md:flex-row gap-4 pt-8">
                          {step > 1 && (
                            <Button
                              type="button"
                              variant="outline"
                              onClick={prevStep}
                              className="w-full h-14 text-lg font-bold rounded-xl hover:bg-muted transition-all"
                            >
                              <ArrowLeft className="mr-2 h-5 w-5" /> GO BACK
                            </Button>
                          )}

                          {step < totalSteps ? (
                            <Button
                              type="button"
                              className="w-full h-14 text-lg font-bold shadow-md rounded-xl hover:translate-y-[-2px] transition-transform"
                              onClick={nextStep}
                            >
                              CONTINUE <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                          ) : (
                            <Button
                              type="submit"
                              className="w-full h-14 text-lg font-bold bg-secondary text-primary hover:bg-secondary/90 shadow-md rounded-xl hover:translate-y-[-2px] transition-all"
                            >
                              SUBMIT APPLICATION <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                          )}
                        </div>
                      </form>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
