'use client';

import Image from "next/image";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import TrainingCard from "../components/trainings/TrainingCard";
import HorizontalCarousel from "../components/trainings/HorizontalCarousel";
import { Play, Star, Users, BookOpen, TrendingUp, Award, Info } from "lucide-react";

export default function Home() {
  // Données d'exemple selon la documentation
  const featuredTraining = {
    title: "Stratégies d'Entreprise Islamique Avancées",
    description: "Maîtrisez l'art de construire des entreprises prospères en respectant les principes islamiques. Formation complète par des experts reconnus.",
    instructor: "Dr. Ahmed Hassan",
    rating: 4.9,
    students: "12K+",
    duration: "8h 30m",
    thumbnail: "/images/Gemini_Generated_Image_2e8hht2e.png"
  };

  const continueWatching = [
    {
      id: 1,
      title: "Fondamentaux de la Finance Islamique",
      thumbnail: "/images/Gemini_Generated_Image_2e8hht2e8hht2e8h.png",
      progress: 65,
      duration: "4h 20m",
      instructor: "Prof. Omar Khalil"
    },
    {
      id: 2,
      title: "Marketing Halal et Éthique",
      thumbnail: "/images/Gemini_Generated_Image_2ee8hht2e8h.png",
      progress: 30,
      duration: "3h 15m",
      instructor: "Sarah Al-Mahmoud"
    },
    {
      id: 3,
      title: "Leadership Islamique Moderne",
      thumbnail: "/images/Gemini_Generated_Image_2ht2e8hht2e8h.png",
      progress: 80,
      duration: "5h 45m",
      instructor: "Dr. Fatima Zahra"
    },
    {
      id: 4,
      title: "Entrepreneuriat et Innovation",
      thumbnail: "/images/Gemini_Generated_Image_2e8hht2e.png",
      progress: 15,
      duration: "6h 10m",
      instructor: "Youssef Benali"
    }
  ];

  const popularTrainings = [
    {
      id: 1,
      title: "Stratégies d'Entreprise Islamique",
      slug: "strategies-entreprise-islamique",
      thumbnail: "/images/Gemini_Generated_Image_2e8hht2e8hht2e8h.png",
      instructorName: "Dr. Ahmed Hassan",
      rating: 4.9,
      duration: "4h 30m",
      students: "2.5K",
      category: "Business",
      level: "Intermédiaire",
      isNew: true,
      progress: 0
    },
    {
      id: 2,
      title: "Marketing Halal Avancé",
      slug: "marketing-halal-avance",
      thumbnail: "/images/Gemini_Generated_Image_2ee8hht2e8h.png",
      instructorName: "Sarah Al-Mahmoud",
      rating: 4.8,
      duration: "3h 15m",
      students: "1.8K",
      category: "Marketing",
      level: "Avancé",
      isNew: false,
      progress: 0
    },
    {
      id: 3,
      title: "Finance Islamique Complète",
      slug: "finance-islamique-complete",
      thumbnail: "/images/Gemini_Generated_Image_2ht2e8hht2e8h.png",
      instructorName: "Prof. Omar Khalil",
      rating: 4.9,
      duration: "6h 45m",
      students: "3.2K",
      category: "Finance",
      level: "Débutant",
      isNew: false,
      progress: 0
    },
    {
      id: 4,
      title: "Leadership et Management",
      slug: "leadership-management",
      thumbnail: "/images/Gemini_Generated_Image_2e8hht2e.png",
      instructorName: "Dr. Fatima Zahra",
      rating: 4.7,
      duration: "5h 20m",
      students: "2.1K",
      category: "Leadership",
      level: "Intermédiaire",
      isNew: false,
      progress: 0
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Premium Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background with parallax effect */}
        <div className="absolute inset-0">
          <Image
            src={featuredTraining.thumbnail}
            alt={featuredTraining.title}
            fill
            className="object-cover scale-110 transition-transform duration-[20s] ease-out"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-primary-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-accent-500/20 rounded-full blur-2xl animate-bounce-gentle"></div>
        
        <div className="relative z-20 max-w-4xl ml-4 md:ml-16 animate-fade-in-up pt-16">
          {/* Premium badge */}
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-semibold text-white shadow-glow">
              <span className="w-2 h-2 bg-primary-400 rounded-full animate-pulse"></span>
              Formation Vedette
            </span>
          </div>
          
          {/* Main title with gradient */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-8 leading-none">
            <span className="block gradient-text animate-gradient bg-gradient-to-r from-white via-primary-200 to-primary-400 bg-300% bg-clip-text text-transparent">
              Maîtrisez le
            </span>
            <span className="block text-white mt-2">
              Business <span className="gradient-text">Islamique</span>
            </span>
          </h1>
          
          {/* Description with better typography */}
          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed max-w-2xl font-light">
            Rejoignez <span className="font-semibold text-primary-300">10,000+ entrepreneurs</span> qui transforment leurs idées en entreprises prospères avec nos formations éthiques et innovantes.
          </p>
          
          {/* Enhanced stats */}
          <div className="flex flex-wrap items-center gap-8 mb-10">
            {[
              { icon: Star, value: featuredTraining.rating, label: 'Note Moyenne', color: 'text-yellow-400' },
              { icon: Users, value: featuredTraining.students, label: 'Étudiants Actifs', color: 'text-primary-400' },
              { icon: BookOpen, value: '50+', label: 'Formations', color: 'text-blue-400' }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="flex items-center gap-3 glass px-4 py-3 rounded-xl">
                  <IconComponent className={`w-6 h-6 ${stat.color}`} />
                  <div>
                    <div className="font-bold text-lg text-white">{stat.value}</div>
                    <div className="text-xs text-gray-400 font-medium">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Premium CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 text-white font-semibold px-8 py-4 text-lg shadow-glow hover:shadow-glow-lg btn-premium group"
            >
              <Play className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
              Commencer Maintenant
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="glass border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg btn-premium group backdrop-blur-sm"
            >
              <Info className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform" />
              Découvrir Plus
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-8 flex items-center gap-6 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              Certifié Halal
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
              Garantie 30 jours
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
              Support 24/7
            </span>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Continuer à Regarder - Premium */}
      <section className="py-20 px-4 md:px-16 bg-gradient-to-b from-black to-gray-925">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Continuer à <span className="gradient-text">Regarder</span>
            </h2>
            <p className="text-gray-400 text-lg">Reprenez là où vous vous êtes arrêté</p>
          </div>
          
          <HorizontalCarousel>
            {continueWatching.map((training) => (
              <div key={training.id} className="min-w-[340px] group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl card-hover">
                  <Image
                    src={training.thumbnail}
                    alt={training.title}
                    width={340}
                    height={190}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <Button className="bg-white text-black hover:bg-gray-200 shadow-premium btn-premium">
                      <Play className="w-5 h-5 mr-2" />
                      Continuer
                    </Button>
                  </div>
                  
                  {/* Progress bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-800">
                    <div 
                      className="h-full bg-gradient-to-r from-primary-500 to-primary-400 transition-all duration-500 shadow-glow"
                      style={{ width: `${training.progress}%` }}
                    />
                  </div>
                  
                  {/* Progress badge */}
                  <div className="absolute top-3 right-3 glass px-3 py-1 rounded-full">
                    <span className="text-xs font-semibold text-white">{training.progress}%</span>
                  </div>
                  
                  {/* Content overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-semibold text-white mb-1 group-hover:text-primary-300 transition-colors">
                      {training.title}
                    </h3>
                    <p className="text-xs text-gray-300">{training.instructor}</p>
                  </div>
                </div>
              </div>
            ))}
          </HorizontalCarousel>
        </div>
      </section>

      {/* Formations Populaires */}
      <section className="py-12 px-4 md:px-16">
        <HorizontalCarousel title="Formations Populaires">
          {popularTrainings.map((training) => (
            <div key={training.id} className="min-w-[280px]">
              <TrainingCard training={training} />
            </div>
          ))}
        </HorizontalCarousel>
      </section>

      {/* Catégories par Domaine */}
      <section className="py-12 px-4 md:px-16">
        <h2 className="text-2xl font-bold mb-8">Explorer par Catégorie</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "Business", count: 24, color: "from-blue-600 to-blue-800", icon: TrendingUp },
            { name: "Finance", count: 18, color: "from-green-600 to-green-800", icon: BookOpen },
            { name: "Marketing", count: 15, color: "from-purple-600 to-purple-800", icon: Award },
            { name: "Leadership", count: 12, color: "from-orange-600 to-orange-800", icon: Users }
          ].map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className={`bg-gradient-to-br ${category.color} border-none hover:scale-105 transition-transform cursor-pointer`}>
                <CardContent className="p-6 text-center">
                  <IconComponent className="w-8 h-8 text-white mx-auto mb-3" />
                  <h3 className="font-semibold text-white mb-1">{category.name}</h3>
                  <p className="text-sm text-white/80">{category.count} formations</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Featured Instructors */}
      <section className="py-12 px-4 md:px-16 bg-gray-900">
        <h2 className="text-2xl font-bold mb-6">Instructeurs en Vedette</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((instructor) => (
            <Card key={instructor} className="bg-black border-gray-800 hover:border-green-600 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">MI</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Dr. Ahmed Hassan</h3>
                <p className="text-gray-400 text-sm mb-3">Expert en Finance Islamique</p>
                <div className="flex items-center justify-center gap-4 text-sm">
                  <span className="text-green-400">4.9 ★</span>
                  <span className="text-gray-400">2.5K Students</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA d'Abonnement */}
      <section className="py-16 px-4 md:px-16 bg-gradient-to-r from-green-600 to-green-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Commencez Votre Parcours Business Islamique</h2>
          <p className="text-xl mb-8 text-green-100">Rejoignez des milliers d'entrepreneurs musulmans qui construisent des entreprises éthiques</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 font-semibold">
              Essai Gratuit
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-green-600">
              Voir les Prix
            </Button>
          </div>
          <p className="text-sm text-green-200 mt-4">Aucune carte de crédit requise • Annulez à tout moment</p>
        </div>
      </section>
    </div>
  );
}
