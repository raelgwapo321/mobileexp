import { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Home = () => {
  const [count, setCount] = useState(0);
  const [display, setDisplay] = useState(''); // For calculator display

  // Counter functions
  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function handleReset() {
    setCount(0);
  }

  // Calculator functions
  function handleButtonPress(value: string) {
    setDisplay(prevDisplay => prevDisplay + value);
  }

  function handleClear() {
    setDisplay('');
  }

  function handleEqual() {
    try {
      setDisplay(eval(display).toString()); // Use eval to compute the result of the expression
    } catch (error) {
      setDisplay('Error');
    }
  }

  return (
    <View style={styles.container}>
      {/* Counter Section */}
      <Text style={styles.counterText}>The Number: {count}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Increment" onPress={handleIncrement} color="#FD1D1D" />
        <Button title="Decrement" onPress={handleDecrement} color="#FDCB82" />
        <Button title="Reset" onPress={handleReset} color="#833AB4" />
      </View>

      {/* Spacer between Counter and Calculator */}
      <View style={styles.spacer} />

      {/* Calculator Section */}
      <Text style={styles.displayText}>{display || '0'}</Text>
      <View style={styles.buttonContainer}>
        <View style={styles.row}>
          <Button title="7" onPress={() => handleButtonPress('7')} color="#FD1D1D" />
          <Button title="8" onPress={() => handleButtonPress('8')} color="#FDCB82" />
          <Button title="9" onPress={() => handleButtonPress('9')} color="#833AB4" />
          <Button title="/" onPress={() => handleButtonPress('/')} color="#F58529" />
        </View>
        <View style={styles.row}>
          <Button title="4" onPress={() => handleButtonPress('4')} color="#FD1D1D" />
          <Button title="5" onPress={() => handleButtonPress('5')} color="#FDCB82" />
          <Button title="6" onPress={() => handleButtonPress('6')} color="#833AB4" />
          <Button title="*" onPress={() => handleButtonPress('*')} color="#F58529" />
        </View>
        <View style={styles.row}>
          <Button title="1" onPress={() => handleButtonPress('1')} color="#FD1D1D" />
          <Button title="2" onPress={() => handleButtonPress('2')} color="#FDCB82" />
          <Button title="3" onPress={() => handleButtonPress('3')} color="#833AB4" />
          <Button title="-" onPress={() => handleButtonPress('-')} color="#F58529" />
        </View>
        <View style={styles.row}>
          <Button title="0" onPress={() => handleButtonPress('0')} color="#FD1D1D" />
          <Button title="C" onPress={handleClear} color="#FDCB82" />
          <Button title="=" onPress={handleEqual} color="#833AB4" />
          <Button title="+" onPress={() => handleButtonPress('+')} color="#F58529" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
  },
  counterText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#F58529', // Instagram-like color (Orange)
  },
  buttonContainer: {
    gap: 10, // Added gap between buttons for better spacing
    width: '80%',
  },
  spacer: {
    height: 40, // Space between the counter and calculator
  },
  displayText: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#F58529', // Instagram-like color (Orange)
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});

export default Home;