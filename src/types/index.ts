export type Language = 'am' | 'en';

export interface UmrahPackage {
  id: string;
  title: {
    en: string;
    am: string;
  };
  duration: {
    en: string;
    am: string;
  };
  makkahDays: number;
  madinahDays: number;
  dates: {
    en: string;
    am: string;
  };
  priceEtb: number;
  featured?: boolean;
  guide?: {
    en: string;
    am: string;
    title: {
      en: string;
      am: string;
    };
  };
  highlights: {
    en: string[];
    am: string[];
  };
  hotelMakkah: {
    en: string;
    am: string;
  };
  hotelMadinah: {
    en: string;
    am: string;
  };
  badge?: {
    en: string;
    am: string;
  };
}

export interface InquiryFormData {
  fullName: string;
  phoneNumber: string;
  telegramUsername?: string;
  pilgrimCount: number;
  preferredPackage: string;
  message?: string;
}
