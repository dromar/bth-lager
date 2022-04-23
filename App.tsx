import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppHeader from "./components/AppHeader.tsx";
import Stock from "./components/Stock.tsx";
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';


export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.base}>
        <AppHeader />
        <Stock />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  base: {
    flex: 1,
    backgroundColor: "#fff",
    paddingLeft: 12,
    paddingRight: 12
  },
});
