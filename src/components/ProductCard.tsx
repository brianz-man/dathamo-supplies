import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import type { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative pb-[75%]">
        <img
          src={product.image}
          alt={product.title}
          className="absolute h-full w-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900 mb-2">{product.title}</h3>
        <p className="text-sm text-gray-500 mb-2 line-clamp-2">{product.description}</p>
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < product.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
              }`}
            />
          ))}
          <span className="ml-2 text-sm text-gray-600">{product.rating}/5</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">${product.price.toLocaleString()}</span>
          <button className="bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700 transition-colors">
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}