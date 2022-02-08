import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Navigation from './app/navigation/Navigation';
import LoginScreen from './app/screens/LoginScreen/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen/RegisterScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <Navigation></Navigation>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
});
