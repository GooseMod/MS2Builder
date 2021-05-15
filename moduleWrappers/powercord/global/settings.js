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