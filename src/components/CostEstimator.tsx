import React, { useState } from 'react';
import { Calculator, Users, Hotel, ShieldCheck, Send, Phone, Check } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface CostEstimatorProps {
  currentLang: Language;
  onOpenBooking: (pkgTitle?: string) => void;
}

export const CostEstimator: React.FC<CostEstimatorProps> = ({
  currentLang,
  onOpenBooking,
}) => {
  const [pilgrims, setPilgrims] = useState<number>(2);
  const [occupancy, setOccupancy] = useState<'quad' | 'triple' | 'double'>('quad');
  const [hotelTier, setHotelTier] = useState<'standard' | 'premium' | 'vip'>('standard');
  const [includeVisa, setIncludeVisa] = useState<boolean>(true);

  const t = translations[currentLang];

  // Price calculations based on realistic Ethiopian Umrah market rates
  // Base package ~ 130,000 ETB for standard quad sharing with visa
  const calculateTotal = () => {
    let basePerPerson = 95000; // Base flights + transport + logistics

    // Visa cost
    if (includeVisa) {
      basePerPerson += 35000; // 1-year multi-entry visa
    }

    // Occupancy adjustment
    if (occupancy === 'triple') basePerPerson += 12000;
    if (occupancy === 'double') basePerPerson += 25000;

    // Hotel tier adjustment
    if (hotelTier === 'premium') basePerPerson += 25000;
    if (hotelTier === 'vip') basePerPerson += 65000;

    const total = basePerPerson * pilgrims;
    return {
      perPerson: basePerPerson,
      total,
    };
  };

  const { perPerson, total } = calculateTotal();

  const handleTelegramQuote = () => {
    const text = encodeURIComponent(
      `As-salamu alaykum Efada Travel! I estimated an Umrah trip:\n` +
      `• Pilgrims: ${pilgrims}\n` +
      `• Occupancy: ${occupancy}\n` +
      `• Tier: ${hotelTier}\n` +
      `• Visa Included: ${includeVisa ? 'Yes (1-Year Visa)' : 'No'}\n` +
      `• Estimated Total: ${total.toLocaleString()} ETB\n` +
      `Please let me know how to proceed with booking.`
    );
    window.open(`https://t.me/FuadMuna?text=${text}`, '_blank');
  };

  return (
    <section id="calculator" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0b2545] uppercase tracking-wider">
            <Calculator className="w-4 h-4 text-[#d4af37]" />
            <span>{currentLang === 'am' ? 'የበጀት እቅድ' : 'Budget Planner'}</span>
          </div>
          <h2 className="text-3xl font-extrabold text-[#0b2545] tracking-tight">
            {t.calculator.title}
          </h2>
          <p className="text-sm text-slate-600">
            {t.calculator.subtitle}
          </p>
        </div>

        {/* Calculator Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-lg p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Input Controls - 7 cols */}
            <div className="lg:col-span-7 space-y-6">
              {/* Pilgrim Count */}
              <div>
                <label className="flex items-center justify-between text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                  <span className="flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-[#0b2545]" />
                    {t.calculator.pilgrimsLabel}
                  </span>
                  <span className="text-base text-[#0b2545] font-extrabold tabular-nums">
                    {pilgrims} {currentLang === 'am' ? 'ተጓዦች' : 'Persons'}
                  </span>
                </label>
                <div className="flex items-center gap-3">
                  {[1, 2, 4, 6, 8].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setPilgrims(num)}
                      className={`flex-1 py-2 text-xs font-bold rounded-lg border transition-all ${
                        pilgrims === num
                          ? 'bg-[#0b2545] text-white border-[#0b2545] shadow-xs'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400'
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>

              {/* Room Occupancy */}
              <div>
                <label className="flex items-center gap-1.5 text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                  <Hotel className="w-4 h-4 text-[#0b2545]" />
                  {t.calculator.roomTypeLabel}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => setOccupancy('quad')}
                    className={`p-3 text-left rounded-lg border transition-all ${
                      occupancy === 'quad'
                        ? 'border-[#0b2545] bg-[#0b2545]/5 text-[#0b2545] font-bold'
                        : 'border-slate-200 hover:border-slate-300 text-slate-700'
                    }`}
                  >
                    <span className="block">{currentLang === 'am' ? 'ባለ 4 አልጋ (Quad)' : 'Quad (4-Bed)'}</span>
                    <span className="text-[11px] text-slate-500 font-normal">
                      {currentLang === 'am' ? 'ተመጣጣኝ ዋጋ' : 'Best Value'}
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setOccupancy('triple')}
                    className={`p-3 text-left rounded-lg border transition-all ${
                      occupancy === 'triple'
                        ? 'border-[#0b2545] bg-[#0b2545]/5 text-[#0b2545] font-bold'
                        : 'border-slate-200 hover:border-slate-300 text-slate-700'
                    }`}
                  >
                    <span className="block">{currentLang === 'am' ? 'ባለ 3 አልጋ (Triple)' : 'Triple (3-Bed)'}</span>
                    <span className="text-[11px] text-slate-500 font-normal">
                      {currentLang === 'am' ? 'ምቹ ክፍል' : 'Balanced'}
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setOccupancy('double')}
                    className={`p-3 text-left rounded-lg border transition-all ${
                      occupancy === 'double'
                        ? 'border-[#0b2545] bg-[#0b2545]/5 text-[#0b2545] font-bold'
                        : 'border-slate-200 hover:border-slate-300 text-slate-700'
                    }`}
                  >
                    <span className="block">{currentLang === 'am' ? 'ባለ 2 አልጋ (Double)' : 'Double / Private'}</span>
                    <span className="text-[11px] text-slate-500 font-normal">
                      {currentLang === 'am' ? 'ለጥንዶች/ቤተሰብ' : 'Couple / Private'}
                    </span>
                  </button>
                </div>
              </div>

              {/* Hotel Tier */}
              <div>
                <label className="flex items-center gap-1.5 text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                  <Hotel className="w-4 h-4 text-[#0b2545]" />
                  {t.calculator.hotelTierLabel}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => setHotelTier('standard')}
                    className={`p-3 text-left rounded-lg border transition-all ${
                      hotelTier === 'standard'
                        ? 'border-[#0b2545] bg-[#0b2545]/5 text-[#0b2545] font-bold'
                        : 'border-slate-200 hover:border-slate-300 text-slate-700'
                    }`}
                  >
                    <span className="block">Standard 4★</span>
                    <span className="text-[11px] text-slate-500 font-normal">
                      {currentLang === 'am' ? 'በእግር 400 ሜ' : 'Walking dist.'}
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setHotelTier('premium')}
                    className={`p-3 text-left rounded-lg border transition-all ${
                      hotelTier === 'premium'
                        ? 'border-[#0b2545] bg-[#0b2545]/5 text-[#0b2545] font-bold'
                        : 'border-slate-200 hover:border-slate-300 text-slate-700'
                    }`}
                  >
                    <span className="block">Premium 4★+</span>
                    <span className="text-[11px] text-slate-500 font-normal">
                      {currentLang === 'am' ? 'ከሀረም ደጃፍ' : 'Close Plaza'}
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setHotelTier('vip')}
                    className={`p-3 text-left rounded-lg border transition-all ${
                      hotelTier === 'vip'
                        ? 'border-[#0b2545] bg-[#0b2545]/5 text-[#0b2545] font-bold'
                        : 'border-slate-200 hover:border-slate-300 text-slate-700'
                    }`}
                  >
                    <span className="block">VIP 5★</span>
                    <span className="text-[11px] text-slate-500 font-normal">
                      {currentLang === 'am' ? 'ክሎክ ታወር / ቅንጡ' : 'Clock Tower view'}
                    </span>
                  </button>
                </div>
              </div>

              {/* Visa Toggle */}
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span className="text-xs font-semibold text-slate-800">
                    {t.calculator.visaLabel}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setIncludeVisa(!includeVisa)}
                  className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${
                    includeVisa
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-200 text-slate-700'
                  }`}
                >
                  {includeVisa ? (currentLang === 'am' ? 'የተካተተ ✓' : 'Included ✓') : (currentLang === 'am' ? 'አያስፈልግም' : 'Excluded')}
                </button>
              </div>
            </div>

            {/* Results & CTA Panel - 5 cols */}
            <div className="lg:col-span-5 bg-[#0b2545] text-white p-6 sm:p-8 rounded-xl flex flex-col justify-between space-y-6">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#d4af37] font-semibold block">
                  {t.calculator.estimatedTotal}
                </span>
                <p className="text-3xl sm:text-4xl font-extrabold text-white mt-1 tabular-nums">
                  {total.toLocaleString()} <span className="text-lg font-medium text-[#d4af37]">ETB</span>
                </p>

                <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                  <span>{t.calculator.perPersonAvg}:</span>
                  <span className="font-bold text-white tabular-nums">
                    {perPerson.toLocaleString()} ETB
                  </span>
                </div>
              </div>

              {/* Inclusions summary */}
              <div className="space-y-1.5 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>{pilgrims} {currentLang === 'am' ? 'የተጓዦች ሙሉ በረራ እና ሆቴል' : 'Travelers flight & hotel'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>{includeVisa ? (currentLang === 'am' ? 'የ1 ዓመት ሙሉ ቪዛ' : '1-Year Saudi Umrah Visa') : (currentLang === 'am' ? 'ቪዛ የሌለው' : 'Without Visa')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>{currentLang === 'am' ? 'መካ እና መዲና የዚያራ ጉብኝቶች' : 'Makkah & Madinah Ziyarah'}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-2 pt-2">
                <button
                  type="button"
                  onClick={handleTelegramQuote}
                  className="w-full py-3 bg-[#d4af37] hover:bg-[#e5c052] text-[#081a33] font-bold text-xs rounded-lg transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>{t.calculator.bookQuoteTelegram}</span>
                </button>

                <a
                  href="tel:0949337778"
                  className="w-full py-2.5 bg-white/10 hover:bg-white/20 text-white font-medium text-xs rounded-lg transition-colors flex items-center justify-center gap-2 border border-white/20"
                >
                  <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>{t.calculator.bookQuoteCall} (0949337778)</span>
                </a>
              </div>

              <p className="text-[10px] text-slate-400 leading-tight">
                {t.calculator.disclaimer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
