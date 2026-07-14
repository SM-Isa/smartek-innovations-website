import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { FadeIn } from "@/components/ui/fade-in";
import { Send, MapPin, Mail, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="bg-primary/5 py-24 text-center border-b border-border/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="container mx-auto px-4 max-w-3xl relative z-10">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Get In Touch</h1>
            <p className="text-xl text-muted-foreground">
              Whether you're interested in SchoolFee, want to join the EstateCare waitlist, or just have a question — we'd love to hear from you.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Form & Info */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <FadeIn>
              <div>
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                  <Send className="text-primary" /> Send Us a Message
                </h2>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-base">Full Name</Label>
                    <Input id="name" placeholder="John Doe" className="h-12 bg-card" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-base">Email Address</Label>
                    <Input id="email" type="email" placeholder="john@example.com" className="h-12 bg-card" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-base">Subject</Label>
                    <Input id="subject" placeholder="How can we help you?" className="h-12 bg-card" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-base">Message</Label>
                    <Textarea id="message" placeholder="Your message here..." className="min-h-[150px] bg-card text-base resize-y" />
                  </div>
                  <Button type="button" size="lg" className="w-full text-lg h-14 shadow-lg shadow-primary/20">Send Message</Button>
                </form>
              </div>
            </FadeIn>

            {/* Contact Info */}
            <FadeIn delay={0.2}>
              <div className="bg-slate-50 dark:bg-slate-900/50 p-10 rounded-3xl h-fit border border-border/50 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full pointer-events-none" />
                
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                  <MapPin className="text-amber-500" /> Visit Us
                </h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="font-semibold text-xl mb-3">Head Office</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      SmartBridge Apex Solutions Ltd<br />
                      5/6 Oke Ero Road <br />
                      mandate 3 Estate, Kwara<br />
                      Nigeria
                    </p>
                  </div>
                  
                  <div className="space-y-4 pt-8 border-t border-border/50">
                    <a href="mailto:hello@smartekinnovations.com" className="flex items-center gap-4 text-lg hover:text-primary transition-colors group">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                        <Mail size={24} />
                      </div>
                      hello@workwithsmartbridge.com
                    </a>
                    <a href="tel:+2348001234567" className="flex items-center gap-4 text-lg hover:text-primary transition-colors group">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                        <Phone size={24} />
                      </div>
                      +234 800 123 4567
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>
    </div>
  );
}
