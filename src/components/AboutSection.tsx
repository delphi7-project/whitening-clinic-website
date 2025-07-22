import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const AboutSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">О клинике Белоснежка</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            15 лет мы помогаем нашим пациентам обрести здоровые и красивые зубы. 
            Современное оборудование, квалифицированные врачи и индивидуальный подход — 
            вот секрет нашего успеха.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={32} className="text-primary" />
              </div>
              <CardTitle>Европейские стандарты</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Соблюдаем международные протоколы лечения и стерилизации
              </p>
            </CardContent>
          </Card>
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={32} className="text-secondary" />
              </div>
              <CardTitle>Опытная команда</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Врачи с опытом от 10 лет и постоянным повышением квалификации
              </p>
            </CardContent>
          </Card>
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Heart" size={32} className="text-primary" />
              </div>
              <CardTitle>Человечный подход</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Заботимся о комфорте каждого пациента, особенно детей
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;