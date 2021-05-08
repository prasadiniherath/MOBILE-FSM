



import React, { Component } from 'react';

import { StackNavigator } from 'react-navigation';
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  RadioButtonGroup,
  RadioButton,
  SafeAreaView, ScrollView,
  Text
} from "react-native";

import axios from "axios";
import {Users,UserContext} from '../Context/context';
import RouteDetails from "./RouteDetails";

class ProfileScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }


  submit() {
    axios.post("http://104.236.38.247:8000/api/mobilelogin", {
      email: this.state.email,
      password: this.state.password,
    })
        // .then((res)=>console.log(res.data[0].userID))
        .then((res) =>{ if(res.data[1]=='Login Successfully'){
          this.props.navigation.navigate("Home");
          // console.log('beforeid'+ Users.loginuserid);
          Users.loginuserid=res.data[0].userID;
          // console.log('after'+Users.loginuserid);
        }else{
          alert("Wrong Login Details");
        }
        })
  }



  out() {
          this.props.navigation.navigate("Home");
          console.log('beforeid'+ Users.loginuserid);
          Users.loginuserid=null;
          console.log('after'+Users.loginuserid);
  }









  updateValue(text, field) {
    if (field == "email") {
      this.setState({
        email: text,
      });
    }else if (field == "password") {
      this.setState({
        password: text,
      });
    }
  }

  render() {
    return (
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
              <TextInput
                  style={styles.input}
                  placeholder="Enter email"
                  onChangeText={(text) => this.updateValue(text, "email")}
              />

              <TextInput
                  style={styles.input}
                  secureTextEntry
                  placeholder="Enter password"
                  onChangeText={(text) => this.updateValue(text, "password")}
              />

              <Button
                  title="Submit"
                  onPress={() => {
                    this.submit();
                  }}
              />
              <Button
                  title="logout"
                  onPress={() => {
                    this.out();
                  }}
              />
            </View>
          </ScrollView>
        </SafeAreaView>
    );
  }
}
ProfileScreen.contextType = UserContext;
const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: "skyblue",
    margin: 20,
    marginTop: 20,
  },
  container: {
    margin: 20,
    marginTop: 100,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});

export default ProfileScreen;
