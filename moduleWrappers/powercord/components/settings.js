const { React } = goosemodScope.webpackModules.common;

const OriginalTextInput = goosemodScope.webpackModules.findByDisplayName('TextInput');

const OriginalFormItem = goosemodScope.webpackModules.findByDisplayName('FormItem');
const OriginalFormText = goosemodScope.webpackModules.findByDisplayName('FormText');

const Flex = goosemodScope.webpackModules.findByDisplayName('Flex');
const Margins = goosemodScope.webpackModules.findByProps('marginTop20', 'marginBottom20');
const FormClasses = goosemodScope.webpackModules.findByProps('formText', 'description');

const FormDivider = goosemodScope.webpackModules.findByDisplayName('FormDivider');
const SettingsFormClasses = goosemodScope.webpackModules.findByProps('dividerDefault', 'titleDefault');

class Divider extends React.PureComponent {
  render() {
    return React.createElement(FormDivider, {
      className: SettingsFormClasses.dividerDefault
    });
  }
}

class FormItem extends React.PureComponent {
  render() {
    return React.createElement(OriginalFormItem, {
        title: this.props.title,
        required: this.props.required,
        className: [Flex.Direction.VERTICAL, Flex.Justify.START, Flex.Align.STRETCH, Flex.Wrap.NO_WRAP, Margins.marginBottom20].join(' ')
      },

      this.props.children,

      this.props.note && React.createElement(OriginalFormText, {
        className: FormClasses.description + (this.props.noteHasMargin ? (' ' + Margins.marginTop8) : '')
      }, this.props.note),

      React.createElement(Divider)
    );
  }
}

class TextInput extends React.PureComponent {
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

module.exports = {
  FormItem,
  TextInput
};
