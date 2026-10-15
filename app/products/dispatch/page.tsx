import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import { 
  ArrowRight, 
  CheckCircle2, 
  Bike, 
  Store, 
  MapPin, 
  Wallet, 
  Sparkles, 
  ShieldCheck, 
  Cpu, 
  Smartphone, 
  Layers
} from "lucide-react";

export default function DispatchProductPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-muted py-4 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link> {'>'} Products {'>'} <span className="text-foreground font-medium">Dispatch & Food Storefront</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative pt-24 pb-32 lg:pt-32 lg:pb-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 via-background to-background -z-10" />
        
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 text-sm font-medium text-emerald-600 dark:text-emerald-400 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Pilot Launch: Ilorin (Tanke & GRA Clusters)
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                Hyperlocal Dispatch & <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-amber-500">
                  Food Vendor Storefront
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-4 max-w-xl leading-relaxed">
                Unified multi-tenant food e-commerce, motorcycle dispatch aggregation, and automated double-entry financial ledger built specifically for emerging Nigerian urban centers.
              </p>
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 px-3.5 py-1.5 rounded-full text-xs font-semibold text-emerald-700 dark:text-emerald-300 mb-8 shadow-sm">
                <Sparkles className="size-4 animate-pulse text-amber-500" />
                <span>Powered by Google Cloud Vertex AI & Gemini Multimodal Vision</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact" 
                  className={cn(buttonVariants({ size: "lg" }), "bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/25 transition-transform hover:-translate-y-1 font-semibold flex items-center justify-center")}
                >
                  Join Vendor & Fleet Pilot <ArrowRight className="ml-2 size-4" />
                </Link>
                <Link 
                  href="/contact" 
                  className={cn(buttonVariants({ size: "lg", variant: "outline" }), "bg-background transition-transform hover:-translate-y-1 flex items-center justify-center")}
                >
                  Schedule Technical Briefing
                </Link>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2} className="relative aspect-video lg:aspect-square rounded-2xl overflow-hidden border border-border shadow-2xl bg-gradient-to-br from-slate-900 to-slate-950 p-8 flex flex-col justify-between text-white">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                    <Bike size={22} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Dispatch Telemetry Node</div>
                    <div className="text-xs text-slate-400">PostGIS Ring Matching: Active</div>
                  </div>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-mono">
                  ● 20s Heartbeat
                </span>
              </div>

              <div className="space-y-4 my-6">
                <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4">
                  <div className="flex justify-between items-center text-xs text-slate-400 mb-2">
                    <span>Cluster Saturation</span>
                    <span className="text-emerald-400 font-semibold font-mono">74.2% (Tanke)</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2">
                    <div className="bg-gradient-to-r from-emerald-500 to-teal-400 h-2 rounded-full w-[74%]"></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="bg-slate-900/80 border border-slate-800 rounded-lg p-3">
                    <div className="text-slate-400">Ledger Imbalance</div>
                    <div className="text-lg font-bold text-white font-mono mt-1">₦0.00</div>
                    <div className="text-[10px] text-emerald-400 mt-1">Zero Balance Drift</div>
                  </div>
                  <div className="bg-slate-900/80 border border-slate-800 rounded-lg p-3">
                    <div className="text-slate-400">Menu OCR Latency</div>
                    <div className="text-lg font-bold text-white font-mono mt-1">42 sec</div>
                    <div className="text-[10px] text-amber-400 mt-1">Gemini 1.5 Flash Vision</div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>Payment Gateways: Monnify / Korapay</span>
                <span className="font-mono text-emerald-400">ORD-VERIFIED</span>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Core Architectural Pillars */}
      <section className="py-24 bg-muted/40 relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Platform Architecture & Capabilities</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Purpose-built for the operational reality of Nigerian tier-2 cities: fluctuating data networks, motorcycle dispatch logistics, and multi-tenant restaurant commerce.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <StaggerItem>
              <Card className="h-full bg-card border-border/60 hover:border-emerald-500/40 hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="w-12 h-12 bg-emerald-500/10 text-emerald-600 rounded-xl flex items-center justify-center mb-4">
                    <Store size={26} />
                  </div>
                  <CardTitle className="text-xl">Fast SSR Vendor Storefronts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-muted-foreground text-sm">
                  <p>
                    Sub-second server-rendered catalogs for restaurants and cloud kitchens. Sharable directly on WhatsApp and Instagram with instant open/closed kitchen switches and category filters.
                  </p>
                  <div className="flex items-center gap-2 text-foreground font-medium pt-2">
                    <CheckCircle2 size={16} className="text-emerald-500" />
                    <span>Instant WhatsApp commerce links</span>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>

            {/* Feature 2 */}
            <StaggerItem>
              <Card className="h-full bg-card border-border/60 hover:border-emerald-500/40 hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="w-12 h-12 bg-emerald-500/10 text-emerald-600 rounded-xl flex items-center justify-center mb-4">
                    <MapPin size={26} />
                  </div>
                  <CardTitle className="text-xl">Geospatial Dispatch Engine</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-muted-foreground text-sm">
                  <p>
                    Redis-backed ring candidate matching and PostGIS geospatial polygon queries. Dispatches offers to nearest verified motorcycle riders with single-winner atomic locking.
                  </p>
                  <div className="flex items-center gap-2 text-foreground font-medium pt-2">
                    <CheckCircle2 size={16} className="text-emerald-500" />
                    <span>Battery-efficient 20s telemetry</span>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>

            {/* Feature 3 */}
            <StaggerItem>
              <Card className="h-full bg-card border-border/60 hover:border-emerald-500/40 hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="w-12 h-12 bg-emerald-500/10 text-emerald-600 rounded-xl flex items-center justify-center mb-4">
                    <Wallet size={26} />
                  </div>
                  <CardTitle className="text-xl">Double-Entry Ledger & Escrow</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-muted-foreground text-sm">
                  <p>
                    Zero-drift financial ledger enforcing <code>SUM(CREDITS) = SUM(DEBITS)</code> at database trigger level. Automatically holds customer escrow until dropoff proof is confirmed.
                  </p>
                  <div className="flex items-center gap-2 text-foreground font-medium pt-2">
                    <CheckCircle2 size={16} className="text-emerald-500" />
                    <span>Real-time vendor & rider payouts</span>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>

            {/* Feature 4 */}
            <StaggerItem>
              <Card className="h-full bg-card border-border/60 hover:border-emerald-500/40 hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="w-12 h-12 bg-emerald-500/10 text-emerald-600 rounded-xl flex items-center justify-center mb-4">
                    <Cpu size={26} />
                  </div>
                  <CardTitle className="text-xl">Multimodal Menu OCR (AI)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-muted-foreground text-sm">
                  <p>
                    Converts physical menu photos and WhatsApp price lists into structured e-commerce catalogs using Gemini 1.5 Flash Vision and fine-tuned Gemma 2B in under 45 seconds.
                  </p>
                  <div className="flex items-center gap-2 text-foreground font-medium pt-2">
                    <CheckCircle2 size={16} className="text-emerald-500" />
                    <span>Local Nigerian dish normalization</span>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>

            {/* Feature 5 */}
            <StaggerItem>
              <Card className="h-full bg-card border-border/60 hover:border-emerald-500/40 hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="w-12 h-12 bg-emerald-500/10 text-emerald-600 rounded-xl flex items-center justify-center mb-4">
                    <Smartphone size={26} />
                  </div>
                  <CardTitle className="text-xl">Instant Bank Transfer Rails</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-muted-foreground text-sm">
                  <p>
                    Eliminates card failure friction with dynamic virtual accounts powered by Monnify and Korapay BaaS APIs. Confirms incoming customer payments in under 3 seconds.
                  </p>
                  <div className="flex items-center gap-2 text-foreground font-medium pt-2">
                    <CheckCircle2 size={16} className="text-emerald-500" />
                    <span>Automated HMAC webhook verification</span>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>

            {/* Feature 6 */}
            <StaggerItem>
              <Card className="h-full bg-card border-border/60 hover:border-emerald-500/40 hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="w-12 h-12 bg-emerald-500/10 text-emerald-600 rounded-xl flex items-center justify-center mb-4">
                    <ShieldCheck size={26} />
                  </div>
                  <CardTitle className="text-xl">Fleet Vetting & Insurance</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-muted-foreground text-sm">
                  <p>
                    Motorcycle rider onboarding with ₦500,000 legal guarantor verification gates, biometric identification, and automated MyCoverGenius per-trip accident insurance.
                  </p>
                  <div className="flex items-center gap-2 text-foreground font-medium pt-2">
                    <CheckCircle2 size={16} className="text-emerald-500" />
                    <span>Statutory gig contractor compliance</span>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* City Expansion & Economics */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 mb-4">
                Secondary City Flywheel
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Designed for Cluster Saturation, Not Geographic Sprawl
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Unlike capital-intensive national delivery platforms, Dispatch operates on a rigorous <strong>70% cluster saturation density rule</strong>. By launching sequentially across university-anchored micro-zones (Tanke, GRA, Challenge), we achieve positive unit economics on Day 30.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="size-6 rounded-full bg-emerald-500/20 text-emerald-600 flex items-center justify-center font-bold text-xs mt-0.5">1</div>
                  <div>
                    <h4 className="font-semibold text-foreground">₦4,450 Average Order Value (GMV)</h4>
                    <p className="text-sm text-muted-foreground">Generates 20.7%+ net contribution margin per completed trip.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="size-6 rounded-full bg-emerald-500/20 text-emerald-600 flex items-center justify-center font-bold text-xs mt-0.5">2</div>
                  <div>
                    <h4 className="font-semibold text-foreground">65-Minute Vendor Digitization</h4>
                    <p className="text-sm text-muted-foreground">Camera-to-catalog onboarding workflow powered by Gemini vision pipelines.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="size-6 rounded-full bg-emerald-500/20 text-emerald-600 flex items-center justify-center font-bold text-xs mt-0.5">3</div>
                  <div>
                    <h4 className="font-semibold text-foreground">Zero-Discrepancy Double-Entry Accounting</h4>
                    <p className="text-sm text-muted-foreground">Guaranteed monetary balance integrity via automated nightly reconciliation scripts.</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-white space-y-6">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Layers className="size-5 text-emerald-400" />
                Cluster Rollout Sequencing
              </h3>
              
              <div className="space-y-4 text-sm">
                <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60">
                  <div className="flex justify-between items-center font-semibold text-white">
                    <span>Cluster 1: Tanke (University Hub)</span>
                    <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">Phase 1 (Active)</span>
                  </div>
                  <p className="text-xs text-slate-300 mt-2">
                    High order frequency, short delivery radiuses (1.8 km avg), 200 food vendors and 100 motorcycle riders.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60">
                  <div className="flex justify-between items-center font-semibold text-white">
                    <span>Cluster 2: GRA & Fate (High-Income Residential)</span>
                    <span className="text-xs px-2 py-0.5 rounded bg-slate-700 text-slate-300">Phase 2 (Day 31 Gate)</span>
                  </div>
                  <p className="text-xs text-slate-300 mt-2">
                    Premium dining baskets, corporate lunch routes, ₦6,800+ average order values.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60">
                  <div className="flex justify-between items-center font-semibold text-white">
                    <span>Cluster 3: Challenge & Taiwo (Commercial Core)</span>
                    <span className="text-xs px-2 py-0.5 rounded bg-slate-700 text-slate-300">Phase 3 (Day 60 Gate)</span>
                  </div>
                  <p className="text-xs text-slate-300 mt-2">
                    Dense retail and B2B merchant parcels, connecting central commercial districts with residential hubs.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-900 via-slate-900 to-slate-950 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Partner With Dispatch on Hyperlocal Urban Commerce
            </h2>
            <p className="text-lg text-emerald-100/80 mb-8 max-w-2xl mx-auto">
              Whether you are a food vendor looking to expand takeout delivery or a fleet operator seeking automated dispatch, SmartBridge delivers the software backbone.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/contact" 
                className={cn(buttonVariants({ size: "lg" }), "bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold shadow-xl transition-transform hover:-translate-y-1")}
              >
                Inquire for Merchant & Fleet Pilot
              </Link>
              <Link 
                href="/contact" 
                className={cn(buttonVariants({ size: "lg", variant: "outline" }), "bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-md")}
              >
                Schedule Investor Briefing
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
