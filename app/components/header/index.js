import React, { Component } from 'react';
import { View, Image, Text, Animated } from 'react-native';
import PropTypes from 'prop-types';
import HeaderButton from './../headerButton';

import styles from './styles';

class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
      buttonOpacity: new Animated.Value(1)
    };
  }
  
  onLeftButtonClicked(event) {
    if (!this.props.onLeftButtonClicked) {
      return;
    }
    this.props.onLeftButtonClicked(event);
  }

  onRightButtonClicked(event) {
    if (!this.props.onRightButtonClicked) {
      return;
    }
    this.props.onRightButtonClicked(event);
  }

  animatedHideButtons(duration) {
    if (this.leftButton) {
      this.leftButton.animatedHideButton(duration);
    }
    
    if (this.rightButton) {
      this.rightButton.animatedHideButton(duration);
    }
  }

  animatedShowButtons(duration) {
    if (this.leftButton) {
      this.leftButton.animatedShowButton(duration);
    }
    
    if (this.rightButton) {
      this.rightButton.animatedShowButton(duration);
    }
  }

  renderHeaderText() {
    if (this.props.logo) {
      return (
        <Image
          source={ this.props.logo }
          style={ styles.image } />
        );
    } else {
      if (this.props.title) {
        return (
          <Text style={ styles.title }>
            { this.props.title }
          </Text>
        );
      }
      else {
        return (
          <View style={ {flex: 1} }>
            { this.props.children }
          </View>
        );
      }
    }
  }

  renderLeftButton() {
    if (!this.props.leftImage) {
      return ( <View style={ [styles.buttonOverlay] } /> );
    }

    return (
      <HeaderButton
        ref={ (button) => {
            this.leftButton = button;
          } }
        buttonOverlayStyle={ this.props.leftButtonOverlayStyle }
        buttonStyle={ this.props.leftButtonStyle }
        image={ this.props.leftImage }
        onButtonClicked={ this.onLeftButtonClicked.bind(this) }/>
      );
  }

  renderRightButton() {
    if (!this.props.rightImage) {
      return ( <View style={ [styles.buttonOverlay] } /> );
    }

    return (
      <HeaderButton
        ref={ (button) => {
            this.rightButton = button;
          } }
        buttonOverlayStyle={ this.props.rightButtonOverlayStyle }
        buttonStyle={ this.props.rightButtonStyle }
        image={ this.props.rightImage }
        onButtonClicked={ this.onRightButtonClicked.bind(this) }/>
      );
  }

  render() {
    return (
      <View style={ [styles.header, this.props.headerStyle] }>
        { this.renderLeftButton() }
        { this.renderHeaderText() }
        { this.renderRightButton() }
      </View>
      );
  }
}

Header.propTypes = {
  logo: PropTypes.number,
  title: PropTypes.string,
  leftImage: PropTypes.number,
  leftButtonOverlayStyle: PropTypes.number,
  leftButtonStyle: PropTypes.number,
  onLeftButtonClicked: PropTypes.func,
  rightImage: PropTypes.number,
  rightButtonOverlayStyle: PropTypes.number,
  rightButtonStyle: PropTypes.number,
  onRightButtonClicked: PropTypes.func
};

export default Header;
