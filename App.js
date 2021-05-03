import React from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {  Provider as PaperProvider, DarkTheme as PaperDarkTheme } from 'react-native-paper';
import { DrawerContent } from './Screens/DrawerContent';
import MainTabScreen from './Screens/MainTabScreen';
import OrderDetails from './Screens/OrderDetails';
import RouteDetails from './Screens/RouteDetails';
import ReturnDetails from './Screens/ReturnDetails';
import unproductive from './Screens/unproductive';
import moreshop from './Screens/moreshop';
import Profile from './Screens/ProfileScreen';
import Category from './Screens/Category'; 
import Cart from './Screens/Cart'; 
import product from './Screens/product';


const Drawer = createDrawerNavigator();



const App = () => {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  return (

    
    // <NavigationContainer>

    //   <Drawer.Navigator initialRouteName="Order">

    //     <Drawer.Screen name="Order" component={MainTabScreen} />
    //     {/* <Drawer.Screen name="Order Details" component={OrderDetailsStackScreen} />
    //     <Drawer.Screen name="Place An Order" component={PlaceAnOrderStackScreen} />/>  */}
    //     <Drawer.Screen name="HomeScreen" component={HomeScreen} />
    //     <Drawer.Screen name="Discount Details" component={DiscountDetails} />

    //   </Drawer.Navigator>

    // </NavigationContainer>

    // {/* <Stack.Navigator screenOptions={{
    //        headerStyle:{
    //           backgroundColor:'#2B3856',
    //         },
    //         headerTintColor:'#fff',
    //         headerTitleStyle:{
    //         fontWeight:'bold',
    //         alignItems: 'center'
    //     }}
    //     }>
    //       <Stack.Screen name="Home" component={HomeScreen} options={{

    //       }}/>
    //       <Stack.Screen name="Details" component={DetailScreen} />
    //     </Stack.Navigator>  */}
    
    <NavigationContainer >
       
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
         
        <Drawer.Screen name="OrderDetails" component={OrderDetails} />
        <Drawer.Screen name="RouteDetails" component={RouteDetails} />   
        <Drawer.Screen name="ReturnDetails" component={ReturnDetails} />  
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="unproductive" component={unproductive} />
        <Drawer.Screen name="moreshop" component={moreshop} /> 
        <Drawer.Screen name="Category" component={Category} />  
        <Drawer.Screen name="Cart" component={Cart} />
        <Drawer.Screen name="product" component={product} />
      </Drawer.Navigator>
    </NavigationContainer>
    
  )
}


export default App;


