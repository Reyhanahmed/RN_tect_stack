import React from 'react';
import {
	TextInput,
	Text,
	View,
	StyleSheet
} from 'react-native';

const Input = ({label, value, onChangeText, placeholder, secureTextEntry}) => {
	return(
		<View style={styles.container}>
			<Text style={styles.labelStyle}>{label}</Text>
			<TextInput 
				secureTextEntry={secureTextEntry}
				placeholder={placeholder}
				value={value}
				onChangeText={onChangeText}
				style={styles.inputStyle}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	inputStyle: {
		color: '#000',
		paddingLeft: 5,
		paddingRight: 5,
		fontSize: 18,
		lineHeight: 23,
		flex: 4,
		height: 60,
		width: 200,
		padding: 20
	},
	labelStyle: {
		fontSize: 18,
		paddingLeft: 20,
		flex: 2
	},
	container: {
		margin: 2,
		height: 40,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	}
});

export {Input};