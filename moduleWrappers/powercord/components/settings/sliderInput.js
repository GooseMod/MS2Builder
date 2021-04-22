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