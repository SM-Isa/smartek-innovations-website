import Link from "next/link";
import { FadeIn } from "@/components/ui/fade-in";
import { FileText, Mail, MapPin, Phone } from "lucide-react";

export const metadata = {
  title: "Terms of Service | SmartBridge Apex Solutions Ltd",
  description: "Terms and conditions governing the use of SmartBridge Apex Solutions Ltd software and SaaS platforms.",
};

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-muted py-4 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link> {'>'} <span className="text-foreground font-medium">Terms of Service</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-primary/5 py-16 md:py-20 border-b border-border/50 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <FadeIn>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-3.5 py-1 text-xs font-semibold text-primary mb-4">
              <FileText size={16} /> Legal Agreement
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Terms of Service</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Last updated: October 2026. Please read these Terms of Service carefully before accessing or using the services provided by SmartBridge Apex Solutions Ltd.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="prose prose-slate dark:prose-invert max-w-none space-y-12">
            
            {/* Section 1 */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing our website (<span className="text-foreground font-medium">workwithsmartbridge.com</span>) or subscribing to any of our cloud-based software platforms (including <span className="text-foreground font-medium">SmartBridgeEdu</span>, <span className="text-foreground font-medium">EMIS</span>, and <span className="text-foreground font-medium">Proptech</span>), you agree to be legally bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, you must not use or access our services.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">2. Description of Services</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                SmartBridge Apex Solutions Ltd provides cloud-native management software, enterprise automation, and AI-assisted analytics designed for African educational institutions, state education ministries, landlords, and gated residential estates:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong className="text-foreground">SmartBridgeEdu:</strong> School management portal for fee billing, student enrollment, academic results computation, parent notifications, and performance tracking.</li>
                <li><strong className="text-foreground">EMIS:</strong> Macro-level Education Management Information System for aggregated institutional oversight, policy analytics, and state-wide resource allocation.</li>
                <li><strong className="text-foreground">Proptech (SmartHouseRent):</strong> Property and estate management ecosystem for automated rent collections, tenant onboarding, digital lease tracking, maintenance ticketing, and visitor security passes.</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">3. User Accounts & Responsibilities</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Institutional subscribers designate authorized administrators to manage user accounts. By creating an account, you represent and warrant that:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>All registration information you submit is accurate, current, and complete.</li>
                <li>You have the legal authority to bind your school, estate association, or organization to these Terms.</li>
                <li>You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account.</li>
                <li>You will immediately notify us of any suspected security breach or unauthorized access to your account.</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">4. Acceptable Use Policy</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You agree not to misuse our platforms. Specifically, you may not:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Attempt to reverse engineer, decompile, or extract the source code of any SmartBridge software or API.</li>
                <li>Interfere with, disrupt, or overburden the network or server infrastructure hosting our platforms.</li>
                <li>Upload fraudulent transaction data, malicious code, or unlawful content.</li>
                <li>Use automated bots or scrapers to access or extract data from our platforms without explicit written permission.</li>
              </ul>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">5. Fees, Subscriptions & Payments</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Access to SaaS modules is provided under recurring subscription tiers or customized enterprise contracts.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong className="text-foreground">Billing:</strong> Invoices are generated in Nigerian Naira (₦) or agreed commercial currency, payable in advance on monthly, termly, or annual intervals.</li>
                <li><strong className="text-foreground">Late Payments:</strong> Accounts with overdue balances may be subject to temporary feature suspension following written notification.</li>
                <li><strong className="text-foreground">Taxes:</strong> Subscriptions are exclusive of applicable statutory taxes (such as Value Added Tax), which will be charged in accordance with Nigerian law.</li>
              </ul>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">6. Intellectual Property Rights</h2>
              <p className="text-muted-foreground leading-relaxed">
                All software, user interfaces, documentation, trademarks, and proprietary AI analytics algorithms developed by SmartBridge Apex Solutions Ltd remain the exclusive intellectual property of SmartBridge Apex Solutions Ltd and its licensors. Clients retain full ownership of all raw data uploaded to the platform.
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">7. Service Availability & SLA</h2>
              <p className="text-muted-foreground leading-relaxed">
                SmartBridge strives to maintain a 99.9% uptime for core production services. We perform scheduled maintenance during low-traffic windows with advance notice provided where practicable. SmartBridge shall not be liable for disruptions caused by third-party telecoms, payment network outages, or force majeure events.
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">8. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                To the maximum extent permitted under applicable law, SmartBridge Apex Solutions Ltd shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, loss of data, or operational disruptions arising out of or related to your use of our platforms.
              </p>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">9. Governing Law & Dispute Resolution</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms of Service are governed by and construed in accordance with the laws of the Federal Republic of Nigeria. Any disputes arising under these Terms shall be resolved first through good-faith amicable negotiation, failing which they shall be submitted to the competent courts in Nigeria.
              </p>
            </div>

            {/* Section 10 */}
            <div className="p-8 rounded-2xl bg-muted/50 border border-border/60">
              <h2 className="text-2xl font-bold mb-4 text-foreground">10. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                For legal notices, contract inquiries, or questions about these Terms of Service, please reach out to:
              </p>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-3">
                  <MapPin size={18} className="text-primary shrink-0" />
                  <span>SmartBridge Apex Solutions Ltd, 5/6 Oke Ero Road, Mandate 3 Estate Ilorin, Kwara State, Nigeria</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-primary shrink-0" />
                  <a href="mailto:hello@workwithsmartbridge.com" className="hover:text-primary transition-colors font-medium">hello@workwithsmartbridge.com</a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-primary shrink-0" />
                  <a href="tel:+2348068569991" className="hover:text-primary transition-colors font-medium">+234 806 856 9991</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
