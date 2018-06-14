// import libraries to amke a component 
import React from 'react';
import { View, Text } from 'react-native';

// make a component 
const Header = () => {
    const { viewStyle, textStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>Hello Rikki!</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#E1234D'
    },
    textStyle: {
        fontSize: 60
    }
};
// Make the component available to other parts
export default Header;
