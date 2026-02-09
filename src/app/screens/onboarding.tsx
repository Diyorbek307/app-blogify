import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/app/components/button';

interface OnboardingProps {
  onComplete: () => void;
}

export const OnboardingScreen: React.FC<OnboardingProps> = ({ onComplete }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Находите идеальных блогеров',
      description: 'Простой свайп для подбора инфлюенсеров под ваш бренд',
      illustration: '🎯',
    },
    {
      title: 'Умные фильтры',
      description: 'Регион, ER, рейтинг и множество других параметров',
      illustration: '🔍',
    },
    {
      title: 'Анализируйте результаты',
      description: 'Графики аналитики и детальная статистика кампаний',
      illustration: '📊',
    },
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      onComplete();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#EFF6FF] to-[#F0F9FF] flex flex-col items-center justify-between p-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#0EA5E9]/10 rounded-full blur-[120px]" />
      
      <div className="flex-1 flex flex-col items-center justify-center relative z-10 w-full max-w-[400px]">
        <div className="text-8xl mb-12 animate-bounce">{slides[currentSlide].illustration}</div>
        
        <h1 className="text-3xl font-bold text-center mb-4 text-[#0F172A]">
          {slides[currentSlide].title}
        </h1>
        
        <p className="text-base text-[#64748B] text-center mb-12 px-4">
          {slides[currentSlide].description}
        </p>

        {/* Dots indicator */}
        <div className="flex gap-2 mb-8">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'w-8 bg-[#0EA5E9]'
                  : 'w-2 bg-[#CBD5E1]'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="w-full max-w-[400px] space-y-4 relative z-10">
        <Button
          size="lg"
          className="w-full"
          onClick={nextSlide}
        >
          {currentSlide === slides.length - 1 ? 'Начать' : 'Далее'}
          <ChevronRight className="ml-2" size={20} />
        </Button>
        
        {currentSlide < slides.length - 1 && (
          <Button
            variant="ghost"
            size="lg"
            className="w-full"
            onClick={onComplete}
          >
            Пропустить
          </Button>
        )}
      </div>
    </div>
  );
};
