import React from "react";
import { Star, ShoppingCart } from "lucide-react";
import type { Product } from "../types/product";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
      <div className="relative pb-[75%] bg-slate-100">
        <img
          src={product.image}
          alt={product.title}
          className="absolute h-full w-full object-cover"
        />
      </div>
      <div className="p-5">
        <h3 className="mb-1.5 line-clamp-1 text-base font-bold text-slate-900">
          {product.title}
        </h3>
        <p className="mb-3 line-clamp-2 text-sm text-slate-500">
          {product.description}
        </p>
        <div className="mb-3 flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-3.5 w-3.5 ${
                i < product.rating
                  ? "fill-current text-amber-400"
                  : "text-slate-200"
              }`}
            />
          ))}
          <span className="ml-2 text-xs font-medium text-slate-400">
            {product.rating}/5
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-lg font-extrabold text-slate-900">
            KSh {product.price.toLocaleString()}
          </span>
          <button
            aria-label={`Add ${product.title} to cart`}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white transition-colors hover:bg-amber-400 hover:text-slate-900"
          >
            <ShoppingCart className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
