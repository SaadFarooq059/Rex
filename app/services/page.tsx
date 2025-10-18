import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Package, ShieldCheck, Truck, FileCheck, Pill, Microscope, ClipboardList, HeartPulse } from "lucide-react"
import Link from "next/link"
import { ServicesHero } from "@/components/ui/services-hero"

export default function ServicesPage() {
  const services = [
    {
      icon: Package,
      title: "Pharmaceutical Supply",
      description:
        "Comprehensive supply of high-quality pharmaceutical products including medicines, vaccines, and medical supplies from trusted manufacturers.",
    },
    {
      icon: ShieldCheck,
      title: "Quality Assurance",
      description:
        "Rigorous quality control processes ensuring all products meet international standards and regulatory requirements for safety and efficacy.",
    },
    {
      icon: Truck,
      title: "Logistics & Distribution",
      description:
        "Efficient cold chain management and distribution network ensuring timely delivery while maintaining product integrity across Pakistan.",
    },
    {
      icon: FileCheck,
      title: "Regulatory Compliance",
      description:
        "Complete documentation and compliance support for all regulatory requirements, licensing, and pharmaceutical standards.",
    },
    {
      icon: Pill,
      title: "Generic Medicines",
      description:
        "Wide range of affordable generic pharmaceutical products maintaining the same quality standards as branded alternatives.",
    },
    {
      icon: Microscope,
      title: "Research Products",
      description:
        "Specialized pharmaceutical ingredients and research-grade materials for laboratories and research institutions.",
    },
    {
      icon: ClipboardList,
      title: "Inventory Management",
      description:
        "Advanced inventory tracking and management systems ensuring optimal stock levels and product availability.",
    },
    {
      icon: HeartPulse,
      title: "Healthcare Consultation",
      description:
        "Expert consultation services for healthcare providers on product selection, usage guidelines, and best practices.",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <ServicesHero />

        {/* Services Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <Card key={index} className="border-2 hover:border-primary transition-all hover:shadow-lg">
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A streamlined approach to ensure quality and efficiency in every step
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-xl">
                  1
                </div>
                <h3 className="font-semibold mb-2">Consultation</h3>
                <p className="text-sm text-muted-foreground">
                  Understanding your specific pharmaceutical needs and requirements
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-xl">
                  2
                </div>
                <h3 className="font-semibold mb-2">Sourcing</h3>
                <p className="text-sm text-muted-foreground">Procuring quality products from certified manufacturers</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-xl">
                  3
                </div>
                <h3 className="font-semibold mb-2">Quality Check</h3>
                <p className="text-sm text-muted-foreground">Rigorous testing and verification of all products</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-xl">
                  4
                </div>
                <h3 className="font-semibold mb-2">Delivery</h3>
                <p className="text-sm text-muted-foreground">Safe and timely delivery to your location</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-foreground text-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Our Services?</h2>
            <p className="text-background/80 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss how we can support your pharmaceutical supply needs.
            </p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
