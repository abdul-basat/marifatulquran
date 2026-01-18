import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, BookOpen, GraduationCap, Phone, Info, Facebook, MessageCircle, Youtube, Instagram, FileText, Images } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetDescription, SheetFooter } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export default function Header() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Courses", href: "/courses", icon: GraduationCap },
    { name: "Admissions", href: "/admissions", icon: BookOpen },
    { name: "Gallery", href: "/gallery", icon: Images },
    { name: "Results", href: "/results", icon: FileText },
    { name: "About", href: "/about", icon: Info },
    { name: "Contact", href: "/contact", icon: Phone },
  ];

  const isLandingPage = location === "/";

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <img src="/images/logo/logo.webp" alt="Marifat Ul Quran Logo" className="h-12 w-12 object-contain" />
          <div className="flex flex-col">
            <span className="font-heading text-2xl font-bold leading-none text-primary">Marifat Ul Quran</span>
            <span className="text-xs font-medium text-muted-foreground tracking-widest uppercase">Islamic Online Academy</span>
          </div>
        </Link>

        {/* Desktop Nav - Show on all pages EXCEPT landing page */}
        {!isLandingPage && (
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <span className={cn(
                  "text-sm font-medium transition-colors hover:text-primary cursor-pointer",
                  location === item.href ? "text-primary font-bold border-b-2 border-secondary" : "text-muted-foreground"
                )}>
                  {item.name}
                </span>
              </Link>
            ))}
          </nav>
        )}

        {/* Apply Now Button - Show on all pages (Desktop) */}
        <div className="hidden md:block">
          <Link href="/admissions">
            <Button className="font-bold shadow-sm" size="lg">
              Apply Now
            </Button>
          </Link>
        </div>

        {/* Mobile Nav */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6 text-primary" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] flex flex-col bg-background/95 backdrop-blur-sm border-l-primary/20">
            <SheetHeader className="text-left mb-6">
              <div className="flex items-center gap-3 mb-2">
                <img src="/images/logo/logo.png" alt="Logo" className="h-12 w-12 object-contain" />
                <div className="flex flex-col">
                  <SheetTitle className="font-heading text-xl font-bold text-primary">Marifat Ul Quran</SheetTitle>
                  <SheetDescription className="text-xs">Islamic Online Academy</SheetDescription>
                </div>
              </div>
              <Separator className="bg-secondary/30" />
            </SheetHeader>

            <div className="flex-1 flex flex-col gap-2 overflow-y-auto py-2">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
                  <div className={cn(
                    "flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-200 cursor-pointer group",
                    location === item.href
                      ? "bg-primary/10 text-primary font-bold border-l-4 border-secondary"
                      : "text-muted-foreground hover:bg-muted hover:text-primary"
                  )}>
                    <item.icon className={cn(
                      "h-5 w-5 transition-colors",
                      location === item.href ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                    )} />
                    <span className="text-base">{item.name}</span>
                  </div>
                </Link>
              ))}
            </div>

            <SheetFooter className="mt-auto flex flex-col gap-4 pt-6">
              <Separator className="bg-secondary/30" />
              <div className="flex justify-center gap-6 py-2">
                <a href="https://www.facebook.com/profile.php?id=61560569426109" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Facebook className="h-5 w-5" /></a>
                <a href="https://wa.me/923181955634" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><MessageCircle className="h-5 w-5" /></a>
                <a href="https://www.youtube.com/@MadinaMunawra-m7s" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Youtube className="h-5 w-5" /></a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Instagram className="h-5 w-5" /></a>
              </div>
              <Link href="/admissions" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-secondary text-primary font-bold hover:bg-secondary/90 shadow-sm text-lg py-6">
                  Apply Online
                </Button>
              </Link>
              <p className="text-[10px] text-center text-muted-foreground/60">
                © 2026 Marifat Ul Quran. All rights reserved.
              </p>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
