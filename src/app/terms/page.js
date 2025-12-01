export default function Terms() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Conditions d'Utilisation</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
          </p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptation des Conditions</h2>
            <p className="text-gray-700 mb-4">
              En accédant et en utilisant MuslimInfopreneurs, vous acceptez d'être lié par ces 
              conditions d'utilisation et toutes les lois et réglementations applicables.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Utilisation du Service</h2>
            <p className="text-gray-700 mb-4">
              Vous vous engagez à utiliser notre plateforme de manière responsable et conforme 
              aux principes islamiques et aux bonnes pratiques commerciales.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Propriété Intellectuelle</h2>
            <p className="text-gray-700 mb-4">
              Tout le contenu présent sur cette plateforme, y compris les formations, textes, 
              images et vidéos, est protégé par les droits d'auteur.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Limitation de Responsabilité</h2>
            <p className="text-gray-700 mb-4">
              MuslimInfopreneurs ne peut être tenu responsable des dommages directs ou indirects 
              résultant de l'utilisation de nos services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Contact</h2>
            <p className="text-gray-700">
              Pour toute question concernant ces conditions, contactez-nous à : 
              <a href="mailto:legal@musliminfopreneurs.com" className="text-emerald-600 hover:text-emerald-700">
                legal@musliminfopreneurs.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}