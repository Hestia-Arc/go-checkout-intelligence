import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { ProductFlow } from './components/ProductFlow';
import { IntegrationSection } from './components/IntegrationSection';
import { IntelligenceSection } from './components/IntelligenceSection';
import { DashboardShowcase } from './components/DashboardShowcase';
import { UseCases } from './components/UseCases';
import { HowItWorks } from './components/HowItWorks';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { ConnectStoreModal } from './components/ConnectStoreModal';
import { SignInModal } from './components/SignInModal';
import { IntegrationsModal } from './components/IntegrationsModal';

export default function App() {
  const [connectModalOpen, setConnectModalOpen] = useState(false);
  const [signInModalOpen, setSignInModalOpen] = useState(false);
  const [integrationsModalOpen, setIntegrationsModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  const scrollToHowItWorks = () => {
    const el = document.getElementById('how-it-works');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProduct = () => {
    const el = document.getElementById('product');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#090D14] text-slate-100 flex flex-col font-sans selection:bg-indigo-600/30 selection:text-indigo-200">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-xs text-white shadow-xl animate-in slide-in-from-bottom-2 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 1. Navigation */}
      <Navbar
        onOpenConnect={() => setConnectModalOpen(true)}
        onOpenSignIn={() => setSignInModalOpen(true)}
        onOpenIntegrations={() => setIntegrationsModalOpen(true)}
      />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          onOpenConnect={() => setConnectModalOpen(true)}
          onOpenHowItWorks={scrollToHowItWorks}
        />

        {/* 3. Problem Section */}
        <ProblemSection />

        {/* 4. Product Explanation */}
        <ProductFlow />

        {/* 5. Integration Section */}
        <IntegrationSection
          onOpenIntegrations={() => setIntegrationsModalOpen(true)}
        />

        {/* 6. Intelligence Section */}
        <IntelligenceSection />

        {/* 7. Dashboard Preview Showcase */}
        <DashboardShowcase />

        {/* 8. Use Cases Section */}
        <UseCases />

        {/* 9. How It Works */}
        <HowItWorks />

        {/* 10. Final CTA */}
        <CTA
          onOpenConnect={() => setConnectModalOpen(true)}
          onExploreProduct={scrollToProduct}
        />
      </main>

      {/* 11. Footer */}
      <Footer
        onOpenConnect={() => setConnectModalOpen(true)}
        onOpenIntegrations={() => setIntegrationsModalOpen(true)}
      />

      {/* Modals */}
      <ConnectStoreModal
        isOpen={connectModalOpen}
        onClose={() => setConnectModalOpen(false)}
      />

      <SignInModal
        isOpen={signInModalOpen}
        onClose={() => setSignInModalOpen(false)}
        onLoginSuccess={() => showToast('Authenticated into Merchant Console Sandbox')}
      />

      <IntegrationsModal
        isOpen={integrationsModalOpen}
        onClose={() => setIntegrationsModalOpen(false)}
        onConnectClick={() => setConnectModalOpen(true)}
      />
    </div>
  );
}
