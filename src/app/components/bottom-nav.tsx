import React from 'react';
import { Home, Grid3x3, Heart, MessageCircle, User } from 'lucide-react';

interface BottomNavProps {
  active: string;
  onNavigate: (screen: string) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ active, onNavigate }) => {
  const navItems = [
    { id: 'home', icon: Home, label: 'Главная' },
    { id: 'catalog', icon: Grid3x3, label: 'Каталог' },
    { id: 'favorites', icon: Heart, label: 'Избранное' },
    { id: 'messages', icon: MessageCircle, label: 'Чат' },
    { id: 'profile', icon: User, label: 'Профиль' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#E2E8F0] px-4 py-2 safe-bottom shadow-[0px_-4px_12px_rgba(0,0,0,0.05)] z-50">
      <div className="flex justify-around items-center max-w-[600px] mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all ${
                isActive ? 'text-[#0EA5E9]' : 'text-[#64748B]'
              }`}
            >
              <Icon size={24} className={isActive ? 'stroke-[2.5]' : 'stroke-2'} />
              <span className="text-[10px] font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
