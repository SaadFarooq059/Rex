"use client"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function ServicesHero() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      {/* Subtle yellow background gradient overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-transparent opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-bl from-primary/15 via-transparent to-transparent opacity-50" />
      </div>

      {/* Main Content */}
      <main className="main min-h-screen pt-[200px] md:pt-[300px] pb-20 relative">
        {/* Hero Image Background */}
        <div
          className="hero-image absolute -top-[20%] left-0 w-full h-[120%] object-cover z-0 bg-muted"
          style={{
            backgroundImage: "url(/pharmaceutical-manufacturing.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.15,
          }}
        />

        <div className="content-wrapper max-w-[1400px] mx-auto px-6 md:px-[60px] flex flex-col md:flex-row justify-between items-end gap-12 relative z-[2]">
          {/* Left Content */}
          <div className="max-w-[800px]">
            <h1 className="text-5xl md:text-[80px] font-light leading-[1.1] mb-8 tracking-[-2px]">
              Comprehensive
              <br />
              Pharmaceutical Solutions
            </h1>
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground mb-12 font-normal">
              Trusted by healthcare providers across Pakistan, we deliver quality
              <br className="hidden md:block" />
              pharmaceutical products and services with excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/contact" className="flex items-center gap-2.5">
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <Link href="/about">Learn more</Link>
              </Button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="flex gap-12 md:gap-20 items-end">
            <div className="text-center">
              <div className="text-5xl md:text-[64px] font-light leading-none mb-3 text-primary">15+</div>
              <div className="text-sm md:text-base text-muted-foreground font-normal">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-[64px] font-light leading-none mb-3 text-primary">500+</div>
              <div className="text-sm md:text-base text-muted-foreground font-normal">Healthcare Partners</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
