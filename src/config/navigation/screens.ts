import Main from '../../pages/main';
import Login from '../../pages/login';
import Signup from '../../pages/signup';
import {RootStackParamList} from './types';

export const screens: Array<{
  name: keyof RootStackParamList;
  component: React.ComponentType<any>;
  options?: object;
}> = [
  {name: 'Main', component: Main, options: {headerShown: false}},
  {name: 'Login', component: Login, options: {headerShown: false}},
  {name: 'Signup', component: Signup, options: {headerShown: false}},
];
