import React, { useState } from 'react';
import { Heart, Trash2, Instagram, Youtube, Users, TrendingUp, Star } from 'lucide-react';
import { Card } from '@/app/components/card';
import { Button } from '@/app/components/button';
import logoImage from 'figma:asset/fe8fb61b5c7d589bcf73e2db18f59c13bbe3cbfe.png';

interface FavoritesScreenProps {
  onViewProfile: () => void;
  onCreateCampaign?: () => void;
}

interface FavoriteInfluencer {
  id: string;
  name: string;
  username: string;
  avatar: string;
  rating: number;
  followers: string;
  er: string;
  addedDate: string;
  platforms: string[];
}

const favorites: FavoriteInfluencer[] = [
  {
    id: '1',
    name: 'Нодира Рахимова',
    username: '@nodira_tech',
    avatar: '👩‍💻',
    rating: 4.8,
    followers: '320К',
    er: '6.8%',
    addedDate: '2 дня назад',
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
    addedDate: '5 дней назад',
    platforms: ['Instagram', 'TikTok'],
  },
  {
    id: '3',
    name: 'Малика Нурматова',
    username: '@malika_beauty',
    avatar: '💄',
    rating: 4.9,
    followers: '720К',
    er: '6.3%',
    addedDate: '1 неделю назад',
    platforms: ['Instagram', 'YouTube'],
  },
];

export const FavoritesScreen: React.FC<FavoritesScreenProps> = ({ onViewProfile, onCreateCampaign }) => {
  const [favoritesList, setFavoritesList] = useState(favorites);

  const removeFavorite = (id: string) => {
    setFavoritesList(favoritesList.filter(fav => fav.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] pt-4 pb-24">
      {/* Header */}
      <div className="px-6 mb-6">
        <div className="flex items-center gap-3 mb-2">
          <img src={logoImage} alt="Blogify" className="w-10 h-10" />
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-[#0F172A]">Избранное</h2>
            <p className="text-sm text-[#64748B]">{favoritesList.length} блогеров</p>
          </div>
          <div className="w-10 h-10 bg-gradient-to-br from-[#EF4444] to-[#DC2626] rounded-full flex items-center justify-center shadow-md">
            <Heart size={20} className="text-white fill-white" />
          </div>
        </div>
      </div>

      {/* Content */}
      {favoritesList.length === 0 ? (
        <div className="px-6 flex flex-col items-center justify-center" style={{ minHeight: 'calc(100vh - 300px)' }}>
          <div className="w-24 h-24 bg-[#F1F5F9] rounded-full flex items-center justify-center mb-4">
            <Heart size={40} className="text-[#CBD5E1]" />
          </div>
          <h3 className="text-xl font-semibold text-[#0F172A] mb-2">Нет избранных</h3>
          <p className="text-[#64748B] text-center mb-6">
            Добавляйте блогеров в избранное для быстрого доступа
          </p>
        </div>
      ) : (
        <div className="px-6 space-y-3">
          {favoritesList.map((influencer) => (
            <Card key={influencer.id} className="p-4">
              <div className="flex items-start gap-4">
                {/* Avatar */}
                <div 
                  className="w-20 h-20 bg-gradient-to-br from-[#EFF6FF] to-[#DBEAFE] rounded-2xl flex items-center justify-center text-4xl cursor-pointer relative overflow-hidden flex-shrink-0"
                  onClick={onViewProfile}
                >
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDE0LDE2NSwyMzMsMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-50" />
                  <span className="relative z-10">{influencer.avatar}</span>
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1 min-w-0 cursor-pointer" onClick={onViewProfile}>
                      <h3 className="text-base font-semibold text-[#0F172A] truncate">{influencer.name}</h3>
                      <p className="text-sm text-[#64748B] truncate">{influencer.username}</p>
                    </div>
                    <button
                      onClick={() => removeFavorite(influencer.id)}
                      className="ml-2 w-8 h-8 bg-[#FEF2F2] rounded-lg flex items-center justify-center hover:bg-[#FEE2E2] transition-all flex-shrink-0"
                    >
                      <Trash2 size={16} className="text-[#EF4444]" />
                    </button>
                  </div>

                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex items-center gap-1">
                      <Star size={14} className="text-[#F59E0B] fill-[#F59E0B]" />
                      <span className="text-sm text-[#0F172A] font-medium">{influencer.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users size={14} className="text-[#64748B]" />
                      <span className="text-sm text-[#0F172A]">{influencer.followers}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <TrendingUp size={14} className="text-[#10B981]" />
                      <span className="text-sm text-[#10B981] font-medium">{influencer.er}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-1">
                      {influencer.platforms.map((platform) => (
                        <div
                          key={platform}
                          className="px-2 py-1 bg-[#EFF6FF] rounded flex items-center gap-1"
                        >
                          {platform === 'Instagram' && <Instagram size={12} className="text-[#0EA5E9]" />}
                          {platform === 'YouTube' && <Youtube size={12} className="text-[#0EA5E9]" />}
                          {platform === 'TikTok' && <span className="text-xs text-[#0EA5E9]">TT</span>}
                        </div>
                      ))}
                    </div>
                    <span className="text-xs text-[#94A3B8]">{influencer.addedDate}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}

          <Button variant="secondary" size="lg" className="w-full mt-4" onClick={onCreateCampaign}>
            Создать кампанию с избранными
          </Button>
        </div>
      )}
    </div>
  );
};