import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

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
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Отзывы пациентов</h2>
          <p className="text-lg sm:text-xl text-gray-600 px-4">Что говорят о нас наши пациенты</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Icon 
                      key={i} 
                      name="Star" 
                      size={16} 
                      className={i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"} 
                    />
                  ))}
                </div>
                <CardTitle className="text-lg">{review.name}</CardTitle>
                <Badge variant="outline">{review.procedure}</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-accent text-sm sm:text-lg leading-relaxed">
                  "{review.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;