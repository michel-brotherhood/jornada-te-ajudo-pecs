import { Card } from "@/components/ui/card";
import { Sparkles, Target, Eye, TrendingUp, Shield, LineChart } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Sparkles,
      title: "16 Categorias",
      description: "Alimentos, brinquedos, cores, ações, atividades, animais, datas, corpo humano, instrumentos, lugares, números, roupas, transportes, profissões e emoções"
    },
    {
      icon: Target,
      title: "Fácil de Usar",
      description: "Material prático e acessível para os primeiros passos na CAA"
    },
    {
      icon: Eye,
      title: "Apoio Visual",
      description: "Figuras selecionadas para facilitar pedidos e expressões"
    },
    {
      icon: TrendingUp,
      title: "Desenvolvimento",
      description: "Auxilia no desenvolvimento da linguagem e interação social"
    },
    {
      icon: Shield,
      title: "Cotidiano Previsível",
      description: "Torna a rotina mais compreensível e funcional"
    },
    {
      icon: LineChart,
      title: "Autonomia",
      description: "Promove independência e confiança na comunicação"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-3 px-2">
            <span className="inline-block animate-float-gentle">O que você vai encontrar</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-4 px-2">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-semibold">
              ✨ Neste kit:
            </span>
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="p-5 sm:p-6 md:p-8 hover:shadow-xl transition-all duration-500 border-2 hover:border-secondary/50 bg-gradient-to-br from-card to-muted/20"
            >
              <div className="flex flex-col items-start">
                <div className="mb-3 md:mb-4 p-2 md:p-3 rounded-xl bg-gradient-to-br from-primary to-secondary">
                  <benefit.icon className="w-5 h-5 md:w-6 md:h-6 text-white animate-icon-bounce" style={{ animationDelay: `${index * 0.2}s` }} />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 md:mb-3">{benefit.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
