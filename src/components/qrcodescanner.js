import React, { Component } from 'react';
import {Modal, Text, TouchableHighlight, View} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

export default class ScanScreen extends Component {
	this.state = {
		modalVisible: false,
		sendingAddress: ''
	}
  onSuccess(e) {
    Linking
      .openURL(e.data)
      .catch(err => console.error('An error occured', err));
  }

  render() {


    return (
    	 <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22}}>
            <View>
              <Text>Hello World!</Text>
			<QRCodeScanner
        		onRead={ ( e ) => this.setState({ sendingAddress: e.data }, this.setModalVisible(!this.state.modalVisible))} />
        
              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>


        <Button onPress={() => this.setState( { modalVisible: visible})} />

  }

