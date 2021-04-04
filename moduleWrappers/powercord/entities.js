export class Plugin {
  constructor() {

  }

  get goosemodHandlers() {
    return {
      onImport: this.startPlugin,
      onRemove: this.pluginWillUnload
    };
  }
}