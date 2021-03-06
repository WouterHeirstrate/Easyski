/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, View } from 'react-native';

import { Header, LearnMoreLinks } from 'react-native/Libraries/NewAppScreen';

const App = () => {
	return (
		<SafeAreaView>
			<StatusBar />
			<ScrollView contentInsetAdjustmentBehavior="automatic">
				<Header />
				<View>
					<LearnMoreLinks />
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default App;
