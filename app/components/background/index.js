import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

class Background extends Component {
  render() {
    return (
      <View style={ [styles.background, this.props.backgroundStyles] } />
      );
  }
}

Background.propTypes = {
  backgroundStyles: PropTypes.number
};

export default Background;
