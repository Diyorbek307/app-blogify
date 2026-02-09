import React, { useState } from 'react';
import { LoginScreen } from '@/app/screens/login';
import { RegisterScreen } from '@/app/screens/register';
import { OnboardingScreen } from '@/app/screens/onboarding';
import { RoleSelectionScreen } from '@/app/screens/role-selection';
import { SwipeScreen } from '@/app/screens/swipe';
import { FiltersScreen } from '@/app/screens/filters';
import { ProfileScreen } from '@/app/screens/profile';
import { DashboardScreen } from '@/app/screens/dashboard';
import { BloggerDashboardScreen } from '@/app/screens/blogger-dashboard';
import { CreateCampaignScreen } from '@/app/screens/create-campaign';
import { CatalogScreen } from '@/app/screens/catalog';
import { FavoritesScreen } from '@/app/screens/favorites';
import { MessagesScreen } from '@/app/screens/messages';
import { BottomNav } from '@/app/components/bottom-nav';

type AppScreen = 
  | 'login'
  | 'register'
  | 'onboarding' 
  | 'role-selection' 
  | 'home' 
  | 'profile' 
  | 'dashboard'
  | 'blogger-dashboard'
  | 'create-campaign'
  | 'catalog'
  | 'favorites'
  | 'messages'
  | 'filters';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>('login');
  const [userRole, setUserRole] = useState<'brand' | 'blogger' | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [activeNav, setActiveNav] = useState('home');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    // При входе - сразу в приложение
    setIsAuthenticated(true);
    setUserRole('brand'); // По умолчанию бренд
    setCurrentScreen('home');
    setActiveNav('home');
  };

  const handleRegister = () => {
    // При регистрации - онбординг и выбор роли
    setCurrentScreen('onboarding');
  };

  const handleOnboardingComplete = () => {
    setCurrentScreen('role-selection');
  };

  const handleRoleSelection = (role: 'brand' | 'blogger') => {
    setUserRole(role);
    setIsAuthenticated(true);
    setCurrentScreen('home');
    setActiveNav('home');
  };

  const handleNavigate = (screen: string) => {
    setActiveNav(screen);
    
    switch (screen) {
      case 'home':
        setCurrentScreen('home');
        break;
      case 'catalog':
        setCurrentScreen('catalog');
        break;
      case 'favorites':
        setCurrentScreen('favorites');
        break;
      case 'messages':
        setCurrentScreen('messages');
        break;
      case 'profile':
        if (userRole === 'blogger') {
          setCurrentScreen('blogger-dashboard');
        } else {
          setCurrentScreen('dashboard');
        }
        break;
      default:
        break;
    }
  };

  const handleNavigateToScreen = (screen: AppScreen) => {
    setCurrentScreen(screen);
  };

  const handleViewProfile = () => {
    setCurrentScreen('profile');
  };

  const handleBackToHome = () => {
    setCurrentScreen('home');
    setActiveNav('home');
  };

  const handleBackToDashboard = () => {
    if (userRole === 'blogger') {
      setCurrentScreen('blogger-dashboard');
    } else {
      setCurrentScreen('dashboard');
    }
    setActiveNav('profile');
  };

  const handleOpenFilters = () => {
    setShowFilters(true);
  };

  const handleCloseFilters = () => {
    setShowFilters(false);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'login':
        return (
          <LoginScreen 
            onLogin={handleLogin}
            onGoToRegister={() => setCurrentScreen('register')}
          />
        );
      
      case 'register':
        return (
          <RegisterScreen 
            onRegister={handleRegister}
            onGoToLogin={() => setCurrentScreen('login')}
          />
        );
      
      case 'onboarding':
        return <OnboardingScreen onComplete={handleOnboardingComplete} />;
      
      case 'role-selection':
        return <RoleSelectionScreen onSelectRole={handleRoleSelection} />;
      
      case 'home':
        return (
          <>
            <SwipeScreen 
              onOpenFilters={handleOpenFilters} 
              onViewProfile={handleViewProfile}
            />
            {showFilters && <FiltersScreen onClose={handleCloseFilters} />}
            <BottomNav active={activeNav} onNavigate={handleNavigate} />
          </>
        );
      
      case 'catalog':
        return (
          <>
            <CatalogScreen 
              onOpenFilters={handleOpenFilters}
              onViewProfile={handleViewProfile}
            />
            {showFilters && <FiltersScreen onClose={handleCloseFilters} />}
            <BottomNav active={activeNav} onNavigate={handleNavigate} />
          </>
        );
      
      case 'favorites':
        return (
          <>
            <FavoritesScreen 
              onViewProfile={handleViewProfile}
              onCreateCampaign={() => setCurrentScreen('create-campaign')}
            />
            <BottomNav active={activeNav} onNavigate={handleNavigate} />
          </>
        );
      
      case 'messages':
        return (
          <>
            <MessagesScreen />
            <BottomNav active={activeNav} onNavigate={handleNavigate} />
          </>
        );
      
      case 'profile':
        return (
          <>
            <ProfileScreen 
              onBack={handleBackToHome}
              onCreateCampaign={() => setCurrentScreen('create-campaign')}
            />
            <BottomNav active={activeNav} onNavigate={handleNavigate} />
          </>
        );
      
      case 'dashboard':
        return (
          <>
            <DashboardScreen onNavigate={handleNavigateToScreen} />
            <BottomNav active={activeNav} onNavigate={handleNavigate} />
          </>
        );
      
      case 'blogger-dashboard':
        return (
          <>
            <BloggerDashboardScreen onNavigate={handleNavigateToScreen} />
            <BottomNav active={activeNav} onNavigate={handleNavigate} />
          </>
        );
      
      case 'create-campaign':
        return <CreateCampaignScreen onBack={handleBackToDashboard} />;
      
      default:
        return (
          <LoginScreen 
            onLogin={handleLogin}
            onGoToRegister={() => setCurrentScreen('register')}
          />
        );
    }
  };

  return (
    <div className="min-h-screen max-w-[430px] mx-auto bg-[#F8F9FA] relative">
      {renderScreen()}
    </div>
  );
};

export default App;