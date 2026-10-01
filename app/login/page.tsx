import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LockKeyhole, ArrowRight } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center py-20 text-center px-4 relative overflow-hidden bg-slate-50 dark:bg-slate-900/50">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-md bg-card p-10 rounded-3xl border border-border/50 shadow-2xl flex flex-col items-center">
        <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
          <LockKeyhole size={40} />
        </div>
        <h1 className="text-3xl font-bold mb-3 tracking-tight">Sign In to Your Portal</h1>
        <p className="text-muted-foreground mb-10 text-center">
          Select the product platform you want to log into.
        </p>
        
        <div className="grid gap-4 w-full">
          <a 
            href="https://test.smartbridgeedu.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={cn(buttonVariants({ size: "lg" }), "w-full text-lg h-14 shadow-lg shadow-primary/20 flex justify-between items-center px-6 group")}
          >
            <span>SmartBridgeEdu Portal</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="https://test.smarthouserent.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={cn(buttonVariants({ size: "lg", variant: "outline" }), "w-full text-lg h-14 border-amber-500/30 hover:bg-amber-500/10 text-foreground flex justify-between items-center px-6 group shadow-sm")}
          >
            <span>Proptech Portal</span>
            <ArrowRight size={20} className="text-amber-500 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
}
