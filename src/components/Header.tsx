import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Icon name="Smile" size={32} className="text-primary" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Белоснежка</h1>
              <p className="text-sm text-gray-500">Стоматологическая клиника</p>
            </div>
          </div>
          <Button className="bg-primary hover:bg-primary/90 hidden sm:flex">
            <Icon name="Phone" size={16} className="mr-2" />
            +7 (495) 123-45-67
          </Button>
          <Button size="sm" className="bg-primary hover:bg-primary/90 sm:hidden">
            <Icon name="Phone" size={16} />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;