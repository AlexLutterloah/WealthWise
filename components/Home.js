import { Text, View, StyleSheet, Image, SafeAreaView } from 'react-native';
import { Button, IconButton } from 'react-native-paper';
import { useNumericValues } from '../components/DataProvider';

export default function Home({ navigation }) {
  const { numericValues } = useNumericValues();

  // Used to format numbers to 2 decimal places
  const formatNumber = (number) => {
    // Create a new Intl.NumberFormat object with options to format as currency
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD', // Set the currency to USD (United States Dollar)
      minimumFractionDigits: 2, // Minimum number of fraction digits
    });

    // Use the formatter to format the number as money
    return formatter.format(number);
  };

  // Sum all of the asset variables
  const sumAssetValues = () => {
    // Extract asset values from numericValues object
    const { assetSavings, assetRothIRA, assetTraditional, assetInvestments, assetAuto, assetHouse, assetOther } = numericValues;

    // Calculate the sum of all asset values
    const totalAssets = assetSavings + assetRothIRA + assetTraditional + assetInvestments + assetAuto + assetHouse + assetOther;

    return totalAssets;
  };

  // Sum all of the liability variables
  const sumLiabilityValues = () => {
    // Extract liability values from numericValues object
    const { liabilityPersonal, liabilityAuto, liabilityStudent, liabilityMortgage, liabilityOther } = numericValues;

    // Calculate the sum of all liability values
    const totalLiabilities = liabilityPersonal + liabilityAuto + liabilityStudent + liabilityMortgage + liabilityOther;

    return totalLiabilities;
  };

  // Get the total net worth
  let assetTotal, liabilityTotal, totalNetWorth;
  assetTotal = sumAssetValues();
  liabilityTotal = sumLiabilityValues();
  totalNetWorth = assetTotal - liabilityTotal; 

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

        <View style={{ alignItems: 'center', marginTop: 40 }}>
          <Text style={{ color: '#ABA6A6', fontSize: 15 }}>
            TOTAL NET WORTH
          </Text>
          <Text
            style={{
              color: '#419A40',
              fontSize: 30,
              marginBottom: 70,
              fontWeight: 700,
            }}>
            {formatNumber(totalNetWorth)}
          </Text>
        </View>

        <View style={styles.columnContainer}>
          <Text style={{ color: '#ABA6A6', fontSize: 15, width: '50%' }}>
            Assets
          </Text>
          <Text style={{ color: '#ABA6A6', fontSize: 15, paddingBottom: 15 }}>
            Liabilities
          </Text>
        </View>

        <View style={styles.columnContainer}>
          <Text style={styles.tableText}>
            Savings{'\n'}
            <Text style={{ fontSize: 15, color: '#419A40' }}>{formatNumber(numericValues.assetSavings)}</Text>
          </Text>
          <Text style={styles.tableText}>
            Personal Loan{'\n'}
            <Text style={{ fontSize: 15, color: '#ff0000' }}>{formatNumber(numericValues.liabilityPersonal)}</Text>
          </Text>
        </View>

        <View style={styles.columnContainer}>
          <Text style={styles.tableText}>
            Roth IRA{'\n'}
            <Text style={{ fontSize: 15, color: '#419A40' }}>{formatNumber(numericValues.assetRothIRA)}</Text>
          </Text>
          <Text style={styles.tableText}>
            Auto Loan{'\n'}
            <Text style={{ fontSize: 15, color: '#ff0000' }}>{formatNumber(numericValues.liabilityAuto)}</Text>
          </Text>
        </View>

        <View style={styles.columnContainer}>
          <Text style={styles.tableText}>
            401k{'\n'}
            <Text style={{ fontSize: 15, color: '#419A40' }}>{formatNumber(numericValues.assetTraditional)}</Text>
          </Text>
          <Text style={styles.tableText}>
            Student Loan{'\n'}
            <Text style={{ fontSize: 15, color: '#ff0000' }}>{formatNumber(numericValues.liabilityStudent)}</Text>
          </Text>
        </View>

        <View style={styles.columnContainer}>
          <Text style={styles.tableText}>
            Investments{'\n'}
            <Text style={{ fontSize: 15, color: '#419A40' }}>{formatNumber(numericValues.assetInvestments)}</Text>
          </Text>
          <Text style={styles.tableText}>
            Mortgage{'\n'}
            <Text style={{ fontSize: 15, color: '#ff0000' }}>{formatNumber(numericValues.liabilityMortgage)}</Text>
          </Text>
        </View>

        <View style={styles.columnContainer}>
          <Text style={styles.tableText}>
            Auto{'\n'}
            <Text style={{ fontSize: 15, color: '#419A40' }}>{formatNumber(numericValues.assetAuto)}</Text>
          </Text>
          <Text style={styles.tableText}>
            Other{'\n'}
            <Text style={{ fontSize: 15, color: '#ff0000' }}>{formatNumber(numericValues.liabilityOther)}</Text>
          </Text>
        </View>

        <View style={styles.columnContainer}>
          <Text style={styles.tableText}>
            House{'\n'}
            <Text style={{ fontSize: 15, color: '#419A40' }}>{formatNumber(numericValues.assetHouse)}</Text>
          </Text>
          <Text style={styles.tableText}> </Text>
        </View>

        <View style={styles.columnContainer}>
          <Text style={styles.tableText}>
            Other{'\n'}
            <Text style={{ fontSize: 15, color: '#419A40' }}>{formatNumber(numericValues.assetOther)}</Text>
          </Text>
          <Text style={styles.tableText}> </Text>
        </View>

        <View style={{ marginTop: 70 }}>
          <Button
            style={{ marginBottom: 10 }}
            theme={{ colors: { primary: 'green' } }}
            mode="contained"
            onPress={() => navigation.navigate('Assets')}>
            UPDATE ASSETS
          </Button>
          <Button
            theme={{ colors: { primary: 'red' } }}
            mode="contained"
            onPress={() => navigation.navigate('Liabilities')}>
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
  columnContainer: {
    flexDirection: 'row',
    marginLeft: 20,
  },
  tableText: {
    color: '#FFFFFF',
    fontSize: 15,
    width: '50%',
    paddingBottom: 10,
  },
});
