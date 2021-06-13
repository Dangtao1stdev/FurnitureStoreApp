import React from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { icons, SIZES } from '../../constants'

const Header = () => {
	return (
		<View style={styles.container}>
			<TouchableOpacity>
				<Image
					source={icons.menu}
					resizeMode="contain"
					style={{
						height: 25,
						width: 25,
					}}
				/>
			</TouchableOpacity>
			<TouchableOpacity>
				<Image
					source={icons.cart}
					resizeMode="contain"
					style={{
						height: 25,
						width: 25,
					}}
				/>
			</TouchableOpacity>
		</View>
	)
}

export default Header

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		paddingHorizontal: SIZES.padding,
		justifyContent: 'space-between',
		alignItems: 'center',
	},
})
