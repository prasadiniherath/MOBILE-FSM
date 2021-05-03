import React from 'react';
import {
    View,
    Image,
    StyleSheet,
}from 'react-native';
export default class MenuItem extends React.Component {
    render() {
        return (
             <View style={styles.MenuItem}>
                 <Image
                     source={this.props.ItemImage}
                     style={styles.image}
                 />

                  
             </View>
        )
    }
}

const styles = StyleSheet.create({
image:{
 width:'100%',
 height:'125%',
 opacity:0.8,
//  borderColor:'#fff',
 borderWidth:2,
 
 
},
MenuItem:{
    width:'33.333333%',
    height:'50%',
    padding:20,
     
}
})