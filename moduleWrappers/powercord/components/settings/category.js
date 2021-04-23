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