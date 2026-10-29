import React from 'react';
import { ShieldCheck, Users, Hotel, Headphones, HeartHandshake, Award } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface WhyChooseUsProps {
  currentLang: Language;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  const features = [
    {
      icon: ShieldCheck,
      title: t.whyUs.item1Title,
      desc: t.whyUs.item1Desc,
    },
    {
      icon: Users,
      title: t.whyUs.item2Title,
      desc: t.whyUs.item2Desc,
    },
    {
      icon: Hotel,
      title: t.whyUs.item3Title,
      desc: t.whyUs.item3Desc,
    },
    {
      icon: Headphones,
      title: t.whyUs.item4Title,
      desc: t.whyUs.item4Desc,
    },
    {
      icon: HeartHandshake,
      title: currentLang === 'am' ? 'ግልጽ እና ተመጣጣኝ ዋጋ' : 'Transparent Pricing in Birr',
      desc:
        currentLang === 'am'
          ? 'ምንም የተደበቀ ወጪ የለም፤ 130,000 ብር ሙሉ በረራ፣ ሆቴል እና ቪዛን ያካተተ ነው።'
          : 'Zero surprise fees. 130,000 ETB covers all scheduled flights, hotel stays, visa, and local transfers.',
    },
    {
      icon: Award,
      title: currentLang === 'am' ? 'ህጋዊ እና የተፈቀደለት ወኪል' : 'Fully Licensed Agency',
      desc:
        currentLang === 'am'
          ? 'በአዲስ አበባ ቤተል ሚና የገበያ ማዕከል 2ተኛ ፎቅ ላይ ባለው ይፋዊ ቢሮአችን በአካል ማረጋገጥ ይችላሉ።'
          : 'Officially certified travel & tourism agency operating at Bethel Mina Shopping Center, 2nd Floor.',
    },
  ];

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#b4861e]">
            {currentLang === 'am' ? 'የታማኝነት እና ጥራት መለያ' : 'Trust & Excellence'}
          </span>
          <h2 className="text-3xl font-extrabold text-[#0b2545] tracking-tight">
            {t.whyUs.title}
          </h2>
          <p className="text-base text-slate-600">
            {t.whyUs.subtitle}
          </p>
        </div>

        {/* 6 Feature Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, idx) => {
            const IconComponent = feat.icon;

            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#0b2545]/5 text-[#0b2545] flex items-center justify-center mb-5">
                    <IconComponent className="w-6 h-6 text-[#0b2545]" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
