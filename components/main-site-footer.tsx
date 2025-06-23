import Link from "next/link"
import Image from "next/image"
import { Shield, Award, Clock, Users } from "lucide-react"

export function MainSiteFooter() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-12 mt-16">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300">
                <Image src="/logo.png" alt="Irish Flag" width={28} height={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold">
                  <span className="text-brand-primary">Betting</span>
                  <span className="text-white"> Best</span>
                  <span className="text-brand-accent"> Irish</span>
                  <span className="text-brand-primary"> Sites</span>
                </h3>
                <p className="text-sm text-slate-400">Ireland's Premier Betting Guide</p>
              </div>
            </Link>
            <p className="text-slate-300 leading-relaxed mb-4">
              Your trusted source for comprehensive reviews of Ireland's top betting sites. We provide expert analysis,
              exclusive bonuses, and unbiased recommendations to help you make informed betting decisions.
            </p>
            <div className="flex items-center gap-4 text-sm text-slate-400">
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span>50,000+ Users Trust Us</span>
              </div>
              <div className="flex items-center gap-1">
                <Award className="w-4 h-4" />
                <span>Expert Reviewed</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-brand-primary">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-slate-300 hover:text-white transition-colors duration-300 flex items-center gap-2"
                >
                  <div className="w-1 h-1 bg-brand-primary rounded-full"></div>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/responsible-gaming"
                  className="text-slate-300 hover:text-white transition-colors duration-300 flex items-center gap-2"
                >
                  <div className="w-1 h-1 bg-brand-primary rounded-full"></div>
                  Responsible Gaming
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-policy"
                  className="text-slate-300 hover:text-white transition-colors duration-300 flex items-center gap-2"
                >
                  <div className="w-1 h-1 bg-brand-primary rounded-full"></div>
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-slate-300 hover:text-white transition-colors duration-300 flex items-center gap-2"
                >
                  <div className="w-1 h-1 bg-brand-primary rounded-full"></div>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Trust & Safety */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-brand-primary">Trust & Safety</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-slate-300">
                <Shield className="w-4 h-4 text-brand-primary" />
                <span className="text-sm">Licensed & Regulated</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Clock className="w-4 h-4 text-brand-primary" />
                <span className="text-sm">Fast & Secure</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Award className="w-4 h-4 text-brand-primary" />
                <span className="text-sm">Expert Verified</span>
              </div>
            </div>
          </div>
        </div>

        {/* Responsible Gambling Partners */}
        <div className="border-t border-slate-700 pt-8 mb-8">
          <h4 className="text-lg font-bold mb-6 text-center text-brand-primary">Responsible Gambling Partners</h4>
          <div className="flex flex-wrap justify-center items-center gap-6">
            <Link href="https://gambleaware.org/" className="group">
              <div className="bg-white rounded-xl p-3 shadow-medium group-hover:shadow-glow transition-all duration-300 transform group-hover:scale-105">
                <img src="/gamble.webp" alt="GambleAware" className="h-8 object-contain" />
              </div>
            </Link>
            <Link href="https://gamcare.org/" className="group">
              <div className="bg-white rounded-xl p-3 shadow-medium group-hover:shadow-glow transition-all duration-300 transform group-hover:scale-105">
                <img src="/gamecare.svg" alt="GamCare" className="h-8 object-contain" />
              </div>
            </Link>
            <Link href="https://gordonmoody.com/" className="group">
              <div className="bg-white rounded-xl p-3 shadow-medium group-hover:shadow-glow transition-all duration-300 transform group-hover:scale-105">
                <img src="/gordon.png" alt="Gordon Moody" className="h-8 object-contain" />
              </div>
            </Link>
            <Link href="https://gamblersanonymous.org/" className="group">
              <div className="bg-white rounded-xl p-3 shadow-medium group-hover:shadow-glow transition-all duration-300 transform group-hover:scale-105">
                <img src="/anonymos.avif" alt="Gamblers Anonymous" className="h-8 object-contain" />
              </div>
            </Link>
            <Link href="https://egba.org/" className="group">
              <div className="bg-white rounded-xl p-3 shadow-medium group-hover:shadow-glow transition-all duration-300 transform group-hover:scale-105">
                <img src="/egba.png" alt="EGBA" className="h-8 object-contain" />
              </div>
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 pt-6 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">© 2025 BettingBestIrishSites.com. All rights reserved.</p>
            <div className="flex items-center gap-4 text-sm text-slate-400">
              <span>Made with ❤️ in Ireland</span>
              <div className="flex gap-1">
                <div className="w-3 h-2 bg-brand-primary rounded-sm"></div>
                <div className="w-3 h-2 bg-white rounded-sm"></div>
                <div className="w-3 h-2 bg-brand-accent rounded-sm"></div>
              </div>
            </div>
          </div>
          <div className="mt-4 p-4 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-xl border border-red-500/30">
            <p className="text-red-300 font-bold text-sm mb-1">
              🔞 18+ | Irish players only | Gambling can be addictive — Play safe.
            </p>
            <p className="text-red-200 text-xs">
              If you or someone you know has a gambling problem, please seek help.
              <Link href="/responsible-gaming" className="underline hover:text-white ml-1">
                Get Support
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
