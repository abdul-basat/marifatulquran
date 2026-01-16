import { Link } from "wouter";
import { Facebook, MessageCircle, Youtube, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-heading text-2xl font-bold text-secondary">Marifat Ul Quran</h3>
            <p className="text-sm opacity-90 leading-relaxed">
              Illuminating hearts with the eternal light of Islamic wisdom. Dedicated to nurturing souls with the Quran's timeless guidance and the Prophet's (PBUH) Sunnah.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://www.facebook.com/profile.php?id=61560569426109" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="https://wa.me/923181955634" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors"><MessageCircle className="h-5 w-5" /></a>
              <a href="https://www.youtube.com/@MadinaMunawra-m7s" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors"><Youtube className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-bold text-secondary">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about"><span className="hover:text-secondary cursor-pointer">About Us</span></Link></li>
              <li><Link href="/courses"><span className="hover:text-secondary cursor-pointer">Our Courses</span></Link></li>
              <li><Link href="/admissions"><span className="hover:text-secondary cursor-pointer">Admissions</span></Link></li>
              <li><Link href="/results"><span className="hover:text-secondary cursor-pointer">Results</span></Link></li>
              <li><Link href="/contact"><span className="hover:text-secondary cursor-pointer">Contact Support</span></Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-bold text-secondary">Our Programs</h4>
            <ul className="space-y-2 text-sm">
              <li>Dars-e-Nizami (Alim/Alimah)</li>
              <li>Hifz-ul-Quran</li>
              <li>Tarjama o Tafseer</li>
              <li>Nazira Quran</li>
              <li>Online Islamic Courses</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-bold text-secondary">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary shrink-0" />
                <span>Global Online Academy</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-secondary shrink-0" />
                <span>+92 318 1955634</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-secondary shrink-0" />
                <span>info@maarifatulquran.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-sm opacity-80">
          <p>© {new Date().getFullYear()} Marifat Ul Quran. All rights reserved.</p>
          <p className="mt-2">
            Designed & Developed by{" "}
            <a
              href="https://wa.me/+923347232542?text=Salam,%20I%20neeed%20your%20website%20design%20services%20please."
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary font-bold hover:underline transition-all"
            >
              Abdul Basit
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
