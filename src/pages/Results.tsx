
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Search, GraduationCap, Calendar, FileText, AlertCircle, Clock, ShieldCheck, Sparkles } from "lucide-react";
const pattern = "/images/hero/pattern.webp";
import SEO from "@/components/SEO";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion, AnimatePresence } from "framer-motion";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";

export default function Results() {
    const [isComingSoonOpen, setIsComingSoonOpen] = useState(false);

    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.8, ease: "easeOut" }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const staggerItem = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    const handleViewResult = (e: React.FormEvent) => {
        e.preventDefault();
        setIsComingSoonOpen(true);
    };

    return (
        <div className="min-h-screen bg-background flex flex-col overflow-x-hidden">
            <SEO title="Exam Results" description="Check your academic results, download mark sheets, and view performance history at Marifat Ul Quran." />
            <Header />
            <main className="flex-1">
                {/* Page Header */}
                <section className="bg-secondary text-primary py-24 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${pattern})` }} />
                    <div className="container relative z-10 text-center">
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className="text-5xl md:text-7xl font-heading font-bold mb-6 tracking-tight"
                        >
                            Exam Results
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
                            className="text-xl opacity-90 max-w-2xl mx-auto leading-relaxed"
                        >
                            Check your academic performance and download official result cards.
                        </motion.p>
                    </div>
                </section>

                {/* Search Section */}
                <section className="py-20">
                    <div className="container">
                        <div className="max-w-4xl mx-auto">
                            <motion.div {...(fadeInUp as any)}>
                                <Card className="shadow-2xl border-t-8 border-t-primary rounded-3xl overflow-hidden">
                                    <CardHeader className="text-center pb-2 bg-muted/30 pt-10">
                                        <CardTitle className="text-3xl font-bold text-primary uppercase tracking-wider">Result Portal</CardTitle>
                                        <p className="text-muted-foreground font-medium">Enter your roll number to view your result</p>
                                    </CardHeader>
                                    <CardContent className="p-8 md:p-12">
                                        <form className="space-y-8" onSubmit={handleViewResult}>
                                            <div className="grid md:grid-cols-2 gap-8">
                                                <div className="space-y-3">
                                                    <Label htmlFor="session" className="text-sm font-black uppercase tracking-widest opacity-60">Academic Session</Label>
                                                    <Select defaultValue="2025-annual">
                                                        <SelectTrigger className="h-14 rounded-xl border-2 focus:border-primary">
                                                            <SelectValue placeholder="Select Session" />
                                                        </SelectTrigger>
                                                        <SelectContent className="rounded-xl">
                                                            <SelectItem value="2025-annual">Annual 2025</SelectItem>
                                                            <SelectItem value="2024-supplementary">Supplementary 2024</SelectItem>
                                                            <SelectItem value="2024-annual">Annual 2024</SelectItem>
                                                            <SelectItem value="2023-annual">Annual 2023</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                                <div className="space-y-3">
                                                    <Label htmlFor="program" className="text-sm font-black uppercase tracking-widest opacity-60">Program / Class</Label>
                                                    <Select defaultValue="alim">
                                                        <SelectTrigger className="h-14 rounded-xl border-2 focus:border-primary">
                                                            <SelectValue placeholder="Select Program" />
                                                        </SelectTrigger>
                                                        <SelectContent className="rounded-xl">
                                                            <SelectItem value="alim">Dars-e-Nizami (Alim/Alimah)</SelectItem>
                                                            <SelectItem value="hifz">Hifz-ul-Quran</SelectItem>
                                                            <SelectItem value="tajweed">Tajweed Course</SelectItem>
                                                            <SelectItem value="nazira">Nazira Quran</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                            </div>

                                            <div className="grid md:grid-cols-3 gap-8 items-end">
                                                <div className="md:col-span-2 space-y-3">
                                                    <Label htmlFor="rollno" className="text-sm font-black uppercase tracking-widest opacity-60">Roll Number / Registration ID</Label>
                                                    <div className="relative">
                                                        <Search className="absolute left-4 top-4 h-5 w-5 text-muted-foreground" />
                                                        <Input id="rollno" placeholder="Enter your roll number (e.g., 12345)" className="h-14 pl-12 rounded-xl border-2 focus:border-primary" />
                                                    </div>
                                                </div>
                                                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 font-bold text-white h-14 rounded-xl shadow-lg transition-all hover:scale-[1.02]">
                                                    View Result
                                                </Button>
                                            </div>
                                        </form>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            {/* Information Message */}
                            <motion.div
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, margin: "-50px" }}
                                className="mt-12 grid md:grid-cols-2 gap-8"
                            >
                                <motion.div
                                    variants={staggerItem}
                                    whileHover={{ y: -5 }}
                                    className="bg-blue-50/50 p-8 rounded-2xl border-2 border-blue-100 flex gap-5 shadow-sm transition-all"
                                >
                                    <div className="h-12 w-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 shrink-0 shadow-inner">
                                        <GraduationCap className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-blue-900 text-lg mb-2">Grading System</h4>
                                        <p className="text-sm text-blue-800/80 leading-relaxed">
                                            Results are graded based on Tanzeem Al-Madaris standards. Passing marks for individual subjects are 40%, and aggregate must be 45%.
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    variants={staggerItem}
                                    whileHover={{ y: -5 }}
                                    className="bg-amber-50/50 p-8 rounded-2xl border-2 border-amber-100 flex gap-5 shadow-sm transition-all"
                                >
                                    <div className="h-12 w-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600 shrink-0 shadow-inner">
                                        <AlertCircle className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-amber-900 text-lg mb-2">Result Corrections</h4>
                                        <p className="text-sm text-amber-800/80 leading-relaxed">
                                            In case of any discrepancy in your result card, please contact the Examination Department within 15 days of result declaration.
                                        </p>
                                    </div>
                                </motion.div>
                            </motion.div>

                            {/* Recent Announcements */}
                            <div className="mt-20">
                                <motion.h3
                                    {...(fadeInUp as any)}
                                    className="text-3xl font-bold text-primary mb-8 flex items-center gap-3 border-l-8 border-secondary pl-6"
                                >
                                    <Calendar className="h-8 w-8 text-secondary" />
                                    Recent Result Announcements
                                </motion.h3>
                                <motion.div
                                    variants={staggerContainer}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true }}
                                    className="grid gap-6"
                                >
                                    {[
                                        { title: "Annual Examination Results 2025 (Dars-e-Nizami)", date: "January 14, 2026", status: "Published" },
                                        { title: "Hifz-ul-Quran Quarterly Assessment", date: "December 20, 2025", status: "Published" },
                                        { title: "Online Tajweed Course Final Results", date: "December 15, 2025", status: "Published" },
                                    ].map((item, i) => (
                                        <motion.div
                                            key={i}
                                            variants={staggerItem}
                                            whileHover={{ x: 10, backgroundColor: "rgba(243, 244, 246, 0.5)" }}
                                            className="flex items-center justify-between p-6 bg-white border-2 rounded-2xl shadow-sm hover:shadow-md transition-all cursor-default"
                                        >
                                            <div className="flex items-center gap-6">
                                                <div className="h-12 w-12 rounded-xl bg-muted/50 flex items-center justify-center text-muted-foreground">
                                                    <FileText className="h-6 w-6" />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-primary text-lg">{item.title}</h4>
                                                    <p className="text-sm text-muted-foreground font-medium">Declared on: {item.date}</p>
                                                </div>
                                            </div>
                                            <span className="text-xs font-black uppercase tracking-widest px-4 py-2 bg-green-100 text-green-700 rounded-lg shadow-sm">{item.status}</span>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />

            <Dialog open={isComingSoonOpen} onOpenChange={setIsComingSoonOpen}>
                <DialogContent className="sm:max-w-md rounded-3xl overflow-hidden border-none p-0 bg-transparent shadow-none">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border-t-8 border-t-secondary"
                    >
                        <div className="relative h-32 bg-secondary/10 flex items-center justify-center overflow-hidden">
                            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `url(${pattern})`, backgroundSize: '200px' }} />
                            <motion.div
                                animate={{
                                    rotate: [0, 10, -10, 0],
                                    scale: [1, 1.1, 1, 1.1, 1]
                                }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                className="relative z-10 bg-white p-5 rounded-3xl shadow-xl text-secondary"
                            >
                                <Clock className="h-12 w-12" />
                            </motion.div>
                            <div className="absolute -top-10 -right-10 bg-primary/5 h-32 w-32 rounded-full blur-3xl" />
                            <div className="absolute -bottom-10 -left-10 bg-secondary/5 h-32 w-32 rounded-full blur-3xl" />
                        </div>

                        <div className="p-10 text-center space-y-6">
                            <DialogHeader>
                                <DialogTitle className="text-3xl font-heading font-bold text-primary flex items-center justify-center gap-2">
                                    <Sparkles className="h-6 w-6 text-secondary" />
                                    Coming Soon!
                                    <Sparkles className="h-6 w-6 text-secondary" />
                                </DialogTitle>
                                <DialogDescription className="text-lg text-muted-foreground pt-4 leading-relaxed font-medium">
                                    Our online result portal is currently under maintenance as we prepare the latest academic records.
                                </DialogDescription>
                            </DialogHeader>

                            <div className="bg-muted/30 p-6 rounded-2xl border-2 border-dashed border-muted flex items-start gap-4 text-left">
                                <ShieldCheck className="h-6 w-6 text-primary shrink-0 mt-1" />
                                <p className="text-sm text-foreground/70 font-medium">
                                    Your data is being securely processed. Please check back in a few days or contact the Jamia administration for urgent inquiries.
                                </p>
                            </div>

                            <Button
                                onClick={() => setIsComingSoonOpen(false)}
                                className="w-full h-16 text-xl font-bold bg-primary hover:bg-primary/90 text-white rounded-2xl shadow-xl transition-all hover:scale-[1.02]"
                            >
                                <span style={{ fontFamily: "'Mehr Nastaliq Web', 'Amiri', serif" }}>جزاک اللہ خیرا کثیرا</span>
                            </Button>

                        </div>
                    </motion.div>
                </DialogContent>
            </Dialog>
        </div>
    );
}
