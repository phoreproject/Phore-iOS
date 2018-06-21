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
    icon: "arrow-forward",
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
    bg: "#00d188"
  },
  {
    name: "Settings",
    route: "SettingsList",
    icon: "settings",
    bg: "#C5F442"
  },
  {
    name: "Address Book",
    route: "AddressBook",
    icon: "bookmarks",
    bg: "#C5F442"
  },
  {
    name: "Header",
    route: "Header",
    icon: "arrow-up",
    bg: "#477EEA",
    types: "11"
  },
  {
    name: "Badge",
    route: "NHBadge",
    icon: "notifications",
    bg: "#4DCAE0"
  },
  {
    name: "Button",
    route: "NHButton",
    icon: "radio-button-off",
    bg: "#1EBC7C",
    types: "9"
  },
  {
    name: "Card",
    route: "NHCard",
    icon: "keypad",
    bg: "#B89EF5",
    types: "8"
  },
  {
    name: "Check Box",
    route: "NHCheckbox",
    icon: "checkmark-circle",
    bg: "#EB6B23"
  },
  {
    name: "Fab",
    route: "NHFab",
    icon: "help-buoy",
    bg: "#EF6092",
    types: "2"
  },
  {
    name: "Form & Inputs",
    route: "NHForm",
    icon: "call",
    bg: "#EFB406",
    types: "12"
  },
  {
    name: "Icon",
    route: "NHIcon",
    icon: "information-circle",
    bg: "#bfe9ea",
    types: "4"
  },
  {
    name: "Layout",
    route: "NHLayout",
    icon: "grid",
    bg: "#9F897C",
    types: "5"
  },
  {
    name: "List",
    route: "NHList",
    icon: "lock",
    bg: "#5DCEE2",
    types: "8"
  },
  {
    name: "Picker",
    route: "NHPicker",
    icon: "arrow-dropdown",
    bg: "#F50C75"
  },
  {
    name: "Radio",
    route: "NHRadio",
    icon: "radio-button-on",
    bg: "#6FEA90"
  },
  {
    name: "Spinner",
    route: "NHSpinner",
    icon: "navigate",
    bg: "#BE6F50"
  },
  {
    name: "Tabs",
    route: "NHTab",
    icon: "home",
    bg: "#AB6AED",
    types: "3"
  },
  {
    name: "Thumbnail",
    route: "NHThumbnail",
    icon: "image",
    bg: "#cc0000",
    types: "2"
  },
  {
    name: "Toast",
    route: "NHToast",
    icon: "albums",
    bg: "#C5F442",
    types: "6"
  },
  {
    name: "Typography",
    route: "NHTypography",
    icon: "paper",
    bg: "#48525D"
  }
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
