import React from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLORS, FONTS, SIZES } from '../../constants'

const ScrollCard = ({ navigation, productList }) => {
	const renderItem = ({ item }) => {
		return (
			<TouchableOpacity
				onPress={() => navigation.navigate('Detail', { itemInfo: item })}
				style={{ marginLeft: SIZES.padding, width: SIZES.width / 2 }}
			>
				<Image
					source={item.image}
					resizeMode="cover"
					style={{
						height: '100%',
						width: '100%',
						borderRadius: SIZES.radius,
					}}
				/>
				<View style={styles.headerCard}>
					<Text style={{ color: COLORS.lightGray2, ...FONTS.h3 }}>Furniture</Text>
					<Text style={{ marginTop: SIZES.base, color: COLORS.white, ...FONTS.h2 }}>{item.productName}</Text>
				</View>
				<View style={styles.bodyCard}>
					<Text style={{ ...FONTS.h2 }}>${item.price.toFixed(2)}</Text>
				</View>
			</TouchableOpacity>
		)
	}
	return (
		<View style={styles.container}>
			<FlatList
				data={productList}
				keyExtractor={(item) => item.productId.toString()}
				renderItem={renderItem}
				horizontal
				showsHorizontalScrollIndicator={false}
			/>
		</View>
	)
}

export default ScrollCard

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: SIZES.padding,
	},
	headerCard: {
		position: 'absolute',
		top: 15,
		left: '10%',
		right: '10%',
	},
	bodyCard: {
		position: 'absolute',
		bottom: 20,
		left: 30,
		borderRadius: 15,
		paddingVertical: 10,
		paddingHorizontal: 15,
		backgroundColor: COLORS.transparentLightGray,
	},
})
