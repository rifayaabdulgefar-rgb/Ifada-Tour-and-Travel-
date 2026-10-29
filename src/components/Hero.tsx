import React from 'react';
import { ShieldCheck, Compass, Calendar, ArrowRight, Eye, PhoneCall, Send } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface HeroProps {
  currentLang: Language;
  onOpenBooking: (pkgTitle?: string) => void;
  onOpenFlyerModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  currentLang,
  onOpenBooking,
  onOpenFlyerModal,
}) => {
  const t = translations[currentLang];

  return (
    <section className="relative bg-[#081a33] text-white overflow-hidden">
      {/* Background Image Container with Measured High-Contrast Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/makkah_kaaba_grand_mosque_1792768721246.jpg"
          alt="Holy Kaaba Makkah Al-Mukarramah during golden hour"
          className="w-full h-full object-cover object-center opacity-45 transform scale-105 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        {/* Measured dark gradient scrim for WCAG AA contrast across all screen sizes */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#081a33] via-[#081a33]/90 to-[#081a33]/60 sm:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#081a33] via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Copy - 7 cols */}
          <div className="lg:col-span-7 space-y-6">
            {/* Kicker - Unboxed Clean Metadata */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-[#d4af37]">
              <span className="w-2 h-2 rounded-full bg-[#d4af37]" />
              <span className="uppercase">{t.hero.kicker}</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-balance text-white">
              {t.hero.title}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              {t.hero.subtitle}
            </p>

            {/* Featured Highlight Strip */}
            <div className="p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-wider text-[#d4af37] font-semibold">
                  {t.hero.specialPriceLabel}
                </p>
                <p className="text-2xl sm:text-3xl font-extrabold text-white tabular-nums">
                  {t.hero.specialPrice}
                </p>
              </div>

              <div className="text-xs text-slate-300 space-y-1">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#d4af37] shrink-0" />
                  <span>
                    {currentLang === 'am' ? 'ከህዳር 9 እስከ ህዳር 19' : 'Hidar 9 – Hidar 19 (10 Days)'}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-[#d4af37] shrink-0" />
                  <span>
                    {currentLang === 'am' ? '07 ቀን መካ · 03 ቀን መዲና' : '7 Days Makkah · 3 Days Madinah'}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => onOpenBooking('በሶደቃዎት ዑምራ ይጓዙ! (130,000 ብር)')}
                className="px-6 py-3.5 bg-[#d4af37] hover:bg-[#e5c052] text-[#081a33] font-bold text-sm rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-2 shrink-0"
              >
                <span>{t.hero.bookUmrahCta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onOpenFlyerModal}
                className="px-5 py-3.5 bg-white/15 hover:bg-white/25 text-white font-medium text-sm rounded-lg border border-white/25 backdrop-blur-xs transition-colors flex items-center gap-2 shrink-0"
              >
                <Eye className="w-4 h-4 text-[#d4af37]" />
                <span>{t.hero.viewFlyerCta}</span>
              </button>

              <a
                href="https://t.me/FuadMuna"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3.5 text-xs text-sky-300 hover:text-white font-semibold transition-colors flex items-center gap-1.5"
              >
                <Send className="w-4 h-4" />
                <span>Telegram: @FuadMuna</span>
              </a>
            </div>
          </div>

          {/* Hero Visual Card - 5 cols (Featuring the authentic official poster) */}
          <div className="lg:col-span-5">
            <div className="relative group cursor-pointer" onClick={onOpenFlyerModal}>
              <div className="absolute -inset-1 bg-gradient-to-r from-[#d4af37] to-amber-600 rounded-2xl blur-sm opacity-40 group-hover:opacity-75 transition duration-500" />
              <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-white/20 shadow-2xl">
                {/* Poster Image */}
                <img
                  src="/assets/aistudio/IMG_7642_d52468b9.jpeg"
                  alt="Official Efada Umrah Tour Announcement Poster featuring Sheikh Seid Al Habeb"
                  className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-300"
                />

                {/* Subtle Hover Overlay indicating click to zoom */}
                <div className="absolute inset-0 bg-[#081a33]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                  <span className="px-4 py-2 bg-white text-[#081a33] font-bold text-xs rounded-lg shadow-lg flex items-center gap-2">
                    <Eye className="w-4 h-4 text-[#d4af37]" />
                    {currentLang === 'am' ? 'ፖስተሩን ለማጉላት ይጫኑ' : 'Click to View Full Poster'}
                  </span>
                </div>

                {/* Bottom label bar */}
                <div className="bg-[#0b2545] p-3 border-t border-[#1a4073] flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-[#d4af37] font-bold">130,000 ETB</span>
                    <span className="text-slate-400">·</span>
                    <span className="text-slate-200">
                      {currentLang === 'am' ? 'በሼይክ ሰኢድ አል ሀበበ' : 'Sheikh Seid Al Habeb'}
                    </span>
                  </div>
                  <span className="text-[11px] text-amber-300 underline font-medium">
                    {currentLang === 'am' ? 'ይመልከቱ' : 'View'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Proof of Service KPI Bar (Clean unboxed design, no pills) */}
        <div className="mt-16 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-[#d4af37]">
              <ShieldCheck className="w-5 h-5 shrink-0" />
              <span className="text-sm font-bold text-white">{t.hero.statVisa}</span>
            </div>
            <p className="text-xs text-slate-400">{t.hero.statVisaSub}</p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-[#d4af37]">
              <Compass className="w-5 h-5 shrink-0" />
              <span className="text-sm font-bold text-white">{t.hero.statScholars}</span>
            </div>
            <p className="text-xs text-slate-400">{t.hero.statScholarsSub}</p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-[#d4af37]">
              <Calendar className="w-5 h-5 shrink-0" />
              <span className="text-sm font-bold text-white">
                {currentLang === 'am' ? '10 ቀናት የተሟላ ጉዞ' : '10-Day Complete Tour'}
              </span>
            </div>
            <p className="text-xs text-slate-400">
              {currentLang === 'am' ? '07 ቀን መካ + 03 ቀን መዲና' : '7 Days Makkah + 3 Madinah'}
            </p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-[#d4af37]">
              <PhoneCall className="w-5 h-5 shrink-0" />
              <span className="text-sm font-bold text-white tabular-nums">0949337778</span>
            </div>
            <p className="text-xs text-slate-400">
              {currentLang === 'am' ? 'ቤተል ሚና 2ኛ ፎቅ' : 'Bethel Mina 2nd Floor'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
