import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";
import pattern from "@/assets/pattern.jpg";
import SEO from "@/components/SEO";
import campus from "@/assets/campus.jpg";
import scholar1 from "@/assets/scholar1.jpg";
import studentMale from "@/assets/student-male.jpg";

export default function Blog() {
   const posts = [
      {
         id: 1,
         title: "The Importance of Sacred Knowledge in the Modern Age",
         excerpt: "In an era of information overload, connecting with authentic sources of Deen is more critical than ever. Explore how Marifat Ul Quran bridges the gap.",
         date: "January 10, 2026",
         author: "Sheikh Muhammad Abdullah",
         category: "Islamic Studies",
         image: scholar1
      },
      {
         id: 2,
         title: "Admissions Open for 2025-26 Academic Session",
         excerpt: "We are excited to welcome a new batch of students. Learn about our updated curriculum, scholarship opportunities, and how to apply.",
         date: "January 05, 2026",
         author: "Admin Office",
         category: "Announcements",
         image: campus
      },
      {
         id: 3,
         title: "Preparing Your Heart for Ramadan",
         excerpt: "Practical spiritual advice on how to maximize the blessings of the upcoming holy month. A guide for students and families.",
         date: "December 28, 2025",
         author: "Dr. Abdul Rahman",
         category: "Spirituality",
         image: studentMale
      }
   ];

   return (
      <div className="min-h-screen bg-background flex flex-col">
         <SEO title="Blog" description="Read the latest articles, updates, and spiritual insights from Marifat Ul Quran." />
         <Header />

         <main className="flex-1">
            {/* Page Header */}
            <section className="bg-secondary text-primary py-20 relative overflow-hidden">
               <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${pattern})` }} />
               <div className="container relative z-10 text-center">
                  <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">Our Blog</h1>
                  <p className="text-lg opacity-90 max-w-2xl mx-auto">Insights, updates, and reflections from our faculty and students.</p>
               </div>
            </section>

            {/* Blog Grid */}
            <section className="py-16">
               <div className="container">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                     {posts.map((post) => (
                        <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow border-none shadow-md flex flex-col h-full">
                           <div className="h-48 overflow-hidden relative">
                              <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                              <div className="absolute top-4 left-4 bg-primary/90 text-white text-xs font-bold px-3 py-1 rounded-full">
                                 {post.category}
                              </div>
                           </div>
                           <CardHeader>
                              <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                                 <div className="flex items-center gap-1">
                                    <Calendar className="h-3 w-3" />
                                    {post.date}
                                 </div>
                                 <div className="flex items-center gap-1">
                                    <User className="h-3 w-3" />
                                    {post.author}
                                 </div>
                              </div>
                              <CardTitle className="text-xl font-bold text-primary line-clamp-2 hover:text-secondary transition-colors cursor-pointer">
                                 {post.title}
                              </CardTitle>
                           </CardHeader>
                           <CardContent className="flex-1">
                              <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                                 {post.excerpt}
                              </p>
                           </CardContent>
                           <CardFooter className="pt-0">
                              <Button variant="ghost" className="p-0 text-primary font-bold hover:text-secondary hover:bg-transparent">
                                 Read Article <ArrowRight className="ml-2 h-4 w-4" />
                              </Button>
                           </CardFooter>
                        </Card>
                     ))}
                  </div>
               </div>
            </section>
         </main>
         <Footer />
      </div>
   );
}
