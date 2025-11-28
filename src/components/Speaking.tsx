import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, Presentation, Users, GraduationCap } from "lucide-react";
import speakingImage from "@/assets/dr-marczuk-speaking.png";

const Speaking = () => {
  const services = [
    {
      icon: Presentation,
      title: "Ponencias",
      description: "Presentaciones especializadas sobre medicina del dolor, analgesia veterinaria y avances en el campo de la algología veterinaria.",
    },
    {
      icon: Users,
      title: "Charlas",
      description: "Charlas educativas para profesionales veterinarios, estudiantes y organizaciones sobre temas de actualidad en medicina del dolor.",
    },
    {
      icon: GraduationCap,
      title: "Talleres",
      description: "Talleres teórico-prácticos de analgesia veterinaria, técnicas avanzadas y manejo del dolor en animales de compañía.",
    },
  ];

  return (
    <section className="py-24 bg-muted relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.05),transparent_60%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Ponencias, charlas y{" "}
              <span className="gradient-text">talleres</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comparto mi experiencia y conocimiento a través de ponencias, charlas y talleres especializados en medicina del dolor veterinario
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="p-6 text-center hover:shadow-[var(--shadow-medium)] transition-all duration-300 border-border bg-card group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex p-4 bg-gradient-to-br from-primary to-secondary rounded-2xl text-primary-foreground mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8" />
                </div>
                
                <h3 className="font-serif text-xl font-semibold mb-3">
                  {service.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
          
          <Card className="p-0 md:p-0 overflow-hidden border-border bg-card shadow-[var(--shadow-medium)]">
            <div className="grid lg:grid-cols-2 gap-0 lg:min-h-[500px]">
              <div className="relative p-8 md:p-12 bg-gradient-to-br from-primary to-secondary text-primary-foreground flex flex-col justify-center min-h-[400px] lg:min-h-full">
                <div className="max-w-lg mx-auto lg:mx-0">
                  <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                    ¿Interesado en organizar una ponencia, charla o taller?
                  </h3>
                  <p className="text-lg mb-8 text-primary-foreground/90">
                    Contáctame para discutir cómo puedo contribuir a tu evento, congreso o programa educativo con mi experiencia en medicina del dolor veterinario
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="https://wa.me/525548993902?text=Hola, estoy interesado/a en organizar una ponencia, charla o taller sobre medicina del dolor veterinario"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none" }}
                    >
                      <Button 
                        size="lg" 
                        variant="secondary"
                        className="bg-white text-primary hover:bg-white/90 shadow-lg"
                      >
                        <MessageCircle className="mr-2 h-5 w-5" />
                        CONTACTAR PARA EVENTOS
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="relative w-full h-full min-h-[400px] lg:min-h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl" />
                <img 
                  src={speakingImage} 
                  alt="Dr. Mario Marczuk - Ponencias y Talleres" 
                  className="relative w-full h-full object-cover"
                />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Speaking;

