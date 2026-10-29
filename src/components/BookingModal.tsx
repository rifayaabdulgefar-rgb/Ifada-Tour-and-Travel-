import React, { useState, useEffect } from 'react';
import { X, Send, Phone, CheckCircle2, ShieldCheck, Calendar, Users } from 'lucide-react';
import { Language, InquiryFormData } from '../types';
import { translations } from '../translations';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  preselectedPackage?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  preselectedPackage,
}) => {
  const t = translations[currentLang];

  const [form, setForm] = useState<InquiryFormData>({
    fullName: '',
    phoneNumber: '',
    telegramUsername: '',
    pilgrimCount: 1,
    preferredPackage: preselectedPackage || 'Special Sadaqah Umrah 130,000 ETB',
    message: '',
  });

  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (preselectedPackage) {
      setForm((prev) => ({ ...prev, preferredPackage: preselectedPackage }));
    }
  }, [preselectedPackage]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  const handleSendTelegram = () => {
    const text = encodeURIComponent(
      `Assalamu Alaykum Efada Travel! I want to book Umrah:\n` +
      `• Name: ${form.fullName || 'Pilgrim'}\n` +
      `• Phone: ${form.phoneNumber || 'Not provided'}\n` +
      `• Package: ${form.preferredPackage}\n` +
      `• Travelers: ${form.pilgrimCount}\n` +
      `• Notes: ${form.message || 'Ready to register'}`
    );
    window.open(`https://t.me/FuadMuna?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200">
        {/* Header */}
        <div className="bg-[#0b2545] text-white p-6 relative">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="text-xs font-bold uppercase tracking-wider text-[#d4af37] block">
            {currentLang === 'am' ? 'ቦታ ማስያዣ' : 'Umrah Registration'}
          </span>
          <h3 className="text-xl font-bold text-white mt-1">
            {currentLang === 'am' ? 'የዑምራ ቦታዎን አሁኑኑ ያረጋግጡ' : 'Reserve Your Umrah Journey'}
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            {currentLang === 'am'
              ? 'ኢፋዳ የጉዞ እና ቱሪዝም · ቤተል ሚና የገበያ ማዕከል 2ተኛ ፎቅ'
              : 'Efada Tour & Travel · Bethel Mina Shopping Center 2nd Floor'}
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          {isSuccess ? (
            <div className="text-center py-6 space-y-4">
              <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto" />
              <h4 className="text-lg font-bold text-slate-900">
                {currentLang === 'am' ? 'ቦታዎ በተሳካ ሁኔታ ተመዝግቧል!' : 'Booking Request Confirmed!'}
              </h4>
              <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                {currentLang === 'am'
                  ? 'የኢፋዳ የጉዞ አስተባባሪ ፉአድ (@FuadMuna) ዝርዝሩን ለማረጋገጥ በስልክ ቁጥርዎ ወይም በቴሌግራም ያገኝዎታል።'
                  : 'Our coordinator Fuad (@FuadMuna) will contact your phone number to complete passport documentation and payment.'}
              </p>

              <div className="pt-2 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={handleSendTelegram}
                  className="w-full py-3 bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{currentLang === 'am' ? 'በቴሌግራም ከፉአድ ጋር ይገናኙ' : 'Chat with Fuad on Telegram'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setIsSuccess(false);
                    onClose();
                  }}
                  className="w-full py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900"
                >
                  {currentLang === 'am' ? 'ዝጋ' : 'Close Window'}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {t.contact.nameLabel} *
                </label>
                <input
                  type="text"
                  required
                  value={form.fullName}
                  onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                  placeholder={currentLang === 'am' ? 'ሙሉ ስምዎን ያስገቡ' : 'Your full name'}
                  className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0b2545]"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {t.contact.phoneLabel} *
                </label>
                <input
                  type="tel"
                  required
                  value={form.phoneNumber}
                  onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })}
                  placeholder="0949337778"
                  className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0b2545] tabular-nums"
                />
              </div>

              {/* Pilgrims & Package */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t.contact.pilgrimsCountLabel}
                  </label>
                  <select
                    value={form.pilgrimCount}
                    onChange={(e) => setForm({ ...form, pilgrimCount: Number(e.target.value) })}
                    className="w-full px-3 py-2.5 text-xs rounded-lg border border-slate-300 bg-white"
                  >
                    <option value={1}>1 {currentLang === 'am' ? 'ተጓዥ' : 'Person'}</option>
                    <option value={2}>2 {currentLang === 'am' ? 'ተጓዦች' : 'Persons'}</option>
                    <option value={3}>3 {currentLang === 'am' ? 'ተጓዦች' : 'Persons'}</option>
                    <option value={4}>4 {currentLang === 'am' ? 'ተጓዦች' : 'Persons'}</option>
                    <option value={6}>6+ {currentLang === 'am' ? 'ቤተሰብ' : 'Family'}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {currentLang === 'am' ? 'የመረጡት ፓኬጅ' : 'Package'}
                  </label>
                  <input
                    type="text"
                    value={form.preferredPackage}
                    onChange={(e) => setForm({ ...form, preferredPackage: e.target.value })}
                    className="w-full px-3 py-2.5 text-xs rounded-lg border border-slate-300 bg-slate-50 text-slate-800 font-medium truncate"
                  />
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {currentLang === 'am' ? 'ተጨማሪ ማስታወሻ (አስገዳጅ ያልሆነ)' : 'Special Requests (Optional)'}
                </label>
                <textarea
                  rows={2}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder={
                    currentLang === 'am'
                      ? 'የተለየ ክፍል ፍላጎት፣ የፓስፖርት ሁኔታ...'
                      : 'Room sharing preference, visa status...'
                  }
                  className="w-full px-3.5 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0b2545] resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col gap-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#0b2545] hover:bg-[#133b6d] text-white font-bold text-xs rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <span>{currentLang === 'am' ? 'ቦታዬን መዝግብ' : 'Confirm Registration'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleSendTelegram}
                  className="w-full py-2.5 bg-sky-50 hover:bg-sky-100 text-sky-800 border border-sky-200 text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5 text-sky-600" />
                  <span>{currentLang === 'am' ? 'በቴሌግራም ወዲያውኑ ላክ (@FuadMuna)' : 'Instant Telegram Booking (@FuadMuna)'}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
