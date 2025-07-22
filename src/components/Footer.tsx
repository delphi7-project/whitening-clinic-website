import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Icon name="Smile" size={24} className="text-primary" />
              <span className="text-xl font-bold">Белоснежка</span>
            </Link>
            <p className="text-gray-300 text-sm">
              Современная стоматология с человечным подходом. 
              Создаем красивые улыбки уже 15 лет.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/services" className="hover:text-white transition-colors">Лечение кариеса</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Протезирование</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Имплантация</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Ортодонтия</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Профилактика</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Информация</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/about" className="hover:text-white transition-colors">О клинике</Link></li>
              <li><Link to="/doctors" className="hover:text-white transition-colors">Врачи</Link></li>
              <li><Link to="/prices" className="hover:text-white transition-colors">Цены</Link></li>
              <li><Link to="/reviews" className="hover:text-white transition-colors">Отзывы</Link></li>
              <li><Link to="/gallery" className="hover:text-white transition-colors">Галерея</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p className="flex items-center gap-2">
                <Icon name="MapPin" size={14} />
                г. Москва, ул. Пречистенка, д. 15
              </p>
              <p className="flex items-center gap-2">
                <Icon name="Phone" size={14} />
                +7 (495) 123-45-67
              </p>
              <p className="flex items-center gap-2">
                <Icon name="Mail" size={14} />
                info@belosnezhka.ru
              </p>
              <div className="flex space-x-3 mt-4">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Icon name="MessageCircle" size={18} />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Icon name="Send" size={18} />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Icon name="Instagram" size={18} />
                </a>
              </div>
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