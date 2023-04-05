import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {render, fireEvent} from '@testing-library/react-native';

import InfoScreen from '../InfoScreen';
import {StackParamList} from '../../types';
import {Navigation} from '../../types';

type Nav = Navigation<'Info'>['navigation'];
type Route = Navigation<'Info'>['route'];

const navigation = {
  navigate: jest.fn(),
  goBack: jest.fn(),
} as Partial<Nav>;

const route = {
  params: {
    info: {
      id: 25,
      name: 'Pikachu',
      weight: 60,
      base_experience: 112,
    },
  },
} as Route;
const props = {navigation, route} as Navigation<'Info'>;

describe('InfoScreen', () => {
  it('displays the correct information', () => {
    const {getByText} = render(<InfoScreen {...props} />);

    expect(getByText('Hello Info Screen Here!')).toBeDefined();
    expect(getByText('Id: 25')).toBeDefined();
    expect(getByText('Name: Pikachu')).toBeDefined();
    expect(getByText('Weight: 60')).toBeDefined();
    expect(getByText('Base Experience: 112')).toBeDefined();
  });

  it('calls navigate when button is pressed', () => {
    const {getByText} = render(<InfoScreen {...props} />);

    // fireEvent.press();

    // expect(navigation.navigate).toHaveBeenCalledWith('Home');
  });
});
