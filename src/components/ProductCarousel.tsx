import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Margherita Clássica",
    image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=800&auto=format&fit=crop",
    description: "Molho de tomate, mussarela, manjericão fresco"
  },
  {
    id: 2,
    name: "Pepperoni Especial",
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800&auto=format&fit=crop",
    description: "Pepperoni italiano, mussarela, orégano"
  },
  {
    id: 3,
    name: "Quatro Queijos",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop",
    description: "Mussarela, gorgonzola, parmesão, provolone"
  }
];

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((currentIndex + 1) % products.length);
  };

  const prev = () => {
    setCurrentIndex((currentIndex - 1 + products.length) % products.length);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="overflow-hidden rounded-lg shadow-xl">
        <div className="relative h-[400px]">
          <img
            src={products[currentIndex].image}
            alt={products[currentIndex].name}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
            <h3 className="text-2xl font-bold text-white">{products[currentIndex].name}</h3>
            <p className="text-white/80">{products[currentIndex].description}</p>
          </div>
        </div>
      </div>
      
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  );
};

export default ProductCarousel;