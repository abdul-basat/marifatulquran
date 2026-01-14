import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Globe, Phone, Mail, Clock, MessageCircle, Headphones } from "lucide-react";
import pattern from "@/assets/pattern.jpg";
import SEO from "@/components/SEO";

export default function Contact() {
   return (
      <div className="min-h-screen bg-background flex flex-col">
         <SEO title="Contact Us" description="Get in touch with Marifat Ul Quran Online Academy for enrollment, course inquiries, and student support." />
         <Header />
         <main className="flex-1">
            {/* Page Header */}
            <section className="bg-secondary text-primary py-20 relative overflow-hidden">
               <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${pattern})` }} />
               <div className="container relative z-10 text-center">
                  <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">Contact Us</h1>
                  <p className="text-lg opacity-90 max-w-2xl mx-auto">We're here to support your learning journey. Reach out to us for enrollment, course inquiries, or student support.</p>
               </div>
            </section>

            <section className="py-16">
               <div className="container">
                  <div className="grid lg:grid-cols-3 gap-12">
                     {/* Contact Info */}
                     <div className="lg:col-span-1 space-y-8">
                        <div>
                           <h2 className="text-2xl font-bold text-primary mb-6">Get in Touch</h2>
                           <p className="text-muted-foreground mb-8">
                              Whether you have questions about our online courses, need help with enrollment, or require technical support, our team is ready to assist you.
                           </p>
                        </div>

                        <div className="space-y-6">
                           <Card className="border-l-4 border-l-secondary">
                              <CardContent className="p-6 flex gap-4">
                                 <Globe className="h-6 w-6 text-primary shrink-0" />
                                 <div>
                                    <h4 className="font-bold text-lg text-primary">Global Online Academy</h4>
                                    <p className="text-muted-foreground text-sm">
                                       Learn from anywhere in the world.<br />
                                       100% Online Classes Available
                                    </p>
                                 </div>
                              </CardContent>
                           </Card>

                           <Card className="border-l-4 border-l-secondary">
                              <CardContent className="p-6 flex gap-4">
                                 <MessageCircle className="h-6 w-6 text-primary shrink-0" />
                                 <div>
                                    <h4 className="font-bold text-lg text-primary">Phone & WhatsApp</h4>
                                    <p className="text-muted-foreground text-sm">+92 318 1955634</p>
                                    <p className="text-muted-foreground text-xs mt-1">Quick responses for urgent queries</p>
                                 </div>
                              </CardContent>
                           </Card>

                           <Card className="border-l-4 border-l-secondary">
                              <CardContent className="p-6 flex gap-4">
                                 <Mail className="h-6 w-6 text-primary shrink-0" />
                                 <div>
                                    <h4 className="font-bold text-lg text-primary">Email Us</h4>
                                    <p className="text-muted-foreground text-sm">info@maarifatulquran.com</p>
                                    <p className="text-muted-foreground text-sm">support@maarifatulquran.com</p>
                                 </div>
                              </CardContent>
                           </Card>

                           <Card className="border-l-4 border-l-secondary">
                              <CardContent className="p-6 flex gap-4">
                                 <Headphones className="h-6 w-6 text-primary shrink-0" />
                                 <div>
                                    <h4 className="font-bold text-lg text-primary">Support Hours</h4>
                                    <p className="text-muted-foreground text-sm">Mon - Sat: 9:00 AM - 9:00 PM (PKT)</p>
                                    <p className="text-muted-foreground text-sm">Sunday: 10:00 AM - 6:00 PM (PKT)</p>
                                 </div>
                              </CardContent>
                           </Card>
                        </div>
                     </div>

                     {/* Contact Form */}
                     <div className="lg:col-span-2">
                        <Card className="h-full">
                           <CardContent className="p-8">
                              <h2 className="text-2xl font-bold text-primary mb-6">Send us a Message</h2>
                              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                 <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                       <Label htmlFor="firstName">First Name</Label>
                                       <Input id="firstName" placeholder="Your first name" />
                                    </div>
                                    <div className="space-y-2">
                                       <Label htmlFor="lastName">Last Name</Label>
                                       <Input id="lastName" placeholder="Your last name" />
                                    </div>
                                 </div>

                                 <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                       <Label htmlFor="email">Email</Label>
                                       <Input id="email" type="email" placeholder="Your email address" />
                                    </div>
                                    <div className="space-y-2">
                                       <Label htmlFor="phone">Phone / WhatsApp</Label>
                                       <Input id="phone" placeholder="Your phone or WhatsApp number" />
                                    </div>
                                 </div>

                                 <div className="space-y-2">
                                    <Label htmlFor="subject">Subject</Label>
                                    <select id="subject" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                                       <option>General Inquiry</option>
                                       <option>Course Enrollment</option>
                                       <option>Online Class Schedule</option>
                                       <option>Technical Support</option>
                                       <option>Fee & Payment</option>
                                       <option>Feedback / Suggestions</option>
                                       <option>Other</option>
                                    </select>
                                 </div>

                                 <div className="space-y-2">
                                    <Label htmlFor="message">Message</Label>
                                    <Textarea id="message" placeholder="How can we help you with your learning journey?" className="min-h-[150px]" />
                                 </div>

                                 <Button className="w-full sm:w-auto font-bold text-lg bg-primary hover:bg-primary/90 text-white px-8">
                                    Send Message
                                 </Button>
                              </form>
                           </CardContent>
                        </Card>
                     </div>
                  </div>
               </div>
            </section>
         </main>
         <Footer />
      </div>
   );
}
