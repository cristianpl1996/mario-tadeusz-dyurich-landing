import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone } from "lucide-react";
import heroImage from "@/assets/dr-marczuk-hero.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted to-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-block">
              <span className="text-sm font-medium tracking-wider text-primary uppercase">
                Medicina Veterinaria Especializada
              </span>
            </div>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Dr. Mario {" "}
              <span className="gradient-text">Marczuk Dyurich</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
              Médico veterinario especialista en{" "}
              <span className="text-primary font-medium">medicina del dolor</span>
            </p>
            
            <p className="text-lg text-muted-foreground max-w-xl">
            Director de la sociedad veterinaria del dolor y médico veterinario experto en medicina del dolor en animales. 
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                className="shadow-sm hover:shadow-md transition-all"
              >
                CONOCE MÁS ACERCA DE MÍ
              </Button>
            </div>
          </div>
          
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl" />
            <div className="relative overflow-hidden shadow-[var(--shadow-strong)] flex justify-center items-center">
              <img 
                src={heroImage} 
                alt="Dr. Mario Marczuk" 
                className="w-4/5 h-auto object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
