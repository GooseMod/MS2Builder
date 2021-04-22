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