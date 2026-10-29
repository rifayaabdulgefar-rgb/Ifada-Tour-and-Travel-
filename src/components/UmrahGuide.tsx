import React, { useState } from 'react';
import { BookOpen, Sparkles, CheckCircle2, ChevronRight, HelpCircle } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface UmrahGuideProps {
  currentLang: Language;
}

export const UmrahGuide: React.FC<UmrahGuideProps> = ({ currentLang }) => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const t = translations[currentLang];

  const steps = [
    {
      num: '01',
      title: t.guide.step1Title,
      desc: t.guide.step1Desc,
      tips:
        currentLang === 'am'
          ? 'ገላን መታጠብ፣ ሽቶ ለሰውነት መቀባት (ለልብስ አይደለም)፣ ሁለት ረከዓ መስገድ እና "ለበይከሏሁመ ዑምረተን" ማለት።'
          : 'Perform Ghusl (ritual purification), wear two white unstitched cloths (men), make sincere intention at the Meeqat, and recite Talbiyah.',
    },
    {
      num: '02',
      title: t.guide.step2Title,
      desc: t.guide.step2Desc,
      tips:
        currentLang === 'am'
          ? 'ከጥቁሩ ድንጋይ ይጀምራል፣ በግራ ትከሻ ከዕባን በማድረግ 7 ዙር መዞር፣ በእያንዳንዱ ዙር ዱዓ ማድረግ፣ ሲጠናቀቅ ከመቃመ ኢብራሂም ጀርባ 2 ረከዓ መስገድ።'
          : 'Begin at Hajar al-Aswad, circumambulate the Kaaba 7 times anticlockwise with humility and supplication, then pray 2 Rakats behind Maqam Ibrahim.',
    },
    {
      num: '03',
      title: t.guide.step3Title,
      desc: t.guide.step3Desc,
      tips:
        currentLang === 'am'
          ? 'ከሶፋ ተራራ ጀምሮ ወደ መርዋ መሄድ አንድ ዙር ነው፣ ከመሻት ወደ ሶፋ መመለስ ሁለት ዙር ነው። በድምሩ 7 ዙር በዱዓ ይከናወናል።'
          : 'Begin at Mount Safa, walk towards Marwah (1 lap), return to Safa (2 laps), completing 7 laps total with devotion and dua.',
    },
    {
      num: '04',
      title: t.guide.step4Title,
      desc: t.guide.step4Desc,
      tips:
        currentLang === 'am'
          ? 'ወንዶች ሙሉ ፀጉራቸውን መላጨት የበለጠ ምንዳ አለው ወይም ማሳጠር ይችላሉ። ሴቶች የጣት ጫፍ ያህል ቆርጠው ኢህራማቸውን ያጠናቅቃሉ።'
          : 'Men shave (Halq) or trim (Taqsir) hair evenly; women clip approximately one fingertip length from the end of their hair to exit Ihram.',
    },
  ];

  return (
    <section id="guide" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#b4861e] uppercase tracking-wider">
            <BookOpen className="w-4 h-4 text-[#d4af37]" />
            <span>{currentLang === 'am' ? 'መንፈሳዊ ዝግጅት' : 'Spiritual Journey Guide'}</span>
          </div>
          <h2 className="text-3xl font-extrabold text-[#0b2545] tracking-tight">
            {t.guide.title}
          </h2>
          <p className="text-base text-slate-600">
            {t.guide.subtitle}
          </p>
        </div>

        {/* 4 Interactive Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const isSelected = activeStep === idx;

            return (
              <div
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`cursor-pointer p-6 rounded-2xl border transition-all text-left flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#0b2545] text-white border-[#0b2545] shadow-lg scale-102'
                    : 'bg-slate-50 text-slate-800 border-slate-200 hover:border-slate-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-2xl font-black tabular-nums ${
                        isSelected ? 'text-[#d4af37]' : 'text-slate-400'
                      }`}
                    >
                      {step.num}
                    </span>
                    {isSelected && (
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-white/10 px-2 py-0.5 rounded text-[#f4d068]">
                        {currentLang === 'am' ? 'ተመርጧል' : 'Active'}
                      </span>
                    )}
                  </div>

                  <h3
                    className={`text-lg font-bold mb-2 ${
                      isSelected ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {step.title}
                  </h3>

                  <p
                    className={`text-xs leading-relaxed mb-4 ${
                      isSelected ? 'text-slate-200' : 'text-slate-600'
                    }`}
                  >
                    {step.desc}
                  </p>
                </div>

                <div
                  className={`pt-4 border-t text-xs ${
                    isSelected
                      ? 'border-white/15 text-slate-300'
                      : 'border-slate-200 text-slate-500'
                  }`}
                >
                  <p className="font-semibold text-[11px] uppercase tracking-wider mb-1 text-[#d4af37]">
                    {currentLang === 'am' ? 'ጠቃሚ ማሳሰቢያ' : 'Scholarly Advice'}
                  </p>
                  <p className="text-[11px] leading-snug">{step.tips}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Scholar Support Callout */}
        <div className="mt-12 bg-amber-50/80 border border-amber-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#0b2545] text-[#d4af37] flex items-center justify-center font-bold text-xl shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#0b2545]">
                {currentLang === 'am'
                  ? 'ከሼይክ ሰኢድ አል ሀበበ ጋር የሚደረግ የቀጥታ መመሪያ'
                  : 'On-Site Ritual Assistance with Sheikh Seid Al Habeb'}
              </h4>
              <p className="text-xs text-slate-600 max-w-2xl mt-0.5">
                {currentLang === 'am'
                  ? 'የኢፋዳ ተጓዦች በሙሉ እያንዳንዱን ስርዓት በሼይክ ሰኢድ አል ሀበበ እና በልምድ ባካበቱ አስተባባሪዎች እየተመሩ በነፃነትና በእርጋታ ይፈፅማሉ።'
                  : 'Every Efada pilgrim is guided step-by-step through Ihram, Tawaf, and Sa’i with live translation and spiritual halaqas.'}
              </p>
            </div>
          </div>

          <a
            href="https://t.me/FuadMuna"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-[#0b2545] hover:bg-[#133b6d] text-white text-xs font-bold rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
          >
            <span>{currentLang === 'am' ? 'የዑምራ ጥያቄ አለዎት?' : 'Ask Scholar on Telegram'}</span>
            <ChevronRight className="w-4 h-4 text-[#d4af37]" />
          </a>
        </div>
      </div>
    </section>
  );
};
