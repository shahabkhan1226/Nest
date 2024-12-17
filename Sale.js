import { View, Text,StatusBar,FlatList,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Entypo from 'react-native-vector-icons/Entypo'

const Data3 =[
  {
    data:1,
    pic:require('../../src/Assets/bed1.png'),
    title:"gray beam",
    dis:'Tulip chair Table Furniture.',
    price:'$68'
  },
  {
    data:2,
    pic:require('../../src/Assets/bed2.png'),
    title:"gray beam",
    dis:'Tulip chair Table Furniture.',
    price:'$68'
  },

  {
    data:3,
    pic:require('../../src/Assets/bed3.png'),
    title:"gray beam",
    dis:'Tulip chair Table Furniture.',
    price:'$68'
  },
  {
    data:4,
    pic:require('../../src/Assets/bed4.png'),
    title:"wood chair",
    dis:'Tulip chair Table Furniture.',
    price:'$68'
  },
  {
    data:5,
    pic:require('../../src/Assets/chair1.png'),
    title:"gray beam",
    dis:'Tulip chair Table Furniture.',
    price:'$68'
  },
  {
    data:6,
    pic:require('../../src/Assets/chair2.png'),
    title:"gray beam",
    dis:'Tulip chair Table Furniture.',
    price:'$68'
  },

  {
    data:7,
    pic:require('../../src/Assets/chair3.png'),
    title:"gray beam",
    dis:'Tulip chair Table Furniture.',
    price:'$68'
  },
  {
    data:8,
    pic:require('../../src/Assets/chair4.png'),
    title:"wood chair",
    dis:'Tulip chair Table Furniture.',
    price:'$68'
  },
  {
    data:9,
    pic:require('../../src/Assets/chair5.png'),
    title:"chiar",
    dis:'Tulip chair Table Furniture.',
    price:'$68'
  },
  {
    data:10,
    pic:require('../../src/Assets/chair6.png'),
    title:"gray beam",
    dis:'Tulip chair Table Furniture.',
    price:'$68'
  },  {
    data:11,
    pic:require('../../src/Assets/chair7.png'),
    title:"gray beam",
    dis:'Tulip chair Table Furniture.',
    price:'$68'
  },

  
]



const Item2 =({title,pic,price,dis}) =>(

  <View>
  <View style={{justifyContent:"space-evenly",marginLeft:20,marginTop:20,height:250,width:156,elevation:7,backgroundColor:"white",borderRadius:20}}>  
      <View style={{flexDirection:"row",marginTop:10,justifyContent:"space-around"}}>
      <Image style={{height:110,width:110, alignSelf:"center",marginTop:10}} source={pic} />
      <View style={{justifyContent:"space-evenly"}}>
      <Ionicons name='heart' size={14} color={'lightgray'} />
        <Ionicons name='share-social' size={14} color={'lightgray'} />
        <Ionicons name='flag' size={14} color={'lightgray'} />
        </View>
      </View>
      <Text style={{fontSize:15,color:"black",marginLeft:10}}>{title}</Text>
      <Text style={{fontSize:15,color:"lightgray",marginLeft:10}}>{dis}</Text>
      <Text style={{fontSize:15,color:"blue",marginLeft:10,marginBottom:10}}>{price}</Text>
  
  
      </View>
  
  </View>);
const Sale = ({navigation}) => {
  return (
    <View style={{backgroundColor:"white",flex:1}}>
        <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} translucent />
 <View style={{flexDirection:"row", marginTop:"20%",backgroundColor:"white",justifyContent:"space-around"}}>
 <TouchableOpacity  
         onPress={() => navigation.goBack('Home')} 

 style={{backgroundColor:'white',height:50,width:50, justifyContent:'center',alignItems:'center',borderRadius:60,elevation:7}}>
       
       <SimpleLineIcons name='arrow-left' size={14} color={'black'} 
        // onPress={() => navigation.goBack('Home')} 
        />
 </TouchableOpacity>
 <View  style={{}}>
       <TouchableOpacity></TouchableOpacity>
 <Text style={{fontSize:25,color:"black",marginTop:10}}> Sale Product</Text>
 </View> 
 <View >
 <Ionicons name='search-circle' size={60} color={'lightgray'} />
 </View>
 </View>   
 <FlatList
      // horizontal={true}
      numColumns={2}
        data={Data3}
        renderItem={({item}) => <Item2  pic={item.pic} title={item.title} dis={item.dis} price={item.price} />}
        keyExtractor={item => item.id}
      /> 
       
 </View>
  )
}

export default Sale