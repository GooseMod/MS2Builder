export const openExternal = (url) => {
  // Discord makes new tabs / windows (via window.open) use electron.shell.openExternal internally, so just use window.open

  window.open(url);
};