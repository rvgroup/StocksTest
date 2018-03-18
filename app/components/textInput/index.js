import React, { Component } from 'react';
import { TextInput as TextInputSrc } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

export default class TextInput extends Component {
  
  _onChangeText(event) {
    let onChangeTextFn = this.props.onChangeText;

    if (onChangeTextFn) {
      let delay = this.props.onChangeTextDelay;

      if (delay != null) {
        if (this.timer) {
          clearTimeout(this.timer);
        }

        this.timer = setTimeout(
            () => {
              onChangeTextFn(event);
            },
            delay
        );
      } else {
        onChangeTextFn(event);
      }
    }
  }

  render() {
    return (
      <TextInputSrc
          { ...this.props }
          style={ [styles.textInput, this.props.textStyle] }
          onChangeText={ this._onChangeText.bind(this) }
          autoCorrect={ false }
          autoCapitalize={ 'none' }
          underlineColorAndroid='transparent' />
      );
  }
}

TextInput.propTypes = {
  onChangeTextDelay: PropTypes.number
};