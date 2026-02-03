import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Award, Users, Phone } from "lucide-react"
import { HelixHero } from "@/components/ui/helix-hero"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <HelixHero
          title="Excellence in Pharmaceutical Supply"
          description="Rex Biotech stands at the forefront of pharmaceutical distribution in Pakistan, delivering quality healthcare solutions with unwavering commitment to integrity, reliability, and innovation."
        />

        {/* Company Story */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Our Story</h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Rex Biotech was established with a clear vision: to become Pakistan's most trusted pharmaceutical
                  supplier by delivering quality products and exceptional service to healthcare providers across the
                  nation.
                </p>
                <p>
                  Based in Gujranwala, we have built a reputation for reliability, integrity, and excellence in the
                  pharmaceutical supply industry. Our commitment to quality and customer satisfaction has made us a
                  preferred partner for hospitals, pharmacies, clinics, and healthcare institutions throughout Pakistan.
                </p>
                <p>
                  With over 15 years of experience, we understand the critical importance of pharmaceutical supply in
                  healthcare delivery. Our team of dedicated professionals works tirelessly to ensure that every product
                  meets the highest standards of quality and safety.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Founder */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Founder</h2>
              <Card className="border-2">
                <CardContent className="pt-8">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="h-12 w-12 text-primary" />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-2xl font-bold mb-2">Amjad Ali</h3>
                      <p className="text-lg text-primary mb-4">Founder & CEO</p>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        With a vision to transform pharmaceutical supply in Pakistan, Amjad Ali founded Rex Biotech
                        to bridge the gap between quality healthcare products and the providers who need them. His
                        commitment to excellence and integrity has been the driving force behind our success.
                      </p>
                      <div className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground">
                        <Phone className="h-4 w-4" />
                        <a href="tel:03045990475" className="hover:text-primary transition-colors">
                          0304-5990475
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To provide reliable, high-quality pharmaceutical products and services that contribute to better
                    healthcare outcomes across Pakistan. We strive to be the bridge between manufacturers and healthcare
                    providers, ensuring accessibility to essential medicines.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To be recognized as Pakistan's leading pharmaceutical supplier, known for our unwavering commitment
                    to quality, innovation, and customer service. We envision a healthcare ecosystem where quality
                    medicines are accessible to all who need them.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Quality</h3>
                  <p className="text-sm text-muted-foreground">Uncompromising standards in every product we supply</p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Integrity</h3>
                  <p className="text-sm text-muted-foreground">Honest and transparent in all our dealings</p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Reliability</h3>
                  <p className="text-sm text-muted-foreground">Consistent delivery on our promises and commitments</p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Excellence</h3>
                  <p className="text-sm text-muted-foreground">Continuous improvement in everything we do</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="py-20 bg-foreground text-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Location</h2>
            <p className="text-background/80 mb-4 text-lg">111- Samnabad G.T Road, Gujranwala, Pakistan</p>
            <p className="text-background/80">
              Strategically located to serve healthcare providers across Pakistan with efficient logistics and
              distribution.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
