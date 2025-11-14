'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from "next/image";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import TrainingCard from "../components/trainings/TrainingCard";
import HorizontalCarousel from "../components/trainings/HorizontalCarousel";
import { Play, Star, Users, BookOpen, TrendingUp, Award, ArrowRight, CheckCircle, Globe, Shield, Clock } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  const featuredTraining = {
    title: "Stratégies d'Entreprise Islamique Avancées",
    description: "Maîtrisez l'art de construire des entreprises prospères en respectant les principes islamiques.",
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
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Modern Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 via-white to-emerald-50 pb-16 overflow-hidden">
        <motion.div 
          style={{ y }}
          className="absolute inset-0 bg-grid-pattern opacity-5"
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="space-y-8"
            >
              <motion.div 
                variants={fadeInUp}
                className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium"
              >
                <Star className="w-4 h-4 mr-2" />
                Plateforme #1 pour entrepreneurs musulmans
              </motion.div>
              
              <motion.h1 
                variants={fadeInUp}
                className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              >
                Développez votre
                <motion.span 
                  className="text-emerald-600 block"
                  animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  Business Islamique
                </motion.span>
              </motion.h1>
              
              <motion.p 
                variants={fadeInUp}
                className="text-xl text-gray-600 leading-relaxed max-w-lg"
              >
                Rejoignez plus de 10,000 entrepreneurs qui construisent des entreprises prospères en respectant les valeurs islamiques.
              </motion.p>
              
              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(16, 185, 129, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg rounded-xl">
                    <Play className="w-5 h-5 mr-2" />
                    Commencer gratuitement
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="outline" className="border-2 border-gray-300 hover:border-emerald-600 px-8 py-4 text-lg rounded-xl">
                    Découvrir les formations
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </motion.div>
              </motion.div>
              
              <motion.div 
                variants={fadeInUp}
                className="flex items-center space-x-8 pt-4"
              >
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="w-8 h-8 bg-emerald-100 rounded-full border-2 border-white"></div>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">10,000+ étudiants</span>
                </div>
                <div className="flex items-center space-x-1">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">4.9/5 (2,340 avis)</span>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Right Content */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative -mt-16"
            >
              <motion.div 
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative bg-white rounded-2xl shadow-2xl p-8 border"
              >
                <motion.div 
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-3 -right-3 bg-emerald-600 text-white px-3 py-1 rounded-lg text-xs font-semibold shadow-lg z-10"
                >
                  Formation vedette
                </motion.div>
                <Image
                  src={featuredTraining.thumbnail}
                  alt={featuredTraining.title}
                  width={400}
                  height={240}
                  className="w-full h-48 object-cover rounded-xl mb-6"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{featuredTraining.title}</h3>
                <p className="text-gray-600 mb-4">{featuredTraining.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {featuredTraining.students}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {featuredTraining.duration}
                    </span>
                  </div>
                  <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105">
                    Voir le cours
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-gray-50 border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            <motion.div 
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -5 }}
              className="space-y-2"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <CheckCircle className="w-8 h-8 text-emerald-600 mx-auto" />
              </motion.div>
              <div className="text-2xl font-bold text-gray-900">100%</div>
              <div className="text-sm text-gray-600">Conforme Halal</div>
            </motion.div>
            <motion.div 
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -5 }}
              className="space-y-2"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
              >
                <Globe className="w-8 h-8 text-emerald-600 mx-auto" />
              </motion.div>
              <div className="text-2xl font-bold text-gray-900">50+</div>
              <div className="text-sm text-gray-600">Pays représentés</div>
            </motion.div>
            <motion.div 
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -5 }}
              className="space-y-2"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
              >
                <Shield className="w-8 h-8 text-emerald-600 mx-auto" />
              </motion.div>
              <div className="text-2xl font-bold text-gray-900">24/7</div>
              <div className="text-sm text-gray-600">Support client</div>
            </motion.div>
            <motion.div 
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -5 }}
              className="space-y-2"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
              >
                <Award className="w-8 h-8 text-emerald-600 mx-auto" />
              </motion.div>
              <div className="text-2xl font-bold text-gray-900">98%</div>
              <div className="text-sm text-gray-600">Taux de satisfaction</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Continue Watching */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Continuer à regarder</h2>
              <p className="text-gray-600">Reprenez là où vous vous êtes arrêté</p>
            </div>
            <Button variant="outline" className="hidden md:flex">
              Voir tout
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {continueWatching.map((training, index) => (
              <motion.div
                key={training.id}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                  <div className="relative">
                    <Image
                      src={training.thumbnail}
                      alt={training.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-lg flex items-center justify-center">
                      <Button size="sm" className="bg-white text-gray-900 hover:bg-gray-100">
                        <Play className="w-4 h-4 mr-2" />
                        Continuer
                      </Button>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200 rounded-b-lg">
                      <div 
                        className="h-full bg-emerald-600 rounded-b-lg transition-all duration-300"
                        style={{ width: `${training.progress}%` }}
                      />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                      {training.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">{training.instructor}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-emerald-600 font-medium">{training.progress}% terminé</span>
                      <span className="text-gray-500">{training.duration}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Popular Trainings */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Formations populaires</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez les cours les plus appréciés par notre communauté d'entrepreneurs
            </p>
          </div>
          
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {popularTrainings.map((training, index) => (
              <motion.div key={training.id} variants={fadeInUp}>
                <TrainingCard training={training} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Explorer par catégorie</h2>
            <p className="text-gray-600">Trouvez la formation qui correspond à vos objectifs</p>
          </div>
          
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { name: "Business", count: 24, color: "bg-blue-500", icon: TrendingUp },
              { name: "Finance", count: 18, color: "bg-emerald-500", icon: BookOpen },
              { name: "Marketing", count: 15, color: "bg-purple-500", icon: Award },
              { name: "Leadership", count: 12, color: "bg-orange-500", icon: Users }
            ].map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -10, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-0 shadow-md">
                    <CardContent className="p-6 text-center">
                      <motion.div 
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className={`w-12 h-12 ${category.color} rounded-xl flex items-center justify-center mx-auto mb-4`}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </motion.div>
                      <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                      <p className="text-sm text-gray-600">{category.count} formations</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-700 relative overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -right-20 w-40 h-40 border border-white/20 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-10 -left-10 w-32 h-32 border border-white/20 rounded-full"
        />
        
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-6"
          >
            Prêt à transformer votre business ?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto"
          >
            Rejoignez des milliers d'entrepreneurs musulmans qui construisent des entreprises éthiques et prospères
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-600 hover:text-white px-8 py-4 text-lg min-w-[200px]">
                Commencer gratuitement
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-600 hover:text-white px-8 py-4 text-lg min-w-[200px]">
                Découvrir les prix
              </Button>
            </motion.div>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-emerald-200 text-sm mt-6"
          >
            Essai gratuit de 7 jours • Aucune carte de crédit requise • Annulation à tout moment
          </motion.p>
        </div>
      </section>
    </div>
  );
}