import React from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { COLORS, icons, SIZES } from '../../constants'
const HeaderDetail = () => {
	return (
		<View style={styles.container}>
			<TouchableOpacity>
				<Image
					source={icons.menu}
					resizeMode="contain"
					style={{ tintColor: COLORS.white, height: 25, width: 25 }}
				/>
			</TouchableOpacity>
			<TouchableOpacity>
				<Image
					source={icons.search}
					resizeMode="contain"
					style={{ tintColor: COLORS.white, height: 25, width: 25 }}
				/>
			</TouchableOpacity>
		</View>
	)
}

export default HeaderDetail

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: SIZES.padding,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
})
