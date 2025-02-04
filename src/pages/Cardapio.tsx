import { ArrowLeft } from 'lucide-react';

const MenuSection = ({ title, items }: { title: string; items: Array<{ name: string; description?: string; price: string }> }) => (
  <div className="mb-12">
    <h2 className="text-2xl font-bold mb-6 text-orange-500">{title}</h2>
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="flex justify-between items-start border-b border-stone-200 pb-4">
          <div>
            <h3 className="font-semibold text-lg">{item.name}</h3>
            {item.description && <p className="text-gray-600 text-sm mt-1">{item.description}</p>}
          </div>
          <span className="font-semibold text-lg ml-4">{item.price}</span>
        </div>
      ))}
    </div>
  </div>
);

function Cardapio() {
  const pizzas = [
    { name: "Margherita", description: "Molho de tomate, mussarela de búfala, manjericão fresco", price: "R$ 45" },
    { name: "Pepperoni", description: "Pepperoni italiano, mussarela, orégano", price: "R$ 52" },
    { name: "Quatro Queijos", description: "Mussarela, gorgonzola, parmesão, provolone", price: "R$ 48" },
    { name: "Calabresa", description: "Calabresa fatiada, cebola, mussarela", price: "R$ 42" },
    { name: "Portuguesa", description: "Presunto, ovos, cebola, ervilha, mussarela", price: "R$ 50" },
    { name: "Vegetariana", description: "Abobrinha, berinjela, pimentão, cogumelos, mussarela", price: "R$ 46" },
    { name: "Frango com Catupiry", description: "Frango desfiado, catupiry original, milho, mussarela", price: "R$ 48" },
    { name: "Napolitana", description: "Molho de tomate, mussarela, tomates frescos, alho, manjericão", price: "R$ 44" }
  ];

  const calzones = [
    { name: "Presunto e Queijo", description: "Presunto, mussarela, orégano", price: "R$ 40" },
    { name: "Frango", description: "Frango desfiado, catupiry, mussarela", price: "R$ 42" },
    { name: "Vegetariano", description: "Legumes grelhados, mussarela", price: "R$ 38" }
  ];

  const bebidas = [
    { name: "Refrigerante 350ml", price: "R$ 6" },
    { name: "Água Mineral 500ml", price: "R$ 4" },
    { name: "Suco Natural 400ml", price: "R$ 8" },
    { name: "Cerveja Artesanal 600ml", price: "R$ 18" },
    { name: "Vinho Tinto (Taça)", price: "R$ 20" },
    { name: "Vinho Branco (Taça)", price: "R$ 20" }
  ];

  const sobremesas = [
    { name: "Tiramisù", description: "Clássica sobremesa italiana com café e mascarpone", price: "R$ 25" },
    { name: "Petit Gateau", description: "Com sorvete de creme", price: "R$ 28" },
    { name: "Cannoli", description: "Recheado com creme de ricota", price: "R$ 15" }
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <div className="bg-stone-900 text-white py-6">
        <div className="container mx-auto px-4">
          <a href="/" className="inline-flex items-center text-orange-500 hover:text-orange-400 mb-4">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Voltar
          </a>
          <h1 className="text-4xl font-bold">Cardápio</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <MenuSection title="Pizzas" items={pizzas} />
          <MenuSection title="Calzones" items={calzones} />
          <MenuSection title="Bebidas" items={bebidas} />
          <MenuSection title="Sobremesas" items={sobremesas} />
        </div>

        <div className="mt-12 max-w-4xl mx-auto bg-orange-50 rounded-lg p-6 border border-orange-200">
          <h3 className="text-lg font-semibold text-orange-800 mb-2">Informações Importantes</h3>
          <ul className="space-y-2 text-orange-700">
            <li>• Pizzas disponíveis nos tamanhos: Média (30cm) e Grande (35cm)</li>
            <li>• Valores referentes ao tamanho médio</li>
            <li>• Acréscimo de R$ 10 para pizzas grandes</li>
            <li>• Borda recheada: + R$ 8</li>
            <li>• Ingredientes extras: + R$ 5 cada</li>
            <li>• Tempo médio de entrega: 45-60 minutos</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cardapio;