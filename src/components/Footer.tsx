import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Smile" size={24} className="text-primary" />
              <span className="text-xl font-bold">Белоснежка</span>
            </div>
            <p className="text-gray-300 text-sm">
              Современная стоматология с человечным подходом. 
              Создаем красивые улыбки уже 15 лет.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Лечение кариеса</li>
              <li>Протезирование</li>
              <li>Имплантация</li>
              <li>Ортодонтия</li>
              <li>Профилактика</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Информация</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>О клинике</li>
              <li>Врачи</li>
              <li>Цены</li>
              <li>Отзывы</li>
              <li>Лицензии</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p>г. Москва, ул. Пречистенка, д. 15</p>
              <p>+7 (495) 123-45-67</p>
              <p>info@belosnezhka.ru</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Стоматологическая клиника "Белоснежка". Лицензия № ЛО-77-01-021234
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;