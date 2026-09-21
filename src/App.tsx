import React, { useState, useEffect } from 'react';
import { ALL_CHAPTERS, ALL_PENGUINS, ALL_FORMULAS, ALL_QUESTIONS } from './data/allChapters';
import { BUSHONG_GLOSSARY } from './data/glossaryData';
import { BOOK_PARTS, BOOK_METADATA } from './data/bookMeta';
import { ChapterReader } from './components/ChapterReader';
import { SearchInterface } from './components/SearchInterface';
import { Calculators } from './components/Calculators';
import { StudyDeck } from './components/StudyDeck';
import { BookOverview } from './components/BookOverview';
import { GlossaryView } from './components/GlossaryView';
import { ReferenceGuide } from './components/ReferenceGuide';
import { HighYieldVault } from './components/HighYieldVault';
import { MockExamSimulator } from './components/MockExamSimulator';
import { ExamTrapsCenter } from './components/ExamTrapsCenter';
import { MasteryDashboard } from './components/MasteryDashboard';
import { BackupSyncModal } from './components/BackupSyncModal';
import { AuthModal } from './components/AuthModal';
import { AuthGate } from './components/AuthGate';
import { ProtectedGate } from './components/ProtectedGate';
import { authClient, signOut } from './lib/auth-client';
import { loadHighlightsFromServer, clearUserHighlights } from './data/highYieldVaultData';
import { 
  BookOpen, 
  Search, 
  Calculator, 
  Sparkles, 
  Menu, 
  X, 
  Download, 
  Wifi, 
  WifiOff, 
  Bookmark, 
  ChevronDown, 
  Layers, 
  Award, 
  BookA, 
  Compass,
  Highlighter,
  AlertTriangle,
  TrendingUp,
  HardDrive,
  Lock,
  User as UserIcon,
  LogOut,
  Loader2
} from 'lucide-react';

type AppView = 'overview' | 'reader' | 'search' | 'study' | 'calculators' | 'glossary' | 'reference' | 'vault' | 'mock-exam' | 'traps' | 'mastery';

const VALID_VIEWS: AppView[] = [
  'overview', 'reader', 'search', 'study', 'calculators', 'glossary', 'reference', 'vault', 'mock-exam', 'traps', 'mastery'
];

function getViewFromLocation(): { view: AppView; authMode?: 'signin' | 'signup'; chapter?: number } {
  if (typeof window === 'undefined') return { view: 'overview' };
  const pathname = window.location.pathname.toLowerCase().replace(/^\/+/, '').replace(/\/+$/, '');
  const hash = window.location.hash.toLowerCase().replace(/^#\/?/, '');
  const target = pathname || hash;

  if (target === 'register' || target === 'signup') {
    return { view: 'overview', authMode: 'signup' };
  }
  if (target === 'login' || target === 'signin') {
    return { view: 'overview', authMode: 'signin' };
  }

  const chMatch = target.match(/(?:chapter|ch)[/-]?(\d+)/);
  const chapter = chMatch ? parseInt(chMatch[1], 10) : undefined;

  if (VALID_VIEWS.includes(target as AppView)) {
    return { view: target as AppView, chapter };
  }
  return { view: chapter ? 'reader' : 'overview', chapter };
}

export default function App() {
  const { data: session, isPending, refetch } = authClient.useSession();
  const user = session?.user;
  const isAuthenticated = !!user;

  const initialNav = getViewFromLocation();
  const [activeView, setActiveView] = useState<AppView>(initialNav.view);
  const [currentChapterNum, setCurrentChapterNum] = useState<number>(initialNav.chapter || 1);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>(initialNav.authMode || 'signin');

  const [showAuthModal, setShowAuthModal] = useState<boolean>(false);
  const [authFeatureTitle, setAuthFeatureTitle] = useState<string | undefined>(undefined);
  const [userDropdownOpen, setUserDropdownOpen] = useState<boolean>(false);

  const openAuth = (featureTitle?: string) => {
    setAuthFeatureTitle(featureTitle);
    setShowAuthModal(true);
  };

  // Cloud Highlights synchronization on auth state change
  useEffect(() => {
    if (isAuthenticated && user?.id) {
      loadHighlightsFromServer();
    }
  }, [isAuthenticated, user?.id]);

  // Sync URL history state when authenticated view changes
  useEffect(() => {
    if (!isPending && isAuthenticated && typeof window !== 'undefined') {
      const target = activeView === 'overview' ? '/' : `/${activeView}`;
      if (window.location.pathname !== target && window.location.pathname !== '/login' && window.location.pathname !== '/register') {
        window.history.pushState(null, '', target);
      }
    }
  }, [activeView, isPending, isAuthenticated]);

  // Handle browser popstate navigation (Back / Forward)
  useEffect(() => {
    const handlePopState = () => {
      const nav = getViewFromLocation();
      if (nav.authMode) setAuthMode(nav.authMode);
      setActiveView(nav.view);
      if (nav.chapter) setCurrentChapterNum(nav.chapter);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Enforce redirection to /login or /register when unauthenticated
  useEffect(() => {
    if (!isPending && !isAuthenticated && typeof window !== 'undefined') {
      const pathname = window.location.pathname.toLowerCase();
      if (pathname.includes('register') || pathname.includes('signup')) {
        setAuthMode('signup');
        if (pathname !== '/register') {
          window.history.replaceState(null, '', '/register');
        }
      } else {
        if (pathname !== '/login') {
          const search = pathname !== '/' && pathname !== '' ? `?redirect=${encodeURIComponent(pathname)}` : '';
          window.history.replaceState(null, '', `/login${search}`);
        }
      }
    }
  }, [isPending, isAuthenticated]);

  // Clean redirection from /login or /register to destination when authenticated
  useEffect(() => {
    if (!isPending && isAuthenticated && typeof window !== 'undefined') {
      const pathname = window.location.pathname.toLowerCase();
      if (pathname === '/login' || pathname === '/register' || pathname === '/signin' || pathname === '/signup') {
        const urlParams = new URLSearchParams(window.location.search);
        const redirect = urlParams.get('redirect');
        const cleanRedirect = redirect ? redirect.replace(/^\/+/, '').toLowerCase() : '';
        if (cleanRedirect && VALID_VIEWS.includes(cleanRedirect as AppView)) {
          const targetView = cleanRedirect as AppView;
          setActiveView(targetView);
          window.history.replaceState(null, '', `/${targetView}`);
        } else {
          window.history.replaceState(null, '', '/');
        }
      }
    }
  }, [isPending, isAuthenticated]);

  const [sidebarOpen, setSidebarOpen] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth >= 1024;
    }
    return false;
  });
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);
  const [installPrompt, setInstallPrompt] = useState<any>(null);
  const [installed, setInstalled] = useState<boolean>(false);
  const [glossaryQuery, setGlossaryQuery] = useState<string>('');
  const [drawerSearch, setDrawerSearch] = useState<string>('');
  const [showBackupModal, setShowBackupModal] = useState<boolean>(false);

  // Online / Offline listeners
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // PWA BeforeInstallPromptEvent
    const handleBeforeInstall = (e: Event) => {
      e.preventDefault();
      setInstallPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handleBeforeInstall);

    const handleAppInstalled = () => {
      setInstalled(true);
      setInstallPrompt(null);
    };
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  // Keyboard shortcut: '/' or 'Ctrl+K' to open search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.key === '/' || (e.ctrlKey && e.key === 'k')) && activeView !== 'search') {
        const activeElem = document.activeElement;
        if (activeElem?.tagName !== 'INPUT' && activeElem?.tagName !== 'TEXTAREA') {
          e.preventDefault();
          setActiveView('search');
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeView]);

  const handleInstallClick = async () => {
    if (!installPrompt) return;
    installPrompt.prompt();
    const { outcome } = await installPrompt.userChoice;
    if (outcome === 'accepted') {
      setInstalled(true);
      setInstallPrompt(null);
    }
  };

  const handleSelectChapter = (num: number) => {
    setCurrentChapterNum(num);
    setActiveView('reader');
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      setSidebarOpen(false);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSignOut = async () => {
    setUserDropdownOpen(false);
    clearUserHighlights();
    try {
      await signOut();
    } catch (err) {
      console.warn('Sign out error:', err);
    }
    await refetch?.();
    if (typeof window !== 'undefined') {
      window.history.replaceState(null, '', '/login');
    }
  };

  const currentChapter = ALL_CHAPTERS.find(ch => ch.number === currentChapterNum) || ALL_CHAPTERS[0];

  // Clean initial loading screen while session is being verified
  if (isPending) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 text-center select-none font-sans relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.08)_0%,transparent_70%)] pointer-events-none" />
        
        <div className="relative mb-6">
          <div className="w-20 h-20 rounded-3xl bg-cyan-500/20 animate-pulse blur-xl absolute inset-0 -m-2" />
          <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-tr from-cyan-600 via-cyan-500 to-indigo-600 flex items-center justify-center shadow-xl shadow-cyan-500/25 border border-cyan-400/40">
            <BookOpen className="w-10 h-10 text-white animate-pulse" />
          </div>
        </div>

        <div className="space-y-1.5 z-10 max-w-sm">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold border border-cyan-500/20 mb-1">
            <Sparkles className="w-3.5 h-3.5" /> 11th Edition Interactive Suite
          </div>
          <h1 className="text-2xl font-black text-white tracking-tight">
            Bushong Radiologic Science
          </h1>
          <p className="text-xs text-slate-400 font-medium">
            Physics, Biology, and Protection
          </p>
        </div>

        <div className="flex items-center gap-2.5 text-xs text-slate-300 mt-8 px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 shadow-lg backdrop-blur-sm z-10">
          <Loader2 className="w-4 h-4 text-cyan-400 animate-spin" />
          <span className="font-medium">Verifying credentials & session...</span>
        </div>
      </div>
    );
  }

  // Strictly enforce full-screen Login / Registration Gate for unauthenticated visitors
  if (!isAuthenticated) {
    return (
      <AuthGate
        initialMode={authMode}
        onSuccess={() => {
          refetch?.();
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Backup and Sync Modal */}
      {showBackupModal && (
        <BackupSyncModal onClose={() => setShowBackupModal(false)} />
      )}

      {/* Better Auth Modal */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        featureTitle={authFeatureTitle}
      />

      {/* Top Header Bar */}
      <header className="sticky top-0 z-40 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-2 xs:px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-1.5 sm:gap-4">
          {/* Brand & Drawer Toggle */}
          <div className="flex items-center gap-1.5 xs:gap-2.5 sm:gap-3 min-w-0">
            <button
              onClick={() => setSidebarOpen(prev => !prev)}
              className={`p-2 rounded-xl transition-colors flex-shrink-0 ${
                sidebarOpen 
                  ? 'text-cyan-400 bg-slate-800/80 hover:bg-slate-800' 
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
              title={sidebarOpen ? "Hide chapter menu" : "Show chapter menu"}
              aria-label={sidebarOpen ? "Hide chapter menu" : "Show chapter menu"}
            >
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            <div 
              onClick={() => {
                setActiveView('overview');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-1.5 xs:gap-2 cursor-pointer group min-w-0"
            >
              <div className="w-7 h-7 xs:w-8 xs:h-8 rounded-lg bg-cyan-500 flex items-center justify-center text-slate-950 font-bold shadow-md shadow-cyan-500/20 flex-shrink-0">
                <BookOpen className="w-4 h-4" />
              </div>
              <div className="min-w-0 truncate">
                <span className="font-bold text-xs xs:text-sm sm:text-base text-white tracking-tight group-hover:text-cyan-300 transition-colors truncate">
                  Radiologic Science
                </span>
                <span className="hidden xs:inline text-[9px] sm:text-[10px] ml-1 px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-mono font-semibold">
                  11th Ed.
                </span>
              </div>
            </div>
          </div>

          {/* Center Navigation Tabs (Desktop) */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs font-semibold">
            <button
              onClick={() => setActiveView('overview')}
              className={`px-2.5 py-1.5 rounded-lg transition-all ${
                activeView === 'overview'
                  ? 'bg-slate-800 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveView('reader')}
              className={`px-2.5 py-1.5 rounded-lg transition-all ${
                activeView === 'reader'
                  ? 'bg-slate-800 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Chapters
            </button>
            <button
              onClick={() => setActiveView('vault')}
              className={`px-2.5 py-1.5 rounded-lg transition-all flex items-center gap-1 ${
                activeView === 'vault'
                  ? 'bg-purple-600 text-white font-bold shadow-sm'
                  : 'text-purple-300 hover:text-white'
              }`}
              title="High-Yield Revision Vault & One-Liner MCQs"
            >
              <Highlighter className="w-3.5 h-3.5" /> Vault
            </button>
            <button
              onClick={() => setActiveView('mock-exam')}
              className={`px-2.5 py-1.5 rounded-lg transition-all flex items-center gap-1 ${
                activeView === 'mock-exam'
                  ? 'bg-rose-600 text-white font-bold shadow-sm'
                  : 'text-rose-300 hover:text-white'
              }`}
              title="Timed ARRT Board Mock Exam Simulator"
            >
              <Award className="w-3.5 h-3.5" /> ARRT Mock
            </button>
            <button
              onClick={() => setActiveView('traps')}
              className={`px-2.5 py-1.5 rounded-lg transition-all flex items-center gap-1 ${
                activeView === 'traps'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                  : 'text-amber-300 hover:text-white'
              }`}
              title="Exam Traps & Comparative Matrices"
            >
              <AlertTriangle className="w-3.5 h-3.5" /> Traps
            </button>
            <button
              onClick={() => setActiveView('study')}
              className={`px-2.5 py-1.5 rounded-lg transition-all flex items-center gap-1 ${
                activeView === 'study'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" /> Study Deck
            </button>
            <button
              onClick={() => setActiveView('mastery')}
              className={`px-2.5 py-1.5 rounded-lg transition-all flex items-center gap-1 ${
                activeView === 'mastery'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5" /> Mastery
            </button>
            <button
              onClick={() => setActiveView('calculators')}
              className={`px-2.5 py-1.5 rounded-lg transition-all flex items-center gap-1 ${
                activeView === 'calculators'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Calculator className="w-3.5 h-3.5" /> Simulators
            </button>
            <button
              onClick={() => {
                setGlossaryQuery('');
                setActiveView('glossary');
              }}
              className={`px-2.5 py-1.5 rounded-lg transition-all flex items-center gap-1 ${
                activeView === 'glossary'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <BookA className="w-3.5 h-3.5" /> Glossary
            </button>
            <button
              onClick={() => setActiveView('reference')}
              className={`px-2.5 py-1.5 rounded-lg transition-all flex items-center gap-1 ${
                activeView === 'reference'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Compass className="w-3.5 h-3.5" /> Ref
            </button>
          </nav>

          {/* Right Actions: Search, Backup, Install & Status */}
          <div className="flex items-center gap-1 xs:gap-1.5 sm:gap-2 flex-shrink-0">
            <button
              onClick={() => setActiveView('search')}
              className={`flex items-center gap-1.5 p-2 xs:px-2.5 xs:py-1.5 rounded-lg text-xs font-medium border transition-all ${
                activeView === 'search'
                  ? 'bg-cyan-500 text-slate-950 border-cyan-400 font-bold'
                  : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
              title="Search textbook content (/)"
              aria-label="Search"
            >
              <Search className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Search</span>
              <kbd className="hidden lg:inline text-[9px] px-1 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400 font-mono">
                /
              </kbd>
            </button>

            {/* Backup & Sync Button */}
            <button
              onClick={() => setShowBackupModal(true)}
              className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 hover:text-cyan-300 hover:border-slate-700 transition-colors flex-shrink-0"
              title="Backup & Restore Study Data (JSON Sync)"
              aria-label="Backup & Device Sync"
            >
              <HardDrive className="w-3.5 h-3.5 xs:w-4 xs:h-4" />
            </button>

            {/* Better Auth Account Button */}
            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setUserDropdownOpen(p => !p)}
                  className="flex items-center gap-1 p-1 xs:px-2 xs:py-1 rounded-lg bg-slate-950 hover:bg-slate-800 border border-slate-800 text-xs font-semibold text-slate-200 transition-colors flex-shrink-0"
                  title="Account Profile"
                  aria-label="Account Profile"
                >
                  <div className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 flex items-center justify-center text-[10px] font-bold">
                    {user?.name ? user.name.charAt(0).toUpperCase() : 'U'}
                  </div>
                  <span className="max-w-[65px] truncate hidden md:inline text-[11px] font-medium text-slate-300">
                    {user?.name?.split(' ')[0] || 'User'}
                  </span>
                  <ChevronDown className="w-3 h-3 text-slate-400 hidden xs:inline" />
                </button>

                {userDropdownOpen && (
                  <div className="absolute right-0 mt-1.5 w-48 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl p-2 text-xs z-50 space-y-1 animate-fadeIn">
                    <div className="px-2 py-1.5 border-b border-slate-800">
                      <p className="font-bold text-white truncate">{user?.name}</p>
                      <p className="text-[10px] text-slate-400 truncate">{user?.email}</p>
                    </div>
                    <button
                      onClick={handleSignOut}
                      className="w-full text-left px-2 py-1.5 rounded-lg text-rose-400 hover:bg-rose-950/30 hover:text-rose-300 flex items-center gap-2 transition-colors font-semibold"
                    >
                      <LogOut className="w-3.5 h-3.5" /> Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => openAuth()}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow transition-all flex-shrink-0"
              >
                <Lock className="w-3.5 h-3.5" />
                <span className="hidden xs:inline">Sign In</span>
              </button>
            )}

            {/* Install PWA Button */}
            {installPrompt && !installed && (
              <button
                onClick={handleInstallClick}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold shadow transition-all"
                title="Install offline PWA to your desktop/mobile"
              >
                <Download className="w-3.5 h-3.5" /> Install
              </button>
            )}

            {/* Online / Offline status badge */}
            <div 
              className={`flex items-center gap-1 text-[11px] p-1.5 xs:px-2 xs:py-1 rounded-full border flex-shrink-0 ${
                isOnline 
                  ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
                  : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
              }`}
              title={isOnline ? 'Online mode active' : 'Offline PWA active'}
            >
              {isOnline ? <Wifi className="w-3 h-3" /> : <WifiOff className="w-3 h-3" />}
              <span className="hidden xl:inline">{isOnline ? 'Online' : 'Offline'}</span>
            </div>
          </div>
        </div>

        {/* Mobile / Tablet Horizontal Navigation Strip with Touch Scroll */}
        <div className="lg:hidden relative border-t border-slate-800 bg-slate-950/90 backdrop-blur-md">
          <div className="flex items-center gap-1.5 overflow-x-auto px-3 py-2 text-xs font-medium no-scrollbar touch-scroll">
            <button
              onClick={() => setActiveView('overview')}
              className={`px-3 py-1.5 rounded-lg flex-shrink-0 transition-all ${
                activeView === 'overview' ? 'bg-slate-800 text-white font-bold shadow-sm' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveView('reader')}
              className={`px-3 py-1.5 rounded-lg flex-shrink-0 transition-all ${
                activeView === 'reader' ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/30' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Chapters
            </button>
            <button
              onClick={() => setActiveView('vault')}
              className={`px-3 py-1.5 rounded-lg flex-shrink-0 transition-all flex items-center gap-1 ${
                activeView === 'vault' ? 'bg-purple-600 text-white font-bold shadow-sm' : 'text-purple-400 hover:text-purple-300'
              }`}
            >
              <Highlighter className="w-3.5 h-3.5" /> Vault
            </button>
            <button
              onClick={() => setActiveView('mock-exam')}
              className={`px-3 py-1.5 rounded-lg flex-shrink-0 transition-all flex items-center gap-1 ${
                activeView === 'mock-exam' ? 'bg-rose-600 text-white font-bold shadow-sm' : 'text-rose-400 hover:text-rose-300'
              }`}
            >
              <Award className="w-3.5 h-3.5" /> ARRT Mock
            </button>
            <button
              onClick={() => setActiveView('traps')}
              className={`px-3 py-1.5 rounded-lg flex-shrink-0 transition-all flex items-center gap-1 ${
                activeView === 'traps' ? 'bg-amber-500 text-slate-950 font-bold shadow-sm' : 'text-amber-400 hover:text-amber-300'
              }`}
            >
              <AlertTriangle className="w-3.5 h-3.5" /> Traps
            </button>
            <button
              onClick={() => setActiveView('study')}
              className={`px-3 py-1.5 rounded-lg flex-shrink-0 transition-all flex items-center gap-1 ${
                activeView === 'study' ? 'bg-amber-500 text-slate-950 font-bold shadow-sm' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" /> Study Deck
            </button>
            <button
              onClick={() => setActiveView('mastery')}
              className={`px-3 py-1.5 rounded-lg flex-shrink-0 transition-all flex items-center gap-1 ${
                activeView === 'mastery' ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5" /> Mastery
            </button>
            <button
              onClick={() => setActiveView('calculators')}
              className={`px-3 py-1.5 rounded-lg flex-shrink-0 transition-all flex items-center gap-1 ${
                activeView === 'calculators' ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Calculator className="w-3.5 h-3.5" /> Simulators
            </button>
            <button
              onClick={() => {
                setGlossaryQuery('');
                setActiveView('glossary');
              }}
              className={`px-3 py-1.5 rounded-lg flex-shrink-0 transition-all flex items-center gap-1 ${
                activeView === 'glossary' ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <BookA className="w-3.5 h-3.5" /> Glossary
            </button>
            <button
              onClick={() => setActiveView('reference')}
              className={`px-3 py-1.5 rounded-lg flex-shrink-0 transition-all flex items-center gap-1 ${
                activeView === 'reference' ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Compass className="w-3.5 h-3.5" /> Ref
            </button>
          </div>
        </div>
      </header>

      {/* Main Layout Container */}
      <div className="flex-1 flex max-w-7xl w-full mx-auto relative">
        {/* Left Sidebar / Drawer */}
        <aside
          className={`fixed inset-y-0 left-0 z-50 w-80 max-w-[85vw] bg-slate-900 border-r border-slate-800 p-4 transform transition-all duration-200 ease-in-out lg:static lg:z-0 lg:h-[calc(100vh-4rem)] lg:sticky lg:top-16 overflow-y-auto ${
            sidebarOpen
              ? 'translate-x-0 shadow-2xl lg:block lg:translate-x-0'
              : '-translate-x-full lg:hidden'
          }`}
        >
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-cyan-400" />
              <span className="font-bold text-sm text-white">Chapters</span>
              <span className="text-[11px] font-mono px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                {ALL_CHAPTERS.length}
              </span>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              title="Hide chapter menu"
              aria-label="Hide chapter menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Platform Views Links inside Mobile Drawer */}
          <div className="lg:hidden mb-4 pb-3 border-b border-slate-800">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-1 block mb-2">
              Quick Navigation
            </span>
            <div className="grid grid-cols-2 gap-1.5 text-xs font-medium">
              {[
                { id: 'overview', label: 'Overview', icon: BookOpen, color: 'text-slate-200' },
                { id: 'vault', label: 'Vault', icon: Highlighter, color: 'text-purple-400' },
                { id: 'mock-exam', label: 'ARRT Mock', icon: Award, color: 'text-rose-400' },
                { id: 'traps', label: 'Exam Traps', icon: AlertTriangle, color: 'text-amber-400' },
                { id: 'study', label: 'Study Deck', icon: Sparkles, color: 'text-amber-300' },
                { id: 'mastery', label: 'Mastery', icon: TrendingUp, color: 'text-cyan-400' },
                { id: 'calculators', label: 'Simulators', icon: Calculator, color: 'text-cyan-300' },
                { id: 'glossary', label: 'Glossary', icon: BookA, color: 'text-pink-400' },
                { id: 'reference', label: 'Reference', icon: Compass, color: 'text-indigo-400' },
                { id: 'search', label: 'Search', icon: Search, color: 'text-cyan-400' }
              ].map(item => {
                const Icon = item.icon;
                const isActive = activeView === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      if (item.id === 'glossary') setGlossaryQuery('');
                      setActiveView(item.id as AppView);
                      setSidebarOpen(false);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`flex items-center gap-1.5 p-2 rounded-lg text-left transition-colors ${
                      isActive
                        ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/30'
                        : 'bg-slate-950/80 text-slate-300 hover:bg-slate-800 border border-slate-800/80'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${item.color}`} />
                    <span className="truncate">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Chapter Search Filter in Drawer */}
          <div className="relative mb-3">
            <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Filter 40 chapters..."
              value={drawerSearch}
              onChange={(e) => setDrawerSearch(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-8 pr-7 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
            />
            {drawerSearch && (
              <button
                onClick={() => setDrawerSearch('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                aria-label="Clear chapter search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <div className="space-y-4 text-xs">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-2 flex items-center justify-between">
              <span>Textbook Contents</span>
              <span className="font-mono text-cyan-400">{ALL_CHAPTERS.length} Chapters</span>
            </div>

            {BOOK_PARTS.map((part) => {
              const partChapters = ALL_CHAPTERS.filter(ch => {
                if (ch.partId !== part.id) return false;
                if (!drawerSearch.trim()) return true;
                const q = drawerSearch.toLowerCase();
                return ch.title.toLowerCase().includes(q) ||
                       `ch ${ch.number}`.includes(q) ||
                       `chapter ${ch.number}`.includes(q) ||
                       ch.number.toString() === q ||
                       ch.outline.some(o => o.toLowerCase().includes(q));
              });

              if (partChapters.length === 0) return null;
              return (
                <div key={part.id} className="space-y-1">
                  <div className="px-2 py-1 text-[11px] font-bold text-slate-400 uppercase tracking-wide bg-slate-950/60 rounded">
                    {part.title}
                  </div>
                  <div className="space-y-0.5">
                    {partChapters.map((ch) => {
                      const isActive = activeView === 'reader' && currentChapterNum === ch.number;
                      return (
                        <button
                          key={ch.number}
                          onClick={() => handleSelectChapter(ch.number)}
                          className={`w-full text-left px-2.5 py-2 rounded-lg flex items-center justify-between transition-all ${
                            isActive
                              ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                              : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                          }`}
                        >
                          <span className="truncate pr-2">
                            <span className={`font-mono text-[10px] mr-1.5 ${isActive ? 'text-slate-900' : 'text-cyan-400'}`}>
                              Ch.{ch.number}
                            </span>
                            {ch.title}
                          </span>
                          <span className={`text-[10px] font-mono flex-shrink-0 ${isActive ? 'text-slate-900' : 'text-slate-500'}`}>
                            {ch.penguins.length}★
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* User Account & Sign Out in Drawer */}
          {isAuthenticated && (
            <div className="pt-4 mt-4 border-t border-slate-800 space-y-2">
              <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-slate-950/80 border border-slate-800">
                <div className="w-7 h-7 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 flex items-center justify-center text-xs font-bold flex-shrink-0">
                  {user?.name ? user.name.charAt(0).toUpperCase() : 'U'}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-bold text-white truncate">{user?.name || 'Technologist'}</p>
                  <p className="text-[10px] text-slate-400 truncate">{user?.email}</p>
                </div>
              </div>
              <button
                onClick={handleSignOut}
                className="w-full text-left px-3 py-2 rounded-xl text-xs font-bold text-rose-400 hover:bg-rose-950/30 hover:text-rose-300 flex items-center gap-2 transition-colors border border-rose-900/40 bg-rose-950/10"
              >
                <LogOut className="w-3.5 h-3.5" /> Sign Out
              </button>
            </div>
          )}
        </aside>

        {/* Backdrop for mobile drawer */}
        {sidebarOpen && (
          <div
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-black/60 z-40 lg:hidden backdrop-blur-sm"
          />
        )}

        {/* Main Content Viewport */}
        <main className="flex-1 p-3 xs:p-4 sm:p-6 lg:p-8 min-w-0 overflow-x-hidden pb-24 lg:pb-8">
          {activeView === 'overview' && (
            <BookOverview
              onSelectChapter={handleSelectChapter}
              onOpenStudyDeck={() => setActiveView('study')}
              onOpenCalculators={() => setActiveView('calculators')}
              onOpenGlossary={() => {
                setGlossaryQuery('');
                setActiveView('glossary');
              }}
              onOpenReference={() => setActiveView('reference')}
              onOpenVault={() => setActiveView('vault')}
              onOpenMockExam={() => setActiveView('mock-exam')}
              onOpenExamTraps={() => setActiveView('traps')}
              onOpenMastery={() => setActiveView('mastery')}
              onOpenBackupSync={() => setShowBackupModal(true)}
            />
          )}

          {activeView === 'reader' && (
            <ChapterReader
              chapter={currentChapter}
              onSelectChapter={handleSelectChapter}
              allChaptersCount={ALL_CHAPTERS.length}
              onOpenCalculators={() => setActiveView('calculators')}
              onOpenGlossary={(term) => {
                setGlossaryQuery(term || '');
                setActiveView('glossary');
              }}
              onOpenVault={() => setActiveView('vault')}
              isAuthenticated={isAuthenticated}
              onRequireAuth={openAuth}
            />
          )}

          {activeView === 'vault' && (
            <ProtectedGate
              isAuthenticated={isAuthenticated}
              onOpenAuth={openAuth}
              featureTitle="High-Yield MCQ Revision Vault & One-Liners"
              featureDescription="Access all 40 chapters of curated high-yield clinical points, one-liner flashcards, cloze recall testing, and your personal highlighted study vault."
              benefits={[
                'Save and synchronize custom highlights and high-yield notes across devices',
                'One-click revision vault and exam traps matrices',
                'Cloze recall mode for rapid active-recall studying',
                'Cram mode with keyboard shortcuts (Space/J/K)'
              ]}
            >
              <HighYieldVault onNavigateToChapter={handleSelectChapter} />
            </ProtectedGate>
          )}

          {activeView === 'mock-exam' && (
            <ProtectedGate
              isAuthenticated={isAuthenticated}
              onOpenAuth={openAuth}
              featureTitle="Timed ARRT Board Mock Exam Simulator"
              featureDescription="Test yourself with timed ARRT registry-standard multiple-choice questions, detailed explanations, and performance tracking across physics domains."
              benefits={[
                'Full ARRT registry-standard timed testing with instant grading',
                'Category breakdown across Radiation Protection, Equipment, Image Production, and Physics',
                'Detailed clinical rationales and equation breakdowns for every question',
                'Personalized exam history and score tracking'
              ]}
            >
              <MockExamSimulator onNavigateToChapter={handleSelectChapter} />
            </ProtectedGate>
          )}

          {activeView === 'traps' && (
            <ProtectedGate
              isAuthenticated={isAuthenticated}
              onOpenAuth={openAuth}
              featureTitle="Exam Traps & Clinical Pitfalls Center"
              featureDescription="Review high-frequency board traps, confusing terminology pairs, and comparative matrices to avoid common test traps."
              benefits={[
                'Detailed comparative tables (e.g. Photoelectric vs Compton, Grid Cutoff vs Anode Heel)',
                'Board pitfall alerts highlighting what examiners frequently test',
                'Clinical scenarios and physics trap explanations',
                'Synced with your personal exam study checklist'
              ]}
            >
              <ExamTrapsCenter />
            </ProtectedGate>
          )}

          {activeView === 'mastery' && (
            <ProtectedGate
              isAuthenticated={isAuthenticated}
              onOpenAuth={openAuth}
              featureTitle="Mastery & Progress Dashboard"
              featureDescription="Track your syllabus completion percentage, mock exam averages, learning objectives mastered, and review velocity."
              benefits={[
                'Holistic readiness gauge across all 8 textbook parts',
                'Visual progress tracking for learning objectives and challenge questions',
                'Weak-spot radar to direct study time where it matters most',
                'Exportable study audit and device synchronization'
              ]}
            >
              <MasteryDashboard
                onNavigateToChapter={handleSelectChapter}
                onOpenMockExam={() => setActiveView('mock-exam')}
                onOpenStudyDeck={() => setActiveView('study')}
                onOpenVault={() => setActiveView('vault')}
              />
            </ProtectedGate>
          )}

          {activeView === 'search' && (
            <SearchInterface 
              onSelectChapter={handleSelectChapter}
              onOpenGlossary={(term) => {
                setGlossaryQuery(term || '');
                setActiveView('glossary');
              }}
            />
          )}

          {activeView === 'study' && (
            <ProtectedGate
              isAuthenticated={isAuthenticated}
              onOpenAuth={openAuth}
              featureTitle="Spaced Repetition SRS Study Deck"
              featureDescription="Retain physics formulas, penguins, and questions using the SM-2 spaced repetition memory algorithm."
              benefits={[
                'SuperMemo SM-2 spaced repetition memory scheduling',
                'Over 900+ flashcards covering every chapter concept, penguin, and formula',
                'Tracks interval (days), ease factor, and due dates across study sessions',
                'Daily streak tracking and retention velocity'
              ]}
            >
              <StudyDeck onNavigateToChapter={handleSelectChapter} />
            </ProtectedGate>
          )}

          {activeView === 'glossary' && (
            <GlossaryView initialQuery={glossaryQuery} />
          )}

          {activeView === 'reference' && (
            <ReferenceGuide />
          )}

          {activeView === 'calculators' && (
            <Calculators />
          )}
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 text-slate-500 text-xs py-6 px-4 pb-24 lg:pb-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p>
            {BOOK_METADATA.title} — {BOOK_METADATA.edition} Edition ({BOOK_METADATA.year}). Authored by {BOOK_METADATA.author}.
          </p>
          <div className="flex items-center gap-3 font-mono text-[11px] text-slate-400">
            <span>PWA Offline Reader</span>
            <span>•</span>
            <button
              onClick={() => setShowBackupModal(true)}
              className="text-cyan-400 hover:text-cyan-300 underline"
            >
              Backup & Device Sync
            </button>
          </div>
        </div>
      </footer>

      {/* Mobile Fixed Bottom Navigation Bar */}
      <nav 
        className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 px-2 py-1.5 flex items-center justify-around text-[10px] font-medium shadow-2xl safe-area-pb"
        aria-label="Mobile Bottom Navigation"
      >
        <button
          onClick={() => {
            setActiveView('overview');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center gap-1 py-1 px-2.5 rounded-xl transition-all ${
            activeView === 'overview' ? 'text-cyan-400 font-bold' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Home</span>
        </button>

        <button
          onClick={() => {
            setActiveView('reader');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center gap-1 py-1 px-2.5 rounded-xl transition-all ${
            activeView === 'reader' ? 'text-cyan-400 font-bold' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>Chapters</span>
        </button>

        <button
          onClick={() => {
            setActiveView('vault');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center gap-1 py-1 px-2.5 rounded-xl transition-all ${
            activeView === 'vault' ? 'text-purple-400 font-bold' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Highlighter className="w-4 h-4" />
          <span>Vault</span>
        </button>

        <button
          onClick={() => {
            setActiveView('mock-exam');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center gap-1 py-1 px-2.5 rounded-xl transition-all ${
            activeView === 'mock-exam' ? 'text-rose-400 font-bold' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Award className="w-4 h-4" />
          <span>Mock</span>
        </button>

        <button
          onClick={() => {
            setActiveView('study');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center gap-1 py-1 px-2.5 rounded-xl transition-all ${
            activeView === 'study' ? 'text-amber-400 font-bold' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>Study</span>
        </button>

        <button
          onClick={() => setSidebarOpen(prev => !prev)}
          className={`flex flex-col items-center gap-1 py-1 px-2.5 rounded-xl transition-all ${
            sidebarOpen ? 'text-cyan-400 font-bold' : 'text-slate-400 hover:text-slate-200'
          }`}
          aria-label={sidebarOpen ? "Close menu" : "Open menu"}
        >
          <Menu className="w-4 h-4" />
          <span>Menu</span>
        </button>
      </nav>
    </div>
  );
}
