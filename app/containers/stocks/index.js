import React, { Component } from 'react';
import { View, ListView, RefreshControl, Text, ScrollView, DeviceEventEmitter } from 'react-native';
import { Background, Header } from './../../components';
import * as assetsImage from './../../assets/images';
import { formatNumber } from './../../common/utils'

import baseStyles from './../../assets/styles/base';
import styles from './styles';

class Stocks extends Component {

  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);

    this.state = {
      refreshing: false,
      stocks: []
    };
  }

  componentDidMount() {
    DeviceEventEmitter.addListener('stocksBeforeLoad', this.onStocksBeforeLoad.bind(this));
    DeviceEventEmitter.addListener('stocksChanged', this.onStocksChange.bind(this));

    this.props.screenProps.actions.startAutoRefresh();

    this.onRefresh();
  }

  componentWillUnmount() {
      DeviceEventEmitter.removeListener('stocksBeforeLoad', this.onStocksBeforeLoad.bind(this));
      DeviceEventEmitter.removeListener('stocksChanged', this.onStocksChange.bind(this));

      this.props.screenProps.actions.stopAutoRefresh();
  }

  onStocksBeforeLoad() {
    this.setState({refreshing: true});
  }

  onStocksChange() {
    this.setState({ refreshing: false, stocks: this.props.screenProps.stocks.data });
  }

  onRefresh() {
    this.props.screenProps.actions.getStocks();
  }

  renderStocks() {
    let items = this.state.stocks;

    if (!items || !items.length) {
      return null;
    }

    const ds = new ListView.DataSource({
      rowHasChanged: () => true
    });

    let dataSource = ds.cloneWithRows(items);
    
    return (
      <ListView
          contentContainerStyle={ styles.scroll }
          dataSource={ dataSource }
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.onRefresh.bind(this)}
            />
          }
          renderRow={ (item, sectionId, itemId) => {
              let rowNum = parseInt(itemId);
              let rowStyles = [styles.row];

              if (rowNum % 2) {
                rowStyles.push(styles.alternativeRow);
              }

              return (
                <View style={rowStyles}>
                  <Text style={[styles.cell1, styles.textStyle]} numberOfLines={1}>
                    { item.name }
                  </Text>
                  <Text style={[styles.cell2, styles.textStyle]} numberOfLines={1}>
                    { formatNumber(item.volume, 0) }
                  </Text>
                  <Text style={[styles.cell3, styles.textStyle]} numberOfLines={1}>
                    { formatNumber(item.price.amount, 2) }
                  </Text>
                </View>
              )
          } } />
    );
  }

  render() {
    return (
      <View style={ baseStyles.flex }>
        <Header
          title='АКЦИИ'
          rightImage={ assetsImage.buttonRefreh } 
          onRightButtonClicked={ this.onRefresh.bind(this) }/>

        <View style={[styles.container, styles.headerRow]}>
          <Text style={[styles.cell1, styles.textStyle, styles.headerCell]} numberOfLines={1}>
            Название
          </Text>
          <Text style={[styles.cell2, styles.textStyle, styles.headerCell]} numberOfLines={1}>
            Цена
          </Text>
          <Text style={[styles.cell3, styles.textStyle, styles.headerCell]} numberOfLines={1}>
            Количество
          </Text>
        </View>

        <ScrollView style={styles.container}>
          { this.renderStocks() }
        </ScrollView>

        <Background backgroundStyles={ styles.backgroundStyle } />
      </View>
      );
  }
}

export default Stocks;
