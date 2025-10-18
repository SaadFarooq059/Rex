import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedMarqueeHero } from "@/components/ui/hero-3"
import { RexBiotechFeatures } from "@/components/ui/rex-biotech-features"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { TestimonialSection } from "@/components/ui/testimonials"
import { FeatureSteps } from "@/components/ui/feature-steps"
import { PostcardCTA } from "@/components/ui/postcard-cta"

export default function HomePage() {
  const heroImages = [
    "/pharmaceutical-laboratory-scientist.jpg",
    "/medical-pills-and-capsules.jpg",
    "/pharmacy-medicine-bottles.png",
    "/pharmaceutical-manufacturing.png",
    "/medical-research-lab.png",
    "/pharmaceutical-quality-control.jpg",
    "/medicine-packaging-production.jpg",
    "/pharmaceutical-warehouse-storage.jpg",
  ]

  const serviceFeatures = [
    {
      step: "Service 1",
      title: "Product Supply",
      content:
        "Wide range of pharmaceutical products from trusted WHO-GMP certified manufacturers ensuring quality and compliance",
      image: "/pharmacy-medicine-bottles.png",
    },
    {
      step: "Service 2",
      title: "Quality Assurance",
      content:
        "Rigorous quality control and compliance with international standards. Every product undergoes strict testing and verification",
      image: "/pharmaceutical-quality-control.jpg",
    },
    {
      step: "Service 3",
      title: "Fast Delivery",
      content:
        "Efficient logistics ensuring timely delivery across Pakistan. Express options available for urgent requirements",
      image: "/pharmaceutical-warehouse-storage.jpg",
    },
    {
      step: "Service 4",
      title: "24/7 Support",
      content:
        "Dedicated customer support team available round the clock to assist with orders, queries, and emergency requirements",
      image: "/pharmaceutical-laboratory-scientist.jpg",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <AnimatedMarqueeHero
          tagline="Trusted by Healthcare Providers Across Pakistan"
          title={
            <>
              Quality Pharmaceuticals
              <br />
              Delivered with Excellence
            </>
          }
          description="Rex Biotech is your reliable partner for pharmaceutical supply solutions. We ensure quality, compliance, and timely delivery of medical products across Pakistan."
          ctaText="Get Started"
          images={heroImages}
        />

        <RexBiotechFeatures />

        <section className="py-20 bg-background">
          <FeatureSteps features={serviceFeatures} title="Our Services" autoPlayInterval={4000} />
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-foreground text-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-background/80">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-background/80">Products</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">1000+</div>
                <div className="text-sm text-background/80">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-background/80">Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <TestimonialSection
          title="What Our Clients Say"
          subtitle="Trusted by healthcare providers and medical institutions across Pakistan"
          testimonials={[
            {
              id: 1,
              quote:
                "Rex Biotech has been our trusted pharmaceutical supplier for over 5 years. Their commitment to quality and timely delivery is unmatched. Every product meets the highest standards.",
              name: "Dr. Ahmed Khan",
              role: "Medical Director, City Hospital",
              imageSrc: "/professional-pakistani-doctor-in-hospital.jpg",
            },
            {
              id: 2,
              quote:
                "Excellent service and genuine products. Rex Biotech has helped us maintain our pharmacy's reputation for quality. Their team is always responsive and helpful.",
              name: "Fatima Malik",
              role: "Owner, HealthCare Pharmacy",
              imageSrc: "/female-pharmacist-in-modern-pharmacy.jpg",
            },
            {
              id: 3,
              quote:
                "Professional team, competitive prices, and reliable delivery. Rex Biotech is our go-to pharmaceutical supplier. They understand our urgent needs and always deliver on time.",
              name: "Muhammad Asif",
              role: "Procurement Manager, Medical Center",
              imageSrc: "/medical-procurement-manager-in-office.jpg",
            },
          ]}
        />

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Find answers to common questions about our services
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What types of pharmaceutical products do you supply?</AccordionTrigger>
                  <AccordionContent>
                    We supply a comprehensive range of pharmaceutical products including prescription medications,
                    over-the-counter drugs, medical equipment, surgical supplies, and healthcare consumables from
                    certified manufacturers.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>How do you ensure product quality?</AccordionTrigger>
                  <AccordionContent>
                    All our products undergo rigorous quality control checks and come from WHO-GMP certified
                    manufacturers. We maintain proper storage conditions and follow strict quality assurance protocols
                    throughout the supply chain.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>What are your delivery timelines?</AccordionTrigger>
                  <AccordionContent>
                    We offer fast delivery across Pakistan. Standard delivery takes 2-3 business days for major cities
                    and 4-5 business days for remote areas. Express delivery options are also available for urgent
                    requirements.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Do you provide bulk order discounts?</AccordionTrigger>
                  <AccordionContent>
                    Yes, we offer competitive pricing for bulk orders. Contact our sales team with your requirements,
                    and we'll provide you with a customized quote based on order volume and frequency.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>How can I place an order?</AccordionTrigger>
                  <AccordionContent>
                    You can place orders through our website, email us at zeeshan@rexbiotech.net, or call our customer
                    service team. We also accept orders via WhatsApp for your convenience.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Postcard CTA Section */}
        <PostcardCTA
          postcardImage="/pharmaceutical-laboratory-scientist.jpg"
          postcardAlt="Rex Biotech Pharmaceutical Excellence"
          curvedTextTop="Rex Biotech"
          curvedTextBottom="Pharmaceutical Excellence"
          heading="Ready to Experience Quality Pharmaceutical Supply?"
          subtext="Join hundreds of healthcare providers who trust Rex Biotech for reliable, quality pharmaceutical products."
          buttonLabel="Get Started Today"
          buttonHref="/contact"
        />
      </main>

      <Footer />
    </div>
  )
}
