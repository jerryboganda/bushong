import React, { useState } from 'react';
import { Download, Upload, Trash2, Check, AlertTriangle, RefreshCw, X, Shield, FileText } from 'lucide-react';

interface BackupSyncModalProps {
  onClose: () => void;
  onDataRestored?: () => void;
}

export const BackupSyncModal: React.FC<BackupSyncModalProps> = ({ onClose, onDataRestored }) => {
  const [importJsonText, setImportJsonText] = useState<string>('');
  const [statusMsg, setStatusMsg] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // 1. Export All Data
  const handleExportBackup = () => {
    try {
      const backupData: Record<string, any> = {
        version: '1.0',
        exportDate: new Date().toISOString(),
        localStorage: {}
      };

      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && (key.startsWith('rad_') || key.startsWith('bushong_'))) {
          try {
            backupData.localStorage[key] = JSON.parse(localStorage.getItem(key) || '');
          } catch {
            backupData.localStorage[key] = localStorage.getItem(key);
          }
        }
      }

      const jsonStr = JSON.stringify(backupData, null, 2);
      const blob = new Blob([jsonStr], { type: 'application/json;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const dlAnchorElem = document.createElement('a');
      dlAnchorElem.setAttribute("href", url);
      dlAnchorElem.setAttribute("download", `bushong_full_backup_${new Date().toISOString().slice(0, 10)}.json`);
      dlAnchorElem.click();
      URL.revokeObjectURL(url);

      setStatusMsg({ type: 'success', text: 'Full JSON backup downloaded successfully!' });
    } catch (err) {
      setStatusMsg({ type: 'error', text: 'Failed to generate backup export.' });
    }
  };

  // 2. Import / Restore from JSON
  const handleRestoreBackup = (rawContent?: string) => {
    const textToParse = rawContent || importJsonText;
    if (!textToParse.trim()) {
      setStatusMsg({ type: 'error', text: 'Please upload a backup file or paste valid JSON.' });
      return;
    }

    try {
      const parsed = JSON.parse(textToParse);
      if (!parsed.localStorage && typeof parsed !== 'object') {
        throw new Error('Invalid backup schema');
      }

      const dataToLoad = parsed.localStorage || parsed;
      let count = 0;
      Object.entries(dataToLoad).forEach(([key, val]) => {
        if (key.startsWith('rad_') || key.startsWith('bushong_')) {
          localStorage.setItem(key, typeof val === 'string' ? val : JSON.stringify(val));
          count++;
        }
      });

      setStatusMsg({ type: 'success', text: `Restored ${count} data collections successfully! Refreshing...` });
      setTimeout(() => {
        onDataRestored?.();
        window.location.reload();
      }, 1200);
    } catch (err) {
      setStatusMsg({ type: 'error', text: 'Invalid JSON file. Please ensure it is a valid Bushong backup.' });
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      handleRestoreBackup(content);
    };
    reader.readAsText(file);
  };

  // 3. Clear all custom study data
  const handleResetData = () => {
    if (window.confirm('WARNING: This will permanently erase your local bookmarks, saved highlights, and SRS history. Are you completely sure?')) {
      const keysToRemove: string[] = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && (key.startsWith('rad_') || key.startsWith('bushong_'))) {
          keysToRemove.push(key);
        }
      }
      keysToRemove.forEach(k => localStorage.removeItem(k));
      setStatusMsg({ type: 'success', text: 'Local study data cleared. Reloading...' });
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 xs:p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full p-4 xs:p-6 space-y-4 xs:space-y-5 shadow-2xl animate-fadeIn max-h-[92vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-cyan-400" />
            <h3 className="text-base font-bold text-white">Data Backup & Device Sync</h3>
          </div>
          <button 
            onClick={onClose} 
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {statusMsg && (
          <div className={`p-3 rounded-xl border text-xs font-semibold flex items-center gap-2 ${
            statusMsg.type === 'success'
              ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-300'
              : 'bg-rose-950/40 border-rose-500/40 text-rose-300'
          }`}>
            {statusMsg.type === 'success' ? <Check className="w-4 h-4" /> : <AlertTriangle className="w-4 h-4" />}
            {statusMsg.text}
          </div>
        )}

        {/* 1. Export Section */}
        <div className="bg-slate-950 border border-slate-800 rounded-xl p-3.5 sm:p-4 space-y-2.5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                <Download className="w-3.5 h-3.5 text-cyan-400" /> Export Complete Study Backup
              </h4>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Saves all highlights, one-liners, SRS intervals, mock exam scores, and bookmarks to a portable JSON file.
              </p>
            </div>
            <button
              onClick={handleExportBackup}
              className="w-full sm:w-auto px-4 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl text-xs shadow transition-all flex items-center justify-center gap-1.5 flex-shrink-0 min-h-[44px] sm:min-h-0"
            >
              <Download className="w-3.5 h-3.5" /> Export JSON
            </button>
          </div>
        </div>

        {/* 2. Restore Section */}
        <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-3">
          <div>
            <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
              <Upload className="w-3.5 h-3.5 text-purple-400" /> Restore from Backup File
            </h4>
            <p className="text-[11px] text-slate-400 mt-0.5">
              Select a previously exported JSON backup file or paste contents below.
            </p>
          </div>

          <label className="flex items-center justify-center gap-2 p-2.5 rounded-lg border border-dashed border-slate-700 bg-slate-900/60 hover:border-purple-400 text-slate-300 text-xs cursor-pointer transition-colors">
            <Upload className="w-4 h-4 text-purple-400" />
            <span>Click to upload .json file</span>
            <input
              type="file"
              accept=".json"
              onChange={handleFileUpload}
              className="hidden"
            />
          </label>

          <textarea
            rows={2}
            placeholder="Or paste JSON backup string directly here..."
            value={importJsonText}
            onChange={e => setImportJsonText(e.target.value)}
            className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-400 font-mono"
          />

          <div className="flex justify-end">
            <button
              onClick={() => handleRestoreBackup()}
              disabled={!importJsonText.trim()}
              className="px-3.5 py-1.5 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-lg text-xs disabled:opacity-40 transition-colors"
            >
              Restore Pasted Data
            </button>
          </div>
        </div>

        {/* 3. Danger Zone */}
        <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs">
          <span className="text-slate-500">Need a fresh start?</span>
          <button
            onClick={handleResetData}
            className="text-rose-400 hover:text-rose-300 flex items-center gap-1 font-semibold"
          >
            <Trash2 className="w-3.5 h-3.5" /> Clear Local Data
          </button>
        </div>
      </div>
    </div>
  );
};
