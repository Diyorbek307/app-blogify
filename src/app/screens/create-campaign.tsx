import React, { useState } from 'react';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { Card } from '@/app/components/card';
import { Button } from '@/app/components/button';

interface CreateCampaignProps {
  onBack: () => void;
}

export const CreateCampaignScreen: React.FC<CreateCampaignProps> = ({ onBack }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    goal: '',
    kpi: '',
    budget: '',
    startDate: '',
    endDate: '',
    selectedInfluencers: [],
  });

  const steps = [
    { id: 1, title: 'Цели и KPI', description: 'Определите цели кампании' },
    { id: 2, title: 'Бюджет и сроки', description: 'Установите параметры' },
    { id: 3, title: 'Выбор блогеров', description: 'Из избранного' },
    { id: 4, title: 'Предпросмотр', description: 'Проверка и отправка' },
  ];

  const nextStep = () => {
    if (step < 4) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmitCampaign = () => {
    // Показываем уведомление об успехе и возвращаемся назад
    alert('✅ Кампания успешно создана!');
    onBack();
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] pt-6 pb-24">
      <div className="px-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={step === 1 ? onBack : prevStep}
            className="w-10 h-10 bg-white border border-[#E2E8F0] rounded-full flex items-center justify-center shadow-sm"
          >
            <ArrowLeft size={20} className="text-[#0F172A]" />
          </button>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-[#0F172A] mb-1">Новая кампания</h1>
            <p className="text-sm text-[#64748B]">Шаг {step} из 4</p>
          </div>
        </div>

        {/* Progress */}
        <div className="flex gap-2 mb-8">
          {steps.map((s) => (
            <div
              key={s.id}
              className={`flex-1 h-1 rounded-full transition-all ${
                s.id <= step ? 'bg-gradient-to-r from-[#0EA5E9] to-[#10B981]' : 'bg-[#E2E8F0]'
              }`}
            />
          ))}
        </div>

        {/* Step content */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-[#0F172A] mb-2">{steps[step - 1].title}</h2>
          <p className="text-[#64748B] mb-6">{steps[step - 1].description}</p>

          {step === 1 && (
            <div className="space-y-4">
              <Card className="p-4">
                <label className="block text-sm font-medium text-[#0F172A] mb-2">
                  Главная цель кампании
                </label>
                <div className="space-y-2">
                  {['Узнаваемость бренда', 'Продажи', 'Трафик на сайт', 'Лиды'].map((goal) => (
                    <button
                      key={goal}
                      onClick={() => setFormData({ ...formData, goal })}
                      className={`w-full p-3 rounded-lg text-left transition-all ${
                        formData.goal === goal
                          ? 'bg-[#EFF6FF] border-2 border-[#0EA5E9] text-[#0F172A]'
                          : 'bg-[#F8F9FA] border-2 border-[#E2E8F0] text-[#64748B] hover:border-[#CBD5E1]'
                      }`}
                    >
                      {goal}
                    </button>
                  ))}
                </div>
              </Card>

              <Card className="p-4">
                <label className="block text-sm font-medium text-[#0F172A] mb-2">
                  Ключевые показатели (KPI)
                </label>
                <textarea
                  value={formData.kpi}
                  onChange={(e) => setFormData({ ...formData, kpi: e.target.value })}
                  className="w-full h-24 px-4 py-3 bg-[#F8F9FA] border-2 border-[#E2E8F0] rounded-lg text-[#0F172A] placeholder-[#94A3B8] focus:border-[#0EA5E9] focus:outline-none resize-none"
                  placeholder="Например: охват 500K, ER > 5%, 1000 переходов"
                />
              </Card>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <Card className="p-4">
                <label className="block text-sm font-medium text-[#0F172A] mb-2">
                  Бюджет (₽)
                </label>
                <input
                  type="text"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full h-12 px-4 bg-[#F8F9FA] border-2 border-[#E2E8F0] rounded-lg text-[#0F172A] placeholder-[#94A3B8] focus:border-[#0EA5E9] focus:outline-none"
                  placeholder="Введите бюджет"
                />
              </Card>

              <Card className="p-4">
                <label className="block text-sm font-medium text-[#0F172A] mb-2">
                  Дата начала
                </label>
                <input
                  type="date"
                  value={formData.startDate}
                  onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                  className="w-full h-12 px-4 bg-[#F8F9FA] border-2 border-[#E2E8F0] rounded-lg text-[#0F172A] focus:border-[#0EA5E9] focus:outline-none"
                />
              </Card>

              <Card className="p-4">
                <label className="block text-sm font-medium text-[#0F172A] mb-2">
                  Дата окончания
                </label>
                <input
                  type="date"
                  value={formData.endDate}
                  onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                  className="w-full h-12 px-4 bg-[#F8F9FA] border-2 border-[#E2E8F0] rounded-lg text-[#0F172A] focus:border-[#0EA5E9] focus:outline-none"
                />
              </Card>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-3">
              {['@tech_reviewer', '@fashion_maria', '@moscow_foodie'].map((influencer) => (
                <Card key={influencer} className="p-4 flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#EFF6FF] to-[#DBEAFE] rounded-full flex items-center justify-center text-2xl border border-[#E2E8F0]">
                    👤
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-[#0F172A]">{influencer}</h3>
                    <p className="text-sm text-[#64748B]">250K подписчиков • ER 5.2%</p>
                  </div>
                  <input
                    type="checkbox"
                    className="w-5 h-5 rounded border-2 border-[#CBD5E1] bg-white checked:bg-[#0EA5E9] accent-[#0EA5E9]"
                  />
                </Card>
              ))}
            </div>
          )}

          {step === 4 && (
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-[#0F172A] mb-4">Сводка кампании</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-[#64748B]">Цель:</span>
                  <span className="text-[#0F172A] font-medium">{formData.goal || 'Не указана'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#64748B]">Бюджет:</span>
                  <span className="text-[#0F172A] font-medium">{formData.budget ? `${formData.budget} ₽` : 'Не указан'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#64748B]">Период:</span>
                  <span className="text-[#0F172A] font-medium">
                    {formData.startDate && formData.endDate
                      ? `${formData.startDate} — ${formData.endDate}`
                      : 'Не указан'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#64748B]">Блогеров:</span>
                  <span className="text-[#0F172A] font-medium">3</span>
                </div>
              </div>
            </Card>
          )}
        </div>

        {/* Actions */}
        <div className="space-y-3">
          {step < 4 ? (
            <Button size="lg" className="w-full" onClick={nextStep}>
              Продолжить
              <ChevronRight className="ml-2" size={20} />
            </Button>
          ) : (
            <Button size="lg" className="w-full" onClick={handleSubmitCampaign}>
              Отправить кампанию
            </Button>
          )}
          {step > 1 && (
            <Button variant="ghost" size="lg" className="w-full" onClick={prevStep}>
              Назад
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};