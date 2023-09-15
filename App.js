import 'react-native-gesture-handler'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Pag1 from './src/pages/Pag1';
import Pag2 from './src/pages/Pag2';
import Pag3 from './src/pages/Pag3';
import Pag4 from './src/pages/Pag4';
import Pag5 from './src/pages/Pag5';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator screenOptions={{ drawerType: 'slide', headerTransparent: true, headerTintColor: '#FFF', drawerActiveTintColor: '#FFF', drawerStyle: { backgroundColor: '#0b0b20' }, drawerInactiveTintColor: '#FFF' }}>
      <Drawer.Screen name="Home" component={Pag1} />
      <Drawer.Screen name="Atrizes" component={Pag2} />
      <Drawer.Screen name="Sadie" component={Pag3} />
      <Drawer.Screen name="Millie" component={Pag4} />
      <Drawer.Screen name="Personagens" component={Pag5} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}