const { copy } = goosemod.webpackModules.findByProps('SUPPORTS_COPY', 'copy'); // Use Webpack module for Web support (instead of DiscordNative)

export const writeText = (text) => { // Write text to clipboard
  return copy(text);
};

export const readText = () => { // Read text from clipboard
  return DiscordNative.clipboard.read(); // Web doesn't support clipboard reading (no Webpack for it like copy) - use DiscordNative
};