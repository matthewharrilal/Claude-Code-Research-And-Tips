'use client';

import { motion } from 'framer-motion';

interface TeamMemberCardProps {
  name: string;
  role: string;
  avatar: string;
  rank?: number;
  duotone?: boolean;
  className?: string;
}

/**
 * Team member card with duotone photo treatment
 * Styled after Sanrok's team section
 */
export function TeamMemberCard({
  name,
  role,
  avatar,
  rank,
  duotone = true,
  className = '',
}: TeamMemberCardProps) {
  return (
    <motion.div
      className={`
        relative bg-white rounded-2xl overflow-hidden
        shadow-[0_2px_8px_rgba(0,0,0,0.04),0_4px_24px_rgba(0,0,0,0.06)]
        ${className}
      `}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
    >
      {/* Image container */}
      <div className="relative aspect-[3/4] overflow-hidden">
        {duotone ? (
          <div className="relative w-full h-full">
            <img
              src={avatar}
              alt={name}
              className="w-full h-full object-cover grayscale contrast-[1.3] brightness-110"
            />
            <div
              className="absolute inset-0 bg-[#FF0000] mix-blend-multiply opacity-85"
              aria-hidden="true"
            />
          </div>
        ) : (
          <img
            src={avatar}
            alt={name}
            className="w-full h-full object-cover"
          />
        )}

        {/* Rank badge */}
        {rank !== undefined && (
          <div className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-[#FF0000] text-white rounded-full text-sm font-bold">
            {rank}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h4 className="text-sm font-extrabold uppercase tracking-wide mb-1">
          {name}
        </h4>
        <p className="text-[10px] font-medium text-[#B0B0B0]">
          {role}
        </p>
      </div>
    </motion.div>
  );
}

/**
 * Grid container for team cards
 */
interface TeamGridProps {
  children: React.ReactNode;
  columns?: 2 | 3 | 4;
  className?: string;
}

export function TeamGrid({
  children,
  columns = 4,
  className = ''
}: TeamGridProps) {
  const colClasses = {
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
  };

  return (
    <div className={`grid ${colClasses[columns]} gap-6 ${className}`}>
      {children}
    </div>
  );
}

export default TeamMemberCard;
