import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Como funciona o Prazo de Garantia?",
      answer: "O Prazo de Garantia de 7 dias permite que você solicite o reembolso integral caso o kit não atenda suas expectativas. O reembolso é processado automaticamente em até 5 dias."
    },
    {
      question: "Como acesso o kit após a compra?",
      answer: "Você receberá o acesso ao Kit CAA Básico por email imediatamente após a confirmação do pagamento. O material pode ser baixado e impresso de qualquer dispositivo: computador, celular ou tablet."
    },
    {
      question: "Preciso ter conhecimento prévio sobre CAA?",
      answer: "Não! O Kit CAA Básico foi criado para ser acessível e fácil de usar, perfeito para quem está começando na comunicação alternativa. É uma ferramenta prática de baixa tecnologia."
    },
    {
      question: "O que são as 16 categorias incluídas?",
      answer: "O kit inclui: Alimentos, Brinquedos, Cores, Ações, Atividades da vida diária, Animais, Datas, Corpo humano, Instrumentos, Lugares, Números, Roupas, Transportes, Profissões e Emoções - cobrindo as principais necessidades de comunicação do dia a dia."
    },
    {
      question: "Como visualizar os arquivos PDF?",
      answer: "Para visualizar os PDFs, você pode usar qualquer programa leitor de PDF. No computador, basta dar dois cliques no arquivo que ele abrirá automaticamente. No celular ou tablet, toque no arquivo e escolha um aplicativo como Adobe Reader (disponível gratuitamente na loja de apps) ou o visualizador padrão do seu dispositivo."
    },
    {
      question: "Como extrair os arquivos .zip?",
      answer: "No computador Windows: clique com o botão direito no arquivo .zip e escolha 'Extrair tudo'. No Mac: dê dois cliques no arquivo. No celular Android ou iPhone: baixe um app gratuito como 'WinZip' ou 'Files by Google', abra o arquivo .zip no app e toque em 'Extrair'. Os arquivos ficarão em uma pasta com o mesmo nome do arquivo .zip."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Perguntas <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Frequentes</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Tire suas dúvidas sobre o Kit CAA Básico
            </p>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-2 mb-4 rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
