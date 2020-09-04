import Header from './src/pages/CustomHeader/Components/Header';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from '../../Home';
import Test from '../../Test';

const Tab = createMaterialTopTabNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Test" component={Test} />
            </Tab.Navigator>
        </NavigationContainer>
    );
  }