import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Calendar } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "contacto@drmarczuk.com",
      href: "mailto:contacto@drmarczuk.com",
    },
    {
      icon: Phone,
      title: "Teléfono",
      content: "+58 (123) 456-7890",
      href: "tel:+581234567890",
    },
    {
      icon: MapPin,
      title: "Ubicación",
      content: "Hospital Veterinario Animal Home",
      href: "#",
    },
    {
      icon: Calendar,
      title: "Horario",
      content: "Lun - Vie: 8:00 AM - 6:00 PM",
      href: "#",
    },
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.05),transparent_60%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Agenda tu{" "}
              <span className="gradient-text">Consulta</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Estamos comprometidos con el bienestar de tu mascota. Contáctanos para agendar una cita o resolver tus dudas
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {contactInfo.map((info, index) => (
              <Card 
                key={index}
                className="p-6 text-center hover:shadow-[var(--shadow-medium)] transition-all duration-300 border-border bg-card group cursor-pointer"
              >
                <a href={info.href} className="block">
                  <div className="inline-flex p-3 bg-gradient-to-br from-primary to-secondary rounded-xl text-primary-foreground mb-4 group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-medium text-sm text-muted-foreground mb-2">
                    {info.title}
                  </h3>
                  <p className="text-sm font-medium">
                    {info.content}
                  </p>
                </a>
              </Card>
            ))}
          </div>
          
          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary to-secondary text-primary-foreground">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                ¿Listo para brindarle el mejor cuidado a tu mascota?
              </h3>
              <p className="text-lg mb-8 text-primary-foreground/90">
                Agenda una consulta con nuestro equipo especializado y descubre cómo podemos ayudar a tu compañero
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="bg-white text-primary hover:bg-white/90 shadow-lg"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Agendar Ahora
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Llamar Ahora
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
