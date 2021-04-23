const { React } = goosemodScope.webpackModules.common;

import FormItem from './formItem';

const OriginalButton = goosemod.webpackModules.findByProps('Sizes', 'Colors', 'Looks', 'DropdownSizes');

const Tooltip = goosemodScope.webpackModules.findByDisplayName('Tooltip');


export default class ButtonItem extends React.PureComponent {
  render() {
    const title = this.props.children;
    delete this.props.children;

    return React.createElement(FormItem, {
        title,
        note: this.props.note,
        required: this.props.required
      },

      React.createElement(Tooltip, {
        text: this.props.tooltipText,
        position: this.props.tooltipPosition,
        shouldShow: this.props.tooltipText !== ''
      }, () => React.createElement(OriginalButton,
        {
          color: this.props.success ? OriginalButton.Colors.GREEN : (this.props.color || OriginalButton.Colors.BRAND),
          disabled: this.props.disabled,
          onClick: () => this.props.onClick(),
          style: { marginLeft: 5 }
        },
        this.props.button
      ))
    );
  }
}