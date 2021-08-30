parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"../../../moduleWrappers/powercord/global/commands.js":[function(require,module,exports) {
const sendMessage = goosemodScope.webpackModules.findByProps('sendMessage', 'receiveMessage').sendMessage;
const getChannelId = goosemodScope.webpackModules.findByProps('getChannelId').getChannelId;

export const registerCommand = ({ command, alias, description, usage, executor }) => {
  // TODO: implement alias

  goosemodScope.patcher.commands.add(command, description,
    async (ret) => {
      // Don't just destructure as using without text arguments returns empty object ({})

      let textGiven = '';
      if (ret.args) {
        const { args: [ { text } ] } = ret;
        textGiven = text;
      }

      const out = await executor(textGiven.split(' ')); // Run original executor func (await incase it's an async function)

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
};

export const unregisterCommand = (command) => {
  goosemodScope.patcher.commands.remove(command);
};
},{}],"../../../moduleWrappers/powercord/global/notices.js":[function(require,module,exports) {
export const sendToast = (_id, { header, content, type, buttons }) => {
  // TODO: implement full toast in future instead of just small current GM toast

  goosemodScope.showToast(content);
};
},{}],"../../../moduleWrappers/powercord/util/settings.js":[function(require,module,exports) {
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
},{}],"../../../moduleWrappers/powercord/global/settings.js":[function(require,module,exports) {
import * as Settings from '../util/settings';

export const registerSettings = (id, { label, render, category }) => {
  const { React } = goosemodScope.webpackModules.common;

  const SettingsView = goosemodScope.webpackModules.findByDisplayName('SettingsView');

  const FormTitle = goosemodScope.webpackModules.findByDisplayName('FormTitle');
  const FormSection = goosemodScope.webpackModules.findByDisplayName('FormSection');

  if (!Settings.settingStores[category]) Settings.makeStore(category);

  goosemodScope.patcher.inject(id, SettingsView.prototype, 'getPredicateSections', (_, sections) => {
    const logout = sections.find((c) => c.section === 'logout');
    if (!logout) return sections;

    const finalLabel = typeof label === 'function' ? label() : label;

    sections.splice(sections.indexOf(logout) - 1, 0,
      {
        section: finalLabel,
        label: finalLabel,
        predicate: () => { },
        element: () => React.createElement(FormSection, { },
          React.createElement(FormTitle, { tag: 'h2' }, finalLabel),

          React.createElement(render, {
            ...Settings.settingStores[category]
          })
        )
      }
    );

    return sections;
  });
};

export const unregisterSettings = (id) => {
  goosemodScope.patcher.uninject(id);
};
},{"../util/settings":"../../../moduleWrappers/powercord/util/settings.js"}],"../../../moduleWrappers/powercord/global/index.js":[function(require,module,exports) {
import * as commands from './commands.js';
import * as notices from './notices.js';
import * as settings from './settings.js';

export default {
  api: {
    commands,
    notices,
    settings
  }
};
},{"./commands.js":"../../../moduleWrappers/powercord/global/commands.js","./notices.js":"../../../moduleWrappers/powercord/global/notices.js","./settings.js":"../../../moduleWrappers/powercord/global/settings.js"}],"../../../moduleWrappers/powercord/entities.js":[function(require,module,exports) {
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

},{"./util/settings":"../../../moduleWrappers/powercord/util/settings.js"}],"../../../moduleWrappers/powercord/components/settings/divider.js":[function(require,module,exports) {
const { React } = goosemodScope.webpackModules.common;

const FormDivider = goosemodScope.webpackModules.findByDisplayName('FormDivider');
const SettingsFormClasses = goosemodScope.webpackModules.findByProps('dividerDefault', 'titleDefault');

export default class Divider extends React.PureComponent {
  render() {
    return React.createElement(FormDivider, {
      className: SettingsFormClasses.dividerDefault
    });
  }
}
},{}],"../../../moduleWrappers/powercord/components/settings/formItem.js":[function(require,module,exports) {
const { React } = goosemodScope.webpackModules.common;

import Divider from './divider';

const OriginalFormItem = goosemodScope.webpackModules.findByDisplayName('FormItem');
const OriginalFormText = goosemodScope.webpackModules.findByDisplayName('FormText');

const Flex = goosemodScope.webpackModules.findByDisplayName('Flex');
const Margins = goosemodScope.webpackModules.findByProps('marginTop20', 'marginBottom20');
const FormClasses = goosemodScope.webpackModules.findByProps('formText', 'description');

export default class FormItem extends React.PureComponent {
  render() {
    return React.createElement(OriginalFormItem, {
        title: this.props.title,
        required: this.props.required,
        className: [Flex.Direction.VERTICAL, Flex.Justify.START, Flex.Align.STRETCH, Flex.Wrap.NO_WRAP, Margins.marginBottom20].join(' '),
        onClick: () => {
          this.props.onClick();
        }
      },

      this.props.children,

      this.props.note && React.createElement(OriginalFormText, {
        className: FormClasses.description + (this.props.noteHasMargin ? (' ' + Margins.marginTop8) : '')
      }, this.props.note),

      React.createElement(Divider)
    );
  }
}
},{"./divider":"../../../moduleWrappers/powercord/components/settings/divider.js"}],"../../../moduleWrappers/powercord/components/settings/textInput.js":[function(require,module,exports) {
const { React } = goosemodScope.webpackModules.common;

import FormItem from './formItem';

const OriginalTextInput = goosemodScope.webpackModules.findByDisplayName('TextInput');

export default class TextInput extends React.PureComponent {
  render() {
    const title = this.props.children;
    delete this.props.children;

    return React.createElement(FormItem, {
        title,
        note: this.props.note,
        required: this.props.required,

        noteHasMargin: true
      },

      React.createElement(OriginalTextInput, {
        ...this.props
      })
    );
  }
}
},{"./formItem":"../../../moduleWrappers/powercord/components/settings/formItem.js"}],"../../../moduleWrappers/powercord/components/settings/sliderInput.js":[function(require,module,exports) {
const { React } = goosemodScope.webpackModules.common;

import FormItem from './formItem';

const OriginalSlider = goosemodScope.webpackModules.findByDisplayName('Slider');
const Margins = goosemodScope.webpackModules.findByProps('marginTop20', 'marginBottom20');

export default class TextInput extends React.PureComponent {
  render() {
    const title = this.props.children;
    delete this.props.children;

    return React.createElement(FormItem, {
        title,
        note: this.props.note,
        required: this.props.required
      },

      React.createElement(OriginalSlider, {
        ...this.props,
        className: Margins.marginTop20 + (this.props.className ? (' ' + this.props.className) : '')
      })
    );
  }
}
},{"./formItem":"../../../moduleWrappers/powercord/components/settings/formItem.js"}],"../../../moduleWrappers/powercord/components/settings/buttonItem.js":[function(require,module,exports) {
const { React } = goosemodScope.webpackModules.common;

import Divider from './divider';

const Button = goosemodScope.webpackModules.findByProps('Sizes', 'Colors', 'Looks', 'DropdownSizes');

const FormItem = goosemodScope.webpackModules.findByDisplayName('FormItem');
const FormText = goosemodScope.webpackModules.findByDisplayName('FormText');

const Flex = goosemodScope.webpackModules.findByDisplayName('Flex');
const Margins = goosemodScope.webpackModules.findByProps('marginTop20', 'marginBottom20');

const FormClasses = goosemodScope.webpackModules.findByProps('title', 'dividerDefault');
const FormTextClasses = goosemodScope.webpackModules.findByProps('formText', 'placeholder');

const Tooltip = goosemodScope.webpackModules.findByDisplayName('Tooltip');


export default class ButtonItem extends React.PureComponent {
  render() {
    const title = this.props.children;
    delete this.props.children;

    return React.createElement(FormItem, {
        className: [Flex.Direction.VERTICAL, Flex.Justify.START, Flex.Align.STRETCH, Flex.Wrap.NO_WRAP, Margins.marginBottom20].join(' '),
      },

      React.createElement('div', {
          style: {
            display: 'flex',
            justifyContent: 'space-between'
          }
        },

        React.createElement('div', {},
          React.createElement('div', {
              className: FormClasses.labelRow,
              style: {
                marginBottom: '4px'
              }
            },

            React.createElement('label', {
              class: FormClasses.title
            }, title)
          ),

          React.createElement(FormText, {
            className: FormTextClasses.description
          }, this.props.note)
        ),

        React.createElement(Tooltip, {
          text: this.props.tooltipText,
          position: this.props.tooltipPosition,
          shouldShow: this.props.tooltipText !== ''
        }, () => React.createElement(Button,
          {
            color: this.props.success ? Button.Colors.GREEN : (this.props.color || Button.Colors.BRAND),
            disabled: this.props.disabled,

            onClick: () => this.props.onClick()
          },
          this.props.button
        )),
      ),

      React.createElement(Divider)
    );
  }
}
},{"./divider":"../../../moduleWrappers/powercord/components/settings/divider.js"}],"../../../moduleWrappers/powercord/components/settings/category.js":[function(require,module,exports) {
const { React } = goosemodScope.webpackModules.common;

import FormItem from './formItem';

const FormClasses = goosemodScope.webpackModules.findByProps('title', 'dividerDefault');
const FormTextClasses = goosemodScope.webpackModules.findByProps('formText', 'placeholder');

const FormText = goosemodScope.webpackModules.findByDisplayName('FormText');

export default class Category extends React.PureComponent {
  render() {
    const children = this.props.opened ? this.props.children : [];

    return React.createElement(FormItem, {
        title: React.createElement('div', {},
          React.createElement('svg', {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            width: "24",
            height: "24",
            style: {
              transform: this.props.opened ? 'rotate(90deg)' : '',
              marginRight: '10px'
            }
          },
            React.createElement('path', {
              fill: 'var(--header-primary)',
              d: 'M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z'
            }),
          ),

          React.createElement('label', {
            class: FormClasses.title,
            style: {
              textTransform: 'none',
              display: 'inline',
              verticalAlign: 'top',
            }
          },
            this.props.name,

            React.createElement(FormText, {
              className: FormTextClasses.description,
              style: {
                marginLeft: '34px'
              }
            }, this.props.description)
          ),
        ),

        onClick: () => {
          this.props.onChange(!this.props.opened);
        }
      },

      ...children
    );
  }
}
},{"./formItem":"../../../moduleWrappers/powercord/components/settings/formItem.js"}],"../../../moduleWrappers/powercord/components/settings/switchItem.js":[function(require,module,exports) {
const { React } = goosemodScope.webpackModules.common;
const SwitchItem = goosemodScope.webpackModules.findByDisplayName('SwitchItem');

export default class SwitchItemContainer extends React.Component {
  constructor(props) {
    const originalHandler = props.onChange;
    props.onChange = (e) => {
      originalHandler(e);

      this.props.value = e;
      this.forceUpdate();
    };

    super(props);
  }

  render() {
    return React.createElement(SwitchItem, {
      ...this.props
    });
  }
}
},{}],"../../../moduleWrappers/powercord/components/settings/index.js":[function(require,module,exports) {
export { default as FormItem } from './formItem';
export { default as TextInput } from './textInput';
export { default as SliderInput } from './sliderInput';
export { default as Divider } from './divider';
export { default as ButtonItem } from './buttonItem';
export { default as Category } from './category';
export { default as SwitchItem } from './switchItem';
},{"./formItem":"../../../moduleWrappers/powercord/components/settings/formItem.js","./textInput":"../../../moduleWrappers/powercord/components/settings/textInput.js","./sliderInput":"../../../moduleWrappers/powercord/components/settings/sliderInput.js","./divider":"../../../moduleWrappers/powercord/components/settings/divider.js","./buttonItem":"../../../moduleWrappers/powercord/components/settings/buttonItem.js","./category":"../../../moduleWrappers/powercord/components/settings/category.js","./switchItem":"../../../moduleWrappers/powercord/components/settings/switchItem.js"}],"../../../moduleWrappers/powercord/webpack.js":[function(require,module,exports) {
const makeFinalFilter = (filter) => {
  if (Array.isArray(filter)) {
    const subs = filter;
    filter = (mod) => subs.every((s) => mod[s] || (mod.__proto__ && mod.__proto__[s]));
  }

  return filter;
};

module.exports = {
  getModule: (filter, retry, _forever) => { // Ignoring retry and forever arguments for basic implementation
    filter = makeFinalFilter(filter);

    const result = goosemodScope.webpackModules.find(filter);

    if (!retry) { // retry = false: sync, retry = true: async (returns Promise)
      return result;
    }

    return new Promise((res) => res(result));
  },

  getAllModules: (filter) => {
    filter = makeFinalFilter(filter);

    return goosemodScope.webpackModules.findAll(filter);
  },

  getModuleByDisplayName: (displayName) => {
    // Use custom find instead of GM's findByDisplayName as PC's is case insensitive
    return goosemodScope.webpackModules.find((x) => x.displayName && x.displayName.toLowerCase() === displayName.toLowerCase());
  },

  ...goosemodScope.webpackModules.common // Export common modules (eg: React)
};
},{}],"../../../moduleWrappers/powercord/injector.js":[function(require,module,exports) {
module.exports = goosemodScope.patcher; // GM's Patcher main functions (inject, uninject) have very similar syntax to PC's Injector as it was initially based on PC's design (however was later changed to use patch func)
},{}],"../../../moduleWrappers/powercord/util.js":[function(require,module,exports) {
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

module.exports = {
  sleep,

  waitFor: async (query) => {
    while (true) {
      const el = document.querySelector(query);
      if (el) return el;

      await sleep(5);
    }
  },

  ...goosemodScope.reactUtils // Export GooseMod React utils
};
},{}],"Components/Settings.jsx":[function(require,module,exports) {
import powercord from '_powercord/global';
require.cache['powercord/entities'] = require('powercord/entities');
require.cache['powercord/components/settings'] = require('powercord/components/settings');
require.cache['powercord/webpack'] = require('powercord/webpack');

/* eslint-disable indent */
/* Essential Packages */
const { React } = require('powercord/webpack');

/* Plugin Specific Packages */
// There are many more componenets available in "powercord/components/settings".
const {
    SwitchItem,
    TextInput,
    ColorPickerInput,
    Button,
    FormNotice,
    Card,
    Clickable,
    Switch,
    Spinner,
    FormTitle,
    HeaderBar,
    TabBar,
    Flex
} = require('powercord/components/settings');

module.exports = class Settings extends React.PureComponent {
    /**
     * Renderer, this is what's being executed on line 22 of index.js
     * The example here displays a toggle between displaying a cat or a dog.
     * */

    render() {
        return (
            <div>
                <SwitchItem
                    value={this.props.getSetting('showOwnerTag', true)}
                    onChange={() => {
                        this.props.toggleSetting('showOwnerTag', true);
                    }}
                    note="If disabled, owner tags won't show anywhere"
                >
                    Show Owner Tags
                </SwitchItem>
                <SwitchItem
                    value={this.props.getSetting('showAdminTags', true)}
                    onChange={() => {
                        this.props.toggleSetting('showAdminTags', true);
                    }}
                    note="If disabled, admin tags won't be shown anywhere. Admin tags look for the Administrator permission"
                >
                    Show Admin Tags
                </SwitchItem>
                <SwitchItem
                    value={this.props.getSetting('showModTags', true)}
                    onChange={() => {
                        this.props.toggleSetting('showModTags', true);
                    }}
                    note="If disabled, mod tags won't be shown anywhere. Mod tags look for kick/ban members and manage message permission"
                >
                    Show Mod Tags
                </SwitchItem>
                <SwitchItem
                    value={this.props.getSetting('showStaffTags', true)}
                    onChange={() => {
                        this.props.toggleSetting('showStaffTags', true);
                    }}
                    note="If disabled, staff tags won't be shown anywhere. Staff tags look for manage channels, manage server, or manage roles"
                >
                    Show Staff Tags
                </SwitchItem>
                <SwitchItem
                    value={this.props.getSetting('displayMessages', true)}
                    onChange={() => {
                        this.props.toggleSetting('displayMessages', true);
                    }}
                    note="If disabled, badges won't be shown in chat."
                >
                    Show in Chat
                </SwitchItem>

                <SwitchItem
                    value={this.props.getSetting('showCrowns', false)}
                    onChange={() => {
                        this.props.toggleSetting('showCrowns', false);
                    }}
                    note='If enabled, Crowns will be displayed instead of Tags'
                >
                    Show crowns instead of Tags
                </SwitchItem>

                <SwitchItem
                    value={this.props.getSetting('displayMembers', true)}
                    onChange={() => {
                        this.props.toggleSetting('displayMembers', true);
                    }}
                    note="If disabled, badges won't be shown in the member list."
                >
                    Show in Member List
                </SwitchItem>
                {/* <SwitchItem
                    value={this.props.getSetting('showForBots', true)}
                    onChange={() => {
                        this.props.toggleSetting('showForBots', true);
                    }}
                    note="If disabled, badges won't be shown anywhere for bots. (WIP)"
                >
                    Show for Bots
                </SwitchItem> */}

                <SwitchItem
                    value={this.props.getSetting('customTagColors', false)}
                    onChange={() => {
                        this.props.toggleSetting('customTagColors', false);
                    }}
                    note='Enable to select custom colors for tags. Enable to show settings.'
                >
                    Change Tag Colors
                </SwitchItem>

                {this.props.getSetting('customTagColors') && (
                    <>
                        <SwitchItem
                            value={this.props.getSetting(
                                'useCustomOwnerColor',
                                false
                            )}
                            onChange={() => {
                                this.props.toggleSetting('useCustomOwnerColor');
                            }}
                            note='If enabled, custom colors entered below will be used (if color box is empty, highest role color is used)'
                        >
                            Use Custom Owner Color
                        </SwitchItem>
                        {this.props.getSetting('useCustomOwnerColor') && (
                            <ColorPickerInput
                                note={
                                    "Overrides owner tags color. By default, uses the color of the user's highest role."
                                }
                                onChange={c =>
                                    this.props.updateSetting(
                                        'ownerTagColor',
                                        c ? this._numberToHex(c) : null
                                    )
                                }
                                default={parseInt('ED9F1B', 16)}
                                value={this.getColorSetting('ownerTagColor')}
                            >
                                Owner Tag Color
                            </ColorPickerInput>
                        )}
                        {this.props.getSetting('useCustomOwnerColor') && (
                            <SwitchItem
                                value={this.props.getSetting(
                                    'GroupOwnerColor',
                                    true
                                )}
                                onChange={() => {
                                    this.props.toggleSetting(
                                        'GroupOwnerColor',
                                        true
                                    );
                                }}
                                note='If enabled, Group Owner tag color will be same as Server Owner tag color'
                            >
                                Use Custom Group owner Color
                            </SwitchItem>
                        )}

                        <SwitchItem
                            value={this.props.getSetting(
                                'useCustomAdminColor',
                                false
                            )}
                            onChange={() => {
                                this.props.toggleSetting('useCustomAdminColor');
                            }}
                            note='If enabled, custom colors entered below will be used (if color box is empty, highest role color is used)'
                        >
                            Use Custom Admin Color
                        </SwitchItem>
                        {this.props.getSetting('useCustomAdminColor') && (
                            <ColorPickerInput
                                note={
                                    "Overrides admin tags color. By default, uses the color of the user's highest role."
                                }
                                onChange={c =>
                                    this.props.updateSetting(
                                        'adminTagColor',
                                        c ? this._numberToHex(c) : null
                                    )
                                }
                                default={parseInt('B4B4B4', 16)}
                                value={this.getColorSetting('adminTagColor')}
                            >
                                Admin Tag Color
                            </ColorPickerInput>
                        )}

                        <SwitchItem
                            value={this.props.getSetting(
                                'useCustomStaffColor',
                                false
                            )}
                            onChange={() => {
                                this.props.toggleSetting('useCustomStaffColor');
                            }}
                            note='If enabled, custom colors entered below will be used (if color box is empty, highest role color is used)'
                        >
                            Use Custom Staff Color
                        </SwitchItem>
                        {this.props.getSetting('useCustomStaffColor') && (
                            <ColorPickerInput
                                note={
                                    "Overrides staff tags color. By default, uses the color of the user's highest role."
                                }
                                onChange={c =>
                                    this.props.updateSetting(
                                        'staffTagColor',
                                        c ? this._numberToHex(c) : null
                                    )
                                }
                                default={parseInt('8D5C51', 16)}
                                value={this.getColorSetting('staffTagColor')}
                            >
                                Staff Tag Color
                            </ColorPickerInput>
                        )}

                        <SwitchItem
                            value={this.props.getSetting(
                                'useCustomModColor',
                                false
                            )}
                            onChange={() => {
                                this.props.toggleSetting('useCustomModColor');
                            }}
                            note='If enabled, custom colors entered below will be used (if color box is empty, highest role color is used)'
                        >
                            Use Custom Mod Color
                        </SwitchItem>
                        {this.props.getSetting('useCustomModColor') && (
                            <ColorPickerInput
                                note={
                                    "Overrides mod tags color. By default, uses the color of the user's highest role."
                                }
                                onChange={c =>
                                    this.props.updateSetting(
                                        'modTagColor',
                                        c ? this._numberToHex(c) : null
                                    )
                                }
                                default={parseInt('C8682E', 16)}
                                value={this.getColorSetting('modTagColor')}
                            >
                                Mod Tag Color
                            </ColorPickerInput>
                        )}
                    </>
                )}

                <SwitchItem
                    value={this.props.getSetting('customTagText', false)}
                    onChange={() => {
                        this.props.toggleSetting('customTagText');
                    }}
                    note='Enables customizing text of the tags. Enable to show settings.'
                >
                    Enable Custom Tag Text
                </SwitchItem>

                {this.props.getSetting('customTagText') && (
                    <>
                        <TextInput
                            note={
                                'Changing this will change the text shown in Owner Tags'
                            }
                            onChange={c =>
                                this.props.updateSetting('ownerTagText', c)
                            }
                            defaultValue={this.props.getSetting(
                                'ownerTagText',
                                'Owner'
                            )}
                            required={true}
                        >
                            Owner Tag Text
                        </TextInput>
                        <TextInput
                            note={
                                'Changing this will change the text shown in Admin Tags'
                            }
                            onChange={c =>
                                this.props.updateSetting('adminTagText', c)
                            }
                            defaultValue={this.props.getSetting(
                                'adminTagText',
                                'Admin'
                            )}
                            required={true}
                        >
                            Admin Tag Text
                        </TextInput>
                        <TextInput
                            note={
                                'Changing this will change the text shown in Mod Tags'
                            }
                            onChange={c =>
                                this.props.updateSetting('modTagText', c)
                            }
                            defaultValue={this.props.getSetting(
                                'modTagText',
                                'Mod'
                            )}
                            required={true}
                        >
                            Mod Tag Text
                        </TextInput>
                        <TextInput
                            note={
                                'Changing this will change the text shown in Staff Tags'
                            }
                            onChange={c =>
                                this.props.updateSetting('staffTagText', c)
                            }
                            defaultValue={this.props.getSetting(
                                'staffTagText',
                                'Staff'
                            )}
                            required={true}
                        >
                            Staff Tag Text
                        </TextInput>
                    </>
                )}

                <div style={{ color: 'white' }}>
                    <p>Owner: Is the owner of a Server or Group Chat</p>
                    <p>Admin: Has the Administrator permission</p>

                    <p>
                        Mod: Has one of the following permissions
                        <ul>
                            <li>- Kick Members</li>
                            <li>- Ban Members</li>
                            <li>- Manage Messages</li>
                        </ul>
                    </p>

                    <p>
                        Staff: Has one of the following permissions
                        <ul>
                            <li>- Manage Server</li>
                            <li>- Manage Channels</li>
                            <li>- Manage Roles</li>
                        </ul>
                    </p>
                </div>
            </div>
        );
    }

    getTagTextSetting(setting, def) {
        const string = this.props.getSetting(setting);
        return string ? string : def;
    }

    getColorSetting(setting) {
        const hex = this.props.getSetting(setting);
        return hex ? parseInt(hex.slice(1), 16) : 0;
    }

    _numberToHex(color) {
        const r = (color & 0xff0000) >>> 16;
        const g = (color & 0xff00) >>> 8;
        const b = color & 0xff;
        return `#${r.toString(16).padStart(2, '0')}${g
            .toString(16)
            .padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
    }
};

},{"_powercord/global":"../../../moduleWrappers/powercord/global/index.js","powercord/entities":"../../../moduleWrappers/powercord/entities.js","powercord/components/settings":"../../../moduleWrappers/powercord/components/settings/index.js","powercord/webpack":"../../../moduleWrappers/powercord/webpack.js"}],"Components/Tag.jsx":[function(require,module,exports) {
import powercord from '_powercord/global';
require.cache['powercord/entities'] = require('powercord/entities');
require.cache['powercord/components/settings'] = require('powercord/components/settings');
require.cache['powercord/webpack'] = require('powercord/webpack');

const { React } = require('powercord/webpack');

const userTypes = {
    NONE: 'None',
    STAFF: 'Staff',
    MOD: 'Mod',
    ADMIN: 'Admin',
    SOWNER: 'Server Owner',
    GOWNER: 'Group Owner'
};
const DEFAULT_TAG_TEXTS = {
    staff: 'Staff',
    mod: 'Mod',
    admin: 'Admin',
    owner: 'Owner'
};

class Tag extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = { userType: userTypes.NONE };
    }

    getTagText(tagType) {
        const customTextEnabled = this.props.settings.get(
            'customTagText',
            false
        );
        const tagText = this.props.settings.get(`${tagType}TagText`);
        return customTextEnabled ? tagText : DEFAULT_TAG_TEXTS[tagType];
    }

    render() {
        if (!this.props.className || !this.props.userType) return null;
        if (
            this.props.userType === userTypes.SOWNER ||
            this.props.userType === userTypes.GOWNER
        ) {
            return (
                <div className={`${this.props.className}`}>
                    {this.getTagText('owner')}
                </div>
            );
        } else if (this.props.userType === userTypes.ADMIN) {
            return (
                <div className={`${this.props.className}`}>
                    {this.getTagText('admin')}
                </div>
            );
        } else if (this.props.userType === userTypes.MOD) {
            return (
                <div className={`${this.props.className}`}>
                    {this.getTagText('mod')}
                </div>
            );
        } else if (this.props.userType === userTypes.STAFF) {
            return (
                <div className={`${this.props.className}`}>
                    {this.getTagText('staff')}
                </div>
            );
        }
        return null;
    }
}

Tag.cache = {};
module.exports = Tag;

},{"_powercord/global":"../../../moduleWrappers/powercord/global/index.js","powercord/entities":"../../../moduleWrappers/powercord/entities.js","powercord/components/settings":"../../../moduleWrappers/powercord/components/settings/index.js","powercord/webpack":"../../../moduleWrappers/powercord/webpack.js"}],"index.js":[function(require,module,exports) {
import powercord from '_powercord/global';
require.cache['powercord/entities'] = require('powercord/entities');
require.cache['powercord/components/settings'] = require('powercord/components/settings');
require.cache['powercord/webpack'] = require('powercord/webpack');

/* Essential Packages */
const { Plugin } = require('powercord/entities');
const { inject, uninject } = require('powercord/injector');
const { findInReactTree } = require('powercord/util');
const {
    React,
    getModule,
    getModuleByDisplayName,
    constants
} = require('powercord/webpack');

/* Plugin Specific Packages */
const { getChannel } = getModule(['getChannel'], false);
const { getChannelId } = getModule(['getLastSelectedChannelId'], false);
const { getGuild } = getModule(['getGuild'], false);
// const { getUser } = getModule(['getUser'], false);
const {
    default: { getMember }
} = getModule(m => m.default && m.default.getMember, false);

const Permissions = constants.Permissions;

const parseBitFieldPermissions = allowed => {
    const permissions = {};
    for (const perm of Object.keys(Permissions)) {
        if (!perm.startsWith('all')) {
            if (BigInt(allowed) & BigInt(Permissions[perm])) {
                permissions[perm] = true;
            }
        }
    }
    return permissions;
};

const userTypes = {
    NONE: 'None',
    STAFF: 'Staff',
    MOD: 'Mod',
    ADMIN: 'Admin',
    SOWNER: 'Server Owner',
    GOWNER: 'Group Owner'
};

const DEFAULT_TAG_TEXTS = {
    staff: 'Staff',
    mod: 'Mod',
    admin: 'Admin',
    owner: 'Owner'
};

function getPermissionsRaw(guild, user_id) {
    let permissions = 0n;

    const member = getMember(guild.id, user_id);

    if (guild && member) {
        if (guild.ownerId === user_id) {
            permissions = BigInt(Permissions.ADMINISTRATOR);
        } else {
            /* @everyone is not inlcuded in the member's roles */
            permissions |= BigInt(guild.roles[guild.id]?.permissions);

            for (const roleId of member.roles) {
                const rolePerms = guild.roles[roleId]?.permissions;
                if (rolePerms !== undefined) {
                    permissions |= BigInt(rolePerms);
                }
            }
        }

        /* If they have administrator they have every permission */
        if (
            (BigInt(permissions) & BigInt(Permissions.ADMINISTRATOR)) ===
            BigInt(Permissions.ADMINISTRATOR)
        ) {
            return Object.values(Permissions).reduce((a, b) => BigInt(a) | BigInt(b), 0n);
        }
    }

    return permissions;
}

const Tooltip = getModule(['TooltipContainer'], false).TooltipContainer;

/* Settings */
const Settings = require('./Components/Settings.jsx');
const Tag = require('./Components/Tag');

export default new class OwnerTag extends Plugin {
    /* Entry Point */
    async startPlugin() {
        this.loadStylesheet(`.ownertag {
    color: #fff;
}

.ownertag-list {
    color: #fff;
    margin-left: 5px;
}

.botText-1526X_ {
    color: inherit;
}

.ownerIcon-2NH9FM.icon-1A2_vz {
    display: none;
}

/* .ownertag.botTagRegular-2HEhHi:hover,
.ownertag-list.botTagRegular-2HEhHi:hover {
    background-color: transparent !important;
} */

.OwnerTag-13h21hk {
    display: inline;
}
`);
        /* Register Settings */
        powercord.api.settings.registerSettings(this.entityID, {
            category: this.entityID,
            label: this.manifest.name, // Label that appears in the settings menu
            render: Settings // The React component to render. In this case, the imported Settings file
        });

        this.injectMessages();
        this.injectMembers();
    }

    getTagText(tagType) {
        switch (tagType) {
            case userTypes.ADMIN:
                tagType = 'admin';
                break;
            case userTypes.GOWNER:
            case userTypes.SOWNER:
                tagType = 'owner';
                break;
            case userTypes.MOD:
                tagType = 'mod';
                break;
            case userTypes.STAFF:
                tagType = 'staff';
                break;
        }
        const customTextEnabled = this.settings.get('customTagText', false);
        const tagText = this.settings.get(`${tagType}TagText`);
        return customTextEnabled ? tagText : DEFAULT_TAG_TEXTS[tagType];
    }

    async injectMessages() {
        console.log('Injecting messages');
        const _this = this;
        const MessageTimestamp =
            getModule(['MessageTimestamp'], false) ||
            getModule(
                m =>
                    typeof (m?.__powercordOriginal_default || m.default) ===
                        'function' &&
                    (m?.__powercordOriginal_default || m.default)
                        .toString()
                        .includes('showTimestampOnHover'),
                false
            ); // credit to M|-|4r13y ツ#1051 for this snippet
        const botTagRegularClasses = await getModule(['botTagRegular']);
        const botTagCozyClasses = await getModule(['botTagCozy']);
        const remClasses = await getModule(['rem']);

        /**
         * The following injects a function into the specified module.
         * Parameter 1: The InjectionID, used to uninject.
         * 2: The module you want to inject into.
         * 3: The function name you want to target.
         * 4: The function you want to inject.
         */
        inject(
            'ownertag-messages',
            MessageTimestamp,
            'default',
            (args, res) => {
                if (!_this.settings.get('displayMessages', true)) {
                    return res;
                }
                const id = args[0].message.author.id;
                // const user = await getUser(id)
                // if (!user) return;
                // if (!_this.settings.get('showBots', true) && user.bot) {
                //     return;
                // }

                const header = findInReactTree(
                    res,
                    e =>
                        Array.isArray(e.props?.children) &&
                        e.props.children.find(c => c?.props?.message)
                );
                let data;

                const channel = getChannel(getChannelId());
                if (!channel) {
                    return;
                }
                const guild = getGuild(channel.guild_id);
                if (guild) {
                    const member = getMember(guild.id, id);
                    if (!member) {
                        return res;
                    }
                    const permissions = getPermissionsRaw(guild, id);
                    const parsedPermissions =
                        parseBitFieldPermissions(permissions);

                    if (guild.ownerId === id) {
                        // is guild owner
                        const tagColor = _this.settings.get(
                            'ownerTagColor',
                            '#ED9F1B'
                        );
                        const useCustomColor = _this.settings.get(
                            'useCustomOwnerColor'
                        );
                        data = {
                            userType: _this.settings.get('showOwnerTags', true)
                                ? userTypes.SOWNER
                                : userTypes.NONE,
                            color:
                                useCustomColor && tagColor
                                    ? tagColor
                                    : member.colorString,
                            textColor: _this._numberToTextColor(
                                useCustomColor && tagColor
                                    ? tagColor
                                    : member.colorString
                            )
                        };
                    } else if (parsedPermissions['ADMINISTRATOR']) {
                        const tagColor = _this.settings.get(
                            'adminTagColor',
                            '#B4B4B4'
                        );
                        const useCustomColor = _this.settings.get(
                            'useCustomAdminColor'
                        );
                        data = {
                            userType: _this.settings.get('showAdminTags', true)
                                ? userTypes.ADMIN
                                : userTypes.NONE,
                            color:
                                useCustomColor && tagColor
                                    ? tagColor
                                    : member.colorString,
                            textColor: _this._numberToTextColor(
                                useCustomColor && tagColor
                                    ? tagColor
                                    : member.colorString
                            )
                        };
                    } else if (
                        parsedPermissions['MANAGE_SERVER'] ||
                        parsedPermissions['MANAGE_CHANNELS'] ||
                        parsedPermissions['MANAGE_ROLES']
                    ) {
                        const tagColor = _this.settings.get(
                            'staffTagColor',
                            '#8D5C51'
                        );
                        const useCustomColor = _this.settings.get(
                            'useCustomStaffColor'
                        );
                        data = {
                            userType: _this.settings.get('showStaffTags', true)
                                ? userTypes.STAFF
                                : userTypes.NONE,
                            color:
                                useCustomColor && tagColor
                                    ? tagColor
                                    : member.colorString,
                            textColor: _this._numberToTextColor(
                                useCustomColor && tagColor
                                    ? tagColor
                                    : member.colorString
                            )
                        };
                    } else if (
                        parsedPermissions['KICK_MEMBERS'] ||
                        parsedPermissions['BAN_MEMBERS'] ||
                        parsedPermissions['MANAGE_MESSAGES']
                    ) {
                        const tagColor = _this.settings.get(
                            'modTagColor',
                            '#C8682E'
                        );
                        const useCustomColor =
                            _this.settings.get('useCustomModColor');
                        data = {
                            userType: _this.settings.get('showModTags', true)
                                ? userTypes.MOD
                                : userTypes.NONE,
                            color:
                                useCustomColor && tagColor
                                    ? tagColor
                                    : member.colorString,
                            textColor: _this._numberToTextColor(
                                useCustomColor && tagColor
                                    ? tagColor
                                    : member.colorString
                            )
                        };
                    }
                } else if (channel.type === 3 && channel.ownerId === id) {
                    // group channel
                    const tagColor = _this.settings.get(
                        'ownerTagColor',
                        '#ED9F1B'
                    );
                    const useCustomColor = _this.settings.get(
                        'useCustomOwnerColor'
                    );
                    data = {
                        userType: userTypes.GOWNER,
                        color: useCustomColor && tagColor ? tagColor : null
                    };
                }

                //const element = React.createElement(Tag, { userid: id });
                if (data && data.userType !== userTypes.NONE) {
                    // const textColor = _this.settings.get('textColor');
                    if (_this.settings.get('showCrowns', false)) {
                        const element = React.createElement(
                            Tooltip,
                            {
                                text: `${data.userType}`,
                                className: 'OwnerTag-13h21hk'
                            },
                            React.createElement(
                                'svg',
                                {
                                    className: `${botTagCozyClasses.botTagCozy} ${botTagRegularClasses.botTagRegular} ${remClasses.rem} ownertag`,
                                    'aria-label': `${data.userType}`,
                                    'aria-hidden': 'false',
                                    width: 14,
                                    height: 14,
                                    viewBox: '0 0 16 16',
                                    style: {
                                        color: data.color,
                                        backgroundColor: 'transparent'
                                    }
                                },
                                React.createElement('path', {
                                    fillRule: 'evenodd',
                                    clipRule: 'evenodd',
                                    d: 'M13.6572 5.42868C13.8879 5.29002 14.1806 5.30402 14.3973 5.46468C14.6133 5.62602 14.7119 5.90068 14.6473 6.16202L13.3139 11.4954C13.2393 11.7927 12.9726 12.0007 12.6666 12.0007H3.33325C3.02725 12.0007 2.76058 11.792 2.68592 11.4954L1.35258 6.16202C1.28792 5.90068 1.38658 5.62602 1.60258 5.46468C1.81992 5.30468 2.11192 5.29068 2.34325 5.42868L5.13192 7.10202L7.44592 3.63068C7.46173 3.60697 7.48377 3.5913 7.50588 3.57559C7.5192 3.56612 7.53255 3.55663 7.54458 3.54535L6.90258 2.90268C6.77325 2.77335 6.77325 2.56068 6.90258 2.43135L7.76458 1.56935C7.89392 1.44002 8.10658 1.44002 8.23592 1.56935L9.09792 2.43135C9.22725 2.56068 9.22725 2.77335 9.09792 2.90268L8.45592 3.54535C8.46794 3.55686 8.48154 3.56651 8.49516 3.57618C8.51703 3.5917 8.53897 3.60727 8.55458 3.63068L10.8686 7.10202L13.6572 5.42868ZM2.66667 12.6673H13.3333V14.0007H2.66667V12.6673Z',
                                    fill: 'currentColor',
                                    'aria-hidden': 'true'
                                })
                            )
                        );
                        header.props.children.push(element);
                    } else {
                        const element = React.createElement(
                            'span',
                            {
                                className: `${botTagCozyClasses.botTagCozy} ${botTagRegularClasses.botTagRegular} ${remClasses.rem} ownertag`,
                                style: {
                                    backgroundColor: data.color,
                                    color: data.textColor
                                }
                            },
                            React.createElement(Tag, {
                                className: botTagRegularClasses.botText,
                                userType: data.userType,
                                settings: _this.settings
                            })
                        );
                        header.props.children.push(element);
                    }
                }

                return res;
            }
        );
    }

    async injectMembers() {
        console.log('Injecting members');
        const _this = this;
        const MemberListItem = await getModuleByDisplayName('MemberListItem');
        const botTagRegularClasses = await getModule(['botTagRegular']);
        const remClasses = await getModule(['rem']);

        inject(
            'ownertag-members',
            MemberListItem.prototype,
            'renderDecorators',
            function (args, res) {
                if (!_this.settings.get('displayMembers', true)) {
                    return res;
                }

                const id = this.props.user.id;
                // const user = getUser(id);
                // if (!user) return;
                // if (!_this.settings.get('showBots', true) && user.bot) {
                //     return;
                // }
                let data;

                const guild = getGuild(this.props.channel.guild_id);
                if (guild) {
                    const member = getMember(guild.id, id);
                    const permissions = getPermissionsRaw(guild, id);
                    const parsedPermissions =
                        parseBitFieldPermissions(permissions);

                    if (guild.ownerId === id) {
                        // is guild owner
                        const tagColor = _this.settings.get(
                            'ownerTagColor',
                            '#ED9F1B'
                        );
                        const useCustomColor = _this.settings.get(
                            'useCustomOwnerColor'
                        );
                        data = {
                            userType: _this.settings.get('showOwnerTags', true)
                                ? userTypes.SOWNER
                                : userTypes.NONE,
                            color:
                                useCustomColor && tagColor
                                    ? tagColor
                                    : member.colorString,
                            textColor: _this._numberToTextColor(
                                useCustomColor && tagColor
                                    ? tagColor
                                    : member.colorString
                            )
                        };
                    } else if (parsedPermissions['ADMINISTRATOR']) {
                        const tagColor = _this.settings.get(
                            'adminTagColor',
                            '#B4B4B4'
                        );
                        const useCustomColor = _this.settings.get(
                            'useCustomAdminColor'
                        );
                        data = {
                            userType: _this.settings.get('showAdminTags', true)
                                ? userTypes.ADMIN
                                : userTypes.NONE,
                            color:
                                useCustomColor && tagColor
                                    ? tagColor
                                    : member.colorString,
                            textColor: _this._numberToTextColor(
                                useCustomColor && tagColor
                                    ? tagColor
                                    : member.colorString
                            )
                        };
                    } else if (
                        parsedPermissions['MANAGE_SERVER'] ||
                        parsedPermissions['MANAGE_CHANNELS'] ||
                        parsedPermissions['MANAGE_ROLES']
                    ) {
                        const tagColor = _this.settings.get(
                            'staffTagColor',
                            '#8D5C51'
                        );
                        const useCustomColor = _this.settings.get(
                            'useCustomStaffColor'
                        );
                        data = {
                            userType: _this.settings.get('showStaffTags', true)
                                ? userTypes.STAFF
                                : userTypes.NONE,
                            color:
                                useCustomColor && tagColor
                                    ? tagColor
                                    : member.colorString,
                            textColor: _this._numberToTextColor(
                                useCustomColor && tagColor
                                    ? tagColor
                                    : member.colorString
                            )
                        };
                    } else if (
                        parsedPermissions['KICK_MEMBERS'] ||
                        parsedPermissions['BAN_MEMBERS'] ||
                        parsedPermissions['MANAGE_MESSAGES']
                    ) {
                        const tagColor = _this.settings.get(
                            'modTagColor',
                            '#C8682E'
                        );
                        const useCustomColor =
                            _this.settings.get('useCustomModColor');
                        data = {
                            userType: _this.settings.get('showModTags', true)
                                ? userTypes.MOD
                                : userTypes.NONE,
                            color:
                                useCustomColor && tagColor
                                    ? tagColor
                                    : member.colorString,
                            textColor: _this._numberToTextColor(
                                useCustomColor && tagColor
                                    ? tagColor
                                    : member.colorString
                            )
                        };
                    }
                } else if (
                    this.props.channel.type === 3 &&
                    this.props.channel.ownerId === id
                ) {
                    // group channel
                    const tagColor = _this.settings.get(
                        'ownerTagColor',
                        '#ED9F1B'
                    );
                    const useCustomColor = _this.settings.get(
                        'useCustomOwnerColor'
                    );
                    data = {
                        userType: userTypes.GOWNER,
                        color: useCustomColor && tagColor ? tagColor : null
                    };
                }

                if (data && data.userType !== userTypes.NONE) {
                    if (_this.settings.get('showCrowns', false)) {
                        const element = React.createElement(
                            Tooltip,
                            {
                                text: _this.getTagText(data.userType),
                                className: 'OwnerTag-13h21hk'
                            },
                            React.createElement(
                                'svg',
                                {
                                    className: `${remClasses.botTag} ${botTagRegularClasses.botTagRegular} ${remClasses.px} ownertag-list`,
                                    'aria-label': `${data.userType}`,
                                    'aria-hidden': 'false',
                                    width: 14,
                                    height: 14,
                                    viewBox: '0 0 16 16',
                                    style: {
                                        color: data.color,
                                        backgroundColor: 'transparent'
                                    }
                                },
                                React.createElement('path', {
                                    fillRule: 'evenodd',
                                    clipRule: 'evenodd',
                                    d: 'M13.6572 5.42868C13.8879 5.29002 14.1806 5.30402 14.3973 5.46468C14.6133 5.62602 14.7119 5.90068 14.6473 6.16202L13.3139 11.4954C13.2393 11.7927 12.9726 12.0007 12.6666 12.0007H3.33325C3.02725 12.0007 2.76058 11.792 2.68592 11.4954L1.35258 6.16202C1.28792 5.90068 1.38658 5.62602 1.60258 5.46468C1.81992 5.30468 2.11192 5.29068 2.34325 5.42868L5.13192 7.10202L7.44592 3.63068C7.46173 3.60697 7.48377 3.5913 7.50588 3.57559C7.5192 3.56612 7.53255 3.55663 7.54458 3.54535L6.90258 2.90268C6.77325 2.77335 6.77325 2.56068 6.90258 2.43135L7.76458 1.56935C7.89392 1.44002 8.10658 1.44002 8.23592 1.56935L9.09792 2.43135C9.22725 2.56068 9.22725 2.77335 9.09792 2.90268L8.45592 3.54535C8.46794 3.55686 8.48154 3.56651 8.49516 3.57618C8.51703 3.5917 8.53897 3.60727 8.55458 3.63068L10.8686 7.10202L13.6572 5.42868ZM2.66667 12.6673H13.3333V14.0007H2.66667V12.6673Z',
                                    fill: 'currentColor',
                                    'aria-hidden': 'true'
                                })
                            )
                        );
                        const size = res.props.children.length;
                        res.props.children[size] = res.props.children[size - 1];
                        res.props.children[size - 1] = element;
                    } else {
                        const element = React.createElement(
                            'span',
                            {
                                className: `${remClasses.botTag} ${botTagRegularClasses.botTagRegular} ${remClasses.px} ownertag-list`,
                                style: {
                                    backgroundColor: data.color,
                                    color: data.textColor
                                }
                            },
                            React.createElement(Tag, {
                                className: botTagRegularClasses.botText,
                                userType: data.userType,
                                settings: _this.settings
                            })
                        );
                        const size = res.props.children.length;
                        res.props.children[size] = res.props.children[size - 1];
                        res.props.children[size - 1] = element;
                    }
                    // res.props.children.unshift(element);
                }

                return res;
            }
        );
    }

    pluginWillUnload() {
        // When the plugin is unloaded, we need to unregister/uninject anything we've registered/injected.
        powercord.api.settings.unregisterSettings(this.entityID);
        uninject('ownertag-members');
        uninject('ownertag-messages');
    }

    /*
     * Original code from https://github.com/powercord-community/rolecolor-everywhere.
     */
    _numberToTextColor(color) {
        if (!color) {
            return;
        } // prevents errors from null colors which come from roles with no colors
        const colorInt = parseInt(color.slice(1), 16);
        const r = (colorInt & 0xff0000) >>> 16;
        const g = (colorInt & 0xff00) >>> 8;
        const b = colorInt & 0xff;
        const bgDelta = r * 0.299 + g * 0.587 + b * 0.114;
        return 255 - bgDelta < 105 ? '#000000' : '#ffffff';
    }
};

},{"_powercord/global":"../../../moduleWrappers/powercord/global/index.js","powercord/entities":"../../../moduleWrappers/powercord/entities.js","powercord/components/settings":"../../../moduleWrappers/powercord/components/settings/index.js","powercord/webpack":"../../../moduleWrappers/powercord/webpack.js","powercord/injector":"../../../moduleWrappers/powercord/injector.js","powercord/util":"../../../moduleWrappers/powercord/util.js","./Components/Settings.jsx":"Components/Settings.jsx","./Components/Tag":"Components/Tag.jsx"}]},{},["index.js"], null);parcelRequire('index.js').default