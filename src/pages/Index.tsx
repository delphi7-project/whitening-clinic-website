import { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import DoctorsSection from '@/components/DoctorsSection';
import EquipmentSection from '@/components/EquipmentSection';
import ReviewsSection from '@/components/ReviewsSection';
import AppointmentSection from '@/components/AppointmentSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [totalCost, setTotalCost] = useState(0);

  const services = [
    { id: 'cleaning', name: 'Профессиональная чистка', price: 3500, description: 'Удаление зубного налета и камня' },
    { id: 'filling', name: 'Лечение кариеса', price: 5500, description: 'Современные композитные пломбы' },
    { id: 'whitening', name: 'Отбеливание зубов', price: 12000, description: 'Безопасное отбеливание на 6-8 тонов' },
    { id: 'crown', name: 'Коронки', price: 18000, description: 'Керамические коронки премиум-класса' },
    { id: 'implant', name: 'Имплантация', price: 45000, description: 'Швейцарские импланты с гарантией' },
    { id: 'braces', name: 'Брекет-системы', price: 85000, description: 'Исправление прикуса любой сложности' },
  ];

  const doctors = [
    { 
      name: 'Анна Сергеевна Волкова', 
      specialty: 'Главный врач, стоматолог-терапевт',
      experience: '15 лет опыта',
      education: 'МГМСУ им. Евдокимова',
      certificates: ['Эндодонтия', 'Эстетическая стоматология']
    },
    { 
      name: 'Дмитрий Александрович Орлов', 
      specialty: 'Стоматолог-хирург, имплантолог',
      experience: '12 лет опыта',
      education: 'СПбГМУ им. Павлова',
      certificates: ['Имплантология', 'Костная пластика']
    },
    { 
      name: 'Елена Викторовна Смирнова', 
      specialty: 'Стоматолог-ортодонт',
      experience: '10 лет опыта',
      education: 'РУДН',
      certificates: ['Элайнеры Invisalign', 'Детская ортодонтия']
    },
  ];

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
      text: 'Спасибо огромное докторе Смирновой за красивую улыбку! Брекеты носила полтора года, результат потрясающий. Персонал очень внимательный.',
      rating: 5,
      procedure: 'Брекет-система'
    },
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
      <HeroSection />
      <AboutSection />
      <ServicesSection 
        services={services}
        selectedService={selectedService}
        totalCost={totalCost}
        onServiceSelect={calculateCost}
      />
      <DoctorsSection doctors={doctors} />
      <EquipmentSection />
      <ReviewsSection reviews={reviews} />
      <AppointmentSection services={services} />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;