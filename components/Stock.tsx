import { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import config from "../config/config.json";
import { useFonts, Merriweather_400Regular } from '@expo-google-fonts/merriweather';
import { Inter_900Black } from '@expo-google-fonts/inter';

function StockList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`${config.base_url}/products?api_key=${config.api_key}`)
        .then(response => response.json())
        .then(result => setProducts(result.data));
    }, []);

    const list = products.map((product, index) => <Text key={index} style={{fontSize: 14, padding: 3, fontFamily: "Merriweather_400Regular", marginTop: 0, lineHeight: 20}}>{ product.name + ". I lager: " + product.stock}</Text>);

    return (
        <View>
            {list}
        </View>
    )
}

export default function Stock() {

    let [fontsLoaded] = useFonts({
        Merriweather_400Regular,
        Inter_900Black,
      });


    return (
        <View style={styles.stock}>
            <Text style={{color: "#333", fontSize: 22, fontFamily: "Inter_900Black"}}>Lagerförteckning</Text>
            <StockList  />
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
      flex: 1,
      backgroundColor: config.foregroundColor
    }
  });
  