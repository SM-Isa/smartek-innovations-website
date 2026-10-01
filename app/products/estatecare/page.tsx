import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import { Users, Banknote, Wrench, Shield, BarChart3, Smartphone, ExternalLink, CheckCircle2 } from "lucide-react";

export default function ProptechPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-muted py-4 border-b relative z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-sm text-muted-foreground">
          <Link href="/" className="hover:text-amber-500 transition-colors">Home</Link> {'>'} Products {'>'} <span className="text-foreground font-medium">Proptech</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative pt-24 pb-32 lg:pt-32 lg:pb-40 overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-slate-900/85 mix-blend-multiply z-10" />
          <Image 
            src="/images/estatecare-hero.jpg" 
            alt="Proptech & Smart Rental Architecture" 
            fill 
            className="object-cover object-center opacity-30"
            priority
          />
        </div>

        <div className="container mx-auto px-4 max-w-4xl relative z-20 text-center">
          <FadeIn>
            <div className="inline-block mb-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-amber-500/20 border border-amber-500/50 backdrop-blur-md px-4 py-1.5 text-sm font-semibold text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                </span>
                Test Environment Live
              </span>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight drop-shadow-lg">
              Intelligent Proptech & <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">Rental Management</span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-white/85 mb-10 max-w-2xl mx-auto leading-relaxed">
              Complete property operations for landlords, estate managers, and tenants. Automate rent and service charge collection, manage digital leases, track repairs, and streamline gated community access.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-lg mx-auto">
              <a 
                href="https://test.smarthouserent.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-amber-950 font-bold border-none shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all hover:scale-105 flex items-center justify-center gap-2")}
              >
                Learn More (Test Environment) <ExternalLink size={18} />
              </a>
              <Link 
                href="/contact" 
                className={cn(buttonVariants({ size: "lg", variant: "outline" }), "w-full sm:w-auto bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-md transition-all hover:scale-105 flex items-center justify-center")}
              >
                Book a Demo
              </Link>
            </div>
            
            <p className="mt-4 text-xs text-amber-300/80">
              Live preview available at <a href="https://test.smarthouserent.com" target="_blank" rel="noopener noreferrer" className="underline font-mono">test.smarthouserent.com</a>
            </p>
          </FadeIn>
        </div>
        
        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
      </section>

      {/* Features Grid */}
      <section className="py-24 relative overflow-hidden bg-background">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Core Proptech Solutions</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Purpose-built tools designed to tackle property management bottlenecks and boost rental collection efficiency.
              </p>
            </div>
          </FadeIn>
          
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <StaggerItem>
              <Card className="border-amber-500/20 bg-card/50 backdrop-blur-sm hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-500/5 transition-all">
                <CardHeader>
                  <div className="w-12 h-12 bg-amber-500/10 text-amber-600 rounded-xl flex items-center justify-center mb-4">
                    <Banknote size={24} />
                  </div>
                  <CardTitle>Rent & Service Charge Collection</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground text-sm">
                    <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-amber-500 shrink-0" /> Automated recurring invoices & schedules</li>
                    <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-amber-500 shrink-0" /> Card, bank transfer, and USSD payments</li>
                    <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-amber-500 shrink-0" /> Instant receipts & automated SMS/email reminders</li>
                    <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-amber-500 shrink-0" /> Defaulter tracking & aging analysis</li>
                  </ul>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="border-amber-500/20 bg-card/50 backdrop-blur-sm hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-500/5 transition-all">
                <CardHeader>
                  <div className="w-12 h-12 bg-amber-500/10 text-amber-600 rounded-xl flex items-center justify-center mb-4">
                    <Users size={24} />
                  </div>
                  <CardTitle>Tenant & Lease Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground text-sm">
                    <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-amber-500 shrink-0" /> Digital tenant onboarding & KYC checks</li>
                    <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-amber-500 shrink-0" /> Digital tenancy agreements & e-signatures</li>
                    <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-amber-500 shrink-0" /> Automated lease expiration & renewal notices</li>
                    <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-amber-500 shrink-0" /> Move-in & move-out condition documentation</li>
                  </ul>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="border-amber-500/20 bg-card/50 backdrop-blur-sm hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-500/5 transition-all">
                <CardHeader>
                  <div className="w-12 h-12 bg-amber-500/10 text-amber-600 rounded-xl flex items-center justify-center mb-4">
                    <Wrench size={24} />
                  </div>
                  <CardTitle>Maintenance & Work Orders</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground text-sm">
                    <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-amber-500 shrink-0" /> Tenant issue reporting with photo uploads</li>
                    <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-amber-500 shrink-0" /> Artisan & vendor assignment workflow</li>
                    <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-amber-500 shrink-0" /> Real-time ticket status tracking</li>
                    <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-amber-500 shrink-0" /> Maintenance cost tracking per property unit</li>
                  </ul>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="border-amber-500/20 bg-card/50 backdrop-blur-sm hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-500/5 transition-all">
                <CardHeader>
                  <div className="w-12 h-12 bg-amber-500/10 text-amber-600 rounded-xl flex items-center justify-center mb-4">
                    <Shield size={24} />
                  </div>
                  <CardTitle>Estate Security & Gate Access</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground text-sm">
                    <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-amber-500 shrink-0" /> Digital visitor access passes and OTP codes</li>
                    <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-amber-500 shrink-0" /> Security post check-in validation portal</li>
                    <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-amber-500 shrink-0" /> Emergency alerts and community broadcasts</li>
                    <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-amber-500 shrink-0" /> Gated estate vehicle registry</li>
                  </ul>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="border-amber-500/20 bg-card/50 backdrop-blur-sm hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-500/5 transition-all">
                <CardHeader>
                  <div className="w-12 h-12 bg-amber-500/10 text-amber-600 rounded-xl flex items-center justify-center mb-4">
                    <BarChart3 size={24} />
                  </div>
                  <CardTitle>Landlord & Financial Reports</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground text-sm">
                    <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-amber-500 shrink-0" /> Real-time rental collection rate tracking</li>
                    <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-amber-500 shrink-0" /> Unit occupancy and vacancy duration analysis</li>
                    <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-amber-500 shrink-0" /> Automated landlord payout statements</li>
                    <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-amber-500 shrink-0" /> Income vs. expense ledger export (PDF/Excel)</li>
                  </ul>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="border-amber-500/20 bg-card/50 backdrop-blur-sm hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-500/5 transition-all">
                <CardHeader>
                  <div className="w-12 h-12 bg-amber-500/10 text-amber-600 rounded-xl flex items-center justify-center mb-4">
                    <Smartphone size={24} />
                  </div>
                  <CardTitle>Tenant & Resident Portal</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground text-sm">
                    <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-amber-500 shrink-0" /> Pay rent and service charges on any device</li>
                    <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-amber-500 shrink-0" /> Download formal payment receipts anytime</li>
                    <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-amber-500 shrink-0" /> Direct chat with estate office and management</li>
                    <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-amber-500 shrink-0" /> Community notice board and utility notifications</li>
                  </ul>
                </CardContent>
              </Card>
            </StaggerItem>
          </StaggerContainer>

          {/* Test Environment Banner */}
          <FadeIn delay={0.2} className="mt-16">
            <div className="bg-gradient-to-r from-amber-500/15 via-amber-500/10 to-primary/10 rounded-2xl p-8 border border-amber-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Explore the Test Environment</h3>
                <p className="text-muted-foreground max-w-xl">
                  Try out the live test environment of our smart rental and property management system at <span className="font-semibold text-foreground">test.smarthouserent.com</span>.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <a 
                  href="https://test.smarthouserent.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={cn(buttonVariants({ size: "lg" }), "bg-amber-500 hover:bg-amber-400 text-amber-950 font-bold flex items-center justify-center gap-2")}
                >
                  Visit Test Environment <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
