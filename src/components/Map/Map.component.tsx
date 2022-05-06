import MapboxGL from '@rnmapbox/maps';
import React, { FC } from 'react';
import { View } from 'react-native';
import { styles } from './Map.styles';
import { MapProps } from './Map.types';

MapboxGL.setAccessToken(null);

export const Map: FC<MapProps> = () => {
	return (
		<View style={styles.mapContainer}>
			<MapboxGL.MapView
				style={styles.map}
				styleJSON={
					'https://api.maptiler.com/maps/bright/style.json?key=TDMJ2TNuxYJntVUlUSPE'
				}>
				<MapboxGL.UserLocation />
			</MapboxGL.MapView>
		</View>
	);
};
