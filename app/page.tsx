"use client";

import { useState } from "react";
import { GiftQuizForm, QuizAnswers } from "@/components/gift-quiz-form";
import { ProductResults } from "@/components/product-results";
import { filterProducts, Product } from "@/lib/products";
import { Gift, Clock, Truck, Sparkles } from "lucide-react";

export default function Home() {
  const [showResults, setShowResults] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const handleSubmit = (answers: QuizAnswers) => {
    const results = filterProducts(answers.recipient, answers.occasion, answers.budget);
    setFilteredProducts(results);
    setShowResults(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBack = () => {
    setShowResults(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <Gift className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold text-primary">Kip!</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>Giao nhanh trong 2 tiếng</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      {!showResults && (
        <section className="bg-gradient-to-b from-accent/50 to-background py-12 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 text-primary mb-4">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-medium uppercase tracking-wider">
                Trợ lý gợi ý quà tặng
              </span>
              <Sparkles className="w-5 h-5" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Tìm quà tặng hoàn hảo trong 1 phút
            </h1>
            <p className="text-lg text-muted-foreground mb-6 text-pretty">
              Trả lời vài câu hỏi đơn giản, Kip! sẽ gợi ý những món quà phù hợp nhất cho người bạn yêu thương
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Clock className="w-4 h-4 text-primary" />
                </div>
                <span>Giao trong 2 tiếng</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Truck className="w-4 h-4 text-primary" />
                </div>
                <span>Miễn phí giao hàng</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Gift className="w-4 h-4 text-primary" />
                </div>
                <span>Gói quà đẹp mắt</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Main Content */}
      <section className="py-8 px-4">
        {showResults ? (
          <ProductResults products={filteredProducts} onBack={handleBack} />
        ) : (
          <GiftQuizForm onSubmit={handleSubmit} />
        )}
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8 px-4 mt-12">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <Gift className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-primary">Kip!</span>
          </div>
          <p className="text-muted-foreground text-sm mb-4">
            Dịch vụ giao quà nhanh trong 2 tiếng tại TP.HCM
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              Về chúng tôi
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Liên hệ
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Chính sách
            </a>
          </div>
          <p className="text-xs text-muted-foreground mt-6">
            © 2026 Kip! - E-commerce Project
          </p>
        </div>
      </footer>
    </main>
  );
}
