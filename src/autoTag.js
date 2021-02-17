const basicIncludes = (bundleCode, code, display = (code[0].toUpperCase() + code.substring(1))) => {
  // if (bundleCode.includes(code)) return display;
  if (bundleCode.includes(code)) return display.toLowerCase(); // We make the actual tag all lowercase for now due to bug in GM v7.0.0
};

export default (bundleCode) => { // Scans final bundle JS to try and auto-detect things, then adding tags
  const tags = [
    basicIncludes(bundleCode, 'react'),
    basicIncludes(bundleCode, 'document', 'DOM'),
  ].filter((x) => x !== undefined);

  return tags;
};