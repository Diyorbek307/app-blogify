import React from 'react';
import { TrendingUp, Target, DollarSign, Users } from 'lucide-react';
import { Card } from '@/app/components/card';
import { Button } from '@/app/components/button';
import logoImage from 'figma:asset/fe8fb61b5c7d589bcf73e2db18f59c13bbe3cbfe.png';

interface DashboardScreenProps {
  onNavigate: (screen: string) => void;
}

const campaigns = [
  {
    id: '1',
    name: 'Техно обзор гаджетов',
    status: 'active',
    influencers: 5,
    budget: '15 000 000 сум',
    reach: '1.2M',
    progress: 65,
    er: '6.2%',
  },
  {
    id: '2',
    name: 'Узбекская кухня',
    status: 'pending',
    influencers: 3,
    budget: '8 500 000 сум',
    reach: '850K',
    progress: 30,
    er: '5.8%',
  },
  {
    id: '3',
    name: 'Летняя коллекция 2026',
    status: 'completed',
    influencers: 8,
    budget: '25 000 000 сум',
    reach: '2.5M',
    progress: 100,
    er: '7.1%',
  },
];

export const DashboardScreen: React.FC<DashboardScreenProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#F8F9FA] pt-6 pb-24">
      <div className="px-6 mb-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-[#0EA5E9] to-[#0284C7] rounded-2xl flex items-center justify-center text-3xl shadow-lg">
            <img src={logoImage} alt="Tech Brand Inc." className="w-10 h-10" />
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-[#0F172A] mb-1">Tech Brand Inc.</h1>
            <p className="text-sm text-[#64748B]">Технологическая компания</p>
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <Card className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <Target size={20} className="text-[#0EA5E9]" />
              <span className="text-xs text-[#64748B]">Активных кампаний</span>
            </div>
            <div className="text-3xl font-bold text-[#0F172A]">3</div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <Users size={20} className="text-[#10B981]" />
              <span className="text-xs text-[#64748B]">Общий охват</span>
            </div>
            <div className="text-3xl font-bold text-[#0F172A]">1.2M</div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp size={20} className="text-[#F59E0B]" />
              <span className="text-xs text-[#64748B]">Средний ER</span>
            </div>
            <div className="text-3xl font-bold text-[#0F172A]">4.7%</div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign size={20} className="text-[#0EA5E9]" />
              <span className="text-xs text-[#64748B]">Бюджет</span>
            </div>
            <div className="text-3xl font-bold text-[#0F172A]">850K</div>
          </Card>
        </div>

        {/* Current campaigns */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-[#0F172A]">Текущие кампании</h2>
          <Button size="sm" variant="ghost">
            Все
          </Button>
        </div>

        <div className="space-y-3 mb-6">
          {campaigns.map((campaign) => (
            <Card key={campaign.id} className="p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-[#0F172A] mb-1">{campaign.name}</h3>
                  <p className="text-sm text-[#64748B]">{campaign.influencers} инфлюенсеров</p>
                </div>
                <span
                  className={`px-3 py-1 rounded-lg text-xs font-medium ${
                    campaign.status === 'active'
                      ? 'bg-[#ECFDF5] text-[#10B981]'
                      : 'bg-[#FEF3C7] text-[#F59E0B]'
                  }`}
                >
                  {campaign.status === 'active' ? 'Активна' : 'Завершается'}
                </span>
              </div>

              {/* Progress */}
              <div className="mb-3">
                <div className="flex justify-between text-xs text-[#64748B] mb-1">
                  <span>Прогресс</span>
                  <span>{campaign.progress}%</span>
                </div>
                <div className="h-2 bg-[#E2E8F0] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#0EA5E9] to-[#10B981] transition-all duration-300"
                    style={{ width: `${campaign.progress}%` }}
                  />
                </div>
              </div>

              {/* Stats */}
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <Users size={14} className="text-[#64748B]" />
                  <span className="text-sm text-[#64748B]">{campaign.reach}</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp size={14} className="text-[#64748B]" />
                  <span className="text-sm text-[#64748B]">ER {campaign.er}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Quick actions */}
        <div className="grid grid-cols-2 gap-3">
          <Button
            variant="primary"
            className="h-auto py-4 flex-col"
            onClick={() => onNavigate('create-campaign')}
          >
            <span className="text-2xl mb-2">➕</span>
            <span>Новая кампания</span>
          </Button>
          <Button variant="secondary" className="h-auto py-4 flex-col">
            <span className="text-2xl mb-2">📊</span>
            <span>Аналитика</span>
          </Button>
        </div>
      </div>
    </div>
  );
};