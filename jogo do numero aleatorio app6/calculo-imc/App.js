import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Image} from 'react-native';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      numero1: '',
      numero2: '',
      resultado: ''
    };
    
    this.calcular = this.calcular.bind(this);
  }


  calcular(){

    res = Math.floor(Math.random() * 10)
    this.setState({resultado: res});

  }


  render(){
    return(
      <View style={styles.area}>

      <Text style={styles.titulo2}>Raphael</Text>
      <Text style={styles.titulo}>Jogo do número aleatório</Text>

      <Image
          source={{uri: 'https://www.einerd.com.br/wp-content/uploads/2019/10/Charada-1.jpg'}}
          style={styles.imagem}
        />

      <Text style={styles.titulo}>Pense em um número de 0 a 10</Text>


      <Button title="?? Descobrir ??" onPress={this.calcular} />


      <Text style={styles.texto2}> {this.state.resultado} </Text>
      </View>
    );
  }
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


export default App;