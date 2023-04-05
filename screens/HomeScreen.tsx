import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
  Button,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackScreenProps} from '@react-navigation/stack';
import axios, {AxiosResponse} from 'axios';

import {
  HomeScreenNavigationProp,
  HomeScreenRouteProp,
  StackParamList,
} from '../types';

// type Props = StackScreenProps<StackParamList, 'Home', 'MyStack'>;

// type Props = {
//   route: HomeScreenRouteProp;
//   navigation: HomeScreenNavigationProp;
// };
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
type State = {
  inputValue: string;
};

class HomeScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  // componentDidMount() {
  //   const {name, age} = this.props;
  //   this.setState({
  //     message: `Hello, ${name}! You are ${age} years old.`,
  //   });
  // }

  handleChange = (text: string) => {
    this.setState({inputValue: text});
  };

  handleSubmit = async () => {
    const config = {
      method: 'get',
      url: `https://pokeapi.co/api/v2/pokemon/ditto`,
    };

    await axios(config).then((response: AxiosResponse) => {
      console.log(response.data);
      const picked = (({id, name, weight, base_experience}) => ({
        id,
        name,
        weight,
        base_experience,
      }))(response.data);
      this.props.navigation.navigate('Info', {info: picked});
    });
  };

  handleClear = () => {
    this.setState({inputValue: ''});
    console.log('PROPS', this.props.navigation);
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.input}>
          <TextInput
            placeholder="Enter Poke Name"
            value={this.state.inputValue}
            onChangeText={this.handleChange}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={this.handleSubmit} title="Submit" />
          <Button onPress={this.handleClear} title="Clear" />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '90%',
    borderWidth: 1,
    margin: 20,
    borderRadius: 15,
    paddingLeft: 10,
  },
  buttonContainer: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default HomeScreen;
