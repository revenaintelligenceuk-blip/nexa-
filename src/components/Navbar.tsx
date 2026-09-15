import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { NexaLogo } from './NexaLogo';
import { ArrowUpRight, Menu, X, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onOpenInquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Services', href: '#services' },
    { label: 'Specialist Team', href: '#team' },
    { label: 'Track Record', href: '#track-record' },
    { label: 'Global Reach', href: '#global-reach' },
  ];

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || mobileMenuOpen
          ? 'bg-[#0A0A0A]/85 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.4)]'
          : 'bg-transparent'
      }`}
      style={{
        // Soft scroll-edge fade instead of hard border
        maskImage: 'linear-gradient(to bottom, black calc(100% - 10px), transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, black calc(100% - 10px), transparent 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-20 sm:h-24 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#top"
          id="nav-brand-link"
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9971F] group flex items-center"
          aria-label="Nexa Sports Management Home"
        >
          <motion.div
            animate={{ scale: scrolled ? 0.86 : 1 }}
            transition={{ type: 'spring', bounce: 0, duration: 0.35 }}
            style={{ transformOrigin: 'left center' }}
          >
            <NexaLogo size="sm" variant="dark" showSubtitle={true} />
          </motion.div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-8 lg:space-x-10" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-xs uppercase tracking-[0.2em] text-[#FAFAF8]/70 hover:text-[#FAFAF8] transition-colors duration-200 focus:outline-none focus-visible:text-[#C9971F]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button: Player Direct Liaison */}
        <div className="hidden sm:flex items-center space-x-4">
          <motion.button
            id="nav-cta-btn"
            whileTap={{ scale: 0.97 }}
            onClick={onOpenInquiry}
            className="group relative inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold tracking-[0.18em] uppercase text-[#FAFAF8] bg-[#141414] hover:bg-[#1A1A1A] border border-[#2A2A2A] hover:border-[#C9971F]/70 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9971F]"
          >
            <span className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9971F] animate-pulse"></span>
              <span>Player Liaison</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#C9971F] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </span>
          </motion.button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex sm:hidden items-center space-x-3">
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#FAFAF8] hover:text-[#C9971F] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C9971F]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation-drawer"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ type: 'spring', bounce: 0, duration: 0.3 }}
            className="sm:hidden fixed inset-x-0 top-20 bottom-0 z-40 overflow-y-auto bg-[#0A0A0A] border-b border-[#222222] px-6 py-6"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm uppercase tracking-[0.2em] text-[#FAFAF8]/80 hover:text-[#C9971F] py-2 border-b border-[#1A1A1A]"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2">
                <button
                  id="mobile-drawer-cta"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenInquiry();
                  }}
                  className="w-full flex items-center justify-center space-x-2 py-3 px-4 text-xs tracking-[0.2em] uppercase font-semibold text-black bg-[#C9971F] hover:bg-[#D4A02A] rounded-sm transition-colors"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Confidential Player Liaison</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
