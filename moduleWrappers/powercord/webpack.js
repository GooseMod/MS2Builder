const makeFinalFilter = (filter) => {
  if (Array.isArray(filter)) {
    const subs = filter;
    filter = (mod) => subs.every((s) => mod[s] || (mod.__proto__ && mod.__proto__[s]));
  }

  return filter;
};

module.exports = {
  getModule: (filter, _retry, _forever) => { // Ignoring retry and forever arguments for basic implementation
    filter = makeFinalFilter(filter);

    return goosemodScope.webpackModules.find(filter);
  },

  getAllModules: (filter) => {
    filter = makeFinalFilter(filter);

    return goosemodScope.webpackModules.findAll(filter);
  },

  getModuleByDisplayName: (displayName) => {
    return goosemodScope.webpackModules.findByDisplayName(displayName);
  },

  ...goosemodScope.webpackModules.common // Export common modules (eg: React)
};