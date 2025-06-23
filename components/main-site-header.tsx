import Link from "next/link"
import Image from "next/image"
import { Shield, Award, TrendingUp } from "lucide-react"

export function MainSiteHeader() {
  return (
    <header className="relative">
      {/* Mobile Header */}
      <div className="md:hidden bg-white/95 backdrop-blur-lg border-b border-slate-200/50 shadow-soft">
        <div className="h-10 flex items-center justify-center px-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-primary rounded-xl flex items-center justify-center shadow-medium">
              <Image src="/logo.png" alt="Logo" width={16} height={16} className="w-4 h-4" />
            </div>
            <div className="text-center">
              <h1 className="text-sm font-bold leading-tight">
                <span className="text-brand-primary">Betting</span>
                <span className="text-slate-700"> Best</span>
                <span className="text-brand-accent"> Irish</span>
                <span className="text-brand-primary"> Sites</span>
              </h1>
              <p className="text-xs text-slate-500 font-medium">Expert Reviews 2025</p>
            </div>
          </Link>
        </div>
      </div>

      {/* Desktop/Tablet Header */}
      <div className="hidden md:block bg-white/95 backdrop-blur-lg border-b border-slate-200/50 shadow-soft">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            {/* Logo and Brand */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-8 h-8 bg-gradient-primary rounded-xl flex items-center justify-center shadow-medium group-hover:shadow-glow transition-all duration-300">
                <Image src="/logo.png" alt="Logo" width={20} height={20} className="w-5 h-5" />
              </div>
              <div>
                <h1 className="text-lg lg:text-xl font-bold">
                  <span className="text-brand-primary">Betting</span>
                  <span className="text-slate-700"> Best</span>
                  <span className="text-brand-accent"> Irish</span>
                  <span className="text-brand-primary"> Sites</span>
                </h1>
                <p className="text-xs text-slate-600 font-medium">Expert Reviews & Analysis 2025</p>
              </div>
            </Link>

            {/* Trust Indicators */}
            <div className="hidden lg:flex items-center gap-4">
              <div className="flex items-center gap-2 text-slate-600">
                <Shield className="w-4 h-4 text-brand-primary" />
                <span className="text-xs font-medium">Licensed & Regulated</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <Award className="w-4 h-4 text-brand-accent" />
                <span className="text-xs font-medium">Expert Reviewed</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <TrendingUp className="w-4 h-4 text-success" />
                <span className="text-xs font-medium">Updated Daily</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
