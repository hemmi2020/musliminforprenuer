'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Star, Clock, Users, Play, Heart } from 'lucide-react';
import { useState } from 'react';

export default function TrainingCard({ training }) {
  const [isLiked, setIsLiked] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  return (
    <Card className="bg-gray-900 border-gray-800 hover:border-green-600 transition-all duration-300 group cursor-pointer overflow-hidden">
      <CardContent className="p-0">
        <div 
          className="relative"
          onMouseEnter={() => setShowPreview(true)}
          onMouseLeave={() => setShowPreview(false)}
        >
          <Image
            src={training.thumbnail}
            alt={training.title}
            width={400}
            height={225}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          
          {/* Overlay de prévisualisation */}
          {showPreview && (
            <div className="absolute inset-0 bg-black/70 flex items-center justify-center transition-opacity duration-300">
              <Button size="sm" className="bg-white text-black hover:bg-gray-200">
                <Play className="w-4 h-4 mr-2" />
                Aperçu
              </Button>
            </div>
          )}

          {/* Badges */}
          <div className="absolute top-2 left-2 flex gap-2">
            {training.isNew && (
              <span className="bg-green-600 text-xs px-2 py-1 rounded-full font-medium">
                Nouveau
              </span>
            )}
            {training.level && (
              <span className="bg-black/70 text-xs px-2 py-1 rounded-full">
                {training.level}
              </span>
            )}
          </div>

          {/* Bouton Like */}
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsLiked(!isLiked);
            }}
            className="absolute top-2 right-2 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
          >
            <Heart 
              className={`w-4 h-4 ${isLiked ? 'text-red-500 fill-current' : 'text-white'}`} 
            />
          </button>

          {/* Barre de progression si commencé */}
          {training.progress > 0 && (
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-600">
              <div 
                className="h-full bg-green-500 transition-all duration-300"
                style={{ width: `${training.progress}%` }}
              />
            </div>
          )}
        </div>
        
        <div className="p-4">
          <Link href={`/trainings/${training.slug}`}>
            <h3 className="font-semibold text-white mb-2 line-clamp-2 group-hover:text-green-400 transition-colors">
              {training.title}
            </h3>
          </Link>
          
          <p className="text-gray-400 text-sm mb-3">{training.instructorName}</p>
          
          <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span>{training.rating}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{training.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{training.students}</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-xs bg-gray-800 px-2 py-1 rounded-full text-gray-300">
              {training.category}
            </span>
            <Button 
              size="sm" 
              variant="ghost" 
              className="text-green-400 hover:text-green-300 hover:bg-green-900/20"
            >
              {training.progress > 0 ? 'Continuer' : 'Commencer'}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}