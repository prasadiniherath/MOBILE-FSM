 
import React, { Component } from 'react';

import { Image,ActivityIndicator, Alert, FlatList, Text, StyleSheet, View, TextInput ,TouchableHighlight, SafeAreaView, ScrollView} from 'react-native';

export default class moreshop extends Component {

    constructor(props) {

        super(props);

        this.state = {
            data: []
        }

        this.arrayholder = [];
    }

    componentDidMount() {

        return fetch('http://104.236.38.247:8000/api/viewshopdetails/1')
            .then((response) => response.json())
            .then((responseJson) => {
                // console.log(responseJson);
                this.setState({
                    data: responseJson,
                }, () => {
                    // In this block you can do something with new state.
                    this.arrayholder = responseJson;
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }


    render() {

        return (

            <View style={styles.MainContainer}>
                <Text
                    style={{
                        color: '#FF0000',
                        marginLeft :20,
                        fontWeight: 'bold',
                        fontSize: 20,
                        marginTop :10
                    }}>
                    Detais
                </Text>

                <FlatList
                    data={this.state.data}
                    renderItem={({ item }) =>

                        <View style={{ backgroundColor: '#ADD8E6', padding: 10, margin: 10 }}>
                            <Text style={{ color: '#151B54', fontWeight: 'bold' }}>Shop Name  :{item.shop_name}</Text>
                            <Text style={{ color: '#151B54', fontWeight: 'bold' }}>Owner Name :{item.owner_name}</Text>
                            <Text style={{ color: '#151B54', fontWeight: 'bold' }}>Owner NIC  :{item.owner_NIC}</Text>
                            <Text style={{ color: '#151B54', fontWeight: 'bold' }}>lat  :{item.lat}</Text>
                            <Text style={{ color: '#151B54', fontWeight: 'bold' }}>lng  :{item.lng}</Text>
                            <Text style={{ color: '#151B54', fontWeight: 'bold' }}>Picture  :{item.image}</Text>
                            <Text style={{ color: '#151B54', fontWeight: 'bold' }}>Address No  :{item.address_no}</Text>
                            <Text style={{ color: '#151B54', fontWeight: 'bold' }}>Suburb  :{item.suburb}</Text>
                            <Text style={{ color: '#151B54', fontWeight: 'bold' }}>City  :{item.city}</Text>
                            <Text style={{ color: '#151B54', fontWeight: 'bold' }}>Province  :{item.province}</Text>
                            <Text style={{ color: '#151B54', fontWeight: 'bold' }}>TP : {item.telephone_numbers}</Text>
                            <Text style={{ color: '#151B54', fontWeight: 'bold' }}>Reg Date : {item.registered_date}</Text>
                            <Image source={{uri: 'http://104.236.38.247:8000/uploads/shop/'+item.image}}
                                   style={{width: 400, height: 400}} />
                        </View>



                    }

                />
            </View>
        );
    }
}

const styles = StyleSheet.create({

    MainContainer: {
        justifyContent: 'center',
        flex: 1,
        margin: 5,

    },

    row: {
        fontSize: 18,
        padding: 12
    },

    textInput: {

        textAlign: 'center',
        height: 42,
        borderWidth: 1,
        borderColor: '#009688',
        borderRadius: 8,
        backgroundColor: "#FFFF"

    }
});