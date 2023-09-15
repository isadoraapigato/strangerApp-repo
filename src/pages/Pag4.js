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
  text: {
    color: '#FFF'
  }
});


export default function Pag4() {
  return (
    <View style={styles.main}>
      <Image style={{ width: '100%', height: 200, marginTop: 100 }} source={require('../images/milliePequena.jpg')}></Image>
      <View style={{ flex: 1 }}>
        <Text style={{ color: '#FFF', padding: 10, fontSize: 18 }}>Millie Bobby Brown, nascida em 2004 em Marbella, Espanha, é uma talentosa atriz conhecida por seu papel como Eleven em "Stranger Things". Sua interpretação envolvente e emotiva da personagem com poderes telecinéticos a destacou como uma das jovens estrelas mais promissoras da atualidade. A habilidade de Millie em transmitir emoções intensas com sutileza é um testemunho de seu notável talento na indústria do entretenimento.</Text>
      </View>
      <Image style={{ width: '100%', height: 200 }} source={require('../images/millie2.jpeg')}></Image>
    </View>
  );
}