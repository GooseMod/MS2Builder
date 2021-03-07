const basicIncludes = (bundleCode, code, display = (code[0].toUpperCase() + code.substring(1))) => {
  if (bundleCode.includes(code)) return display;
};

export default (bundleCode, currentTags) => { // Scans final bundle JS to try and auto-detect things, then adding tags
  const tags = [
    basicIncludes(bundleCode, 'react'),
    basicIncludes(bundleCode, 'document', 'DOM'),

    (/document\.createElement\(['"`]style['"`]\)/.test(bundleCode)) ? 'CSS' : undefined,

    currentTags.includes('themes') ? 'theme' : undefined
  ].filter((x) => x !== undefined).concat(currentTags.filter((x) => x !== 'themes'));

  return tags;
};