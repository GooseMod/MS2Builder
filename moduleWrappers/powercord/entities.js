import * as Settings from './util/settings';

export class Plugin {
  constructor() {

  }

  loadStylesheet(path) { // TODO: actually implement this func
    const url = `https://raw.githubusercontent.com/${this.github.repo}/main/${path}`;

    return url;
  }

  delayedConstructor() { // Run funcs which rely on after eval (GooseMod sets keys on this class with more info, mostly metadata)
    if (this.delayedConstructed) return;
    this.delayedConstructed = true;

    Settings.makeStore(this.entityID);
  }

  get entityID() {
    return this.name;
  }

  get settings() {
    const store = Settings.settingStores[this.entityID];

    return { // Basic wrapper with renamed functions
      get: store.getSetting,
      set: store.setSetting,
      delete: store.deleteSetting,

      getKeys: store.getKeys,

      connectStore: () => {} // Unneeded util func, but here incase it is attempted to be called
    };
  }

  get goosemodHandlers() {
    return {
      onImport: () => {
        this.delayedConstructor();

        this.startPlugin.bind(this)();
      },

      onRemove: this.pluginWillUnload.bind(this)
    };
  }
}
