import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import { ArrowRight, CheckCircle2, Wallet, Users, BarChart3, Smartphone, CalendarCheck, BellRing, Building } from "lucide-react";

export default function SchoolFeePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-muted py-4 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link> {'>'} Products {'>'} <span className="text-foreground font-medium">SmartBridgeEdu</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative pt-24 pb-32 lg:pt-32 lg:pb-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-background -z-10" />
        
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-sm font-medium text-primary mb-6">
                v2.0 Now Live
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                SmartBridgeEdu <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-500">School Management System</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed">
                Everything your school needs to manage fees, students, results, and parent communication — all in one powerful, easy-to-use platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://test.smartbridgeedu.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={cn(buttonVariants({ size: "lg" }), "shadow-lg shadow-primary/25 transition-transform hover:-translate-y-1 font-semibold flex items-center justify-center")}
                >
                  Learn More (Test Environment) <ArrowRight className="ml-2 size-4" />
                </a>
                <Link href="/contact" className={cn(buttonVariants({ size: "lg", variant: "outline" }), "bg-background transition-transform hover:-translate-y-1 flex items-center justify-center")}>
                  Book a Demo
                </Link>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2} className="relative aspect-video lg:aspect-square rounded-2xl overflow-hidden border border-border shadow-2xl">
              <Image 
                src="/images/schoolfee-hero.jpg" 
                alt="SmartBridgeEdu Dashboard"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay" />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-24 border-y border-border/50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold tracking-tight mb-4">Powerful Features</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Built from the ground up to solve the most pressing challenges faced by school administrators.
              </p>
            </div>
          </FadeIn>
          
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <StaggerItem>
              <Card className="h-full bg-card/80 backdrop-blur-sm hover:shadow-lg transition-shadow border-primary/10 hover:border-primary/30">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4">
                    <Wallet size={24} />
                  </div>
                  <CardTitle>Fee Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary/70" /> Fee structures</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary/70" /> Online payments</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary/70" /> SMS reminders</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary/70" /> Collection dashboard</li>
                  </ul>
                </CardContent>
              </Card>
            </StaggerItem>
            
            <StaggerItem>
              <Card className="h-full bg-card/80 backdrop-blur-sm hover:shadow-lg transition-shadow border-primary/10 hover:border-primary/30">
                <CardHeader>
                  <div className="w-12 h-12 bg-amber-500/10 text-amber-600 rounded-xl flex items-center justify-center mb-4">
                    <Users size={24} />
                  </div>
                  <CardTitle>Student Mgmt</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-amber-500/70" /> Enrollment</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-amber-500/70" /> Class lists</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-amber-500/70" /> Guardian links</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-amber-500/70" /> Promotion</li>
                  </ul>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="h-full bg-card/80 backdrop-blur-sm hover:shadow-lg transition-shadow border-primary/10 hover:border-primary/30">
                <CardHeader>
                  <div className="w-12 h-12 bg-teal-500/10 text-teal-600 rounded-xl flex items-center justify-center mb-4">
                    <BarChart3 size={24} />
                  </div>
                  <CardTitle>Results & Exams</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-teal-500/70" /> CA & Exam entry</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-teal-500/70" /> Report cards</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-teal-500/70" /> Rankings</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-teal-500/70" /> Audit trail</li>
                  </ul>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="h-full bg-card/80 backdrop-blur-sm hover:shadow-lg transition-shadow border-primary/10 hover:border-primary/30">
                <CardHeader>
                  <div className="w-12 h-12 bg-indigo-500/10 text-indigo-600 rounded-xl flex items-center justify-center mb-4">
                    <Smartphone size={24} />
                  </div>
                  <CardTitle>Parent Portal</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-indigo-500/70" /> View fees</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-indigo-500/70" /> Pay online</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-indigo-500/70" /> View results</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-indigo-500/70" /> Download receipts</li>
                  </ul>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="h-full bg-card/80 backdrop-blur-sm hover:shadow-lg transition-shadow border-primary/10 hover:border-primary/30">
                <CardHeader>
                  <div className="w-12 h-12 bg-rose-500/10 text-rose-600 rounded-xl flex items-center justify-center mb-4">
                    <CalendarCheck size={24} />
                  </div>
                  <CardTitle>Attendance</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-rose-500/70" /> Morning arrival</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-rose-500/70" /> Afternoon dept</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-rose-500/70" /> Parent notify</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-rose-500/70" /> Attendance rate</li>
                  </ul>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="h-full bg-card/80 backdrop-blur-sm hover:shadow-lg transition-shadow border-primary/10 hover:border-primary/30">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-500/10 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                    <BellRing size={24} />
                  </div>
                  <CardTitle>Notifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-500/70" /> SMS alerts</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-500/70" /> WhatsApp msgs</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-500/70" /> Email notices</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-500/70" /> Bulk messaging</li>
                  </ul>
                </CardContent>
              </Card>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-10">Seamless Payment Options</h2>
            <div className="flex flex-wrap justify-center items-center gap-4 text-lg">
              <span className="px-6 py-3 bg-card shadow-sm rounded-xl border border-border/50 flex items-center gap-2"><Wallet size={20} className="text-primary"/> Paystack</span>
              <span className="px-6 py-3 bg-card shadow-sm rounded-xl border border-border/50 flex items-center gap-2"><Building size={20} className="text-primary"/> Bank Transfer</span>
              <span className="px-6 py-3 bg-card shadow-sm rounded-xl border border-border/50 flex items-center gap-2"><Smartphone size={20} className="text-primary"/> USSD</span>
              <span className="px-6 py-3 bg-card shadow-sm rounded-xl border border-border/50 flex items-center gap-2"><CheckCircle2 size={20} className="text-primary"/> Cash (recorded)</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-primary/5 py-24 border-t border-border/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold tracking-tight mb-4">Simple, Transparent Pricing</h2>
              <p className="text-xl text-muted-foreground">No hidden fees. Cancel anytime.</p>
            </div>
          </FadeIn>
          
          <StaggerContainer className="grid md:grid-cols-3 gap-8 items-center">
            <StaggerItem>
              <Card className="flex flex-col hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-8 pt-10">
                  <CardTitle className="text-2xl mb-2 text-muted-foreground">Starter</CardTitle>
                  <div className="text-4xl font-bold">₦10,000<span className="text-lg text-muted-foreground font-normal">/mo</span></div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-4 text-center">
                    <li>Up to 200 students</li>
                    <li>Core features</li>
                    <li>Email support</li>
                  </ul>
                </CardContent>
                <div className="p-6 pt-0 mt-auto">
                  <Link href="/contact" className={cn(buttonVariants({ variant: "outline" }), "w-full hover:bg-primary/5")}>Get Started</Link>
                </div>
              </Card>
            </StaggerItem>
            
            <StaggerItem>
              <Card className="flex flex-col border-primary shadow-xl relative overflow-visible scale-105 bg-card z-10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary to-teal-500 text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold z-10 whitespace-nowrap shadow-md">
                  Most Popular
                </div>
                <CardHeader className="text-center pb-8 pt-10">
                  <CardTitle className="text-2xl mb-2 text-primary">Growth</CardTitle>
                  <div className="text-5xl font-bold text-primary">₦15,000<span className="text-lg text-muted-foreground font-normal">/mo</span></div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-4 text-center">
                    <li className="font-medium">Up to 500 students</li>
                    <li className="font-medium">All features</li>
                    <li className="font-medium">Priority support</li>
                  </ul>
                </CardContent>
                <div className="p-6 pt-0 mt-auto">
                  <Link href="/contact" className={cn(buttonVariants(), "w-full shadow-lg shadow-primary/20")}>Get Started</Link>
                </div>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="flex flex-col hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-8 pt-10">
                  <CardTitle className="text-2xl mb-2 text-muted-foreground">Enterprise</CardTitle>
                  <div className="text-4xl font-bold">Custom</div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-4 text-center">
                    <li>Unlimited students</li>
                    <li>Custom modules</li>
                    <li>Dedicated manager</li>
                  </ul>
                </CardContent>
                <div className="p-6 pt-0 mt-auto">
                  <Link href="/contact" className={cn(buttonVariants({ variant: "outline" }), "w-full hover:bg-primary/5")}>Contact Us</Link>
                </div>
              </Card>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
