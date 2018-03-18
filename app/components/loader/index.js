import React, { Component } from 'react';
import { Animated, Easing, View } from 'react-native';
import * as assetsImage from './../../assets/images';

import styles from './styles';

class Loader extends Component {

  constructor(props) {
    super(props);

    this.state = {
      angle: new Animated.Value(0)
    };
  }

  componentDidMount() {
    this._animate();
  }

  _animate() {
    this.state.angle.setValue(0);
    Animated.timing(this.state.angle, {
      toValue: 360,
      duration: 1000,
      easing: Easing.linear
    }).start(this._animate.bind(this));
  }

  componentWillUnmount() {
    this.state.angle.stopAnimation();
  }

  render() {
    return (
      <View style={ styles.background }>
        <Animated.Image
          source={ assetsImage.elementLoader }
          style={ { transform: [{ rotate: this.state.angle.interpolate({ inputRange: [0, 360], outputRange: ['0deg', '360deg'] }) }] } } />
      </View>
      );
  }
}

export default Loader;