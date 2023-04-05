import type {RouteProp} from '@react-navigation/native';
import type {StackNavigationProp} from '@react-navigation/stack';
import type {
  NativeStackScreenProps,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

export type pokeType = {
  id: number | undefined;
  name: string | undefined;
  weight: number | undefined;
  base_experience: number | undefined;
};

export type StackParamList = {
  Home: undefined;
  Info: {info: pokeType};
};

export type Navigation<Screen extends keyof StackParamList> =
  NativeStackScreenProps<StackParamList, Screen>;

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  StackParamList,
  'Home'
>;

export type HomeScreenRouteProp = RouteProp<StackParamList, 'Home'>;

// Info Screen Types
export type InfoScreenNavigationProp = StackNavigationProp<
  StackParamList,
  'Info'
>;

export type InfoScreenRouteProp = RouteProp<StackParamList, 'Info'>;
