import React from 'react';
import { ArrowLeft, Instagram, Youtube, Users, TrendingUp, MapPin, Star } from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Card } from '@/app/components/card';
import { Button } from '@/app/components/button';

interface ProfileScreenProps {
  onBack: () => void;
  onCreateCampaign?: () => void;
}

const followerGrowthData = [
  { month: 'Янв', value: 180 },
  { month: 'Фев', value: 200 },
  { month: 'Мар', value: 210 },
  { month: 'Апр', value: 230 },
  { month: 'Май', value: 240 },
  { month: 'Июн', value: 250 },
];

const audienceData = [
  { name: 'Женщины', value: 65, color: '#0EA5E9' },
  { name: 'Мужчины', value: 35, color: '#10B981' },
];

export const ProfileScreen: React.FC<ProfileScreenProps> = ({ onBack, onCreateCampaign }) => {
  return (
    <div className="min-h-screen bg-[#F8F9FA] pb-24">
      {/* Header */}
      <div className="relative h-48 bg-gradient-to-br from-[#EFF6FF] to-[#DBEAFE] overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDE0LDE2NSwyMzMsMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-50" />
        <button
          onClick={onBack}
          className="absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center z-10 shadow-md"
        >
          <ArrowLeft size={20} className="text-[#0F172A]" />
        </button>
        <Button
          className="absolute top-4 right-4 z-10"
          size="sm"
        >
          Предложить
        </Button>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
          <div className="w-24 h-24 bg-gradient-to-br from-[#0EA5E9] to-[#0284C7] rounded-full flex items-center justify-center text-5xl border-4 border-white shadow-lg">
            👩‍💻
          </div>
        </div>
      </div>

      {/* Profile info */}
      <div className="px-6 mt-16 mb-6">
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold text-[#0F172A] mb-1">Нодира Рахимова</h1>
          <p className="text-[#64748B] text-base mb-2">@nodira_tech</p>
          <div className="flex items-center justify-center gap-2 mb-3">
            <MapPin size={16} className="text-[#64748B]" />
            <span className="text-sm text-[#64748B]">Ташкент, Узбекистан</span>
          </div>
          <p className="text-[#0F172A] text-sm">
            Технологии и гаджеты для узбекской аудитории 📱💻
          </p>
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-3 mb-6">
          <button className="w-12 h-12 bg-white border border-[#E2E8F0] rounded-full flex items-center justify-center hover:bg-[#EFF6FF] shadow-sm">
            <Instagram size={20} className="text-[#0EA5E9]" />
          </button>
          <button className="w-12 h-12 bg-white border border-[#E2E8F0] rounded-full flex items-center justify-center hover:bg-[#EFF6FF] shadow-sm">
            <Youtube size={20} className="text-[#0EA5E9]" />
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <Card className="p-4 text-center">
            <Users size={24} className="text-[#0EA5E9] mx-auto mb-2" />
            <div className="text-xl font-bold text-[#0F172A]">250K</div>
            <div className="text-xs text-[#64748B]">Подписчики</div>
          </Card>
          <Card className="p-4 text-center">
            <TrendingUp size={24} className="text-[#10B981] mx-auto mb-2" />
            <div className="text-xl font-bold text-[#0F172A]">5.2%</div>
            <div className="text-xs text-[#64748B]">ER</div>
          </Card>
          <Card className="p-4 text-center">
            <Star size={24} className="text-[#F59E0B] mx-auto mb-2" />
            <div className="text-xl font-bold text-[#0F172A]">4.8</div>
            <div className="text-xs text-[#64748B]">Рейтинг</div>
          </Card>
        </div>
      </div>

      {/* Analytics */}
      <div className="px-6 space-y-4">
        <h3 className="text-xl font-semibold text-[#0F172A] mb-4">Аналитика</h3>

        {/* Audience demographics */}
        <Card className="p-4">
          <h4 className="text-base font-semibold text-[#0F172A] mb-4">Аудитория по полу</h4>
          <div className="flex items-center gap-4">
            <div className="w-32 h-32">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={audienceData}
                    cx="50%"
                    cy="50%"
                    innerRadius={30}
                    outerRadius={50}
                    dataKey="value"
                  >
                    {audienceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex-1 space-y-2">
              {audienceData.map((item) => (
                <div key={item.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-sm text-[#64748B]">{item.name}</span>
                  </div>
                  <span className="text-sm font-semibold text-[#0F172A]">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Growth chart */}
        <Card className="p-4">
          <h4 className="text-base font-semibold text-[#0F172A] mb-4">Рост подписчиков</h4>
          <ResponsiveContainer width="100%" height={120}>
            <AreaChart data={followerGrowthData}>
              <defs>
                <linearGradient id="colorGrowth" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0EA5E9" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#0EA5E9" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="value"
                stroke="#0EA5E9"
                strokeWidth={2}
                fill="url(#colorGrowth)"
              />
            </AreaChart>
          </ResponsiveContainer>
          <div className="flex justify-between mt-2">
            {followerGrowthData.map((item) => (
              <span key={item.month} className="text-xs text-[#64748B]">
                {item.month}
              </span>
            ))}
          </div>
        </Card>

        {/* Geography */}
        <Card className="p-4">
          <h4 className="text-base font-semibold text-[#0F172A] mb-4">География</h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-[#0EA5E9]" />
                <span className="text-sm text-[#0F172A]">Ташкент</span>
              </div>
              <div className="flex-1 mx-4 h-2 bg-[#E2E8F0] rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#0EA5E9] to-[#10B981] w-[50%]" />
              </div>
              <span className="text-sm font-semibold text-[#0F172A]">50%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-[#0EA5E9]" />
                <span className="text-sm text-[#0F172A]">Самарканд</span>
              </div>
              <div className="flex-1 mx-4 h-2 bg-[#E2E8F0] rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#0EA5E9] to-[#10B981] w-[20%]" />
              </div>
              <span className="text-sm font-semibold text-[#0F172A]">20%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-[#0EA5E9]" />
                <span className="text-sm text-[#0F172A]">Другие</span>
              </div>
              <div className="flex-1 mx-4 h-2 bg-[#E2E8F0] rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#0EA5E9] to-[#10B981] w-[30%]" />
              </div>
              <span className="text-sm font-semibold text-[#0F172A]">30%</span>
            </div>
          </div>
        </Card>

        {/* Top hashtags */}
        <Card className="p-4">
          <h4 className="text-base font-semibold text-[#0F172A] mb-4">Топ хештеги</h4>
          <div className="flex flex-wrap gap-2">
            {['#технологии', '#обзоры', '#гаджеты', '#смартфоны', '#ноутбуки'].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-[#EFF6FF] text-[#0EA5E9] rounded-lg text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </Card>

        {/* Portfolio */}
        <Card className="p-4">
          <h4 className="text-base font-semibold text-[#0F172A] mb-4">Портфолио</h4>
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="aspect-square bg-gradient-to-br from-[#EFF6FF] to-[#DBEAFE] rounded-lg flex items-center justify-center border border-[#E2E8F0]"
              >
                <span className="text-3xl">📱</span>
              </div>
            ))}
          </div>
        </Card>

        {/* CTA */}
        <Button size="lg" className="w-full mb-6" onClick={onCreateCampaign}>
          Создать кампанию
        </Button>
      </div>
    </div>
  );
};