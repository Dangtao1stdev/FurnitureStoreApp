import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLORS, FONTS, icons, images, SIZES } from '../../constants'

const Footer = () => {
	return (
		<View style={[styles.container, styles.shadow]}>
			<View style={styles.leftFooter}>
				<Image
					source={images.sofa}
					resizeMode="contain"
					style={{
						height: '60%',
						width: '60%',
					}}
				/>
			</View>
			{/* Section Footer */}
			<View style={styles.sectionFooter}>
				<Text style={{ ...FONTS.h2 }}>Special Offer</Text>
				<Text style={{ ...FONTS.body3 }}>Adding to your cart</Text>
			</View>
			{/* Button */}
			<TouchableOpacity style={styles.buttonFooter}>
				<Image
					source={icons.chevron}
					resizeMode="contain"
					style={{
						height: '50%',
						width: '50%',
					}}
				/>
			</TouchableOpacity>
		</View>
	)
}

export default Footer

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		marginHorizontal: SIZES.padding,
		padding: SIZES.radius,
		alignItems: 'center',
		height: 110,
		borderRadius: 20,
		backgroundColor: COLORS.white,
	},
	shadow: {
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.32,
		shadowRadius: 5.46,

		elevation: 9,
	},
	leftFooter: {
		width: 50,
		height: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 20,
		backgroundColor: COLORS.lightGray2,
	},
	sectionFooter: {
		flex: 1,
		marginLeft: SIZES.radius,
		justifyContent: 'center',
	},
	buttonFooter: {
		backgroundColor: COLORS.primary,
		justifyContent: 'center',
		alignItems: 'center',
		height: '70%',
		width: 40,
		borderRadius: 10,
		marginRight: SIZES.radius,
	},
})
