import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Check, Star, Users, BookOpen } from "lucide-react";

export default function Subscribe() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-b from-green-900/20 to-black">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Débloquez Votre Potentiel <span className="text-green-500">Business Islamique</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Rejoignez des milliers d'entrepreneurs musulmans qui construisent des entreprises éthiques et rentables avec notre plateforme de formation complète.
          </p>
          <div className="flex items-center justify-center gap-8 mb-12">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="font-medium">4.9/5 Note</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-green-400" />
              <span className="font-medium">10,000+ Étudiants</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-blue-400" />
              <span className="font-medium">50+ Formations</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Monthly Plan */}
            <Card className="bg-gray-900 border-gray-700 hover:border-green-600 transition-all duration-300">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-white">Mensuel</CardTitle>
                <CardDescription className="text-gray-400">Parfait pour commencer</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-white">€9.99</span>
                  <span className="text-gray-400">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {[
                    "Accès à toutes les formations",
                    "Streaming vidéo HD",
                    "Accès mobile et desktop",
                    "Suivi des progrès",
                    "Accès au forum communautaire",
                    "Sessions Q&R en direct mensuelles"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 mt-8">
                  Commencer l'Abonnement Mensuel
                </Button>
                <p className="text-xs text-gray-500 text-center">Annulez à tout moment</p>
              </CardContent>
            </Card>

            {/* Annual Plan */}
            <Card className="bg-gradient-to-b from-green-900 to-green-800 border-green-600 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                BEST VALUE
              </div>
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-white">Annuel</CardTitle>
                <CardDescription className="text-green-100">Économisez 33% avec la facturation annuelle</CardDescription>
                <div className="mt-4">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-lg text-green-200 line-through">€118.87</span>
                    <span className="text-4xl font-bold text-white">€79.99</span>
                  </div>
                  <span className="text-green-100">/year</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {[
                    "Tout du plan Mensuel",
                    "Support client prioritaire",
                    "Ateliers annuels exclusifs",
                    "Ressources téléchargeables",
                    "Session de mentorat 1-à-1",
                    "Certificat de complétion",
                    "Accès au programme d'affiliation"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-300" />
                      <span className="text-white">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full bg-white text-green-800 hover:bg-gray-100 font-semibold py-3 mt-8">
                  Commencer l'Abonnement Annuel
                </Button>
                <p className="text-xs text-green-200 text-center">Économisez 38,88€ par an</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Questions Fréquemment Posées</h2>
          <div className="space-y-6">
            {[
              {
                question: "Le contenu est-il conforme à la Charia ?",
                answer: "Oui, tout notre contenu de formation est revu par des érudits islamiques pour assurer la conformité aux principes de la Charia."
              },
              {
                question: "Puis-je annuler mon abonnement à tout moment ?",
                answer: "Absolument. Vous pouvez annuler votre abonnement à tout moment sans frais d'annulation."
              },
              {
                question: "Offrez-vous des remboursements ?",
                answer: "Nous offrons une garantie de remboursement de 30 jours si vous n'êtes pas satisfait de notre plateforme."
              },
              {
                question: "Comment fonctionne le programme d'affiliation ?",
                answer: "Gagnez 15% de commission sur chaque parrainage réussi. Suivez vos gains via votre tableau de bord."
              }
            ].map((faq, index) => (
              <Card key={index} className="bg-black border-gray-800">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                  <p className="text-gray-400">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Prêt à Commencer Votre Parcours ?</h2>
          <p className="text-gray-400 mb-8">Rejoignez dès aujourd'hui la communauté d'entrepreneurs musulmans à succès.</p>
          <Button size="lg" className="bg-green-600 hover:bg-green-700 font-semibold">
            Choisir Votre Plan
          </Button>
        </div>
      </section>
    </div>
  );
}