interface ImportMetaEnv {
  /** URL del servicio de formularios (p. ej. https://api.web3forms.com/submit). */
  readonly PUBLIC_FORM_ENDPOINT?: string;
  /** Clave pública de Web3Forms (access_key). */
  readonly PUBLIC_FORM_ACCESS_KEY?: string;
  /** Token de Cloudflare Web Analytics. */
  readonly PUBLIC_CF_ANALYTICS_TOKEN?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
