const { React } = goosemodScope.webpackModules.common;
const SwitchItem = goosemodScope.webpackModules.findByDisplayName('SwitchItem');

export default class SwitchItemContainer extends React.Component {
  constructor(props) {
    const originalHandler = props.onChange;
    props.onChange = (e) => {
      originalHandler(e);

      this.props.value = e;
      this.forceUpdate();
    };

    super(props);
  }

  render() {
    return React.createElement(SwitchItem, {
      ...this.props
    });
  }
}