import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DoctorsSection from '@/components/DoctorsSection';

const Doctors = () => {
  const doctors = [
    { 
      name: 'Анна Сергеевна Волкова', 
      specialty: 'Главный врач, стоматолог-терапевт',
      experience: '15 лет опыта',
      education: 'МГМСУ им. Евдокимова',
      certificates: ['Эндодонтия', 'Эстетическая стоматология', 'Микроскопия']
    },
    { 
      name: 'Дмитрий Александрович Орлов', 
      specialty: 'Стоматолог-хирург, имплантолог',
      experience: '12 лет опыта',
      education: 'СПбГМУ им. Павлова',
      certificates: ['Имплантология', 'Костная пластика', 'Синус-лифтинг']
    },
    { 
      name: 'Елена Викторовна Смирнова', 
      specialty: 'Стоматолог-ортодонт',
      experience: '10 лет опыта',
      education: 'РУДН',
      certificates: ['Элайнеры Invisalign', 'Детская ортодонтия', 'Лингвальные брекеты']
    },
    { 
      name: 'Михаил Петрович Козлов', 
      specialty: 'Стоматолог-ортопед',
      experience: '14 лет опыта',
      education: 'МГМСУ им. Евдокимова',
      certificates: ['CAD/CAM технологии', 'Эстетическое протезирование', 'Виниры']
    },
    { 
      name: 'Ирина Владимировна Петрова', 
      specialty: 'Детский стоматолог',
      experience: '8 лет опыта',
      education: 'РНИМУ им. Пирогова',
      certificates: ['Детская психология', 'Седация в стоматологии', 'Профилактика']
    },
    { 
      name: 'Александр Николаевич Соколов', 
      specialty: 'Стоматолог-пародонтолог',
      experience: '11 лет опыта',
      education: 'СПбГМУ им. Павлова',
      certificates: ['Лазерная терапия', 'Плазмолифтинг', 'Пародонтальная хирургия']
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Наши <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">врачи</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Команда высококвалифицированных специалистов с многолетним опытом 
            и международными сертификатами
          </p>
        </div>
      </section>

      <DoctorsSection doctors={doctors} />

      <Footer />
    </div>
  );
};

export default Doctors;