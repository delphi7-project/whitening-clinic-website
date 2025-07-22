import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              О клинике <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Белоснежка</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              15 лет мы помогаем нашим пациентам обрести здоровые и красивые зубы. 
              Современное оборудование, квалифицированные врачи и индивидуальный подход — 
              вот секрет нашего успеха.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
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

          {/* История клиники */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Наша история</h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    2009
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Основание клиники</h3>
                    <p className="text-gray-600">
                      Открытие первого кабинета в центре Москвы с командой из 3 специалистов
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold">
                    2015
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Расширение</h3>
                    <p className="text-gray-600">
                      Открытие детского отделения и внедрение современных технологий
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    2020
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Модернизация</h3>
                    <p className="text-gray-600">
                      Полное обновление оборудования и внедрение цифровых технологий
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold">
                    2024
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Сегодня</h3>
                    <p className="text-gray-600">
                      Более 5000 довольных пациентов и статус ведущей клиники района
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Миссия и ценности */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Наша миссия</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Мы стремимся сделать стоматологическое лечение комфортным, безболезненным 
                и доступным для каждого. Наша цель — не просто лечить зубы, а дарить людям 
                уверенность в себе через красивую и здоровую улыбку.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Каждый пациент для нас уникален, поэтому мы разрабатываем индивидуальный 
                план лечения, учитывая все особенности и пожелания.
              </p>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Наши ценности</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Профессионализм</h3>
                    <p className="text-gray-600">Постоянное обучение и следование мировым стандартам</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Честность</h3>
                    <p className="text-gray-600">Прозрачные цены и открытое общение с пациентами</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Забота</h3>
                    <p className="text-gray-600">Внимательное отношение к каждому пациенту</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Инновации</h3>
                    <p className="text-gray-600">Использование самых современных технологий</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;