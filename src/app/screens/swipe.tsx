import React, { useState } from 'react';
import { Bell, SlidersHorizontal, Heart, X, Instagram, Youtube, MapPin, TrendingUp } from 'lucide-react';
import { motion, useMotionValue, useTransform, PanInfo } from 'motion/react';
import { Card } from '@/app/components/card';
import { Button } from '@/app/components/button';
import logoImage from 'figma:asset/fe8fb61b5c7d589bcf73e2db18f59c13bbe3cbfe.png';

interface Influencer {
  id: number;
  name: string;
  age: number;
  category: string;
  location: string;
  followers: string;
  er: string;
  image: string;
  bio: string;
  platforms: string[];
  tags: string[];
}

interface SwipeScreenProps {
  onOpenFilters: () => void;
  onViewProfile: () => void;
}

const influencers: Influencer[] = [
  {
    id: 1,
    name: 'Нодира Рахимова',
    age: 25,
    category: 'Технологии',
    location: 'Ташкент',
    followers: '320К',
    er: '6.8%',
    image: '👩‍💻',
    bio: 'Технологии и гаджеты для узбекской аудитории',
    platforms: ['Instagram', 'YouTube'],
    tags: ['Гаджеты', 'Обзоры', 'Технологии'],
  },
  {
    id: 2,
    name: 'Жасур Каримов',
    age: 28,
    category: 'Кулинария',
    location: 'Самарканд',
    followers: '480К',
    er: '7.2%',
    image: '👨‍🍳',
    bio: 'Узбекская кухня и традиционные рецепты',
    platforms: ['Instagram', 'TikTok'],
    tags: ['Плов', 'Рецепты', 'Кулинария'],
  },
  {
    id: 3,
    name: 'Дилноза Азимова',
    age: 24,
    category: 'Мода',
    location: 'Ташкент',
    followers: '580К',
    er: '5.5%',
    image: '👗',
    bio: 'Узбекская и современная мода',
    platforms: ['Instagram', 'YouTube'],
    tags: ['Стиль', 'Мода', 'Тренды'],
  },
  {
    id: 4,
    name: 'Азиз Усманов',
    age: 26,
    category: 'Спорт',
    location: 'Бухара',
    followers: '250К',
    er: '8.1%',
    image: '💪',
    bio: 'Фитнес и здоровый образ жизни',
    platforms: ['Instagram', 'YouTube'],
    tags: ['Фитнес', 'Спорт', 'ЗОЖ'],
  },
  {
    id: 5,
    name: 'Малика Нурматова',
    age: 23,
    category: 'Красота',
    location: 'Ташкент',
    followers: '720К',
    er: '6.3%',
    image: '💄',
    bio: 'Макияж и уход за собой',
    platforms: ['Instagram', 'TikTok'],
    tags: ['Макияж', 'Красота', 'Уход'],
  },
];

export const SwipeScreen: React.FC<SwipeScreenProps> = ({ onOpenFilters, onViewProfile }) => {
  const [cards, setCards] = useState(influencers);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipe = (direction: 'left' | 'right') => {
    if (currentIndex < cards.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const currentCard = cards[currentIndex];

  return (
    <div className="min-h-screen bg-[#F8F9FA] pt-4 pb-24">
      {/* Top bar */}
      <div className="px-6 mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logoImage} alt="Blogify" className="w-10 h-10" />
          <div>
            <h2 className="text-base font-semibold text-[#0F172A]">Blogify</h2>
            <p className="text-xs text-[#64748B]">Поиск блогеров</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="w-10 h-10 bg-white border border-[#E2E8F0] rounded-full flex items-center justify-center relative shadow-sm">
            <Bell size={20} className="text-[#64748B]" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-[#EF4444] rounded-full" />
          </button>
          <button 
            onClick={onOpenFilters}
            className="w-10 h-10 bg-white border border-[#E2E8F0] rounded-full flex items-center justify-center shadow-sm"
          >
            <SlidersHorizontal size={20} className="text-[#64748B]" />
          </button>
        </div>
      </div>

      {/* Swipe cards */}
      <div className="px-6 relative" style={{ height: 'calc(100vh - 220px)' }}>
        {currentIndex >= cards.length ? (
          <Card className="p-8 flex flex-col items-center justify-center h-full">
            <span className="text-6xl mb-4">🎉</span>
            <h3 className="text-2xl font-bold text-[#0F172A] mb-2">Блогеры закончились!</h3>
            <p className="text-[#64748B] text-center mb-6">
              Попробуйте изменить фильтры для поиска новых инфлюенсеров
            </p>
            <Button onClick={() => setCurrentIndex(0)}>
              Начать заново
            </Button>
          </Card>
        ) : (
          <SwipeCard
            influencer={currentCard}
            onSwipe={handleSwipe}
            onViewProfile={onViewProfile}
            key={currentCard.id}
          />
        )}
      </div>

      {/* Action buttons */}
      <div className="fixed bottom-24 left-0 right-0 px-6">
        <div className="flex justify-center gap-6 max-w-[400px] mx-auto">
          <button
            onClick={() => handleSwipe('left')}
            className="w-16 h-16 rounded-full bg-white border-2 border-[#E2E8F0] flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-transform"
          >
            <X size={32} className="text-[#EF4444]" />
          </button>
          <button
            onClick={() => handleSwipe('right')}
            className="w-20 h-20 rounded-full bg-gradient-to-br from-[#0EA5E9] to-[#0284C7] flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-transform"
          >
            <Heart size={36} className="text-white fill-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

interface SwipeCardProps {
  influencer: Influencer;
  onSwipe: (direction: 'left' | 'right') => void;
  onViewProfile: () => void;
}

const SwipeCard: React.FC<SwipeCardProps> = ({ influencer, onSwipe, onViewProfile }) => {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-25, 25]);
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 1, 1, 0]);

  const handleDragEnd = (event: any, info: PanInfo) => {
    if (Math.abs(info.offset.x) > 100) {
      onSwipe(info.offset.x > 0 ? 'right' : 'left');
    }
  };

  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      style={{ x, rotate, opacity }}
      onDragEnd={handleDragEnd}
      className="absolute inset-0 cursor-grab active:cursor-grabbing"
      onClick={onViewProfile}
    >
      <Card className="h-full overflow-hidden relative">
        {/* Avatar/Hero section */}
        <div className="h-1/2 bg-gradient-to-br from-[#EFF6FF] to-[#DBEAFE] flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDE0LDE2NSwyMzMsMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-50" />
          <span className="text-[120px] relative z-10">{influencer.image}</span>
        </div>

        {/* Info section */}
        <div className="h-1/2 p-6 flex flex-col bg-white">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-[#0F172A] mb-1">{influencer.name}</h2>
              <p className="text-[#64748B] text-sm mb-2">{influencer.category}</p>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <span className="text-[#F59E0B]">⭐</span>
                  <span className="text-[#0F172A] font-semibold">{influencer.age}</span>
                </div>
                <div className="flex items-center gap-1 text-[#64748B]">
                  <span>👥</span>
                  <span>{influencer.followers}</span>
                </div>
                <div className="flex items-center gap-1 text-[#64748B]">
                  <MapPin size={14} />
                  <span>{influencer.location}</span>
                </div>
              </div>
            </div>
            <div className="px-3 py-1 bg-[#ECFDF5] rounded-lg">
              <div className="flex items-center gap-1">
                <TrendingUp size={14} className="text-[#10B981]" />
                <span className="text-[#10B981] font-semibold text-sm">ER {influencer.er}</span>
              </div>
            </div>
          </div>

          {/* Platforms */}
          <div className="flex gap-2 mb-4">
            {influencer.platforms.map((platform) => (
              <div
                key={platform}
                className="px-3 py-1 bg-[#EFF6FF] rounded-lg flex items-center gap-2"
              >
                {platform === 'Instagram' && <Instagram size={14} className="text-[#0EA5E9]" />}
                {platform === 'YouTube' && <Youtube size={14} className="text-[#0EA5E9]" />}
                <span className="text-[#0EA5E9] text-xs font-medium">{platform}</span>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {influencer.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-[#F1F5F9] text-[#64748B] rounded-lg text-xs"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Mini chart */}
          <div className="mt-auto">
            <div className="flex items-end gap-1 h-12">
              {[30, 45, 35, 60, 55, 70, 65].map((height, i) => (
                <div
                  key={i}
                  className="flex-1 bg-gradient-to-t from-[#0EA5E9]/50 to-[#0EA5E9]/20 rounded-t"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
            <p className="text-xs text-[#64748B] mt-2 text-center">Динамика роста аудитории</p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};