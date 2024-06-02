import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {screens} from './src/config/navigation/screens';

import {RootStackParamList} from './src/config/navigation/types';

const stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator>
        {screens.map(screen => (
          <stack.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
            options={screen.options}
          />
        ))}
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
