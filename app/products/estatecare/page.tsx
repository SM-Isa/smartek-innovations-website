import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import { Users, Banknote, Wrench, Shield, BarChart3, Smartphone } from "lucide-react";

export default function EstateCarePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-muted py-4 border-b relative z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-sm text-muted-foreground">
          <Link href="/" className="hover:text-amber-500 transition-colors">Home</Link> {'>'} Products {'>'} <span className="text-foreground font-medium">EstateCare</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative pt-24 pb-32 lg:pt-32 lg:pb-40 overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-slate-900/80 mix-blend-multiply z-10" />
          <Image 
            src="/images/estatecare-hero.jpg" 
            alt="EstateCare Architecture" 
            fill 
            className="object-cover object-center opacity-40"
            priority
          />
        </div>

        <div className="container mx-auto px-4 max-w-4xl relative z-20 text-center">
          <FadeIn>
            <div className="inline-block mb-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-amber-500/20 border border-amber-500/50 backdrop-blur-md px-4 py-1.5 text-sm font-semibold text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                </span>
                Coming Q1 2027
              </span>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight drop-shadow-lg">
              Smart Estate <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">Management System</span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              Automate service charges, track maintenance, and keep residents informed. The ultimate operating system for gated communities.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <div className="max-w-md mx-auto bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/20 shadow-2xl">
              <h3 className="font-semibold mb-4 text-left text-white text-lg">Join the Waitlist (Be the first to know)</h3>
              <form className="flex flex-col sm:flex-row gap-3">
                <Input type="email" placeholder="Your Email Address" className="flex-1 bg-white/20 border-white/30 text-white placeholder:text-white/50 focus-visible:ring-amber-500" />
                <Button type="button" className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-amber-950 font-bold border-none shadow-[0_0_15px_rgba(245,158,11,0.4)]">
                  Notify Me
                </Button>
              </form>
            </div>
          </FadeIn>
        </div>
        
        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
      </section>

      {/* Planned Features Grid */}
      <section className="py-24 relative overflow-hidden bg-background">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold tracking-tight mb-4">✨ Planned Features</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We're building exactly what facility managers and resident associations need.
              </p>
            </div>
          </FadeIn>
          
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <StaggerItem>
              <Card className="border-amber-500/20 bg-card/50 backdrop-blur-sm hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-500/5 transition-all">
                <CardHeader>
                  <div className="w-12 h-12 bg-amber-500/10 text-amber-600 rounded-xl flex items-center justify-center mb-4">
                    <Users size={24} />
                  </div>
                  <CardTitle>Tenant Mgmt</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-amber-500/50" /> Lease tracking</li>
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-amber-500/50" /> Tenant portal</li>
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-amber-500/50" /> Move-in/out workflows</li>
                  </ul>
                </CardContent>
              </Card>
            </StaggerItem>
            
            <StaggerItem>
              <Card className="border-amber-500/20 bg-card/50 backdrop-blur-sm hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-500/5 transition-all">
                <CardHeader>
                  <div className="w-12 h-12 bg-amber-500/10 text-amber-600 rounded-xl flex items-center justify-center mb-4">
                    <Banknote size={24} />
                  </div>
                  <CardTitle>Service Charge</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-amber-500/50" /> Auto-billing engine</li>
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-amber-500/50" /> Payment history</li>
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-amber-500/50" /> Automated receipts</li>
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
                  <CardTitle>Maintenance</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-amber-500/50" /> Work request system</li>
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-amber-500/50" /> Vendor management</li>
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-amber-500/50" /> Status tracking</li>
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
                  <CardTitle>Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-amber-500/50" /> Digital visitor logs</li>
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-amber-500/50" /> Access gate passes</li>
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-amber-500/50" /> Incident reporting</li>
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
                  <CardTitle>Reports</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-amber-500/50" /> Collection rates</li>
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-amber-500/50" /> Occupancy metrics</li>
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-amber-500/50" /> Expense tracking</li>
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
                  <CardTitle>Resident App</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-amber-500/50" /> Pay dues via phone</li>
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-amber-500/50" /> Book facilities</li>
                    <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-amber-500/50" /> Community feed</li>
                  </ul>
                </CardContent>
              </Card>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
