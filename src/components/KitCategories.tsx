import { Card } from "@/components/ui/card";

const KitCategories = () => {
  const categories = [
    { number: "1", name: "Alimentos", icon: "🍎" },
    { number: "2", name: "Brinquedos", icon: "🧸" },
    { number: "3", name: "Cores", icon: "🎨" },
    { number: "4", name: "Ações", icon: "🏃" },
    { number: "5", name: "Atividades da vida diária", icon: "🏠" },
    { number: "6", name: "Animais", icon: "🐶" },
    { number: "7", name: "Datas", icon: "📅" },
    { number: "8", name: "Corpo humano", icon: "👤" },
    { number: "9", name: "Instrumentos", icon: "🎸" },
    { number: "10", name: "Lugares", icon: "🏢" },
    { number: "11", name: "Números", icon: "🔢" },
    { number: "12", name: "Roupas", icon: "👕" },
    { number: "13", name: "Transportes", icon: "🚗" },
    { number: "14", name: "Profissões", icon: "👨‍⚕️" },
    { number: "15", name: "Emoções", icon: "😊" }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                As 15 categorias do Kit CAA Básico
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Figuras cuidadosamente organizadas para facilitar a comunicação em todas as áreas da vida
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {categories.map((category, index) => (
              <Card 
                key={index}
                className="p-4 md:p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 hover:border-primary/50 bg-card"
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-xl md:text-2xl font-bold text-primary">
                    {category.number}
                  </div>
                  <div className="flex-1">
                    <div className="text-2xl md:text-3xl mb-1">{category.icon}</div>
                    <h3 className="text-sm md:text-base font-semibold text-foreground">
                      {category.name}
                    </h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-8 md:mt-12 text-center">
            <Card className="p-6 md:p-8 bg-gradient-to-br from-primary/10 via-secondary/10 to-coral/10 border-2 border-primary/30 inline-block">
              <p className="text-base sm:text-lg md:text-xl font-semibold text-foreground">
                ✨ Um kit completo para dar voz a quem tem tanto a dizer
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KitCategories;
