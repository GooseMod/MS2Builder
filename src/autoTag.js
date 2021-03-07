const basicIncludes = (bundleCode, code, display = (code[0].toUpperCase() + code.substring(1))) => {
  if (bundleCode.includes(code)) return display;
};

export default (bundleCode) => { // Scans final bundle JS to try and auto-detect things, then adding tags
  const tags = [
    basicIncludes(bundleCode, 'react'),
    basicIncludes(bundleCode, 'document', 'DOM'),

    (bundleCode.includes('document.createTextNode') && /document\.createElement\(['"`]style['"`]\)/.test(bundleCode)) ? 'CSS' : undefined,

  ].filter((x) => x !== undefined);

  return tags;
};