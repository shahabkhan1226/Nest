import { View, Text,StatusBar ,Image,TouchableOpacity,ScrollView
} from 'react-native'
import React, { useState } from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import React from 'react'



const Bag = () => {


  const [count,setcount] = useState(0);

   


  const increment = () => {
    setcount(count + 1);
  };
  const dicrement = () => {
  if(count > 0){

    setcount(count - 1);
  };}

  
  const [count1,setcount1] = useState(0);


  const increment1 = () => {
    setcount1(count1 + 1);
  };

  const dicrement1 = () => {
    if(count1 > 0) {
    setcount1(count1 - 1);
  };
  }
  
  const [count2,setcount2] = useState(0);


  const increment2 = () => {
    setcount2(count2 + 1);
  };

  const dicrement2 = () => {
    if(count2 > 0) {
    setcount2(count2 - 1);
  };}
  const [count3,setcount3] = useState(0);


  const increment3 = () => {
    setcount3(count3 + 50);
  };

  const dicrement3 = () => {
    if(count3 > 0) {
    setcount3(count3 - 50);
  };}

  const [count4,setcount4] = useState(0);


  const increment4 = () => {
    setcount4(count4 + 100);
  };

  const dicrement4 = () => {
    if(count4 > 0) {
    setcount4(count4 - 100);
  };}
  const [count5,setcount5] = useState(0);


  const increment5 = () => {
    setcount5(count5 + 150);
  };

  const dicrement5 = () => {
    if(count5 > 0) {
    setcount5(count5 - 150);
  };}
  return (
  
    <View style={{flex: 1, backgroundColor: 'white'}}>
    <ScrollView>

      
<StatusBar
        barStyle={'light-content'}
        backgroundColor={'transparent'}
        translucent
      />
      
      <View
        style={{
          backgroundColor: '#336B6B',
          width: '100%',
          height: '15%',
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
          flexDirection: 'row',
          justifyContent: 'space-around',
          paddingTop: 60,
        }}>
        <Text style={{fontSize: 30, color: 'white', marginRight: 90}}>
          Bag
        </Text>
        <Ionicons name="search-circle" size={54} color={'white'} />
      </View>
      <View style={{width: '90%',height: '15%',backgroundColor:"white",elevation:7,borderRadius:20,alignSelf:"center",marginTop:30,flexDirection:"row",justifyContent:"space-evenly"}}>
<Image
style={{height: "80%",width: "20%",alignSelf:"",marginTop:20,}}
source={require('../../src/Assets/chair2.png')}/>
<View style={{flexDirection:"column",justifyContent:"space-evenly"}}> 

<Text style={{flexDirection:"row",color:"black",fontSize:20}}>
  office chair
</Text>
<Text style={{fontSize:15}}>
black color collection
</Text>
<Text style={{color:"blue",fontSize:15}}>
$50
</Text>
</View>
<View style={{justifyContent:"space-around"}}>
    <TouchableOpacity

    >
<Entypo 
onPress={() => {
  increment();
  increment3();
}}
          name="squared-plus" size={34} color={'#336B6B'} />
          </TouchableOpacity>
          <Text style={{fontSize:20,marginLeft:10}}>{count}</Text>

          <TouchableOpacity>
          <Entypo
onPress={() => {
dicrement();
  dicrement3();
}}          name="squared-minus" size={34} color={'lightgray'} />
          </TouchableOpacity>
          </View>
      </View>
      <View style={{width: '90%',height: '15%',backgroundColor:"white",elevation:7,borderRadius:20,alignSelf:"center",marginTop:30,flexDirection:"row",justifyContent:"space-evenly"}}>
      <Image
style={{height: "80%",width: "20%",alignSelf:"",marginTop:20,}}
source={require('../../src/Assets/lamp1.png')}/>
<View style={{flexDirection:"column",justifyContent:"space-evenly"}}> 

<Text style={{flexDirection:"row",color:"black",fontSize:20}}>
  office lamp
</Text>
<Text style={{fontSize:15}}>
black color collection
</Text>
<Text style={{color:"blue",fontSize:15}}>
$100
</Text>
</View>
<View style={{justifyContent:"space-around"}}>
    <TouchableOpacity>
<Entypo 
onPress={() => {
  increment1();
  increment4();
}}          name="squared-plus" size={34} color={'#336B6B'} />
          </TouchableOpacity>
          <Text style={{fontSize:20,marginLeft:10}}>{count1}</Text>

          <TouchableOpacity>
          <Entypo
onPress={() => {
  dicrement1();
  dicrement4();
}}          name="squared-minus" size={34} color={'lightgray'} />
          </TouchableOpacity>
          </View>
      </View>
      <View style={{width: '90%',height: '15%',backgroundColor:"white",elevation:7,borderRadius:20,alignSelf:"center",marginTop:30,flexDirection:"row",justifyContent:"space-evenly"}}>
      <Image
style={{height: "80%",width: "30%",alignSelf:"",marginTop:20,}}
source={require('../../src/Assets/bed2.png')}/>
<View style={{flexDirection:"column",justifyContent:"space-evenly"}}> 

<Text style={{flexDirection:"row",color:"black",fontSize:20}}>
   bed
</Text>
<Text style={{fontSize:15}}>
white color collection
</Text>
<Text style={{color:"blue",fontSize:15}}>
$150
</Text>
</View>
<View style={{justifyContent:"space-around"}}>
    <TouchableOpacity>
<Entypo 
onPress={() => {
  increment2();
  increment5();
}}          name="squared-plus" size={34} color={'#336B6B'} />
          </TouchableOpacity>
          <Text style={{fontSize:20,marginLeft:10}}>{count2}</Text>

          <TouchableOpacity>
          <Entypo
onPress={() => {
  dicrement2();
  dicrement5();
}}          name="squared-minus" size={34} color={'lightgray'} />
          </TouchableOpacity>
          </View>
      </View>
      <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:50,width: "85%",alignSelf:"center"}}>
<Text style={{fontSize:24,color:"lightgray"}}>Total</Text>
<Text style={{fontSize:24,color:"blue"}}>${ +count3+count4+count5}</Text>
      </View>

      <TouchableOpacity style={{height: "7%",width: "80%",alignSelf:"center",backgroundColor:"#336B6B",justifyContent:"center",alignItems:"center",borderRadius:20,marginTop:50}}>
<Text 


style={{fontSize:24,color:"white"}}>Payment</Text>
        
      </TouchableOpacity>
    </ScrollView>

    </View>
  )
}

export default Bag;