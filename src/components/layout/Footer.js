import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Plateforme': [
      { label: 'Formations', href: '/formations' },
      { label: 'Catégories', href: '/categories' },
      { label: 'Instructeurs', href: '/instructeurs' },
      { label: 'Tarifs', href: '/tarifs' },
    ],
    'Entreprise': [
      { label: 'À propos', href: '/a-propos' },
      { label: 'Carrières', href: '/carrieres' },
      { label: 'Presse', href: '/presse' },
      { label: 'Partenaires', href: '/partenaires' },
    ],
    'Support': [
      { label: 'Centre d\'aide', href: '/aide' },
      { label: 'Contact', href: '/contact' },
      { label: 'Communauté', href: '/communaute' },
      { label: 'Blog', href: '/blog' },
    ],
    'Légal': [
      { label: 'Conditions d\'utilisation', href: '/conditions' },
      { label: 'Politique de confidentialité', href: '/confidentialite' },
      { label: 'Cookies', href: '/cookies' },
      { label: 'Conformité Halal', href: '/halal' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <Image
                src="/images/Gemini_Generated_Image_2e8hht2e.png"
                alt="MuslimInfopreneurs"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <div>
                <span className="text-xl font-bold">MuslimInfopreneurs</span>
                <div className="text-sm text-emerald-400">Formation Business Islamique</div>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed max-w-md">
              La première plateforme de formation dédiée aux entrepreneurs musulmans. 
              Développez votre business en respectant les valeurs islamiques.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>contact@musliminfopreneurs.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>Paris, France</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="p-2 bg-gray-800 hover:bg-emerald-600 rounded-lg transition-colors"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-4">
              <h3 className="font-semibold text-white">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-emerald-400 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-lg font-semibold mb-2">Restez informé</h3>
              <p className="text-gray-300 text-sm">
                Recevez nos dernières formations et conseils business directement dans votre boîte mail.
              </p>
            </div>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
              <button className="px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium transition-colors">
                S'abonner
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-400">
            © {currentYear} MuslimInfopreneurs. Tous droits réservés.
          </div>
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <span className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
              <span>100% Conforme Halal</span>
            </span>
            <span className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span>Certifié ISO 27001</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}