// Also set Powercord global var stuff here since entities import is needed to use Plugin (which every PC plugin uses)

const sendMessage = goosemodScope.webpackModules.findByProps('sendMessage', 'receiveMessage').sendMessage;
const getChannelId = goosemod.webpackModules.findByProps('getChannelId').getChannelId;

export const powercord = {
  api: {
    commands: {
      registerCommand: ({ command, alias, description, usage, executor }) => {
        // TODO: implement alias

        goosemodScope.patcher.commands.add(command, description,
          async ( { args: [ { text } ] } ) => {
            const out = await executor(text.split(' ')); // Run original executor func (await incase it's an async function)

            if (!out.send) {
              goosemodScope.patcher.internalMessage(out.result); // PC impl. sends internal message when out.send === false, so we also do the same via our previous Patcher API function

              return;
            }

            // When send is true, we send it as a message via sendMessage

            sendMessage(getChannelId(), {
              content: out.result,

              tts: false,
              invalidEmojis: [],
              validNonShortcutEmojis: []
            });
          }, [
          { type: 3, required: false, name: 'args', description: 'Arguments for PC command' } // Argument for any string for compat. with PC's classical commands
        ]);
      },

      unregisterCommand: (command) => {
        goosemodScope.patcher.commands.remove(command);
      }
    },

    notices: {
      sendToast: (_id, { header, content, type, buttons }) => {
        // TODO: implement full toast in future instead of just small current GM toast

        goosemodScope.showToast(content);
      }
    },

    settings: {
      registerSettings: (id, { label, render, category }) => {
        const { React } = goosemodScope.webpackModules.common;

        const SettingsView = goosemodScope.webpackModules.findByDisplayName('SettingsView');

        const FormTitle = goosemodScope.webpackModules.findByDisplayName('FormTitle');
        const FormSection = goosemodScope.webpackModules.findByDisplayName('FormSection');

        goosemodScope.patcher.inject(id, SettingsView.prototype, 'getPredicateSections', (_, sections) => {
          if (!sections.find(c => c.section === 'changelog')) return sections;
      
          const dividers = sections.filter(c => c.section === 'DIVIDER');

          const finalLabel = typeof label === 'function' ? label() : label;

          sections.splice(sections.indexOf(dividers[dividers.length - 2]) - 2, 0,
            {
              section: finalLabel,
              label: finalLabel,
              predicate: () => { },
              element: () => React.createElement(FormSection, { },
                React.createElement(FormTitle, { tag: 'h2' }, finalLabel),

                render({
                  getSetting: settingStores[category].getSetting,
                  updateSetting: settingStores[category].updateSetting
                })
              )
            }
          );

          return sections;
        });
      },

      unregisterSettings: (id) => {
        goosemodScope.patcher.uninject(id);
      }
    }
  }
};

const settingStores = {};

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
  }

  toggleSetting = (key) => {
    this.store[key] = !this.store[key];
  }

  deleteSetting = (key) => {
    delete this.store[key];
  }

  getKeys = () => Object.keys(this.store)
}

export class Plugin {
  constructor() {

  }

  loadStylesheet(path) {
    const url = `https://raw.githubusercontent.com/${this.github.repo}/main/${path}`;

    return url;
  }

  delayedConstructor() {
    if (this.delayedConstructed) return;
    this.delayedConstructed = true;

    settingStores[this.entityID] = new SimpleStore();
  }

  get entityID() {
    return this.name;
  }

  get settings() {
    const store = settingStores[this.entityID];

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
