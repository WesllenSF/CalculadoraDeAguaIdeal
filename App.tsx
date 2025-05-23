
import { StyleSheet, Text, View ,TextInput, TouchableOpacity, ImageBackground} from 'react-native';
import { useState } from 'react';

export default function App() {
  // Definindo variavel

  const [peso, setPeso] = useState('');
  const [nome, setAltura] = useState('');
  const [resultado, setResultado] = useState('');

// Função para o calculo
  function calcularAgua(){
    const pesoNum = parseFloat(peso);
    const nomeText = nome;

    const agua = pesoNum * 0.035;

    setResultado(`${nomeText} você deve beber aproximadamente ${agua.toFixed(2)} litros de água por dia.`);

  }

  return (
    <View style={styles.container}>
      
      <Text style={styles.titulo}>Calculadora de Água</Text>

        <View>
            <Text style={styles.label}></Text>

            {/* input da altura */}
              <TextInput 
              style={styles.input} 
              placeholder="Nome"
              value={nome}
              onChangeText={setAltura}  
              />
        </View>
        <View>
            <Text style={styles.label}></Text>
            {/* Input do peso */}
              <TextInput 
              style={styles.input} 
              keyboardType="numeric"
              placeholder="Peso: 70"
              value={peso}
              onChangeText={setPeso}
              />
        </View>

        <View>
          {/* Botão que chama a função do calculo */}
            <TouchableOpacity style={styles.btnTxt} onPress={calcularAgua}>
              <Text style={styles.textBtn}>Calcular</Text>
            </TouchableOpacity>
        </View>

        <View>
        {resultado && (
              <View>
                <Text style={styles.resultado}>{resultado}</Text>
              </View>
            )}
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  resultado: {
    color: 'black',
    marginTop: 25,
    fontSize: 25,
    paddingLeft:10,
    paddingRight:10,
    textAlign: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: 'white',
    color: 'black',
    fontSize: 15,
    width: 250,
    height: 50,
    paddingLeft: 10,
    borderWidth: 0.8,
    borderRadius: 10,
  },
  titulo: {
    color: 'black',
    marginBottom: 80,
    fontSize: 50,
    textAlign: 'center',
  },
  btnTxt: {
    marginTop:  30,
    backgroundColor: 'white',
    color: 'black',
    alignItems: 'center',
    width: 250,
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
  },
  label: {
    paddingBottom:10,
    paddingTop: 10,
  },
  textBtn: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  }
});
