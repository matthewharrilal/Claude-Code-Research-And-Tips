'use client';

type DotSize = 'sm' | 'md' | 'lg';

interface HalftoneImageProps {
  src: string;
  alt: string;
  dotSize?: DotSize;
  contrast?: number;
  className?: string;
}

/**
 * Retro halftone dot effect for images
 * Creates newspaper/print aesthetic
 */
export function HalftoneImage({
  src,
  alt,
  dotSize = 'md',
  contrast = 1.5,
  className = '',
}: HalftoneImageProps) {
  const dotSizes = {
    sm: { size: '3px', dot: '0.75px' },
    md: { size: '4px', dot: '1px' },
    lg: { size: '8px', dot: '2px' },
  };

  const { size, dot } = dotSizes[dotSize];

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        style={{
          filter: `grayscale(100%) contrast(${contrast})`,
        }}
      />
      {/* Halftone overlay */}
      <div
        className="absolute inset-0 mix-blend-multiply opacity-30 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, black ${dot}, transparent ${dot})`,
          backgroundSize: `${size} ${size}`,
        }}
        aria-hidden="true"
      />
    </div>
  );
}

/**
 * Crosshatch effect (alternative to halftone)
 */
interface CrosshatchImageProps {
  src: string;
  alt: string;
  lineWidth?: number;
  spacing?: number;
  className?: string;
}

export function CrosshatchImage({
  src,
  alt,
  lineWidth = 1,
  spacing = 4,
  className = '',
}: CrosshatchImageProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover grayscale contrast-150"
      />
      {/* Crosshatch overlay */}
      <div
        className="absolute inset-0 mix-blend-multiply opacity-20 pointer-events-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              black,
              black ${lineWidth}px,
              transparent ${lineWidth}px,
              transparent ${spacing}px
            ),
            repeating-linear-gradient(
              -45deg,
              black,
              black ${lineWidth}px,
              transparent ${lineWidth}px,
              transparent ${spacing}px
            )
          `,
        }}
        aria-hidden="true"
      />
    </div>
  );
}

export default HalftoneImage;
