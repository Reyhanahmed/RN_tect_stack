import React, { Component } from 'react';
import { Text,
		 StyleSheet,
		 TouchableWithoutFeedback, 
		 View, 
		 LayoutAnimation,
		 UIManager
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import { selectLibrary } from '../actions';

class ListItem extends Component{
	constructor(props){
		super(props);
		UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
	}

	componentWillUpdate(){
		LayoutAnimation.spring();
	}

	renderDescription(){
		const {library, expanded} = this.props;
		if (expanded) {
			return(
				<CardSection>
					<View style={styles.descriptionPanel}>
						<View style={styles.stripStyle}></View>
						<Text style={styles.descriptionStyle}>{library.description}</Text>
					</View>
				</CardSection>
			);
		}
	}

	render(){
		const { onPress } = this.props;
		const {title, id} = this.props.library;
		return(
			<TouchableWithoutFeedback onPress={() => onPress(id)}>
				<View>
					<CardSection>
						<Text style={styles.titleStyle}>
							{title}
						</Text>
					</CardSection>
					{this.renderDescription()}
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	const { selectedLibraryId } = state;
	const expanded = selectedLibraryId === ownProps.library.id;
	return { expanded };
}

const mapDispatchToProps = (dispatch) => {
	return {
		onPress: (id) => {
			dispatch(selectLibrary(id));
		}
	}
}

const styles = StyleSheet.create({
	titleStyle: {
		fontSize: 18,
		paddingLeft: 15,
		color: '#000',
		fontFamily: 'lato-medium'
	},
	descriptionPanel: {
		flex: 1,
		flexDirection: "row",
		marginLeft: 30,
	},
	stripStyle: {
		backgroundColor: '#3498db',
		width: 5,
		borderRadius: 5
	},
	descriptionStyle: {
		flex: 1,
		fontSize: 15,
		marginLeft: 10,
		marginRight: 10,
		fontFamily: 'lato-mediumitalic'
	}
});

export default connect(
	mapStateToProps, 
	mapDispatchToProps
)(ListItem);