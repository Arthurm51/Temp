import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import React, {useState, useLayoutEffect} from 'react'


export default function Cities(props) {

    const [entidade, setEntidade] = useState('Não informado')
    const [uf, setUf] = useState('Não informado')
    const [tempMin, setTempMin] = useState('Não informado')
    const [tempMax, setTempMax] = useState('Não informado')
    const [resumo, setResumo] = useState('Não informado')
    const [icon, setIcon] = useState('Não informado')

    useLayoutEffect(()=> {
        if (props.entidade)
            setEntidade(props.entidade)
        if (props.uf)
            setUf(props.uf)
        if (props.tempMin)
            setTempMin(props.tempMin)
        if (props.tempMax)
            setTempMax(props.tempMax)
        if (props.resumo)
            setResumo(props.resumo)
        if (props.icon)
            setIcon(props.icon)
    }, [])

  return (
    <TouchableOpacity
    onPress={() => props.navigation.navigate("Dados", {
        entidade: props.entidade,
        uf: props.uf,
        tempMin: props.tempMin,
        tempMax: props.tempMax,
        icon: props.icon,
        resumo: props.resumo,
    })}>

    
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
    </TouchableOpacity>
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
})