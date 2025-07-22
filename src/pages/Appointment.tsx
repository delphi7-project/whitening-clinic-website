import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppointmentSection from '@/components/AppointmentSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Appointment = () => {
  const services = [
    { id: 'cleaning', name: 'Профессиональная чистка', price: 3500, description: 'Удаление зубного налета и камня' },
    { id: 'filling', name: 'Лечение кариеса', price: 5500, description: 'Современные композитные пломбы' },
    { id: 'whitening', name: 'Отбеливание зубов', price: 12000, description: 'Безопасное отбеливание на 6-8 тонов' },
    { id: 'crown', name: 'Коронки', price: 18000, description: 'Керамические коронки премиум-класса' },
    { id: 'implant', name: 'Имплантация', price: 45000, description: 'Швейцарские импланты с гарантией' },
    { id: 'braces', name: 'Брекет-системы', price: 85000, description: 'Исправление прикуса любой сложности' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Записаться на <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">прием</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Заполните форму, и мы свяжемся с вами в течение 30 минут для подтверждения записи. 
            Первичная консультация бесплатная!
          </p>
        </div>
      </section>

      <AppointmentSection services={services} />

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Почему выбирают нас
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Clock" size={32} className="text-primary" />
                </div>
                <CardTitle>Быстрая запись</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Запись онлайн или по телефону. Подтверждение в течение 30 минут
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Heart" size={32} className="text-secondary" />
                </div>
                <CardTitle>Без боли</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Современная анестезия и седация для максимального комфорта
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" size={32} className="text-primary" />
                </div>
                <CardTitle>Гарантия качества</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Гарантия на все виды лечения до 5 лет. Европейские стандарты
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="CreditCard" size={32} className="text-secondary" />
                </div>
                <CardTitle>Удобная оплата</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Рассрочка 0%, медицинские кредиты, все виды оплаты
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Контактная информация
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                <p className="text-gray-600">
                  Звоните в любое время<br />
                  Консультации 24/7
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" size={32} className="text-secondary" />
                </div>
                <CardTitle>Адрес</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  г. Москва, ул. Пречистенка, д. 15<br />
                  метро Кропоткинская<br />
                  2 минуты пешком
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Clock" size={32} className="text-primary" />
                </div>
                <CardTitle>Режим работы</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Пн-Пт: 9:00 - 21:00<br />
                  Сб-Вс: 10:00 - 18:00<br />
                  <span className="text-secondary font-medium">Без выходных</span>
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

export default Appointment;