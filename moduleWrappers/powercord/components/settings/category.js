const { React } = goosemodScope.webpackModules.common;

import FormItem from './formItem';


export default class Category extends React.PureComponent {
  render() {
    const children = this.props.opened ? this.props.children : [];

    return React.createElement(FormItem, {
        title: React.createElement('div', {

          },
          React.createElement('svg', {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            className: this.props.opened ? "opened" : ""
          },
          React.createElement('path', {
            fill: 'var(--header-primary)',
            d: 'M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z'
          })
        )),

        note: this.props.description
      },

      ...children
    );
  }
}