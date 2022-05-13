import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Login from '../screens/login';
import Register from '../screens/register';
import Main from '../screens/main';
import Restaurants from '../screens/restaurants';
import ShoppingCart from '../screens/shoppingcart';
import feedb from '../screens/feedb';

const stackNavigationOptions = {
    headerShown:false
}
const AppNavigator = createStackNavigator({
 
 login:{screen:Login},
 register:{screen:Register},
 main:{screen:Main},
 restaurants:{screen:Restaurants},
 shoppingcart:{screen:ShoppingCart},
 feedb:{screen:feedb},
},
{
    defaultNavigationOptions : stackNavigationOptions
}
);
export default createAppContainer(AppNavigator);