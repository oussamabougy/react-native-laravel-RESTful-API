import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Image, View, Keyboard, Dimensions } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Icon, Button, Text, Grid, Spinner } from 'native-base';
import { ColorWheel } from 'react-native-color-wheel';
import colorsys from 'colorsys';
import { carUpdate, carDelete } from '../actions';
import Confirm from '../components/Confirm';

class CarEdit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: this.props.navigation.getParam('car').id,
      name: this.props.navigation.getParam('car').name,
      color: this.props.navigation.getParam('car').color,
      showModal: false
    }
  }

  onUpdatePress() {
    Keyboard.dismiss();
    this.props.carUpdate(this.state.id,this.state.name, this.state.color, this.props.navigation);
  }

  onColorChange(color) {
    this.setState({ color: colorsys.hsvToHex(color) });
    console.log(colorsys.hsvToHex(color));

  }

  onAccept() {
    this.props.carDelete(this.state.id, this.props.navigation);
    this.setState({ showModal: false });
  }

  onDecline() {
    this.setState({ showModal: false });
  }
  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item stackedLabel>
              <Label>Name</Label>
              <Input value={this.state.name} onChangeText={(text) => this.setState({ name: text } )} />
            </Item>
            <Item stackedLabel disabeled>
              <Label>Color</Label>
              <Icon active name="ios-car" style={{ color: this.state.color }}/>
            </Item>
            <ColorWheel
              initialColor={this.state.color}
              onColorChange={color => this.onColorChange(color)}
              style={{ marginLeft: 20, padding: 40, height: 200, width: 200 }}
              thumbStyle={{ height: 30, width: 30, borderRadius: 30}} />
          </Form>
            <Button style={{ margin: 15 }} block bordered onPress={() => this.onUpdatePress()} >
            {this.props.loading ?
                <Spinner color='blue'  />
              :
              <Text>Save</Text>
            }
            </Button>
            <Button style={{ margin: 15 }} block danger bordered onPress={() => this.setState({ showModal: !this.state.showModal })} >
            {this.props.loading ?
                <Spinner color='red'  />
              :
              <Text>Delete</Text>
            }
            </Button>
          <Confirm
            visible={this.state.showModal}
            onAccept={this.onAccept.bind(this)}
            onDecline={this.onDecline.bind(this)}
          >
            Are you sure?
          </Confirm>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
    const { loading } = state.carsState;

    return { loading };
};

export default connect(mapStateToProps, { carUpdate, carDelete })(CarEdit);
