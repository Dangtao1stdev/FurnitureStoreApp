import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Home, ItemDetail } from '../screens'
const Stack = createStackNavigator()
const StackNavigator = () => {
	return (
		<Stack.Navigator headerMode="none" initialRouteName="Home">
			<Stack.Screen name="Home" component={Home} />
			<Stack.Screen name="Detail" component={ItemDetail} />
		</Stack.Navigator>
	)
}

export default StackNavigator
