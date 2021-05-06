import React from 'react';

import {
    SafeAreaView,
    ScrollView,
    useColorScheme,
    View,  
  } from 'react-native';
  
  import {
    Colors
  } from 'react-native/Libraries/NewAppScreen';

export default ({children})=> {
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.lighter : Colors.lighter,
    };

    return (
       <SafeAreaView style={backgroundStyle}>
          <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
              <View>
                {children}
              </View> 
          </ScrollView>
      </SafeAreaView>
    )
}

