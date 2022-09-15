import React,{useState} from 'react';
import {Text,View,StyleSheet,Image,Modal,Button,TouchableOpacity} from 'react-native';
import RadioDescription from './RadioDescription';
//import { TouchableOpacity} from 'react-native-gesture-handler';


    


const ArtistsDescription=(props)=>{

    const [modalVisible,setModalVisible]=useState(false);
    const FirstName=props.FirstName;
    const LastName=props.LastName;
    const ArtistPhoto=props.ArtistPhoto;

  return(
      <>
        
      <TouchableOpacity onPress={()=>setModalVisible(!modalVisible)}>
      
    <View style={styles.container}>
        <View>
            <Image 
            style={styles.ImageStyle}
            // source={require('../../assets/images/Sidhu_MooseWaala.jpeg')}/>
            source={props.ArtistPhoto}/>
            <Text style={styles.FirstName}>{props.FirstName}</Text>
            <Text style={styles.LastName}>{props.LastName}</Text>
        </View>
        
        <Modal 
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={()=>{
            setModalVisible(!modalVisible)
        }}>
            {/* <View style={{height:"50%",borderWidth:5,position:'absolute',bottom:0,width:"100%",backgroundColor:"white"}}>
            <View style={{marginTop:60}}>
            <Button title="Close" onPress={()=>setModalVisible(false)}/>
            </View> 
            </View> */}
            <RadioDescription
            ArtistPhoto={ArtistPhoto}
            FirstName={FirstName}
            LastName={LastName}
            setModalVisible={setModalVisible}
            />
    </Modal>
    
    </View>
    
    
    
    </TouchableOpacity>
    
    </>

    
  );
}

export default ArtistsDescription;

const styles=StyleSheet.create({

    container:{
        marginLeft:19,
        // borderWidth:5,
        height:220,
        
    },
    ImageStyle:{
        height:100,
        width:100,
        // borderWidth:5,
        borderRadius:100
    },
    FirstName:{
        marginTop:12,
        marginLeft:30,
        fontSize:18
    },
    LastName:{
        marginLeft:12,
        fontSize:18
    }



})


