import Link from "next/link";
import { FadeIn } from "@/components/ui/fade-in";
import { ShieldCheck, Mail, MapPin, Phone } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | SmartBridge Apex Solutions Ltd",
  description: "Privacy Policy and data protection practices for SmartBridge Apex Solutions Ltd (SmartBridgeEdu, EMIS, and Proptech).",
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-muted py-4 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link> {'>'} <span className="text-foreground font-medium">Privacy Policy</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-primary/5 py-16 md:py-20 border-b border-border/50 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <FadeIn>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-3.5 py-1 text-xs font-semibold text-primary mb-4">
              <ShieldCheck size={16} /> Data Protection & Compliance
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Privacy Policy</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Last updated: October 2026. This Privacy Policy explains how SmartBridge Apex Solutions Ltd collects, uses, and safeguards information across our platforms.
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
              <h2 className="text-2xl font-bold mb-4 text-foreground">1. Introduction & Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                SmartBridge Apex Solutions Ltd (&quot;SmartBridge&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting the privacy and personal data of our users, clients, and partner institutions. This policy applies to our company website (<span className="text-foreground font-medium">workwithsmartbridge.com</span>) and our SaaS platforms including <span className="text-foreground font-medium">SmartBridgeEdu</span>, <span className="text-foreground font-medium">EMIS</span>, and <span className="text-foreground font-medium">Proptech</span> (SmartHouseRent).
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                We adhere strictly to the Nigeria Data Protection Act (NDPA), the Nigeria Data Protection Regulation (NDPR), and universally accepted global privacy frameworks including General Data Protection Regulation (GDPR) standards.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">2. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Depending on how you interact with our services, we may collect the following categories of data:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong className="text-foreground">Institutional & Account Information:</strong> Name, institutional role, organization name, official email address, phone number, and account credentials.</li>
                <li><strong className="text-foreground">Academic & Student Data (SmartBridgeEdu & EMIS):</strong> Student enrollment records, attendance logs, academic assessments, grades, and parent/guardian contact details provided by subscribed educational institutions acting as Data Controllers.</li>
                <li><strong className="text-foreground">Property & Tenancy Data (Proptech):</strong> Tenancy agreements, rent payment records, service charge schedules, visitor gate logs, and maintenance work orders.</li>
                <li><strong className="text-foreground">Payment & Billing Data:</strong> Transaction references, invoicing history, and payment gateway confirmation tokens. We do not store sensitive debit/credit card numbers directly; all payment card processing is handled by PCI-DSS certified payment processors (e.g., Paystack).</li>
                <li><strong className="text-foreground">Technical & Usage Information:</strong> IP addresses, browser types, device identifiers, session timestamps, and platform performance logs.</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">3. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We process your information strictly for legitimate business and contractual purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Delivering, operating, and maintaining our institutional SaaS management tools.</li>
                <li>Facilitating automated fee collections, rent schedules, and electronic receipting.</li>
                <li>Generating academic performance computation, transcripts, and EMIS state-wide analytics.</li>
                <li>Providing AI-assisted analytics, document intelligence, and automated performance insights to authorized institutional administrators.</li>
                <li>Providing customer support, onboarding assistance, and critical system security alerts.</li>
                <li>Complying with statutory reporting requirements and applicable financial regulations.</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">4. Legal Bases for Processing</h2>
              <p className="text-muted-foreground leading-relaxed">
                We process personal information under the following legal bases:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-3">
                <li><strong className="text-foreground">Contractual Necessity:</strong> To fulfill our agreements with schools, estates, and enterprise clients.</li>
                <li><strong className="text-foreground">Consent:</strong> Where individuals explicitly provide consent for communications or optional platform modules.</li>
                <li><strong className="text-foreground">Legal Obligations:</strong> Compliance with Nigerian accounting, taxation, and regulatory mandates.</li>
                <li><strong className="text-foreground">Legitimate Interests:</strong> Protecting the security, uptime, and fraud resistance of our infrastructure.</li>
              </ul>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">5. Data Security & Storage</h2>
              <p className="text-muted-foreground leading-relaxed">
                SmartBridge implements robust technical and organizational security controls to protect personal data against unauthorized access, loss, or alteration. These measures include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-3">
                <li>End-to-end TLS/HTTPS encryption for data in transit and AES-256 encryption for data at rest.</li>
                <li>Role-based access controls (RBAC) and least-privilege administrative access policies.</li>
                <li>Automated daily encrypted backups and multi-region disaster recovery protocols.</li>
                <li>Continuous vulnerability assessments and cloud security auditing.</li>
              </ul>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">6. Data Sharing & Third Parties</h2>
              <p className="text-muted-foreground leading-relaxed">
                We never sell, rent, or trade your personal data. We only share information with trusted third-party service providers under strict data processing agreements:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-3">
                <li><strong className="text-foreground">Payment Gateways:</strong> Certified aggregators and banking partners to settle transactions securely.</li>
                <li><strong className="text-foreground">Cloud Infrastructure Providers:</strong> Enterprise cloud hosting partners (such as Google Cloud Platform) providing secure compute and storage facilities.</li>
                <li><strong className="text-foreground">Communications Infrastructure:</strong> SMS and email delivery gateways for automated receipting and emergency announcements.</li>
                <li><strong className="text-foreground">Law Enforcement:</strong> Only when legally compelled by a valid court order or statutory requirement in Nigeria.</li>
              </ul>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">7. Your Data Protection Rights</h2>
              <p className="text-muted-foreground leading-relaxed">
                Under NDPA, NDPR, and applicable international privacy laws, you have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-3">
                <li>Request access to your personal data held by us.</li>
                <li>Request rectification of inaccurate or outdated information.</li>
                <li>Request deletion or restriction of processing of your data, subject to statutory retention obligations.</li>
                <li>Withdraw consent at any time for non-essential processing.</li>
                <li>Lodge a complaint with the Nigeria Data Protection Commission (NDPC).</li>
              </ul>
            </div>

            {/* Section 8 */}
            <div className="p-8 rounded-2xl bg-muted/50 border border-border/60">
              <h2 className="text-2xl font-bold mb-4 text-foreground">8. Contact Our Data Protection Team</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                If you have questions, requests, or concerns regarding this Privacy Policy or our data handling practices, please contact us:
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
