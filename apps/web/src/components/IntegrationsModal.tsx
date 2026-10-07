import React, { useState } from 'react';
import { X, Copy, Check } from 'lucide-react';

interface IntegrationsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConnectClick: () => void;
}

export const IntegrationsModal: React.FC<IntegrationsModalProps> = ({
  isOpen,
  onClose,
  onConnectClick,
}) => {
  const [activeTab, setActiveTab] = useState<'browser' | 'server' | 'http'>('browser');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const snippets = {
    browser: `// Example browser-side integration
// The production client library will be added later.

checkoutIntelligence.track('checkout_started', {
  checkout_id: currentCheckout.id,
  device: 'mobile',
});`,

    server: `// Example server-side integration
// The production SDK will be added later.

await checkoutIntelligence.events.record({
  event: 'payment_failed',
  checkout_id: checkoutId,
  timestamp: new Date().toISOString(),
  payment: {
    method: 'credit_card',
  },
});`,

    http: `# Example HTTP event ingestion
# Endpoint and authentication will be defined
# when the ingestion API is implemented.

POST /v1/events

{
  "event": "payment_failed",
  "checkout_id": "example_checkout_id",
  "timestamp": "2026-10-07T10:00:00Z",
  "device": "mobile"
}`,
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(snippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div
        className="w-full max-w-2xl rounded-2xl border border-slate-800 bg-[#0C121D] shadow-2xl overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="integrations-title"
      >
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-[#090E17]">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded bg-indigo-600 font-mono text-[11px] font-bold text-white">
              CI
            </span>
            <h3 id="integrations-title" className="text-sm font-bold text-white">
              Integration Patterns & Event Contract
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switcher */}
        <div className="px-6 py-2.5 bg-[#0A0F19] border-b border-slate-800/80 flex items-center justify-between text-xs">
          <div className="flex items-center gap-1 font-mono">
            <button
              onClick={() => setActiveTab('browser')}
              className={`px-3 py-1 rounded transition-colors ${activeTab === 'browser'
                ? 'bg-slate-800 text-white font-semibold'
                : 'text-slate-400 hover:text-slate-200'
                }`}
            >
              Browser
            </button>
            <button
              onClick={() => setActiveTab('server')}
              className={`px-3 py-1 rounded transition-colors ${activeTab === 'server'
                ? 'bg-slate-800 text-white font-semibold`'
                : 'text-slate-400 hover:text-slate-200'
                }`}
            >
              Server
            </button>
            <button
              onClick={() => setActiveTab('http')}
              className={`px-3 py-1 rounded transition-colors ${activeTab === 'http'
                ? 'bg-slate-800 text-white font-semibold'
                : 'text-slate-400 hover:text-slate-200'
                }`}
            >
              HTTP API
            </button>
          </div>

          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono text-slate-400 hover:text-white rounded hover:bg-slate-800"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Code Content */}
        <div className="p-6">
          <div className="rounded-xl border border-slate-800 bg-[#080B12] p-4 text-xs font-mono text-indigo-300/90 leading-relaxed overflow-x-auto max-h-[360px]">
            <pre className="whitespace-pre">
              <code>{snippets[activeTab]}</code>
            </pre>
          </div>

          <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Checkout Intelligence is designed around an event-based integration
              boundary, allowing existing commerce systems to send relevant checkout
              events without replacing their checkout infrastructure.
            </p>
            <button
              onClick={() => {
                onClose();
                onConnectClick();
              }}
              className="text-indigo-400 hover:text-indigo-300 font-semibold whitespace-nowrap"
            >
              Connect your store now →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
