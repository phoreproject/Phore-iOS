import React, {
  Component
} from 'react';
import {
  View,
  Text
} from 'react-native';
import styles from './styles';
import Service from './addressService';
 
class addressItem extends Component {
  render() {
    let obj = this.props.obj != null ? this.props.obj : addressService.find(this.props.address);
    return (
      <view style="{styles.listItem}">
        <text>{obj.label}</text>
        <text>{obj.address}</text>
      </view>
    );
  }
}
 
module.exports = addressItem;