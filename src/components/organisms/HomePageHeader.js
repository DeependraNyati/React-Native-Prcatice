import React from 'react';
import {Text,View,StyleSheet} from 'react-native';

const HomepageHeader=()=>{

  return(
    <View style={styles.Header}>
        <View>
        <Text style={styles.Music}>Music</Text>
        </View>
        <View>
            <Text style={styles.Music}>Podcasts</Text>
        </View>
        <View>
            <Text style={styles.Music}>JioTunes</Text>
        </View>
    </View>
  );
}

export default HomepageHeader;


const styles=StyleSheet.create({

    Header:{
        //backgroundColor:"black",
        marginLeft:15,
        marginTop:40,
        
        
        flexDirection:"row",
        height:60


    },
    Music:{
        margin:10,
        fontSize:30
    }
})