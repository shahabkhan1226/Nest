
import { View, Text ,StatusBar,FlatList,Image, ScrollView, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'




  const Data3 =[
    {
      id:1,
      pic:require('../../src/Assets/bed1.png'),
      title:"gray beam",
      dis:'Tulip chair Table Furniture.',
      price:'$68'
    },
    {
      id:2,
      pic:require('../../src/Assets/bed2.png'),
      title:"gray beam",
      dis:'Tulip chair Table Furniture.',
      price:'$68'
    },
  
    {
      id:3,
      pic:require('../../src/Assets/bed3.png'),
      title:"gray beam",
      dis:'Tulip chair Table Furniture.',
      price:'$68'
    },
    {
      id:4,
      pic:require('../../src/Assets/bed4.png'),
      title:"wood chair",
      dis:'Tulip chair Table Furniture.',
      price:'$68'
    },
    {
      id:5,
      pic:require('../../src/Assets/chair1.png'),
      title:"gray beam",
      dis:'Tulip chair Table Furniture.',
      price:'$68'
    },
    {
      id:6,
      pic:require('../../src/Assets/chair2.png'),
      title:"gray beam",
      dis:'Tulip chair Table Furniture.',
      price:'$68'
    },
  
    {
      id:7,
      pic:require('../../src/Assets/chair3.png'),
      title:"gray beam",
      dis:'Tulip chair Table Furniture.',
      price:'$68'
    },
    {
      id:8,
      pic:require('../../src/Assets/chair4.png'),
      title:"wood chair",
      dis:'Tulip chair Table Furniture.',
      price:'$68'
    },
    {
      id:9,
      pic:require('../../src/Assets/chair5.png'),
      title:"chiar",
      dis:'Tulip chair Table Furniture.',
      price:'$68'
    },
    {
      id:10,
      pic:require('../../src/Assets/chair6.png'),
      title:"gray beam",
      dis:'Tulip chair Table Furniture.',
      price:'$68'
    },  {
      id:11,
      pic:require('../../src/Assets/chair7.png'),
      title:"gray beam",
      dis:'Tulip chair Table Furniture.',
      price:'$68'
    },
  
    
  ];

const Data =[
  {
    id:1,
    
    pic:'bed-outline',
  },
  {
    id:2,
    
    pic:'floor-lamp-outline',
  },
  {
    id:3,
    
    pic:'chair-rolling',
  },
  {
    id:4,
    
    pic:'bathtub-outline',
  },
  {
    id:5,
    pic:'lightbulb-outline',
  }
];


  
const Item3 =({title,pic,price,dis}) =>(

  <View>
  <View style={{justifyContent:"space-evenly",marginLeft:20,marginTop:20,height:250,width:156,elevation:7,backgroundColor:"white",borderRadius:20}}>  
      <View style={{flexDirection:"row",marginTop:10,justifyContent:"space-around"}}>
      <Image style={{height:110,width:110, alignSelf:"center",marginTop:10}} source={pic} />
      <View style={{justifyContent:"space-evenly"}}>
        <TouchableOpacity>
      <Ionicons name='heart' size={14} color={'lightgray'} /></TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name='share-social' size={14} color={'lightgray'} />
        </TouchableOpacity>
        <TouchableOpacity>
        <Ionicons name='flag' size={14} color={'lightgray'} />
        </TouchableOpacity>
        </View>
      </View>
      <Text style={{fontSize:15,color:"black",marginLeft:10}}>{title}</Text>
      <Text style={{fontSize:15,color:"lightgray",marginLeft:10}}>{dis}</Text>
      <Text style={{fontSize:15,color:"blue",marginLeft:10,marginBottom:10}}>{price}</Text>
  
  
      </View>
      
  
  </View>);



const Item = ({item, onPress, backgroundColor, textColor,pic,navigation}) => (
  <View style={{height:80,width: 80,borderRadius:40,elevation:6,backgroundColor:"white",justifyContent:"center",alignItems:"center",marginLeft:30,marginTop:20}}> 

  <TouchableOpacity    onPress={onPress}



style={[{ height:80,width: 80,borderRadius:40,elevation:0,backgroundColor:"white",justifyContent:"center",alignItems:"center",}, {backgroundColor}]}>
  
      
      <MaterialCommunityIcons name={item.pic} size={44} color={'black'}
       onPress={onPress}  style={[{ backgroundColor:"white"}, {backgroundColor}]}
      
      
      />
  
  
  
  
          
      
  
      </TouchableOpacity>
      </View>
  
); 
const Store = ({navigation}) => {



  const [selectedId, setSelectedId] = useState();
    
  const renderItem = ({item,pic}) => {
    const backgroundColor = item.id === selectedId ? '#AEC8C8' : 'white';
        const color = item.id === selectedId ? 'white' : 'black';

    // navigation.navigate('Lamp')

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}        
      />
    );
  };
  return (
    <View style={{flex:1,backgroundColor:"white"}}>
        <StatusBar barStyle={'light-content'} backgroundColor={'transparent'} translucent />
       <View style={{backgroundColor:"#336B6B",width:"100%",height: '15%',borderBottomLeftRadius:40,borderBottomRightRadius:40,flexDirection:"row",justifyContent:"space-around",paddingTop:60}}>
        <Text style={{fontSize:30,color:"white",marginRight:90}}>
          Store
        </Text>
       </View>
       
       <View>
       </View>
       <ScrollView>



<View style={{height:110}}>
  
      <FlatList
         showsHorizontalScrollIndicator={false}
      horizontal={true}
        data={Data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
        navigation={navigation}
      />
  </View>     
    
       <FlatList


numColumns={2}
        data={Data3}
        renderItem={({item}) => <Item3  pic={item.pic} title={item.title} dis={item.dis} price={item.price} />}
        keyExtractor={item => item.id}
      /> 
     </ScrollView>
    </View>
  )
}

export default Store;














