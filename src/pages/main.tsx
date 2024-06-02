/* eslint-disable react-hooks/exhaustive-deps */
import {View, Text} from 'react-native';
import React, {useEffect} from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../config/navigation/types';

type MainProps = NativeStackScreenProps<RootStackParamList, 'Main'>;

const Main = ({navigation}: MainProps) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);
  }, []);

  return (
    <View>
      <Text>main</Text>
    </View>
  );
};

export default Main;
