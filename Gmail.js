import { View, Text ,StatusBar,Image,StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
const Gmail = ({navigation}) => {
  return (
    <View style={{flex:1,backgroundColor:"white"}}>
<StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} translucent />
 <View style={{flexDirection:"row", marginTop:"13%",backgroundColor:""}}>
 <View  style={{backgroundColor:'white',height:40,width:40, justifyContent:'center',alignItems:'center',borderRadius:60,marginLeft:"10%",elevation:7}}>
       
       <SimpleLineIcons name='arrow-left' size={14} color={'black'} 
        onPress={() => navigation.goBack()} 
       />
 </View>
 <View  style={{marginLeft:"5%",justifyContent:"center"}}>
       
 <Text style={{fontSize:25,color:"black"}}> Sign in with Gmail</Text>
 </View> 
     </View>
     <View  style={{justifyContent:"center",alignItems:"center",justifyContent:"flex-end",height:"6%"}}>
       
       <Text style={{fontSize:18,color:"#636363"}}> chose account to continue</Text>
       </View>
       <View style={styles.viwimg}>
        <View style={styles.viw1}>
        <Image
            style={styles.img}
            source={require('../../src/Assets/mans.png')}
          />       
        </View>
        <View style={styles.imgtext}>
          <Text style={styles.textimg}>
            Shahakhan
          </Text>
          <Text style={styles.textimg2}>
            Shahakhan@gmail.com
          </Text>
        </View>
       </View>
       <View style={styles.viwimg}>
        <View style={styles.viw1}>
        <Image
            style={styles.img}
            source={require('../../src/Assets/man2.png')}
          />       
        </View>
        <View style={styles.imgtext}>
          <Text style={styles.textimg}>
            Shahakhan
          </Text>
          <Text style={styles.textimg2}>
            Shahakhan@gmail.com
          </Text>
        </View>
       </View>
       <View style={styles.viwimg}>
        <View style={styles.viw1}>
        <Image
            style={styles.img}
            source={require('../../src/Assets/man3.png')}
          />       
        </View>
        <View style={styles.imgtext}>
          <Text style={styles.textimg}>
            Shahakhan
          </Text>
          <Text style={styles.textimg2}>
            Shahakhan@gmail.com
          </Text>
        </View>
       </View>
       <View style={styles.viwimg}>
        <View style={styles.viw1}>
        <Image
            style={styles.img}
            source={require('../../src/Assets/man4.png')}
          />       
        </View>
        <View style={styles.imgtext}>
          <Text style={styles.textimg}>
            Shahakhan
          </Text>
          <Text style={styles.textimg2}>
            Shahakhan@gmail.com
          </Text>
        </View>
       </View>
       <View style={{flexDirection:'row',
    height:"8%",
    marginLeft:30,
marginTop:40,}}>
        <View style={styles.viw1}>
        <Ionicons name='person' size={34} color={'#DBDBDB'} />
      
        </View>
        <View style={{justifyContent:"center",alignItems:"center",marginLeft:30}}>
          <Text style={{fontSize:20}}>
            Use another account
          </Text>
          
        </View>
       </View>
       <View style={{width:"90%",alignSelf:"center",justifyContent:"flex-end",height:"17%"}}>
        <Text style={{}}>
        To continue, Google will share your name, email address, language preferences and profile picture with Funi. Before using this app, you can review Funi privacy policy and terms of service.
        </Text>
       </View>
       <TouchableOpacity style={{backgroundColor:"lightgray",marginTop:40,height:"7%",width:"70%",alignSelf:"center",borderRadius:40,alignItems:"center",justifyContent:"center"}}>
        <Text style={{color:"white",alignSelf:"center",fontSize:20}}>Complete</Text>
       </TouchableOpacity>
   </View>
  )
}

export default Gmail
const styles = StyleSheet.create({
    img: {
        height:50,
        width:50,
        borderRadius:40,
        
    },
        viw1:{
          height:50,
          width:50,
          borderRadius:60,
          elevation:7,
          backgroundColor:"white",
          justifyContent:"center",
          alignItems:"center"
    },
   viwimg:{
    flexDirection:'row',
    height:"8%",
    marginLeft:30,
marginTop:17,
borderBottomWidth:0.25


   },
   textimg:{
marginLeft:30,
fontSize:20,
color:"black"
    
   },
   textimg2:{
    marginLeft:30,
    // backgroundColor:"",
    height:'49%'


   },
   imgtext:{
    justifyContent:"space-between",
    height:"130%"

   }
      
  });
  