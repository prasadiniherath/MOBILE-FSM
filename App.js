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
import ProfileScreen from './Screens/ProfileScreen';
import {Users,UserContext} from './Context/context';

const Drawer = createDrawerNavigator();



const App = () => {
    const [isDarkTheme, setIsDarkTheme] = React.useState(false);

    return (


<UserContext.Provider value={Users}>
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
</UserContext.Provider>
    )
}


export default App;


