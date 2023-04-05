import type {RouteProp} from '@react-navigation/native';
import type {StackNavigationProp} from '@react-navigation/stack';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

type HomeScreenProps = {
  route: {
    params: undefined;
    name: string;
  };
  navigation: {
    navigate: Function;
    goBack: Function;
  }; // Use "any" type for simplicity in this example
};

export type pokeType = {
  name: string | undefined;
  id: number | undefined;
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
