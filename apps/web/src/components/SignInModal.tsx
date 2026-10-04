import React, { useState } from 'react';
import { X, Lock, CheckCircle2, ArrowRight } from 'lucide-react';

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: () => void;
}

export const SignInModal: React.FC<SignInModalProps> = ({
  isOpen,
  onClose,
  onLoginSuccess,
}) => {
  const [email, setEmail] = useState('merchant@example.com');
  const [password, setPassword] = useState('••••••••••••');
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onLoginSuccess();
      onClose();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div 
        className="w-full max-w-md rounded-2xl border border-slate-800 bg-[#0C121D] shadow-2xl overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="signin-title"
      >
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-[#090E17]">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded bg-indigo-600 font-mono text-[11px] font-bold text-white">
              CI
            </span>
            <h3 id="signin-title" className="text-sm font-bold text-white">
              Sign In to Merchant Console
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

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-medium text-slate-300">
              Work Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1.5 w-full rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-xs text-white focus:border-indigo-500 focus:outline-none"
              placeholder="name@company.com"
            />
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label className="block text-xs font-medium text-slate-300">
                Password
              </label>
              <a href="#" onClick={(e) => e.preventDefault()} className="text-[11px] text-indigo-400 hover:underline">
                Forgot?
              </a>
            </div>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1.5 w-full rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-xs text-white focus:border-indigo-500 focus:outline-none"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors shadow-sm disabled:opacity-50"
            >
              {isLoading ? (
                <span>Authenticating session...</span>
              ) : (
                <>
                  <span>Sign In to Console</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </div>

          <div className="pt-2 border-t border-slate-800/80 text-center">
            <button
              type="button"
              onClick={() => {
                onLoginSuccess();
                onClose();
              }}
              className="text-xs text-slate-400 hover:text-indigo-300 font-mono"
            >
              Or enter via Sandbox Demo Mode →
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
