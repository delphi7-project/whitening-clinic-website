import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const ContactSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Контакты</h2>
          <p className="text-lg sm:text-xl text-gray-600 px-4">Приходите к нам на бесплатную консультацию</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
              <p className="text-xl sm:text-2xl font-bold text-primary mb-2">
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
  );
};

export default ContactSection;