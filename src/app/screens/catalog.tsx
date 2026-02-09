import React, { useState } from 'react';
import { Search, SlidersHorizontal, Instagram, Youtube, TrendingUp, Users, Star } from 'lucide-react';
import { Card } from '@/app/components/card';
import logoImage from 'figma:asset/fe8fb61b5c7d589bcf73e2db18f59c13bbe3cbfe.png';

interface CatalogScreenProps {
  onOpenFilters: () => void;
  onViewProfile: () => void;
}

interface Influencer {
  id: string;
  name: string;
  username: string;
  avatar: string;
  rating: number;
  followers: string;
  er: string;
  category: string;
  platforms: string[];
}

const influencers: Influencer[] = [
  {
    id: '1',
    name: 'Нодира Рахимова',
    username: '@nodira_tech',
    avatar: '👩‍💻',
    rating: 4.8,
    followers: '320К',
    er: '6.8%',
    category: 'Технологии',
    platforms: ['Instagram', 'YouTube'],
  },
  {
    id: '2',
    name: 'Жасур Каримов',
    username: '@jasur_oshpaz',
    avatar: '👨‍🍳',
    rating: 4.9,
    followers: '480К',
    er: '7.2%',
    category: 'Кулинария',
    platforms: ['Instagram', 'TikTok'],
  },
  {
    id: '3',
    name: 'Дилноза Азимова',
    username: '@dilnoza_style',
    avatar: '👗',
    rating: 4.7,
    followers: '580К',
    er: '5.5%',
    category: 'Мода',
    platforms: ['Instagram', 'YouTube'],
  },
  {
    id: '4',
    name: 'Азиз Усманов',
    username: '@aziz_fitness',
    avatar: '💪',
    rating: 4.6,
    followers: '250К',
    er: '8.1%',
    category: 'Спорт',
    platforms: ['Instagram', 'YouTube'],
  },
  {
    id: '5',
    name: 'Малика Нурматова',
    username: '@malika_beauty',
    avatar: '💄',
    rating: 4.9,
    followers: '720К',
    er: '6.3%',
    category: 'Красота',
    platforms: ['Instagram', 'TikTok'],
  },
  {
    id: '6',
    name: 'Шерзод Алиев',
    username: '@sherzod_travel',
    avatar: '✈️',
    rating: 4.7,
    followers: '420К',
    er: '6.2%',
    category: 'Путешествия',
    platforms: ['Instagram', 'YouTube'],
  },
];

const categories = ['Все', 'Технологии', 'Кулинария', 'Мода', 'Спорт', 'Красота', 'Путешествия'];

export const CatalogScreen: React.FC<CatalogScreenProps> = ({ onOpenFilters, onViewProfile }) => {
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredInfluencers = influencers.filter(inf => {
    const matchesCategory = selectedCategory === 'Все' || inf.category === selectedCategory;
    const matchesSearch = inf.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         inf.username.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#F8F9FA] pt-4 pb-24">
      {/* Header */}
      <div className="px-6 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <img src={logoImage} alt="Blogify" className="w-10 h-10" />
          <div className="flex-1">
            <h2 className="text-xl font-bold text-[#0F172A]">Каталог блогеров</h2>
            <p className="text-xs text-[#64748B]">{filteredInfluencers.length} инфлюенсеров</p>
          </div>
        </div>

        {/* Search bar */}
        <div className="flex gap-2 mb-4">
          <div className="flex-1 relative">
            <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B]" />
            <input
              type="text"
              placeholder="Поиск блогеров..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-12 pl-12 pr-4 bg-white border-2 border-[#E2E8F0] rounded-xl text-[#0F172A] placeholder-[#94A3B8] focus:border-[#0EA5E9] focus:outline-none"
            />
          </div>
          <button 
            onClick={onOpenFilters}
            className="w-12 h-12 bg-white border-2 border-[#E2E8F0] rounded-xl flex items-center justify-center hover:border-[#0EA5E9] transition-all"
          >
            <SlidersHorizontal size={20} className="text-[#64748B]" />
          </button>
        </div>

        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-[#0EA5E9] text-white shadow-md'
                  : 'bg-white text-[#64748B] border border-[#E2E8F0]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Influencer Grid */}
      <div className="px-6 grid grid-cols-2 gap-3">
        {filteredInfluencers.map((influencer) => (
          <Card 
            key={influencer.id} 
            className="cursor-pointer hover:shadow-lg transition-all active:scale-[0.98]"
            onClick={onViewProfile}
          >
            {/* Avatar */}
            <div className="aspect-square bg-gradient-to-br from-[#EFF6FF] to-[#DBEAFE] flex items-center justify-center rounded-t-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDE0LDE2NSwyMzMsMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-50" />
              <span className="text-6xl relative z-10">{influencer.avatar}</span>
              <div className="absolute top-2 right-2 px-2 py-1 bg-white/90 backdrop-blur-sm rounded-lg flex items-center gap-1">
                <Star size={12} className="text-[#F59E0B] fill-[#F59E0B]" />
                <span className="text-xs font-semibold text-[#0F172A]">{influencer.rating}</span>
              </div>
            </div>

            {/* Info */}
            <div className="p-3">
              <h3 className="text-sm font-semibold text-[#0F172A] mb-1 truncate">{influencer.name}</h3>
              <p className="text-xs text-[#64748B] mb-2 truncate">{influencer.username}</p>
              
              <div className="flex items-center gap-2 mb-2">
                <div className="flex items-center gap-1">
                  <Users size={12} className="text-[#64748B]" />
                  <span className="text-xs text-[#0F172A]">{influencer.followers}</span>
                </div>
                <div className="flex items-center gap-1">
                  <TrendingUp size={12} className="text-[#10B981]" />
                  <span className="text-xs text-[#10B981] font-medium">{influencer.er}</span>
                </div>
              </div>

              <div className="flex gap-1">
                {influencer.platforms.map((platform) => (
                  <div
                    key={platform}
                    className="flex-1 px-2 py-1 bg-[#EFF6FF] rounded flex items-center justify-center"
                  >
                    {platform === 'Instagram' && <Instagram size={12} className="text-[#0EA5E9]" />}
                    {platform === 'YouTube' && <Youtube size={12} className="text-[#0EA5E9]" />}
                    {platform === 'TikTok' && <span className="text-xs text-[#0EA5E9]">TT</span>}
                  </div>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};