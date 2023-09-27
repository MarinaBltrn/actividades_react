import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';

export default function SignUpView() {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmarContrasena, setConfirmarContrasena] = useState('');

  const handleSignUp = () => {
    if (!usuario || !contrasena || !confirmarContrasena) {
      return alert('Por favor, complete todos los campos');
    }
    confirmarContrasena === contrasena ? alert(`Bienvenido ${usuario}`) : alert('Las contraseñas no coinciden');
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.mainImage}
        source={require('./assets/zeiza_gaming1.2.png')}
      />
      <Text style={styles.title}>Z G A</Text>
      <Text style={styles.titleDown}>Zeiza Gaming Applications</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Nombre de usuario"
        value={usuario}
        onChangeText={setUsuario}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={contrasena}
        onChangeText={setContrasena}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirmar contraseña"
        secureTextEntry
        value={confirmarContrasena}
        onChangeText={setConfirmarContrasena}
      />
      <View style={styles.buttonLine}>
        <TouchableOpacity style={styles.buttonA} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Crear cuenta</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonB} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Ya tengo cuenta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D7C1FA',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 6,
  },
  titleDown: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 24,
  },
  input: {
    borderWidth: 2,
    borderColor: '#000',
    fontWeight: 'bold',
    borderRadius: 4,
    padding: 8,
    marginVertical: 8,
    width: '80%',
  },
  buttonA: {
    backgroundColor: '#DFB115',
    padding: 12,
    borderRadius: 4,
    margin: 24,
  },
  buttonB: {
    backgroundColor: '#DFB115',
    padding: 12,
    borderRadius: 4,
    margin: 24,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  mainImage: {
    width: 100,
    height: 100,
  },
  buttonLine:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 48,
  }
});