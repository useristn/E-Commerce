"use client";

import { Product } from "@/lib/products";
import { ProductCard } from "./product-card";
import { ArrowLeft, Package, Sparkles } from "lucide-react";

interface ProductResultsProps {
  products: Product[];
  onBack: () => void;
}

export function ProductResults({ products, onBack }: ProductResultsProps) {
  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 text-primary mb-2">
          <Sparkles className="w-5 h-5" />
          <span className="text-sm font-medium uppercase tracking-wider">Kip! gợi ý cho bạn</span>
          <Sparkles className="w-5 h-5" />
        </div>
        <h2 className="text-3xl font-bold text-foreground mb-2">
          Tìm thấy {products.length} quà tặng phù hợp
        </h2>
        <p className="text-muted-foreground">
          Dựa trên lựa chọn của bạn, đây là những món quà Kip! nghĩ bạn sẽ thích
        </p>
      </div>

      {/* Back button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-primary hover:underline mb-6 font-medium"
      >
        <ArrowLeft className="w-4 h-4" />
        Thay đổi lựa chọn
      </button>

      {/* Products Grid */}
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <Package className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-foreground mb-2">
            Không tìm thấy sản phẩm phù hợp
          </h3>
          <p className="text-muted-foreground mb-6">
            Thử thay đổi lựa chọn của bạn để tìm được quà tặng phù hợp hơn nhé!
          </p>
          <button
            onClick={onBack}
            className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            Thử lại
          </button>
        </div>
      )}

      {/* CTA Section */}
      {products.length > 0 && (
        <div className="mt-12 text-center bg-accent/50 rounded-2xl p-8">
          <h3 className="text-xl font-semibold text-foreground mb-2">
            Chưa tìm được quà ưng ý?
          </h3>
          <p className="text-muted-foreground mb-4">
            Liên hệ với Kip! để được tư vấn thêm nhé!
          </p>
          <button className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity">
            Liên hệ tư vấn
          </button>
        </div>
      )}
    </div>
  );
}
