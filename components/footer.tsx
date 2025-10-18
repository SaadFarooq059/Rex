import Link from "next/link"
import { Mail, MapPin } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/rex-biotech-logo.png" alt="Rex Biotech" width={120} height={40} className="h-10 w-auto" />
            </Link>
            <p className="text-sm text-background/80">
              Your trusted pharmaceutical supplier in Pakistan, delivering quality healthcare solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-background/80 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-background/80 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-background/80 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-background/80 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-sm text-background/80">Pharmaceutical Supply</li>
              <li className="text-sm text-background/80">Quality Assurance</li>
              <li className="text-sm text-background/80">Logistics & Distribution</li>
              <li className="text-sm text-background/80">Regulatory Compliance</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-background/80">
                  111- Samnabad G.T Road
                  <br />
                  Gujranwala, Pakistan
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:zeeshan@rexbiotech.net"
                  className="text-sm text-background/80 hover:text-primary transition-colors"
                >
                  zeeshan@rexbiotech.net
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-sm text-background/60">© {new Date().getFullYear()} Rex Biotech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
