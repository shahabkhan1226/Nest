





import { StyleSheet, Text, View,StatusBar, Image, TouchableOpacity, ImageBackground, TextInput ,Modal, ScrollView,Alert} from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'

import EvilIcons from 'react-native-vector-icons/EvilIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Entypo from 'react-native-vector-icons/Entypo'
import { launchImageLibrary as _launchImageLibrary, launchCamera as _launchCamera } from 'react-native-image-picker';
let launchImageLibrary = _launchImageLibrary;
let launchCamera = _launchCamera;


const Account = (props) => {
  const [modalVisible, setModalVisible] = useState(false);

  const [name,setname] = useState ("");
  const [about,setabout] = useState ("");
  const [text,settext] = useState ("");
  const [isEditing,setisEditing] = useState (true);
  const [ischanging,setischanging] = useState (false);

  const [selectedImage, setSelectedImage] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ-rqj-T0YTR8n8NU9WHVJnAwT7NMdOYo-lEGDEOt_Gw&s');
  const [iseditable,setiseditable] = useState(true)


  const openImagePicker = () => {
    const options = {
      mediaType: 'photo',
      includeBase74: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };


    launchImageLibrary(options, handleResponse);
  };

  

  const handleCameraLaunch = () => {
    const options = {
      mediaType: 'photo',
      includeBase74: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchCamera(options, handleResponse);
  };

  const handleResponse = (response) => {
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('Image picker error: ', response.error);
    } else {
      let imageUri = response.uri || response.assets?.[0]?.uri;
      setSelectedImage(imageUri);
    }
  };




  const handleEdi =()=> {
    setisEditing(false);
  };

  const Navigation = () => {
    props.navigation.navigate('Imagepicker')
  }
  return (
    <View  style={styles.container}>
      <ScrollView>
            <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} translucent />
            <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View></View>

          <View style={styles.modalView}>
            <View style={{justifyContent:"space-around",width:"100%",flexDirection:"row",marginLeft:45,marginTop:20}}>
                <Text style={{fontSize:20,color:"black"}}>
                    Edit Profile
                </Text>
            <View style={{height:30,width: 30,borderRadius:30,backgroundColor:"white",elevation:7,alignItems:"center"}}> 


          <Entypo
           onPress={() => setModalVisible(!modalVisible)}
          name="cross" size={25} color={'black'} />
          </View>
          </View>
            

            
<View style={{flexDirection:'row',width: "100%",height: '10%',marginLeft:20,marginTop:30.,gap:20}}>
  <TouchableOpacity>
<AntDesign name='camera'size={25} color={'black'}
onPress={handleCameraLaunch}
/>
</TouchableOpacity>
  <Text>
    Take a photo
  </Text>
  </View>
  <View style={{flexDirection:'row',width: "100%",height: '10%',marginLeft:20,marginTop:60.,gap:20}}>
    <TouchableOpacity>
<Entypo name='images'size={25} color={'black'}
onPress={openImagePicker}
/>
</TouchableOpacity>
  <Text>
  Choose photo from gallery  </Text>
  </View>
          </View>
        </View>
      </Modal>
<View style={{flexDirection:"row", marginTop:"10%",backgroundColor:"white",justifyContent:"center",width: '100%',}}>
 
 <View  style={{}}>
       <TouchableOpacity></TouchableOpacity>
 <Text style={{fontSize:25,color:"black",marginTop:10,}}> Profile</Text>
 </View> 
 
 </View>  

    <View style={styles.container2}>


{ selectedImage &&(
   <ImageBackground style={styles.img} imageStyle={{ borderRadius: 84}} source={{uri: selectedImage}}>
    <TouchableOpacity style={styles.imgV}>
    <AntDesign name='camera'size={25} color={'lightgray'} 
      onPress={() => setModalVisible(true)}   
    
    ></AntDesign>

    </TouchableOpacity>
   </ImageBackground>
)
}
    </View>
    <ScrollView>
    <View>

    <Text style={{color:'black',paddingLeft:10,paddingTop:0,fontSize:15,marginLeft:8}}> Name</Text>
       <View style={{height:"10%",width:"90%", borderWidth:0.5,alignSelf:"center",borderRadius:20}}>
       <TextInput  style={{fontSize:15,color:'black',marginLeft:20,}}
         placeholderTextColor="lightgray"
         placeholder={'Shahakhan'}
        keyboardType='numbers-and-punctuation'
        // onChange={handleLogincheak}
        // value={handleLogincheak}

        ></TextInput>
        </View>
        <Text style={{color:'black',paddingLeft:10,paddingTop:0,fontSize:15,marginLeft:8}}> AccountName</Text>
       <View style={{height:"10%",width:"90%", borderWidth:0.5,alignSelf:"center",borderRadius:20}}>
       <TextInput  style={{fontSize:15,color:'black',marginLeft:20,}}
         placeholderTextColor="lightgray"
         placeholder={'shahabkhan'}
        keyboardType='numbers-and-punctuation'
        // onChange={handleLogincheak}
        // value={handleLogincheak}

        ></TextInput>
        </View>
        <Text style={{color:'black',paddingLeft:10,paddingTop:0,fontSize:15,marginLeft:8}}> Date</Text>
       <View style={{height:"10%",width:"90%", borderWidth:0.5,alignSelf:"center",borderRadius:20}}>
       <TextInput  style={{fontSize:15,color:'black',marginLeft:20,}}
         placeholderTextColor="lightgray"
         placeholder={'27/6/2024'}
        keyboardType='numbers-and-punctuation'
        // onChange={handleLogincheak}
        // value={handleLogincheak}

        ></TextInput>
        </View>
        <Text style={{color:'black',paddingLeft:10,paddingTop:0,fontSize:15,marginLeft:8}}> Address</Text>
       <View style={{height:"10%",width:"90%", borderWidth:0.5,alignSelf:"center",borderRadius:20}}>
       <TextInput  style={{fontSize:15,color:'black',marginLeft:20,}}
         placeholderTextColor="lightgray"
         placeholder={'Rahim yaar khan'}
        keyboardType='numbers-and-punctuation'
        // onChange={handleLogincheak}
        // value={handleLogincheak}

        ></TextInput>
        </View>
        <Text style={{color:'black',paddingLeft:10,paddingTop:0,fontSize:15,marginLeft:8}}> phoneNumber</Text>
       <View style={{height:"10%",width:"90%", borderWidth:0.5,alignSelf:"center",borderRadius:20}}>
       <TextInput  style={{fontSize:15,color:'black',marginLeft:20,}}
         placeholderTextColor="lightgray"
         placeholder={'0308---------'}
        keyboardType='numbers-and-punctuation'
        // onChange={handleLogincheak}
        // value={handleLogincheak}

        ></TextInput>
        </View>
        <Text style={{color:'black',paddingLeft:10,paddingTop:0,fontSize:15,marginLeft:8}}> Mail</Text>
       <View style={{height:"10%",width:"90%", borderWidth:0.5,alignSelf:"center",borderRadius:20}}>
       <TextInput  style={{fontSize:15,color:'black',marginLeft:20,}}
         placeholderTextColor="lightgray"
         placeholder='shahab@gmail.com'
        keyboardType='numbers-and-punctuation'
        // onChange={handleLogincheak}
        // value={handleLogincheak}
         ></TextInput>
        </View>
    </View>
    </ScrollView>
    </ScrollView>
    </View>
  )
}

export default Account

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
      },
      container2:{
        height:180,
        width:'100%',
        backgroundColor:'white', 
      
        alignItems:'center',
        justifyContent:'center',
      },
    
      centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 1,
    backgroundColor: 'white',
    borderRadius: 20,
height:'30%',
width: '100%',

  
    shadowColor: '#000',
  
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

 
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
    
      imgV:{
        height:45,
        width:45,
        borderRadius:40,
        backgroundColor:"white",
        elevation:8,
        position:'absolute',
        alignItems:'center',
        justifyContent:'center',
      },
   
   
     
      img:{
        height:155,
        width:150,
        borderRadius:80,
       backgroundColor:"white",
       elevation:7,
        alignItems:'flex-end',
        justifyContent:'flex-end',
        paddingRight:15
      },
    
    
})
