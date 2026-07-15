import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Building2 } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="border-b bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight text-primary hover:opacity-90 transition-opacity">
          <Building2 size={24} className="text-amber-500" /> SMARTBRIDGE
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-foreground transition-colors">
              Products <span className="text-[10px]">▼</span>
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 bg-card border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <div className="p-2 flex flex-col">
                <Link href="/products/schoolfee" className="px-4 py-2 hover:bg-muted rounded-md text-foreground transition-colors">EduSuite</Link>
                <Link href="/products/emis" className="px-4 py-2 hover:bg-muted rounded-md text-foreground transition-colors">EMIS</Link>
                <Link href="/products/estatecare" className="px-4 py-2 hover:bg-muted rounded-md text-foreground transition-colors flex items-center justify-between">
                  EstateCare <span className="text-[10px] bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded">Soon</span>
                </Link>
              </div>
            </div>
          </div>
          <Link href="/about" className="hover:text-foreground transition-colors">About</Link>
          <Link href="/pricing" className="hover:text-foreground transition-colors">Pricing</Link>
          <Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/login" className={cn(buttonVariants({ variant: "ghost" }), "hidden sm:inline-flex hover:bg-primary/5 hover:text-primary")}>
            Sign In
          </Link>
          <Link href="/contact" className={cn(buttonVariants(), "bg-primary hover:bg-primary/90 text-primary-foreground hidden sm:inline-flex shadow-sm")}>
            Book Demo
          </Link>
        </div>
      </div>
    </nav>
  );
}
