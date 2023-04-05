import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import axios from 'axios';
import HomeScreen from '../HomeScreen';

jest.mock('axios');

type Props = {
  route: {
    params: undefined;
    name: string;
    key: any;
  };
  navigation: {
    navigate: Function;
    goBack: Function;
  }; // Use "any" type for simplicity in this example
};

// type Props = {
//   route: HomeScreenRouteProp;
//   navigation: HomeScreenNavigationProp;
// };

const props: Props = {
  route: {
    params: undefined,
    name: 'Home',
    key: 'Home-Ke6tdVC--ulQsrORuokft',
  },
  navigation: {
    navigate: jest.fn(),
    goBack: jest.fn(),
  },
};

describe('HomeScreen', () => {
  // Component renders correctly
  it('should render the component', () => {
    const {getByText, getByPlaceholderText} = render(<HomeScreen {...props} />);
    expect(getByPlaceholderText('Enter Poke Name')).toBeDefined();
    expect(getByText('Submit')).toBeDefined();
    expect(getByText('Clear')).toBeDefined();
  });

  // Input value updates correctly
  it('should update the input value', () => {
    const {getByPlaceholderText} = render(<HomeScreen {...props} />);
    const input = getByPlaceholderText('Enter Poke Name');
    fireEvent.changeText(input, 'Pikachu');
    expect(input.props.value).toBe('Pikachu');
  });

  // Simulate a successful API call and check navigation to InfoScreen
  it('should navigate to Info screen with picked Pokemon', async () => {
    const navigate = jest.fn();
    const {getByPlaceholderText, getByText} = render(<HomeScreen {...props} />);

    const input = getByPlaceholderText('Enter Poke Name');
    const submitButton = getByText('Submit');

    (axios.get as jest.Mock).mockResolvedValueOnce({
      data: {
        id: 25,
        name: 'pikachu',
        weight: 60,
        base_experience: 112,
      },
    });

    fireEvent.changeText(input, 'Pikachu');
    fireEvent.press(submitButton);

    expect(axios).toHaveBeenCalledWith({
      method: 'get',
      url: 'https://pokeapi.co/api/v2/pokemon/ditto',
    });
    expect(navigate).toHaveBeenCalledWith('Info', {
      info: {
        id: 25,
        name: 'pikachu',
        weight: 60,
        base_experience: 112,
      },
    });
  });

  // Clear button clears the input field correctly
  it('should clear the input value', () => {
    const {getByPlaceholderText, getByText} = render(<HomeScreen {...props} />);
    const input = getByPlaceholderText('Enter Poke Name');
    const clearButton = getByText('Clear');

    fireEvent.changeText(input, 'Pikachu');
    fireEvent.press(clearButton);

    expect(input.props.value).toBe('');
  });
});
