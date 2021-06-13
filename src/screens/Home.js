import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Footer from '../components/home/Footer'
import Header from '../components/home/Header'
import ScrollCard from '../components/home/ScrollCard'
import ScrollTab from '../components/home/ScrollTab'
import { COLORS, FONTS, SIZES } from '../constants'
import { selectTab } from '../constants/selectTab'
const Home = ({ navigation }) => {
	const [list, setList] = useState(selectTab)
	return (
		<SafeAreaView style={styles.container}>
			{/* Header */}
			<Header />
			{/* Title */}
			<View style={{ marginTop: SIZES.padding }}>
				<Text style={styles.title}>Collection of</Text>
				<Text style={styles.title}>{list.title}</Text>
			</View>
			{/* ScrollTab */}
			<ScrollTab list={list} onPress={(item) => setList(item)} />
			{/* ScrollCard */}
			<ScrollCard navigation={navigation} productList={list.productList} />
			{/* Footer */}
			<View style={{ height: '19%', justifyContent: 'flex-end', paddingBottom: SIZES.base }}>
				<Footer />
			</View>
		</SafeAreaView>
	)
}

export default Home

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.white,
	},
	title: {
		...FONTS.largeTitle,
		paddingHorizontal: SIZES.padding,
	},
})
