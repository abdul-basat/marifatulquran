import { useState } from "react";
import Header from "@/components/Header";

import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Globe, Phone, Mail, Clock, MessageCircle, Headphones } from "lucide-react";
import pattern from "@/assets/pattern.webp";
import SEO from "@/components/SEO";
import { motion, type Variants } from "framer-motion";



export default function Contact() {
   const [formData, setFormData] = useState({
      fullName: '',
      email: '',
      phone: '',
      subject: '',

      message: ''
   });

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();

      const whatsappNumber = "923181955634";

      const messageParts = [
         `*Full Name:* ${formData.fullName}`,
         formData.email ? `*Email:* ${formData.email}` : '',
         formData.phone ? `*Phone:* ${formData.phone}` : '',
         `*Subject:* ${formData.subject}`,
         '',
         `*Message:* ${formData.message}`
      ].filter(part => part !== '');

      const formattedMessage = messageParts.join('\n');

      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(formattedMessage)}`;
      window.open(whatsappUrl, '_blank');
   };

   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { id, value } = e.target;
      setFormData(prev => ({ ...prev, [id]: value }));
   };

   const fadeInUp: Variants = {

      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
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


   return (

      <div className="min-h-screen bg-background flex flex-col">
         <SEO title="Contact Us" description="Get in touch with Marifat Ul Quran Online Academy for enrollment, course inquiries, and student support." />
         <Header />
         <main className="flex-1">
            <section className="bg-secondary text-primary py-20 relative overflow-hidden">
               <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${pattern})` }} />
               <div className="container relative z-10 text-center">
                  <motion.h1
                     initial={{ opacity: 0, scale: 0.9, y: 20 }}
                     animate={{ opacity: 1, scale: 1, y: 0 }}
                     transition={{ duration: 0.7, ease: "easeOut" }}
                     className="text-4xl md:text-6xl font-heading font-bold mb-4"
                  >
                     Contact Us
                  </motion.h1>
                  <motion.p
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
                     className="text-lg opacity-90 max-w-2xl mx-auto"
                  >
                     We're here to support your learning journey. Reach out to us for enrollment, course inquiries, or student support.
                  </motion.p>
               </div>
            </section>


            <section className="py-16">
               <div className="container max-w-6xl mx-auto">
                  <motion.div
                     variants={staggerContainer}
                     initial="hidden"
                     whileInView="visible"
                     viewport={{ once: true, margin: "-50px" }}
                     className="grid lg:grid-cols-3 gap-12"
                  >
                     {/* Contact Info */}
                     <div className="lg:col-span-1 space-y-8">
                        <motion.div variants={fadeInUp}>
                           <h2 className="text-2xl font-bold text-primary mb-6">Get in Touch</h2>
                           <p className="text-muted-foreground mb-8">
                              Whether you have questions about our online courses, need help with enrollment, or require technical support, our team is ready to assist you.
                           </p>
                        </motion.div>

                        <div className="space-y-6">
                           {[
                              { icon: Globe, title: "Global Online Academy", content: <>Learn from anywhere in the world.<br />100% Online Classes Available</> },
                              { icon: MessageCircle, title: "Phone & WhatsApp", content: "+92 318 1955634", sub: "Quick responses for urgent queries" },
                              { icon: Mail, title: "Email Us", content: <><p>info@maarifatulquran.com</p><p>support@maarifatulquran.com</p></> },
                              { icon: Headphones, title: "Support Hours", content: <><p>Mon - Sat: 9:00 AM - 9:00 PM (PKT)</p><p>Sunday: 10:00 AM - 6:00 PM (PKT)</p></> },
                           ].map((item, index) => (
                              <motion.div key={index} variants={fadeInUp}>
                                 <Card className="border-l-4 border-l-secondary hover:shadow-md transition-shadow">
                                    <CardContent className="p-6 flex gap-4">
                                       <item.icon className="h-6 w-6 text-primary shrink-0" />
                                       <div>
                                          <h4 className="font-bold text-lg text-primary">{item.title}</h4>
                                          <div className="text-muted-foreground text-sm">
                                             {item.content}
                                          </div>
                                          {item.sub && <p className="text-muted-foreground text-xs mt-1">{item.sub}</p>}
                                       </div>
                                    </CardContent>
                                 </Card>
                              </motion.div>
                           ))}
                        </div>
                     </div>

                     {/* Contact Form */}
                     <motion.div variants={fadeInUp} className="lg:col-span-2">
                        <Card className="h-full border-t-4 border-t-primary shadow-lg">
                           <CardContent className="p-8">
                              <h2 className="text-2xl font-bold text-primary mb-6">Send us a Message</h2>
                              <form className="space-y-6" onSubmit={handleSubmit}>
                                 <div className="space-y-2">
                                    <Label htmlFor="fullName">Full Name <span className="text-red-500">*</span></Label>
                                    <Input
                                       id="fullName"
                                       required
                                       placeholder="Your full name"
                                       className="rounded-xl border-2 focus:border-primary"
                                       value={formData.fullName}
                                       onChange={handleChange}
                                    />
                                 </div>

                                 <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                       <Label htmlFor="email">Email</Label>
                                       <Input
                                          id="email"
                                          type="email"
                                          placeholder="Your email address"
                                          className="rounded-xl border-2 focus:border-primary"
                                          value={formData.email}
                                          onChange={handleChange}
                                       />
                                    </div>
                                    <div className="space-y-2">
                                       <Label htmlFor="phone">Phone / WhatsApp</Label>
                                       <Input
                                          id="phone"
                                          placeholder="Your phone or WhatsApp number"
                                          className="rounded-xl border-2 focus:border-primary"
                                          value={formData.phone}
                                          onChange={handleChange}
                                       />
                                    </div>
                                 </div>

                                 <div className="space-y-2">
                                    <Label htmlFor="subject">Subject <span className="text-red-500">*</span></Label>
                                    <select
                                       id="subject"
                                       required
                                       className="flex h-12 w-full rounded-xl border-2 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                       value={formData.subject}
                                       onChange={handleChange}
                                    >
                                       <option value="" disabled>Select a subject</option>
                                       <option value="General Inquiry">General Inquiry</option>

                                       <option value="Course Enrollment">Course Enrollment</option>
                                       <option value="Online Class Schedule">Online Class Schedule</option>
                                       <option value="Technical Support">Technical Support</option>
                                       <option value="Fee & Payment">Fee & Payment</option>
                                       <option value="Feedback / Suggestions">Feedback / Suggestions</option>
                                       <option value="Other">Other</option>
                                    </select>
                                 </div>

                                 <div className="space-y-2">
                                    <Label htmlFor="message">Message <span className="text-red-500">*</span></Label>
                                    <Textarea
                                       id="message"
                                       required
                                       placeholder="How can we help you with your learning journey?"
                                       className="min-h-[150px] rounded-xl border-2 focus:border-primary resize-none"
                                       value={formData.message}
                                       onChange={handleChange}
                                    />
                                 </div>

                                 <Button
                                    type="submit"
                                    className="w-full sm:w-auto font-bold text-lg bg-primary hover:bg-primary/90 text-white px-10 py-6 rounded-xl shadow-lg transition-all hover:scale-[1.02]"
                                 >
                                    Send Message
                                 </Button>
                              </form>

                           </CardContent>
                        </Card>
                     </motion.div>
                  </motion.div>
               </div>
            </section>

         </main>
         <Footer />
      </div>
   );
}
