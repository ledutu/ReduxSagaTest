import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


export default class ScreenContainer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => this.props.onIncrease(1)}>
          <Text style={{ fontSize: 20, }}>+</Text>
        </TouchableOpacity>
        <Text style={{fontSize: 20}}>{this.props.count}</Text>
        <TouchableOpacity style={styles.button} onPress={() => this.props.onDecrease(1)}>
          <Text style={{ fontSize: 20, }}>-</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#333333',
    borderRadius: 10,
  }
});
