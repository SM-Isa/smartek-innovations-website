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
        <div className="container mx-auto px-4 max-w-6xl">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <div className="inline-flex items-center gap-2 text-primary font-semibold text-sm mb-2">
                  <GraduationCap className="size-5" /> Product Line 1
                </div>
                <h2 className="text-3xl font-bold tracking-tight">SmartBridgeEdu (School Management SaaS)</h2>
                <p className="text-muted-foreground">Multi-tenant cloud ERP for primary, secondary, and tertiary schools.</p>
              </div>
              <div className="inline-block text-xs font-medium px-3 py-1 bg-muted rounded-full text-muted-foreground">
                Billed monthly or termly • Recurring SaaS license
              </div>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-8 items-stretch">
            {/* Starter */}
            <StaggerItem>
              <Card className="flex flex-col h-full border-border/60 hover:shadow-lg transition-all">
                <CardHeader className="pb-6">
                  <CardTitle className="text-xl">Starter School</CardTitle>
                  <CardDescription>For growing private institutions</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">₦10,000</span>
                    <span className="text-muted-foreground text-sm"> / month</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Or ₦27,000 billed termly (10% discount)</p>
                </CardHeader>
                <CardContent className="flex-grow space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2 text-foreground font-medium pb-2 border-b">
                    <CheckCircle2 size={16} className="text-primary" /> Up to 200 enrolled students
                  </div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary" /> Automated school fee invoicing & tracking</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary" /> Online parent payment gateway integration</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary" /> Academic terminal report card generation</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary" /> Standard email and ticket support</div>
                </CardContent>
                <CardFooter className="pt-4">
                  <a href="https://test.smartbridgeedu.com" target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "outline" }), "w-full")}>
                    Test Live Demo <ArrowRight className="ml-2 size-4" />
                  </a>
                </CardFooter>
              </Card>
            </StaggerItem>

            {/* Growth */}
            <StaggerItem>
              <Card className="flex flex-col h-full border-primary shadow-xl relative overflow-visible scale-105 bg-card z-10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary to-teal-500 text-primary-foreground px-4 py-1 rounded-full text-xs font-semibold shadow-md">
                  Most Popular SaaS Tier
                </div>
                <CardHeader className="pb-6 pt-8">
                  <CardTitle className="text-xl text-primary">Growth Campus</CardTitle>
                  <CardDescription>For established multi-arm academies</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">₦15,000</span>
                    <span className="text-muted-foreground text-sm"> / month</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Or ₦40,500 billed termly (10% discount)</p>
                </CardHeader>
                <CardContent className="flex-grow space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2 text-foreground font-medium pb-2 border-b">
                    <CheckCircle2 size={16} className="text-primary" /> Up to 500 enrolled students
                  </div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary" /> All Starter School features included</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary" /> AI-Assisted Assessment & Performance Analytics</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary" /> Automated SMS & WhatsApp payment reminders</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary" /> Teacher attendance & grading audit trails</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary" /> Dedicated account manager & onboarding</div>
                </CardContent>
                <CardFooter className="pt-4">
                  <a href="https://test.smartbridgeedu.com" target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "default" }), "w-full shadow-md")}>
                    Launch Free Trial <ArrowRight className="ml-2 size-4" />
                  </a>
                </CardFooter>
              </Card>
            </StaggerItem>

            {/* Enterprise */}
            <StaggerItem>
              <Card className="flex flex-col h-full border-border/60 hover:shadow-lg transition-all">
                <CardHeader className="pb-6">
                  <CardTitle className="text-xl">Network Enterprise</CardTitle>
                  <CardDescription>For school groups & educational chains</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">₦40,000</span>
                    <span className="text-muted-foreground text-sm"> / month base</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Plus volume-tiered per-student pricing</p>
                </CardHeader>
                <CardContent className="flex-grow space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2 text-foreground font-medium pb-2 border-b">
                    <CheckCircle2 size={16} className="text-primary" /> Unlimited students & multiple campuses
                  </div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary" /> Full EMIS macro network dashboard integration</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary" /> Custom institutional domain (portal.yourschool.edu.ng)</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary" /> REST API access & external LMS webhooks</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary" /> 99.9% Uptime SLA & priority phone support</div>
                </CardContent>
                <CardFooter className="pt-4">
                  <Link href="/contact" className={cn(buttonVariants({ variant: "outline" }), "w-full")}>
                    Contact Sales <ArrowRight className="ml-2 size-4" />
                  </Link>
                </CardFooter>
              </Card>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Product 2: Proptech Pricing */}
      <section id="proptech" className="py-16 border-t border-border/50 bg-slate-50/50 dark:bg-slate-900/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <div className="inline-flex items-center gap-2 text-amber-500 font-semibold text-sm mb-2">
                  <Building className="size-5" /> Product Line 2
                </div>
                <h2 className="text-3xl font-bold tracking-tight">Proptech / SmartHouseRent (Property SaaS)</h2>
                <p className="text-muted-foreground">Automated rent invoicing, tenant screening, and gate access infrastructure.</p>
              </div>
              <div className="inline-block text-xs font-medium px-3 py-1 bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded-full">
                Per-unit subscription + automated transaction rail
              </div>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-8 items-stretch">
            {/* Landlord Tier */}
            <StaggerItem>
              <Card className="flex flex-col h-full border-border/60 hover:shadow-lg transition-all">
                <CardHeader className="pb-6">
                  <CardTitle className="text-xl">Independent Landlord</CardTitle>
                  <CardDescription>For residential property owners</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">₦7,500</span>
                    <span className="text-muted-foreground text-sm"> / month</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Up to 10 rental apartments / units</p>
                </CardHeader>
                <CardContent className="flex-grow space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-amber-500" /> Automated digital rent invoicing & receipts</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-amber-500" /> Automated tenant payment reminders (SMS/Email)</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-amber-500" /> Tenant KYC & document storage</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-amber-500" /> Maintenance ticket tracking</div>
                </CardContent>
                <CardFooter className="pt-4">
                  <a href="https://test.smarthouserent.com" target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "outline" }), "w-full")}>
                    Test Live Demo <ArrowRight className="ml-2 size-4" />
                  </a>
                </CardFooter>
              </Card>
            </StaggerItem>

            {/* Estate Pro */}
            <StaggerItem>
              <Card className="flex flex-col h-full border-amber-500/60 shadow-xl relative overflow-visible scale-105 bg-card z-10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-amber-500 to-amber-600 text-amber-950 font-bold px-4 py-1 rounded-full text-xs shadow-md">
                  Most Popular for Estates
                </div>
                <CardHeader className="pb-6 pt-8">
                  <CardTitle className="text-xl text-amber-600 dark:text-amber-400">Estate & Facility Manager</CardTitle>
                  <CardDescription>For gated communities & CDA associations</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-amber-600 dark:text-amber-400">₦25,000</span>
                    <span className="text-muted-foreground text-sm"> / month</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Up to 50 housing units / residents</p>
                </CardHeader>
                <CardContent className="flex-grow space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-amber-500" /> Automated service charge collections & budgeting</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-amber-500" /> AI Document Intelligence for lease synthesis</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-amber-500" /> Digital visitor gate passes & security OTP check-in</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-amber-500" /> Real-time arrears aging & defaulter ledger</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-amber-500" /> Resident self-service mobile portal</div>
                </CardContent>
                <CardFooter className="pt-4">
                  <a href="https://test.smarthouserent.com" target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "secondary" }), "w-full bg-amber-500 hover:bg-amber-400 text-amber-950 font-bold shadow-md")}>
                    Explore Test Platform <ArrowRight className="ml-2 size-4" />
                  </a>
                </CardFooter>
              </Card>
            </StaggerItem>

            {/* Enterprise Commercial */}
            <StaggerItem>
              <Card className="flex flex-col h-full border-border/60 hover:shadow-lg transition-all">
                <CardHeader className="pb-6">
                  <CardTitle className="text-xl">Enterprise Developer</CardTitle>
                  <CardDescription>For property developers & REITs</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">₦60,000</span>
                    <span className="text-muted-foreground text-sm"> / month</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Unlimited units across multi-estate portfolios</p>
                </CardHeader>
                <CardContent className="flex-grow space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-amber-500" /> Unlimited properties, estates, and units</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-amber-500" /> Multi-tiered landlord payout automation</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-amber-500" /> Direct BaaS virtual account generation (Monnify/Korapay)</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-amber-500" /> Custom branding & resident communications</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-amber-500" /> Enterprise SLA & dedicated technical engineer</div>
                </CardContent>
                <CardFooter className="pt-4">
                  <Link href="/contact" className={cn(buttonVariants({ variant: "outline" }), "w-full")}>
                    Contact Sales <ArrowRight className="ml-2 size-4" />
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
