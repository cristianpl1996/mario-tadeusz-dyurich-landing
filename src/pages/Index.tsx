import Hero from "@/components/Hero";
import Credentials from "@/components/Credentials";
import Specialties from "@/components/Specialties";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Credentials />
      <Specialties />
      <Gallery />
      <Contact />
      
      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Dr. Mario Tadeusz Marczuk Dyurich. Todos los derechos reservados.
          </p>
          <p className="text-xs mt-2 opacity-80">
            Médico Veterinario Especialista en Medicina del Dolor
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
