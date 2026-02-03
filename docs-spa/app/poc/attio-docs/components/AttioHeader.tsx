'use client'

import { Search } from 'lucide-react'

export function AttioHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 h-14 bg-white border-b border-[#E5E7EB] z-50">
      <div className="h-full flex items-center justify-between px-6">
        {/* Left: Logo */}
        <div className="flex items-center gap-8">
          {/* Attio Logo */}
          <a href="#" className="flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect width="24" height="24" rx="6" fill="#111827"/>
              <path d="M7 17V7L12 12L17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="font-semibold text-[15px] text-[#111827]">attio</span>
          </a>

          {/* Main Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <a href="#" className="text-[14px] text-[#6B7280] hover:text-[#111827] transition-colors">
              Product
            </a>
            <a href="#" className="text-[14px] text-[#6B7280] hover:text-[#111827] transition-colors">
              Resources
            </a>
            <a href="#" className="text-[14px] text-[#6B7280] hover:text-[#111827] transition-colors">
              Customers
            </a>
            <a href="#" className="text-[14px] text-[#6B7280] hover:text-[#111827] transition-colors">
              Pricing
            </a>
          </nav>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <button className="hidden md:flex items-center gap-2 px-3 py-1.5 text-[13px] text-[#6B7280] bg-[#F9FAFB] border border-[#E5E7EB] rounded-md hover:bg-[#F3F4F6] transition-colors">
            <Search className="w-4 h-4" />
            <span>Search</span>
            <kbd className="ml-2 px-1.5 py-0.5 text-[11px] bg-white border border-[#E5E7EB] rounded">⌘K</kbd>
          </button>

          {/* Sign in */}
          <a href="#" className="text-[14px] text-[#6B7280] hover:text-[#111827] transition-colors">
            Sign in
          </a>

          {/* CTA Button */}
          <a
            href="#"
            className="px-4 py-2 text-[14px] font-medium text-white bg-[#111827] rounded-md hover:bg-[#1F2937] transition-colors"
          >
            Start for free
          </a>
        </div>
      </div>
    </header>
  )
}
