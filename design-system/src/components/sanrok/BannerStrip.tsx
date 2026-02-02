'use client';

import { ReactNode } from 'react';

interface BannerStripProps {
  children: ReactNode;
  background?: 'red' | 'black' | 'white';
  scrolling?: boolean;
  speed?: 'slow' | 'normal' | 'fast';
  className?: string;
}

/**
 * Full-width banner strip with optional scrolling marquee effect
 * Styled after Sanrok's announcement banners
 */
export function BannerStrip({
  children,
  background = 'red',
  scrolling = false,
  speed = 'normal',
  className = '',
}: BannerStripProps) {
  const bgClasses = {
    red: 'bg-[#FF0000] text-white',
    black: 'bg-[#171717] text-white',
    white: 'bg-white text-[#171717] border-y border-black/10',
  };

  const speedDurations = {
    slow: '30s',
    normal: '20s',
    fast: '10s',
  };

  if (scrolling) {
    return (
      <div
        className={`
          w-full py-3 overflow-hidden
          ${bgClasses[background]}
          ${className}
        `}
      >
        <div
          className="flex animate-marquee"
          style={{
            animationDuration: speedDurations[speed],
          }}
        >
          {/* Double the content for seamless loop */}
          <BannerContent>{children}</BannerContent>
          <BannerContent>{children}</BannerContent>
        </div>
        <style jsx>{`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee linear infinite;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div
      className={`
        w-full py-3 text-center
        ${bgClasses[background]}
        ${className}
      `}
    >
      <div className="text-sm font-medium uppercase tracking-wide px-4">
        {children}
      </div>
    </div>
  );
}

function BannerContent({ children }: { children: ReactNode }) {
  return (
    <div className="flex-shrink-0 px-8 text-sm font-medium uppercase tracking-wide whitespace-nowrap">
      {children}
    </div>
  );
}

export default BannerStrip;
