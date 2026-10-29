import React from 'react';
import {
  Calendar,
  MapPin,
  Phone,
  Send,
  UserCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface FeaturedOfferProps {
  currentLang: Language;
  onOpenBooking: (pkgTitle?: string) => void;
  onOpenFlyerModal: () => void;
}

export const FeaturedOfferSection: React.FC<FeaturedOfferProps> = ({
  currentLang,
  onOpenBooking,
  onOpenFlyerModal,
}) => {
  const t = translations[currentLang];

  return (
    <section id="special-offer" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Decorative subtle background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#b4861e] uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-[#d4af37]" />
            <span>{currentLang === 'am' ? 'ልዩ የቡድን ጥሪ' : 'Official Seasonal Special'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b2545] tracking-tight">
            {t.featuredFlyer.title}
          </h2>
          <p className="text-base text-slate-600">
            {t.featuredFlyer.subtitle}
          </p>
        </div>

        {/* Featured Big Showcase Card */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Visual Column - 5 cols: Authentic Poster */}
            <div className="lg:col-span-5 bg-[#0b2545] p-6 sm:p-8 flex flex-col justify-between items-center relative">
              <div
                className="w-full relative group cursor-pointer rounded-xl overflow-hidden shadow-lg border border-white/20"
                onClick={onOpenFlyerModal}
              >
                <img
                  src="/assets/aistudio/IMG_7642_d52468b9.jpeg"
                  alt="Efada Umrah Announcement Flyer"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-[#0b2545]/30 group-hover:bg-[#0b2545]/10 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 text-[#0b2545] text-xs font-bold py-2 px-3.5 rounded-md shadow-md flex items-center gap-1.5">
                    <ExternalLink className="w-3.5 h-3.5 text-[#d4af37]" />
                    {currentLang === 'am' ? 'ሙሉ ፖስተር ይመልከቱ' : 'View Full Image'}
                  </span>
                </div>
              </div>

              {/* Scholar Highlight Card */}
              <div className="w-full mt-6 p-4 rounded-xl bg-white/10 border border-white/15 text-white">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#d4af37] text-[#0b2545] flex items-center justify-center font-bold text-lg">
                    <UserCheck className="w-5 h-5 text-[#0b2545]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      {t.featuredFlyer.guideName}
                    </h4>
                    <p className="text-xs text-[#f4d068]">
                      {currentLang === 'am' ? 'መንፈሳዊ መመሪያ እና ትምህርት' : 'Spiritual Mentor & Ritual Guide'}
                    </p>
                  </div>
                </div>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                  {t.featuredFlyer.guideDesc}
                </p>
              </div>
            </div>

            {/* Details Column - 7 cols */}
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-8">
              {/* Header & Pricing */}
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-4 pb-6 border-b border-slate-100">
                  <div>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                      {currentLang === 'am' ? 'የተሟላ የጉዞ ዋጋ' : 'All-Inclusive Tour Fee'}
                    </span>
                    <span className="text-3xl sm:text-4xl font-extrabold text-[#0b2545] tabular-nums">
                      {t.featuredFlyer.price}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-medium text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                      {currentLang === 'am' ? 'የ 1 ዓመት ቪዛ ያካተተ' : '1-Year Visa Included'}
                    </span>
                  </div>
                </div>

                {/* Key Itinerary Numbers */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="flex items-center gap-2 text-slate-500 text-xs font-medium mb-1">
                      <Calendar className="w-4 h-4 text-[#0b2545]" />
                      <span>{currentLang === 'am' ? 'የጉዞ ቀናት' : 'Travel Dates'}</span>
                    </div>
                    <p className="text-sm font-bold text-slate-900">
                      {currentLang === 'am' ? 'ከህዳር 9 እስከ ህዳር 19' : 'Hidar 9 – Hidar 19'}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {currentLang === 'am' ? '10 ቀናት' : '10 Days Total'}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="flex items-center gap-2 text-slate-500 text-xs font-medium mb-1">
                      <MapPin className="w-4 h-4 text-[#0b2545]" />
                      <span>{currentLang === 'am' ? 'መካ አል-ሙከረማ' : 'Makkah'}</span>
                    </div>
                    <p className="text-sm font-bold text-slate-900">
                      {currentLang === 'am' ? '07 ቀን ቆይታ' : '7 Days Stay'}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {currentLang === 'am' ? 'ለሀረም ቅርብ ሆቴል' : 'Walk to Haram'}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="flex items-center gap-2 text-slate-500 text-xs font-medium mb-1">
                      <MapPin className="w-4 h-4 text-[#0b2545]" />
                      <span>{currentLang === 'am' ? 'መዲና አል-ሙነወራ' : 'Madinah'}</span>
                    </div>
                    <p className="text-sm font-bold text-slate-900">
                      {currentLang === 'am' ? '03 ቀን ቆይታ' : '3 Days Stay'}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {currentLang === 'am' ? 'የነቢዩ መስጊድ ቅርብ' : "Near Prophet's Mosque"}
                    </p>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    {currentLang === 'am' ? 'በፓኬጁ ውስጥ የተካተቱ አገልግሎቶች' : "Package Inclusions & Benefits"}
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{currentLang === 'am' ? 'የ1 ዓመት የሳውዲ ዑምራ ቪዛ' : '1-Year Saudi Umrah Multi-Entry Visa'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{currentLang === 'am' ? 'የኢትዮጵያ አየር መንገድ በረራ ድጋፍ' : 'Ethiopian Airlines flight coordination'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{currentLang === 'am' ? 'በሼይክ ሰኢድ አል ሀበበ የሚመራ የዲን ትምህርት' : 'Direct religious mentorship by Sheikh Seid'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{currentLang === 'am' ? 'የዚያራ ጉብኝቶች፡ ኡሁድ፣ ቁባእ እና ታሪካዊ ቦታዎች' : 'Historical Ziyarah to Uhud, Quba & sacred sites'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{currentLang === 'am' ? 'ምቹ የአየር ማቀዝቀዣ ያላቸው ዘመናዊ አውቶቡሶች' : 'Air-conditioned modern coaches between cities'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{currentLang === 'am' ? 'የ24/7 የኢፋዳ የቡድን አስተባባሪዎች' : '24/7 Amharic Ethiopian ground team assistance'}</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Office & Direct Action Buttons */}
              <div className="pt-6 border-t border-slate-200/80 space-y-4">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <MapPin className="w-4 h-4 text-[#0b2545] shrink-0" />
                  <span>
                    {currentLang === 'am'
                      ? 'ቢሮ፡ ቤተል ሚና የገበያ ማዕከል 2ተኛ ፎቅ፣ አዲስ አበባ'
                      : 'Office: Bethel Mina Shopping Center, 2nd Floor, Addis Ababa'}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => onOpenBooking('በሶደቃዎት ዑምራ ይጓዙ! (130,000 ብር)')}
                    className="px-6 py-3 bg-[#0b2545] hover:bg-[#133b6d] text-white text-xs font-bold rounded-lg shadow-sm hover:shadow-md transition-all flex items-center gap-2 shrink-0"
                  >
                    <span>{t.featuredFlyer.reserveThisOffer}</span>
                    <ArrowRight className="w-4 h-4 text-[#d4af37]" />
                  </button>

                  <a
                    href="https://t.me/FuadMuna"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-3 bg-sky-50 hover:bg-sky-100 text-sky-800 border border-sky-200 text-xs font-bold rounded-lg transition-colors flex items-center gap-2 shrink-0"
                  >
                    <Send className="w-4 h-4 text-sky-600" />
                    <span>{t.featuredFlyer.askQuestions}</span>
                  </a>

                  <a
                    href="tel:0949337778"
                    className="px-4 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 shrink-0 tabular-nums"
                  >
                    <Phone className="w-4 h-4 text-slate-600" />
                    <span>0949337778</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
