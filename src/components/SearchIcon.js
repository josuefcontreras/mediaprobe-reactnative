import React from 'react';
import {Icon } from "react-native-elements";
import { useNavigation } from '@react-navigation/native';

export default () => {
    const navigation = useNavigation();
    return (
        <Icon name='search' onPress={()=>{navigation.navigate("SearchForm")}} iconStyle={{color:"#000", paddingRight: 15}}/>
    )
}