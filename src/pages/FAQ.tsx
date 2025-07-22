import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQSection from '@/components/FAQSection';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ = () => {
  const additionalFAQs = [
    {
      question: "Какие методы обезболивания вы используете?",
      answer: "Мы используем современные анестетики последнего поколения (артикаин, мепивакаин), которые обеспечивают полное обезболивание. Для тревожных пациентов предлагаем седацию закисью азота или внутривенную седацию."
    },
    {
      question: "Сколько времени занимает имплантация зуба?",
      answer: "Установка одного импланта занимает 30-60 минут. Полный процесс от установки до протезирования составляет 3-6 месяцев, в зависимости от индивидуальных особенностей пациента."
    },
    {
      question: "Можно ли исправить прикус во взрослом возрасте?",
      answer: "Да, исправить прикус можно в любом возрасте. Мы предлагаем различные системы: металлические и керамические брекеты, лингвальные брекеты, элайнеры Invisalign."
    },
    {
      question: "Как часто нужно делать профессиональную чистку?",
      answer: "Рекомендуется проводить профессиональную гигиену полости рта каждые 6 месяцев. При заболеваниях десен или повышенном образовании налета - каждые 3-4 месяца."
    },
    {
      question: "Безопасно ли отбеливание зубов?",
      answer: "Профессиональное отбеливание в клинике абсолютно безопасно. Мы используем системы с контролируемой концентрацией активного вещества и защитой десен."
    },
    {
      question: "Что входит в гарантию на лечение?",
      answer: "Гарантия покрывает качество выполненной работы и используемых материалов. Не покрывается несоблюдение рекомендаций врача, травмы, естественный износ при неправильной гигиене."
    },
    {
      question: "Можно ли лечить зубы во время беременности?",
      answer: "Да, лечение возможно, особенно во втором триместре. Мы используем безопасные анестетики и методы лечения, не влияющие на развитие плода."
    },
    {
      question: "Что делать при острой зубной боли?",
      answer: "При острой боли обращайтесь к нам немедленно. У нас есть служба экстренной помощи 24/7. До визита можно принять обезболивающее и прополоскать рот теплой водой."
    },
    {
      question: "Как подготовиться к хирургическому вмешательству?",
      answer: "За день до операции исключите алкоголь, плотно поешьте за 2 часа до процедуры, примите назначенные препараты. Подробные рекомендации дает врач на консультации."
    },
    {
      question: "Какие документы нужны для лечения?",
      answer: "Необходим паспорт и полис ОМС (при наличии). Для детей до 14 лет - свидетельство о рождении и паспорт сопровождающего взрослого."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Частые <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">вопросы</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Ответы на самые популярные вопросы о стоматологическом лечении, 
            процедурах и услугах нашей клиники
          </p>
        </div>
      </section>

      <FAQSection />

      {/* Additional FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Дополнительные вопросы
            </h2>
            <p className="text-lg text-gray-600">
              Еще больше полезной информации о наших услугах
            </p>
          </div>

          <Accordion type="single" collapsible>
            {additionalFAQs.map((faq, index) => (
              <AccordionItem key={index} value={`additional-item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact for Questions */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Не нашли ответ на свой вопрос?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Свяжитесь с нами любым удобным способом, и мы обязательно поможем
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">+7 (495) 123-45-67</div>
              <div className="text-gray-600">Звонок бесплатный</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary mb-2">WhatsApp</div>
              <div className="text-gray-600">Быстрые ответы</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">Telegram</div>
              <div className="text-gray-600">Онлайн консультации</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;