import React, { Component } from "react";
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
  Picker,
  Spinner,
  InputGroup,
  List,
  ListItem
} from "native-base";
import {
  TouchableHighlight,
  Text,
  ToastAndroid
} from 'react-native';
import styles from "./styles";
import addressService from './addressService';
import addressDetail from './addressDetail';

class NewAddress extends Component {
  constructor(props) {
    super(props);

    let editObj = this.props.route.editObj;
    let editIsNotNull = editObj != null;
    this.state = {
      //used to display a progress indicator if waiting for a network response
      loading: false,
      id: editIsNotNull ? editObj.id : null,
      description: editIsNotNull ? editObj.description : ''
      }
  }

  save() {
    this.setState({
      loading: true
    });
   var hasError = false;
    if(this.state.label === ''){
      ToastAndroid.show('Label is required', ToastAndroid.LONG);
      hasError = true;
    }
    if(this.state.address === ''){
      ToastAndroid.show('Address is required', ToastAndroid.LONG);
      hasError = true;
    }
 
    if(hasError){
      this.setState({
        loading: false
      });
      return;
    }

  var cond = {
    address: this.state.address,
    label: this.state.label
  };
  var saved = addressService.save(cond);

  ToastAndroid.show('Saved!', ToastAndroid.LONG);

  this.props.route.callbackUpdateList();
    if(this.state.address == null){
      this.props.navigator.replace({
        component: addresskDetail,
        callbackUpdateList: this.props.route.callbackUpdateList,
        obj: saved
      });
    }else{
      this.props.navigator.pop();
    }
 
  }
  back = () => {
    this.props.navigator.pop();
  }


  render() {
    const content = this.state.loading ? <content> <spinner color="blue"> </spinner></content> :
    <content keyboarddismissmode="interactive" keyboardshouldpersisttaps="{true}">
          <list>
             <listitem>
                 <inputgroup>
                               <input onchangetext={(text) ==> this.setState({label: text})}
                                 value={this.state.label}
                                 stackedLabel label="Label"
                               autoFocus={true}/>
                           </inputgroup>
                       </listitem>
 
 
 
                   </list><button block success onPress={this.save()} style={{ alignSelf: 'center', marginTop: 20, marginBottom: 20 }}>
                       Save
                   </button>
                 </content>;

    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>New Address Label</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Text>SAVE</Text>
            </Button>
          </Right>
        </Header>

       {content}
      </Container>
    );
  }
}

export default NewAddress;
