import React, { useState } from 'react';
import { Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onOpenConnect: () => void;
  onOpenSignIn: () => void;
  onOpenIntegrations: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenConnect,
  onOpenSignIn,
  onOpenIntegrations,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-[#090D14]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="flex items-center gap-2.5 text-base sm:text-lg font-bold tracking-tight text-white hover:text-indigo-300 transition-colors"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-indigo-600/90 text-white font-mono text-xs font-semibold shadow-sm">
            CI
          </span>
          <span className="tracking-tight font-semibold">Checkout Intelligence</span>
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a
            href="#product"
            className="hover:text-white transition-colors"
          >
            Product
          </a>
          <a
            href="#how-it-works"
            className="hover:text-white transition-colors"
          >
            How it works
          </a>
          <a
            href="#integrations"
            onClick={(e) => {
              // Smooth scroll or open modal if clicked with intent
            }}
            className="hover:text-white transition-colors"
          >
            Integrations
          </a>
          <a
            href="#intelligence"
            className="hover:text-white transition-colors"
          >
            Insights
          </a>
          <a
            href="#dashboard"
            className="hover:text-white transition-colors"
          >
            Dashboard
          </a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenSignIn}
            className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-indigo-500"
          >
            Sign in
          </button>
          <button
            onClick={onOpenConnect}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-sm shadow-indigo-950 transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-indigo-400"
          >
            <span>Connect your store</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenConnect}
            className="px-3 py-1.5 text-xs font-semibold text-white bg-indigo-600 rounded-lg whitespace-nowrap"
          >
            Connect
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-slate-400 hover:text-white rounded-md focus-visible:outline-2 focus-visible:outline-indigo-500"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-[#0C121D] px-4 py-4 space-y-3">
          <nav className="flex flex-col space-y-3 text-sm font-medium text-slate-300">
            <a
              href="#product"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-white transition-colors"
            >
              Product
            </a>
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-white transition-colors"
            >
              How it works
            </a>
            <a
              href="#integrations"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-white transition-colors"
            >
              Integrations
            </a>
            <a
              href="#intelligence"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-white transition-colors"
            >
              Insights
            </a>
            <a
              href="#dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-white transition-colors"
            >
              Dashboard
            </a>
          </nav>
          <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSignIn();
              }}
              className="w-full text-left py-2 text-xs font-medium text-slate-300 hover:text-white"
            >
              Sign in
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConnect();
              }}
              className="w-full text-center py-2.5 text-xs font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-500"
            >
              Connect your store
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
