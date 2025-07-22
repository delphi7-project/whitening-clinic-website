import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Ваша улыбка —<br />
              <span className="text-primary">наша забота</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Современная стоматология с человечным подходом. Безболезненное лечение, 
              европейские стандарты качества и 15 лет опыта создания красивых улыбок.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Icon name="Calendar" size={20} className="mr-2" />
                Записаться на прием
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="Play" size={20} className="mr-2" />
                Виртуальный тур
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mt-8">
              <div className="flex items-center gap-2">
                <Icon name="Shield" size={20} className="text-secondary" />
                <span className="text-sm text-gray-600">Гарантия качества</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Heart" size={20} className="text-secondary" />
                <span className="text-sm text-gray-600">Безболезненно</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Clock" size={20} className="text-secondary" />
                <span className="text-sm text-gray-600">24/7 поддержка</span>
              </div>
            </div>
          </div>
          <div className="animate-scale-in">
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-center">Безболезненное лечение</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center">
                    <Icon name="Check" size={16} className="text-secondary" />
                  </div>
                  <span className="text-gray-700">Современная анестезия</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center">
                    <Icon name="Check" size={16} className="text-secondary" />
                  </div>
                  <span className="text-gray-700 text-sm sm:text-base">Седация для тревожных пациентов</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center">
                    <Icon name="Check" size={16} className="text-secondary" />
                  </div>
                  <span className="text-gray-700">Лазерные технологии</span>
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