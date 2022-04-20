import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import warehouse from "./assets/warehouse.jpg";
import Stock from "./components/Stock.tsx";


export default function App() {
  return (
    <View style={styles.base}>
      <Text style={{color: "#33c", fontSize: 42}}>Daro15s lager-app</Text>
      <Image source={warehouse} style={{ width: 320, height: 240 }} />
      <Stock />
      <StatusBar style="auto" />
    </View>
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
    paddingRight: 12,
  }
});
