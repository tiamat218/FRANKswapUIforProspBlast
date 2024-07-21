const PANCAKE_EXTENDED_LOCAL = 'pancakeswap-extended.json'; // lokale Datei
const PANCAKE_TOP100_LOCAL = 'pancakeswap-top-100.json'; // lokale Datei

export const UNSUPPORTED_LIST_URLS: string[] = [];

// lower index == higher priority for token import
export const DEFAULT_LIST_OF_LISTS: string[] = [
  PANCAKE_TOP100_LOCAL,
  PANCAKE_EXTENDED_LOCAL,
  ...UNSUPPORTED_LIST_URLS, // need to load unsupported tokens as well
];

// default lists to be 'active' aka searched across
export const DEFAULT_ACTIVE_LIST_URLS: string[] = [];
