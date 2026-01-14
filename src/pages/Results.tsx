
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Search, GraduationCap, Calendar, FileText, AlertCircle } from "lucide-react";
import pattern from "@/assets/pattern.jpg";
import SEO from "@/components/SEO";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Results() {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <SEO title="Exam Results" description="Check your academic results, download mark sheets, and view performance history at Marifat Ul Quran." />
            <Header />
            <main className="flex-1">
                {/* Page Header */}
                <section className="bg-secondary text-primary py-20 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${pattern})` }} />
                    <div className="container relative z-10 text-center">
                        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">Exam Results</h1>
                        <p className="text-lg opacity-90 max-w-2xl mx-auto">Check your academic performance and download official result cards.</p>
                    </div>
                </section>

                {/* Search Section */}
                <section className="py-16">
                    <div className="container">
                        <div className="max-w-4xl mx-auto">
                            <Card className="shadow-lg border-t-4 border-t-primary">
                                <CardHeader className="text-center pb-2">
                                    <CardTitle className="text-2xl font-bold text-primary">Result Portal</CardTitle>
                                    <p className="text-muted-foreground">Enter your roll number to view your result</p>
                                </CardHeader>
                                <CardContent className="p-8">
                                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <Label htmlFor="session">Academic Session</Label>
                                                <Select defaultValue="2025-annual">
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select Session" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="2025-annual">Annual 2025</SelectItem>
                                                        <SelectItem value="2024-supplementary">Supplementary 2024</SelectItem>
                                                        <SelectItem value="2024-annual">Annual 2024</SelectItem>
                                                        <SelectItem value="2023-annual">Annual 2023</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="program">Program / Class</Label>
                                                <Select defaultValue="alim">
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select Program" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="alim">Dars-e-Nizami (Alim/Alimah)</SelectItem>
                                                        <SelectItem value="hifz">Hifz-ul-Quran</SelectItem>
                                                        <SelectItem value="tajweed">Tajweed Course</SelectItem>
                                                        <SelectItem value="nazira">Nazira Quran</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-3 gap-6 items-end">
                                            <div className="md:col-span-2 space-y-2">
                                                <Label htmlFor="rollno">Roll Number / Registration ID</Label>
                                                <div className="relative">
                                                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                                    <Input id="rollno" placeholder="Enter your roll number (e.g., 12345)" className="pl-9" />
                                                </div>
                                            </div>
                                            <Button className="w-full bg-primary hover:bg-primary/90 font-bold text-white h-10">
                                                View Result
                                            </Button>
                                        </div>
                                    </form>
                                </CardContent>
                            </Card>

                            {/* Information Message */}
                            <div className="mt-8 grid md:grid-cols-2 gap-6">
                                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 flex gap-4">
                                    <GraduationCap className="h-6 w-6 text-blue-600 shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-blue-800 mb-2">Grading System</h4>
                                        <p className="text-sm text-blue-800/80">
                                            Results are graded based on Tanzeem Al-Madaris standards. Passing marks for individual subjects are 40%, and aggregate must be 45%.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 flex gap-4">
                                    <AlertCircle className="h-6 w-6 text-yellow-600 shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-yellow-800 mb-2">Result Corrections</h4>
                                        <p className="text-sm text-yellow-800/80">
                                            In case of any discrepancy in your result card, please contact the Examination Department within 15 days of result declaration.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Recent Announcements */}
                            <div className="mt-12">
                                <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                                    <Calendar className="h-5 w-5 text-secondary" />
                                    Recent Result Announcements
                                </h3>
                                <div className="space-y-4">
                                    {[
                                        { title: "Annual Examination Results 2025 (Dars-e-Nizami)", date: "January 14, 2026", status: "Published" },
                                        { title: "Hifz-ul-Quran Quarterly Assessment", date: "December 20, 2025", status: "Published" },
                                        { title: "Online Tajweed Course Final Results", date: "December 15, 2025", status: "Published" },
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center justify-between p-4 bg-white border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                            <div className="flex items-center gap-4">
                                                <FileText className="h-5 w-5 text-muted-foreground" />
                                                <div>
                                                    <h4 className="font-semibold text-primary">{item.title}</h4>
                                                    <p className="text-xs text-muted-foreground">Declared on: {item.date}</p>
                                                </div>
                                            </div>
                                            <span className="text-xs font-bold px-3 py-1 bg-green-100 text-green-700 rounded-full">{item.status}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
