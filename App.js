import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function App() {

  const [number, setNumber] = React.useState('');
  const [answer, setAnswer] = React.useState(Math.floor(Math.random() * 100) + 1);
  const [totalGuess, setTotalGuess] = React.useState(1);
  const [open, setOpen] = React.useState(false);
  const [alert, setAlert] = React.useState('');

  const genNumber = () => {
    const guess = parseInt(number);
    if (guess === answer) {
      setTotalGuess(totalGuess + 1);
      Alert.alert('Congratulations! You guessed the number in ' + totalGuess + ' guesses.')
      setOpen(true) 
    } 
    else if (guess < answer && guess > 0){
      setAlert('Your guess ' + number + ' is too low');
      setOpen(true)
      setTotalGuess(totalGuess + 1);
    }
    else if (guess > answer && guess < 100){
      setAlert('Your guess ' + number + ' is too high')
      setTotalGuess(totalGuess + 1);
    }
    else if (guess < 1 || guess > 100){
      Alert.alert('Enter number between 1-100!')
    }
    else{
      Alert.alert('error')
    }
  }

  return (
    <View style={styles.container}>
    <StatusBar style="auto" />
        <Text style={styles.header}>
          Guess a number between 1-100
        </Text>
      <View style={styles.alertbox}>
        <Text style={styles.basictext} open={false}>
          {alert}
        </Text>
      </View>
      <View>
        <TextInput
          style={styles.textinput}
          keyboardType = 'numeric'
          onChangeText={number => setNumber(number)}
          value={number}
        />
      </View>
      <View>
        <Button onPress={() => genNumber()} title='Make Guess'
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 20,
  },
  basictext: {
    fontSize: 15,
  },
  textinput: {
    width: 50,
    height: 30,
    borderColor: 'black',
    borderWidth: 1,
    margin: 10,
  },
  alertbox: {
    marginTop: 10,
  }
});
