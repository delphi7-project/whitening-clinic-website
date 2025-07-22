import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReviewsSection from '@/components/ReviewsSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Reviews = () => {
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
      text: 'Спасибо огромное доктору Смирновой за красивую улыбку! Брекеты носила полтора года, результат потрясающий. Персонал очень внимательный.',
      rating: 5,
      procedure: 'Брекет-система'
    },
    {
      name: 'Александр П.',
      text: 'Профессиональная чистка зубов прошла на высшем уровне. Очень довольен результатом и отношением персонала. Буду рекомендовать друзьям.',
      rating: 5,
      procedure: 'Профессиональная чистка'
    },
    {
      name: 'Екатерина Л.',
      text: 'Отбеливание зубов превзошло все ожидания! Зубы стали белоснежными, процедура прошла комфортно. Спасибо за профессионализм!',
      rating: 5,
      procedure: 'Отбеливание зубов'
    },
    {
      name: 'Дмитрий В.',
      text: 'Поставил коронки на передние зубы. Результат просто фантастический! Никто не может отличить от настоящих зубов. Очень доволен.',
      rating: 5,
      procedure: 'Коронки'
    },
    {
      name: 'Анна С.',
      text: 'Привела дочку на лечение к детскому стоматологу. Ребенок не боялся, врач нашла подход. Теперь дочка сама просится к стоматологу!',
      rating: 5,
      procedure: 'Детская стоматология'
    },
    {
      name: 'Игорь Н.',
      text: 'Удаление зуба мудрости прошло быстро и безболезненно. Доктор все объяснил, дал рекомендации. Заживление прошло отлично.',
      rating: 5,
      procedure: 'Хирургия'
    },
    {
      name: 'Татьяна М.',
      text: 'Сделала протезирование после потери нескольких зубов. Протезы сидят идеально, выглядят естественно. Жую как своими зубами!',
      rating: 5,
      procedure: 'Протезирование'
    }
  ];

  const additionalReviews = [
    {
      name: 'Владимир К.',
      text: 'Клиника на высшем уровне! Современное оборудование, квалифицированные врачи, приятная атмосфера. Рекомендую всем!',
      rating: 5,
      procedure: 'Консультация'
    },
    {
      name: 'Наталья Б.',
      text: 'Лечение пародонтита прошло успешно. Доктор Соколов - настоящий профессионал. Десны больше не кровоточат, чувствую себя отлично.',
      rating: 5,
      procedure: 'Лечение пародонтита'
    },
    {
      name: 'Максим Р.',
      text: 'Поставил виниры на передние зубы. Результат превосходный! Улыбка стала голливудской. Спасибо за мастерство!',
      rating: 5,
      procedure: 'Виниры'
    }
  ];

  const allReviews = [...reviews, ...additionalReviews];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Отзывы <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">пациентов</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Реальные истории наших пациентов о качестве лечения и сервисе. 
            Мы гордимся доверием, которое вы нам оказываете.
          </p>
        </div>
      </section>

      <ReviewsSection reviews={reviews} />

      {/* All Reviews Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Все отзывы
            </h2>
            <p className="text-lg text-gray-600">
              Более 500 положительных отзывов от наших пациентов
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allReviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Icon 
                          key={i} 
                          name="Star" 
                          size={16} 
                          className={`${i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} 
                        />
                      ))}
                    </div>
                  </div>
                  <Badge variant="outline" className="w-fit">
                    {review.procedure}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    "{review.text}"
                  </p>
                  <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-200">
                    <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                      <Icon name="Check" size={10} className="text-white" />
                    </div>
                    <span className="text-xs text-gray-500">Проверенный отзыв</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Review Statistics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Статистика отзывов
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-gray-600">Рекомендуют нас</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">4.9</div>
              <div className="text-gray-600">Средняя оценка</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-gray-600">Отзывов</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">5000+</div>
              <div className="text-gray-600">Довольных пациентов</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Reviews;