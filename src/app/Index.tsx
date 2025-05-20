import { View, TextInput, StyleSheet, Button, Alert, Image} from 'react-native'
import { Campo } from '@/components/Campos'
import { useState } from 'react'
import { useClienteDataBase, ClienteDataBase } from '@/database/useClienteDataBase'
import { useNavigation } from 'expo-router'

export default function Index(){
    const [id, setId] = useState("")
    const [dataResiduo, setDatResiduo] = useState("")
    const [categoria, setCategoria] = useState("")
    const [peso, setPeso] = useState("")
    const [cliente, setCliente] = useState<ClienteDataBase[]>()
    const clienteDataBase = useClienteDataBase();
    const navigation = useNavigation()

    async function create(){
        try{
            const response = await clienteDataBase.create({
               dataResiduo,
               categoria,
               peso
            })

            Alert.alert("Cliente cadastrado com sucesso! ID: " + response.insertedRowId)
        }catch(error){
            console.log(error)
        }
    }//fim da create

    return (
        <View style={styles.container}>
          
         
        </View>
    );
}

const styles = StyleSheet.create({
        container:{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            backgroundColor: '#6BB848',
            alignItems: "center",
        },
    }   
);