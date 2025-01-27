import type { ElectronIPC } from './src/preload';

declare global {
  interface Window {
    electron: ElectronIPC,
    isElectron: boolean
  }
}

export { }
