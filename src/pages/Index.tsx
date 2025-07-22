import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [totalCost, setTotalCost] = useState(0);

  const services = [
    { id: 'cleaning', name: 'Профессиональная чистка', price: 3500, description: 'Удаление зубного налета и камня' },
    { id: 'filling', name: 'Лечение кариеса', price: 5500, description: 'Современные композитные пломбы' },
    { id: 'whitening', name: 'Отбеливание зубов', price: 12000, description: 'Безопасное отбеливание на 6-8 тонов' },
    { id: 'crown', name: 'Коронки', price: 18000, description: 'Керамические коронки премиум-класса' },
    { id: 'implant', name: 'Имплантация', price: 45000, description: 'Швейцарские импланты с гарантией' },
    { id: 'braces', name: 'Брекет-системы', price: 85000, description: 'Исправление прикуса любой сложности' },
  ];

  const doctors = [
    { 
      name: 'Анна Сергеевна Волкова', 
      specialty: 'Главный врач, стоматолог-терапевт',
      experience: '15 лет опыта',
      education: 'МГМСУ им. Евдокимова',
      certificates: ['Эндодонтия', 'Эстетическая стоматология']
    },
    { 
      name: 'Дмитрий Александрович Орлов', 
      specialty: 'Стоматолог-хирург, имплантолог',
      experience: '12 лет опыта',
      education: 'СПбГМУ им. Павлова',
      certificates: ['Имплантология', 'Костная пластика']
    },
    { 
      name: 'Елена Викторовна Смирнова', 
      specialty: 'Стоматолог-ортодонт',
      experience: '10 лет опыта',
      education: 'РУДН',
      certificates: ['Элайнеры Invisalign', 'Детская ортодонтия']
    },
  ];

  const reviews = [
    {
      name: 'Мария К.',
      text: 'Удивительная клиника! Лечение проходило абсолютно безболезненно, доктор Волкова настоящий профессионал. Боялась идти к стоматологу годами, а здесь почувствовала себя как дома.',
      rating: 5,
      procedure: 'Лечение кариеса'
    },
    {
      name: 'Сергей М.',
      text: 'Сделал имплантацию у доктора Орлова. Весь процесс прошел идеально, никакой боли или дискомфорта. Результат превзошел все ожидания!',
      rating: 5,
      procedure: 'Имплантация'
    },
    {
      name: 'Ольга Р.',
      text: 'Спасибо огромное докторе Смирновой за красивую улыбку! Брекеты носила полтора года, результат потрясающий. Персонал очень внимательный.',
      rating: 5,
      procedure: 'Брекет-система'
    },
  ];

  const calculateCost = (serviceId: string) => {
    const service = services.find(s => s.id === serviceId);
    if (service) {
      setTotalCost(service.price);
      setSelectedService(serviceId);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Icon name="Smile" size={32} className="text-primary" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Белоснежка</h1>
                <p className="text-sm text-gray-500">Стоматологическая клиника</p>
              </div>
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              <Icon name="Phone" size={16} className="mr-2" />
              +7 (495) 123-45-67
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Ваша улыбка —<br />
                <span className="text-primary">наша забота</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
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
              <div className="flex items-center gap-6 mt-8">
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
                <h3 className="text-2xl font-semibold mb-6 text-center">Безболезненное лечение</h3>
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
                    <span className="text-gray-700">Седация для тревожных пациентов</span>
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

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">О клинике Белоснежка</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Услуги и цены</h2>
            <p className="text-xl text-gray-600">Прозрачное ценообразование без скрытых платежей</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service) => (
              <Card 
                key={service.id} 
                className={`cursor-pointer transition-all hover:shadow-lg ${
                  selectedService === service.id ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => calculateCost(service.id)}
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{service.name}</CardTitle>
                    <Badge variant="secondary" className="text-lg font-semibold">
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

      {/* Doctors Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Наша команда</h2>
            <p className="text-xl text-gray-600">
              Опытные врачи с международными сертификатами
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-24 h-24 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name="User" size={40} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{doctor.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {doctor.specialty}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p className="flex items-center justify-center gap-2">
                      <Icon name="GraduationCap" size={16} />
                      {doctor.education}
                    </p>
                    <p className="flex items-center justify-center gap-2">
                      <Icon name="Clock" size={16} />
                      {doctor.experience}
                    </p>
                    <div className="flex flex-wrap gap-1 justify-center mt-4">
                      {doctor.certificates.map((cert, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Современное оборудование</h2>
            <p className="text-xl text-gray-600">
              Инновационные технологии для точной диагностики и качественного лечения
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Scan" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-lg">3D томограф</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Точная диагностика за 15 секунд
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Zap" size={32} className="text-secondary" />
                </div>
                <CardTitle className="text-lg">Диодный лазер</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Безболезненное лечение десен
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Monitor" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-lg">Микроскоп</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Увеличение в 40 раз для точности
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Cpu" size={32} className="text-secondary" />
                </div>
                <CardTitle className="text-lg">CAD/CAM</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Коронки за одно посещение
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Отзывы пациентов</h2>
            <p className="text-xl text-gray-600">Что говорят о нас наши пациенты</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  <p className="text-gray-600 font-accent text-lg leading-relaxed">
                    "{review.text}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">Записаться на прием</h2>
            <p className="text-xl text-white/90">
              Заполните форму, и мы свяжемся с вами в течение 30 минут
            </p>
          </div>
          <Card>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ваше имя *
                    </label>
                    <Input placeholder="Введите ваше имя" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Телефон *
                    </label>
                    <Input placeholder="+7 (999) 123-45-67" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Input placeholder="your@email.com" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Желаемая услуга
                    </label>
                    <select className="w-full p-2 border border-gray-300 rounded-md">
                      <option>Консультация</option>
                      {services.map(service => (
                        <option key={service.id}>{service.name}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Комментарий
                    </label>
                    <Textarea 
                      placeholder="Опишите ваши пожелания или вопросы" 
                      className="h-24"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
                <p className="text-sm text-gray-500 mt-4">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Частые вопросы</h2>
            <p className="text-xl text-gray-600">Ответы на самые популярные вопросы</p>
          </div>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Действительно ли лечение безболезненное?</AccordionTrigger>
              <AccordionContent>
                Да! Мы используем современные анестетики и методы седации. Для особо тревожных 
                пациентов предлагаем лечение под седацией. 99% наших пациентов не испытывают 
                никакого дискомфорта во время лечения.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Какие гарантии вы предоставляете?</AccordionTrigger>
              <AccordionContent>
                Мы даем гарантию на все виды лечения: пломбы — 2 года, коронки — 5 лет, 
                импланты — пожизненно. Также предоставляем сертификат качества на все работы.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Можно ли лечиться в рассрочку?</AccordionTrigger>
              <AccordionContent>
                Конечно! Мы предлагаем беспроцентную рассрочку на все виды лечения. 
                Также работаем с медицинскими кредитами от банков-партнеров.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Лечите ли вы детей?</AccordionTrigger>
              <AccordionContent>
                Да! У нас есть специальный детский кабинет с игровой зоной. Наши врачи 
                прошли специальную подготовку по работе с детьми и знают, как найти подход к маленьким пациентам.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Контакты</h2>
            <p className="text-xl text-gray-600">Приходите к нам на бесплатную консультацию</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" size={32} className="text-primary" />
                </div>
                <CardTitle>Наш адрес</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  г. Москва, ул. Пречистенка, д. 15<br />
                  метро Кропоткинская
                </p>
                <Button variant="outline" className="mt-4">
                  <Icon name="Eye" size={16} className="mr-2" />
                  3D-тур по клинике
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Clock" size={32} className="text-secondary" />
                </div>
                <CardTitle>Время работы</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Пн-Пт: 9:00 - 21:00<br />
                  Сб-Вс: 10:00 - 18:00<br />
                  <span className="text-secondary font-medium">Работаем без выходных</span>
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" size={32} className="text-primary" />
                </div>
                <CardTitle>Телефон</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary mb-2">
                  +7 (495) 123-45-67
                </p>
                <p className="text-gray-600 text-sm">
                  Звоните в любое время<br />
                  Консультации 24/7
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Smile" size={24} className="text-primary" />
                <span className="text-xl font-bold">Белоснежка</span>
              </div>
              <p className="text-gray-300 text-sm">
                Современная стоматология с человечным подходом. 
                Создаем красивые улыбки уже 15 лет.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Лечение кариеса</li>
                <li>Протезирование</li>
                <li>Имплантация</li>
                <li>Ортодонтия</li>
                <li>Профилактика</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Информация</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>О клинике</li>
                <li>Врачи</li>
                <li>Цены</li>
                <li>Отзывы</li>
                <li>Лицензии</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <p>г. Москва, ул. Пречистенка, д. 15</p>
                <p>+7 (495) 123-45-67</p>
                <p>info@belosnezhka.ru</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Стоматологическая клиника "Белоснежка". Лицензия № ЛО-77-01-021234
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;