import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Left,
  Right,
  Body,
  InputGroup,
  Input
} from "native-base";
import {
  Text,
  View,
  ListView,
  RefreshControl,
  TouchableHighlight
} from 'react-native';
import styles from "./styles";

import NewAddress from './newaddress';
import addressDetail from './addressDetail';
import addressService from './addressService';
import addressItem from './addressItem';

class AddressBook extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
          dataSource: ds.cloneWithRows([
            {description: 'initial'}
            ]),
          search: "",
          refreshing: false,
        };
  }

  showItem(obj){
    this.props.navigator.push({
      component: addressDetail,
      callbackUpdateList: this.callbackUpdateList,
      obj: obj
    });
  }
  componentWillMount(){
    this.updateList();
  }
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
           <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Address Book</Title>
          </Body>
          <Right>
            
            
            <Button transparent
            onPress={() => this.props.navigation.navigate("NewAddress")}>
              <Icon name="add" />
            </Button>
          </Right>
        </Header>

      
         <Content>

                 <ListView datasource="{this.state.dataSource}" 
                 enableemptysections="{true}" 
                 renderrow="{this._renderItem.bind(this)}" 
                 style="{styles.listView}" 
                 refreshcontrol={ <refreshcontrol refreshing="{this.state.refreshing}" onrefresh="{this.updateList.bind(this)}"
                 />}>
               </ListView>
               

          </Content>

        
          
       
        
      </Container>
    );
  }

  updateList(){
    this.setState({refreshing: true});
    var all = addressService.search(this.state.search);
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(all)
    });
    this.setState({refreshing: false});
  }

  _onActionSelected = (position) => {
    console.log(position);
    if(position == 0){
      this.props.navigator.push({
        component: NewAddess,
        callbackUpdateList: this.callbackUpdateList,
      });
    }
  };

  callbackUpdateList = () => {
    console.log('callbackUpdateList');
    this.updateList();
  }

  _renderItem(obj) {
    if(obj == null){
      return null;
    }
    return (
     <touchablehighlight onPress={this.showItem(obj)}>
        <view>
          <addressitem obj={obj}>
        </addressitem>
        </view>
     </touchablehighlight>
    );
  }


}

export default AddressBook;