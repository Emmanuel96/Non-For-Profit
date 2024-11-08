// GrantMenuScreen.js

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { styles } from './style';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      {/* Enter Grant Button */}
      <TouchableOpacity style={styles.grantButton} onPress={() => navigation.navigate('grant_form')}>
        <Text style={styles.buttonText}>Enter Grant</Text>
      </TouchableOpacity>

      {/* Enter Expense Button */}
      <TouchableOpacity style={styles.expenseButton} onPress={() => navigation.navigate('expense_form')}>
        <Text style={styles.buttonText}>Enter Expense</Text>
      </TouchableOpacity>

      {/* View Grant Balance Button */}
      <TouchableOpacity style={styles.balanceButton} onPress={() => navigation.navigate('grant_detail')}>
        <Text style={styles.buttonText}>View Grant Balance</Text>
      </TouchableOpacity>

      {/* Note Section */}
      <View style={styles.noteContainer}>
        <Text style={styles.noteText}>Enter grant can be restricted to certain users</Text>
      </View>
    </View>
  );
}

