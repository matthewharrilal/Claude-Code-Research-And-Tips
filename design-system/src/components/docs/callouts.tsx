import { ReactNode } from 'react';
import { AlertCircle, Info, AlertTriangle, CheckCircle, Zap } from 'lucide-react';

// Callout Component with variants
interface CalloutProps {
  variant?: 'info' | 'warning' | 'error' | 'success';
  title?: string;
  children: ReactNode;
}

export function Callout({ variant = 'info', title, children }: CalloutProps) {
  const variants = {
    info: {
      bg: 'bg-blue-50',
      border: 'border-blue-300',
      icon: Info,
      iconColor: 'text-blue-600',
      titleColor: 'text-blue-900',
      textColor: 'text-blue-900/90',
    },
    warning: {
      bg: 'bg-amber-50',
      border: 'border-amber-300',
      icon: AlertTriangle,
      iconColor: 'text-amber-600',
      titleColor: 'text-amber-900',
      textColor: 'text-amber-900/90',
    },
    error: {
      bg: 'bg-red-50',
      border: 'border-red-300',
      icon: AlertCircle,
      iconColor: 'text-red-600',
      titleColor: 'text-red-900',
      textColor: 'text-red-900/90',
    },
    success: {
      bg: 'bg-green-50',
      border: 'border-green-300',
      icon: CheckCircle,
      iconColor: 'text-green-600',
      titleColor: 'text-green-900',
      textColor: 'text-green-900/90',
    },
  };

  const config = variants[variant];
  const Icon = config.icon;

  return (
    <div className={`${config.bg} ${config.border} border p-6`}>
      <div className="flex gap-4">
        <div className={`w-10 h-10 border ${config.border} flex items-center justify-center flex-shrink-0`}>
          <Icon className={`w-5 h-5 ${config.iconColor}`} />
        </div>
        <div className="flex-1">
          {title && (
            <h4 className={`text-sm font-bold ${config.titleColor} mb-3 uppercase tracking-[0.15em]`}>{title}</h4>
          )}
          <div className={`text-sm ${config.textColor} leading-relaxed font-light`}>{children}</div>
        </div>
      </div>
    </div>
  );
}

// Gotcha Box Component
interface GotchaBoxProps {
  mistake: string;
  symptom: string;
  recovery: string[];
}

export function GotchaBox({ mistake, symptom, recovery }: GotchaBoxProps) {
  return (
    <div className="bg-orange-50 border border-orange-300 p-8">
      <div className="flex items-start gap-4 mb-6">
        <div className="w-12 h-12 border border-orange-300 flex items-center justify-center flex-shrink-0">
          <Zap className="w-6 h-6 text-orange-700" />
        </div>
        <div>
          <h4 className="text-xs font-bold text-orange-900 mb-2 uppercase tracking-[0.2em]">Common Gotcha</h4>
          <p className="text-base text-orange-800 font-light leading-relaxed">{mistake}</p>
        </div>
      </div>

      <div className="bg-white border border-orange-300 p-5 mb-6">
        <div className="text-[10px] font-bold text-orange-900 mb-2 uppercase tracking-[0.2em]">Symptom</div>
        <p className="text-sm text-orange-800 font-light leading-relaxed">{symptom}</p>
      </div>

      <div>
        <div className="text-[10px] font-bold text-orange-900 mb-3 uppercase tracking-[0.2em]">Recovery Steps</div>
        <ol className="space-y-3">
          {recovery.map((step, idx) => (
            <li key={idx} className="text-sm text-orange-800 flex items-start font-light">
              <span className="font-bold mr-3 flex-shrink-0 text-orange-700">{idx + 1}.</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
