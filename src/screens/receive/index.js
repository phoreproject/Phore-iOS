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
  Text
} from "native-base";
import styles from "./styles";
import QRCode from 'react-native-qrcode';

class Receive extends Component {
  render() {
    const data = {
      pkeystring: 'PQaCDkkHXDVkbeWtoq1guLcvcmypsEXWJC',
    };
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>My Address</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="more" />
            </Button>
          </Right>
        </Header>

        <Content>

          <QRCode
            value={data.pkeystring}
            size={200}
            bgColor='black'
            fgColor='white' />
          
          <Text style={{alignSelf: 'center'}}>{data.pkeystring}</Text>
          
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
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
