import showToast from '@goosemod/toast';

export default class Plugin {
  constructor() {
    this.patches = [];
    this.stylesheets = [];
  }

  enqueueUnpatch(unpatch) {
    this.patches.push(unpatch);
  }

  addCss(css) {
    const el = document.createElement('style');

    el.appendChild(document.createTextNode(css)); // Load the stylesheet via style element w/ CSS text

    document.head.appendChild(el);
  
    this.stylesheets.push(el); // Push to internal array so we can remove the elements on unload
  }

  toast(content, options) {
    showToast(content, {
      subtext: this.name,
      ...options
    });
  }
  
  goosemodHandlers = {
    onImport: () => {
      this.onImport();
    },

    onRemove: () => {
      this.patches.forEach((x) => x());
      this.stylesheets.forEach((x) => x.remove());

      this.onRemove();
    }
  }
}