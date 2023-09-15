import { useState } from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";
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
  image: {
    width: 150,
    height: 150,
    borderRadius: 10000
  },
  text: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 25
  }
});


export default function Pag2() {
  const [state, setState] = useState({
    height: 150
  })
  const [state2, setState2] = useState({
    height: 150
  })

  return (
    <View style={styles.main}>
      <Text style={styles.text}>Qual sua atriz favorita da série entre as duas?</Text>
      <View style={{ display: 'flex', flexDirection: 'row', gap: 10, marginTop: 25 }}>
        <View>
          <TouchableOpacity>
            <Animatable.Image animation='pulse' iterationCount='infinite' style={styles.image} source={require('../images/millie.jpg')}></Animatable.Image>
            <Text style={styles.text}>Millie</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Animatable.Image animation='pulse' iterationCount='infinite' style={styles.image} source={require('../images/sadie.jpg')}></Animatable.Image>
            <Text style={styles.text}>Sadie</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}