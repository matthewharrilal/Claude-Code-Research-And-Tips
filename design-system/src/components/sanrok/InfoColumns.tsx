'use client';

import { ReactNode } from 'react';

interface InfoColumn {
  label: string;
  value: ReactNode;
}

interface InfoColumnsProps {
  columns: InfoColumn[];
  dividers?: boolean;
  className?: string;
}

/**
 * Multi-column info section with optional dividers
 * Styled after Sanrok's three-column info sections
 */
export function InfoColumns({
  columns,
  dividers = true,
  className = '',
}: InfoColumnsProps) {
  return (
    <div
      className={`
        grid gap-8
        ${className}
      `}
      style={{
        gridTemplateColumns: `repeat(${columns.length}, 1fr)`,
      }}
    >
      {columns.map((column, index) => (
        <div
          key={index}
          className={`
            py-6
            ${dividers && index > 0 ? 'border-l border-black/8 pl-8' : ''}
          `}
        >
          <div className="text-sm font-medium uppercase tracking-wide text-[#B0B0B0] mb-2">
            {column.label}
          </div>
          <div className="text-lg font-medium text-[#171717]">
            {column.value}
          </div>
        </div>
      ))}
    </div>
  );
}

/**
 * Single info item for custom layouts
 */
interface InfoItemProps {
  label: string;
  value: ReactNode;
  className?: string;
}

export function InfoItem({ label, value, className = '' }: InfoItemProps) {
  return (
    <div className={className}>
      <div className="text-sm font-medium uppercase tracking-wide text-[#B0B0B0] mb-2">
        {label}
      </div>
      <div className="text-lg font-medium text-[#171717]">
        {value}
      </div>
    </div>
  );
}

export default InfoColumns;
