import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { Map } from './src/components';

const App = () => {
	return (
		<SafeAreaView>
			<StatusBar />
			<Map />
		</SafeAreaView>
	);
};

export default App;
