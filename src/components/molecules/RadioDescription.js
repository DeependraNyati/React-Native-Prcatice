import { StyleSheet, Text, View ,Button,Image} from 'react-native'
import React,{useState} from 'react'
import ArtistsDescription from './ArtistsDescription';
import HomePage from '../../screens/HomePage';

const RadioDescription = (props) => {
    //const[modalVisible,setModalVisible]=useState(false);
    const Name=props.FirstName+" "+props.LastName;
  return (
    <View style={styles.ModalStyle}>
        <View style={styles.TopView}>
            <Image source={props.ArtistPhoto} style={styles.PhotoStyle}/>
            <Text style={styles.ArtistName}>{Name}</Text>
            <Text style={styles.ArtistRadio}>Artist Radio</Text>
        </View>
        
            <View style={styles.Button}>
            <Button title="Cancel" onPress={()=>props.setModalVisible(false)}/>
            </View>
    </View>
  )
}

export default RadioDescription

const styles = StyleSheet.create({
    ModalStyle:{
        marginLeft:18,
        height:"38%",
        //borderWidth:5,
        position:'absolute',
        bottom:0,
        width:"90%",
        backgroundColor:"white"
    },

    TopView:{
        height:250,
        borderWidth:5
    },
    
    Button:{
        marginTop:20,
        borderWidth:1,
        borderTopEndRadius:15,
        borderBottomEndRadius:15,
        borderTopLeftRadius:15,
        borderBottomLeftRadius:15
    },
    PhotoStyle:{
        height:180,
        width:180,
        borderRadius:180,
        marginLeft:83,
        position:'absolute',
        bottom:120

    },
    ArtistName:{
        marginTop:150,
        marginLeft:126,
        fontWeight:"bold",
        fontSize:18
    },
    ArtistRadio:{
        marginTop:200,
        marginLeft:126,
        fontWeight:"bold",
        fontSize:50
    }

})