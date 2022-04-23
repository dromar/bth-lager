
import { Text, View, Image, StyleSheet } from "react-native";
import warehouse from "../assets/screws.jpeg";
import config from "../config/config.json";
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';


export default function AppHeader() {

    let [fontsLoaded] = useFonts({
        Inter_900Black,
      });


    return (
        <View style={styles.header}>
            <Text style={{fontSize: 42, justifyContent: "center", fontFamily: "Inter_900Black"}}>Warehouse</Text>
            <Image source={warehouse} style={{ width: 320, height: 240 }} />
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
      flex: 1,
      backgroundColor: config.backgroundColor,
      justifyContent: "center",
      alignItems: "center"
    }
  });
  