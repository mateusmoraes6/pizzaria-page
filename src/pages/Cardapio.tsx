import { ArrowLeft, ShoppingCart } from 'lucide-react';

const pizzas = [
  {
    name: "Margherita",
    description: "Molho de tomate, mussarela, manjericão fresco",
    price: "49,90"
  },
  {
    name: "Pepperoni",
    description: "Molho de tomate, mussarela, pepperoni importado",
    price: "59,90"
  },
  {
    name: "Quatro Queijos",
    description: "Mussarela, gorgonzola, parmesão, catupiry",
    price: "54,90"
  },
  {
    name: "Portuguesa",
    description: "Mussarela, presunto, ovos, cebola, azeitonas",
    price: "52,90"
  }
];

const MenuSection = ({ title, items }: { title: string; items: Array<{ name: string; description: string; price: string }> }) => (
  <div className="mb-8">
    <h2 className="text-xl font-bold mb-4 text-stone-800">{title}</h2>
    <div className="grid gap-4">
      {items.map((item, index) => (
        <div key={index} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300">
          <div className="flex justify-between items-start gap-4">
            <div className="flex-1">
              <h3 className="font-medium text-base">{item.name}</h3>
              <p className="text-gray-600 text-sm mt-1">{item.description}</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex-shrink-0 text-[11px] font-medium bg-orange-100/80 text-orange-700 px-2 py-0.5 rounded-full">
                R$ {item.price}
              </span>
              <button className="flex-shrink-0 bg-orange-500/90 hover:bg-orange-500 text-white rounded-full p-1.5 transition-all duration-300">
                <ShoppingCart className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

function Cardapio() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header com botão voltar */}
      <div className="bg-stone-900 text-white py-4">
        <div className="container mx-auto px-4 max-w-3xl">
          <a 
            href="/" 
            className="inline-flex items-center text-orange-400 hover:text-orange-300 transition-colors mb-2"
          >
            <ArrowLeft className="w-5 h-5 mr-1" />
            Voltar
          </a>
          <h1 className="text-2xl font-bold">Cardápio</h1>
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <MenuSection title="Pizzas" items={pizzas} />

        {/* Informações adicionais */}
        <div className="mt-8 bg-orange-50 rounded-lg p-4 border border-orange-100 text-sm">
          <h3 className="font-semibold text-orange-800 mb-2">Informações</h3>
          <ul className="space-y-1 text-orange-700">
            <li>• Pizzas nos tamanhos: M (30cm) e G (35cm)</li>
            <li>• Valores referentes ao tamanho médio</li>
            <li>• Acréscimo de R$ 10 para pizzas grandes</li>
            <li>• Borda recheada: + R$ 8</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cardapio;