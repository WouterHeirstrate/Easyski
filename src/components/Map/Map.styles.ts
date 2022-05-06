import { StyleSheet } from 'react-native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../utils/constants';

export const styles = StyleSheet.create({
	mapContainer: {
		width: SCREEN_WIDTH,
		height: SCREEN_HEIGHT,
		display: 'flex',
		backgroundColor: '#F5FCFF',
	},
	map: {
		flex: 1,
	},
});
