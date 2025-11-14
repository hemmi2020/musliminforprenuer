'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { Search, Bell, Menu, X, ChevronDown } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOnLightBackground, setIsOnLightBackground] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);
      
      // Detect light background sections (adjust these values based on your page sections)
      const isOnCTASection = scrollY > (window.innerHeight * 4); // Approximate position of CTA section
      setIsOnLightBackground(scrollY > 20 || isOnCTASection);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass shadow-premium border-b border-gray-200/20' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <Image
                  src="/images/Gemini_Generated_Image_2e8hht2e.png"
                  alt="MuslimInfopreneurs"
                  width={44}
                  height={44}
                  className="rounded-xl transition-transform duration-300 group-hover:scale-110 shadow-glow"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <div className="hidden sm:block">
                <span className={`font-display font-bold text-xl tracking-tight ${
                  isScrolled ? 'text-primary-600' : 'gradient-text'
                }`}>
                  MuslimInfopreneurs
                </span>
                <div className="text-xs font-medium text-primary-500">Formation Islamique</div>
              </div>
            </Link>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {[
                { href: '/', label: 'Accueil', active: true },
                { href: '/trainings', label: 'Formations' },
                { href: '/categories', label: 'Catégories' },
                { href: '/instructors', label: 'Instructeurs' },
                { href: '/affiliate', label: 'Affiliation' }
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:bg-primary-50 ${
                    item.active 
                      ? 'text-primary-700 bg-primary-50 shadow-inner-glow' 
                      : 'text-primary-600 hover:text-primary-700'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Right Section */}
            <div className="flex items-center space-x-3">
              {/* Search */}
              <div className="relative">
                <button 
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className={`p-3 rounded-xl transition-all duration-300 hover:shadow-glow group ${
                    isOnLightBackground ? 'hover:bg-primary-50' : 'hover:bg-white/10'
                  }`}
                >
                  <Search className="w-5 h-5 text-primary-600 group-hover:text-primary-400 transition-colors" />
                </button>
                
                {/* Search Dropdown */}
                {isSearchOpen && (
                  <div className="absolute top-full right-0 mt-2 w-80 glass rounded-2xl p-4 animate-slide-down">
                    <input
                      type="text"
                      placeholder="Rechercher des formations..."
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus-premium"
                      autoFocus
                    />
                  </div>
                )}
              </div>
              
              {/* Notifications */}
              <button className={`p-3 rounded-xl transition-all duration-300 relative group hover:shadow-glow ${
                isOnLightBackground ? 'hover:bg-primary-50' : 'hover:bg-white/10'
              }`}>
                <Bell className="w-5 h-5 text-primary-600 group-hover:text-primary-400 transition-colors" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-red-500 to-red-600 rounded-full animate-pulse-glow"></span>
              </button>

              {/* Auth Buttons */}
              <div className="hidden md:flex items-center space-x-3">
                <Button 
                  variant="ghost" 
                  className="btn-premium border-opacity-20 text-primary-600 hover:text-primary-700 hover:bg-primary-50 border-primary-300"
                >
                  Connexion
                </Button>
                <Button className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 shadow-glow hover:shadow-glow-lg btn-premium text-black">
                  S'abonner
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden p-3 rounded-xl transition-all duration-300 ${
                  isOnLightBackground ? 'hover:bg-primary-50' : 'hover:bg-white/10'
                }`}
              >
                {isMobileMenuOpen ? 
                  <X className="w-5 h-5 text-primary-600" /> : 
                  <Menu className="w-5 h-5 text-primary-600" />
                }
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
          <div className={`fixed top-20 left-4 right-4 rounded-2xl p-6 animate-slide-down ${
            isOnLightBackground ? 'bg-white shadow-xl border border-gray-200' : 'glass'
          }`}>
            <nav className="space-y-4">
              {[
                { href: '/', label: 'Accueil' },
                { href: '/trainings', label: 'Formations' },
                { href: '/categories', label: 'Catégories' },
                { href: '/instructors', label: 'Instructeurs' },
                { href: '/affiliate', label: 'Affiliation' }
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                    isOnLightBackground 
                      ? 'text-primary-600 hover:bg-primary-50 hover:text-primary-700' 
                      : 'text-white hover:bg-white/10'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className={`pt-4 space-y-3 ${
                isOnLightBackground ? 'border-t border-primary-200/30' : 'border-t border-white/20'
              }`}>
                <Button variant="ghost" className={`w-full justify-start ${
                  isOnLightBackground 
                    ? 'text-primary-600 hover:text-primary-700 hover:bg-primary-50' 
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}>
                  Connexion
                </Button>
                <Button className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600">
                  S'abonner
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}