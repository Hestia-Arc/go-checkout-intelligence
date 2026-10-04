import React from 'react';

interface FooterProps {
  onOpenConnect: () => void;
  onOpenIntegrations: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConnect, onOpenIntegrations }) => {
  return (
    <footer className="border-t border-slate-800/80 bg-[#070A10] text-slate-400 text-xs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand & Description */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="flex h-6 w-6 items-center justify-center rounded bg-indigo-600 font-mono text-[11px] font-bold text-white">
                CI
              </span>
              <span className="text-base font-bold tracking-tight text-white">
                Checkout Intelligence
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              Checkout intelligence for merchants who want to understand—and improve—their checkout experience.
            </p>
            <div className="pt-2 text-[11px] text-slate-400">
              Merchant Checkout Observability Architecture · Built for technical clarity.
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-6">
            
            <div className="space-y-2">
              <div className="text-[11px] font-mono text-slate-300 font-semibold uppercase">
                Platform
              </div>
              <ul className="space-y-2">
                <li>
                  <a href="#product" className="hover:text-white transition-colors">
                    Product
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="hover:text-white transition-colors">
                    How it works
                  </a>
                </li>
                <li>
                  <a href="#dashboard" className="hover:text-white transition-colors">
                    Dashboard
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <div className="text-[11px] font-mono text-slate-300 font-semibold uppercase">
                Integration
              </div>
              <ul className="space-y-2">
                <li>
                  <button onClick={onOpenIntegrations} className="hover:text-white transition-colors text-left">
                    Integrations
                  </button>
                </li>
                <li>
                  <a href="#integrations" className="hover:text-white transition-colors">
                    Event Schemas
                  </a>
                </li>
                <li>
                  <button onClick={onOpenConnect} className="hover:text-white transition-colors text-left">
                    Connect Store
                  </button>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <div className="text-[11px] font-mono text-slate-300 font-semibold uppercase">
                Project
              </div>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="hover:text-white transition-colors"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="#contact" onClick={(e) => { e.preventDefault(); alert("For inquiries, contact developer via the provided repository."); }} className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <span className="text-slate-400">
                    Early Access Demo
                  </span>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} Checkout Intelligence. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Illustrative telemetry sandbox</span>
            <span>·</span>
            <span>Developer preview build</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
