export const writeText = (text) => { // Write text to clipboard
  return DiscordNative.clipboard.copy(text);
};

export const readText = () => { // Read text from clipboard
  return DiscordNative.clipboard.read();
};