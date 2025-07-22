import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Наши <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">контакты</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Мы всегда готовы ответить на ваши вопросы и помочь с записью на прием. 
            Выберите удобный способ связи с нами.
          </p>
        </div>
      </section>

      <ContactSection />

      {/* Detailed Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Способы связи
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" size={32} className="text-primary" />
                </div>
                <CardTitle>Телефон</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-bold text-primary mb-2">
                  +7 (495) 123-45-67
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  Ежедневно 9:00 - 21:00
                </p>
                <Button variant="outline" size="sm">
                  Позвонить
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MessageCircle" size={32} className="text-secondary" />
                </div>
                <CardTitle>WhatsApp</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-bold text-secondary mb-2">
                  +7 (495) 123-45-67
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  Быстрые ответы 24/7
                </p>
                <Button variant="outline" size="sm">
                  Написать
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Send" size={32} className="text-primary" />
                </div>
                <CardTitle>Telegram</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-bold text-primary mb-2">
                  @belosnezhka_clinic
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  Онлайн консультации
                </p>
                <Button variant="outline" size="sm">
                  Открыть
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" size={32} className="text-secondary" />
                </div>
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-bold text-secondary mb-2">
                  info@belosnezhka.ru
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  Ответ в течение часа
                </p>
                <Button variant="outline" size="sm">
                  Написать
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map and Directions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Как нас найти
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Адрес и проезд</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" size={20} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold">г. Москва, ул. Пречистенка, д. 15</p>
                    <p className="text-gray-600">метро Кропоткинская, 2 минуты пешком</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Icon name="Car" size={20} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Парковка</p>
                    <p className="text-gray-600">Бесплатная парковка для пациентов во дворе</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Icon name="Bus" size={20} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Общественный транспорт</p>
                    <p className="text-gray-600">Автобусы: 15, 33, 255. Остановка "Пречистенка"</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Ориентиры</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Рядом с музеем А.С. Пушкина</li>
                  <li>• Напротив кафе "Пушкин"</li>
                  <li>• В здании с зеленой вывеской</li>
                  <li>• Вход со двора, 2 этаж</li>
                </ul>
              </div>
            </div>

            <div>
              <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Icon name="MapPin" size={48} className="text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Интерактивная карта</p>
                  <p className="text-sm text-gray-400">г. Москва, ул. Пречистенка, д. 15</p>
                </div>
              </div>
              
              <div className="mt-6 flex gap-4">
                <Button className="flex-1">
                  <Icon name="Navigation" size={16} className="mr-2" />
                  Построить маршрут
                </Button>
                <Button variant="outline" className="flex-1">
                  <Icon name="Eye" size={16} className="mr-2" />
                  3D-тур
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Icon name="AlertCircle" size={32} className="text-red-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Экстренная помощь
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            При острой зубной боли или травме обращайтесь к нам круглосуточно
          </p>
          
          <div className="bg-white p-6 rounded-lg shadow-lg inline-block">
            <p className="text-3xl font-bold text-red-600 mb-2">+7 (495) 123-45-67</p>
            <p className="text-gray-600">Экстренная линия 24/7</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;