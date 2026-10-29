import React from 'react';
import { X, Phone, Send, MapPin, Calendar, Check, ExternalLink } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface FeaturedFlyerModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  onOpenBooking: (pkgTitle?: string) => void;
}

export const FeaturedFlyerModal: React.FC<FeaturedFlyerModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  onOpenBooking,
}) => {
  if (!isOpen) return null;

  const t = translations[currentLang];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative bg-white rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl border border-slate-200">
        {/* Modal Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white flex items-center justify-center transition-colors shadow-md"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* Image Column - 6 cols */}
          <div className="md:col-span-6 bg-[#081a33] p-4 flex items-center justify-center">
            <img
              src="/assets/aistudio/IMG_7642_d52468b9.jpeg"
              alt="Official Efada Umrah Season Poster"
              className="max-h-[80vh] w-auto object-contain rounded-lg shadow-lg"
            />
          </div>

          {/* Details Column - 6 cols */}
          <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-bold text-[#b4861e] uppercase tracking-wider block">
                {currentLang === 'am' ? 'ይፋዊ የዑምራ ማስታወቂያ' : 'Official Pilgrimage Release'}
              </span>

              <h3 className="text-2xl font-black text-[#0b2545] leading-snug">
                {currentLang === 'am'
                  ? 'በሶደቃዎት ዑምራ ይጓዙ! ከ 1 ዓመት የዑምራ ቪዛ ጋር'
                  : 'Travel for Umrah with your Sadaqah! With 1-Year Umrah Visa'}
              </h3>

              {/* Price Banner */}
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 flex items-baseline justify-between">
                <div>
                  <span className="text-[11px] text-amber-800 font-semibold block uppercase">
                    {currentLang === 'am' ? 'ሙሉ ዋጋ' : 'Total Price'}
                  </span>
                  <span className="text-3xl font-extrabold text-[#0b2545] tabular-nums">
                    130,000 ETB
                  </span>
                </div>
                <span className="text-xs font-bold text-amber-900 bg-amber-200/80 px-2 py-0.5 rounded">
                  {currentLang === 'am' ? 'ብር ብቻ' : 'Birr Only'}
                </span>
              </div>

              {/* Details List */}
              <div className="space-y-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#0b2545]" />
                  <span>
                    <strong>{currentLang === 'am' ? 'የጉዞ ጊዜ፡' : 'Dates:'}</strong>{' '}
                    {currentLang === 'am' ? 'ከህዳር 9 እስከ ህዳር 19' : 'Hidar 9 to Hidar 19'}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>
                    {currentLang === 'am' ? '07 ቀን መካ + 03 ቀን መዲና' : '07 Days Makkah + 03 Days Madinah'}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>
                    <strong>{currentLang === 'am' ? 'የዲን መሪ፡' : 'Religious Scholar:'}</strong>{' '}
                    {currentLang === 'am' ? 'ሼይክ ሰኢድ አል ሀበበ' : 'Sheikh Seid Al Habeb'}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#0b2545]" />
                  <span>
                    <strong>{currentLang === 'am' ? 'ቢሮ፡' : 'Office:'}</strong>{' '}
                    {currentLang === 'am'
                      ? 'ቤተል ሚና የገበያ ማዕከል 2ተኛ ፎቅ'
                      : 'Bethel Mina Shopping Center, 2nd Floor'}
                  </span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenBooking('በሶደቃዎት ዑምራ ይጓዙ! (130,000 ብር)');
                }}
                className="w-full py-3 bg-[#0b2545] hover:bg-[#133b6d] text-white font-bold text-xs rounded-lg transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <span>{currentLang === 'am' ? 'ይህንን ፓኬጅ አሁኑኑ ይያዙ' : 'Reserve This Package Now'}</span>
              </button>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <a
                  href="https://t.me/FuadMuna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 bg-sky-50 hover:bg-sky-100 text-sky-800 border border-sky-200 font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5 text-sky-600" />
                  <span>Telegram @FuadMuna</span>
                </a>

                <a
                  href="tel:0949337778"
                  className="py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5 tabular-nums"
                >
                  <Phone className="w-3.5 h-3.5 text-slate-600" />
                  <span>0949337778</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
