import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, SafeAreaView } from 'react-native';
import { TextInput, Button, IconButton, Surface } from 'react-native-paper';
import { useNumericValues } from '../components/DataProvider';

export default function Assets({ navigation }) {
  const { updateNumericValue } = useNumericValues();

  const [inputValues, setInputValues] = useState({
    liabilityPersonal: '',
    liabilityAuto: '',
    liabilityStudent: '',
    liabilityMortgage: '',
    liabilityOther: ''
  });

  const handleTextInputChange = (variableName, value) => {
    setInputValues(prevState => ({
      ...prevState,
      [variableName]: value,
    }));
  };

  const handleSubmit = () => {
    Object.entries(inputValues).forEach(([key, value]) => {
      const numericValue = parseFloat(value);
      if (!isNaN(numericValue)) {
        updateNumericValue(key, numericValue);
      }
    });
    // Navigate to the 'Home' screen
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image
            style={{ width: 25, height: 43 }}
            source={require('../assets/logo.png')}
          />
          <IconButton
            style={{ paddingBottom: 10 }}
            icon="logout"
            color="#FFF"
            size={25}
            onPress={() => navigation.navigate('Login')}
          />
        </View>

        <View style={{ alignItems: 'center' }}>
          <Image
            style={{ width: 250, height: 34 }}
            source={require('../assets/wealthwise.png')}
          />
        </View>

        <View style={{ marginTop: 40 }}>
          <Surface style={styles.surface} elevation={3}>
            <Text>Personal Loan</Text>
            <TextInput
              theme={{
                colors: { primary: 'black', underlineColor: 'transparent' },
              }}
              mode="outlined"
              keyboardType="numeric"
              style={styles.input}
              onChangeText={(value) => handleTextInputChange('liabilityPersonal', value)}
              value={inputValues.liabilityPersonal}
            />
            <Text>Auto Loan</Text>
            <TextInput
              theme={{
                colors: { primary: 'black', underlineColor: 'transparent' },
              }}
              mode="outlined"
              keyboardType="numeric"
              style={styles.input}
              onChangeText={(value) => handleTextInputChange('liabilityAuto', value)}
              value={inputValues.liabilityAuto}
            />
            <Text>Student Loan</Text>
            <TextInput
              theme={{
                colors: { primary: 'black', underlineColor: 'transparent' },
              }}
              mode="outlined"
              keyboardType="numeric"
              style={styles.input}
              onChangeText={(value) => handleTextInputChange('liabilityStudent', value)}
              value={inputValues.liabilityStudent}
            />
            <Text>Mortgage</Text>
            <TextInput
              theme={{
                colors: { primary: 'black', underlineColor: 'transparent' },
              }}
              mode="outlined"
              keyboardType="numeric"
              style={styles.input}
              onChangeText={(value) => handleTextInputChange('liabilityMortgage', value)}
              value={inputValues.liabilityMortgage}
            />
            <Text>Other</Text>
            <TextInput
              theme={{
                colors: { primary: 'black', underlineColor: 'transparent' },
              }}
              mode="outlined"
              keyboardType="numeric"
              style={styles.input}
              onChangeText={(value) => handleTextInputChange('liabilityOther', value)}
              value={inputValues.liabilityOther}
            />
          </Surface>
        </View>

        <View style={{ marginTop: 70 }}>
          <Button
            theme={{ colors: { primary: 'red' } }}
            mode="contained"
            onPress={handleSubmit}>
            UPDATE LIABILITIES
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#224B35',
    padding: 8,
  },
  container: {
    marginLeft: 15,
    marginRight: 15,
  },
  imgContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  surface: {
    padding: 10,
    width: '100%',
    backgroundColor: '#FFCCCB',
    borderRadius: 10,
  },
  input: {
    width: 250,
    height: 20,
    fontSize: 12,
    marginTop: -5,
  },
});

