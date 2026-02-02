'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Mail, Phone, ExternalLink } from 'lucide-react';

type ButtonVariant = 'filled' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';
type IconType = 'arrow' | 'calendar' | 'mail' | 'phone' | 'external' | 'none';

interface CTAButtonProps {
  children: ReactNode;
  icon?: IconType;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  onClick?: () => void;
  className?: string;
}

const iconComponents: Record<Exclude<IconType, 'none'>, typeof ArrowRight> = {
  arrow: ArrowRight,
  calendar: Calendar,
  mail: Mail,
  phone: Phone,
  external: ExternalLink,
};

/**
 * Call-to-action button styled after Sanrok
 * Supports multiple variants and icon options
 */
export function CTAButton({
  children,
  icon = 'none',
  variant = 'filled',
  size = 'md',
  href,
  onClick,
  className = '',
}: CTAButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs gap-1.5',
    md: 'px-5 py-3 text-sm gap-2',
    lg: 'px-6 py-4 text-base gap-2.5',
  };

  const iconSizes = {
    sm: 'w-3.5 h-3.5',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };

  const variantClasses = {
    filled: 'bg-[#171717] text-white hover:bg-[#FF0000]',
    outline: 'bg-transparent border-2 border-[#171717] text-[#171717] hover:bg-[#171717] hover:text-white',
    ghost: 'bg-transparent text-[#171717] hover:bg-gray-100',
  };

  const IconComponent = icon !== 'none' ? iconComponents[icon] : null;

  const buttonContent = (
    <>
      <span>{children}</span>
      {IconComponent && <IconComponent className={iconSizes[size]} />}
    </>
  );

  const buttonClasses = `
    inline-flex items-center justify-center rounded-full font-medium
    transition-colors duration-150
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${className}
  `;

  const MotionComponent = href ? motion.a : motion.button;

  return (
    <MotionComponent
      href={href}
      onClick={onClick}
      className={buttonClasses}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.15 }}
    >
      {buttonContent}
    </MotionComponent>
  );
}

export default CTAButton;
