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