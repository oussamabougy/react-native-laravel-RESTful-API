import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Image, View, Keyboard } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button, Icon, Text, Grid, Spinner } from 'native-base';
import { ColorWheel } from 'react-native-color-wheel';
import colorsys from 'colorsys';
import { carUpdate, carCreate } from '../actions';


class CarCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      color: '#ffffff'
    }
  }

  componentWillMount() {
    /*const INITIAL_STATE = {
      name: '',
      phone: '',
      shift: ''
    };
    this.props = INITIAL_STATE;*/
  }

  onColorChange(color) {
    this.setState({ color: colorsys.hsvToHex(color) });
    console.log(colorsys.hsvToHex(color));

  }

  onButtonPress() {
    Keyboard.dismiss();
    this.props.carCreate(this.state.name, this.state.color, this.props.navigation);
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
            <Item stackedLabel last disabeled>
              <Label>Color</Label>
              <Icon active name="ios-car" style={{ color: this.state.color }}/>
            </Item>
            <ColorWheel
              initialColor={this.state.color}
              onColorChange={color => this.onColorChange(color)}
              style={{ marginLeft: 20, padding: 40, height: 200, width: 200 }}
              thumbStyle={{ height: 30, width: 30, borderRadius: 30}} />
          </Form>
            <Button style={{ margin: 15 }} block bordered onPress={() => this.onButtonPress()} >
              {this.props.loading ?
                <Spinner color='blue'  />
              :
                <Text>Save</Text>
              }
            </Button>
        </Content>
      </Container>
    );
  }
}
const mapStateToProps = (state) => {
    const { loading } = state.carsState;

    return { loading };
};

export default connect(mapStateToProps, { carUpdate, carCreate })(CarCreate);
