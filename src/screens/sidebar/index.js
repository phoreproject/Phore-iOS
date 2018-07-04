import React, { Component } from "react";
import { Image } from "react-native";
import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left,
  Right,
  Badge
} from "native-base";
import styles from "./style";

const drawerCover = require("../../../assets/drawer-cover.png");
const drawerImage = require("../../../assets/phorelogo.png");
const datas = [
  
   {
    name: "Wallet",
    route: "MyWallet",
    icon: "folder",
    bg: "#00d188"
  },
  {
    name: "Send",
    route: "Send",
    icon: "paper-plane",
    bg: "#00d188"
  },
  {
    name: "Receive",
    route: "Receive",
    icon: "arrow-dropdown-circle",
    bg: "#00d188",
    icontype: Icon
  },
  {
    name: "Settings",
    route: "SettingsList",
    icon: "settings",
    bg: "#C5F442",
    icontype: Icon
  },
  {
    name: "Address Book",
    route: "AddressBook",
    icon: "bookmarks",
    bg: "#C5F442",
    icontype: Icon
  },
 
];

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4
    };
  }

  render() {
    return (
      <Container>
        <Content
          bounces={false}
          style={{ flex: 1, backgroundColor: "#fff", top: -1 }}
        >
          <Image source={drawerCover} style={styles.drawerCover} />
          <Image square style={styles.drawerImage} source={drawerImage} />

          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem
                button
                noBorder
                onPress={() => this.props.navigation.navigate(data.route)}
              >
                <Left>
                  <Icon
                    active
                    name={data.icon}
                    style={{ color: "#777", fontSize: 26, width: 30 }}
                  />
                  <Text style={styles.text}>
                    {data.name}
                  </Text>
                </Left>
                {data.types &&
                  <Right style={{ flex: 1 }}>
                    <Badge
                      style={{
                        borderRadius: 3,
                        height: 25,
                        width: 72,
                        backgroundColor: data.bg
                      }}
                    >
                      <Text
                        style={styles.badgeText}
                      >{`${data.types} Types`}</Text>
                    </Badge>
                  </Right>}
              </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}

export default SideBar;
