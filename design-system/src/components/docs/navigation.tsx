import { ReactNode, useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';

// Sidebar Navigation Item
interface SidebarNavItemProps {
  label: string;
  href?: string;
  active?: boolean;
  onClick?: () => void;
}

export function SidebarNavItem({ label, active = false, onClick }: SidebarNavItemProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left px-3 py-2 text-xs transition-colors ${
        active
          ? 'bg-[#E31E24]/10 text-[#E31E24] font-medium border-l border-[#E31E24]'
          : 'text-neutral-600 hover:bg-neutral-200/50 hover:text-neutral-900 font-light border-l border-transparent'
      }`}
    >
      {label}
    </button>
  );
}

// Category Group Header (collapsible)
interface CategoryGroupHeaderProps {
  label: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

export function CategoryGroupHeader({ label, children, defaultOpen = true }: CategoryGroupHeaderProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="mb-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-3 py-2 text-[10px] font-bold text-neutral-600 uppercase tracking-[0.2em] hover:text-neutral-900 transition-colors"
      >
        <span>{label}</span>
        {isOpen ? (
          <ChevronDown className="w-3 h-3" />
        ) : (
          <ChevronRight className="w-3 h-3" />
        )}
      </button>
      {isOpen && (
        <div className="mt-1 space-y-1">
          {children}
        </div>
      )}
    </div>
  );
}

// On This Page Section Links
interface OnThisPageLinksProps {
  links: {
    label: string;
    id: string;
    level?: 2 | 3;
  }[];
}

export function OnThisPageLinks({ links }: OnThisPageLinksProps) {
  const [activeId, setActiveId] = useState<string | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveId(id);
    }
  };

  return (
    <nav className="sticky top-24">
      <div className="text-[10px] font-bold text-neutral-900 mb-4 uppercase tracking-[0.25em]">
        On This Page
      </div>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.id}>
            <button
              onClick={() => scrollToSection(link.id)}
              className={`text-left text-sm transition-colors border-l px-3 py-1 ${
                link.level === 3 ? 'pl-5' : ''
              } ${
                activeId === link.id
                  ? 'text-[#E31E24] font-medium border-[#E31E24]'
                  : 'text-neutral-600 hover:text-neutral-900 font-light border-transparent hover:border-neutral-300'
              }`}
            >
              {link.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// Breadcrumb Trail
interface BreadcrumbProps {
  items: {
    label: string;
    href?: string;
  }[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-2 text-sm mb-8">
      {items.map((item, idx) => (
        <div key={idx} className="flex items-center gap-2">
          {idx > 0 && <ChevronRight className="w-3 h-3 text-neutral-400" />}
          {idx === items.length - 1 ? (
            <span className="text-neutral-900 font-medium text-xs uppercase tracking-wider">{item.label}</span>
          ) : (
            <button className="text-neutral-500 hover:text-[#E31E24] transition-colors font-light text-xs">
              {item.label}
            </button>
          )}
        </div>
      ))}
    </nav>
  );
}

// Sidebar Container
interface SidebarProps {
  children: ReactNode;
}

export function Sidebar({ children }: SidebarProps) {
  return (
    <aside className="w-64 h-screen sticky top-0 overflow-y-auto border-r border-neutral-300 bg-[#F5F5F5] p-6">
      {children}
    </aside>
  );
}
