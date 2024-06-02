import {View, Text, Button} from 'react-native';
import React from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../config/navigation/types';

type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

const Login = ({navigation}: LoginProps) => {
  return (
    <View>
      <Text>Login</Text>
      <Button
        title="회원가입으로 이동"
        onPress={() => navigation.navigate('Signup')}
      />
    </View>
  );
};

export default Login;
