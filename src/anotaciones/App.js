import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  StatusBar,
  LogBox, //antes era YellowBox
  Button,
} from 'react-native';
import Form from './src/components/Form';
import Footer from './src/components/Footer';
import colors from './src/utils/colors';

// YellowBox.ignoreWarnings(['Picker has been extracted']);
LogBox.ignoreLogs(['Picker has been extracted']);

export default function App() {
  //esto se grego despues
  // [variable que devuelve, funcion que actualiza]
  // NEcesitamos pasarle por los PROPS las funciones
  //qye actualizan el estado y se lo pasaremos abajo en:
  // <Form /> ahora asi <Form
          //setCapital={setCapital}
          //setInterest={setInterest}
          //setMonths={setMonths}
        ///>
  const [capital, setCapital] = useState(null);
  const [interest, setInterest] = useState(null);
  const [months, setMonths] = useState(null);
  const [total, setTotal] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.background} />
        <Text style={styles.titleApp}>COTIZADOR DE PRESTAMO</Text>
        <Form
          setCapital={setCapital}
          setInterest={setInterest}
          setMonths={setMonths}
        />
      </SafeAreaView>
      
      <View>
        <Text>CONTENIDo</Text>
      </View>

      <Footer />
    </>
  );
}

const styles = StyleSheet.create ({
  safeArea: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 290, // ORiginal era 200
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center',
    

  },
  background: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: 'absolute',
    zIndex: -1,
  },
  

  titleApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 15,

  },
});