import React from 'react';
import {SafeAreaView, Button, View} from 'react-native';
import {loginStyle} from './styles';

const LoginScreen = ({navigation}) => (
  <SafeAreaView style={loginStyle.backgroundStyle}>
    <View style={loginStyle.buttonStyle}>
      <Button
        title={'titulo'}
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
    </View>
  </SafeAreaView>
);

export default LoginScreen;
