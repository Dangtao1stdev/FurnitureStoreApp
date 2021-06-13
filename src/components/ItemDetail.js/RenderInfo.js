import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, FONTS, SIZES } from '../../constants'
import HeaderDetail from './HeaderDetail'
import RenderFooter from './RenderFooter'
const RenderInfo = ({ itemInfo }) => {
	return (
		<ImageBackground style={styles.container} source={itemInfo.image} resizeMode="cover">
			<SafeAreaView style={{ flex: 1 }}>
				<HeaderDetail />
				<View style={styles.contentDetail}>
					<View style={styles.dot}></View>
				</View>
				<View style={styles.contentPrice}>
					<View style={{ flex: 2 }}>
						<Text style={{ color: COLORS.darkGray, ...FONTS.h3 }}>{itemInfo.productName}</Text>
					</View>
					<View style={{ flex: 1.5, alignItems: 'flex-end', justifyContent: 'flex-end' }}>
						<Text style={{ color: COLORS.darkGreen, ...FONTS.h3 }}>${itemInfo.price.toFixed(2)}</Text>
					</View>
				</View>
				<View style={styles.nameContent}>
					<Text style={{ color: COLORS.lightGray2, ...FONTS.h2 }}>Furniture</Text>
					<Text style={{ marginTop: SIZES.radius, color: COLORS.white, ...FONTS.h1 }}>
						{itemInfo.productName}
					</Text>
				</View>
				<View style={styles.footer}>
					<RenderFooter />
				</View>
			</SafeAreaView>
		</ImageBackground>
	)
}

export default RenderInfo

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	contentDetail: {
		position: 'absolute',
		top: '45%',
		left: '15%',
		borderRadius: 80,
		backgroundColor: COLORS.transparentLightGray1,
		height: 40,
		width: 40,
		justifyContent: 'center',
		alignItems: 'center',
	},
	dot: {
		height: 10,
		width: 10,
		borderRadius: 10,
		backgroundColor: COLORS.blue,
	},
	contentPrice: {
		position: 'absolute',
		top: '43%',
		left: '30%',
		flexDirection: 'row',
		padding: SIZES.radius * 1.5,
		backgroundColor: COLORS.transparentLightGray1,
		width: '50%',
		borderRadius: 10,
	},
	nameContent: {
		position: 'absolute',
		bottom: '20%',
		left: SIZES.padding,
		right: SIZES.padding,
	},
	footer: {
		position: 'absolute',
		bottom: '5%',
		left: SIZES.padding,
		right: SIZES.padding,
		height: 70,
		backgroundColor: COLORS.white,
		borderRadius: 35,
	},
})
