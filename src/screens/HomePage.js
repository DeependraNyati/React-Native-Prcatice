import React from 'react';
import {Text,View,StyleSheet,Image,FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomePageHeader from '../components/organisms/HomePageHeader';
import ArtistsDescription from '../components/molecules/ArtistsDescription';
import BottomTabNavigator from '../Navigation/BottomTabNavigator';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Data=[
    {
        id:1,
        FirstName:"Sidhu",
            LastName:"Moose...",
            ArtistPhoto:require('../assets/images/Sidhu_MooseWaala.jpeg')
    },
    {
        id:2,
        FirstName:"Arijit",
            LastName:"Singh",
            ArtistPhoto:require('../assets/images/Arijit_Singh.jpeg')
    },
    {
        id:3,
        FirstName:"Diljit",
            LastName:"Dosanjh",
            ArtistPhoto:require('../assets/images/Diljit_Dosanjh.jpeg')
    },
    {
        id:4,
        FirstName:"Sidhu",
            LastName:"Moose...",
            ArtistPhoto:require('../assets/images/Sidhu_MooseWaala.jpeg')
    },
    {
        id:5,
        FirstName:"Arijit",
            LastName:"Singh",
            ArtistPhoto:require('../assets/images/Arijit_Singh.jpeg')
    },
    {
        id:6,
        FirstName:"Diljit",
            LastName:"Dosanjh",
            ArtistPhoto:require('../assets/images/Diljit_Dosanjh.jpeg')
    },
    {
        id:7,
        FirstName:"Sidhu",
            LastName:"Moose...",
            ArtistPhoto:require('../assets/images/Sidhu_MooseWaala.jpeg')
    },
    {
        id:8,
        FirstName:"Arijit",
            LastName:"Singh",
            ArtistPhoto:require('../assets/images/Arijit_Singh.jpeg')
    },
    {
        id:9,
        FirstName:"Diljit",
            LastName:"Dosanjh",
            ArtistPhoto:require('../assets/images/Diljit_Dosanjh.jpeg')
    }
]
const HomePage=()=>{

     const renderItem=({item})=>{
         return(
        <ArtistsDescription
            FirstName={item.FirstName}
            LastName={item.LastName}
            // ArtistPhoto={require('../assets/images/Sidhu_MooseWaala.jpeg')}
            ArtistPhoto={item.ArtistPhoto}
            />
         )
     }
  return(
      <View>
    <View style={styles.Header}>
    <HomePageHeader/>
    </View>
    <View style={styles.Image}>
        <Image source={require('../assets/images/For_Jio_Saavn_App.jpeg')} style={{height:"100%",width:"100%",resizeMode: 'stretch'}}/>
    </View>
    <View style={styles.Artists}>
        <View style={styles.GreetingChoice}> 
        <Text style={styles.Greeting}>Hi There, DPAIN.</Text>
        <Text style={styles.Choice}>SELECT ARTISTS THAT YOU LIKE</Text>
        </View>
        <View style={styles.ArtistsDescription}>
            <FlatList
            data={Data}
            horizontal={true}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            
        />
            {/* <ArtistsDescription
            FirstName="Sidhu"
            LastName="Moose..."
            ArtistPhoto={require('../assets/images/Sidhu_MooseWaala.jpeg')}
            />
            <ArtistsDescription
            FirstName="Arijit"
            LastName="Singh"
            ArtistPhoto={require('../assets/images/Arijit_Singh.jpeg')}
            />
            <ArtistsDescription
            FirstName="Diljit"
            LastName="Dosanjh"
            ArtistPhoto={require('../assets/images/Diljit_Dosanjh.jpeg')}
            /> */}
        </View>
        
    </View>
    <TouchableOpacity>
    <View style={styles.PlaySong}>
            
        </View>
        </TouchableOpacity>
    </View>
  );
}

export default HomePage;


const styles=StyleSheet.create({

    Header:{
        //backgroundColor:"black",
    //    borderWidth:5,
       //height:100

    },
    Image:{
        // borderWidth:5,
        height:260
        

    },
    GreetingChoice:{
        margin:20,
        marginLeft:20
    },
    Greeting:{
        fontSize:25,
        fontWeight:"bold"
    },
    Choice:{
        color:"grey"
    },
    Artists:{
        
        //borderWidth:5,
        height:350
    },
    ArtistsDescription:{
        flexDirection:"row",
        height:300
    },
    PlaySong:{
        
        //borderWidth:5,
        height:55,
        width:"100%"
    }
    
})