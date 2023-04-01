import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Image} from 'react-native';


export default function App(){
  const [resultado, setResultado] = useState('')


  function calcular(){

    res = Math.floor(Math.random() * 10)
    setResultado((res))

  }


    return(
      <View style={styles.area}>

      <Text style={styles.titulo2}>Raphael</Text>
      <Text style={styles.titulo}>Jogo do número aleatório</Text>

      <Image
          source={{uri: 'https://www.einerd.com.br/wp-content/uploads/2019/10/Charada-1.jpg'}}
          style={styles.imagem}
        />

      <Text style={styles.titulo}>Pense em um número de 0 a 10</Text>


      <Button title="?? Descobrir ??" onPress={calcular} />


      <Text style={styles.texto2}> {resultado} </Text>
      </View>
    );
  
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  input:{
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  texto:{
    textAlign: 'center',
    fontSize: 25,
  },
  texto2:{
    textAlign: 'center',
    fontSize: 90,
  },
  titulo:{
    fontSize: 18,
    alignSelf: 'center',
    color: 'green',
    marginTop: 20
  },
  titulo2:{
    fontSize: 30,
    alignSelf: 'center',
    color: 'black',
    marginTop: 20
  },
  imagem:{
    width: 200, 
    height: 150, 
    marginTop: 10, 
    alignSelf: "center"
  }

})

