import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import Home from './screens/Home';
import Buscar from './screens/Buscar';
import Perfil from './screens/Perfil';
import Pedidos from './screens/Pedidos';
import Pagamentos from './screens/Pagamentos';

const PerfilStack = createStackNavigator();

function PerfilRoutes() {
    return (
    <PerfilStack.Navigator>
        <PerfilStack.Screen name="Perfil" component={Perfil} />
        <PerfilStack.Screen name="Pagamentos" component={Pagamentos} />
    </PerfilStack.Navigator>
    );
} 


const BottomTab = createBottomTabNavigator();

export default function Routes() {
return (
    <NavigationContainer>
    <BottomTab.Navigator 
        screenOptions={{
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'black',
        }}
    >
        <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
        <MaterialIcons name="home" color={color} size={26} />
        ),
        }}
        />
    <BottomTab.Screen
        name="Buscar"
        component={Buscar}
        options={{
        tabBarLabel: 'Buscar',
        tabBarIcon: ({ color }) => (
        <MaterialIcons name="search" color={color} size={26} />
        ),
        }}
        />
        <BottomTab.Screen
        name="Pedidos"
        component={Pedidos}
        options={{
            tabBarLabel: 'Pedidos',
            tabBarIcon: ({ color }) => (
            <MaterialIcons name="assignment" color={color} size={26} />
        ),
        }}
        />
        <BottomTab.Screen
            name="PerfilRoutes"
            component={PerfilRoutes}
            options={{
            headerShown: false,
            tabBarLabel: 'Perfil',
            tabBarIcon: ({ color }) => (
                <MaterialIcons name="person" color={color} size={26} />
            ),
            }}
        />
    </BottomTab.Navigator>
    </NavigationContainer>
);
}