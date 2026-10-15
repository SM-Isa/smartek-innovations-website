import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import { 
  Target, 
  Eye, 
  MapPin, 
  Mail, 
  Phone, 
  ShieldCheck, 
  Layers, 
  Cpu, 
  TrendingUp, 
  Sparkles
} from "lucide-react";

export const metadata = {
  title: "About Us | SmartBridge Technology Startup",
  description: "SmartBridge Apex Solutions Ltd is an early-stage B2B SaaS startup building multi-tenant cloud platforms for African schools, estates, and logistics.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="bg-primary/5 py-24 text-center relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <FadeIn>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-xs sm:text-sm font-semibold text-primary mb-6 shadow-sm">
              <Sparkles className="size-4" /> Early-Stage Technology Startup
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-500">SmartBridge</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              SmartBridge Apex Solutions Ltd is an early-stage B2B technology startup building scalable, multi-tenant Software-as-a-Service (SaaS) platforms for African schools, residential estates, and urban logistics networks. We are a pure-play product company—we develop, own, and operate our proprietary cloud codebases.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Startup vs Agency Model Clarification (Direct for Google Cloud Reviewers) */}
      <section className="py-20 border-b border-border/50 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeIn>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 border border-amber-500/30 px-3.5 py-1 text-xs font-semibold text-amber-600 dark:text-amber-400 mb-3">
                <ShieldCheck className="size-4" /> Startup Business Architecture
              </div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">A Product Startup, Not an Agency</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our business model is 100% focused on standardized software products, recurring software subscriptions, and high-margin cloud scalability.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            <StaggerItem>
              <div className="p-8 rounded-2xl bg-card border border-border/60 h-full flex flex-col hover:border-primary/40 transition-all shadow-sm">
                <div className="size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                  <Layers className="size-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">Proprietary Software Products</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We build and operate standardized, multi-tenant SaaS products: <strong>SmartBridgeEdu</strong>, <strong>Proptech (SmartHouseRent)</strong>, and <strong>Dispatch</strong>. We do not offer bespoke consulting or client-for-hire agency services.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="p-8 rounded-2xl bg-card border border-border/60 h-full flex flex-col hover:border-amber-500/40 transition-all shadow-sm">
                <div className="size-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-5">
                  <TrendingUp className="size-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">B2B SaaS Revenue Model</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Monetization is driven by recurring monthly and annual software subscriptions (MRR/ARR) per student or per managed unit, alongside automated transaction processing fees on digital fee and rent collections.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="p-8 rounded-2xl bg-card border border-border/60 h-full flex flex-col hover:border-teal-500/40 transition-all shadow-sm">
                <div className="size-12 rounded-xl bg-teal-500/10 text-teal-600 flex items-center justify-center mb-5">
                  <Cpu className="size-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">Google Cloud Native</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Engineered on Google Cloud (Cloud Run, Cloud SQL, Vertex AI, and Gemini 1.5 Pro). Every client accesses the same scalable, multi-tenant cloud infrastructure with strict tenant data isolation.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4 max-w-5xl">
          <StaggerContainer className="grid md:grid-cols-2 gap-12">
            <StaggerItem>
              <div className="bg-card border-border/50 rounded-2xl p-10 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full pointer-events-none" />
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
                  <Target size={32} />
                </div>
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground text-base leading-relaxed">
                  To eliminate manual bureaucracy and financial opacity in African institutions by building accessible, AI-powered cloud SaaS platforms that automate billing, academic computation, and facility logistics.
                </p>
              </div>
            </StaggerItem>
            
            <StaggerItem>
              <div className="bg-card border-border/50 rounded-2xl p-10 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-bl-full pointer-events-none" />
                <div className="w-16 h-16 bg-amber-500/10 text-amber-600 rounded-2xl flex items-center justify-center mb-6">
                  <Eye size={32} />
                </div>
                <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                <p className="text-muted-foreground text-base leading-relaxed">
                  To become the ubiquitous institutional operating system across Africa by 2030—powering over 50,000 schools, residential communities, and hyperlocal supply chains through scalable cloud software.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Corporate Identity & Office */}
      <section className="py-24 border-t border-border/50 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <FadeIn>
            <div className="w-16 h-16 mx-auto bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
              <MapPin size={32} />
            </div>
            <h2 className="text-3xl font-bold mb-4">Headquarters & Corporate Entity</h2>
            <p className="text-muted-foreground mb-8">
              Registered Nigerian technology company operating under CAC Certificate of Incorporation.
            </p>
            <div className="text-base text-muted-foreground space-y-2 mb-10 p-6 rounded-2xl bg-card border border-border/60 max-w-lg mx-auto shadow-sm">
              <p className="font-bold text-foreground text-lg">SmartBridge Apex Solutions Ltd</p>
              <p>5/6 Oke Ero Road, Opposite Eid Road</p>
              <p>Mandate 3 Estate Ilorin, Kwara State, Nigeria</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="mailto:hello@workwithsmartbridge.com" className="flex items-center gap-3 text-primary hover:text-primary/80 transition-colors font-medium">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail size={18} />
                </div>
                hello@workwithsmartbridge.com
              </a>
              <a href="tel:+2348068569991" className="flex items-center gap-3 text-primary hover:text-primary/80 transition-colors font-medium">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone size={18} />
                </div>
                +234 806 856 9991
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
