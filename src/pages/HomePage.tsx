// pages/HomePage.tsx
import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSectionHome } from '@/components/sections/HeroSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { DemoSection } from '@/components/sections/DemoSection';
import { CTASection } from '@/components/sections/CTASection';

export const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <main id="main-content">
        <HeroSectionHome />
        <StatsSection />
        <DemoSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

