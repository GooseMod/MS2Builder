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