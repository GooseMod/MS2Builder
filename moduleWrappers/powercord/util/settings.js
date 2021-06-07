export const settingStores = {};

export const makeStore = (key) => {
  settingStores[key] = new SimpleStore();
};

class SimpleStore {
  constructor() {
    this.store = {};
  }

  getSetting = (key, defaultValue) => {
    return this.store[key] ?? defaultValue;
  }

  updateSetting = (key, value) => {
    if (value === undefined) {
      return this.toggleSetting(key);
    }

    this.store[key] = value;

    return this.store[key];
  }

  toggleSetting = (key) => {
    this.store[key] = !this.store[key];

    return this.store[key];
  }

  deleteSetting = (key) => {
    delete this.store[key];
  }

  getKeys = () => Object.keys(this.store)
}