import React, { useState } from 'react';
import { X } from 'lucide-react';
import * as Slider from '@radix-ui/react-slider';
import * as Checkbox from '@radix-ui/react-checkbox';
import { Button } from '@/app/components/button';
import { Card } from '@/app/components/card';

interface FiltersProps {
  onClose: () => void;
}

export const FiltersScreen: React.FC<FiltersProps> = ({ onClose }) => {
  const [reachRange, setReachRange] = useState([10, 500]);
  const [selectedER, setSelectedER] = useState<string[]>([]);
  const [rating, setRating] = useState(4);
  const [contentTypes, setContentTypes] = useState<string[]>([]);
  const [adTypes, setAdTypes] = useState<string[]>([]);

  const regions = ['Москва', 'Санкт-Петербург', 'Екатеринбург', 'Казань', 'Новосибирск'];
  const erOptions = ['3%+', '5%+', '7%+'];
  const contentOptions = ['Фото', 'Видео', 'Сторис', 'Reels'];
  const adOptions = ['Обзор', 'Интеграция', 'Упоминание', 'Конкурс'];

  const toggleSelection = (value: string, current: string[], setter: (v: string[]) => void) => {
    if (current.includes(value)) {
      setter(current.filter(v => v !== value));
    } else {
      setter([...current, value]);
    }
  };

  return (
    <div className="fixed inset-0 bg-[#F8F9FA] z-50 overflow-y-auto">
      <div className="min-h-screen p-6 pb-24">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-[#0F172A]">Фильтры</h2>
          <button
            onClick={onClose}
            className="w-10 h-10 bg-white border border-[#E2E8F0] rounded-full flex items-center justify-center shadow-sm"
          >
            <X size={20} className="text-[#64748B]" />
          </button>
        </div>

        {/* Filters */}
        <div className="space-y-4">
          {/* Region */}
          <Card className="p-4">
            <h3 className="text-lg font-semibold text-[#0F172A] mb-4">Регион</h3>
            <div className="grid grid-cols-2 gap-2">
              {regions.map((region) => (
                <button
                  key={region}
                  className="px-4 py-2 bg-[#F8F9FA] hover:bg-[#EFF6FF] text-[#64748B] hover:text-[#0EA5E9] rounded-lg text-sm transition-all border border-[#E2E8F0]"
                >
                  {region}
                </button>
              ))}
            </div>
          </Card>

          {/* Reach */}
          <Card className="p-4">
            <h3 className="text-lg font-semibold text-[#0F172A] mb-2">Охват подписчиков</h3>
            <div className="flex justify-between text-sm text-[#64748B] mb-4">
              <span>{reachRange[0]}K</span>
              <span>{reachRange[1]}K</span>
            </div>
            <Slider.Root
              className="relative flex items-center select-none touch-none w-full h-5"
              value={reachRange}
              onValueChange={setReachRange}
              max={1000}
              min={10}
              step={10}
            >
              <Slider.Track className="bg-[#E2E8F0] relative grow rounded-full h-2">
                <Slider.Range className="absolute bg-gradient-to-r from-[#0EA5E9] to-[#10B981] rounded-full h-full" />
              </Slider.Track>
              <Slider.Thumb className="block w-5 h-5 bg-white border-2 border-[#0EA5E9] rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]" />
              <Slider.Thumb className="block w-5 h-5 bg-white border-2 border-[#0EA5E9] rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]" />
            </Slider.Root>
          </Card>

          {/* Engagement Rate */}
          <Card className="p-4">
            <h3 className="text-lg font-semibold text-[#0F172A] mb-4">Engagement Rate</h3>
            <div className="flex gap-2">
              {erOptions.map((er) => (
                <button
                  key={er}
                  onClick={() => toggleSelection(er, selectedER, setSelectedER)}
                  className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedER.includes(er)
                      ? 'bg-[#0EA5E9] text-white shadow-md'
                      : 'bg-[#F8F9FA] text-[#64748B] hover:bg-[#EFF6FF] border border-[#E2E8F0]'
                  }`}
                >
                  {er}
                </button>
              ))}
            </div>
          </Card>

          {/* Rating */}
          <Card className="p-4">
            <h3 className="text-lg font-semibold text-[#0F172A] mb-4">Минимальный рейтинг</h3>
            <div className="flex gap-2">
              {[3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setRating(star)}
                  className={`flex-1 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-1 transition-all ${
                    rating === star
                      ? 'bg-[#F59E0B] text-white shadow-md'
                      : 'bg-[#F8F9FA] text-[#64748B] border border-[#E2E8F0]'
                  }`}
                >
                  <span>{star}</span>
                  <span>⭐</span>
                </button>
              ))}
            </div>
          </Card>

          {/* Content Type */}
          <Card className="p-4">
            <h3 className="text-lg font-semibold text-[#0F172A] mb-4">Тип контента</h3>
            <div className="grid grid-cols-2 gap-3">
              {contentOptions.map((type) => (
                <label
                  key={type}
                  className="flex items-center gap-3 cursor-pointer p-3 bg-[#F8F9FA] rounded-lg hover:bg-[#EFF6FF] transition-all border border-[#E2E8F0]"
                >
                  <Checkbox.Root
                    checked={contentTypes.includes(type)}
                    onCheckedChange={() => toggleSelection(type, contentTypes, setContentTypes)}
                    className="w-5 h-5 bg-white rounded border-2 border-[#CBD5E1] flex items-center justify-center data-[state=checked]:bg-[#0EA5E9] data-[state=checked]:border-[#0EA5E9]"
                  >
                    <Checkbox.Indicator>
                      <span className="text-white text-sm">✓</span>
                    </Checkbox.Indicator>
                  </Checkbox.Root>
                  <span className="text-[#0F172A] text-sm">{type}</span>
                </label>
              ))}
            </div>
          </Card>

          {/* Ad Type */}
          <Card className="p-4">
            <h3 className="text-lg font-semibold text-[#0F172A] mb-4">Тип рекламы</h3>
            <div className="grid grid-cols-2 gap-3">
              {adOptions.map((type) => (
                <label
                  key={type}
                  className="flex items-center gap-3 cursor-pointer p-3 bg-[#F8F9FA] rounded-lg hover:bg-[#EFF6FF] transition-all border border-[#E2E8F0]"
                >
                  <Checkbox.Root
                    checked={adTypes.includes(type)}
                    onCheckedChange={() => toggleSelection(type, adTypes, setAdTypes)}
                    className="w-5 h-5 bg-white rounded border-2 border-[#CBD5E1] flex items-center justify-center data-[state=checked]:bg-[#0EA5E9] data-[state=checked]:border-[#0EA5E9]"
                  >
                    <Checkbox.Indicator>
                      <span className="text-white text-sm">✓</span>
                    </Checkbox.Indicator>
                  </Checkbox.Root>
                  <span className="text-[#0F172A] text-sm">{type}</span>
                </label>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* Action buttons */}
      <div className="fixed bottom-0 left-0 right-0 bg-white p-6 space-y-3 border-t border-[#E2E8F0] shadow-[0px_-4px_12px_rgba(0,0,0,0.05)]">
        <Button size="lg" className="w-full" onClick={onClose}>
          Применить фильтры
        </Button>
        <Button variant="ghost" size="lg" className="w-full">
          Сбросить все
        </Button>
      </div>
    </div>
  );
};
