'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export interface NavItem {
  id: string;
  label: string;
  href?: string;
}

interface PillNavigationProps {
  items: NavItem[];
  activeItem?: string;
  onChange?: (id: string) => void;
  variant?: 'default' | 'floating';
  className?: string;
}

export function PillNavigation({
  items,
  activeItem: controlledActive,
  onChange,
  variant = 'default',
  className = '',
}: PillNavigationProps) {
  const [internalActive, setInternalActive] = useState(items[0]?.id);
  const activeItem = controlledActive ?? internalActive;

  const handleClick = (id: string) => {
    setInternalActive(id);
    onChange?.(id);
  };

  return (
    <nav
      className={`
        inline-flex gap-1 rounded-full p-2
        ${variant === 'floating' ? 'shadow-lg' : 'shadow-md'}
        bg-white
        ${className}
      `}
      style={{
        boxShadow: variant === 'floating'
          ? '0 10px 40px rgba(0,0,0,0.12)'
          : '0 4px 12px rgba(0,0,0,0.08)',
      }}
    >
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => handleClick(item.id)}
          className={`
            relative px-4 py-2 rounded-full text-sm font-medium
            transition-colors duration-150
            ${activeItem === item.id
              ? 'text-white'
              : 'text-[#171717] hover:bg-gray-100'
            }
          `}
        >
          {activeItem === item.id && (
            <motion.div
              layoutId="pill-active"
              className="absolute inset-0 rounded-full bg-[#171717]"
              transition={{ type: 'spring', duration: 0.4, bounce: 0.15 }}
            />
          )}
          <span className="relative z-10">{item.label}</span>
        </button>
      ))}
    </nav>
  );
}

export default PillNavigation;
