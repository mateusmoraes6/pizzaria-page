import Navbar from './components/Navbar';
import ProductCarousel from './components/ProductCarousel';
import { Phone, Clock, MapPin, Award, Leaf, UtensilsCrossed } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Margherita Clássica",
    image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=800&auto=format&fit=crop",
    description: "Molho de tomate, mussarela, manjericão fresco",
    price: 49.90
  },
  {
    id: 2,
    name: "Pepperoni Especial",
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800&auto=format&fit=crop",
    description: "Pepperoni italiano, mussarela, orégano",
    price: 59.90
  },
  {
    id: 3,
    name: "Quatro Queijos",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop",
    description: "Mussarela, gorgonzola, parmesão, provolone",
    price: 54.90
  }
];

function App() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />
      
      <section id="home" className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=1920&auto=format&fit=crop"
            alt="Pizza background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Dom Pizzaiolo
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Sabores autênticos da Itália em cada fatia
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="#menu"
                className="w-36 sm:w-40 mx-auto inline-flex items-center justify-center bg-orange-500/90 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-orange-500 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
              >
                Ver Destaques
              </a>
              <a
                href="/cardapio"
                className="w-44 sm:w-40 mx-auto inline-flex items-center justify-center bg-white/90 text-orange-500 px-6 py-2.5 rounded-full text-sm font-medium hover:bg-white transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
              >
                Cardápio Completo
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nossas Especialidades</h2>
          <ProductCarousel products={products} />
        </div>
      </section>

      <section id="about" className="py-20 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Nossa História</h2>
            <p className="text-lg text-gray-700 mb-12">
              Desde 1990, a Pizzaria Bella tem servido as mais autênticas pizzas italianas,
              usando ingredientes frescos e técnicas tradicionais passadas por gerações.
              Nossa paixão pela culinária italiana e compromisso com a qualidade nos tornaram
              referência em pizza artesanal.
            </p>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 bg-stone-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Por que escolher o Dom Pizzaiolo?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <Award className="w-12 h-12 mx-auto mb-4 text-orange-500" />
              <h3 className="text-xl font-semibold mb-4">Premiada</h3>
              <p className="text-gray-600">
                Reconhecida como melhor pizzaria tradicional da cidade por 5 anos consecutivos.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <Leaf className="w-12 h-12 mx-auto mb-4 text-orange-500" />
              <h3 className="text-xl font-semibold mb-4">Ingredientes Frescos</h3>
              <p className="text-gray-600">
                Selecionamos os melhores ingredientes locais e importados da Itália.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <UtensilsCrossed className="w-12 h-12 mx-auto mb-4 text-orange-500" />
              <h3 className="text-xl font-semibold mb-4">Receitas Autênticas</h3>
              <p className="text-gray-600">
                Técnicas tradicionais italianas passadas por gerações de pizzaiolos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-stone-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contato</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Phone className="w-8 h-8 mx-auto mb-4 text-orange-500" />
              <h3 className="text-xl font-semibold mb-2">Telefone</h3>
              <p>(11) 99999-9999</p>
            </div>
            <div className="text-center">
              <Clock className="w-8 h-8 mx-auto mb-4 text-orange-500" />
              <h3 className="text-xl font-semibold mb-2">Horário</h3>
              <p>Ter-Dom: 18h às 23h</p>
            </div>
            <div className="text-center">
              <MapPin className="w-8 h-8 mx-auto mb-4 text-orange-500" />
              <h3 className="text-xl font-semibold mb-2">Endereço</h3>
              <p>Rua da Pizza, 123</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-stone-950 text-white/80 py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 Dom Pizzaiolo. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;