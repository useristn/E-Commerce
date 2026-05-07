"use client";

import { Product } from "@/lib/products";
import { ShoppingBag, Gift } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [imgError, setImgError] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  return (
    <div className="group bg-card rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      {/* Product Image */}
      <div className="relative aspect-square bg-muted overflow-hidden">
        {product.image && !imgError ? (
          <img
            src={product.image}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/5 to-primary/20">
            <Gift className="w-16 h-16 text-primary/30" />
          </div>
        )}
        {product.brand && (
          <span className="absolute top-3 left-3 bg-primary/90 text-primary-foreground text-xs font-medium px-3 py-1 rounded-full z-10">
            {product.brand}
          </span>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-semibold text-foreground line-clamp-2 min-h-[3rem] text-balance">
          {product.name}
        </h3>
        {product.description && (
          <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
            {product.description}
          </p>
        )}
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-primary">
            {formatPrice(product.price)}
          </span>
          <button className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
            <ShoppingBag className="w-4 h-4" />
            Chọn
          </button>
        </div>
      </div>
    </div>
  );
}
