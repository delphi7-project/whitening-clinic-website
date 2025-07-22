import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Как правильно чистить зубы: пошаговое руководство",
      excerpt: "Правильная гигиена полости рта - основа здоровья зубов. Узнайте, как правильно чистить зубы, чтобы предотвратить кариес и заболевания десен.",
      category: "Профилактика",
      date: "15 декабря 2024",
      readTime: "5 мин",
      image: "https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=400",
      author: "Анна Волкова"
    },
    {
      id: 2,
      title: "Имплантация зубов: все, что нужно знать",
      excerpt: "Современная имплантация позволяет восстановить утраченные зубы с максимальным комфортом. Разбираем виды имплантов и этапы лечения.",
      category: "Имплантология",
      date: "12 декабря 2024",
      readTime: "8 мин",
      image: "https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=400",
      author: "Дмитрий Орлов"
    },
    {
      id: 3,
      title: "Брекеты или элайнеры: что выбрать?",
      excerpt: "Сравниваем различные системы исправления прикуса. Помогаем выбрать оптимальный вариант ортодонтического лечения.",
      category: "Ортодонтия",
      date: "10 декабря 2024",
      readTime: "6 мин",
      image: "https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=400",
      author: "Елена Смирнова"
    },
    {
      id: 4,
      title: "Детская стоматология: первый визит к врачу",
      excerpt: "Как подготовить ребенка к первому визиту к стоматологу и сделать лечение комфортным. Советы детского стоматолога.",
      category: "Детская стоматология",
      date: "8 декабря 2024",
      readTime: "4 мин",
      image: "https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=400",
      author: "Ирина Петрова"
    },
    {
      id: 5,
      title: "Отбеливание зубов: мифы и реальность",
      excerpt: "Развенчиваем популярные мифы об отбеливании зубов и рассказываем о безопасных методах получения белоснежной улыбки.",
      category: "Эстетическая стоматология",
      date: "5 декабря 2024",
      readTime: "7 мин",
      image: "https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=400",
      author: "Анна Волкова"
    },
    {
      id: 6,
      title: "Профилактика кариеса: простые правила",
      excerpt: "Кариес можно предотвратить! Рассказываем о простых и эффективных методах профилактики самого распространенного заболевания зубов.",
      category: "Профилактика",
      date: "3 декабря 2024",
      readTime: "5 мин",
      image: "https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=400",
      author: "Михаил Козлов"
    }
  ];

  const categories = [
    "Все статьи",
    "Профилактика", 
    "Лечение",
    "Имплантология",
    "Ортодонтия",
    "Детская стоматология",
    "Эстетическая стоматология"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Блог о <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">стоматологии</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Полезные статьи о здоровье зубов, современных методах лечения и профилактике. 
            Экспертные советы от наших врачей.
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className={index === 0 ? "bg-primary" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Badge className="mb-4">Рекомендуем</Badge>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative">
                  <img 
                    src={blogPosts[0].image} 
                    alt={blogPosts[0].title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary">{blogPosts[0].category}</Badge>
                  </div>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Icon name="Calendar" size={16} />
                      {blogPosts[0].date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="Clock" size={16} />
                      {blogPosts[0].readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="User" size={16} />
                      {blogPosts[0].author}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {blogPosts[0].excerpt}
                  </p>
                  <Button className="w-fit">
                    Читать статью
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary">{post.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Icon name="Calendar" size={14} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="Clock" size={14} />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 flex items-center gap-1">
                      <Icon name="User" size={14} />
                      {post.author}
                    </span>
                    <Button variant="ghost" size="sm">
                      Читать
                      <Icon name="ArrowRight" size={14} className="ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Icon name="Mail" size={32} className="text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Подпишитесь на нашу рассылку
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Получайте полезные статьи о здоровье зубов и специальные предложения
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Ваш email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/50"
            />
            <Button className="bg-white text-primary hover:bg-gray-100">
              Подписаться
            </Button>
          </div>
          
          <p className="text-sm text-white/70 mt-4">
            Не более 1 письма в неделю. Отписаться можно в любой момент.
          </p>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Популярные темы
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" size={32} className="text-primary" />
                </div>
                <CardTitle>Профилактика</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Как предотвратить заболевания зубов
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Zap" size={32} className="text-secondary" />
                </div>
                <CardTitle>Современные технологии</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Новейшие методы лечения
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Baby" size={32} className="text-primary" />
                </div>
                <CardTitle>Детская стоматология</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Уход за детскими зубами
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Sparkles" size={32} className="text-secondary" />
                </div>
                <CardTitle>Эстетика</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Красивая улыбка
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

export default Blog;