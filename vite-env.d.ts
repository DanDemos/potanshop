/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PRODUCTION_ENDPOINT: string;
  readonly VITE_DEVELOP_ENDPOINT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
