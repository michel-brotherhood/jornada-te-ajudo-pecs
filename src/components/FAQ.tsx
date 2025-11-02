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
      answer: "O Prazo de Garantia de 7 dias permite que você solicite o reembolso integral caso o ebook não atenda suas expectativas. O reembolso é processado automaticamente em até 5 dias."
    },
    {
      question: "Como acesso o ebook após a compra?",
      answer: "Você receberá o acesso ao ebook por email imediatamente após a confirmação do pagamento. O conteúdo pode ser acessado de qualquer dispositivo: computador, celular ou tablet."
    },
    {
      question: "Preciso ter conhecimento prévio sobre autismo?",
      answer: "Não! O ebook foi criado justamente para quem está começando do zero. Usamos linguagem acessível e exemplos práticos, sem jargões técnicos complexos."
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
              Tire suas dúvidas sobre o ebook
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
