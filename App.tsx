import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import GrowthMap from './components/GrowthMap';

export default function App() {
  return (
    <View style={styles.container}>
      <GrowthMap />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
});
