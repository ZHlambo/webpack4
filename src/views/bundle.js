import React from 'react';
import PropTypes from 'prop-types';

export default class Bundle extends React.Component {
  state = {
    // short for "module" but that's a keyword in js, so "mod"
    mod: null
  };

  componentWillMount() {
    this.load(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.load !== this.props.load) {
      console.log(nextProps.load);
      this.load(nextProps);
    }
  }

  load(props) {
    this.setState({mod: null});
    props.load(mod => {
      console.log(mod);
      this.setState({
        // handle both es imports and cjs
        mod: mod.default
          ? mod.default
          : mod
      });
    });
  }

  render() {
    if (!this.state.mod) {
      return <div>asdfasdf</div>;
      // return <Loading loading={true} />;
    } else {
      return this.props.children(this.state.mod);
    }
  }
}

Bundle.propTypes = {
  load: PropTypes.func,
  children: PropTypes.func
};
