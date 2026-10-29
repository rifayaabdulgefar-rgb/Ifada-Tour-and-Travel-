import React, { useState } from 'react';
import { Calendar, MapPin, Check, ArrowRight, Star, Clock } from 'lucide-react';
import { Language, UmrahPackage } from '../types';
import { umrahPackages } from '../data/packages';
import { translations } from '../translations';

interface PackagesSectionProps {
  currentLang: Language;
  onOpenBooking: (pkgTitle?: string) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({
  currentLang,
  onOpenBooking,
}) => {
  const [filter, setFilter] = useState<'all' | 'featured' | 'vip'>('all');
  const t = translations[currentLang];

  const filteredPackages = umrahPackages.filter((pkg) => {
    if (filter === 'featured') return pkg.featured;
    if (filter === 'vip') return pkg.id === 'executive-vip-umrah';
    return true;
  });

  return (
    <section id="packages" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#b4861e]">
              {currentLang === 'am' ? 'የተሟሉ የጉዞ አማራጮች' : 'Curated Pilgrimage Offerings'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b2545] tracking-tight">
              {t.packages.sectionTitle}
            </h2>
            <p className="text-base text-slate-600">
              {t.packages.sectionSubtitle}
            </p>
          </div>

          {/* Interactive Filter Segmented Control (Allowed per constitution) */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg self-start md:self-auto shrink-0 border border-slate-200">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {currentLang === 'am' ? 'ሁሉም ፓኬጆች' : 'All Packages'}
            </button>
            <button
              type="button"
              onClick={() => setFilter('featured')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                filter === 'featured'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {currentLang === 'am' ? 'የወቅቱ ተመራጭ' : 'Seasonal Featured'}
            </button>
            <button
              type="button"
              onClick={() => setFilter('vip')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                filter === 'vip'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {currentLang === 'am' ? 'ቪአይፒ' : 'VIP Deluxe'}
            </button>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg) => {
            const isFeatured = pkg.featured;

            return (
              <div
                key={pkg.id}
                className={`flex flex-col justify-between rounded-2xl bg-white border transition-all duration-200 ${
                  isFeatured
                    ? 'border-[#d4af37] ring-2 ring-[#d4af37]/30 shadow-xl relative'
                    : 'border-slate-200 hover:border-slate-300 shadow-xs hover:shadow-md'
                }`}
              >
                {/* Visual Header */}
                <div className="relative h-48 rounded-t-2xl overflow-hidden bg-slate-900">
                  <img
                    src={
                      pkg.id === 'featured-hidar-special'
                        ? '/assets/aistudio/IMG_7642_d52468b9.jpeg'
                        : pkg.id === 'ramadan-spiritual'
                        ? '/src/assets/images/makkah_kaaba_grand_mosque_1792768721246.jpg'
                        : '/src/assets/images/madinah_prophet_mosque_1792768720838.jpg'
                    }
                    alt={pkg.title[currentLang]}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b2545]/90 via-[#0b2545]/30 to-transparent" />

                  {/* Clean unboxed tag */}
                  <div className="absolute top-3 left-3 text-xs font-bold text-white bg-[#0b2545]/80 backdrop-blur-xs px-2.5 py-1 rounded-sm border border-white/20">
                    {pkg.duration[currentLang]}
                  </div>

                  {isFeatured && (
                    <div className="absolute top-3 right-3 text-xs font-bold text-[#0b2545] bg-[#d4af37] px-2.5 py-1 rounded-sm shadow-xs flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-[#0b2545]" />
                      <span>{t.packages.featuredBadge}</span>
                    </div>
                  )}

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="text-xs text-[#f4d068] font-medium flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{pkg.dates[currentLang]}</span>
                    </p>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-900 leading-snug">
                      {pkg.title[currentLang]}
                    </h3>

                    {/* Breakdown */}
                    <div className="mt-3 flex items-center gap-3 text-xs text-slate-500 font-medium">
                      <span>{pkg.makkahDays} {t.packages.daysMakkah}</span>
                      <span>·</span>
                      <span>{pkg.madinahDays} {t.packages.daysMadinah}</span>
                    </div>

                    {/* Scholar Guide note if present */}
                    {pkg.guide && (
                      <div className="mt-4 p-3 bg-amber-50/70 border border-amber-200/60 rounded-lg text-xs text-amber-950">
                        <span className="font-bold">{pkg.guide[currentLang]}</span>
                        <p className="text-amber-800 text-[11px] mt-0.5">
                          {pkg.guide.title[currentLang]}
                        </p>
                      </div>
                    )}

                    {/* Hotel Stays */}
                    <div className="mt-4 space-y-1.5 text-xs text-slate-600">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-3.5 h-3.5 text-[#0b2545] shrink-0 mt-0.5" />
                        <span><strong>{currentLang === 'am' ? 'መካ፡' : 'Makkah:'}</strong> {pkg.hotelMakkah[currentLang]}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <MapPin className="w-3.5 h-3.5 text-[#0b2545] shrink-0 mt-0.5" />
                        <span><strong>{currentLang === 'am' ? 'መዲና፡' : 'Madinah:'}</strong> {pkg.hotelMadinah[currentLang]}</span>
                      </div>
                    </div>

                    {/* Key Highlights */}
                    <div className="mt-5 space-y-2">
                      <p className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                        {currentLang === 'am' ? 'ዋና ዋና አገልግሎቶች' : 'Highlights'}
                      </p>
                      <ul className="space-y-1.5 text-xs text-slate-600">
                        {pkg.highlights[currentLang].slice(0, 4).map((hl, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="leading-tight">{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Pricing & CTA */}
                  <div className="pt-6 border-t border-slate-100 flex items-center justify-between gap-4">
                    <div>
                      <span className="text-[11px] text-slate-500 block">
                        {t.packages.perPerson}
                      </span>
                      <span className="text-2xl font-extrabold text-[#0b2545] tabular-nums">
                        {pkg.priceEtb.toLocaleString()} ETB
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => onOpenBooking(pkg.title[currentLang])}
                      className={`px-4 py-2.5 text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 shrink-0 ${
                        isFeatured
                          ? 'bg-[#0b2545] hover:bg-[#133b6d] text-white shadow-xs'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
                      }`}
                    >
                      <span>{t.packages.bookPackage}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
