import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, Terminal} from 'lucide-react';

interface ConnectStoreModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConnectStoreModal: React.FC<ConnectStoreModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedPlatform, setSelectedPlatform] = useState('custom');
  const [storeName, setStoreName] = useState('My Online Store');
  const [storeUrl, setStoreUrl] = useState('https://store.example.com');
  const [pingStatus, setPingStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  if (!isOpen) return null;

  const handleSendPing = () => {
    setPingStatus('sending');
    setTimeout(() => {
      setPingStatus('success');
    }, 800);
  };

  const platforms = [
    {
      id: 'custom',
      name: 'Custom / Headless Store',
      tag: 'HTTP Event API',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div
        className="w-full max-w-xl rounded-2xl border border-slate-800 bg-[#0C121D] shadow-2xl overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-[#090E17]">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded bg-indigo-600 font-mono text-[11px] font-bold text-white">
              CI
            </span>
            <h3 id="modal-title" className="text-sm font-bold text-white">
              Connect Your Store to Checkout Intelligence
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus-visible:outline-2 focus-visible:outline-indigo-500"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Stepper Bar */}
        <div className="px-6 py-3 bg-[#0A0F19] border-b border-slate-800/80 flex items-center justify-between text-xs font-mono">
          <span className={step >= 1 ? 'text-indigo-400 font-semibold' : 'text-slate-400'}>
            01 Platform
          </span>
          <span className="text-slate-700">→</span>
          <span className={step >= 2 ? 'text-indigo-400 font-semibold' : 'text-slate-400'}>
            02 Credentials
          </span>
          <span className="text-slate-700">→</span>
          <span className={step >= 3 ? 'text-indigo-400 font-semibold' : 'text-slate-400'}>
            03 Verification
          </span>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5">
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300">
                  Select your commerce architecture
                </label>
                <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {platforms.map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setSelectedPlatform(p.id)}
                      className={`p-3 rounded-lg border text-left transition-all ${selectedPlatform === p.id
                        ? 'border-indigo-500 bg-indigo-950/40 text-white'
                        : 'border-slate-800 bg-slate-900/60 hover:border-slate-700 text-slate-300'
                        }`}
                    >
                      <div className="text-xs font-semibold">{p.name}</div>
                      <div className="text-[11px] font-mono text-slate-400 mt-0.5">{p.tag}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300">
                  Store Display Name
                </label>
                <input
                  type="text"
                  value={storeName}
                  onChange={(e) => setStoreName(e.target.value)}
                  className="mt-1.5 w-full rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-xs text-white focus:border-indigo-500 focus:outline-none"
                  placeholder="e.g. Apex Apparel Primary"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300">
                  Store Checkout URL
                </label>
                <input
                  type="url"
                  value={storeUrl}
                  onChange={(e) => setStoreUrl(e.target.value)}
                  className="mt-1.5 w-full rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-xs text-white focus:border-indigo-500 focus:outline-none"
                  placeholder="https://checkout.yourstore.com"
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div>
                <span className="text-xs font-medium text-slate-300 block mb-1">
                  Integration setup
                </span>

                <p className="text-xs text-slate-400 leading-relaxed">
                  Checkout Intelligence receives checkout events from your store through
                  an HTTP event API. The production credential and endpoint will be
                  generated when store integration is implemented.
                </p>
              </div>

              <div className="rounded-lg border border-slate-800 bg-slate-900/80 p-3.5 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-300 font-semibold">
                    Example Event
                  </span>

                  <span className="text-[10px] font-mono text-slate-500 uppercase">
                    Contract Preview
                  </span>
                </div>

                <pre className="text-[11px] font-mono text-indigo-300 overflow-x-auto p-3 rounded bg-black/60">
                  {`{
  "event": "checkout_started",
  "checkout_id": "example_checkout_id",
  "timestamp": "2026-10-07T10:00:00Z",
  "device": "mobile"
}`}
                </pre>
              </div>

              <div className="rounded-lg border border-indigo-900/50 bg-indigo-950/20 p-3">
                <p className="text-[11px] text-indigo-300 leading-relaxed">
                  This is an illustrative event contract. The actual ingestion endpoint
                  will be implemented as part of the Checkout Intelligence backend.
                </p>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4 text-center py-2">
              {pingStatus === 'idle' && (
                <>
                  <div className="w-12 h-12 mx-auto rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-indigo-400">
                    <Terminal className="w-6 h-6" />
                  </div>
                  <h4 className="text-sm font-bold text-white">
                    Simulate an event
                  </h4>

                  <p className="text-xs text-slate-400 max-w-sm mx-auto">
                    Preview how Checkout Intelligence will verify event delivery from your store.
                  </p>

                  <button
                    onClick={handleSendPing}
                    className="px-5 py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-sm"
                  >
                    Simulate Test Event
                  </button>
                </>
              )}

              {pingStatus === 'sending' && (
                <div className="py-6 space-y-3">
                  <div className="w-8 h-8 mx-auto border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
                  <div className="text-xs font-mono text-slate-300">
                    Dispatching payload to telemetry ingestion gateway...
                  </div>
                </div>
              )}

              {pingStatus === 'success' && (
                <div className="space-y-3">
                  <div className="w-12 h-12 mx-auto rounded-full bg-emerald-950 border border-emerald-600/80 flex items-center justify-center text-emerald-400">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-sm font-bold text-white">
                    Event Simulation Complete
                  </h4>

                  <p className="text-xs text-slate-300 max-w-sm mx-auto">
                    This demo simulates the event verification flow for{' '}
                    <span className="font-mono text-indigo-300">{storeName}</span>.
                    The live ingestion pipeline will be connected as the backend is implemented.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-slate-800 bg-[#090E17] flex items-center justify-between">
          {step > 1 ? (
            <button
              onClick={() => setStep((step - 1) as 1 | 2)}
              className="text-xs text-slate-400 hover:text-white"
            >
              Back
            </button>
          ) : (
            <div />
          )}

          <div className="flex items-center gap-2">
            {step < 3 ? (
              <button
                onClick={() => setStep((step + 1) as 2 | 3)}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors"
              >
                <span>Continue</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              >
                Done
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
