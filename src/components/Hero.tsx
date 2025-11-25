import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone } from "lucide-react";
import heroImage from "@/assets/dr-marczuk-hero-new.png";

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
                className="group bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all shadow-md hover:shadow-lg"
              >
                Agendar Consulta
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="secondary"
                className="shadow-sm hover:shadow-md transition-all"
              >
                Conocer Más
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-6 pt-8 border-t border-border">
              <a 
                href="mailto:contacto@drmarczuk.com" 
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="text-sm">contacto@drmarczuk.com</span>
              </a>
              <a 
                href="tel:+1234567890" 
                className="flex items-center gap-2 text-muted-foreground/70 hover:text-muted-foreground transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span className="text-xs">+58 (123) 456-7890</span>
              </a>
            </div>
          </div>
          
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
            <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-strong)]">
              <img 
                src={heroImage} 
                alt="Dr. Mario Marczuk" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
