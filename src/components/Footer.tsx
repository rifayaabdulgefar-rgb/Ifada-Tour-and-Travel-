import React from 'react';
import { MapPin, Phone, Send, ArrowUp, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface FooterProps {
  currentLang: Language;
  onOpenBooking: (pkgTitle?: string) => void;
  onOpenFlyerModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentLang,
  onOpenBooking,
  onOpenFlyerModal,
}) => {
  const t = translations[currentLang];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#081a33] text-white border-t border-[#132c52]">
      {/* Upper Footer: Brand, Links, Contact */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Column - 4 cols */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/aistudio/IMG_7642_07e88117.jpeg"
                alt="Efada (Ifada) Tour and Travel Logo"
                className="h-12 w-auto object-contain rounded-xs shadow-xs"
              />
              <div>
                <span className="text-lg font-bold tracking-tight text-white block leading-snug">
                  {currentLang === 'am' ? 'ኢፋዳ የጉዞ እና ቱሪዝም' : 'Efada Tour & Travel'}
                </span>
                <span className="text-xs text-[#d4af37] font-medium block">
                  {currentLang === 'am' ? 'የተፈቀደለት የዑምራ ወኪል' : 'Licensed Umrah Agency'}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              {currentLang === 'am'
                ? 'በሶደቃዎት ዑምራ ይጓዙ! የ1 ዓመት ሙሉ ቪዛ፣ በረራ፣ ቅርብ ሆቴሎች እና በታዋቂ ኡለማዎች (ሼይክ ሰኢድ አል ሀበበ) የሚመራ የተባረከ መንፈሳዊ ጉዞ።'
                : 'Your trusted Ethiopian pilgrimage partner for sacred Umrah journeys to Makkah and Madinah with guaranteed 1-year visas and scholarly guidance.'}
            </p>

            {/* Social Icons integrated directly into footer as requested */}
            <div className="pt-2 flex items-center gap-3">
              {/* Telegram Channel */}
              <a
                href="https://t.me/ifadatravelorg"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-sky-500 hover:text-white text-sky-400 flex items-center justify-center transition-colors"
                title="Telegram Channel: @ifadatravelorg"
              >
                <Send className="w-4 h-4" />
              </a>

              {/* Telegram Agent Fuad */}
              <a
                href="https://t.me/FuadMuna"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 h-9 rounded-lg bg-white/10 hover:bg-[#d4af37] hover:text-[#081a33] text-[#f4d068] text-xs font-semibold flex items-center gap-1.5 transition-colors"
                title="Telegram Agent: @FuadMuna"
              >
                <Send className="w-3.5 h-3.5" />
                <span>@FuadMuna</span>
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@ifadatravelorg?_r=1&_t=ZN-9AnXZpJrhKg"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-pink-600 hover:text-white text-slate-200 flex items-center justify-center transition-colors"
                title="TikTok: @ifadatravelorg"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.89 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.11V9.43a6.38 6.38 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.47c1.38.99 3.07 1.57 4.9 1.57V6.69z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column - 3 cols */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#d4af37]">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <a href="#special-offer" className="hover:text-white transition-colors">
                  {t.nav.posterOffer} (130,000 ETB)
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-white transition-colors">
                  {t.nav.packages}
                </a>
              </li>
              <li>
                <a href="#guide" className="hover:text-white transition-colors">
                  {t.nav.guide}
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-white transition-colors">
                  {t.nav.calculator}
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenFlyerModal}
                  className="hover:text-white transition-colors text-left"
                >
                  {currentLang === 'am' ? 'የወቅቱ ይፋዊ ፖስተር' : 'Official Announcement Poster'}
                </button>
              </li>
            </ul>
          </div>

          {/* Office & Direct Contact Column - 5 cols */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#d4af37]">
              {currentLang === 'am' ? 'የቢሮ አድራሻ እና ስልክ' : 'Office & Contacts'}
            </h4>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>
                  {currentLang === 'am'
                    ? 'ቤተል ሚና የገበያ ማዕከል 2ተኛ ፎቅ፣ አዲስ አበባ፣ ኢትዮጵያ'
                    : 'Bethel Mina Shopping Center, 2nd Floor, Addis Ababa, Ethiopia'}
                </span>
              </div>

              <div className="flex items-center gap-3 pt-1">
                <Phone className="w-4 h-4 text-[#d4af37] shrink-0" />
                <div className="flex items-center gap-3 tabular-nums">
                  <a href="tel:0949337778" className="hover:text-white transition-colors font-semibold">
                    0949337778
                  </a>
                  <span>·</span>
                  <a href="tel:0945771112" className="hover:text-white transition-colors font-semibold">
                    0945771112
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1 text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{t.footer.licensed}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal / Copyright Strip */}
      <div className="border-t border-[#132c52] py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} {t.footer.rights}</p>
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
          >
            <span>{currentLang === 'am' ? 'ወደ ላይ ይመለሱ' : 'Back to Top'}</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#d4af37]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
