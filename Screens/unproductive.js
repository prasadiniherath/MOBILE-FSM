 

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
      unproductive_reason: "",
    };
  }

  submit() {
    axios.post("http://104.236.38.247:8000/api/shopclosereason/2", {
      unproductive_reason: this.state.unproductive_reason,
    })
        .then((res) => console.log(res))
        .catch((error) => console.log(error));
  }

  updateValue(text, field) {
    if (field == "unproductive_reason") {
      this.setState({
        unproductive_reason: text,
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
                  placeholder="Enter reason"
                  onChangeText={(text) => this.updateValue(text, "unproductive_reason")}
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