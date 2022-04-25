import { StyleSheet, FlatList, View, Text, Button, Alert } from 'react-native';
import { Linking } from 'react-native';
import React from 'react'


export default function Sobre() {

  
    

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>
                    Aplicativo criado por Arthur Vieira Machado
                </Text>
                <Text style={{
                    textAlign: 'center',
                    fontSize: 20,
                    marginBottom: 40,
                    width: '80%',
                    marginLeft: '10%',
                }}>
                    Projeto G1 da matéria de Tópicos Especiais em Computação
                </Text>
                <Text style={styles.paragraph}>
                    A proposta deste aplicatibo é a apresentação da previsão do tempo para 5 cidades da região norte do estado do RS.
                </Text>
                <Text style={styles.paragraph}>
                    Para isso usaremos a API do INMET
                </Text>
                <Text style={styles.title} onPress={() => { 
                Linking.openURL('https://www.linkedin.com/in/arthurvieiramachado51/'); 
                }}>
                LinkedIn
                </Text>
                <Text style={styles.title} onPress={() => { 
                Linking.openURL('https://github.com/Arthurm51'); 
                }}>
                GitHub
                </Text>
                <Text style={styles.paragraph}>
                    thuur51@gmail.com
                </Text>
                <Text style={styles.title}>
                    IMED 2022/1
                </Text>



            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c9c9c9',
    },
    title: {
        
        textAlign: 'center',
        marginTop: 30,
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 20,
    
    },  
    paragraph: {
        textAlign: 'center',
        width: '80%',
        marginLeft: '10%',
        marginBottom: 10,
        fontSize: 16,

    },
    
});
