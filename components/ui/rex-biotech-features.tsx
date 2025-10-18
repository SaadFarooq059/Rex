"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import { Shield, Truck, Award, Users, Clock, Package } from "lucide-react"

// Reusable BentoItem component
const BentoItem = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  const itemRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const item = itemRef.current
    if (!item) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = item.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      item.style.setProperty("--mouse-x", `${x}px`)
      item.style.setProperty("--mouse-y", `${y}px`)
    }

    item.addEventListener("mousemove", handleMouseMove)

    return () => {
      item.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div ref={itemRef} className={`bento-item ${className || ""}`}>
      {children}
    </div>
  )
}

// Main Component
export const RexBiotechFeatures = () => {
  return (
    <div className="main-container">
      <div className="w-full max-w-6xl z-10">
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground text-center mb-8">Why Choose Rex Biotech?</h1>
        <div className="bento-grid">
          <BentoItem className="col-span-2 row-span-2 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Quality Assurance</h2>
              <p className="mt-2 text-muted-foreground">
                All pharmaceutical products meet international quality standards and regulatory compliance. We ensure
                every product is certified and safe.
              </p>
            </div>
            <div className="mt-4 h-48 bg-primary/5 rounded-lg flex items-center justify-center border border-primary/20">
              <div className="text-center p-6">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Certified Products</div>
              </div>
            </div>
          </BentoItem>
          <BentoItem>
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
              <Truck className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-xl font-bold text-foreground">Fast Delivery</h2>
            <p className="mt-2 text-muted-foreground text-sm">
              Efficient logistics network ensuring timely delivery across Pakistan.
            </p>
          </BentoItem>
          <BentoItem>
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-xl font-bold text-foreground">Certified Excellence</h2>
            <p className="mt-2 text-muted-foreground text-sm">
              Licensed pharmaceutical supplier with proven track record.
            </p>
          </BentoItem>
          <BentoItem className="row-span-2">
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-xl font-bold text-foreground">Expert Support</h2>
            <p className="mt-2 text-muted-foreground text-sm">
              Dedicated team providing professional guidance and customer support 24/7.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm text-muted-foreground">Technical Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm text-muted-foreground">Product Guidance</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm text-muted-foreground">After-Sales Service</span>
              </div>
            </div>
          </BentoItem>
          <BentoItem className="col-span-2">
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
              <Package className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-xl font-bold text-foreground">Wide Product Range</h2>
            <p className="mt-2 text-muted-foreground text-sm">
              Comprehensive inventory of pharmaceutical products from leading manufacturers. Over 500+ products
              available.
            </p>
          </BentoItem>
          <BentoItem>
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-xl font-bold text-foreground">15+ Years</h2>
            <p className="mt-2 text-muted-foreground text-sm">Trusted experience in pharmaceutical supply industry.</p>
          </BentoItem>
        </div>
      </div>

      <style jsx>{`
                .main-container {
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 2rem 1rem;
                    background: hsl(var(--background));
                }

                .bento-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 1rem;
                    width: 100%;
                }

                @media (max-width: 768px) {
                    .bento-grid {
                        grid-template-columns: 1fr;
                    }
                    .col-span-2 {
                        grid-column: span 1 !important;
                    }
                    .row-span-2 {
                        grid-row: span 1 !important;
                    }
                }

                .bento-item {
                    background: hsl(var(--card));
                    border: 1px solid hsl(var(--border));
                    border-radius: 1rem;
                    padding: 1.5rem;
                    position: relative;
                    overflow: hidden;
                    transition: all 0.3s ease;
                }

                .bento-item::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    border-radius: 1rem;
                    padding: 2px;
                    background: radial-gradient(
                        600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
                        hsl(var(--primary) / 0.3),
                        transparent 40%
                    );
                    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                    -webkit-mask-composite: xor;
                    mask-composite: exclude;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                    pointer-events: none;
                }

                .bento-item:hover::before {
                    opacity: 1;
                }

                .bento-item:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 10px 30px -10px hsl(var(--primary) / 0.3);
                }

                .col-span-2 {
                    grid-column: span 2;
                }

                .row-span-2 {
                    grid-row: span 2;
                }
            `}</style>
    </div>
  )
}
