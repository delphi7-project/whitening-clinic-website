import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
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
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Наша команда</h2>
          <p className="text-lg sm:text-xl text-gray-600 px-4">
            Опытные врачи с международными сертификатами
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {doctors.map((doctor, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-24 h-24 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="User" size={40} className="text-primary" />
                </div>
                <CardTitle className="text-lg sm:text-xl leading-tight">{doctor.name}</CardTitle>
                <CardDescription className="text-primary font-medium text-sm sm:text-base">
                  {doctor.specialty}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600">
                  <p className="flex items-center justify-center gap-2">
                    <Icon name="GraduationCap" size={16} />
                    {doctor.education}
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <Icon name="Clock" size={16} />
                    {doctor.experience}
                  </p>
                  <div className="flex flex-wrap gap-1 justify-center mt-4">
                    {doctor.certificates.map((cert, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;