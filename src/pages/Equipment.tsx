import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EquipmentSection from '@/components/EquipmentSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Equipment = () => {
  const equipmentList = [
    {
      name: '3D томограф Planmeca ProMax',
      description: 'Высокоточная диагностика за 15 секунд с минимальной лучевой нагрузкой',
      features: ['Разрешение до 75 мкм', 'Низкая доза облучения', '3D планирование имплантации'],
      icon: 'Scan'
    },
    {
      name: 'Диодный лазер Picasso Lite',
      description: 'Безболезненное лечение десен и мягких тканей',
      features: ['Бесконтактное лечение', 'Быстрое заживление', 'Стерилизующий эффект'],
      icon: 'Zap'
    },
    {
      name: 'Операционный микроскоп Zeiss',
      description: 'Увеличение в 40 раз для максимальной точности лечения',
      features: ['LED освещение', 'Запись процедур', 'Эргономичный дизайн'],
      icon: 'Monitor'
    },
    {
      name: 'CAD/CAM система CEREC',
      description: 'Изготовление коронок и виниров за одно посещение',
      features: ['Цифровой оттиск', 'Керамические реставрации', 'Точная посадка'],
      icon: 'Cpu'
    },
    {
      name: 'Ультразвуковой скалер EMS',
      description: 'Деликатная профессиональная чистка зубов',
      features: ['Удаление налета', 'Полировка эмали', 'Антибактериальный эффект'],
      icon: 'Sparkles'
    },
    {
      name: 'Система отбеливания Philips Zoom',
      description: 'Профессиональное отбеливание на 8 тонов за час',
      features: ['Безопасная формула', 'Быстрый результат', 'Долговременный эффект'],
      icon: 'Sun'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Современное <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">оборудование</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Инновационные технологии для точной диагностики и качественного лечения. 
            Мы используем только проверенное оборудование ведущих мировых производителей.
          </p>
        </div>
      </section>

      <EquipmentSection />

      {/* Detailed Equipment List */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Подробнее об оборудовании
            </h2>
            <p className="text-lg text-gray-600">
              Каждый аппарат выбран с учетом максимального комфорта и безопасности пациентов
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {equipmentList.map((equipment, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name={equipment.icon as any} size={24} className="text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{equipment.name}</CardTitle>
                      <p className="text-gray-600 mt-2">{equipment.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">Преимущества:</h4>
                    <ul className="space-y-1">
                      {equipment.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <Icon name="Check" size={16} className="text-primary" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Standards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Стандарты безопасности
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" size={32} className="text-primary" />
                </div>
                <CardTitle>Стерилизация</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Автоклавы класса B для полной стерилизации всех инструментов
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Droplets" size={32} className="text-secondary" />
                </div>
                <CardTitle>Очистка воздуха</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Система HEPA-фильтрации для чистого воздуха в кабинетах
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="FileCheck" size={32} className="text-primary" />
                </div>
                <CardTitle>Сертификация</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Все оборудование сертифицировано и проходит регулярное обслуживание
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Equipment;