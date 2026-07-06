import Link from "next/link";
import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import { ArrowRight, Globe, BarChart4, Target, Users, BookOpen, Layers } from "lucide-react";

export default function EMISPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-muted py-4 border-b relative z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-sm text-muted-foreground">
          <Link href="/" className="hover:text-teal-500 transition-colors">Home</Link> {'>'} Products {'>'} <span className="text-foreground font-medium">EMIS</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative pt-24 pb-32 lg:pt-32 lg:pb-40 overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-slate-950/90 mix-blend-multiply z-10" />
          <Image 
            src="/images/emis-hero.jpg" 
            alt="EMIS Dashboard" 
            fill 
            className="object-cover object-center opacity-60"
            priority
          />
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative z-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="inline-block mb-8">
                <span className="inline-flex items-center gap-2 rounded-full bg-teal-500/20 border border-teal-500/50 backdrop-blur-md px-4 py-1.5 text-sm font-semibold text-teal-300 shadow-[0_0_15px_rgba(20,184,166,0.2)]">
                  Enterprise Solution
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight drop-shadow-lg">
                Education <br className="hidden md:block" />
                Management <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-teal-500">Information System</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-xl leading-relaxed">
                Empower ministries and large educational networks with macro-level data aggregation, actionable analytics, and transparent resource allocation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "bg-teal-500 text-teal-950 hover:bg-teal-400 border-none shadow-[0_0_20px_rgba(20,184,166,0.4)] transition-all hover:-translate-y-1")}>
                  Request Enterprise Demo
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
        
        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
      </section>

      {/* Features Grid */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-24 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold tracking-tight mb-4">Core EMIS Capabilities</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Transform educational policy-making with accurate, real-time data from hundreds of interconnected institutions.
              </p>
            </div>
          </FadeIn>
          
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <StaggerItem>
              <Card className="h-full bg-card/80 backdrop-blur-sm border-teal-500/20 hover:border-teal-500/50 hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-12 h-12 bg-teal-500/10 text-teal-600 rounded-xl flex items-center justify-center mb-4">
                    <Globe size={24} />
                  </div>
                  <CardTitle>State-Wide Aggregation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Connect thousands of schools to a central hub. Automatically aggregate enrollment data, attendance, and exam results into a single source of truth.
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
            
            <StaggerItem>
              <Card className="h-full bg-card/80 backdrop-blur-sm border-teal-500/20 hover:border-teal-500/50 hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-12 h-12 bg-teal-500/10 text-teal-600 rounded-xl flex items-center justify-center mb-4">
                    <BarChart4 size={24} />
                  </div>
                  <CardTitle>Policy Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Generate macro-level reports to measure the impact of educational policies over time using rich visual dashboards and predictive models.
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="h-full bg-card/80 backdrop-blur-sm border-teal-500/20 hover:border-teal-500/50 hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-12 h-12 bg-teal-500/10 text-teal-600 rounded-xl flex items-center justify-center mb-4">
                    <Target size={24} />
                  </div>
                  <CardTitle>Resource Allocation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Identify resource gaps across regions. Track the distribution of teachers, funding, and infrastructure to ensure equitable access.
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="h-full bg-card/80 backdrop-blur-sm border-teal-500/20 hover:border-teal-500/50 hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-12 h-12 bg-teal-500/10 text-teal-600 rounded-xl flex items-center justify-center mb-4">
                    <Users size={24} />
                  </div>
                  <CardTitle>Staff Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Maintain a unified registry of all educational staff. Track qualifications, postings, and payroll integrations to eliminate ghost workers.
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="h-full bg-card/80 backdrop-blur-sm border-teal-500/20 hover:border-teal-500/50 hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-12 h-12 bg-teal-500/10 text-teal-600 rounded-xl flex items-center justify-center mb-4">
                    <BookOpen size={24} />
                  </div>
                  <CardTitle>Curriculum Tracking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Standardize curriculum delivery across the network. Monitor syllabus completion rates and correlate them with regional exam performance.
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="h-full bg-card/80 backdrop-blur-sm border-teal-500/20 hover:border-teal-500/50 hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-12 h-12 bg-teal-500/10 text-teal-600 rounded-xl flex items-center justify-center mb-4">
                    <Layers size={24} />
                  </div>
                  <CardTitle>System Integrations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Connects seamlessly with individual school nodes (like SchoolFee) and external government databases via secure APIs.
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-6">Custom Enterprise Pricing</h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              EMIS is tailored to the specific scale and requirements of your educational network, ministry, or state government.
            </p>
            <div className="bg-card p-8 rounded-2xl border border-border/50 shadow-sm max-w-lg mx-auto">
              <h3 className="text-2xl font-bold mb-4">Get a Custom Quote</h3>
              <p className="text-muted-foreground mb-8">
                Our enterprise team will work closely with you to understand your requirements, infrastructure, and deployment scope.
              </p>
              <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "w-full shadow-md hover:-translate-y-1 transition-transform")}>
                Contact Enterprise Sales
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
