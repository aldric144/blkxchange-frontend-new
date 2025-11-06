/// <reference types="vite/client" />

interface Window {
  BlkXLoginWidget?: {
    init: (config?: {
      apiBase?: string;
      redirectAfterLogin?: string;
      theme?: string;
    }) => void;
  };
}
