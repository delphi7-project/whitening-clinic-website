import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Service {
  id: string;
  name: string;
  price: number;
  description: string;
}

interface ServicesSectionProps {
  services: Service[];
  selectedService: string | null;
  totalCost: number;
  onServiceSelect: (serviceId: string) => void;
}

const ServicesSection = ({ services, selectedService, totalCost, onServiceSelect }: ServicesSectionProps) => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Услуги и цены</h2>
          <p className="text-lg sm:text-xl text-gray-600 px-4">Прозрачное ценообразование без скрытых платежей</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12">
          {services.map((service) => (
            <Card 
              key={service.id} 
              className={`cursor-pointer transition-all hover:shadow-lg ${
                selectedService === service.id ? 'ring-2 ring-primary' : ''
              }`}
              onClick={() => onServiceSelect(service.id)}
            >
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{service.name}</CardTitle>
                  <Badge variant="secondary" className="text-sm sm:text-lg font-semibold whitespace-nowrap">
                    {service.price.toLocaleString()} ₽
                  </Badge>
                </div>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant={selectedService === service.id ? "default" : "outline"} 
                  className="w-full"
                >
                  {selectedService === service.id ? 'Выбрано' : 'Выбрать'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Cost Calculator */}
        {totalCost > 0 && (
          <Card className="max-w-md mx-auto animate-scale-in">
            <CardHeader>
              <CardTitle className="text-center">Предварительная стоимость</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-3xl font-bold text-primary mb-4">
                {totalCost.toLocaleString()} ₽
              </div>
              <Button className="w-full">
                <Icon name="Calendar" size={16} className="mr-2" />
                Записаться на консультацию
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;