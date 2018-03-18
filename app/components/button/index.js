import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import TouchableElement from './../touchableElement';
import Loader from './../loader';
import PropTypes from 'prop-types';

import styles from './styles';

export default class Button extends Component {
  _onPress(event) {
    if (this.props.showMask && !this.props.onPress) {
      return;
    }
    this.props.onPress(event);
  }

  getButton() {
    if (this.props.showMask) {
      return (
        <View style={ [styles.button, this.props.buttonStyle] }>
          <ActivityIndicator/>
        </View>
      );
    }

    if (this.props.isDisabled) {
      return (
        <View style={ [styles.button, this.props.buttonStyle] }>
          { this.getButtonText() }
        </View>
      );
    }

    return (
      <TouchableElement
        style={ [styles.button, this.props.buttonStyle] }
        onPress={ this._onPress.bind(this) }>
        { this.getButtonText() }
      </TouchableElement>
    );
  }

  getButtonText() {
    return (
      <Text style={ [styles.text, this.props.textStyle] }>
          { this.props.text }
        </Text>
    );
  }

  render() {
    return (
      <View style={ [styles.buttonContainer, this.props.buttonContainerStyle] }>
        { this.getButton() }
      </View>
      );
  }
}

Button.defaultProps = {
  showMask: false,
  isDisabled: false
};

Button.propTypes = {
  buttonContainerStyle: PropTypes.number,
  textStyle: PropTypes.number,
  onPress: PropTypes.func,
  text: PropTypes.string,
  showMask: PropTypes.bool,
  isDisabled: PropTypes.bool
};