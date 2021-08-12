import * as Settings from './util/settings';

export class Plugin {
  constructor() {
    this.stylesheets = [];
  }

  loadStylesheet(css) {
    const el = document.createElement('style');

    el.appendChild(document.createTextNode(css)); // Load the stylesheet via style element w/ CSS text

    document.head.appendChild(el);
  
    this.stylesheets.push(el); // Push to internal array so we can remove the elements on unload
  }

  // Supposed to return PC manifest, which we don't store so return a rough one based on GM metadata
  get manifest() {
    return {
      name: this.name,
      description: this.description,
      version: this.version,

      author: this.authors.toString(),
      license: 'Unknown'
    }
  }

  get entityID() {
    return this.name;
  }

  get settings() {
    const store = Settings.settingStores[this.entityID];

    return { // Basic wrapper with renamed functions
      get: store.getSetting,
      set: store.updateSetting,
      delete: store.deleteSetting,

      getKeys: store.getKeys,

      connectStore: () => {} // Unneeded util func, but here incase it is attempted to be called
    };
  }

  get goosemodHandlers() {
    return {
      onImport: () => {
        Settings.makeStore(this.entityID);

        this.startPlugin.bind(this)();
      },

      onRemove: () => {
        this.stylesheets.forEach((x) => x.remove()); // Remove loaded stylesheets which were added with Plugin.loadStylesheet

        this.pluginWillUnload.bind(this)();
      },

      getSettings: () => Settings.settingStores[this.entityID].store,
      loadSettings: (storeBase) => Settings.settingStores[this.entityID].store = (storeBase || {})
    };
  }
}
