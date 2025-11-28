import { Card } from "@/components/ui/card";
import { Heart, Stethoscope, Brain, PawPrint } from "lucide-react";

const Specialties = () => {
  const specialties = [
    {
      icon: Heart,
      title: "Medicina del dolor",
      description: "Especialización en el diagnóstico y tratamiento del dolor agudo y crónico en pacientes veterinarios, utilizando las técnicas más avanzadas.",
    },
    {
      icon: Brain,
      title: "Analgesia avanzada",
      description: "Implementación de métodos innovadores para el control del dolor perioperatorio y manejo de dolor crónico en animales.",
    },
    {
      icon: PawPrint,
      title: "Medicina fear free",
      description: "Certificado en técnicas fear free para reducir el estrés y la ansiedad en pacientes veterinarios durante consultas y procedimientos.",
    },
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(var(--secondary)/0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Áreas de{" "}
            <span className="gradient-text">especialización</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Experiencia comprobada en las áreas más críticas de la medicina veterinaria moderna para el manejo del dolor en animales
          </p>
        </div>
        
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {specialties.map((specialty, index) => (
              <Card 
                key={index}
                className="group p-6 text-center hover:shadow-[var(--shadow-medium)] transition-all duration-300 border-border bg-card hover:bg-muted cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex p-4 bg-gradient-to-br from-primary to-secondary rounded-2xl text-primary-foreground mb-6 group-hover:scale-110 transition-transform duration-300">
                  <specialty.icon className="h-8 w-8" />
                </div>
                
                <h3 className="font-serif text-xl font-semibold mb-3">
                  {specialty.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {specialty.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Specialties;
