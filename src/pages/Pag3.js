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


export default function Pag3() {
  return (
    <View style={styles.main}>
      <Image style={{ width: '100%', height: 200, marginTop: 100 }} source={require('../images/sadie.jpg')}></Image>
      <View style={{ flex: 1 }}>
        <Text style={{color: '#FFF', padding: 10, fontSize: 20}}>Sadie Sink é uma jovem atriz em ascensão conhecida por seu papel como Max em "Stranger Things". Sua atuação cativante trouxe profundidade à dinâmica do grupo de amigos em Hawkins, Indiana, demonstrando uma habilidade notável em capturar as complexidades da adolescência. Além disso, sua versatilidade artística em diferentes projetos cinematográficos e teatrais promete um futuro brilhante na indústria do entretenimento.</Text>
      </View>
    </View>
  );
}