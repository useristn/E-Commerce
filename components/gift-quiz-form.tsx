"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Gift, Heart, Users, Briefcase, UserCircle, Cake, GraduationCap, PartyPopper, Home, Sparkles, ArrowRight } from "lucide-react";

interface QuizFormProps {
  onSubmit: (answers: QuizAnswers) => void;
}

export interface QuizAnswers {
  recipient: string | null;
  gender: string | null;
  age: string | null;
  occasion: string | null;
  budget: string | null;
  interests: string;
}

const questions = [
  {
    id: "recipient",
    number: 1,
    question: "Bạn muốn tặng quà cho ai?",
    options: [
      { value: "nguoi-yeu-crush", label: "Người yêu / crush", icon: Heart },
      { value: "ban-be", label: "Bạn bè", icon: Users },
      { value: "gia-dinh", label: "Gia đình (bố mẹ)", icon: Home },
      { value: "dong-nghiep", label: "Đồng nghiệp", icon: Briefcase },
      { value: "sep-doi-tac", label: "Sếp / đối tác", icon: UserCircle },
      { value: "khac", label: "Khác", icon: Sparkles },
    ],
  },
  {
    id: "gender",
    number: 2,
    question: "Cho Kip! biết giới tính của người nhận nhé",
    options: [
      { value: "nam", label: "Nam", emoji: "👨" },
      { value: "nu", label: "Nữ", emoji: "👩" },
      { value: "khac", label: "Khác", emoji: "✨" },
    ],
  },
  {
    id: "age",
    number: 3,
    question: "Độ tuổi người nhận",
    options: [
      { value: "duoi-18", label: "Dưới 18 tuổi" },
      { value: "18-25", label: "Từ 18-25 tuổi" },
      { value: "26-35", label: "Từ 26-35 tuổi" },
      { value: "36-50", label: "Từ 36-50 tuổi" },
      { value: "tren-50", label: "Trên 50 tuổi" },
    ],
  },
  {
    id: "occasion",
    number: 4,
    question: "Bạn đang tặng quà cho dịp gì?",
    options: [
      { value: "sinh-nhat", label: "Sinh nhật", icon: Cake },
      { value: "anniversary-valentine", label: "Anniversary - Valentine", emoji: "💕" },
      { value: "8-3-20-10", label: "8/3 - 20/10", emoji: "🌸" },
      { value: "tot-nghiep", label: "Tốt nghiệp", icon: GraduationCap },
      { value: "khai-truong", label: "Khai trương / chúc mừng", icon: PartyPopper },
      { value: "cam-on-tri-an", label: "Cảm ơn / tri ân", emoji: "🙏" },
      { value: "tet-le", label: "Tết / lễ truyền thống", emoji: "🏮" },
      { value: "khac", label: "Khác", icon: Sparkles },
    ],
  },
  {
    id: "budget",
    number: 5,
    question: "Cho Kip! biết ngân sách của bạn nhé",
    options: [
      { value: "duoi-200k", label: "Dưới 200k" },
      { value: "200k-500k", label: "Từ 200k - 500k" },
      { value: "500k-1trieu", label: "Từ 500k - 1 triệu" },
      { value: "tren-1trieu", label: "Trên 1 triệu" },
      { value: "khac", label: "Khác" },
    ],
  },
];

export function GiftQuizForm({ onSubmit }: QuizFormProps) {
  const [answers, setAnswers] = useState<QuizAnswers>({
    recipient: null,
    gender: null,
    age: null,
    occasion: null,
    budget: null,
    interests: "",
  });

  const handleSelect = (questionId: string, value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: prev[questionId as keyof QuizAnswers] === value ? null : value,
    }));
  };

  const handleSubmit = () => {
    onSubmit(answers);
  };

  const isFormValid = answers.recipient || answers.occasion || answers.budget;

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="space-y-8">
        {questions.map((q) => (
          <div key={q.id} className="bg-card rounded-2xl p-6 shadow-sm border border-border">
            <div className="flex items-start gap-3 mb-4">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                {q.number}
              </span>
              <h3 className="text-lg font-medium text-foreground pt-0.5">{q.question}</h3>
            </div>
            <div className="flex flex-wrap gap-2 ml-10">
              {q.options.map((option) => {
                const isSelected = answers[q.id as keyof QuizAnswers] === option.value;
                const IconComponent = "icon" in option ? option.icon : null;
                const emoji = "emoji" in option ? option.emoji : null;

                return (
                  <button
                    key={option.value}
                    onClick={() => handleSelect(q.id, option.value)}
                    className={cn(
                      "flex items-center gap-2 px-4 py-2.5 rounded-full border-2 transition-all duration-200 text-sm font-medium",
                      isSelected
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border bg-background text-foreground hover:border-primary/50 hover:bg-accent"
                    )}
                  >
                    {IconComponent && <IconComponent className="w-4 h-4" />}
                    {emoji && <span>{emoji}</span>}
                    {option.label}
                  </button>
                );
              })}
            </div>
          </div>
        ))}

        {/* Interests field */}
        <div className="bg-card rounded-2xl p-6 shadow-sm border border-border">
          <div className="flex items-start gap-3 mb-4">
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
              6
            </span>
            <div>
              <h3 className="text-lg font-medium text-foreground">Người nhận có sở thích gì không?</h3>
              <p className="text-sm text-muted-foreground mt-1">(không bắt buộc)</p>
            </div>
          </div>
          <div className="ml-10">
            <textarea
              value={answers.interests}
              onChange={(e) => setAnswers((prev) => ({ ...prev, interests: e.target.value }))}
              placeholder="VD: thích uống cà phê, mê đọc sách, hay làm bánh, thích cây cảnh, nghiện skincare..."
              className="w-full p-4 rounded-xl border-2 border-border bg-background text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none resize-none transition-colors"
              rows={3}
            />
          </div>
        </div>

        {/* Submit button */}
        <button
          onClick={handleSubmit}
          disabled={!isFormValid}
          className={cn(
            "w-full py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2",
            isFormValid
              ? "bg-primary text-primary-foreground hover:opacity-90 shadow-lg hover:shadow-xl"
              : "bg-muted text-muted-foreground cursor-not-allowed"
          )}
        >
          <Gift className="w-5 h-5" />
          Gợi ý quà giúp tôi
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
