/// <reference types="vite/client" />

interface Window {
    goatcounter?: {
      count: (opts: { path: string }) => void;
    };
  }