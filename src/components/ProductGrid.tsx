import React from "react";
import { PackageSearch } from "lucide-react";
import { ProductCard } from "./ProductCard";
import { products } from "../config/products";

interface ProductGridProps {
  category: string | null;
}

export function ProductGrid({ category }: ProductGridProps) {
  const filteredProducts = category
    ? products.filter((product) => product.category === category)
    : products;

  if (filteredProducts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <PackageSearch className="mb-3 h-10 w-10 text-slate-300" />
        <p className="font-medium text-slate-500">
          No products in this category yet.
        </p>
        <p className="mt-1 text-sm text-slate-400">
          Try selecting a different category.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
