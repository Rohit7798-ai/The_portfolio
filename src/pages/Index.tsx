import React, { lazy, Suspense, memo } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';

// Lazy load heavy components for better performance
const About = lazy(() => import('../components/About'));
const TechStack = lazy(() => import('../components/TechStack'));
const Portfolio = lazy(() => import('../components/Portfolio'));
const Resume = lazy(() => import('../components/Resume'));
const Footer = lazy(() => import('../components/Footer'));
const FloatingTechStack = lazy(() => import('../components/FloatingTechStack'));

// Loading fallback component
const LoadingFallback = memo(() => (
  <div className="min-h-[200px] flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-forest-600"></div>
  </div>
));
LoadingFallback.displayName = 'LoadingFallback';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Suspense fallback={<LoadingFallback />}>
        <About />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <TechStack />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Portfolio />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Resume />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Footer />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <FloatingTechStack />
      </Suspense>
    </div>
  );
};

export default Index;
