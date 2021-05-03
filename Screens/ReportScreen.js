// import React from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';

// const ReportScreen = ({navigation}) => {
//     return (
//       <View style={styles.container}>
//         <Text>ReportScreen</Text>
//         <Button
//             title="Go to details screen...again"
//             onPress={() => navigation.push("Details")}
//         />
//         <Button
//             title="Go to home"
//             onPress={() => navigation.navigate("Home")}
//         />
//         <Button
//             title="Go back"
//             onPress={() => navigation.goBack()}
//         />
//       </View>
//     );
// };


// export default ReportScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1, 
//     alignItems: 'center', 
//     justifyContent: 'center'
//   },
// });


// import React, { Component } from "react";
// // import {useState, useEffect} from "react";

// import { View, Text, Button, StyleSheet } from 'react-native';
// import { TextInput } from 'react-native-gesture-handler';
// // import { render } from 'react-dom';


// export default class ReportScreen extends Component {



   
//   constructor(props) {
//     super(props);
//     this.state = { Check_IN: 'Check_IN', Check_Out: 'CheckOut' };
//   }
  

//   InsertRecord = () => {
//     var Check_IN = this.state.Check_IN;
    

//     // if (Check_IN.length == 0 && Check_Out.length == 0) {
//     //   alert("Required field is missing");
//     // }
//     // else {
//       var InserAPIURL = "http://10.0.2.2:80/api/insert.php";
//       var headers = {
//         'Accept': 'application/json',
//         'Content-Type': 'application.json'
//       };

//       var Data = {
//         Check_IN: Check_IN,
         
//       };

//       fetch(InserAPIURL,
//         {
//           method: 'POST',
//           headers: headers,
//           body: JSON.stringify(Data)
//         }
//       )

//         .then((response) => response.json())
//         .then((response) => {
//           alert(response[0].Message);
//         }
//         )
//         .catch((error) => {
//           alert("Check_In updated " );
//         }
//         )
//     }
    
//     //checkout
//     InsertRecordB = () => {
      
//       var Check_Out = this.state.Check_Out;
  
//       // if (Check_IN.length == 0 && Check_Out.length == 0) {
//       //   alert("Required field is missing");
//       // }
//       // else {
//         var InserAPIURL = "http://10.0.2.2:80/api/insert.php";
//         var headers = {
//           'Accept': 'application/json',
//           'Content-Type': 'application.json'
//         };
  
//         var Data = {
           
//           Check_Out: Check_Out
//         };
  
//         fetch(InserAPIURL,
//           {
//             method: 'POST',
//             headers: headers,
//             body: JSON.stringify(Data)
//           }
//         )
  
//           .then((response) => response.json())
//           .then((response) => {
//             alert(response[0].Message);
//           }
//           )
//           .catch((error) => {
//             alert("Check_Out updated ");
//           }
//           )
//       }

//   render() {

//     // const [currentDate, setCurrentDate] = useState('');

//     // useEffect(() => {
//     //   var date = new Date().getDate(); //Current Date
//     //   var month = new Date().getMonth() + 1; //Current Month
//     //   var year = new Date().getFullYear(); //Current Year
//     //   var hours = new Date().getHours(); //Current Hours
//     //   var min = new Date().getMinutes(); //Current Minutes
//     //   var sec = new Date().getSeconds(); //Current Seconds
//     //   setCurrentDate(
//     //     date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec
//     //   );
//     // }, []);


//     return (


//       <View style={styles.container}>
//         <TextInput
//           // placeholder={"Check_IN"}
//           // placeholderTextColor={"#ff0000"}
//           // style={styles.txtStyle}
//           onChangeText={Check_IN => this.setState({ Check_IN })}


//         />
//         <TextInput
//           // placeholder={"Check_Out"}
//           // placeholderTextColor={"#ff0000"}
//           // style={styles.txtStyle}
//           onChangeText={Check_Out => this.setState({ Check_Out })}

//         />
//         <Button
//           title={"Check_IN"}
//           onPress={this.InsertRecord}
//         />
         
//         <Button
//           title={"Check_Out"}
//           onPress={this.InsertRecordB}
//         />

//       </View>
      

//     );

//   }
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     marginTop: 10,
//   },
//   txtStyle: {
//     borderBottomWidth: 1,
//     borderBottomColor: 'red',
//     marginBottom: 20,
//   }

  
// });;


import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class ReportScreen extends React.Component {
  state={
    email:"",
    password:""
  }
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>HeyAPP</Text>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({email:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({password:text})}/>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.loginText}>Signup</Text>
        </TouchableOpacity>

  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  forgot:{
    color:"white",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white"
  }
});