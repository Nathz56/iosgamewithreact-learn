import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Button from './components/button';

export default function Second() {

    const [text, setText] = useState('');

    const jawabanBetul = ['67', '123']

    const checkJawaban = () => {
        if (text === jawabanBetul[0]) {
            console.log('Correct answer!');
    } else if (text === jawabanBetul[1]) {
            console.log('Bener tapi coba tebak angka viral!');
    } else  {
            console.log('Wrong answer, try again!');
    }
};

  return (
    <View style={styles.container}>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="Enter your name"
        placeholderTextColor="#999"
        style={styles.input}
      />

      <Button 
      title = "Submit Jawaban" 
      variant = "primary"
      onPress = {checkJawaban} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '80%',
  },
  input: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});

