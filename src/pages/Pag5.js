import { Image, Text, View, StyleSheet, FlatList } from "react-native";
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
});

const DATA = [
  {
    id: '4de34b17-98f5-4b6d-98c1-36f913d12f3e',
    title: 'Eleven',
    image: 'https://upload.wikimedia.org/wikipedia/en/5/52/Eleven_%28Stranger_Things%29.jpg'
  },
  {
    id: '42e4de16-d158-451b-a864-b8f5050fbbf2',
    title: 'Max Mayfield',
    image: 'https://static.wikia.nocookie.net/strangerthings8338/images/7/73/Max_Mayfield_-_S3.png/revision/latest/scale-to-width/360?cb=20220731231457'
  },
  {
    id: 'e6e6e6c6-08bd-4b7a-aef5-bbcff6c06ff7',
    title: 'Mike Wheeler',
    image: 'https://static.wikia.nocookie.net/strangerthings8338/images/8/83/Mike_Wheeler_-_S4.jpg/revision/latest?cb=20230616204625'
  },
  {
    id: '1bd9429b-03ec-4ad0-b4c7-14e320c8c22f',
    title: 'Dustin Henderson',
    image: 'https://i.ytimg.com/vi/Xz2V96OG3xk/maxresdefault.jpg'
  },
  {
    id: '5e2bb25f-6bf3-4cfc-88b8-418f582c19d3',
    title: 'Lucas Sinclair',
    image: 'https://static.wikia.nocookie.net/strangerthings/images/f/ff/Lucas_Sinclair_001.png/revision/latest?cb=20160818154102&path-prefix=pt-br'
  },
  {
    id: '53ec1543-3d8b-4e62-85ef-4c9e5b2de9f9',
    title: 'Will Byers',
    image: 'https://static.wikia.nocookie.net/strangerthings/images/6/6b/Will_84.png/revision/latest?cb=20220821231035&path-prefix=pt-br'
  },
  {
    id: 'aa57c81a-1bc0-4b34-8e07-225c04b4e555',
    title: 'Jim Hopper',
    image: 'https://conteudo.imguol.com.br/c/entretenimento/86/2019/07/05/jim-hopper-david-harbour-na-terceira-temporada-de-stranger-things-1562343903266_v2_3x4.jpg'
  },
  {
    id: 'f6352edf-54f3-4ef6-84fc-692a13ff7309',
    title: 'Joyce Byers',
    image: 'https://media.vanityfair.com/photos/594c0a35abcbd63dc43099be/1:1/w_1028,h_1028,c_limit/Winona-Stranger-Things.jpg'
  },
  {
    id: 'b2d5a490-3cc7-4ea5-aa70-729c5d4b4150',
    title: 'Jonathan Byers',
    image: 'https://static.wikia.nocookie.net/herois/images/c/cd/Jonathan-Byers-Season-1.jpg/revision/latest?cb=20221009050041&path-prefix=pt-br'
  },
  {
    id: '0a3f2d96-2c02-46b1-94fc-b3aae07e24f0',
    title: 'Nancy Wheeler',
    image: 'https://static.wikia.nocookie.net/strangerthings8338/images/7/7f/NancyWheeler.png/revision/latest/scale-to-width/360?cb=20160819170317'
  },
  {
    id: '9a4a8e9b-1553-4214-913c-83804e551dd1',
    title: 'Steve Harrington',
    image: 'https://static.wikia.nocookie.net/strangerthings8338/images/5/5c/Steve_-_Season_4.jpg/revision/latest?cb=20220719024524'
  },
];


export default function Pag5() {
  return (
    <View style={styles.main}>
      <Text style={{ color: '#FFF', fontSize: 30, marginBottom: 20, fontWeight: 800 }}>Lista de personagens</Text>
      <FlatList
        style={{ backgroundColor: '#FFF', borderRadius: 10, padding: 10, maxHeight: 500, width: '90%' }}
        data={DATA}
        renderItem={({ item }) =>
          <View style={{ padding: 10, borderRadius: 15, margin: 10, backgroundColor: '#5a060a', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <Image source={{ uri: item.image }} style={{ width: 50, height: 50, backgroundColor: 'black', borderRadius: 10, marginLeft: 5 }}></Image>
            <Text style={{ fontSize: 18, color: '#FFF' }}>{item.title}</Text>
          </View>}
        keyExtractor={item => item.id}
      />
    </View>
  );
}