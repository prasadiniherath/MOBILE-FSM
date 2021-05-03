 

// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View,TouchableOpacity,TextInput,Button,Keyboard
// } from 'react-native';
// import { StackNavigator } from 'react-navigation';


// export default class ProfileScreen extends Component {
// 	static navigationOptions= ({navigation}) =>({
// 		  title: 'Login',	
// 		  headerRight:	
// 		  <TouchableOpacity
// 			onPress={() => navigation.navigate('Home')}
// 			style={{margin:10,backgroundColor:'orange',padding:10}}>
// 			<Text style={{color:'#ffffff'}}>Home</Text>
// 		  </TouchableOpacity>
		
// 	});  
// 	constructor(props){
// 		super(props)
// 		this.state={
// 			userEmail:'',
// 			userPassword:''
// 		}
// 	}
	
// 	login = () =>{
// 		const {userEmail,userPassword} = this.state;
// 		let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
// 		if(userEmail==""){
// 			//alert("Please enter Email address");
// 		  this.setState({email:'Please enter Email address'})
			
// 		}
		
// 		else if(reg.test(userEmail) === false)
// 		{
// 		//alert("Email is Not Correct");
// 		this.setState({email:'Email is Not Correct'})
// 		return false;
// 		  }

// 		else if(userPassword==""){
// 		this.setState({email:'Please enter password'})
// 		}
// 		else{
		
// 		fetch('http://104.236.38.247:8000/api/mobilelogin',{
// 			method:'post',
// 			header:{
// 				'Accept': 'application/json',
// 				'Content-type': 'application/json'
// 			},
// 			body:JSON.stringify({
// 				// we will pass our input data to server
// 				email: userEmail,
// 				password: userPassword
// 			})
			
// 		})
// 		.then((response) => response.text())
// 		 .then((responseJson)=>{
// 			 if(responseJson == "Login Successfully"){
// 				 // redirect to profile page
// 				 alert("Successfully Login");
// 				 this.props.navigation.navigate("Home");
// 			 }else{
// 				 alert("Wrong Login Details");
// 			 }
// 		 })
// 		 .catch((error)=>{
// 		 console.error(error);
// 		 });
// 		}
		
		
// 		Keyboard.dismiss();
// 	}
	
//   render() {
//     return (
// 	<View style={styles.container}>    
// 	<Text style={{padding:10,margin:10,color:'red'}}>{this.state.email}</Text>
	
// 	<TextInput
// 	placeholder="Enter Email"
// 	style={{width:200, margin:10}}
// 	onChangeText={userEmail => this.setState({userEmail})}
// 	/>
	
// 	<TextInput
// 	placeholder="Enter Password"
// 	style={{width:200, margin:10}}
// 	onChangeText={userPassword => this.setState({userPassword})}
	
// 	/>
	
	
// 	<TouchableOpacity
// 	onPress={this.login}
// 	style={{width:200,padding:10,backgroundColor:'magenta',alignItems:'center'}}>
// 	<Text style={{color:'white'}}>Login</Text>
// 	</TouchableOpacity>
	
	
//      </View>
  
//    );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },

// });

// AppRegistry.registerComponent('ProfileScreen', () => ProfileScreen);











import React, { useState } from "react";
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

class unproductive extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
    password: "",
    };
  }

  submit() {
    axios.post("http://104.236.38.247:8000/api/mobilelogin2", {
      email: this.state.email,
    password: this.state.password,
    })
        .then((res) => console.log(res.data))
        .catch((error) => console.log(error));
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
                  placeholder="Enter password"
                  onChangeText={(text) => this.updateValue(text, "password")}
              />

              <Button
                  title="Submit"
                  onPress={() => {
                    this.submit();
                  }}
              />
            </View>
          </ScrollView>
        </SafeAreaView>
    );
  }
}

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

export default unproductive;