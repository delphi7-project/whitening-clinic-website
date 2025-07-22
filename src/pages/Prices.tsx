import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Prices = () => {
  const priceCategories = [
    {
      category: "Консультация и диагностика",
      services: [
        { name: "Первичная консультация", price: "Бесплатно", description: "Осмотр, составление плана лечения" },
        { name: "Повторная консультация", price: "1 500", description: "Контрольный осмотр" },
        { name: "Рентген зуба", price: "800", description: "Прицельный снимок" },
        { name: "Панорамный снимок", price: "2 000", description: "ОПТГ" },
        { name: "3D томография", price: "4 500", description: "КТ челюстно-лицевой области" },
      ]
    },
    {
      category: "Лечение кариеса",
      services: [
        { name: "Лечение поверхностного кариеса", price: "4 500", description: "Пломба из композита" },
        { name: "Лечение среднего кариеса", price: "5 500", description: "Пломба из композита премиум" },
        { name: "Лечение глубокого кариеса", price: "6 500", description: "С лечебной прокладкой" },
        { name: "Художественная реставрация", price: "8 500", description: "Восстановление формы и цвета" },
        { name: "Лечение пульпита (1 канал)", price: "7 500", description: "Эндодонтическое лечение" },
        { name: "Лечение пульпита (2 канала)", price: "12 000", description: "Эндодонтическое лечение" },
        { name: "Лечение пульпита (3 канала)", price: "15 000", description: "Эндодонтическое лечение" },
      ]
    },
    {
      category: "Профессиональная гигиена",
      services: [
        { name: "Профессиональная чистка", price: "3 500", description: "Ультразвук + Air Flow + полировка" },
        { name: "Снятие зубного камня", price: "2 000", description: "Ультразвуковая чистка" },
        { name: "Air Flow", price: "2 500", description: "Удаление налета содо-струйным аппаратом" },
        { name: "Фторирование", price: "1 500", description: "Укрепление эмали" },
        { name: "Герметизация фиссур", price: "2 000", description: "Профилактика кариеса" },
      ]
    },
    {
      category: "Отбеливание зубов",
      services: [
        { name: "Отбеливание Zoom 4", price: "25 000", description: "Профессиональное отбеливание в кресле" },
        { name: "Домашнее отбеливание", price: "15 000", description: "Каппы + гель на 2 недели" },
        { name: "Комбинированное отбеливание", price: "35 000", description: "Кабинетное + домашнее" },
        { name: "Отбеливание Amazing White", price: "12 000", description: "Щадящее отбеливание" },
      ]
    },
    {
      category: "Протезирование",
      services: [
        { name: "Коронка металлокерамическая", price: "15 000", description: "Классическое протезирование" },
        { name: "Коронка керамическая E-max", price: "25 000", description: "Безметалловая керамика" },
        { name: "Коронка циркониевая", price: "30 000", description: "Диоксид циркония" },
        { name: "Винир керамический", price: "35 000", description: "Эстетическая реставрация" },
        { name: "Винир композитный", price: "15 000", description: "Прямая реставрация" },
        { name: "Съемный протез частичный", price: "25 000", description: "Акриловый базис" },
        { name: "Съемный протез полный", price: "35 000", description: "Полное протезирование" },
      ]
    },
    {
      category: "Имплантация",
      services: [
        { name: "Имплант Nobel Biocare", price: "55 000", description: "Премиум система (Швеция)" },
        { name: "Имплант Straumann", price: "50 000", description: "Премиум система (Швейцария)" },
        { name: "Имплант Osstem", price: "35 000", description: "Система эконом класса" },
        { name: "Коронка на имплант", price: "25 000", description: "Циркониевая коронка" },
        { name: "Синус-лифтинг закрытый", price: "25 000", description: "Костная пластика" },
        { name: "Синус-лифтинг открытый", price: "45 000", description: "Костная пластика" },
        { name: "Костная пластика", price: "30 000", description: "Наращивание костной ткани" },
      ]
    },
    {
      category: "Ортодонтия",
      services: [
        { name: "Брекеты металлические", price: "80 000", description: "Полный курс лечения" },
        { name: "Брекеты керамические", price: "120 000", description: "Эстетические брекеты" },
        { name: "Брекеты сапфировые", price: "150 000", description: "Прозрачные брекеты" },
        { name: "Лингвальные брекеты", price: "200 000", description: "Невидимые брекеты" },
        { name: "Элайнеры Invisalign", price: "250 000", description: "Прозрачные каппы" },
        { name: "Ретейнеры", price: "15 000", description: "Закрепление результата" },
      ]
    },
    {
      category: "Хирургия",
      services: [
        { name: "Удаление зуба простое", price: "3 000", description: "Подвижный зуб" },
        { name: "Удаление зуба сложное", price: "5 000", description: "С разрезом десны" },
        { name: "Удаление зуба мудрости", price: "8 000", description: "Ретинированный зуб" },
        { name: "Резекция верхушки корня", price: "12 000", description: "Зубосохраняющая операция" },
        { name: "Лечение периодонтита", price: "15 000", description: "Хирургическое лечение" },
        { name: "Пластика уздечки", price: "8 000", description: "Коррекция уздечки" },
      ]
    },
    {
      category: "Детская стоматология",
      services: [
        { name: "Консультация детского стоматолога", price: "1 500", description: "Первичный осмотр" },
        { name: "Лечение молочного зуба", price: "3 500", description: "Цветная пломба" },
        { name: "Серебрение зубов", price: "500", description: "За 1 зуб" },
        { name: "Фторирование детских зубов", price: "2 000", description: "Профилактика кариеса" },
        { name: "Удаление молочного зуба", price: "2 000", description: "Безболезненное удаление" },
        { name: "Герметизация фиссур", price: "1 500", description: "Профилактика кариеса" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Цены на <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">услуги</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Прозрачное ценообразование без скрытых платежей. Все цены фиксированы 
            и действительны до конца года. Первичная консультация бесплатная!
          </p>
        </div>
      </section>

      {/* Price Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {priceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                {category.category}
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {category.services.map((service, serviceIndex) => (
                  <Card key={serviceIndex} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {service.name}
                          </h3>
                          <p className="text-gray-600 text-sm">
                            {service.description}
                          </p>
                        </div>
                        <div className="ml-4 text-right">
                          <Badge 
                            variant="secondary" 
                            className={`text-lg font-bold px-4 py-2 ${
                              service.price === "Бесплатно" 
                                ? "bg-green-100 text-green-800" 
                                : "bg-primary/10 text-primary"
                            }`}
                          >
                            {service.price === "Бесплатно" ? service.price : `${service.price} ₽`}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Способы оплаты
            </h2>
            <p className="text-lg text-gray-600">
              Выберите удобный для вас способ оплаты лечения
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="CreditCard" size={32} className="text-primary" />
                </div>
                <CardTitle>Рассрочка 0%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Беспроцентная рассрочка на все виды лечения до 12 месяцев
                </p>
                <Button variant="outline">Подробнее</Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Banknote" size={32} className="text-secondary" />
                </div>
                <CardTitle>Медицинский кредит</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Кредит от банков-партнеров на выгодных условиях
                </p>
                <Button variant="outline">Оформить</Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Wallet" size={32} className="text-primary" />
                </div>
                <CardTitle>Все виды оплаты</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Наличные, карты, переводы, корпоративная оплата
                </p>
                <Button variant="outline">Способы</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Discounts and Promotions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Скидки и акции
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardHeader>
                <div className="text-3xl font-bold text-primary mb-2">20%</div>
                <CardTitle>Комплексное лечение</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Скидка при лечении от 3 зубов
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-to-br from-secondary/5 to-primary/5">
              <CardHeader>
                <div className="text-3xl font-bold text-secondary mb-2">15%</div>
                <CardTitle>Семейная скидка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  При лечении всей семьи
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardHeader>
                <div className="text-3xl font-bold text-primary mb-2">10%</div>
                <CardTitle>Пенсионерам</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Постоянная скидка для пенсионеров
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-to-br from-secondary/5 to-primary/5">
              <CardHeader>
                <div className="text-3xl font-bold text-secondary mb-2">5%</div>
                <CardTitle>Студентам</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Скидка при предъявлении студенческого
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

export default Prices;