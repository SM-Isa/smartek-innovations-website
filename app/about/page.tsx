import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import { Target, Eye, MapPin, Mail, Phone } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="bg-primary/5 py-24 text-center relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-500">SmartBridge Apex Solutions Ltd</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              We are a Nigerian technology company building smart management solutions for African institutions. Our mission is to digitize operations for schools, estates, and beyond — making them more efficient, transparent, and connected.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <StaggerContainer className="grid md:grid-cols-2 gap-12">
            <StaggerItem>
              <div className="bg-card border-border/50 rounded-2xl p-10 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full pointer-events-none" />
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
                  <Target size={32} />
                </div>
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To empower African institutions with affordable, easy-to-use technology that transforms how they operate on a daily basis.
                </p>
              </div>
            </StaggerItem>
            
            <StaggerItem>
              <div className="bg-card border-border/50 rounded-2xl p-10 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-bl-full pointer-events-none" />
                <div className="w-16 h-16 bg-amber-500/10 text-amber-600 rounded-2xl flex items-center justify-center mb-6">
                  <Eye size={32} />
                </div>
                <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To be the leading provider of institutional management software across Africa by 2030, connecting millions of users.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Office */}
      <section className="py-24 border-t border-border/50 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <FadeIn>
            <div className="w-16 h-16 mx-auto bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
              <MapPin size={32} />
            </div>
            <h2 className="text-3xl font-bold mb-8">Our Headquarters</h2>
            <div className="text-lg text-muted-foreground space-y-2 mb-10">
              <p className="font-semibold text-foreground text-xl">SmartBridge Apex Solutions Ltd</p>
              <p>5/6 Oke Ero Road Opposite Eid Road</p>
              <p>Mandate 3 Estate Ilorin, Kwara  State</p>
              <p>Nigeria</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <a href="mailto:hello@workwithsmartbridge.com" className="flex items-center gap-3 text-primary hover:text-primary/80 transition-colors font-medium">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail size={20} />
                </div>
                hello@workwithsmartbridge.com
              </a>
              <a href="tel:+2348068569991" className="flex items-center gap-3 text-primary hover:text-primary/80 transition-colors font-medium">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone size={20} />
                </div>
                +2348068569991
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
