import { Image, Text, View, StyleSheet } from "react-native";
import * as Animatable from 'react-native-animatable';

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#0c141c'
  },
  logo: {
    width: 300,
    height: 300,
  },
});


export default function Pag1() {
  return (
    <View style={styles.main}>
      <Animatable.Image animation='pulse' iterationCount='infinite' style={styles.logo} source={require('../images/logo.png')}></Animatable.Image>
    </View>
  );
}