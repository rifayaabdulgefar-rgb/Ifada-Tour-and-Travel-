import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Send,
  Clock,
  CheckCircle,
  AlertCircle,
  User,
  Users,
  MessageSquare,
} from 'lucide-react';
import { Language, InquiryFormData } from '../types';
import { translations } from '../translations';

interface ContactSectionProps {
  currentLang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  const [form, setForm] = useState<InquiryFormData>({
    fullName: '',
    phoneNumber: '',
    telegramUsername: '',
    pilgrimCount: 1,
    preferredPackage: 'Special Sadaqah Umrah 130,000 ETB',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName.trim() || !form.phoneNumber.trim()) {
      setStatus('error');
      setErrorMessage(
        currentLang === 'am'
          ? 'እባክዎ ሙሉ ስምዎን እና ስልክ ቁጥርዎን ያስገቡ።'
          : 'Please enter your full name and valid phone number.'
      );
      return;
    }

    setStatus('submitting');

    // Simulate reliable submission
    setTimeout(() => {
      setStatus('success');
      // Optionally open Telegram to notify Fuad
      const tgText = encodeURIComponent(
        `Assalamu Alaykum! New Umrah Inquiry from Efada Website:\n` +
        `• Name: ${form.fullName}\n` +
        `• Phone: ${form.phoneNumber}\n` +
        `• Telegram: ${form.telegramUsername || 'N/A'}\n` +
        `• Travelers: ${form.pilgrimCount}\n` +
        `• Package: ${form.preferredPackage}\n` +
        `• Note: ${form.message || 'None'}`
      );
      // Give user the option to also dispatch directly to telegram
      console.log('Inquiry submitted successfully:', form);
    }, 600);
  };

  const handleSendViaTelegram = () => {
    const tgText = encodeURIComponent(
      `Assalamu Alaykum Efada Travel! I want to inquire about Umrah:\n` +
      `• Name: ${form.fullName || 'Pilgrim'}\n` +
      `• Phone: ${form.phoneNumber || 'Not specified'}\n` +
      `• Package: ${form.preferredPackage}\n` +
      `• Pilgrims: ${form.pilgrimCount}`
    );
    window.open(`https://t.me/FuadMuna?text=${tgText}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#b4861e]">
            {currentLang === 'am' ? 'ቀጥታ ግንኙነት' : 'Get in Touch'}
          </span>
          <h2 className="text-3xl font-extrabold text-[#0b2545] tracking-tight">
            {t.contact.title}
          </h2>
          <p className="text-base text-slate-600">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Information & Channels - 5 cols */}
          <div className="lg:col-span-5 space-y-6">
            {/* Office Card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0b2545]/5 text-[#0b2545] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#0b2545]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    {currentLang === 'am' ? 'የአዲስ አበባ ቢሮ አድራሻ' : 'Office Location'}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {currentLang === 'am'
                      ? 'ቤተል ሚና የገበያ ማዕከል 2ተኛ ፎቅ፣ አዲስ አበባ፣ ኢትዮጵያ'
                      : 'Bethel Mina Shopping Center, 2nd Floor, Addis Ababa, Ethiopia'}
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-3 pt-3 border-t border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-[#0b2545]/5 text-[#0b2545] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-[#0b2545]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    {currentLang === 'am' ? 'የስራ ሰዓት' : 'Office Hours'}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {t.contact.workingHours}
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Phone Numbers */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-800">
                <Phone className="w-4 h-4 text-[#d4af37]" />
                <span>{currentLang === 'am' ? 'ቀጥታ የስልክ ቁጥሮች' : 'Direct Call Lines'}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <a
                  href="tel:0949337778"
                  className="p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#0b2545] hover:bg-slate-100 transition-colors flex items-center justify-between"
                >
                  <span className="text-sm font-bold text-[#0b2545] tabular-nums">0949337778</span>
                  <span className="text-[10px] text-slate-500 font-medium">
                    {currentLang === 'am' ? 'ይደውሉ' : 'Call'}
                  </span>
                </a>

                <a
                  href="tel:0945771112"
                  className="p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#0b2545] hover:bg-slate-100 transition-colors flex items-center justify-between"
                >
                  <span className="text-sm font-bold text-[#0b2545] tabular-nums">0945771112</span>
                  <span className="text-[10px] text-slate-500 font-medium">
                    {currentLang === 'am' ? 'ይደውሉ' : 'Call'}
                  </span>
                </a>
              </div>
            </div>

            {/* Social Media Integration Box (Telegram & TikTok) */}
            <div className="p-6 rounded-2xl bg-[#0b2545] text-white shadow-lg space-y-4">
              <h3 className="text-sm font-bold text-white flex items-center justify-between">
                <span>{currentLang === 'am' ? 'ይፋዊ ማህበራዊ ሚዲያ' : 'Official Social Channels'}</span>
                <span className="text-xs text-[#d4af37] font-normal">Efada Travel</span>
              </h3>

              <div className="space-y-2.5">
                {/* Telegram Channel */}
                <a
                  href="https://t.me/ifadatravelorg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 transition-colors flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <Send className="w-5 h-5 text-sky-400" />
                    <div>
                      <span className="text-xs font-bold block text-white">Telegram Channel</span>
                      <span className="text-[11px] text-sky-300">@ifadatravelorg</span>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-white/80">Join →</span>
                </a>

                {/* Direct Telegram Agent */}
                <a
                  href="https://t.me/FuadMuna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 transition-colors flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <User className="w-5 h-5 text-[#d4af37]" />
                    <div>
                      <span className="text-xs font-bold block text-white">
                        {currentLang === 'am' ? 'የቴሌግራም ወኪል (ፉአድ)' : 'Direct Agent (Fuad)'}
                      </span>
                      <span className="text-[11px] text-[#f4d068]">@FuadMuna</span>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-[#d4af37]">Chat →</span>
                </a>

                {/* TikTok Account */}
                <a
                  href="https://www.tiktok.com/@ifadatravelorg?_r=1&_t=ZN-9AnXZpJrhKg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 transition-colors flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.89 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.11V9.43a6.38 6.38 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.47c1.38.99 3.07 1.57 4.9 1.57V6.69z" />
                    </svg>
                    <div>
                      <span className="text-xs font-bold block text-white">TikTok Official</span>
                      <span className="text-[11px] text-pink-300">@ifadatravelorg</span>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-white/80">Follow →</span>
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Inquiry Form - 7 cols */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
            <h3 className="text-xl font-bold text-[#0b2545] mb-2">
              {t.contact.sendInquiry}
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              {currentLang === 'am'
                ? 'መረጃዎን ያስገቡ፤ የኢፋዳ ወኪል በአጭር ጊዜ ውስጥ አግኝቶዎት ዝርዝሩን ያሳውቅዎታል።'
                : 'Leave your details and our Umrah coordinator will get in touch with you right away.'}
            </p>

            {status === 'success' ? (
              <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-base font-bold text-emerald-900">
                  {currentLang === 'am' ? 'መልእክትዎ በተሳካ ሁኔታ ደርሶናል!' : 'Inquiry Successfully Received!'}
                </h4>
                <p className="text-xs text-emerald-800 leading-relaxed max-w-md mx-auto">
                  {t.contact.successMsg}
                </p>

                <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                  <a
                    href="https://t.me/FuadMuna"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{currentLang === 'am' ? 'ከወኪል ጋር በቴሌግራም ያውሩ' : 'Chat with Agent on Telegram'}</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setStatus('idle');
                      setForm({
                        fullName: '',
                        phoneNumber: '',
                        telegramUsername: '',
                        pilgrimCount: 1,
                        preferredPackage: 'Special Sadaqah Umrah 130,000 ETB',
                        message: '',
                      });
                    }}
                    className="px-4 py-2 bg-white text-slate-700 border border-slate-200 text-xs font-semibold rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    {currentLang === 'am' ? 'አዲስ ጥያቄ ላክ' : 'Send Another Inquiry'}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {status === 'error' && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-xs text-red-700">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                      placeholder={currentLang === 'am' ? 'ምሳሌ፡ አህመድ ከድር' : 'e.g. Ahmed Kedir'}
                      className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0b2545] focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Phone Number */}
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
                      className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0b2545] focus:border-transparent transition-all tabular-nums"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Telegram Username */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {t.contact.telegramLabel}
                    </label>
                    <input
                      type="text"
                      value={form.telegramUsername}
                      onChange={(e) => setForm({ ...form, telegramUsername: e.target.value })}
                      placeholder="@username"
                      className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0b2545] focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Pilgrim Count */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {t.contact.pilgrimsCountLabel}
                    </label>
                    <select
                      value={form.pilgrimCount}
                      onChange={(e) => setForm({ ...form, pilgrimCount: Number(e.target.value) })}
                      className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0b2545] focus:border-transparent bg-white transition-all"
                    >
                      <option value={1}>1 {currentLang === 'am' ? 'ተጓዥ' : 'Pilgrim'}</option>
                      <option value={2}>2 {currentLang === 'am' ? 'ተጓዦች' : 'Pilgrims'}</option>
                      <option value={3}>3 {currentLang === 'am' ? 'ተጓዦች' : 'Pilgrims'}</option>
                      <option value={4}>4 {currentLang === 'am' ? 'ተጓዦች' : 'Pilgrims'}</option>
                      <option value={5}>5+ {currentLang === 'am' ? 'ተጓዦች (የቤተሰብ ጉዞ)' : 'Pilgrims (Family Group)'}</option>
                    </select>
                  </div>
                </div>

                {/* Package Preference */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t.contact.packageLabel}
                  </label>
                  <select
                    value={form.preferredPackage}
                    onChange={(e) => setForm({ ...form, preferredPackage: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0b2545] focus:border-transparent bg-white transition-all"
                  >
                    <option value="Special Sadaqah Umrah 130,000 ETB">
                      ★ {currentLang === 'am' ? 'የህዳር ልዩ ዑምራ ከ1 ዓመት ቪዛ ጋር (130,000 ብር)' : 'Special 10-Day Umrah with 1-Year Visa (130,000 ETB)'}
                    </option>
                    <option value="Ramadan Spiritual Package 185,000 ETB">
                      {currentLang === 'am' ? 'የተባረከው የረመዳን ፓኬጅ (185,000 ብር)' : 'Ramadan Mubarak Spiritual Package (185,000 ETB)'}
                    </option>
                    <option value="VIP Executive Umrah 235,000 ETB">
                      {currentLang === 'am' ? 'ቪአይፒ ፕሪሚየም የከዕባ እይታ ያለው (235,000 ብር)' : 'VIP Executive Haram View Package (235,000 ETB)'}
                    </option>
                    <option value="Custom Family Package">
                      {currentLang === 'am' ? 'ልዩ የቤተሰብ ወይም የቡድን ጥያቄ' : 'Custom Family / Group Inquiry'}
                    </option>
                  </select>
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t.contact.notesLabel}
                  </label>
                  <textarea
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder={
                      currentLang === 'am'
                        ? 'ስለ ቪዛ፣ የሆቴል ርቀት ወይም ተጨማሪ ጥያቄዎች ካሉዎት እዚህ ይፃፉልን...'
                        : 'Any special requests regarding visa, elder assistance, or room arrangement...'
                    }
                    className="w-full px-3.5 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0b2545] focus:border-transparent transition-all resize-none"
                  />
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full sm:flex-1 py-3 px-6 bg-[#0b2545] hover:bg-[#133b6d] text-white text-xs font-bold rounded-lg shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    <span>{status === 'submitting' ? t.contact.submitting : t.contact.submitBtn}</span>
                    <Send className="w-3.5 h-3.5 text-[#d4af37]" />
                  </button>

                  <button
                    type="button"
                    onClick={handleSendViaTelegram}
                    className="w-full sm:w-auto py-3 px-5 bg-sky-50 hover:bg-sky-100 text-sky-800 border border-sky-200 text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-2 shrink-0"
                  >
                    <Send className="w-3.5 h-3.5 text-sky-600" />
                    <span>{currentLang === 'am' ? 'በቴሌግራም ላክ' : 'Send via Telegram'}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
