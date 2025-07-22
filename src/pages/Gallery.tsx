import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Gallery = () => {
  const beforeAfterCases = [
    {
      id: 1,
      title: "Комплексная реставрация улыбки",
      description: "Установка виниров на 8 зубов",
      category: "Эстетическая стоматология",
      beforeImage: "https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=400",
      afterImage: "https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 2,
      title: "Исправление прикуса брекетами",
      description: "Лечение скученности зубов за 18 месяцев",
      category: "Ортодонтия",
      beforeImage: "https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=400",
      afterImage: "https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 3,
      title: "Имплантация с немедленной нагрузкой",
      description: "Восстановление жевательного зуба за 1 день",
      category: "Имплантология",
      beforeImage: "https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=400",
      afterImage: "https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 4,
      title: "Отбеливание Zoom 4",
      description: "Осветление на 8 тонов за 1 процедуру",
      category: "Отбеливание",
      beforeImage: "https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=400",
      afterImage: "https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 5,
      title: "Лечение множественного кариеса",
      description: "Восстановление 6 зубов композитными пломбами",
      category: "Терапия",
      beforeImage: "https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=400",
      afterImage: "https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 6,
      title: "Полное протезирование на имплантах",
      description: "Восстановление всех зубов верхней челюсти",
      category: "Протезирование",
      beforeImage: "https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=400",
      afterImage: "https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const clinicPhotos = [
    {
      title: "Ресепшн",
      description: "Уютная зона ожидания",
      image: "https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Кабинет терапевта",
      description: "Современное оборудование",
      image: "https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Операционная",
      description: "Стерильная операционная",
      image: "https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Детский кабинет",
      description: "Яркий кабинет для детей",
      image: "https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Рентген-кабинет",
      description: "3D томограф",
      image: "https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Стерилизационная",
      description: "Обработка инструментов",
      image: "https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Галерея <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">работ</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Примеры наших работ "до" и "после", фотографии клиники и современного оборудования. 
            Убедитесь в качестве нашего лечения своими глазами.
          </p>
        </div>
      </section>

      {/* Before/After Cases */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Результаты лечения
            </h2>
            <p className="text-lg text-gray-600">
              Реальные случаи из нашей практики
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {beforeAfterCases.map((case_) => (
              <Card key={case_.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <img 
                      src={case_.beforeImage} 
                      alt="До лечения"
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 left-2">
                      <Badge variant="destructive">ДО</Badge>
                    </div>
                  </div>
                  <div className="relative">
                    <img 
                      src={case_.afterImage} 
                      alt="После лечения"
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 left-2">
                      <Badge className="bg-green-600">ПОСЛЕ</Badge>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {case_.title}
                    </h3>
                    <Badge variant="outline">{case_.category}</Badge>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    {case_.description}
                  </p>
                  <Button variant="outline" size="sm">
                    <Icon name="Eye" size={16} className="mr-2" />
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic Photos */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Наша клиника
            </h2>
            <p className="text-lg text-gray-600">
              Современные кабинеты и оборудование для вашего комфорта
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clinicPhotos.map((photo, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative overflow-hidden">
                  <img 
                    src={photo.image} 
                    alt={photo.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Icon name="ZoomIn" size={32} className="text-white" />
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {photo.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {photo.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tour */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            3D-тур по клинике
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Познакомьтесь с нашей клиникой, не выходя из дома
          </p>
          
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center mb-8">
            <div className="text-center">
              <Icon name="Play" size={64} className="text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">Виртуальный 3D-тур</p>
              <p className="text-sm text-gray-400">Нажмите для запуска</p>
            </div>
          </div>
          
          <Button size="lg" className="bg-gradient-to-r from-primary to-secondary">
            <Icon name="Eye" size={20} className="mr-2" />
            Начать виртуальный тур
          </Button>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Наши достижения
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">5000+</div>
              <div className="text-gray-600">Успешных случаев</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">15</div>
              <div className="text-gray-600">Лет опыта</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-gray-600">Довольных пациентов</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">6</div>
              <div className="text-gray-600">Специалистов</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;