import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Dimensions, FlatList } from 'react-native';

const pantallaAltura = Dimensions.get("screen").height;

export default function App() {
  const [tarea, setTarea] = useState('')
  const [tareas, setTareas] = useState([])

  const addTarea = () => {
    setTareas(tareaActual => [...tareaActual, tarea])
    setTarea('')

  }

  const eliminarTarea = (index) =>{
    let temp = [...tareas]
    temp.splice(index, 1)
    setTareas(temp)
  }

  const TaskItem = ({ onPress, tarea }) => {
    let [isChecked, setisChecked] = useState(false)
    return (

      <View style={styles.contenedorTareas}>
        <TouchableOpacity style={styles.botonTarea} onPress={ ()=> setisChecked(!isChecked)}>
          <Text style={[styles.textoBoton, {textAlign:'center', lineHeight:25, fontSize:20}]}>{isChecked? "✔" : ""}</Text> 
        </TouchableOpacity>

        <Text style={styles.textoTareas}>{tarea}</Text>

        <TouchableOpacity style={styles.botonEliminar}>
          <Text style={[styles.textoBoton,{textAlign:'center', lineHeight:25, fontSize:20}]} onPress={onPress}> ✘ </Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.imagenLogo}
        source={require('./assets/zeiza_gaming1.2.png')}
      />
      <Text style={styles.titulo}>ToDoApp</Text>
      <Text style={styles.titleDown}>Lista de tareas</Text>

      <View style={{display:'flex',flexDirection:'row', justifyContent: 'space-between', alignItems:'center', width:'100%'}}>
        <TextInput
          placeholder='Descripción'
          style={styles.textoInput}
          value={tarea}
          onChangeText={setTarea}>
        </TextInput>
        <View style={styles.localizacionBoton}>
          <TouchableOpacity style={styles.boton}>
            <Text
              onPress={addTarea}
              style={[styles.botonTexto,{textAlign:'center', lineHeight:35, fontSize:30}]}>✎</Text>
          </TouchableOpacity>
        </View>
      </View>


      <View style={{ width: '100%' }}>
        <FlatList
          data={tareas}
          keyExtractor={(item) => item}
          renderItem={({ item, index }) => <TaskItem tarea={item} onPress={()=> eliminarTarea(index)} />}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D7C1FA',
    alignItems: 'center',
    padding: 50,
  },

  imagenLogo: {
    width: 100,
    height: 100,
    marginBottom: 5,
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 6,
  },

  titleDown: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 6,
  },

  boton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DFB115',
    borderRadius: 30,
    borderWidth: 1.5,
    borderColor: '#000',
    width: 50,
    height: 50,
  },

  botonTexto: {
    color: '#000',
    fontSize: 30,
  },

  localizacionBoton: {

  },

  textoInput: {
    borderWidth: 1.5,
    borderColor: '#000000',
    borderRadius: 30,
    padding: 10,
    marginVertical: 10,
    width: 250,
  },

  botonTarea: {
    backgroundColor: '#6FDA46',
    height: 30,
    width: 30,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: '#000',
  },

  textoTareas: {
    color: '#000',
    marginLeft: 8,
    flex: 1,
  },

  textoBoton: {
    color: '#000',
    fontSize: 20,
  },

  contenedorTareas: {
    backgroundColor: '#C19CFB',
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    flex: 1,
    opacity: .9,
    marginBottom: 5,
  },

  botonEliminar: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DA4A46',
    height: 30,
    width: 30,
    borderWidth: 1.5,
    borderColor: '#000',
  }
});