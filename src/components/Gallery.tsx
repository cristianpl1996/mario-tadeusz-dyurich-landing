import clinicImage from "@/assets/clinic-presentation.png";
import teamImage from "@/assets/team-photo.png";

const Gallery = () => {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Hospital Veterinario{" "}
            <span className="gradient-text">Animal Home</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Clínica del Dolor con instalaciones de última generación y un equipo comprometido con el bienestar animal
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="group relative rounded-2xl overflow-hidden shadow-[var(--shadow-medium)] hover:shadow-[var(--shadow-strong)] transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
            <img 
              src={clinicImage} 
              alt="Clínica del Dolor - Animal Home" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="font-serif text-2xl font-semibold text-white mb-2">
                Clínica del Dolor
              </h3>
              <p className="text-white/90 text-sm">
                Especializada en el manejo del dolor y procedimientos veterinarios avanzados
              </p>
            </div>
          </div>
          
          <div className="group relative rounded-2xl overflow-hidden shadow-[var(--shadow-medium)] hover:shadow-[var(--shadow-strong)] transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
            <img 
              src={teamImage} 
              alt="Equipo Veterinario Animal Home" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="font-serif text-2xl font-semibold text-white mb-2">
                Equipo Profesional
              </h3>
              <p className="text-white/90 text-sm">
                Personal altamente capacitado comprometido con la excelencia en medicina veterinaria
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
