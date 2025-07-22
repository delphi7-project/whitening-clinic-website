import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

interface Service {
  id: string;
  name: string;
  price: number;
  description: string;
}

interface AppointmentSectionProps {
  services: Service[];
}

const AppointmentSection = ({ services }: AppointmentSectionProps) => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-secondary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">Записаться на прием</h2>
          <p className="text-lg sm:text-xl text-white/90 px-4">
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
  );
};

export default AppointmentSection;