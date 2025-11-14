import Image from "next/image";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Search, Filter, Star, Clock, Users, Play } from "lucide-react";

export default function Trainings() {
  const trainings = [
    {
      id: 1,
      title: "Islamic Business Fundamentals",
      instructor: "Dr. Ahmed Hassan",
      duration: "4h 30m",
      students: "2.5K",
      rating: 4.9,
      level: "Beginner",
      category: "Business",
      thumbnail: "/images/Gemini_Generated_Image_2e8hht2e8hht2e8h.png",
      price: "Premium"
    },
    {
      id: 2,
      title: "Halal Marketing Strategies",
      instructor: "Sarah Al-Mahmoud",
      duration: "3h 15m",
      students: "1.8K",
      rating: 4.8,
      level: "Intermediate",
      category: "Marketing",
      thumbnail: "/images/Gemini_Generated_Image_2ee8hht2e8h.png",
      price: "Premium"
    },
    {
      id: 3,
      title: "Islamic Finance & Investment",
      instructor: "Prof. Omar Khalil",
      duration: "6h 45m",
      students: "3.2K",
      rating: 4.9,
      level: "Advanced",
      category: "Finance",
      thumbnail: "/images/Gemini_Generated_Image_2ht2e8hht2e8h.png",
      price: "Premium"
    },
    {
      id: 4,
      title: "Entrepreneurship in Islam",
      instructor: "Dr. Fatima Zahra",
      duration: "5h 20m",
      students: "2.1K",
      rating: 4.7,
      level: "Beginner",
      category: "Business",
      thumbnail: "/images/Gemini_Generated_Image_2e8hht2e.png",
      price: "Premium"
    }
  ];

  const categories = ["Tout", "Business", "Marketing", "Finance", "Leadership", "Technologie"];
  const levels = ["Tous Niveaux", "Débutant", "Intermédiaire", "Avancé"];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header Section */}
      <section className="py-12 px-4 bg-gradient-to-r from-green-900/20 to-black">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Bibliothèque de Formations</h1>
          <p className="text-xl text-gray-300 mb-8">Maîtrisez les principes du business islamique avec des cours menés par des experts</p>
          
          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher des formations..."
                className="w-full pl-10 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
              />
            </div>
            <select className="px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-green-500">
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            <select className="px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-green-500">
              {levels.map(level => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>
            <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
              <Filter className="w-4 h-4 mr-2" />
              More Filters
            </Button>
          </div>
        </div>
      </section>

      {/* Training Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">All Trainings ({trainings.length})</h2>
            <select className="px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white text-sm">
              <option>Sort by: Most Popular</option>
              <option>Sort by: Newest</option>
              <option>Sort by: Rating</option>
              <option>Sort by: Duration</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {trainings.map((training) => (
              <Card key={training.id} className="bg-gray-900 border-gray-800 hover:border-green-600 transition-all duration-300 group cursor-pointer">
                <CardContent className="p-0">
                  <div className="relative">
                    <Image
                      src={training.thumbnail}
                      alt={training.title}
                      width={400}
                      height={225}
                      className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-t-lg">
                      <Button size="sm" className="bg-white text-black hover:bg-gray-200">
                        <Play className="w-4 h-4 mr-2" />
                        Preview
                      </Button>
                    </div>
                    <div className="absolute top-2 left-2 bg-green-600 text-xs px-2 py-1 rounded-full font-medium">
                      {training.price}
                    </div>
                    <div className="absolute top-2 right-2 bg-black/70 text-xs px-2 py-1 rounded-full">
                      {training.level}
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-semibold text-white mb-2 line-clamp-2 group-hover:text-green-400 transition-colors">
                      {training.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">{training.instructor}</p>
                    
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
                      <Button size="sm" variant="ghost" className="text-green-400 hover:text-green-300 hover:bg-green-900/20">
                        Watch Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-gray-700 text-white hover:bg-gray-800">
              Load More Trainings
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Explore by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Business Strategy", count: 24, color: "from-blue-600 to-blue-800" },
              { name: "Islamic Finance", count: 18, color: "from-green-600 to-green-800" },
              { name: "Halal Marketing", count: 15, color: "from-purple-600 to-purple-800" },
              { name: "Leadership", count: 12, color: "from-orange-600 to-orange-800" }
            ].map((category, index) => (
              <Card key={index} className={`bg-gradient-to-br ${category.color} border-none hover:scale-105 transition-transform cursor-pointer`}>
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-white mb-2">{category.name}</h3>
                  <p className="text-sm text-white/80">{category.count} courses</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}