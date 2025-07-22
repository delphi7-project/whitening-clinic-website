import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Частые вопросы</h2>
          <p className="text-lg sm:text-xl text-gray-600 px-4">Ответы на самые популярные вопросы</p>
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
  );
};

export default FAQSection;