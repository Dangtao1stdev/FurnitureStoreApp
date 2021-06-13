import React from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { COLORS, icons } from '../../constants'
import { useNavigation } from '@react-navigation/native'
const RenderFooter = () => {
	const navigation = useNavigation()
	return (
		<View style={styles.container}>
			<View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
				<TouchableOpacity onPress={() => navigation.goBack()}>
					<Image
						source={icons.dashboard}
						resizeMode="contain"
						style={{
							tintColor: COLORS.gray,
							height: 25,
							width: 25,
						}}
					/>
				</TouchableOpacity>
			</View>
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<TouchableOpacity style={styles.middle}>
					<Image
						source={icons.plus}
						resizeMode="contain"
						style={{
							tintColor: COLORS.white,
							height: 25,
							width: 25,
						}}
					/>
				</TouchableOpacity>
			</View>
			<View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
				<TouchableOpacity>
					<Image
						source={icons.user}
						resizeMode="contain"
						style={{
							tintColor: COLORS.gray,
							height: 25,
							width: 25,
						}}
					/>
				</TouchableOpacity>
			</View>
		</View>
	)
}

export default RenderFooter

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
	},
	middle: {
		height: 50,
		width: 50,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
		backgroundColor: COLORS.primary,
	},
})
