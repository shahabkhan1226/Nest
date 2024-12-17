import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Entypo from 'react-native-vector-icons/Entypo';
const Data3 = [
  {
    id: 1,
    pic: require('../../src/Assets/lamp6.png'),
    title: 'gray beam',
    dis: 'Tulip chair Table Furniture.',
    price: '$68',
  },
  {
    id: 2,
    pic: require('../../src/Assets/lamp7.png'),
    title: 'gray beam',
    dis: 'Tulip chair Table Furniture.',
    price: '$68',
  },

  {
    id: 3,
    pic: require('../../src/Assets/lamp4.png'),
    title: 'gray beam',
    dis: 'Tulip chair Table Furniture.',
    price: '$68',
  },
  {
    id: 4,
    pic: require('../../src/Assets/lamp7.png'),
    title: 'wood chair',
    dis: 'Tulip chair Table Furniture.',
    price: '$68',
  },
  {
    id: 5,
    pic: require('../../src/Assets/lamp7.png'),
    title: 'gray beam',
    dis: 'Tulip chair Table Furniture.',
    price: '$68',
  },
  {
    id: 6,
    pic: require('../../src/Assets/lamp2.png'),
    title: 'gray beam',
    dis: 'Tulip chair Table Furniture.',
    price: '$68',
  },

  {
    id: 7,
    pic: require('../../src/Assets/lamp2.png'),
    title: 'gray beam',
    dis: 'Tulip chair Table Furniture.',
    price: '$68',
  },
  {
    id: 8,
    pic: require('../../src/Assets/lamp4.png'),
    title: 'wood chair',
    dis: 'Tulip chair Table Furniture.',
    price: '$68',
  },
  {
    id: 9,
    pic: require('../../src/Assets/lamp2.png'),
    title: 'chiar',
    dis: 'Tulip chair Table Furniture.',
    price: '$68',
  },
  {
    id: 10,
    pic: require('../../src/Assets/lamp6.png'),
    title: 'gray beam',
    dis: 'Tulip chair Table Furniture.',
    price: '$68',
  },
  {
    id: 11,
    pic: require('../../src/Assets/lamp7.png'),
    title: 'gray beam',
    dis: 'Tulip chair Table Furniture.',
    price: '$68',
  },
];

const Data = [
  {
    id: 1,

    pic: 'bed-outline',
  },
  {
    id: 2,

    pic: 'floor-lamp-outline',
  },
  {
    id: 3,

    pic: 'chair-rolling',
  },
  {
    id: 4,

    pic: 'bathtub-outline',
  },
  {
    id: 5,
    pic: 'lightbulb-outline',
  },
];
const Item3 = ({title, pic, price, dis}) => (
  <View>
    <View
      style={{
        justifyContent: 'space-evenly',
        marginLeft: 20,
        marginTop: 20,
        height: 250,
        width: 156,
        elevation: 7,
        backgroundColor: 'white',
        borderRadius: 20,
      }}>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 10,
          justifyContent: 'space-around',
        }}>
        <Image
          style={{height: 110, width: 110, alignSelf: 'center', marginTop: 10}}
          source={pic}
        />
        <View style={{justifyContent: 'space-evenly'}}>
          <TouchableOpacity>
            <Ionicons name="heart" size={14} color={'lightgray'} />
          </TouchableOpacity>
          <Ionicons name="share-social" size={14} color={'lightgray'} />
          <Ionicons name="flag" size={14} color={'lightgray'} />
        </View>
      </View>
      <Text style={{fontSize: 15, color: 'black', marginLeft: 10}}>
        {title}
      </Text>
      <Text style={{fontSize: 15, color: 'lightgray', marginLeft: 10}}>
        {dis}
      </Text>
      <Text style={{fontSize: 15, color: 'blue', marginLeft: 10}}>{price}</Text>
    </View>
  </View>
);

const Item = ({item, onPress, backgroundColor, textColor, pic, navigation}) => (
  <View
    style={{
      height: 80,
      width: 80,
      borderRadius: 40,
      elevation: 6,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 30,
      marginTop: 20,
    }}>
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          height: 80,
          width: 80,
          borderRadius: 40,
          elevation: 0,
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
        },
        {backgroundColor},
      ]}>
      <MaterialCommunityIcons
        name={pic}
        size={44}
        color={'black'}
        onPress={onPress}
        style={[{backgroundColor: 'white'}, {backgroundColor}]}
      />
    </TouchableOpacity>
  </View>
);

export default function Lamp({navigation}) {
  //  const [selectedId, setSelectedId] = useState();

  // const renderItem = ({item}) => {
  //   const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';

  //   return (
  //     <Item
  //       item={item}
  //       onPress={() => setSelectedId(item.id)}
  //       backgroundColor={backgroundColor}
  //     />
  //   );
  // };
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
        translucent
      />
      <View
        style={{
          flexDirection: 'row',
          marginTop: '20%',
          backgroundColor: 'white',
          justifyContent: 'space-around',
        }}>
        <View
          style={{
            backgroundColor: 'white',
            height: 50,
            width: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 60,
            elevation: 7,
          }}>
          <SimpleLineIcons
            name="arrow-left"
            size={14}
            color={'black'}
            onPress={() => navigation.goBack('Home')}
          />
        </View>
        <View style={{}}>
          <TouchableOpacity></TouchableOpacity>
          <Text style={{fontSize: 25, color: 'black', marginTop: 10}}>
            {' '}
            Store
          </Text>
        </View>
        <View>
          <Ionicons name="search-circle" size={60} color={'lightgray'} />
        </View>
      </View>
      <ScrollView>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={Data}
          renderItem={({item}) => <Item pic={item.pic} />}
          // renderItem={renderItem}
          keyExtractor={item => item.id}
          // extraData={selectedId}
          // navigation={navigation}
        />

        <FlatList
          numColumns={2}
          data={Data3}
          renderItem={({item}) => (
            <Item3
              pic={item.pic}
              title={item.title}
              dis={item.dis}
              price={item.price}
            />
          )}
          keyExtractor={item => item.id}
        />
      </ScrollView>
    </View>
  );
}
