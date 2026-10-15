import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import { 
  CheckCircle2, 
  ArrowRight, 
  GraduationCap, 
  Building, 
  Sparkles, 
  Layers, 
  ShieldCheck, 
  TrendingUp, 
  CreditCard, 
  Server
} from "lucide-react";

export const metadata = {
  title: "SaaS Pricing & Product Business Model | SmartBridge",
  description: "Transparent, subscription-based SaaS pricing for SmartBridgeEdu, Proptech, and Dispatch. Explore our product-led technology business model.",
};

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-muted py-4 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link> {'>'} <span className="text-foreground font-medium">Pricing & Business Model</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative pt-20 pb-24 md:pt-28 md:pb-32 overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="container mx-auto px-4 max-w-5xl text-center relative z-10">
          <FadeIn>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-xs sm:text-sm font-semibold text-primary mb-6 shadow-sm">
              <Sparkles className="size-4" /> Transparent B2B SaaS Business Model
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Predictable, Subscription-Based <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-teal-500 to-amber-500">
                SaaS Product Pricing
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              SmartBridge operates as a pure-play technology startup. All our platforms are delivered as standardized, multi-tenant Software-as-a-Service (SaaS) products with zero agency fees or upfront custom development costs.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Product 1: SmartBridgeEdu Pricing */}
      <section id="smartbridgeedu" className="py-16 border-t border-border/50 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <div className="inline-flex items-center gap-2 text-primary font-semibold text-sm mb-2">
                  <GraduationCap className="size-5" /> Product Line 1
                </div>
                <h2 className="text-3xl font-bold tracking-tight">SmartBridgeEdu (School Management SaaS)</h2>
                <p className="text-muted-foreground">Predictable, student-based pricing that scales with your school. Start with a 30-day free trial and pay only for active students.</p>
              </div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 bg-primary/10 text-primary rounded-full border border-primary/20">
                Student-Based Pricing • Termly (3x/yr) or Annual (Save ~20%) • 30-Day Free Trial
              </div>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-8 items-stretch">
            {/* Academic Essentials */}
            <StaggerItem>
              <Card className="flex flex-col h-full border-border/60 hover:shadow-lg transition-all bg-card">
                <CardHeader className="pb-6">
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Standard Package</div>
                  <CardTitle className="text-xl">Academic Essentials</CardTitle>
                  <CardDescription className="text-sm min-h-[40px]">Ideal for schools that collect fees offline or directly through bank accounts, but need full digital academics.</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">₦200</span>
                    <span className="text-muted-foreground text-sm"> / student / term</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Or ₦500 / student / year (Save ~20%) • 30-day trial</p>
                </CardHeader>
                <CardContent className="flex-grow space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2 text-foreground font-medium pb-2 border-b text-xs">
                    <CheckCircle2 size={16} className="text-primary shrink-0" /> Pay only for enrolled, active students
                  </div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary shrink-0" /> Complete CA & exam grading calculations</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary shrink-0" /> Automated class rankings & GPA reports</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary shrink-0" /> Digital PDF report cards with school crest</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary shrink-0" /> Live parent result checking portal</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary shrink-0" /> Daily attendance roll call & absence SMS alerts</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary shrink-0" /> Offline fee tracking & manual teller logs</div>
                </CardContent>
                <CardFooter className="pt-4">
                  <a href="https://test.smartbridgeedu.com" target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "outline" }), "w-full")}>
                    Start Free Trial with Essentials <ArrowRight className="ml-2 size-4" />
                  </a>
                </CardFooter>
              </Card>
            </StaggerItem>

            {/* Full FinTech & Academic Suite */}
            <StaggerItem>
              <Card className="flex flex-col h-full border-primary shadow-xl relative overflow-visible scale-105 bg-card z-10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary to-teal-500 text-primary-foreground px-4 py-1 rounded-full text-xs font-semibold shadow-md whitespace-nowrap">
                  Most Popular • Complete Suite
                </div>
                <CardHeader className="pb-6 pt-8">
                  <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">All-In-One Platform</div>
                  <CardTitle className="text-xl text-primary">Full FinTech Suite</CardTitle>
                  <CardDescription className="text-sm min-h-[40px]">Complete end-to-end automation: online card & bank payments with instant reconciliation, plus all academic features.</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">₦300</span>
                    <span className="text-muted-foreground text-sm"> / student / term</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Or ₦750 / student / year (Save ~20%) • Only ₦100 extra/student</p>
                </CardHeader>
                <CardContent className="flex-grow space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2 text-foreground font-medium pb-2 border-b text-xs">
                    <CheckCircle2 size={16} className="text-primary shrink-0" /> Everything in Essentials, Plus:
                  </div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary shrink-0" /> Integrated online fee payment gateway (Cards, Transfer, USSD)</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary shrink-0" /> Zero school markup: gateway fees charged to parents directly</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary shrink-0" /> Automated real-time bank reconciliation (zero manual teller checks)</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary shrink-0" /> Dynamic installment plans & automated parent invoicing</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary shrink-0" /> Digital tamper-proof receipts with QR verification</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary shrink-0" /> AI-Assisted Assessment & Student Performance Analytics</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary shrink-0" /> Dedicated WhatsApp & priority onboarding support</div>
                </CardContent>
                <CardFooter className="pt-4">
                  <a href="https://test.smartbridgeedu.com" target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "default" }), "w-full shadow-md")}>
                    Start 30-Day Free Trial <ArrowRight className="ml-2 size-4" />
                  </a>
                </CardFooter>
              </Card>
            </StaggerItem>

            {/* Enterprise & EMIS */}
            <StaggerItem>
              <Card className="flex flex-col h-full border-border/60 hover:shadow-lg transition-all bg-card">
                <CardHeader className="pb-6">
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Chains & State Boards</div>
                  <CardTitle className="text-xl">Enterprise & EMIS</CardTitle>
                  <CardDescription className="text-sm min-h-[40px]">For school groups, educational networks, and state ministries requiring cross-regional oversight.</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">Custom</span>
                    <span className="text-muted-foreground text-sm"> volume SLA</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Multi-campus software licensing & cloud infrastructure</p>
                </CardHeader>
                <CardContent className="flex-grow space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2 text-foreground font-medium pb-2 border-b text-xs">
                    <CheckCircle2 size={16} className="text-primary shrink-0" /> Unlimited students & multiple campuses
                  </div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary shrink-0" /> Full EMIS macro network dashboard integration</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary shrink-0" /> Custom institutional domain (portal.yourschool.edu.ng)</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary shrink-0" /> Centralized multi-school accounting & fee aggregation</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary shrink-0" /> REST API access & external LMS webhooks</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary shrink-0" /> Cross-school policy benchmarking & student cohort analytics</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary shrink-0" /> 99.9% Uptime SLA & dedicated technical engineer</div>
                </CardContent>
                <CardFooter className="pt-4">
                  <Link href="/contact" className={cn(buttonVariants({ variant: "outline" }), "w-full")}>
                    Contact Enterprise Sales <ArrowRight className="ml-2 size-4" />
                  </Link>
                </CardFooter>
              </Card>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Product 2: Proptech Pricing */}
      <section id="proptech" className="py-16 border-t border-border/50 bg-slate-50/50 dark:bg-slate-900/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <div className="inline-flex items-center gap-2 text-amber-500 font-semibold text-sm mb-2">
                  <Building className="size-5" /> Product Line 2
                </div>
                <h2 className="text-3xl font-bold tracking-tight">Proptech / SmartHouseRent (Property SaaS)</h2>
                <p className="text-muted-foreground">Transparent annual pricing based on unit count. Scale up smoothly with zero hidden fees.</p>
              </div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded-full border border-amber-500/20">
                Transparent Annual SaaS Pricing • 90-Day Free Trial
              </div>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 items-stretch">
            {/* 1. Starter */}
            <StaggerItem>
              <Card className="flex flex-col h-full border-border/60 hover:shadow-lg transition-all bg-card">
                <CardHeader className="pb-4">
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Entry Plan</div>
                  <CardTitle className="text-xl">Starter</CardTitle>
                  <CardDescription className="text-xs min-h-[32px]">For small landlords just getting started</CardDescription>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">Free</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">90-day free trial</p>
                </CardHeader>
                <CardContent className="flex-grow space-y-2.5 text-xs text-muted-foreground pt-2">
                  <div className="text-foreground font-semibold pb-2 border-b text-xs flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-amber-500 shrink-0" />
                    <span>1 property • Up to 3 units</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-amber-500 shrink-0 mt-0.5" />
                    <span>Basic tenant management</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-amber-500 shrink-0 mt-0.5" />
                    <span>Manual & automated invoicing</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-amber-500 shrink-0 mt-0.5" />
                    <span>Email support</span>
                  </div>
                </CardContent>
                <CardFooter className="pt-4">
                  <a href="https://test.smarthouserent.com" target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "outline", size: "sm" }), "w-full text-xs")}>
                    Test Live Demo <ArrowRight className="ml-1 size-3.5" />
                  </a>
                </CardFooter>
              </Card>
            </StaggerItem>

            {/* 2. Standard (Solo) */}
            <StaggerItem>
              <Card className="flex flex-col h-full border-border/60 hover:shadow-lg transition-all bg-card">
                <CardHeader className="pb-4">
                  <div className="text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-1">Independent</div>
                  <CardTitle className="text-xl">Standard (Solo)</CardTitle>
                  <CardDescription className="text-xs min-h-[32px]">For independent landlords managing single residential buildings</CardDescription>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">₦25,000</span>
                    <span className="text-muted-foreground text-xs"> / year</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">~₦2,083/mo • 90-day trial</p>
                </CardHeader>
                <CardContent className="flex-grow space-y-2.5 text-xs text-muted-foreground pt-2">
                  <div className="text-foreground font-semibold pb-2 border-b text-xs flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-amber-500 shrink-0" />
                    <span>Up to 3 properties • 15 units</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-amber-500 shrink-0 mt-0.5" />
                    <span>Automated billing & rent collection</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-amber-500 shrink-0 mt-0.5" />
                    <span>Escrow custody & protection</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-amber-500 shrink-0 mt-0.5" />
                    <span>Maintenance ticketing</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-amber-500 shrink-0 mt-0.5" />
                    <span>Tenant communications</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-amber-500 shrink-0 mt-0.5" />
                    <span>Standard support</span>
                  </div>
                </CardContent>
                <CardFooter className="pt-4">
                  <a href="https://test.smarthouserent.com" target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "outline", size: "sm" }), "w-full text-xs")}>
                    Start 90-Day Trial <ArrowRight className="ml-1 size-3.5" />
                  </a>
                </CardFooter>
              </Card>
            </StaggerItem>

            {/* 3. Professional (Growth) - Most Popular */}
            <StaggerItem>
              <Card className="flex flex-col h-full border-amber-500 shadow-xl relative overflow-visible scale-105 bg-card z-10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-amber-500 to-amber-600 text-amber-950 font-bold px-3 py-1 rounded-full text-[11px] shadow-md uppercase tracking-wider whitespace-nowrap">
                  Most Popular
                </div>
                <CardHeader className="pb-4 pt-7">
                  <div className="text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-1">Growth Portfolios</div>
                  <CardTitle className="text-xl text-amber-600 dark:text-amber-400">Professional (Growth)</CardTitle>
                  <CardDescription className="text-xs min-h-[32px]">For growing property portfolios and multi-property managers</CardDescription>
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-amber-600 dark:text-amber-400">₦60,000</span>
                    <span className="text-muted-foreground text-xs"> / year</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">~₦5,000/mo • 90-day trial</p>
                </CardHeader>
                <CardContent className="flex-grow space-y-2.5 text-xs text-muted-foreground pt-2">
                  <div className="text-foreground font-semibold pb-2 border-b text-xs flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-amber-500 shrink-0" />
                    <span>Up to 10 properties • 50 units</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-amber-500 shrink-0 mt-0.5" />
                    <span>Automated billing & reminders</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-amber-500 shrink-0 mt-0.5" />
                    <span>Escrow custody & protection</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-amber-500 shrink-0 mt-0.5" />
                    <span>Maintenance & expense tracking</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-amber-500 shrink-0 mt-0.5" />
                    <span>Tenant communications</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-amber-500 shrink-0 mt-0.5" />
                    <span>Advanced analytics & reports</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-amber-500 shrink-0 mt-0.5" />
                    <span>Priority support</span>
                  </div>
                </CardContent>
                <CardFooter className="pt-4">
                  <a href="https://test.smarthouserent.com" target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "secondary", size: "sm" }), "w-full bg-amber-500 hover:bg-amber-400 text-amber-950 font-bold shadow-md text-xs")}>
                    Start 90-Day Trial <ArrowRight className="ml-1 size-3.5" />
                  </a>
                </CardFooter>
              </Card>
            </StaggerItem>

            {/* 4. Portfolio (Business) */}
            <StaggerItem>
              <Card className="flex flex-col h-full border-border/60 hover:shadow-lg transition-all bg-card">
                <CardHeader className="pb-4">
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Commercial</div>
                  <CardTitle className="text-xl">Portfolio (Business)</CardTitle>
                  <CardDescription className="text-xs min-h-[32px]">For large landlords and commercial property managers</CardDescription>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">₦150,000</span>
                    <span className="text-muted-foreground text-xs"> / year</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">~₦12,500/mo • 90-day trial</p>
                </CardHeader>
                <CardContent className="flex-grow space-y-2.5 text-xs text-muted-foreground pt-2">
                  <div className="text-foreground font-semibold pb-2 border-b text-xs flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-amber-500 shrink-0" />
                    <span>Up to 25 properties • 150 units</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-amber-500 shrink-0 mt-0.5" />
                    <span>Multi-manager access</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-amber-500 shrink-0 mt-0.5" />
                    <span>Custom financial exports</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-amber-500 shrink-0 mt-0.5" />
                    <span>Escrow custody & protection</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-amber-500 shrink-0 mt-0.5" />
                    <span>Priority phone & email support</span>
                  </div>
                </CardContent>
                <CardFooter className="pt-4">
                  <a href="https://test.smarthouserent.com" target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "outline", size: "sm" }), "w-full text-xs")}>
                    Start 90-Day Trial <ArrowRight className="ml-1 size-3.5" />
                  </a>
                </CardFooter>
              </Card>
            </StaggerItem>

            {/* 5. Enterprise (Agencies) */}
            <StaggerItem>
              <Card className="flex flex-col h-full border-border/60 hover:shadow-lg transition-all bg-card">
                <CardHeader className="pb-4">
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Agencies & Developers</div>
                  <CardTitle className="text-xl">Enterprise (Agencies)</CardTitle>
                  <CardDescription className="text-xs min-h-[32px]">For property management companies and estate developers</CardDescription>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">₦300,000</span>
                    <span className="text-muted-foreground text-xs"> / year</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">~₦25,000/mo • 30-day trial</p>
                </CardHeader>
                <CardContent className="flex-grow space-y-2.5 text-xs text-muted-foreground pt-2">
                  <div className="text-foreground font-semibold pb-2 border-b text-xs flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-amber-500 shrink-0" />
                    <span>Unlimited properties & units</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-amber-500 shrink-0 mt-0.5" />
                    <span>Multi-workspace management</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-amber-500 shrink-0 mt-0.5" />
                    <span>Dedicated account manager</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-amber-500 shrink-0 mt-0.5" />
                    <span>Custom integrations & SLA</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-amber-500 shrink-0 mt-0.5" />
                    <span>API access & webhooks</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-amber-500 shrink-0 mt-0.5" />
                    <span>SLA uptime guarantees</span>
                  </div>
                </CardContent>
                <CardFooter className="pt-4">
                  <Link href="/contact" className={cn(buttonVariants({ variant: "outline", size: "sm" }), "w-full text-xs")}>
                    Contact Sales <ArrowRight className="ml-1 size-3.5" />
                  </Link>
                </CardFooter>
              </Card>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* CORE SECTION: The Product Business Model (Key for Google for Startups Review) */}
      <section className="py-24 border-t border-border/50 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <FadeIn>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 border border-primary/40 px-4 py-1.5 text-xs font-semibold text-teal-300 mb-4">
                <Layers className="size-4" /> How We Monetize & Scale
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                Our SaaS Product Business Model
              </h2>
              <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
                SmartBridge is an early-stage technology startup built strictly on scalable software economics. We do not charge for consulting hours, custom development, or one-off services.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {/* Model Pillar 1 */}
            <StaggerItem>
              <div className="p-8 rounded-2xl bg-slate-950/80 border border-slate-800 h-full flex flex-col">
                <div className="size-12 rounded-xl bg-primary/15 text-primary flex items-center justify-center mb-6">
                  <TrendingUp className="size-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">1. Recurring B2B SaaS Subscriptions (MRR / ARR)</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  Educational institutions and gated residential estates subscribe to our cloud platforms on monthly, termly, or annual software licenses. Pricing tiers scale with customer volume (number of enrolled students or managed housing units).
                </p>
                <div className="mt-auto pt-4 border-t border-slate-800 text-xs text-teal-400 font-semibold">
                  High Gross Margin • Predictable SaaS Revenue
                </div>
              </div>
            </StaggerItem>

            {/* Model Pillar 2 */}
            <StaggerItem>
              <div className="p-8 rounded-2xl bg-slate-950/80 border border-slate-800 h-full flex flex-col">
                <div className="size-12 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center mb-6">
                  <CreditCard className="size-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">2. Embedded Financial Infrastructure Fees</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  When parents pay school fees or tenants pay rent via our automated banking rails (cards, dynamic virtual accounts, and USSD), SmartBridge earns a small automated processing fee (0.5% – 1.2%) on settled transaction volumes.
                </p>
                <div className="mt-auto pt-4 border-t border-slate-800 text-xs text-amber-400 font-semibold">
                  Volume-Driven Upside • Embedded Fintech Monetization
                </div>
              </div>
            </StaggerItem>

            {/* Model Pillar 3 */}
            <StaggerItem>
              <div className="p-8 rounded-2xl bg-slate-950/80 border border-slate-800 h-full flex flex-col">
                <div className="size-12 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center mb-6">
                  <Server className="size-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">3. Multi-Node Enterprise Cloud Licensing</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  Government ministries, state school boards, and large commercial developers license our enterprise macro-dashboard (EMIS) under annual cloud software agreements for cross-regional data aggregation and resource allocation analytics.
                </p>
                <div className="mt-auto pt-4 border-t border-slate-800 text-xs text-emerald-400 font-semibold">
                  Annual Contract Value (ACV) • Long-Term Retention
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>

          {/* Startup vs Agency Callout */}
          <FadeIn delay={0.2} className="mt-12">
            <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-slate-900 to-amber-500/10 border border-slate-700/80 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2">
                <h4 className="text-lg font-bold text-white flex items-center gap-2">
                  <ShieldCheck className="size-5 text-teal-400" />
                  Product Startup Architecture vs. Agency Model
                </h4>
                <p className="text-sm text-slate-300 max-w-3xl">
                  Every SmartBridge client runs on our centralized, multi-tenant Google Cloud native architecture. We do not do contract software engineering or bespoke agency development. All updates, AI model integrations, and security patches deploy across our shared platform automatically.
                </p>
              </div>
              <div className="shrink-0 px-4 py-2 rounded-xl bg-primary/20 border border-primary/40 text-teal-300 text-xs font-semibold">
                100% Multi-Tenant SaaS
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground">Everything you need to know about SmartBridge subscription plans and billing.</p>
            </div>
          </FadeIn>

          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-card border border-border/60">
              <h3 className="font-semibold text-lg mb-2">Can we upgrade our student or unit tier mid-subscription?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Yes. Our cloud billing automatically prorates any tier changes when your school enrolls additional students or your property portfolio expands. You only pay for what you manage.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border/60">
              <h3 className="font-semibold text-lg mb-2">Are there any upfront setup or installation fees?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                No. SmartBridge is 100% cloud-hosted. There is zero hardware installation or setup fee required. You simply create your institutional account, configure your fee/rent structure, and begin using the platform.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border/60">
              <h3 className="font-semibold text-lg mb-2">How do payment settlements reach our bank account?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Payments processed through the portal (tuition fees, rent, service charges) settle directly into your verified commercial bank account via automated next-day settlement (T+1), with real-time ledger reconciliation.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border/60">
              <h3 className="font-semibold text-lg mb-2">How is institutional data secured?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                All data is encrypted in transit and at rest using bank-grade AES-256 encryption on Google Cloud Platform, in full compliance with the Nigeria Data Protection Act (NDPA) and GDPR principles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-primary/5 border-t border-border/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Ready to Automate Your Institution?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Explore our live test environments or book an interactive walkthrough with our product team.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "shadow-lg shadow-primary/20")}>
                Book a Product Walkthrough
              </Link>
              <a href="https://test.smartbridgeedu.com" target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ size: "lg", variant: "outline" }), "bg-background")}>
                Test SmartBridgeEdu Live
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
