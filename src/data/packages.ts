import { UmrahPackage } from '../types';

export const umrahPackages: UmrahPackage[] = [
  {
    id: 'featured-hidar-special',
    title: {
      en: 'Special Sadaqah Umrah with 1-Year Visa',
      am: 'በሶደቃዎት ዑምራ ይጓዙ! ከ 1 ዓመት ቪዛ ጋር',
    },
    duration: {
      en: '10 Days Journey',
      am: 'የ 10 ቀናት ጉዞ',
    },
    makkahDays: 7,
    madinahDays: 3,
    dates: {
      en: 'Hidar 9 – Hidar 19',
      am: 'ከህዳር 9 እስከ ህዳር 19',
    },
    priceEtb: 130000,
    featured: true,
    guide: {
      en: 'Sheikh Seid Al Habeb',
      am: 'ሼይክ ሰኢድ አል ሀበበ',
      title: {
        en: 'Renowned Scholar & Spiritual Guide',
        am: 'ታዋቂ የዲን መምህር እና የጉዞ መሪ',
      },
    },
    hotelMakkah: {
      en: 'Standard 4-Star (400m from Haram plaza)',
      am: 'ባለ 4 ኮከብ ሆቴል (ከሀረም በእግር 400 ሜትር ርቀት)',
    },
    hotelMadinah: {
      en: 'Al-Madinah Central (Near Bab Al-Salam)',
      am: 'የመዲና ማዕከላዊ ሆቴል (ለሰላም በር እጅግ ቅርብ)',
    },
    highlights: {
      en: [
        'Complete 1-Year Multi-Entry Saudi Umrah Visa',
        'Direct Flight coordination with Ethiopian Airlines',
        '07 Days in Makkah Al-Mukarramah',
        '03 Days in Madinah Al-Munawwarah',
        'Guided by Sheikh Seid Al Habeb with daily spiritual halaqas',
        'Historical Ziyarah: Mount Uhud, Quba Mosque, Jabal al-Nour',
        'Dedicated 24/7 Amharic speaking support team in Saudi Arabia',
      ],
      am: [
        'የ 1 ዓመት ሙሉ የሳውዲ አረቢያ ዑምራ ቪዛ',
        'የኢትዮጵያ አየር መንገድ የቀጥታ በረራ ማመቻቸት',
        '07 ቀን በተከበረችው መካ አል-ሙከረማ',
        '03 ቀን በተቀደሰችው መዲና አል-ሙነወራ',
        'በሼይክ ሰኢድ አል ሀበበ የሚመራ አስተማሪ እና መንፈሳዊ ጉዞ',
        'የተሟላ የዚያራ ጉብኝት፡ ኡሁድ፣ ቁባእ መስጊድ፣ ጀበል ኑር',
        '24/7 የኢፋዳ አስተባባሪዎች በቦታው ላይ የሚሰጡት አገልግሎት',
      ],
    },
    badge: {
      en: 'Official Featured Offer',
      am: 'የወቅቱ ይፋዊ ጥሪ',
    },
  },
  {
    id: 'ramadan-spiritual',
    title: {
      en: 'Ramadan Mubarak Spiritual Immersion',
      am: 'የተባረከው የረመዳን የዑምራ ፓኬጅ',
    },
    duration: {
      en: '15 Days Pilgrimage',
      am: 'የ 15 ቀናት የተባረከ ቆይታ',
    },
    makkahDays: 10,
    madinahDays: 5,
    dates: {
      en: 'First & Second Ashra of Ramadan',
      am: 'የረመዳን የመጀመሪያ እና ሁለተኛ አስርቶች',
    },
    priceEtb: 185000,
    hotelMakkah: {
      en: 'Grand Makkah Hotel (Haram View Available)',
      am: 'ግራንድ መካ ሆቴል (ከሀረም ጥቂት እርምጃዎች)',
    },
    hotelMadinah: {
      en: 'Rove Hotel Madinah (Northern Courtyard)',
      am: 'ሮቭ ሆቴል መዲና (በሰሜናዊው የነቢዩ መስጊድ አቅጣጫ)',
    },
    highlights: {
      en: [
        '1-Year Multi-Entry Umrah Visa included',
        'Taraweeh & Tahajjud prayers in the Holy Harams',
        'Suhoor & Iftar buffet arrangements',
        'Full historical Ziyarah in Makkah and Madinah',
        'Full assistance for elder pilgrims and wheelchairs if requested',
      ],
      am: [
        'የ1 ዓመት ሙሉ ቪዛ ያካተተ',
        'የተራዊህ እና ተሀጁድ ሰላቶችን በተቀደሰው ሀረም የመስገድ እድል',
        'የኢፍጣር እና የሱሁር ዝግጅት ድጋፍ',
        'የተሟላ የዚያራ ጉብኝት በመካ እና መዲና',
        'ለአረጋውያን ልዩ ክትትልና ድጋፍ',
      ],
    },
    badge: {
      en: 'Ramadan Special',
      am: 'የረመዳን ልዩ',
    },
  },
  {
    id: 'executive-vip-umrah',
    title: {
      en: 'Executive VIP Luxury Umrah',
      am: 'ቪአይፒ ፕሪሚየም የዑምራ ፓኬጅ',
    },
    duration: {
      en: '10 Days Luxury Journey',
      am: 'የ 10 ቀናት ቪአይፒ ጉዞ',
    },
    makkahDays: 7,
    madinahDays: 3,
    dates: {
      en: 'Flexible Year-Round Departure',
      am: 'በዓመቱ ሙሉ በተመቻችሁ ቀን የሚጀመር',
    },
    priceEtb: 235000,
    hotelMakkah: {
      en: 'Clock Royal Tower / Swissotel (Front Haram View)',
      am: 'ክሎክ ሮያል ታወር / ስዊስሆቴል (ቀጥታ የከዕባ እይታ ያለው)',
    },
    hotelMadinah: {
      en: 'The Oberoi / Dar Al Taqwa Madinah',
      am: 'ዘ ኦበሮይ / ዳር አል ተቅዋ መዲና',
    },
    highlights: {
      en: [
        '1-Year Express Visa processing & Fast-Track VIP handling',
        '5-Star Luxury Front-Row Haram View suites',
        'Private Luxury GMC / Mercedes transfer throughout Saudi Arabia',
        'Private VIP scholar guide for rituals and exclusive Ziyarah',
        'Luggage doorstep-to-doorstep direct concierge',
      ],
      am: [
        'የ1 ዓመት አፋጣኝ ቪዛ እና የኤርፖርት ቪአይፒ አቀባበል',
        'ባለ 5 ኮከብ ቅንጡ የከዕባ እይታ ያለው ክፍል',
        'የግል ጂኤምሲ ወይም ሜርሴዲስ መኪና ዝውውር በመካና መዲና',
        'የግል የዲን መምህር የዑምራ ስርዓት አፈፃፀም መመሪያ',
        'የሻንጣ እና ሙሉ ሎጂስቲክስ እንክብካቤ',
      ],
    },
    badge: {
      en: 'Executive VIP',
      am: 'ፕሪሚየም ቪአይፒ',
    },
  },
];
