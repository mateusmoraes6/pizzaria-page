import { ShoppingCart } from 'lucide-react';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category?: string;
}

const MenuCard = ({ item }: { item: MenuItem }) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="flex gap-4">
        <div className="w-24 h-24 flex-shrink-0">
          <img 
            src={item.image} 
            alt={item.name}
            className="w-full h-full object-cover rounded-lg"
            loading="lazy"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start gap-2">
            <h3 className="text-base font-medium line-clamp-1">{item.name}</h3>
            <span className="flex-shrink-0 text-[11px] font-medium bg-orange-100/80 text-orange-700 px-2 py-0.5 rounded-full">
              R${item.price.toFixed(2)}
            </span>
          </div>
          <p className="text-gray-600 text-xs mt-1 line-clamp-2">{item.description}</p>
          <div className="mt-2 flex justify-end">
            <button className="flex-shrink-0 bg-orange-500/90 hover:bg-orange-500 text-white rounded-full p-1.5 transition-all duration-300 flex items-center gap-1.5 text-[11px]">
              <ShoppingCart className="w-3.5 h-3.5" />
              <span>Adicionar</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
