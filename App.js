import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';


import Header from './src/components/Header';
import Contents from './src/components/Contents';


export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
      <Header title="Team-Focused"/>
      <Contents/>
      <StatusBar style="auto" />
    </View>
    </SafeAreaProvider>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
   
  },
});
