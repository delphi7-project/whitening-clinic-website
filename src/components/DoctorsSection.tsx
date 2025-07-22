import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface Doctor {
  name: string;
  specialty: string;
  experience: string;
  education: string;
  certificates: string[];
}

interface DoctorsSectionProps {
  doctors: Doctor[];
}

const DoctorsSection = ({ doctors }: DoctorsSectionProps) => {
  const doctorAvatars = [
    { gradient: "from-pink-400 to-red-400", icon: "User" },
    { gradient: "from-blue-400 to-cyan-400", icon: "User" },
    { gradient: "from-green-400 to-emerald-400", icon: "User" }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full px-6 py-2 mb-6">
            <Icon name="Award" size={16} className="text-primary mr-2" />
            <span className="text-sm font-medium text-primary">Профессиональная команда</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Наша команда
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 px-4 max-w-3xl mx-auto">
            Опытные врачи с международными сертификатами и постоянным повышением квалификации
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <Card key={index} className="group text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 overflow-hidden">
              <CardHeader className="relative pt-8">
                {/* Floating elements */}
                <div className="absolute top-4 left-4 w-3 h-3 bg-primary/30 rounded-full animate-ping"></div>
                <div className="absolute top-6 right-6 w-2 h-2 bg-secondary/40 rounded-full animate-pulse"></div>
                
                <div className="relative mb-6">
                  {/* Animated avatar with gradient */}
                  <div className={`w-28 h-28 bg-gradient-to-br ${doctorAvatars[index]?.gradient} rounded-3xl mx-auto flex items-center justify-center relative group-hover:scale-110 transition-transform duration-500`}>
                    <Icon name="User" size={48} className="text-white" />
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {/* Floating badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-secondary to-primary rounded-full flex items-center justify-center animate-bounce">
                      <Icon name="Check" size={14} className="text-white" />
                    </div>
                  </div>
                  
                  {/* Experience indicator */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-secondary px-3 py-1 rounded-full">
                    <span className="text-xs font-medium text-white">{doctor.experience}</span>
                  </div>
                </div>

                <CardTitle className="text-xl font-bold leading-tight mb-2 group-hover:text-primary transition-colors duration-300">
                  {doctor.name}
                </CardTitle>
                <CardDescription className="text-primary/80 font-medium text-base mb-4">
                  {doctor.specialty}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Education and experience */}
                <div className="space-y-3">
                  <div className="flex items-center justify-center gap-2 p-2 bg-gray-50 rounded-lg group-hover:bg-primary/5 transition-colors duration-300">
                    <Icon name="GraduationCap" size={16} className="text-primary" />
                    <span className="text-sm text-gray-700">{doctor.education}</span>
                  </div>
                  
                  <div className="flex items-center justify-center gap-2 p-2 bg-gray-50 rounded-lg group-hover:bg-secondary/5 transition-colors duration-300">
                    <Icon name="Clock" size={16} className="text-secondary" />
                    <span className="text-sm text-gray-700">{doctor.experience}</span>
                  </div>
                </div>

                {/* Certificates with animation */}
                <div className="space-y-2">
                  <div className="text-sm font-medium text-gray-800 flex items-center justify-center gap-2">
                    <Icon name="Award" size={16} className="text-primary" />
                    Сертификаты
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {doctor.certificates.map((cert, i) => (
                      <Badge 
                        key={i} 
                        variant="outline" 
                        className="text-xs hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 hover:scale-105"
                        style={{animationDelay: `${i * 0.1}s`}}
                      >
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action button */}
                <div className="pt-4">
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-gradient-to-r group-hover:from-primary/10 group-hover:to-secondary/10 group-hover:border-primary/50 transition-all duration-300"
                  >
                    <Icon name="MessageCircle" size={16} className="mr-2 group-hover:text-primary transition-colors duration-300" />
                    Записаться к врачу
                  </Button>
                </div>
              </CardContent>

              {/* Decorative bottom border */}
              <div className="h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { icon: "Award", title: "Сертификаты", desc: "Международные" },
            { icon: "Users", title: "Опыт", desc: "От 10 лет" },
            { icon: "Star", title: "Рейтинг", desc: "4.9/5.0" },
            { icon: "Heart", title: "Пациентов", desc: "5000+" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl hover:bg-white/80 transition-all duration-300 hover:scale-105" style={{animationDelay: `${index * 0.2}s`}}>
              <div className="w-12 h-12 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Icon name={stat.icon as any} size={24} className="text-primary" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.desc}</div>
              <div className="text-sm text-gray-600">{stat.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;