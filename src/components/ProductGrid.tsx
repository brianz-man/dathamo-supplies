import React from 'react';
import { ProductCard } from './ProductCard';
import { products } from '../config/products';

interface ProductGridProps {
  category: string | null;
}

export function ProductGrid({ category }: ProductGridProps) {
  const filteredProducts = category
    ? products.filter(product => product.category === category)
    : products;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}