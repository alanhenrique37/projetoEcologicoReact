import { View, TextInput, StyleSheet, Button, Alert, Image, Text, TouchableOpacity} from 'react-native'

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
          <View style={styles.logos}>
          <Image
                style={{width: 100, height: 100}}
                source={require('../../assets/images/logo.png')}
                />
          
          </View>
          <View>
          <Text style={styles.titulo}>Gestão de Resíduos</Text>
          </View>

          <View style={styles.geral}>
          
         
          <View style={styles.verRegistros}>
            <Text style={styles.tituloReg}>  Registros</Text>
                <TouchableOpacity style={styles.categorias}>
                    <Text style={styles.estiloCat}>Reciclável</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categorias}>
                    <Text style={styles.estiloCat}>Não Reciclável</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categorias}>
                    <Text style={styles.estiloCat}>Óleo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categorias}>
                    <Text style={styles.estiloCat}>Tampinhas</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categorias}>
                    <Text style={styles.estiloCat}>Lacres</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categorias}>
                    <Text style={styles.estiloCat}>Tecidos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categorias}>
                    <Text style={styles.estiloCat}>Meias</Text>
                </TouchableOpacity>
          
            <TouchableOpacity style={styles.botaoGeral}><Text style={styles.botaoVer}>Ver Todos</Text></TouchableOpacity>
          </View>
          <View style={styles.geral2}>
          <View style={styles.registrar}>
            <Text style={styles.tituloRegistrar}> Registrar novo       Resíduo</Text>
            <TouchableOpacity style={styles.botaoRegistrar}><Text style={styles.textoRegistrar}>Registrar</Text></TouchableOpacity>
          </View>
          <View style={styles.sincronizar}>
            <Text style={styles.tituloSincronizar}> Sincronizar com Planilha</Text>
            <TouchableOpacity style={styles.botaoSincronizar}><Text style={styles.textoSincronizar}>Sincronizar</Text></TouchableOpacity>
          </View>
          </View>
          </View>

 

          
          
         
        </View>
    );
}

const styles = StyleSheet.create({
        container:{
            width: '100%',
            height: '100%',

            backgroundColor: '#6BB848  linear-gradient(90deg,rgba(107, 184, 72, 0.4) 100%, rgba(107, 184, 72, 1) 100%)',

          
        },
        logos: {
            marginTop: 40,
            display:"flex",
            alignItems:"center"
          

        },
       
        titulo: {
            textAlign:"center",
            fontSize:30,
            fontWeight: "bold",
            color: "#6BB848",
        },
        verRegistros: {
            width:"45%",
            height:"63%",
            backgroundColor:"#6BB848",
            borderRadius: 50,
            marginTop: 30,
            textAlign:"center",
            alignItems:"center",
            marginLeft:10,
      
           
                        
        },
        tituloReg:{
            textAlign:"center",
            paddingTop:15,
            paddingBottom:5,
            fontSize:22,
            paddingRight: 10,
            fontWeight:"bold",
            color:"white",
        },
        botaoVer: {
            fontSize:14,
            color:"white",
            fontWeight:"800",
                        
        },
        botaoGeral: {
            width:100,
            height:35,
            backgroundColor:"#4F9231",
            borderRadius:10,
            alignItems:"center",
            display:"flex",
            justifyContent:"center",
            marginTop:20
        },
        categorias: {
            width: 140,
            height: 35,
            backgroundColor:"#6BB848",
            borderColor:'white',
            borderWidth: 3,
            borderRadius: 10,
            marginTop: 10,
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
        },
        estiloCat: {
            fontSize:16,
            color:"white",
            fontWeight:"600",


        },
        registrar: {
            width:"45%",
            height:"30%",
            backgroundColor:"#6BB848",
            borderRadius: 50,
            marginTop: 30,
            marginLeft: 15,
            textAlign:"center",
            alignItems:"center",
            
        
          
        },
        tituloRegistrar:{
            textAlign:"center",
            paddingTop:30,
            
            fontSize:20,
            fontWeight:"bold",
            color:"white",
        },
        textoRegistrar: {
            fontSize:18,
            color:"white",
            fontWeight:"700",
                        
        },
        botaoRegistrar: {
            width:160,
            height:35,
            backgroundColor:"#4F9231",
            borderRadius:10,
            alignItems:"center",
            display:"flex",
            justifyContent:"center",
            marginTop:30,
            textAlign:"center",
        },
        geral: {
            display:"flex",
            flexDirection:"row",
            width:"100%",
            height:"100%",
        },
        geral2: {
            display:"flex",
            flexDirection:"column",
            width:"100%",
            height:"100%",
        }, 
        sincronizar: {
            width:"45%",
            height:"30%",
            backgroundColor:"#6BB848",
            borderRadius: 50,
            marginTop: 24,
            marginLeft: 15,
            textAlign:"center",
            alignItems:"center",
            
        
          
        },
        tituloSincronizar:{
            textAlign:"center",
            paddingTop:30,
  
            fontSize:20,
            fontWeight:"bold",
            color:"white",
        },
        textoSincronizar: {
            fontSize:18,
            color:"white",
            fontWeight:"700",
                        
        },
        botaoSincronizar: {
            width:160,
            height:35,
            backgroundColor:"#4F9231",
            borderRadius:10,
            alignItems:"center",
            display:"flex",
            justifyContent:"center",
            marginTop:30,
            textAlign:"center",
        },

    }   
);