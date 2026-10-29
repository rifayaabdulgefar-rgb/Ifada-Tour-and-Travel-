import React, { useState } from 'react';
import { Phone, Send, MapPin, Globe, Menu, X, ArrowUpRight } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface HeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenBooking: (pkgTitle?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onLanguageChange,
  onOpenBooking,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[currentLang];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all">
      {/* Top Utility Announcement Bar */}
      <div className="bg-[#0b2545] text-white text-xs py-2 px-4 border-b border-[#133b6d]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          {/* Location & Schedule */}
          <div className="flex items-center gap-2 text-slate-200">
            <MapPin className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
            <span className="truncate">{t.topBar.location}</span>
          </div>

          {/* Social Media & Contact Quick Links */}
          <div className="flex items-center gap-4 text-xs">
            {/* Phone Numbers */}
            <a
              href="tel:0949337778"
              className="flex items-center gap-1.5 text-slate-200 hover:text-[#d4af37] transition-colors font-medium tabular-nums"
              title="Call Efada Tour and Travel"
            >
              <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>0949337778</span>
            </a>

            <span className="text-slate-500 hidden sm:inline">|</span>

            {/* Telegram Channel */}
            <a
              href="https://t.me/ifadatravelorg"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-slate-200 hover:text-sky-300 transition-colors"
              title="Join Telegram Channel: @ifadatravelorg"
            >
              <Send className="w-3.5 h-3.5 text-sky-400" />
              <span className="hidden md:inline">Telegram</span>
              <span className="text-sky-300 font-medium">@ifadatravelorg</span>
            </a>

            <span className="text-slate-500 hidden sm:inline">|</span>

            {/* Direct Agent Fuad on Telegram */}
            <a
              href="https://t.me/FuadMuna"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#f4d068] hover:text-white transition-colors"
              title="Contact Direct Agent Fuad: @FuadMuna"
            >
              <span className="font-semibold">@FuadMuna</span>
            </a>

            <span className="text-slate-500 hidden sm:inline">|</span>

            {/* TikTok Link */}
            <a
              href="https://www.tiktok.com/@ifadatravelorg?_r=1&_t=ZN-9AnXZpJrhKg"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-slate-200 hover:text-pink-300 transition-colors"
              title="Watch TikTok videos: @ifadatravelorg"
            >
              {/* TikTok Custom SVG */}
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.89 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.11V9.43a6.38 6.38 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.47c1.38.99 3.07 1.57 4.9 1.57V6.69z" />
              </svg>
              <span className="hidden lg:inline">TikTok</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar: One-Row, Three-Zone Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Brand Wordmark and Logo */}
          <a href="#" className="flex items-center gap-3 shrink-0 focus-visible:outline-2 focus-visible:outline-[#0b2545]">
            <img
              src="/assets/aistudio/IMG_7642_07e88117.jpeg"
              alt="Efada (Ifada) Tour and Travel Logo"
              className="h-12 w-auto object-contain rounded-sm shadow-xs"
            />
            <div className="hidden sm:flex flex-col">
              <span className="text-lg font-bold tracking-tight text-[#0b2545] leading-tight">
                {currentLang === 'am' ? 'ኢፋዳ የጉዞ እና ቱሪዝም' : 'Efada Tour & Travel'}
              </span>
              <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">
                {currentLang === 'am' ? 'የተፈቀደለት የዑምራ ወኪል' : 'Licensed Umrah Agency'}
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (4-5 single-line clean text links) */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700">
            <a
              href="#packages"
              className="hover:text-[#0b2545] hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0"
            >
              {t.nav.packages}
            </a>
            <a
              href="#special-offer"
              className="text-[#0b2545] font-semibold hover:text-[#d4af37] transition-colors whitespace-nowrap shrink-0 flex items-center gap-1"
            >
              <span>{t.nav.posterOffer}</span>
              <span className="text-[10px] bg-amber-100 text-amber-900 font-bold px-1.5 py-0.5 rounded-sm">130k ETB</span>
            </a>
            <a
              href="#guide"
              className="hover:text-[#0b2545] hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0"
            >
              {t.nav.guide}
            </a>
            <a
              href="#calculator"
              className="hover:text-[#0b2545] hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0"
            >
              {t.nav.calculator}
            </a>
            <a
              href="#contact"
              className="hover:text-[#0b2545] hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0"
            >
              {t.nav.contact}
            </a>
          </nav>

          {/* Zone 3: Language Toggle & Primary Action CTA */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Language Switcher Segmented Control */}
            <div className="flex items-center p-1 bg-slate-100 rounded-lg border border-slate-200">
              <button
                type="button"
                onClick={() => onLanguageChange('am')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                  currentLang === 'am'
                    ? 'bg-[#0b2545] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="አማርኛ ቋንቋ"
              >
                አማርኛ
              </button>
              <button
                type="button"
                onClick={() => onLanguageChange('en')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                  currentLang === 'en'
                    ? 'bg-[#0b2545] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="English Language"
              >
                EN
              </button>
            </div>

            {/* Primary Action CTA */}
            <button
              type="button"
              onClick={() => onOpenBooking()}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-[#0b2545] hover:bg-[#133b6d] rounded-lg shadow-xs hover:shadow-md transition-all whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#d4af37]"
            >
              <span>{t.nav.bookNow}</span>
              <ArrowUpRight className="w-4 h-4 text-[#d4af37]" />
            </button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 py-4 px-2 space-y-2 bg-white">
            <a
              href="#special-offer"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-[#0b2545] bg-amber-50 rounded-md"
            >
              ★ {t.nav.posterOffer} (130,000 ETB)
            </a>
            <a
              href="#packages"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-md"
            >
              {t.nav.packages}
            </a>
            <a
              href="#guide"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-md"
            >
              {t.nav.guide}
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-md"
            >
              {t.nav.calculator}
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-md"
            >
              {t.nav.contact}
            </a>

            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full text-center py-2.5 px-4 text-sm font-bold text-white bg-[#0b2545] rounded-lg"
              >
                {t.nav.bookNow}
              </button>

              <div className="flex items-center justify-around py-2 text-xs text-slate-600 bg-slate-50 rounded-lg">
                <a href="https://t.me/ifadatravelorg" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 font-semibold text-sky-600">
                  <Send className="w-3.5 h-3.5" /> Telegram
                </a>
                <a href="https://www.tiktok.com/@ifadatravelorg?_r=1&_t=ZN-9AnXZpJrhKg" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 font-semibold text-slate-900">
                  TikTok
                </a>
                <a href="tel:0949337778" className="flex items-center gap-1 font-semibold text-[#0b2545]">
                  <Phone className="w-3.5 h-3.5" /> 0949337778
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
