import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicesSection from '@/components/ServicesSection';

const Services = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [totalCost, setTotalCost] = useState(0);

  const services = [
    { id: 'cleaning', name: 'Профессиональная чистка', price: 3500, description: 'Удаление зубного налета и камня' },
    { id: 'filling', name: 'Лечение кариеса', price: 5500, description: 'Современные композитные пломбы' },
    { id: 'whitening', name: 'Отбеливание зубов', price: 12000, description: 'Безопасное отбеливание на 6-8 тонов' },
    { id: 'crown', name: 'Коронки', price: 18000, description: 'Керамические коронки премиум-класса' },
    { id: 'implant', name: 'Имплантация', price: 45000, description: 'Швейцарские импланты с гарантией' },
    { id: 'braces', name: 'Брекет-системы', price: 85000, description: 'Исправление прикуса любой сложности' },
    { id: 'prosthetics', name: 'Протезирование', price: 25000, description: 'Съемные и несъемные протезы' },
    { id: 'surgery', name: 'Хирургия', price: 8000, description: 'Удаление зубов и хирургические операции' },
    { id: 'pediatric', name: 'Детская стоматология', price: 4000, description: 'Лечение зубов у детей' },
  ];

  const calculateCost = (serviceId: string) => {
    const service = services.find(s => s.id === serviceId);
    if (service) {
      setTotalCost(service.price);
      setSelectedService(serviceId);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Наши <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">услуги</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Полный спектр стоматологических услуг с использованием современных технологий 
            и материалов премиум-класса
          </p>
        </div>
      </section>

      <ServicesSection 
        services={services}
        selectedService={selectedService}
        totalCost={totalCost}
        onServiceSelect={calculateCost}
      />

      <Footer />
    </div>
  );
};

export default Services;