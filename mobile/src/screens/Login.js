import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Body, Button, Card, CardItem, Container, Content, Form, Item, Input, Spinner, Text } from 'native-base';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser(email, password, this.props.navigation);
  }

  renderError() {
      if (this.props.error) {
        return (
          <View style={{ backgroundColor: 'white' }}>
            <Text style={styles.errorTextStyle}>
              {this.props.error}
            </Text>
          </View>
        );
      }
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner color='white' />;
    }
    return (
      <Text>Login</Text>
    );
  }

  render() {
    return (
      <Container>
        <Content>
          <Card>
            <Form>
              <Item>
                <Input onChangeText={this.onEmailChange.bind(this)} value={this.props.email} placeholder="Email" />
              </Item>
              <Item last>
                <Input secureTextEntry onChangeText={this.onPasswordChange.bind(this)} value={this.props.password} placeholder="Password" />
              </Item>
            </Form>
            {this.renderError()}
            <CardItem>
              <Body>
              <Button block onPress={this.onButtonPress.bind(this)}>
                {this.renderButton()}
              </Button>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

const styles = {
    errorTextStyle: {
      fontSize: 20,
      alignSelf: 'center',
      color: 'red'
    }
};

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;

  return { email, password, error, loading };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
