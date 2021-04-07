import * as Settings from '../util/settings';

export const registerSettings = (id, { label, render, category }) => {
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