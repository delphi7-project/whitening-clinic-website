import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [currentStat, setCurrentStat] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    { number: "15", label: "лет опыта" },
    { number: "5000+", label: "довольных пациентов" },
    { number: "99%", label: "безболезненных процедур" }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-white to-secondary/5 py-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-3xl animate-spin" style={{animationDuration: '20s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full px-4 py-2 mb-6">
              <Icon name="Sparkles" size={16} className="text-primary mr-2" />
              <span className="text-sm font-medium text-primary">Премиум стоматология</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Ваша <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">улыбка</span> —<br />
              <span className="relative">
                наша забота
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-full transform scale-x-0 animate-scale-in" style={{animationDelay: '0.5s', animationFillMode: 'forwards'}}></div>
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Современная стоматология с человечным подходом. Безболезненное лечение, 
              европейские стандарты качества и 15 лет опыта создания красивых улыбок.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="group bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300">
                <Icon name="Calendar" size={20} className="mr-2 group-hover:animate-pulse" />
                Записаться на прием
                <div className="absolute inset-0 bg-white/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
              <Button size="lg" variant="outline" className="group border-2 hover:bg-gradient-to-r hover:from-primary/5 hover:to-secondary/5 transition-all duration-300">
                <Icon name="Play" size={20} className="mr-2 group-hover:text-primary transition-colors duration-300" />
                Виртуальный тур
              </Button>
            </div>

            {/* Animated stats */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className={`text-center transition-all duration-500 ${currentStat === index ? 'scale-110' : 'scale-100'}`}>
                    <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-xs text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '0.3s'}}>
            <div className="relative">
              {/* Floating cards animation */}
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full animate-bounce" style={{animationDelay: '1s', animationDuration: '3s'}}></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-xl animate-bounce" style={{animationDelay: '2s', animationDuration: '3s'}}></div>

              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-500 hover:scale-105">
                <div className="flex items-center justify-center mb-6">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center animate-pulse">
                      <Icon name="Heart" size={32} className="text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-secondary rounded-full animate-ping"></div>
                  </div>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-center bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Безболезненное лечение
                </h3>
                
                <div className="space-y-4">
                  {[
                    { icon: "Zap", text: "Современная анестезия", delay: "0s" },
                    { icon: "Shield", text: "Седация для тревожных пациентов", delay: "0.2s" },
                    { icon: "Sparkles", text: "Лазерные технологии", delay: "0.4s" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 group hover:scale-105 transition-transform duration-300" style={{animationDelay: item.delay}}>
                      <div className="w-10 h-10 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-full flex items-center justify-center group-hover:from-secondary/30 group-hover:to-primary/30 transition-all duration-300">
                        <Icon name={item.icon as any} size={18} className="text-secondary group-hover:text-primary transition-colors duration-300" />
                      </div>
                      <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300 font-medium">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Progress bar animation */}
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Удовлетворенность пациентов</span>
                    <span>99%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full animate-scale-in" style={{width: '99%', animationDelay: '1s', animationDuration: '2s'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;