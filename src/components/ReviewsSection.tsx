import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useState, useEffect } from 'react';

interface Review {
  name: string;
  text: string;
  rating: number;
  procedure: string;
}

interface ReviewsSectionProps {
  reviews: Review[];
}

const ReviewsSection = ({ reviews }: ReviewsSectionProps) => {
  const [activeReview, setActiveReview] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveReview((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  const reviewGradients = [
    "from-pink-500/10 to-rose-500/10",
    "from-blue-500/10 to-indigo-500/10", 
    "from-green-500/10 to-emerald-500/10"
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full px-6 py-2 mb-6">
            <Icon name="MessageSquare" size={16} className="text-primary mr-2" />
            <span className="text-sm font-medium text-primary">Отзывы пациентов</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Что говорят о нас
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 px-4 max-w-3xl mx-auto">
            Реальные отзывы наших пациентов о качестве лечения и сервисе
          </p>
        </div>

        {/* Featured review carousel */}
        <div className="mb-12">
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-white/90 to-gray-50/90 backdrop-blur-sm border-0 shadow-2xl overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Icon 
                        key={i} 
                        name="Star" 
                        size={20} 
                        className={`${i < reviews[activeReview]?.rating ? "text-yellow-400 fill-current" : "text-gray-300"} transition-colors duration-300`} 
                      />
                    ))}
                  </div>
                  <blockquote className="text-xl md:text-2xl font-accent text-gray-800 leading-relaxed mb-6 italic">
                    "{reviews[activeReview]?.text}"
                  </blockquote>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-lg text-gray-900">{reviews[activeReview]?.name}</div>
                      <Badge variant="outline" className="mt-2 bg-gradient-to-r from-primary/10 to-secondary/10">
                        {reviews[activeReview]?.procedure}
                      </Badge>
                    </div>
                    <div className="hidden md:block">
                      <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                        <Icon name="Quote" size={32} className="text-primary" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Carousel dots */}
          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveReview(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeReview === index 
                    ? 'bg-gradient-to-r from-primary to-secondary scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* All reviews grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br ${reviewGradients[index]} backdrop-blur-sm border-0 overflow-hidden ${
                activeReview === index ? 'ring-2 ring-primary scale-105' : ''
              }`}
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <CardHeader className="relative">
                {/* Floating quote */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Icon name="Quote" size={12} className="text-primary" />
                </div>
                
                <div className="flex items-center gap-2 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Icon 
                      key={i} 
                      name="Star" 
                      size={16} 
                      className={`${i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"} transition-all duration-300 group-hover:scale-110`} 
                      style={{transitionDelay: `${i * 0.1}s`}}
                    />
                  ))}
                </div>
                
                <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                  {review.name}
                </CardTitle>
                
                <Badge variant="outline" className="w-fit group-hover:bg-primary/10 group-hover:border-primary/50 transition-all duration-300">
                  {review.procedure}
                </Badge>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-600 font-accent text-sm leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                  "{review.text}"
                </p>
                
                {/* Verified badge */}
                <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-200/50">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                    <Icon name="Check" size={10} className="text-white" />
                  </div>
                  <span className="text-xs text-gray-500">Проверенный отзыв</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: "ThumbsUp", value: "98%", label: "Рекомендуют нас" },
            { icon: "Star", value: "4.9", label: "Средняя оценка" },
            { icon: "Users", value: "2000+", label: "Отзывов на сайте" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl hover:bg-white/80 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name={stat.icon as any} size={28} className="text-primary" />
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;