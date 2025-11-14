import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/images/Gemini_Generated_Image_2e8hht2e.png"
                alt="MuslimInfopreneurs Logo"
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="font-bold text-xl">MuslimInfopreneurs</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Plateforme de formation en ligne dédiée aux entrepreneurs musulmans. 
              Développez vos compétences avec des formations éthiques alignées sur les valeurs islamiques.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                📘
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                🐦
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                💼
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">YouTube</span>
                📺
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li><Link href="/trainings" className="text-gray-400 hover:text-white transition-colors">Formations</Link></li>
              <li><Link href="/categories" className="text-gray-400 hover:text-white transition-colors">Catégories</Link></li>
              <li><Link href="/instructors" className="text-gray-400 hover:text-white transition-colors">Instructeurs</Link></li>
              <li><Link href="/affiliate" className="text-gray-400 hover:text-white transition-colors">Programme d'Affiliation</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link href="/help" className="text-gray-400 hover:text-white transition-colors">Centre d'Aide</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Confidentialité</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-white transition-colors">Conditions</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 MuslimInfopreneurs. Tous droits réservés.
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">
            Fait avec ❤️ pour la communauté musulmane
          </p>
        </div>
      </div>
    </footer>
  );
}