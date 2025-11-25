import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone } from "lucide-react";
import heroImage from "@/assets/dr-marczuk-hero.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted to-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-block">
              <span className="text-sm font-medium tracking-wider text-primary uppercase">
                Medicina Veterinaria Especializada
              </span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Dr. Mario Tadeusz{" "}
              <span className="gradient-text">Marczuk Dyurich</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
              Médico Veterinario especialista en{" "}
              <span className="text-primary font-medium">Medicina del Dolor</span>
            </p>
            
            <p className="text-lg text-muted-foreground max-w-xl">
              Editor Especialista para Medicina del Dolor en Medicina Veterinaria Práctica. 
              Líder en anestesia y analgesia veterinaria con reconocimiento internacional.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                className="shadow-sm hover:shadow-md transition-all"
              >
                CONOCER MÁS ACERCA DE MI
              </Button>
            </div>
          </div>
          
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl" />
            <div className="relative overflow-hidden shadow-[var(--shadow-strong)]">
              <img 
                src={heroImage} 
                alt="Dr. Mario Marczuk" 
                className="h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
