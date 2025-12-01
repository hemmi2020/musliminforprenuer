export default function Privacy() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Politique de Confidentialité</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
          </p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Collecte des Informations</h2>
            <p className="text-gray-700 mb-4">
              Nous collectons les informations que vous nous fournissez directement, telles que votre nom, 
              adresse e-mail et autres informations de profil lorsque vous créez un compte.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Utilisation des Informations</h2>
            <p className="text-gray-700 mb-4">
              Nous utilisons vos informations pour fournir, maintenir et améliorer nos services, 
              traiter les transactions et communiquer avec vous.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Partage des Informations</h2>
            <p className="text-gray-700 mb-4">
              Nous ne vendons, n'échangeons ni ne louons vos informations personnelles à des tiers 
              sans votre consentement explicite.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Contact</h2>
            <p className="text-gray-700">
              Pour toute question concernant cette politique, contactez-nous à : 
              <a href="mailto:contact@musliminfopreneurs.com" className="text-emerald-600 hover:text-emerald-700">
                contact@musliminfopreneurs.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}