import React from 'react';
import { Loader } from 'semantic-ui-react';

export default function asyncComponent(importComponent) {
  class AsyncComponent extends React.Component {
    state = {
      component: null
    };

    async componentDidMount() {
      const { default: component } = await importComponent();

      this.setState({
        component: component
      });
    }

    render() {
      const Component = this.state.component;

      return Component ? <Component {...this.props} /> : <Loader />;
    }
  }

  return AsyncComponent;
}
