import React, {Component} from 'react';
import {View, Text, TextInput, SafeAreaView, StyleSheet} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamList, pokeType} from '../types';

type Props = NativeStackScreenProps<StackParamList, 'Info'>;

type Nav = Props;

type State = {
  data: pokeType;
};

class InfoScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      data: {id: 0, name: '', weight: 0, base_experience: 0},
    };
  }

  componentDidMount() {
    const {info} = this.props.route.params;
    this.setState({
      data: {
        name: info.name,
        id: info.id,
        weight: info.weight,
        base_experience: info.base_experience,
      },
    });
  }

  render() {
    console.log(this.props.route.params?.info);
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text>Hello Info Screen Here!</Text>
          <Text>Id: {this.state?.data.id}</Text>
          <Text>Name: {this.state?.data.name}</Text>
          <Text>Weight: {this.state?.data.weight}</Text>
          <Text>Base Experience: {this.state?.data.base_experience}</Text>
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
});

export default InfoScreen;
