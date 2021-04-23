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