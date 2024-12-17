import { View, Text,StatusBar ,TextInput,TouchableOpacity,Alert} from 'react-native'
import React, { useState } from 'react'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import SignUp from './Signup'






  




const handleLogincheak = async () => {
  try {
    const userEmail = await AsyncStorage.getItem('userEmail');
    const userPassword = await AsyncStorage.getItem('userPassword');

   

  } catch (error) {
    console.log('Error checking login:', error);
  }
};

const Information = () => {
  return (
    <View style={{backgroundColor:"white",flex:1}}>
      <ScrollView>
       <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} translucent />

<View style={{flexDirection:"row", marginTop:"25%",backgroundColor:""}}>
<View  style={{backgroundColor:'white',height:40,width:40, justifyContent:'center',alignItems:'center',borderRadius:60,marginLeft:"10%",elevation:7}}>
      
      <SimpleLineIcons name='arrow-left' size={14} color={'black'} 
      onPress={() => navigation.goBack()} 
      />
</View>
<View  style={{marginLeft:"20%",}}>
      
<Text style={{fontSize:20,color:"black"}}> Information</Text>
</View> 
</View>
<View style={{flexDirection:"row",height:"15%",width:"100%",justifyContent:"center"}}>
<View  style={{backgroundColor:'white',height:120,width:120, justifyContent:'center',alignItems:'center',borderRadius:120,elevation:7,alignSelf:"center",marginTop:70}}>
      
      <FontAwesome name='user-circle' size={54} color={'lightgay'} 
      />
</View>
</View>
<View  style={{backgroundColor:'white',height:40,width:40, justifyContent:'center',alignItems:'center',borderRadius:60,elevation:7,marginLeft:220}}>
      
<FontAwesome name='camera' size={14} color={'lightgay'} 
      />
</View>
<Text style={{color:'black',paddingLeft:10,paddingTop:10,fontSize:15,marginLeft:7}}> AccountName</Text>
       <View style={{height:"6%",width:"90%", borderWidth:0.5,alignSelf:"center",borderRadius:20}}>
       <TextInput  style={{fontSize:15,color:'black',marginLeft:20,}}
         placeholderTextColor="lightgray"
         placeholder={'Color'}
        keyboardType='numbers-and-punctuation'
        onChange={handleLogincheak}
        value={handleLogincheak}

        ></TextInput>
                  
         </View>  
         <Text style={{color:'black',paddingLeft:10,paddingTop:20,fontSize:15,marginLeft:7}}> Date of birth</Text>
       <View style={{height:"6%",width:"90%", borderWidth:0.5,alignSelf:"center",borderRadius:20}}>
       <TextInput  style={{fontSize:15,color:'black',marginLeft:20}}
       placeholderTextColor="lightgray"
         placeholder={'05/6/2024'}
        keyboardType='number-pad'></TextInput>
                  
         </View>  
         <Text style={{color:'black',paddingLeft:10,paddingTop:20,fontSize:15,marginLeft:7}}>  Address</Text>
         <View style={{height:"6%",width:"90%", borderWidth:0.5,alignSelf:"center",borderRadius:20,flexDirection:"row",justifyContent:"space-around",alignItems:"center"}}>

<View style={{height:40,width:290}}>
<TextInput  style={{fontSize:15,color:'black',marginLeft:10}}
     
      placeholderTextColor="lightgray"
placeholder={' Rahum yaar khan'}
keyboardType='numbers-and-punctuation'></TextInput>
</View> 
<View style={{height:20,width:30}}>


</View> 
</View> 
         <Text style={{color:'black',paddingLeft:10,paddingTop:20,fontSize:15,marginLeft:7}}>phone number</Text>
         <View style={{height:"6%",width:"90%", borderWidth:0.5,alignSelf:"center",borderRadius:20,flexDirection:"row",justifyContent:"space-around",alignItems:"center"}}>

<View style={{height:40,width:290}}>
<TextInput  style={{fontSize:15,color:'black',marginLeft:10,width:290}}

placeholder={' 03003434334'}
placeholderTextColor="lightgray"
keyboardType='numbers-and-punctuation'></TextInput>
</View> 
<View style={{height:20,width:25,}}>



</View> 
</View> 
         <View style={{marginTop:80}}>
         <TouchableOpacity style={{ height:50,width:'80%',backgroundColor:'teal',elevation:7,borderRadius:10,alignSelf:'center',}} > 
      {/* onPress={get} */}
        <Text    
        style={{alignSelf:"center",fontSize:20,color:"white",paddingTop:10}}> Done</Text>
        </TouchableOpacity></View>
        </ScrollView>
    </View>
  )
}

export default Information