import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

export default class TouchableElement extends Component {
  _onPress(event) {
    if (!this.props.onPress) {
      return;
    }
    this.props.onPress(event);
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={ this._onPress.bind(this) }>
          <View style={ this.props.style }>
            { this.props.children }
          </View>
        </TouchableOpacity>
      </View>
      );
  }
}

TouchableElement.propTypes = {
  onPress: PropTypes.func
};
