import React from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLORS, FONTS, SIZES } from '../../constants'
import { TabList } from '../../constants/tabList'

const ScrollTab = ({ list, onPress }) => {
	const renderItem = ({ item }) => {
		return (
			<TouchableOpacity onPress={() => onPress(item)} style={[styles.tab]}>
				<Text style={styles.txt}>{item.name}</Text>
				{list.id == item.id && <View style={styles.dot} />}
			</TouchableOpacity>
		)
	}
	return (
		<View style={styles.container}>
			<FlatList
				data={TabList}
				renderItem={renderItem}
				keyExtractor={(item) => item.id.toString()}
				horizontal
				showsHorizontalScrollIndicator={false}
			/>
		</View>
	)
}

export default ScrollTab

const styles = StyleSheet.create({
	container: {
		marginTop: SIZES.padding,
	},
	tab: {
		marginRight: SIZES.padding,
		marginLeft: SIZES.padding,
		alignItems: 'center',
	},
	txt: {
		...FONTS.body2,
		color: COLORS.secondary,
	},
	dot: {
		marginTop: SIZES.base,
		height: 10,
		width: 10,
		borderRadius: 5,
		backgroundColor: COLORS.blue,
	},
})
