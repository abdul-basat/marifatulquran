
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, BookOpen, Wifi, Users, Banknote, Globe, Phone, User, CheckCircle2, Info, Eye, X, ArrowLeft } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
} from "@/components/ui/dialog";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetDescription,
    SheetTrigger,
    SheetClose,
} from "@/components/ui/sheet";
import { useState } from "react";

export interface CourseData {
    name: string;
    description: string;
    duration: string;
    eligibility: string;
    mode: string;
    teachers?: string;
    fee?: string;
    oneToOne?: string;
    gender?: string;
    language?: string;
    audience?: string;
    image?: string;
}

interface CourseCardProps {
    course: CourseData;
}

export default function CourseCard({ course }: CourseCardProps) {
    const [isOpen, setIsOpen] = useState(false);
    const whatsappNumber = "923181955634";

    const getWhatsAppLink = (courseName: string) => {
        const message = `السلام علیکم ورحمۃ اللہ وبرکاتہ! مجھے اس کورس *${courseName}* میں داخلہ مطلوب ہے۔`;
        return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    };

    const courseImage = course.image
        ? `/images/courses/${course.image.replace(/\.jpg$/, '.webp')}`
        : "/images/hero-bg-light.webp";

    const courseDetails = [
        { label: "مدت", value: course.duration, icon: Clock, color: "text-secondary", bg: "bg-secondary/10" },
        { label: "اہلیت", value: course.eligibility, icon: User, color: "text-blue-500", bg: "bg-blue-50" },
        { label: "طریقہ کار", value: course.mode, icon: Wifi, color: "text-emerald-500", bg: "bg-emerald-50" },
        { label: "اساتذہ", value: course.teachers || "دستیاب", icon: Users, color: "text-purple-500", bg: "bg-purple-50" },
        { label: "فیس", value: course.fee || "معلومات کے لیے رابطہ کریں", icon: Banknote, color: "text-amber-500", bg: "bg-amber-50" },
        { label: "زبان", value: course.language || "اردو", icon: Globe, color: "text-indigo-500", bg: "bg-indigo-50" },
    ];

    // Shared Content for both Dialog and Sheet
    const ModalContent = ({ isMobile = false }: { isMobile?: boolean }) => (
        <>
            {/* Course Title & Description */}
            <div className="space-y-4" dir="rtl">
                <h2 className={`${isMobile ? 'text-2xl' : 'text-3xl md:text-4xl'} font-bold text-primary leading-tight`} style={{ fontFamily: "'Mehr Nastaliq Web', 'Amiri', serif" }}>
                    {course.name}
                </h2>
                <div className="w-24 h-1.5 bg-secondary rounded-full" />
            </div>

            <p className={`${isMobile ? 'text-lg' : 'text-xl md:text-2xl'} text-muted-foreground leading-relaxed text-right py-2 opacity-90`} dir="rtl" style={{ fontFamily: "'Mehr Nastaliq Web', 'Amiri', serif" }}>
                {course.description}
            </p>

            {/* Details Grid */}
            <div className="grid grid-cols-2 gap-3 mt-4">
                {courseDetails.map((detail, i) => (
                    <div key={i} className="flex items-center justify-end gap-3 p-3 rounded-xl border border-primary/5 bg-muted/30 hover:bg-muted/50 transition-all group/detail" dir="rtl">
                        <div className="flex-1 text-right">
                            <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest mb-0.5">{detail.label}</p>
                            <p className="text-sm font-bold text-primary leading-tight" style={{ fontFamily: "'Mehr Nastaliq Web', 'Amiri', serif" }}>{detail.value}</p>
                        </div>
                        <div className={`p-2.5 rounded-xl ${detail.bg} ${detail.color} group-hover/detail:scale-110 transition-transform`}>
                            <detail.icon className="w-4 h-4" />
                        </div>
                    </div>
                ))}
            </div>

            {/* WhatsApp Button */}
            <div className="pt-6">
                <Button
                    className="w-full bg-primary hover:bg-primary/90 text-white shadow-xl py-6 text-xl font-bold rounded-xl transition-all hover:scale-[1.01]"
                    asChild
                >
                    <a href={getWhatsAppLink(course.name)} target="_blank" rel="noopener noreferrer" className="flex gap-3 items-center justify-center">
                        <Phone className="w-5 h-5" />
                        <span style={{ fontFamily: "'Mehr Nastaliq Web', 'Amiri', serif" }}>ابھی رابطہ کریں</span>
                    </a>
                </Button>
            </div>
        </>
    );

    return (
        <Card className="group relative flex flex-col h-full overflow-hidden rounded-[2rem] border-0 bg-background shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
            {/* Top Shine/Glow Effect */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <CardHeader className="relative p-0 overflow-hidden">
                {/* Image Background with Gradient Mask */}
                <div className="absolute inset-x-0 top-0 h-40 sm:h-44 z-0">
                    <img
                        src={courseImage}
                        alt={`${course.name} - ${course.description}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-50 group-hover:opacity-70"
                    />
                    {/* Aggressive Gradient Mask - Stronger fade at bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-background via-background/20 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent opacity-50" />
                </div>

                {/* Dynamic Background Blurs */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent z-0" />
                <div className="absolute -top-12 -right-12 w-40 h-40 bg-secondary/10 rounded-full blur-3xl group-hover:bg-secondary/20 transition-colors duration-500 z-0" />

                <div className="relative p-6 pb-2 z-10">
                    <div className="flex items-start justify-between gap-4">
                        <div className="relative shrink-0">
                            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-500" />
                            <div className="relative p-3.5 bg-white/90 backdrop-blur-sm rounded-2xl shadow-md group-hover:bg-primary group-hover:text-white transition-all duration-300 transform group-hover:rotate-6">
                                <BookOpen className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                            </div>
                        </div>

                        <CardTitle
                            className="text-3xl font-extrabold text-primary text-right leading-[1.3] drop-shadow-sm flex-1 pt-1"
                            style={{ fontFamily: "'Mehr Nastaliq Web', 'Amiri', serif", direction: 'rtl' }}
                        >
                            <span className="bg-gradient-to-l from-primary via-primary to-primary/70 bg-clip-text text-transparent">
                                {course.name}
                            </span>
                        </CardTitle>
                    </div>

                    <p
                        className="text-muted-foreground text-right text-sm font-medium leading-relaxed mt-4 line-clamp-2 min-h-[3rem] drop-shadow-sm"
                        style={{ fontFamily: "'Mehr Nastaliq Web', 'Amiri', serif", direction: 'rtl' }}
                    >
                        {course.description}
                    </p>
                </div>
            </CardHeader>

            <CardContent className="flex-1 px-7 pt-2 relative z-10">
                {/* Details Grid - 2 columns with glass/pill style */}
                <div className="grid grid-cols-2 gap-3">
                    {[
                        { val: course.duration, icon: Clock, col: "text-amber-600", bg: "bg-amber-50" },
                        { val: course.mode, icon: Wifi, col: "text-emerald-600", bg: "bg-emerald-50" },
                        { val: course.eligibility, icon: User, col: "text-blue-600", bg: "bg-blue-50" },
                        { val: course.teachers || "Separate", icon: Users, col: "text-purple-600", bg: "bg-purple-50" }
                    ].map((item, idx) => (
                        <div key={idx} className={`flex items-center justify-end gap-2 p-2.5 rounded-xl ${item.bg} border border-transparent hover:border-white/50 hover:shadow-sm transition-all group/item`}>
                            <span className="text-[11px] sm:text-xs font-bold text-muted-foreground/80 text-right line-clamp-1" style={{ fontFamily: "'Mehr Nastaliq Web', 'Amiri', serif", direction: 'rtl' }}>
                                {item.val}
                            </span>
                            <div className={`p-1.5 rounded-lg bg-white shadow-sm ${item.col} group-hover/item:scale-110 transition-transform shrink-0`}>
                                <item.icon className="w-3.5 h-3.5" />
                            </div>
                        </div>
                    ))}

                    {/* Gender Full Width */}
                    {course.gender && (
                        <div className="col-span-2 mt-1">
                            <div className="flex items-center justify-center gap-2 py-1.5 px-4 bg-rose-50/50 border border-rose-100 rounded-full">
                                <span className="text-[10px] font-bold text-rose-600 uppercase tracking-widest">{course.gender}</span>
                            </div>
                        </div>
                    )}
                </div>
            </CardContent>

            <CardFooter className="pt-2 pb-8 flex gap-3 px-7">
                {/* Desktop Dialog - Hidden on mobile */}
                <div className="hidden md:flex flex-1">
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button
                                variant="default"
                                className="w-full flex gap-2 items-center bg-primary hover:bg-primary/90 text-white border-none shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 rounded-xl py-6"
                                style={{ fontFamily: "'Mehr Nastaliq Web', 'Amiri', serif" }}
                            >
                                <Eye className="w-4 h-4" />
                                تفصیل دیکھیں
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-[95vw] md:max-w-4xl lg:max-w-5xl max-h-[90vh] p-0 overflow-hidden bg-background border-none shadow-2xl">
                            <DialogTitle className="sr-only">{course.name} - Course Details</DialogTitle>
                            <DialogDescription className="sr-only">
                                Comprehensive details about the {course.name} course including duration, eligibility, and mode of study.
                            </DialogDescription>
                            <div className="flex flex-col md:flex-row h-full max-h-[90vh] overflow-hidden">
                                {/* Image Section - Fixed height, always visible */}
                                <div className="relative md:w-2/5 lg:w-1/2 bg-muted/20 flex items-center justify-center p-4 md:p-6 shrink-0">
                                    <div className="relative w-full max-h-[40vh] md:max-h-[80vh] aspect-[3/4] md:aspect-auto md:h-full border-4 border-white shadow-xl rounded-lg overflow-hidden bg-white">
                                        <img
                                            src={courseImage}
                                            alt={`${course.name} Course Details`}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                </div>

                                {/* Text Content - Scrollable */}
                                <div className="flex-1 p-6 md:p-8 lg:p-10 space-y-6 overflow-y-auto">
                                    <ModalContent />
                                </div>
                            </div>
                            {/* Fixed Close Button */}
                            <DialogClose className="absolute top-3 right-3 z-50 p-2 rounded-full bg-background/80 backdrop-blur-sm shadow-md hover:bg-background transition-all">
                                <X className="w-5 h-5 text-muted-foreground" />
                            </DialogClose>
                        </DialogContent>
                    </Dialog>
                </div>

                {/* Mobile Sheet - Hidden on desktop */}
                <div className="flex md:hidden flex-1">
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button
                                variant="default"
                                className="w-full flex gap-2 items-center bg-primary hover:bg-primary/90 text-white border-none shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 rounded-xl py-6"
                                style={{ fontFamily: "'Mehr Nastaliq Web', 'Amiri', serif" }}
                            >
                                <Eye className="w-4 h-4" />
                                تفصیل دیکھیں
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="bottom" className="h-[95dvh] rounded-t-3xl p-0 flex flex-col overflow-hidden">
                            {/* Sticky Header */}
                            <div className="sticky top-0 z-10 flex items-center justify-between p-4 bg-background/95 backdrop-blur-md border-b shadow-sm">
                                <SheetClose asChild>
                                    <Button variant="ghost" size="icon" className="rounded-full">
                                        <ArrowLeft className="w-5 h-5" />
                                    </Button>
                                </SheetClose>
                                <SheetTitle className="text-lg font-bold text-primary truncate px-4 flex-1 text-center" style={{ fontFamily: "'Mehr Nastaliq Web', 'Amiri', serif" }}>
                                    {course.name}
                                </SheetTitle>
                                <SheetDescription className="sr-only">
                                    Details for {course.name} course.
                                </SheetDescription>
                                <SheetClose asChild>
                                    <Button variant="ghost" size="icon" className="rounded-full">
                                        <X className="w-5 h-5" />
                                    </Button>
                                </SheetClose>
                            </div>

                            {/* Scrollable Content */}
                            <div className="flex-1 overflow-y-auto p-6 space-y-6">
                                {/* Full Image */}
                                <div className="relative w-full aspect-[3/4] border-4 border-white shadow-xl rounded-lg overflow-hidden bg-white">
                                    <img
                                        src={courseImage}
                                        alt={`${course.name} Course Full Poster`}
                                        className="w-full h-full object-contain"
                                    />
                                </div>

                                {/* Course Details */}
                                <ModalContent isMobile />
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>

                <Button
                    variant="default"
                    className="flex-[1.5] flex gap-2 items-center bg-secondary hover:bg-secondary/90 text-white border-none shadow-xl shadow-secondary/20 hover:shadow-secondary/40 transition-all duration-300 hover:scale-[1.02] rounded-xl py-6"
                    asChild
                >
                    <a
                        href={getWhatsAppLink(course.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                    >
                        < Phone className="w-4 h-4" />
                        <span style={{ fontFamily: "'Mehr Nastaliq Web', 'Amiri', serif" }}>داخلہ لیں</span>
                    </a>
                </Button>
            </CardFooter>
        </Card>
    );
}

