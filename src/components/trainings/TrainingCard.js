'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Star, Clock, Users, Play, BookOpen, Award } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';

export default function TrainingCard({ training }) {
  const {
    id,
    title,
    slug,
    thumbnail,
    instructorName,
    rating,
    duration,
    students,
    category,
    level,
    isNew,
    progress = 0
  } = training;

  const getLevelColor = (level) => {
    switch (level?.toLowerCase()) {
      case 'débutant':
        return 'bg-green-100 text-green-800';
      case 'intermédiaire':
        return 'bg-yellow-100 text-yellow-800';
      case 'avancé':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryIcon = (category) => {
    switch (category?.toLowerCase()) {
      case 'business':
        return <Award className="w-4 h-4" />;
      case 'finance':
        return <BookOpen className="w-4 h-4" />;
      default:
        return <BookOpen className="w-4 h-4" />;
    }
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md overflow-hidden bg-white">
      <div className="relative">
        <Image
          src={thumbnail}
          alt={title}
          width={400}
          height={240}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
          <Button 
            size="sm" 
            className="bg-white text-gray-900 hover:bg-gray-100 shadow-lg"
            asChild
          >
            <Link href={`/formations/${slug}`}>
              <Play className="w-4 h-4 mr-2" />
              Voir le cours
            </Link>
          </Button>
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {isNew && (
            <span className="bg-emerald-600 text-white px-2 py-1 rounded-md text-xs font-medium">
              Nouveau
            </span>
          )}
          <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-2 py-1 rounded-md text-xs font-medium flex items-center gap-1">
            {getCategoryIcon(category)}
            {category}
          </span>
        </div>

        {/* Progress bar if in progress */}
        {progress > 0 && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20">
            <div 
              className="h-full bg-emerald-500 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}
      </div>

      <CardContent className="p-6">
        <div className="space-y-4">
          {/* Title and Level */}
          <div className="space-y-2">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-emerald-600 transition-colors">
                {title}
              </h3>
              <span className={`px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap ${getLevelColor(level)}`}>
                {level}
              </span>
            </div>
            <p className="text-sm text-gray-600">{instructorName}</p>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium text-gray-700">{rating}</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span>{students}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{duration}</span>
              </div>
            </div>
          </div>

          {/* Progress if applicable */}
          {progress > 0 && (
            <div className="pt-2 border-t border-gray-100">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Progression</span>
                <span className="font-medium text-emerald-600">{progress}%</span>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}