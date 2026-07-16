import Link from "next/link";
import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Users, TrendingUp, ShieldCheck, ArrowRight, GraduationCap, Building, Network } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Graphic */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary to-slate-900 z-10 mix-blend-multiply opacity-80" />
          <Image 
            src="/images/home-hero.jpg" 
            alt="Smart Institutional Network" 
            fill 
            className="object-cover object-center"
            priority
          />
        </div>
        
        {/* Decorative Gradients */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-amber-500/20 rounded-full blur-[120px] z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-primary/40 rounded-full blur-[100px] z-10 pointer-events-none" />

        <div className="container mx-auto px-4 text-center relative z-20">
          <FadeIn>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md px-4 py-1.5 text-sm font-medium text-amber-300 mb-6 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              Building the Future of African Institutions
            </div>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight drop-shadow-lg">
              SmartBridge Apex Solutions for <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">African Institutions</span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed">
              Empowering schools and estates with intelligent, cloud-based management solutions to simplify operations, automate collections, and enhance communication.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="#products" className={cn(buttonVariants({ size: "lg" }), "bg-amber-500 text-amber-950 hover:bg-amber-400 border-none shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all hover:scale-105")}>
                Explore Our Products <ArrowRight className="ml-2 size-5" />
              </Link>
              <Link href="/contact" className={cn(buttonVariants({ size: "lg", variant: "outline" }), "bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-md transition-all hover:scale-105")}>
                Book a Demo
              </Link>
            </div>
          </FadeIn>
        </div>
        
        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent z-20" />
      </section>

      {/* Products */}
      <section id="products" className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold tracking-tight mb-4">Our Core Products</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Tailor-made software solutions designed specifically for the unique operational challenges of modern African institutions.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {/* SchoolFee */}
            <StaggerItem>
              <Card className="flex flex-col h-full border-border/50 shadow-lg hover:shadow-xl hover:border-primary/50 transition-all duration-300 group overflow-hidden bg-card/50 backdrop-blur-sm">
                <div className="h-2 w-full bg-gradient-to-r from-primary to-teal-400" />
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <GraduationCap size={28} />
                  </div>
                  <CardTitle className="text-2xl">EduSuite</CardTitle>
                  <CardDescription className="text-base">Complete School Management System</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-6">
                    Manage fees, track student results, monitor attendance, and communicate with parents seamlessly. The all-in-one portal for modern schools.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3"><ShieldCheck className="text-primary size-5" /> <span>Automated Fee Collections</span></li>
                    <li className="flex items-center gap-3"><ShieldCheck className="text-primary size-5" /> <span>Result Computation Engine</span></li>
                    <li className="flex items-center gap-3"><ShieldCheck className="text-primary size-5" /> <span>Parent & Guardian Portal</span></li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/products/schoolfee" className={cn(buttonVariants({ variant: "default" }), "w-full group-hover:bg-primary/90")}>
                    Learn More <ArrowRight className="ml-2 size-4" />
                  </Link>
                </CardFooter>
              </Card>
            </StaggerItem>

            {/* EMIS */}
            <StaggerItem>
              <Card className="flex flex-col h-full border-border/50 shadow-lg hover:shadow-xl hover:border-teal-500/50 transition-all duration-300 group overflow-hidden bg-card/50 backdrop-blur-sm relative">
                <div className="absolute top-6 right-6 inline-flex items-center rounded-full bg-teal-100 dark:bg-teal-900/30 px-3 py-1 text-xs font-semibold text-teal-800 dark:text-teal-400 border border-teal-200 dark:border-teal-800/50">
                  Enterprise
                </div>
                <div className="h-2 w-full bg-gradient-to-r from-teal-400 to-primary" />
                <CardHeader>
                  <div className="w-12 h-12 bg-teal-500/10 text-teal-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Network size={28} />
                  </div>
                  <CardTitle className="text-2xl">EMIS</CardTitle>
                  <CardDescription className="text-base">Education Management Info System</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-6">
                    A macro-level dashboard for ministries and large networks. Aggregate data, track policy impact, and allocate resources efficiently.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3"><ShieldCheck className="text-teal-500 size-5" /> <span>State-wide Aggregation</span></li>
                    <li className="flex items-center gap-3"><ShieldCheck className="text-teal-500 size-5" /> <span>Policy Analytics</span></li>
                    <li className="flex items-center gap-3"><ShieldCheck className="text-teal-500 size-5" /> <span>Resource Allocation</span></li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/products/emis" className={cn(buttonVariants({ variant: "outline" }), "w-full border-teal-500/20 text-teal-600 hover:bg-teal-50 dark:hover:bg-teal-950/30")}>
                    Learn More <ArrowRight className="ml-2 size-4" />
                  </Link>
                </CardFooter>
              </Card>
            </StaggerItem>

            {/* EstateCare */}
            <StaggerItem>
              <Card className="flex flex-col h-full border-border/50 shadow-lg hover:shadow-xl hover:border-amber-500/50 transition-all duration-300 group overflow-hidden bg-card/50 backdrop-blur-sm relative">
                <div className="absolute top-6 right-6 inline-flex items-center rounded-full bg-amber-100 dark:bg-amber-900/30 px-3 py-1 text-xs font-semibold text-amber-800 dark:text-amber-400 border border-amber-200 dark:border-amber-800/50">
                  Coming Q1 2027
                </div>
                <div className="h-2 w-full bg-gradient-to-r from-amber-400 to-amber-600" />
                <CardHeader>
                  <div className="w-12 h-12 bg-amber-500/10 text-amber-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Building size={28} />
                  </div>
                  <CardTitle className="text-2xl">EstateCare</CardTitle>
                  <CardDescription className="text-base">Smart Estate Management</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-6">
                    Streamline residential estate operations. Automate service charges, manage maintenance requests, and secure visitor access easily.
                  </p>
                  <ul className="space-y-3 opacity-70">
                    <li className="flex items-center gap-3"><ShieldCheck className="text-amber-500 size-5" /> <span>Service Charge Billing</span></li>
                    <li className="flex items-center gap-3"><ShieldCheck className="text-amber-500 size-5" /> <span>Visitor Management System</span></li>
                    <li className="flex items-center gap-3"><ShieldCheck className="text-amber-500 size-5" /> <span>Resident Communication</span></li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/products/estatecare" className={cn(buttonVariants({ variant: "secondary" }), "w-full bg-amber-50 dark:bg-amber-950/20 text-amber-900 dark:text-amber-400 hover:bg-amber-100 dark:hover:bg-amber-900/40")}>
                    Join Waitlist <ArrowRight className="ml-2 size-4" />
                  </Link>
                </CardFooter>
              </Card>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 relative overflow-hidden bg-slate-950 text-white">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <StaggerItem>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <div className="text-5xl font-bold text-amber-400 mb-2">50+</div>
                <div className="text-slate-300 font-medium">Schools Onboarded</div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <div className="text-5xl font-bold text-teal-400 mb-2">10k+</div>
                <div className="text-slate-300 font-medium">Active Students</div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <div className="text-5xl font-bold text-amber-400 mb-2">₦500M+</div>
                <div className="text-slate-300 font-medium">Fees Processed</div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <div className="text-5xl font-bold text-teal-400 mb-2">99.9%</div>
                <div className="text-slate-300 font-medium">System Uptime</div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-4 max-w-6xl">
          <FadeIn>
            <h2 className="text-4xl font-bold text-center tracking-tight mb-16">Why Choose SmartBridge?</h2>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            <StaggerItem>
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                  <Building2 size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Built for Africa</h3>
                <p className="text-muted-foreground">
                  Designed to work perfectly in low-bandwidth environments with offline capabilities and mobile-first architecture.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto bg-amber-500/10 rounded-full flex items-center justify-center mb-6 text-amber-600">
                  <ShieldCheck size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Enterprise Security</h3>
                <p className="text-muted-foreground">
                  Bank-grade encryption, automated daily backups, and strict data privacy compliance to protect your institution.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto bg-teal-500/10 rounded-full flex items-center justify-center mb-6 text-teal-600">
                  <Users size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Dedicated Support</h3>
                <p className="text-muted-foreground">
                  Our local success team is always available via phone, WhatsApp, or email to ensure you get the most out of our platforms.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10" />
        <div className="container mx-auto px-4 max-w-3xl relative z-10">
          <FadeIn>
            <h2 className="text-4xl font-bold tracking-tight mb-6">Ready to Digitize Your Operations?</h2>
            <p className="text-xl text-muted-foreground mb-10">
              Join dozens of forward-thinking institutions using Smartek Innovations to streamline their operations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className={cn(buttonVariants({ size: "lg", variant: "default" }), "shadow-lg hover:shadow-primary/25 transition-all hover:-translate-y-1")}>
                Book a Free Demo
              </Link>
              <a href="tel:+2348001234567" className={cn(buttonVariants({ size: "lg", variant: "outline" }), "bg-background transition-all hover:-translate-y-1")}>
                Call: +234 800 123 4567
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
