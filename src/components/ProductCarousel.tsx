import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

const ProductCarousel = ({ products }: { products: Product[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Duplicar produtos para efeito infinito
  const extendedProducts = [...products, ...products, ...products];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleNext = () => {
    setCurrentIndex((prev) => {
      const next = prev + 1;
      // Quando chegar no final do array estendido, voltar para o conjunto do meio
      if (next >= products.length * 2) {
        return products.length;
      }
      return next;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      const next = prev - 1;
      // Quando chegar no início do array estendido, ir para o conjunto do meio
      if (next < 0) {
        return products.length - 1;
      }
      return next;
    });
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex items-center justify-center min-h-[400px] md:min-h-[500px]">
        <div className="relative w-full max-w-4xl px-4">
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {extendedProducts.map((product, idx) => (
              <div 
                key={`${product.id}-${idx}`}
                className="w-full flex-shrink-0 px-4"
              >
                <div className="card shine-effect">
                  <div className="overflow-hidden rounded-lg mb-4">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 md:h-64 object-cover transform hover:scale-110 transition-transform duration-700 scale-105"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-xl md:text-2xl font-heading mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex items-center justify-between pt-2 border-t border-gray-100 mt-2">
                    <div className="flex-shrink-0">
                      <span className="inline-flex items-center text-[11px] md:text-xs font-medium bg-orange-100/80 text-orange-700 px-2 py-0.5 rounded-full">
                        R${product.price.toFixed(2)}
                      </span>
                    </div>
                    <button className="flex-shrink-0 bg-orange-500/90 hover:bg-orange-500 text-white rounded-full p-1.5 md:px-4 md:py-2 transition-all duration-300 flex items-center gap-2 text-[11px] md:text-xs">
                      <ShoppingCart className="w-3.5 h-3.5" />
                      <span className="hidden md:inline">Adicionar</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button 
        onClick={() => {
          handlePrev();
          setIsAutoPlaying(false);
        }}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/80 rounded-full shadow-lg hover-effect"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button 
        onClick={() => {
          handleNext();
          setIsAutoPlaying(false);
        }}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/80 rounded-full shadow-lg hover-effect"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {products.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setCurrentIndex(idx + products.length);
              setIsAutoPlaying(false);
            }}
            className={`w-2 h-2 rounded-full transition-all ${
              (currentIndex % products.length) === idx ? 'bg-orange-500 w-4' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;