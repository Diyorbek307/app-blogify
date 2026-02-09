import React from 'react';
import { User, Building2 } from 'lucide-react';
import { Card } from '@/app/components/card';
import logoImage from 'figma:asset/fe8fb61b5c7d589bcf73e2db18f59c13bbe3cbfe.png';

interface RoleSelectionProps {
  onSelectRole: (role: 'brand' | 'blogger') => void;
}

export const RoleSelectionScreen: React.FC<RoleSelectionProps> = ({ onSelectRole }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#EFF6FF] to-[#F0F9FF] flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-[#0EA5E9]/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-[#0EA5E9]/5 rounded-full blur-[100px]" />
      
      <div className="w-full max-w-[400px] relative z-10">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <img src={logoImage} alt="Blogify" className="w-32 h-32 mb-4" />
          <h1 className="text-4xl font-bold text-center text-[#0F172A]">Blogify</h1>
        </div>

        <h2 className="text-2xl font-semibold text-center mb-3 text-[#0F172A]">Выберите роль</h2>
        <p className="text-base text-[#64748B] text-center mb-8">
          Для продолжения работы с платформой
        </p>

        <div className="space-y-4 mb-8">
          <Card 
            className="p-6 cursor-pointer border-2 border-transparent hover:border-[#0EA5E9] hover:shadow-lg transition-all duration-300 active:scale-[0.98]"
            onClick={() => onSelectRole('brand')}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0EA5E9] to-[#0284C7] flex items-center justify-center shadow-lg">
                <Building2 size={32} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-[#0F172A] mb-1">Я Бренд</h3>
                <p className="text-sm text-[#64748B]">Ищу блогеров для рекламы</p>
              </div>
            </div>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-[#EFF6FF] text-[#0EA5E9] rounded-lg text-xs font-medium">Поиск</span>
              <span className="px-3 py-1 bg-[#EFF6FF] text-[#0EA5E9] rounded-lg text-xs font-medium">Аналитика</span>
              <span className="px-3 py-1 bg-[#EFF6FF] text-[#0EA5E9] rounded-lg text-xs font-medium">Кампании</span>
            </div>
          </Card>

          <Card 
            className="p-6 cursor-pointer border-2 border-transparent hover:border-[#10B981] hover:shadow-lg transition-all duration-300 active:scale-[0.98]"
            onClick={() => onSelectRole('blogger')}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#10B981] to-[#059669] flex items-center justify-center shadow-lg">
                <User size={32} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-[#0F172A] mb-1">Я Блогер</h3>
                <p className="text-sm text-[#64748B]">Ищу рекламные заказы</p>
              </div>
            </div>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-[#ECFDF5] text-[#10B981] rounded-lg text-xs font-medium">Заказы</span>
              <span className="px-3 py-1 bg-[#ECFDF5] text-[#10B981] rounded-lg text-xs font-medium">Статистика</span>
              <span className="px-3 py-1 bg-[#ECFDF5] text-[#10B981] rounded-lg text-xs font-medium">Портфолио</span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
