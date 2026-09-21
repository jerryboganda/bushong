export interface TtsState {
  isPlaying: boolean;
  isPaused: boolean;
  rate: number;
  currentText: string;
}

type TtsListener = (state: TtsState) => void;

class TextToSpeechManager {
  private synth: SpeechSynthesis | null = null;
  private utterance: SpeechSynthesisUtterance | null = null;
  private listeners: Set<TtsListener> = new Set();
  private rate: number = 1.0;
  private currentText: string = '';

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
    }
  }

  public isSupported(): boolean {
    return this.synth !== null;
  }

  public subscribe(listener: TtsListener): () => void {
    this.listeners.add(listener);
    listener(this.getState());
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notify(): void {
    const state = this.getState();
    this.listeners.forEach(fn => fn(state));
  }

  public getState(): TtsState {
    return {
      isPlaying: this.synth ? this.synth.speaking && !this.synth.paused : false,
      isPaused: this.synth ? this.synth.paused : false,
      rate: this.rate,
      currentText: this.currentText
    };
  }

  public setRate(rate: number): void {
    this.rate = rate;
    if (this.utterance) {
      this.utterance.rate = rate;
    }
    this.notify();
  }

  public speak(text: string, title?: string): void {
    if (!this.synth) return;

    this.stop();

    const cleanText = text
      .replace(/[#*`_~]/g, '')
      .replace(/\[.*?\]\(.*?\)/g, '')
      .trim();

    if (!cleanText) return;

    this.currentText = title || cleanText.substring(0, 60) + '...';
    this.utterance = new SpeechSynthesisUtterance(cleanText);
    this.utterance.rate = this.rate;
    this.utterance.pitch = 1.0;

    // Pick a natural English voice if available
    const voices = this.synth.getVoices();
    const preferredVoice = voices.find(v => (v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha') || v.name.includes('David')))) || voices.find(v => v.lang.startsWith('en'));
    if (preferredVoice) {
      this.utterance.voice = preferredVoice;
    }

    this.utterance.onstart = () => this.notify();
    this.utterance.onpause = () => this.notify();
    this.utterance.onresume = () => this.notify();
    this.utterance.onend = () => {
      this.currentText = '';
      this.notify();
    };
    this.utterance.onerror = () => {
      this.currentText = '';
      this.notify();
    };

    this.synth.speak(this.utterance);
    this.notify();
  }

  public pause(): void {
    if (this.synth && this.synth.speaking && !this.synth.paused) {
      this.synth.pause();
      this.notify();
    }
  }

  public resume(): void {
    if (this.synth && this.synth.paused) {
      this.synth.resume();
      this.notify();
    }
  }

  public stop(): void {
    if (this.synth) {
      this.synth.cancel();
      this.currentText = '';
      this.notify();
    }
  }

  public toggle(text: string, title?: string): void {
    if (!this.synth) return;
    if (this.synth.speaking) {
      if (this.synth.paused) {
        this.resume();
      } else {
        this.pause();
      }
    } else {
      this.speak(text, title);
    }
  }
}

export const tts = new TextToSpeechManager();
