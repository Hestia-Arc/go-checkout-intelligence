import React, { useState } from 'react';
import { X, Copy, Check, Terminal, Code2, Layers } from 'lucide-react';

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
  const [activeTab, setActiveTab] = useState<'node' | 'client' | 'rest'>('client');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const snippets = {
    client: `// Drop into your frontend checkout page (Next.js, Remix, or SPA)
import { initCheckoutIntel } from '@checkout-intelligence/web';

const ci = initCheckoutIntel({
  storeKey: 'chk_pub_live_79a24fe10b981d3',
});

// Emitted on payment gateway submission failure
paymentForm.addEventListener('error', (err) => {
  ci.track('payment_failed', {
    checkout_id: currentCheckout.id,
    step: 'payment',
    method: 'credit_card',
    decline_code: err.code, // e.g., '3ds_timeout'
    device: 'mobile',
  });
});`,
    node: `// Node.js Express / Webhook proxy
import { CheckoutIntelligence } from '@checkout-intelligence/sdk';

const ci = new CheckoutIntelligence({
  apiKey: process.env.CHECKOUT_INTEL_SECRET_KEY,
});

app.post('/api/webhooks/payment-failure', async (req, res) => {
  const { checkoutId, declineReason, sessionMetadata } = req.body;

  await ci.events.record({
    event: 'payment_failed',
    checkout_id: checkoutId,
    timestamp: new Date().toISOString(),
    session: sessionMetadata,
    payment: {
      gateway: 'stripe',
      decline_code: declineReason,
    }
  });

  res.sendStatus(200);
});`,
    rest: `# Direct HTTPS Event Ingestion
curl -X POST https://api.checkoutintel.com/v1/events \\
  -H "Authorization: Bearer chk_pub_live_79a24fe10b981d3" \\
  -H "Content-Type: application/json" \\
  -d '{
    "event": "payment_failed",
    "checkout_id": "chk_1024_x9b",
    "timestamp": "2026-10-03T21:44:12Z",
    "device": "mobile",
    "step": "payment_processing",
    "decline_code": "3ds_authentication_timeout"
  }'`,
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
              Integration Architecture & Code Samples
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
              onClick={() => setActiveTab('client')}
              className={`px-3 py-1 rounded transition-colors ${
                activeTab === 'client'
                  ? 'bg-slate-800 text-white font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Client SDK
            </button>
            <button
              onClick={() => setActiveTab('node')}
              className={`px-3 py-1 rounded transition-colors ${
                activeTab === 'node'
                  ? 'bg-slate-800 text-white font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Node.js Backend
            </button>
            <button
              onClick={() => setActiveTab('rest')}
              className={`px-3 py-1 rounded transition-colors ${
                activeTab === 'rest'
                  ? 'bg-slate-800 text-white font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              REST Webhook
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
            <span>
              Compatible with headless checkouts, Shopify Web Pixels, custom microservices.
            </span>
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
