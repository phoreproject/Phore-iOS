import React, { Component } from "react";
import { View } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Item,
  Label,
  Input,
  Body,
  Left,
  Right,
  Icon,
  Form,
  Text,
  Card
} from "native-base";
import styles from "./styles";
import QRCode from 'react-native-qrcode';
import constants from '../../components/constants';

class Receive extends Component {
  render() {
    const data = {
      pkeystring: constants.recaddress,
    };
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" style={{ color: 'white'}}/>
            </Button>
          </Left>
          <Body>
            <Title style={{ color: 'white'}}>My Address</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="more" style={{ color: 'white'}}/>
            </Button>
          </Right>
        </Header>

        <Content>

       <View
            style={{ flexDirection: "row", justifyContent: "center", marginTop: 25 }}
          >

          <QRCode
            value={data.pkeystring}
            size={200}
            bgColor='black'
            fgColor='white' />
         
         </View>
          
          <Text style={{alignSelf: 'center', marginTop: 8}}>{data.pkeystring}</Text>




          <View
            style={{ flexDirection: "row", justifyContent: "center", marginTop: 25 }}
          >
            <Button bordered success style={styles.mb15}>
            <Text>Save</Text>
          </Button>
            <Button bordered success style={styles.mb15}>
            <Text>Share</Text>
          </Button>
          </View>

         


          
        </Content>
      </Container>
    );
  }
}

export default Receive;
