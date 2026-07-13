import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-background py-8">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} SmartBridge Apex Solutions Ltd. All rights reserved.</p>
            <span className="hidden md:inline">•</span>
            <p>Lagos, Nigeria</p>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              LinkedIn
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              Twitter
            </Link>
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              Facebook
            </Link>
            <span className="text-border">|</span>
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
