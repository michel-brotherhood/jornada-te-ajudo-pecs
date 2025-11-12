import { Card } from "@/components/ui/card";
import { Facebook, Instagram, Users } from "lucide-react";
import carolProfessional from "@/assets/carol-professional-new.webp";
import carolMain from "@/assets/carol-main.webp";
import carolActivity1 from "@/assets/carol-activity-1.webp";
import carolActivity2 from "@/assets/carol-activity-2.webp";
import carolActivity3 from "@/assets/carol-activity-3.webp";
import carolActivity4 from "@/assets/carol-activity-4.webp";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const About = () => {
  return (
    <section id="about" className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 px-2">
              <span className="bg-gradient-to-r from-primary via-secondary to-coral bg-clip-text text-transparent">
                O que é a Comunicação Aumentativa e Alternativa?
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 mb-8 md:mb-12">
            <Card className="p-6 sm:p-8 border-2 border-primary/20 hover:shadow-xl transition-all duration-300">
              <div className="prose prose-sm sm:prose-base max-w-none text-muted-foreground">
                <p className="mb-4 leading-relaxed text-sm sm:text-base">
                  É aí que entra a <strong className="text-primary">Comunicação Aumentativa e Alternativa (CAA)</strong> — uma ponte entre o que se sente e o que se quer comunicar.
                </p>
                
                <p className="mb-4 leading-relaxed text-sm sm:text-base">
                  Pensando nisso, criamos o <strong className="text-foreground">Kit de Comunicação Aumentativa Alternativa – Básico</strong> (CAA de baixa tecnologia), uma ferramenta prática e acessível para iniciar essa jornada de expressão e autonomia.
                </p>
                
                <p className="mb-4 leading-relaxed text-sm sm:text-base">
                  🧩 As figuras cuidadosamente selecionadas ajudam a facilitar pedidos, expressar vontades e tornar o cotidiano mais previsível e compreensível.
                </p>
              </div>
            </Card>

            <Card className="p-6 sm:p-8 border-2 border-secondary/20 hover:shadow-xl transition-all duration-300">
              <div className="prose prose-sm sm:prose-base max-w-none text-muted-foreground">
                <p className="mb-4 leading-relaxed text-sm sm:text-base">
                  Perfeito para os primeiros passos na comunicação alternativa, o kit oferece <strong className="text-secondary">apoio visual e funcional</strong> para o desenvolvimento da linguagem e da interação social.
                </p>
                
                <p className="mb-4 leading-relaxed text-sm sm:text-base">
                  Feito com carinho, o <strong className="text-foreground">Kit CAA Básico</strong> foi criado para que cada pessoa possa se comunicar com mais segurança, confiança e alegria — porque toda voz merece ser ouvida.
                </p>
                
                <p className="leading-relaxed text-base sm:text-lg font-semibold text-coral">
                  💬 Dê o primeiro passo para uma comunicação mais leve e funcional.
                </p>
              </div>
            </Card>
          </div>

          <Card className="p-6 sm:p-8 md:p-10 bg-gradient-to-br from-coral/10 via-primary/5 to-secondary/10 border-2 border-coral/30">
            <div className="text-center">
              <p className="text-lg sm:text-xl md:text-2xl font-bold mb-6 text-foreground">
                💜 Simples, acessível e feito com propósito
              </p>
              <p className="text-base sm:text-lg text-muted-foreground italic max-w-3xl mx-auto">
                Um recurso que transforma gestos em palavras e palavras em conexão.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
