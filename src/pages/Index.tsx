import Hero from "@/components/Hero";
import Credentials from "@/components/Credentials";
import Specialties from "@/components/Specialties";
import Speaking from "@/components/Speaking";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Credentials />
      <Specialties />
      <Speaking />
      <Contact />
      
      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Dr. Mario Marczuk. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
