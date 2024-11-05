// GrantFormScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { styles } from './style';

export default function ExpensesFormScreen() {
  const [grantName, setGrantName] = useState('');
  const [grantAmount, setGrantAmount] = useState('');
  const [program, setProgram] = useState('');

  const handleSubmit = () => {
    // Handle the form submission here (e.g., send data to the backend)
    console.log('Grant Name:', grantName);
    console.log('Grant Amount:', grantAmount);
    console.log('Program:', program);
  };

  return (
    <View style={styles.container}>
      {/* Grant Name Input */}
      <TextInput
        style={styles.input}
        placeholder="Grant Name"
        value={grantName}
        onChangeText={setGrantName}
      />

      {/* Grant Amount Input */}
      <TextInput
        style={styles.input}
        placeholder="Grant Amount"
        value={grantAmount}
        onChangeText={setGrantAmount}
        keyboardType="numeric"
      />

      {/* Program Input */}
      <TextInput
        style={styles.input}
        placeholder="Program"
        value={program}
        onChangeText={setProgram}
      />

      {/* Submit Button */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Enter</Text>
      </TouchableOpacity>
    </View>
  );
}
