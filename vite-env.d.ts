/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly PRODUCTION_ENDPOINT: string;
  readonly DEVELOP_ENDPOINT: string;
  // Add more environment variables as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
