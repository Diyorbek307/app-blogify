import React from 'react';
import { TrendingUp, DollarSign, Users, Eye, CheckCircle, Clock, XCircle } from 'lucide-react';
import { Card } from '@/app/components/card';
import { Button } from '@/app/components/button';
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import logoImage from 'figma:asset/fe8fb61b5c7d589bcf73e2db18f59c13bbe3cbfe.png';

interface BloggerDashboardProps {
  onNavigate: (screen: string) => void;
}

const earningsData = [
  { month: 'Янв', value: 6300000 },
  { month: 'Фев', value: 7280000 },
  { month: 'Мар', value: 6720000 },
  { month: 'Апр', value: 8540000 },
  { month: 'Май', value: 8120000 },
  { month: 'Июн', value: 10500000 },
];

const campaigns = [
  {
    id: '1',
    brand: 'Tech Brand Inc.',
    brandAvatar: '🏢',
    title: 'Обзор нового смартфона',
    status: 'active',
    price: '3 500 000 сум',
    deadline: '3 дня',
    progress: 60,
  },
  {
    id: '2',
    brand: 'Fashion Co.',
    brandAvatar: '👗',
    title: 'Летняя коллекция 2026',
    status: 'pending',
    price: '4 900 000 сум',
    deadline: '5 дней',
    progress: 0,
  },
  {
    id: '3',
    brand: 'Fitness Pro',
    brandAvatar: '💪',
    title: 'Спортивное питание',
    status: 'completed',
    price: '2 800 000 сум',
    deadline: 'Завершено',
    progress: 100,
  },
];

export const BloggerDashboardScreen: React.FC<BloggerDashboardProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#F8F9FA] pt-6 pb-24">
      <div className="px-6 mb-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-2xl flex items-center justify-center text-3xl shadow-lg">
            👩‍💻
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-[#0F172A] mb-1">Нодира Рахимова</h1>
            <p className="text-sm text-[#64748B]">@nodira_tech</p>
          </div>
          <img src={logoImage} alt="Blogify" className="w-10 h-10" />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <Card className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign size={20} className="text-[#10B981]" />
              <span className="text-xs text-[#64748B]">Заработано</span>
            </div>
            <div className="text-2xl font-bold text-[#0F172A] mb-1">10,5 млн сум</div>
            <div className="text-xs text-[#10B981]">+12% за месяц</div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <Users size={20} className="text-[#0EA5E9]" />
              <span className="text-xs text-[#64748B]">Подписчики</span>
            </div>
            <div className="text-2xl font-bold text-[#0F172A] mb-1">320К</div>
            <div className="text-xs text-[#10B981]">+5.2% за месяц</div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp size={20} className="text-[#F59E0B]" />
              <span className="text-xs text-[#64748B]">ER</span>
            </div>
            <div className="text-2xl font-bold text-[#0F172A] mb-1">6.8%</div>
            <div className="text-xs text-[#10B981]">+0.3% за месяц</div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <Eye size={20} className="text-[#EF4444]" />
              <span className="text-xs text-[#64748B]">Просмотры</span>
            </div>
            <div className="text-2xl font-bold text-[#0F172A] mb-1">1.8M</div>
            <div className="text-xs text-[#10B981]">+8% за месяц</div>
          </Card>
        </div>

        {/* Earnings Chart */}
        <Card className="p-4 mb-6">
          <h3 className="text-base font-semibold text-[#0F172A] mb-4">Динамика заработка</h3>
          <ResponsiveContainer width="100%" height={100}>
            <LineChart data={earningsData}>
              <Line
                type="monotone"
                dataKey="value"
                stroke="#10B981"
                strokeWidth={3}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
          <div className="flex justify-between mt-2">
            {earningsData.map((item) => (
              <span key={item.month} className="text-xs text-[#64748B]">
                {item.month}
              </span>
            ))}
          </div>
        </Card>

        {/* Active campaigns */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-[#0F172A]">Мои кампании</h2>
          <Button size="sm" variant="ghost">
            Все
          </Button>
        </div>

        <div className="space-y-3 mb-6">
          {campaigns.map((campaign) => (
            <Card key={campaign.id} className="p-4">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#EFF6FF] to-[#DBEAFE] rounded-xl flex items-center justify-center text-2xl border border-[#E2E8F0] flex-shrink-0">
                  {campaign.brandAvatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-1">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-semibold text-[#0F172A] truncate">{campaign.title}</h3>
                      <p className="text-sm text-[#64748B]">{campaign.brand}</p>
                    </div>
                    <span
                      className={`ml-2 px-3 py-1 rounded-lg text-xs font-medium flex-shrink-0 ${
                        campaign.status === 'active'
                          ? 'bg-[#EFF6FF] text-[#0EA5E9]'
                          : campaign.status === 'completed'
                          ? 'bg-[#ECFDF5] text-[#10B981]'
                          : 'bg-[#FEF3C7] text-[#F59E0B]'
                      }`}
                    >
                      {campaign.status === 'active' && <><Clock size={12} className="inline mr-1" />В работе</>}
                      {campaign.status === 'completed' && <><CheckCircle size={12} className="inline mr-1" />Завершено</>}
                      {campaign.status === 'pending' && <><XCircle size={12} className="inline mr-1" />Ожидает</>}
                    </span>
                  </div>
                </div>
              </div>

              {campaign.status === 'active' && (
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
              )}

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <DollarSign size={14} className="text-[#10B981]" />
                    <span className="text-sm font-semibold text-[#10B981]">{campaign.price}</span>
                  </div>
                  <span className="text-sm text-[#64748B]">{campaign.deadline}</span>
                </div>
                {campaign.status === 'pending' && (
                  <Button size="sm" variant="primary">
                    Принять
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Quick actions */}
        <div className="grid grid-cols-2 gap-3">
          <Button variant="primary" className="h-auto py-4 flex-col">
            <span className="text-2xl mb-2">📊</span>
            <span>Статистика</span>
          </Button>
          <Button variant="secondary" className="h-auto py-4 flex-col">
            <span className="text-2xl mb-2">💼</span>
            <span>Портфолио</span>
          </Button>
        </div>
      </div>
    </div>
  );
};