import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedOfferSection } from './components/FeaturedOfferSection';
import { PackagesSection } from './components/PackagesSection';
import { CostEstimator } from './components/CostEstimator';
import { UmrahGuide } from './components/UmrahGuide';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FeaturedFlyerModal } from './components/FeaturedFlyerModal';
import { BookingModal } from './components/BookingModal';
import { Language } from './types';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('am'); // Defaulting to Amharic as requested by the Ethiopian agency!
  const [flyerModalOpen, setFlyerModalOpen] = useState<boolean>(false);
  const [bookingModalOpen, setBookingModalOpen] = useState<boolean>(false);
  const [selectedPackageForBooking, setSelectedPackageForBooking] = useState<string | undefined>();

  const handleOpenBooking = (pkgTitle?: string) => {
    setSelectedPackageForBooking(pkgTitle);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900 selection:bg-[#d4af37]/30 selection:text-[#0b2545]">
      {/* Top Navigation */}
      <Header
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        onOpenBooking={handleOpenBooking}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          currentLang={currentLang}
          onOpenBooking={handleOpenBooking}
          onOpenFlyerModal={() => setFlyerModalOpen(true)}
        />

        {/* Featured Seasonal Offer Section (Hidar 9-19 Special with Sheikh Seid Al Habeb) */}
        <FeaturedOfferSection
          currentLang={currentLang}
          onOpenBooking={handleOpenBooking}
          onOpenFlyerModal={() => setFlyerModalOpen(true)}
        />

        {/* All Umrah Packages */}
        <PackagesSection
          currentLang={currentLang}
          onOpenBooking={handleOpenBooking}
        />

        {/* Interactive Umrah Trip Cost Estimator */}
        <CostEstimator
          currentLang={currentLang}
          onOpenBooking={handleOpenBooking}
        />

        {/* Umrah Spiritual Rituals Guide */}
        <UmrahGuide
          currentLang={currentLang}
        />

        {/* Why Choose Efada */}
        <WhyChooseUs
          currentLang={currentLang}
        />

        {/* Ethiopian Pilgrims Testimonials */}
        <Testimonials
          currentLang={currentLang}
        />

        {/* Contact & Inquiry Form */}
        <ContactSection
          currentLang={currentLang}
        />
      </main>

      {/* Footer */}
      <Footer
        currentLang={currentLang}
        onOpenBooking={handleOpenBooking}
        onOpenFlyerModal={() => setFlyerModalOpen(true)}
      />

      {/* Modals */}
      <FeaturedFlyerModal
        isOpen={flyerModalOpen}
        onClose={() => setFlyerModalOpen(false)}
        currentLang={currentLang}
        onOpenBooking={handleOpenBooking}
      />

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        currentLang={currentLang}
        preselectedPackage={selectedPackageForBooking}
      />
    </div>
  );
}
