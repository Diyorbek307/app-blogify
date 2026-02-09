import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Button } from '@/app/components/button';
import logoImage from 'figma:asset/fe8fb61b5c7d589bcf73e2db18f59c13bbe3cbfe.png';

interface RegisterScreenProps {
  onRegister: () => void;
  onGoToLogin: () => void;
}

export const RegisterScreen: React.FC<RegisterScreenProps> = ({ onRegister, onGoToLogin }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleRegister = () => {
    // Простая валидация
    if (name && email && password && password === confirmPassword) {
      onRegister();
    } else if (password !== confirmPassword) {
      alert('Пароли не совпадают!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#EFF6FF] to-[#F0F9FF] flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-[#0EA5E9]/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-[#0EA5E9]/5 rounded-full blur-[100px]" />
      
      <div className="w-full max-w-[400px] relative z-10">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <img src={logoImage} alt="Blogify" className="w-24 h-24 mb-4" />
          <h1 className="text-4xl font-bold text-center text-[#0F172A] mb-2">Blogify</h1>
          <p className="text-base text-[#64748B] text-center">
            Создайте аккаунт за минуту
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[#E2E8F0] mb-6">
          <h2 className="text-2xl font-semibold text-[#0F172A] mb-6">Регистрация</h2>

          {/* Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-[#0F172A] mb-2">
              Имя
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Иван Иванов"
              className="w-full h-12 px-4 bg-white border-2 border-[#E2E8F0] rounded-xl text-[#0F172A] placeholder-[#94A3B8] focus:border-[#0EA5E9] focus:outline-none"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-[#0F172A] mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@mail.com"
              className="w-full h-12 px-4 bg-white border-2 border-[#E2E8F0] rounded-xl text-[#0F172A] placeholder-[#94A3B8] focus:border-[#0EA5E9] focus:outline-none"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-[#0F172A] mb-2">
              Пароль
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full h-12 px-4 pr-12 bg-white border-2 border-[#E2E8F0] rounded-xl text-[#0F172A] placeholder-[#94A3B8] focus:border-[#0EA5E9] focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#64748B]"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-[#0F172A] mb-2">
              Подтвердите пароль
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full h-12 px-4 pr-12 bg-white border-2 border-[#E2E8F0] rounded-xl text-[#0F172A] placeholder-[#94A3B8] focus:border-[#0EA5E9] focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#64748B]"
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <Button
            size="lg"
            className="w-full"
            onClick={handleRegister}
          >
            Зарегистрироваться
          </Button>
        </div>

        <div className="text-center">
          <p className="text-[#64748B] mb-2">
            Уже есть аккаунт?{' '}
            <button
              onClick={onGoToLogin}
              className="text-[#0EA5E9] hover:text-[#0284C7] font-semibold"
            >
              Войти
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};
