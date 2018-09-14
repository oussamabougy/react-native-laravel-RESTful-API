import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, StatusBar, FlatList, Image } from 'react-native';
import {
    Container,
    Content,
    Header,
    Left,
    Right,
    Icon,
    Item,
    Input,
    Card,
    CardItem,
    ActionSheet,
    Spinner,
    Body,
    ListItem,
    Button
} from 'native-base';
import { connect } from 'react-redux';
import colors from '../styles/colors';
import { carsFetch, logOutUser } from '../actions';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cars: []
        }
    }

    static navigationOptions = ({ navigation }) => ({
        header: (
            <Header>
                <Left>
                    <Button icon transparent onPress={() => navigation.state.params.logOut(navigation)} >
                        <Icon name="ios-log-out" style={{ fontSize: 30 }} />
                    </Button>
                </Left>
                <Right>
                    <Button icon transparent onPress={() => navigation.navigate('CarCreate')} >
                        <Icon name="ios-add" style={{ fontSize: 30 }} />
                    </Button>
                </Right>
            </Header>
        ),
    });

    componentWillMount() {
        this.props.carsFetch();
        this.props.navigation.setParams({ logOut: this.props.logOutUser })
    }
    componentWillReceiveProps(nextProps) {
        const cars = nextProps.cars;
        this.setState({ cars });
    }

    render() {
        return (
            <Container>
                <Content>
                    {this.props.loading ?
                        <Spinner color={colors.default} />
                        :

                        <FlatList
                            data={this.state.cars}
                            renderItem={({ item }) => (
                                <ListItem icon>
                                    <Left>
                                        <Button icon transparent>
                                            <Icon active name="ios-car" style={{ color: item.color }}/>
                                        </Button>
                                    </Left>
                                    <Body>
                                        <Text>{item.name}</Text>
                                    </Body>
                                    <Right>
                                        <Button transparent onPress={() => this.props.navigation.navigate('CarEdit', { car: item })} >
                                            <Icon name='edit' type='FontAwesome' style={{ fontSize: 30 }} />
                                        </Button>
                                    </Right>
                                </ListItem>
                            )}
                            keyExtractor={(item, index) => index.toString()}
                        />

                    }

                </Content>
            </Container>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    androidHeader: {
        ...Platform.select({
            android: {
                paddingTop: StatusBar.currentHeight,
            }
        })
    }
});

const mapStateToProps = (state) => {
    const { cars, loading } = state.carsState;

    return { cars, loading };
};


export default connect(mapStateToProps, { carsFetch, logOutUser })(Home);