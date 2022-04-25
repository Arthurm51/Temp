import { View, Text, StyleSheet, Image, Button } from 'react-native'
import React, {useLayoutEffect} from 'react'

export default function Dados(props) {
    const {entidade, uf, tempMin, tempMax, icon, resumo} = props.route.params

  return (
      <View style={styles.container}>
        <View style={styles.cities} >
        <View >
            <Text style={styles.title}>
                {entidade} - {uf}
            </Text>
            </View>
            <View>
            <View style={styles.temps}>
                <Text>
                Temp Min
                </Text>
                <Text>
                Temp Max
                </Text>
            </View>
            <View style={styles.celsius}>
                <Text style={{
                fontWeight: 'bold'
                }}>
                {tempMin}
                </Text>
                <Text style={{
                fontWeight: 'bold'
                }}>
                {tempMax}
                </Text>
            </View>

            <View style={{
                alignItems: 'center',
            }}>
                <Text style={{
                textAlign: 'center',
                marginTop: 12,
                fontSize: 12,
                }}>
                {resumo}
                </Text>
                <Image style={{ 
                width: 50,
                height: 50,
                marginTop: 10
                }} 
                source={{
                uri: icon
                }}>
                
                </Image>
            </View>
            
            </View>
        </View>
      </View>
    
   
  )
}

const styles = StyleSheet.create({
    
      title: {
        fontWeight:'bold',
        textAlign: 'center',
        fontSize: 16
      },
      temps: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: '8%',
        marginRight: '8%',
        marginTop: 10
      },
      celsius: {
        flexDirection: 'row',
        
        justifyContent: 'space-between',
        marginLeft: '16%',
        marginRight: '16%',
        marginTop: 5
      },
      cities: {
        marginTop: 15,
        borderRadius: 10,
        borderColor: '#9c7c24',
        borderWidth: 1,
        padding: 10,
        marginLeft: '10%',
        marginRight: '10%',
        minWidth: 300,
        marginBottom: 15
      },
      container: {
        flex: 1,
        backgroundColor: '#c9c9c9',
        alignItems: 'center'
      }
})
