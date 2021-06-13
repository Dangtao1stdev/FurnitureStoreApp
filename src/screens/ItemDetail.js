import React from 'react'
import { StyleSheet, View } from 'react-native'
import RenderInfo from '../components/ItemDetail.js/RenderInfo'
import { COLORS } from '../constants'
const ItemDetail = ({ route }) => {
	const { itemInfo } = route.params
	return (
		<View style={styles.container}>
			<RenderInfo itemInfo={itemInfo} />
		</View>
	)
}
export default ItemDetail
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.white,
	},
})
