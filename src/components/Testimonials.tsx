import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Language } from '../types';

interface TestimonialsProps {
  currentLang: Language;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ currentLang }) => {
  const reviews = [
    {
      name: currentLang === 'am' ? 'ሀጂ መሐመድ ኑር' : 'Haji Mohammed Nur',
      location: currentLang === 'am' ? 'አዲስ አበባ፣ ኮልፌ' : 'Kolfe, Addis Ababa',
      date: currentLang === 'am' ? 'ባለፈው የዑምራ ወቅት' : 'Recent Umrah Season',
      text:
        currentLang === 'am'
          ? 'ከኢፋዳ ጋር የነበረን የዑምራ ጉዞ እጅግ የተባረከ ነበር። በተለይም ከሼይክ ሰኢድ አል ሀበበ ጋር በየዕለቱ የተማርነው ትምህርት እና የዚያራ ጉብኝት ለህሊናችን ትልቅ እርካታ ሰጥቶናል። ቪዛችንም በ3 ቀናት ውስጥ ነው ያለቀው።'
          : 'Our Umrah journey with Efada was truly blessed. The daily guidance from Sheikh Seid Al Habeb and the detailed historical Ziyarah in Makkah and Madinah brought immense peace to our hearts. Our 1-year visa was endorsed seamlessly within days.',
      stars: 5,
    },
    {
      name: currentLang === 'am' ? 'ኡስታዝ አህመዲን ከድር' : 'Ustaz Ahmedin Kedir',
      location: currentLang === 'am' ? 'አዳማ' : 'Adama, Ethiopia',
      date: currentLang === 'am' ? 'የህዳር ተጓዥ' : 'November Pilgrim',
      text:
        currentLang === 'am'
          ? 'ሆቴሉ ለሀረም በጣም ቅርብ ስለነበር ለአባቴ ምንም ድካም አልነበረውም። አቶ ፉአድ (@FuadMuna) ከጅምሩ እስከ መጨረሻው በስልክና በቴሌግራም ሲከታተሉን ነበር። በ130,000 ብር ይህን የመሰለ አገልግሎት ማግኘት በጣም የሚያስመሰግን ነው።'
          : 'The hotel was wonderfully close to the Haram, allowing my elderly father to attend all five prayers without exhaustion. Agent Fuad followed up attentively from flight departure to arrival. Exceptional value for 130,000 ETB.',
      stars: 5,
    },
    {
      name: currentLang === 'am' ? 'እህት ፋጢማ ጀማል' : 'Sister Fatima Jemal',
      location: currentLang === 'am' ? 'ቦሌ፣ አዲስ አበባ' : 'Bole, Addis Ababa',
      date: currentLang === 'am' ? 'የቤተሰብ ጉዞ' : 'Family Pilgrimage',
      text:
        currentLang === 'am'
          ? 'የሳውዲ 1 ዓመት ሙሉ ቪዛ ማግኘታችን ለቀጣይ ጉዞዎቻችንም ትልቅ እድል ከፍቶልናል። የኢፋዳ የጉዞ አስተባባሪዎች በጅዳ ኤርፖርት በአማርኛ ተቀብለው ወደ ሆቴል ያደረሱን አያያዝ በጣም አስደስቶናል።'
          : 'Receiving the 1-year multi-entry Saudi visa opened future pilgrimage opportunities for our whole family. Being warmly welcomed in Amharic at Jeddah Airport and escorted directly to Makkah gave us total tranquility.',
      stars: 5,
    },
  ];

  return (
    <section className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#b4861e]">
            {currentLang === 'am' ? 'የተጓዦች ምስክርነት' : "Pilgrims' Reflections"}
          </span>
          <h2 className="text-3xl font-extrabold text-[#0b2545] tracking-tight">
            {currentLang === 'am' ? 'ከእኛ ጋር የተጓዙ ኢትዮጵያውያን ምን አሉ?' : 'Experiences from Ethiopian Pilgrims'}
          </h2>
          <p className="text-sm text-slate-600">
            {currentLang === 'am'
              ? 'በታማኝነት ያገለገልናቸው ተጓዦች እውነተኛ አስተያየቶች'
              : 'Authentic feedback from families and pilgrims guided by Efada Tour & Travel.'}
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-4">
                  {[...Array(rev.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <Quote className="w-6 h-6 text-slate-300 mb-2" />

                <p className="text-xs text-slate-700 leading-relaxed italic">
                  "{rev.text}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-slate-900">{rev.name}</h4>
                  <p className="text-[11px] text-slate-500">{rev.location}</p>
                </div>
                <span className="text-[10px] text-slate-400">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
