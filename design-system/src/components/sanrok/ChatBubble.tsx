'use client';

import { ReactNode } from 'react';
import { CheckCircle2, Clock, AlertCircle } from 'lucide-react';

type ChatVariant = 'user' | 'assistant';
type StatusType = 'sent' | 'delivered' | 'read' | 'pending' | 'error';

interface ChatBubbleProps {
  message: ReactNode;
  sender?: string;
  avatar?: string;
  variant?: ChatVariant;
  status?: StatusType;
  timestamp?: string;
  className?: string;
}

/**
 * Chat bubble component with avatar and status indicator
 * Styled after Sanrok's chat UI pattern
 */
export function ChatBubble({
  message,
  sender,
  avatar,
  variant = 'assistant',
  status,
  timestamp,
  className = '',
}: ChatBubbleProps) {
  const isUser = variant === 'user';

  const statusIcons: Record<StatusType, ReactNode> = {
    sent: <CheckCircle2 className="w-3 h-3" />,
    delivered: <CheckCircle2 className="w-3 h-3 text-blue-500" />,
    read: <CheckCircle2 className="w-3 h-3 text-green-500" />,
    pending: <Clock className="w-3 h-3 text-gray-400" />,
    error: <AlertCircle className="w-3 h-3 text-red-500" />,
  };

  return (
    <div
      className={`
        flex gap-3 p-4 rounded-2xl max-w-[480px]
        ${isUser
          ? 'flex-row-reverse bg-gray-100'
          : 'bg-white border border-black/8'
        }
        ${className}
      `}
    >
      {/* Avatar */}
      <div
        className="w-10 h-10 rounded-full border-2 border-[#FF0000] flex-shrink-0 overflow-hidden bg-gray-200"
      >
        {avatar ? (
          <img
            src={avatar}
            alt={sender || 'Avatar'}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-sm font-medium text-gray-500">
            {sender?.[0]?.toUpperCase() || '?'}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        {sender && (
          <div className="text-[10px] font-medium uppercase tracking-wide text-gray-400 mb-1">
            {sender}
          </div>
        )}
        <div className="text-sm leading-relaxed text-[#171717]">
          {message}
        </div>

        {/* Status row */}
        {(status || timestamp) && (
          <div className="flex items-center gap-2 mt-2 text-xs text-gray-400">
            {timestamp && <span>{timestamp}</span>}
            {status && statusIcons[status]}
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * Chat container for multiple bubbles
 */
interface ChatContainerProps {
  children: ReactNode;
  className?: string;
}

export function ChatContainer({ children, className = '' }: ChatContainerProps) {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {children}
    </div>
  );
}

export default ChatBubble;
