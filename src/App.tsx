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
  HardDrive
} from 'lucide-react';

export default function App() {
  const [activeView, setActiveView] = useState<
    'overview' | 'reader' | 'search' | 'study' | 'calculators' | 'glossary' | 'reference' | 'vault' | 'mock-exam' | 'traps' | 'mastery'
  >('overview');
  const [currentChapterNum, setCurrentChapterNum] = useState<number>(1);
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

  const currentChapter = ALL_CHAPTERS.find(ch => ch.number === currentChapterNum) || ALL_CHAPTERS[0];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Backup and Sync Modal */}
      {showBackupModal && (
        <BackupSyncModal onClose={() => setShowBackupModal(false)} />
      )}

      {/* Top Header Bar */}
      <header className="sticky top-0 z-40 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          {/* Brand & Drawer Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(prev => !prev)}
              className={`p-2 rounded-lg transition-colors ${
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
              onClick={() => setActiveView('overview')}
              className="flex items-center gap-2.5 cursor-pointer group"
            >
              <div className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center text-slate-950 font-bold shadow-md shadow-cyan-500/20">
                <BookOpen className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-sm sm:text-base text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                  Radiologic Science
                </span>
                <span className="text-[10px] ml-1.5 px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-mono font-semibold">
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
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveView('search')}
              className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                activeView === 'search'
                  ? 'bg-cyan-500 text-slate-950 border-cyan-400 font-bold'
                  : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              <Search className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Search</span>
              <kbd className="hidden sm:inline text-[9px] px-1 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400 font-mono">
                /
              </kbd>
            </button>

            {/* Backup & Sync Button */}
            <button
              onClick={() => setShowBackupModal(true)}
              className="p-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 hover:text-cyan-300 hover:border-slate-700 transition-colors"
              title="Backup & Restore Study Data (JSON Sync)"
            >
              <HardDrive className="w-4 h-4" />
            </button>

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
            <div className={`flex items-center gap-1 text-[11px] px-2 py-1 rounded-full border ${
              isOnline 
                ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
                : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
            }`}>
              {isOnline ? <Wifi className="w-3 h-3" /> : <WifiOff className="w-3 h-3" />}
              <span className="hidden xl:inline">{isOnline ? 'Online' : 'Offline'}</span>
            </div>
          </div>
        </div>

        {/* Mobile / Tablet Horizontal Navigation Strip */}
        <div className="lg:hidden flex items-center gap-1.5 overflow-x-auto px-4 py-2 bg-slate-950/80 border-t border-slate-800 text-xs font-medium no-scrollbar">
          <button
            onClick={() => setActiveView('overview')}
            className={`px-2.5 py-1 rounded-md flex-shrink-0 transition-all ${activeView === 'overview' ? 'bg-slate-800 text-white font-bold' : 'text-slate-400'}`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveView('reader')}
            className={`px-2.5 py-1 rounded-md flex-shrink-0 transition-all ${activeView === 'reader' ? 'bg-cyan-500/20 text-cyan-400 font-bold' : 'text-slate-400'}`}
          >
            Chapters
          </button>
          <button
            onClick={() => setActiveView('vault')}
            className={`px-2.5 py-1 rounded-md flex-shrink-0 transition-all flex items-center gap-1 ${activeView === 'vault' ? 'bg-purple-500/20 text-purple-300 font-bold' : 'text-purple-400'}`}
          >
            <Highlighter className="w-3 h-3" /> Vault
          </button>
          <button
            onClick={() => setActiveView('mock-exam')}
            className={`px-2.5 py-1 rounded-md flex-shrink-0 transition-all flex items-center gap-1 ${activeView === 'mock-exam' ? 'bg-rose-500/20 text-rose-300 font-bold' : 'text-rose-400'}`}
          >
            <Award className="w-3 h-3" /> ARRT Mock
          </button>
          <button
            onClick={() => setActiveView('traps')}
            className={`px-2.5 py-1 rounded-md flex-shrink-0 transition-all flex items-center gap-1 ${activeView === 'traps' ? 'bg-amber-500/20 text-amber-300 font-bold' : 'text-amber-400'}`}
          >
            <AlertTriangle className="w-3 h-3" /> Traps
          </button>
          <button
            onClick={() => setActiveView('study')}
            className={`px-2.5 py-1 rounded-md flex-shrink-0 transition-all flex items-center gap-1 ${activeView === 'study' ? 'bg-amber-500/20 text-amber-400 font-bold' : 'text-slate-400'}`}
          >
            <Sparkles className="w-3 h-3" /> Study Deck
          </button>
          <button
            onClick={() => setActiveView('mastery')}
            className={`px-2.5 py-1 rounded-md flex-shrink-0 transition-all flex items-center gap-1 ${activeView === 'mastery' ? 'bg-cyan-500/20 text-cyan-400 font-bold' : 'text-slate-400'}`}
          >
            <TrendingUp className="w-3 h-3" /> Mastery
          </button>
          <button
            onClick={() => setActiveView('calculators')}
            className={`px-2.5 py-1 rounded-md flex-shrink-0 transition-all ${activeView === 'calculators' ? 'bg-cyan-500/20 text-cyan-400 font-bold' : 'text-slate-400'}`}
          >
            Calculators
          </button>
          <button
            onClick={() => {
              setGlossaryQuery('');
              setActiveView('glossary');
            }}
            className={`px-2.5 py-1 rounded-md flex-shrink-0 transition-all ${activeView === 'glossary' ? 'bg-purple-500/20 text-purple-300 font-bold' : 'text-slate-400'}`}
          >
            Glossary
          </button>
          <button
            onClick={() => setActiveView('reference')}
            className={`px-2.5 py-1 rounded-md flex-shrink-0 transition-all ${activeView === 'reference' ? 'bg-indigo-500/20 text-indigo-300 font-bold' : 'text-slate-400'}`}
          >
            Reference
          </button>
        </div>
      </header>

      {/* Main Layout Container */}
      <div className="flex-1 flex max-w-7xl w-full mx-auto relative">
        {/* Left Sidebar / Drawer */}
        <aside
          className={`fixed inset-y-0 left-0 z-50 w-80 bg-slate-900 border-r border-slate-800 p-4 transform transition-all duration-200 ease-in-out lg:static lg:z-0 lg:h-[calc(100vh-4rem)] lg:sticky lg:top-16 overflow-y-auto ${
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

          <div className="space-y-4 text-xs">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-2 flex items-center justify-between">
              <span>Textbook Contents</span>
              <span className="font-mono text-cyan-400">{ALL_CHAPTERS.length} Chapters</span>
            </div>

            {BOOK_PARTS.map((part) => {
              const partChapters = ALL_CHAPTERS.filter(ch => ch.partId === part.id);
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
        </aside>

        {/* Backdrop for mobile drawer */}
        {sidebarOpen && (
          <div
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-black/60 z-40 lg:hidden backdrop-blur-sm"
          />
        )}

        {/* Main Content Viewport */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 min-w-0 overflow-x-hidden">
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
            />
          )}

          {activeView === 'vault' && (
            <HighYieldVault onNavigateToChapter={handleSelectChapter} />
          )}

          {activeView === 'mock-exam' && (
            <MockExamSimulator onNavigateToChapter={handleSelectChapter} />
          )}

          {activeView === 'traps' && (
            <ExamTrapsCenter />
          )}

          {activeView === 'mastery' && (
            <MasteryDashboard
              onNavigateToChapter={handleSelectChapter}
              onOpenMockExam={() => setActiveView('mock-exam')}
              onOpenStudyDeck={() => setActiveView('study')}
              onOpenVault={() => setActiveView('vault')}
            />
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
            <StudyDeck onNavigateToChapter={handleSelectChapter} />
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
      <footer className="bg-slate-900 border-t border-slate-800 text-slate-500 text-xs py-6 px-4">
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
    </div>
  );
}
