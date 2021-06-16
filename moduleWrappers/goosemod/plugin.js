import showToast from '@goosemod/toast';

export default class Plugin {
  constructor() {
    this.patches = [];
  }

  enqueueUnpatch(unpatch) {
    this.patches.push(unpatch);
  }

  toast(content, options) {
    showToast(content, {
      subtext: this.name,
      ...options
    });
  }
  
  goosemodHandlers = {
    onImport() {
      this.onImport();
    },

    onRemove() {
      for (const unpatch of this.patches) {
        unpatch();
      }

      this.onRemove();
    }
  }
}