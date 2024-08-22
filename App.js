import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';

const App = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handlePress = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input).toString());
      } catch (e) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else if (value === '+/-') {
      setInput((prevInput) => (prevInput[0] === '-' ? prevInput.slice(1) : '-' + prevInput));
    } else if (value === '%') {
      setInput((prevInput) => (parseFloat(prevInput) / 100).toString());
    } else {
      setInput(input + value);
    }
  };

  const renderButton = (label, color = '#333') => (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }]}
      onPress={() => handlePress(label)}
    >
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.inputText}>{input}</Text>
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.row}>
          {renderButton('C', '#ff6666')}
          {renderButton('+/-', '#ffcc66')}
          {renderButton('%', '#ffcc66')}
          {renderButton('/', '#6c63ff')}
        </View>
        <View style={styles.row}>
          {renderButton('7')}
          {renderButton('8')}
          {renderButton('9')}
          {renderButton('*', '#6c63ff')}
        </View>
        <View style={styles.row}>
          {renderButton('4')}
          {renderButton('5')}
          {renderButton('6')}
          {renderButton('-', '#6c63ff')}
        </View>
        <View style={styles.row}>
          {renderButton('1')}
          {renderButton('2')}
          {renderButton('3')}
          {renderButton('+', '#6c63ff')}
        </View>
        <View style={styles.row}>
          {renderButton('0', '#333')}
          {renderButton('.')}
          {renderButton('=', '#66cc99')}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    justifyContent: 'flex-end',
  },
  display: {
    backgroundColor: '#2c2c2c',
    padding: 30,
    borderRadius: 15,
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  inputText: {
    fontSize: 36,
    color: '#fff',
  },
  resultText: {
    fontSize: 24,
    color: 'gray',
    marginTop: 10,
  },
  buttonsContainer: {
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#333',
    padding: 20,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width / 4 - 30,
    height: 80,
  },
  buttonText: {
    fontSize: 28,
    color: '#fff',
  },
});

export default App;
