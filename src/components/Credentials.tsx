import { Card } from "@/components/ui/card";
import { Award, BookOpen, Users, Globe } from "lucide-react";

const Credentials = () => {
  const credentials = [
    {
      icon: Award,
      title: "Formación académica",
      items: [
        "Graduado de médico veterinario - Universidad Centro Occidental Lisandro Alvarado (2000), Venezuela",
        "Doctor médico de A.A.V. Servicio de anestesia y analgesia veterinaria (2006), Venezuela",
      ],
    },
    {
      icon: BookOpen,
      title: "Experiencia docente",
      items: [
        "Director del programa de analgesia veterinaria para veterinarios en web (2016)",
        "Facilitador de talleres teórico prácticos de analgesia veterinaria en latinoamérica",
      ],
    },
    {
      icon: Users,
      title: "Investigación",
      items: [
        "Miembro fundador de la Siavet - Sociedad Iberoamericana de algología veterinaria",
        "Líder investigador de monitoreo de actividad antinocioceptiva FTA de Mdolaris para Latinoamérica",
        "Investigador en monitoreo de actividad parasimpática y su influencia en los pacientes con dolor.",
      ],
    },
    {
      icon: Globe,
      title: "Reconocimientos",
      items: [
        "Director de la Sociedad veterinaria del dolor",
        "Vicepresidente de la Siavet 2015 a la fecha",
        "Miembro activo de la IASP y IVAPM",
        "Líder investigador de monitoreo de estrés con Pla de Mdolaris para Latinoamérica",
        "Investigador en monitoreo de actividad parasimpática y su influencia en los pacientes con dolor.",
      ],
    },
  ];

  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Trayectoria y{" "}
            <span className="gradient-text">credenciales</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Más de dos décadas de dedicación a la medicina veterinaria y especialización en el manejo del dolor en animales
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {credentials.map((section, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-[var(--shadow-medium)] transition-all duration-300 border-border bg-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-primary to-secondary rounded-xl text-primary-foreground">
                  <section.icon className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-2xl font-semibold">
                  {section.title}
                </h3>
              </div>
              
              <ul className="space-y-4">
                {section.items.map((item, itemIndex) => (
                  <li 
                    key={itemIndex}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <div className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default Credentials;
