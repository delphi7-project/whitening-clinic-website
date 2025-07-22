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
  const serviceIcons = {
    cleaning: "Sparkles",
    filling: "Heart",
    whitening: "Sun",
    crown: "Crown",
    implant: "Zap",
    braces: "Smile"
  };

  const serviceColors = {
    cleaning: "from-blue-500/10 to-cyan-500/10",
    filling: "from-red-500/10 to-pink-500/10", 
    whitening: "from-yellow-500/10 to-orange-500/10",
    crown: "from-purple-500/10 to-indigo-500/10",
    implant: "from-green-500/10 to-emerald-500/10",
    braces: "from-teal-500/10 to-blue-500/10"
  };

  return (
    <section className="py-20 relative">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary/5 rounded-full blur-2xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full px-6 py-2 mb-6">
            <Icon name="Star" size={16} className="text-primary mr-2" />
            <span className="text-sm font-medium text-primary">Прозрачные цены</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Услуги и цены
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 px-4 max-w-3xl mx-auto">
            Прозрачное ценообразование без скрытых платежей. Все цены фиксированы и действительны до конца года.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <Card 
              key={service.id} 
              className={`group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                selectedService === service.id 
                  ? 'ring-2 ring-primary shadow-2xl scale-105' 
                  : 'hover:scale-105'
              } bg-gradient-to-br ${serviceColors[service.id as keyof typeof serviceColors]} backdrop-blur-sm border-0`}
              onClick={() => onServiceSelect(service.id)}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <CardHeader className="relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/20 to-transparent rounded-bl-3xl"></div>
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-2xl bg-gradient-to-r ${
                    selectedService === service.id 
                      ? 'from-primary to-secondary' 
                      : 'from-gray-100 to-gray-200 group-hover:from-primary/20 group-hover:to-secondary/20'
                  } transition-all duration-300`}>
                    <Icon 
                      name={serviceIcons[service.id as keyof typeof serviceIcons] as any} 
                      size={24} 
                      className={`${
                        selectedService === service.id 
                          ? 'text-white' 
                          : 'text-gray-600 group-hover:text-primary'
                      } transition-colors duration-300`} 
                    />
                  </div>
                  <Badge 
                    variant="secondary" 
                    className={`text-lg font-bold px-4 py-2 ${
                      selectedService === service.id
                        ? 'bg-gradient-to-r from-primary to-secondary text-white'
                        : 'bg-white/80 text-gray-800 group-hover:bg-primary/10'
                    } transition-all duration-300 animate-pulse`}
                  >
                    {service.price.toLocaleString()} ₽
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                  {service.name}
                </CardTitle>
                <CardDescription className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant={selectedService === service.id ? "default" : "outline"} 
                  className={`w-full group-hover:shadow-lg transition-all duration-300 ${
                    selectedService === service.id 
                      ? 'bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90' 
                      : 'hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 hover:border-primary/50'
                  }`}
                >
                  {selectedService === service.id ? (
                    <>
                      <Icon name="Check" size={16} className="mr-2" />
                      Выбрано
                    </>
                  ) : (
                    <>
                      <Icon name="Plus" size={16} className="mr-2 group-hover:rotate-90 transition-transform duration-300" />
                      Выбрать
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Cost Calculator */}
        {totalCost > 0 && (
          <div className="flex justify-center">
            <Card className="max-w-md w-full animate-scale-in bg-gradient-to-br from-primary/5 to-secondary/5 border-0 shadow-2xl">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center animate-pulse">
                  <Icon name="Calculator" size={24} className="text-white" />
                </div>
                <CardTitle className="text-2xl bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Предварительная стоимость
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="relative mb-6">
                  <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-pulse">
                    {totalCost.toLocaleString()} ₽
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl opacity-50 animate-ping"></div>
                </div>
                <div className="space-y-3">
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <Icon name="Calendar" size={18} className="mr-2 group-hover:animate-bounce" />
                    Записаться на консультацию
                  </Button>
                  <p className="text-sm text-gray-500">
                    Точная стоимость определяется после консультации
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Benefits section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: "Shield", title: "Гарантия", desc: "На все услуги до 5 лет" },
            { icon: "CreditCard", title: "Рассрочка", desc: "0% на 12 месяцев" },
            { icon: "Clock", title: "Скидки", desc: "До 20% при комплексном лечении" }
          ].map((benefit, index) => (
            <div key={index} className="flex items-center gap-4 p-4 bg-white/50 rounded-2xl hover:bg-white/80 transition-all duration-300 hover:scale-105" style={{animationDelay: `${index * 0.2}s`}}>
              <div className="w-12 h-12 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center">
                <Icon name={benefit.icon as any} size={20} className="text-primary" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">{benefit.title}</div>
                <div className="text-sm text-gray-600">{benefit.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;