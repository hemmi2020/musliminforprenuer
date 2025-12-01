'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { Button } from '../ui/button';
import { Search, Bell, Menu, X, ChevronDown, User } from 'lucide-react';

export default function Header() {
  const { data: session, status } = useSession();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200' 
          : 'bg-white/80 backdrop-blur-md'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <Image
                src="/images/Gemini_Generated_Image_2e8hht2e.png"
                alt="MuslimInfopreneurs"
                width={40}
                height={40}
                className="rounded-lg transition-transform duration-200 group-hover:scale-105"
              />
              <div className="hidden sm:block">
                <span className="text-xl font-bold text-gray-900">
                  MuslimInfopreneurs
                </span>
                <div className="text-xs text-emerald-600 font-medium">Formation Business</div>
              </div>
            </Link>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {[
                { href: '/', label: 'Accueil', active: true },
                { href: '/formations', label: 'Formations' },
                { href: '/categories', label: 'Catégories' },
                { href: '/instructeurs', label: 'Instructeurs' },
                { href: '/entreprise', label: 'Entreprise' }
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    item.active 
                      ? 'text-emerald-600 bg-emerald-50' 
                      : 'text-gray-700 hover:text-emerald-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Right Section */}
            <div className="flex items-center space-x-3">
              {/* Search */}
              <div className="relative hidden md:block">
                <button 
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="p-2 text-gray-600 hover:text-emerald-600 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <Search className="w-5 h-5" />
                </button>
                
                {isSearchOpen && (
                  <div className="absolute top-full right-0 mt-2 w-80 bg-white rounded-xl shadow-lg border p-4 animate-in slide-in-from-top-2">
                    <input
                      type="text"
                      placeholder="Rechercher des formations..."
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      autoFocus
                    />
                  </div>
                )}
              </div>
              
              {/* Notifications */}
              <button className="relative p-2 text-gray-600 hover:text-emerald-600 hover:bg-gray-50 rounded-lg transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>

              {/* Auth Buttons */}
              <div className="hidden md:flex items-center space-x-3">
                {status === 'loading' ? (
                  <div className="w-20 h-8 bg-gray-200 rounded animate-pulse"></div>
                ) : session ? (
                  <>
                    <span className="text-sm text-gray-700">Bonjour, {session.user?.name}</span>
                    <Button 
                      variant="ghost" 
                      onClick={() => signOut()}
                      className="text-gray-700 hover:text-emerald-600 hover:bg-gray-50"
                    >
                      Déconnexion
                    </Button>
                  </>
                ) : (
                  <>
                    <Button 
                      variant="ghost" 
                      className="text-gray-700 hover:text-emerald-600 hover:bg-gray-50"
                      asChild
                    >
                      <Link href="/auth/signin">Connexion</Link>
                    </Button>
                    <Button 
                      className="bg-emerald-600 hover:bg-emerald-700 text-white"
                      asChild
                    >
                      <Link href="/auth/signup">Commencer</Link>
                    </Button>
                  </>
                )}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-gray-600 hover:text-emerald-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                {isMobileMenuOpen ? 
                  <X className="w-5 h-5" /> : 
                  <Menu className="w-5 h-5" />
                }
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="fixed top-16 left-4 right-4 bg-white rounded-xl shadow-xl border p-6 animate-in slide-in-from-top-4">
            <nav className="space-y-4">
              {[
                { href: '/', label: 'Accueil' },
                { href: '/formations', label: 'Formations' },
                { href: '/categories', label: 'Catégories' },
                { href: '/instructeurs', label: 'Instructeurs' },
                { href: '/entreprise', label: 'Entreprise' }
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 text-gray-700 hover:text-emerald-600 hover:bg-gray-50 rounded-lg font-medium transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                {status === 'loading' ? (
                  <div className="w-full h-8 bg-gray-200 rounded animate-pulse"></div>
                ) : session ? (
                  <>
                    <div className="px-4 py-2 text-sm text-gray-700">Bonjour, {session.user?.name}</div>
                    <Button 
                      variant="ghost" 
                      onClick={() => {
                        signOut();
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full justify-start text-gray-700 hover:text-emerald-600"
                    >
                      Déconnexion
                    </Button>
                  </>
                ) : (
                  <>
                    <Button 
                      variant="ghost" 
                      className="w-full justify-start text-gray-700 hover:text-emerald-600"
                      asChild
                    >
                      <Link href="/auth/signin" onClick={() => setIsMobileMenuOpen(false)}>Connexion</Link>
                    </Button>
                    <Button 
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                      asChild
                    >
                      <Link href="/auth/signup" onClick={() => setIsMobileMenuOpen(false)}>Commencer</Link>
                    </Button>
                  </>
                )}
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}