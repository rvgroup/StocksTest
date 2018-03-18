import React, { Component } from 'react';
import { Image, Animated, View } from 'react-native';
import PropTypes from 'prop-types';
import TouchableElement from './../touchableElement';
import * as assetsImage from './../../assets/images';

import styles from './styles';

export default class HeaderButton extends Component {

    constructor(props) {
        super(props);

        this.state = {
            buttonOpacity: new Animated.Value(1)
        };
    }

    animatedHideButton(duration) {
        Animated.timing(
            this.state.buttonOpacity,
            {
                toValue: 0,
                duration: duration
            }
        ).start();
    }

    animatedShowButton(duration) {
        Animated.timing(
            this.state.buttonOpacity,
            {
                toValue: 1,
                duration: duration
            }
        ).start();
    }

    onButtonClicked(event) {
        if (!this.props.onButtonClicked) {
            return;
        }
        this.props.onButtonClicked(event);
    }

    render() {
        return (
            <TouchableElement
                style={ [styles.buttonOverlay, this.props.buttonOverlayStyle] }
                onPress={ this.props.onButtonClicked }>
                <Animated.View style={ [{ opacity: this.state.buttonOpacity },  this.props.buttonStyle] }>
                    <Image source={ this.props.image } />
                </Animated.View>
            </TouchableElement>
        );
    }
}

HeaderButton.propTypes = {
  image: PropTypes.number,
  buttonOverlayStyle: PropTypes.number,
  buttonStyle: PropTypes.number,
  onButtonClicked: PropTypes.func
};