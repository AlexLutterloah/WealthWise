import { Text, View, StyleSheet, Image, SafeAreaView } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

export default function Login({ navigation }) {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 40,
        }}>
        <Image
          style={{ width: 250, height: 120 }}
          source={require('../assets/text-logo.png')}
        />
      </View>

      <View style={{ paddingTop: 100, paddingLeft: 50, paddingRight: 50 }}>
        <Text style={{ color: '#FFFFFF', fontSize: 18 }}>Username</Text>
        <TextInput
          style={{ height: 30 }}
          theme={{
            colors: { primary: 'grey', underlineColor: 'transparent' },
          }}
          mode="outlined"
        />
      </View>

      <View style={{ paddingLeft: 50, paddingRight: 50, paddingTop: 10 }}>
        <Text style={{ color: '#FFFFFF', fontSize: 18 }}>Password</Text>
        <TextInput
          style={{ height: 30 }}
          theme={{
            colors: { primary: 'grey', underlineColor: 'transparent' },
          }}
          mode="outlined"
          secureTextEntry={true}
        />
      </View>

      <View style={{ marginTop: 70, paddingLeft: 50, paddingRight: 50 }}>
        <Button
          theme={{ colors: { primary: 'green' } }}
          mode="contained"
          onPress={() => navigation.navigate('Home')}>
          LOGIN
        </Button>
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
});
