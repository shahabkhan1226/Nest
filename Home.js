










import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  ScrollView,
  Modal,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

const DATA = [
  { id: 1, pic: require('../../src/Assets/furiture1.jpeg') },
  { id: 2, pic: require('../../src/Assets/furiture2.jpeg') },
  { id: 3, pic: require('../../src/Assets/furiture3.jpeg') },
];

const Data2 = [
  {
    id: 12,
    pic: require('../../src/Assets/chair1.png'),
    title: 'Chair',
    dis: 'Tulip chair Table Furniture.',
    price: '$68',
  },
  {
    id: 13,
    pic: require('../../src/Assets/chair2.png'),
    title: 'Office chair',
    dis: 'Tulip chair Table Furniture.',
    price: '$68',
  },
  {
    id: 14,
    pic: require('../../src/Assets/chair3.png'),
    title: 'comfort chair',
    dis: 'Tulip chair Table Furniture.',
    price: '$68',
  },
  {
    id: 15,
    pic: require('../../src/Assets/chair4.png'),
    title: 'yellow chair',
    dis: 'Tulip chair Table Furniture.',
    price: '$68',
  },
    {
    id: 16,
    pic: require('../../src/Assets/chair5.png'),
    title: 'comfart chair',
    dis: 'Tulip chair Table Furniture.',
    price: '$68',
  },
  
];

const Data3 = [
  {
    id: 1,
    pic: require('../../src/Assets/bed1.png'),
    title: 'Single Bed',
    dis: 'Tulip chair Table Furniture.',
    price: '$68',
  },
  {
    id: 2,
    pic: require('../../src/Assets/bed2.png'),
    title: 'comfort Bed',
    dis: 'Tulip chair Table Furniture.',
    price: '$68',
  },
  {
    id: 3,
    pic: require('../../src/Assets/bed3.png'),
    title: 'gray beam',
    dis: 'Tulip chair Table Furniture.',
    price: '$68',
  },
  {
    id: 4,
    pic: require('../../src/Assets/bed4.png'),
    title: 'gray beam',
    dis: 'Tulip chair Table Furniture.',
    price: '$68',
  },
  {
    id: 5,
    pic: require('../../src/Assets/bed3.png'),
    title: 'Bed',
    dis: 'Tulip chair Table Furniture.',
    price: '$68',
  },
  {
    id: 6,
    pic: require('../../src/Assets/bed2.png'),
    title: 'gray beam',
    dis: 'Tulip chair Table Furniture.',
    price: '$68',
  },
];

const Item = ({ pic, setModalVisible }) => (
  <View style={styles.item}>
    <View style={{ justifyContent: 'space-evenly', marginLeft: 20, marginTop: 20 }}>
      <TouchableOpacity
        style={{ backgroundColor: "#FFFFFF" }}
        onPress={() => setModalVisible(true)}
      >
        <Image style={{ height: 144, width: 211, borderRadius: 30 }} source={pic} />
      </TouchableOpacity>
    </View>
  </View>
);

const Item2 = ({ title, pic, price, dis }) => (
  <View style={{ flex: 1 }}>
    <View
      style={{
        justifyContent: 'space-evenly',
        marginLeft: 20,
        marginTop: 10,
        height: 207,
        width: 150,
        elevation: 7,
        backgroundColor: 'white',
        borderRadius: 20,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          marginTop: 0,
          justifyContent: 'space-around',
        }}
      >
        <Image
          style={{ height: 80, width: 90, alignSelf: 'center', marginTop: 10 }}
          source={pic}
        />
        <View style={{ justifyContent: 'space-evenly' }}>
          <Ionicons name="heart" size={14} color={'lightgray'} />
          <Ionicons name="share-social" size={14} color={'lightgray'} />
          <Ionicons name="flag" size={14} color={'lightgray'} />
        </View>
      </View>
      <Text style={{ fontSize: 15, color: 'black', marginLeft: 10 }}>
        {title}
      </Text>
      <Text style={{ fontSize: 15, color: 'lightgray', marginLeft: 10 }}>
        {dis}
      </Text>
      <Text style={{ fontSize: 15, color: 'blue', marginLeft: 10 ,marginBottom:10}}>{price}</Text>
    </View>
  </View>
);

const Item3 = ({ item, onPress, color, setModalVisible }) => (
  <View>
    <View
      style={{
        justifyContent: 'space-evenly',
        marginLeft: 20,
        marginTop: 0,
        height: 207,
        width: 156,
        elevation: 7,
        backgroundColor: 'white',
        borderRadius: 20,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          marginTop: 0,
          justifyContent: 'space-around',
        }}
      >
        <Image
          style={{ height: 80, width: 90, alignSelf: 'center', marginTop: 10 }}
          source={item.pic}
        />
        <View style={{ justifyContent: 'space-evenly' }}>
          <TouchableOpacity onPress={onPress}>
            <Ionicons name="heart" size={14} color={color} />
          </TouchableOpacity>
          <Ionicons name="share-social" size={14} color={'lightgray'} />
          <Ionicons name="flag" size={14} color={'lightgray'} />
        </View>
      </View>
      <Text style={{ fontSize: 15, color: 'black', marginLeft: 10 }}>
        {item.title}
      </Text>
      <Text style={{ fontSize: 15, color: 'lightgray', marginLeft: 10 }}>
        {item.dis}
      </Text>
      <Text style={{ fontSize: 15, color: 'blue', marginLeft: 10,marginBottom:10 }}>{item.price}</Text>
    </View>
  </View>
);

const App = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedId, setSelectedId] = useState();

 


  const renderItem = ({ item }) => {
    const color = item.id === selectedId ? 'red' : 'lightgray';
    return (
      <Item3
        item={item}
        onPress={() => setSelectedId(item.id)}
        color={color}
        setModalVisible={setModalVisible}
      />
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'transparent'}
        translucent
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{ justifyContent: "flex-end", width: "100%", flexDirection: "row" }}>
              <View style={{ height: 40, width: 40, borderRadius: 40, backgroundColor: "white", elevation: 7, alignItems: "center" }}>
                <Entypo
                  onPress={() => setModalVisible(!modalVisible)}
                  name="cross" size={34} color={'black'}
                />
              </View>
              </View>
              <View style={{marginTop:40,marginLeft:70}}>
                <Image style={{width: '70%',borderRadius:25,}}
                source={require('../../src/Assets/furiture1.jpeg')}>
                </Image>
                <Text style={{color:"black",fontWeight:'bold',marginTop:20}}>
                Rattan Armchair
                </Text>
                <Text style={{color:"blue",fontWeight:'bold',marginTop:20}}>
                Price:500$
                </Text>
                <Text style={{color:"black",fontWeight:'bold',marginTop:20}}>
                The Cloud Collection recalls the peaceful and close memories of Vietnamese souls for a slow way of life to enjoy in the midst of modern life. As the name implies, the collection is inspired by rattan materi.
                </Text>
              </View>
              <View>
                <TouchableOpacity style={{height:40,width:'40%',borderRadius:20,backgroundColor:"#336B6B",alignSelf:"center",marginTop:40}}>
                  <Text 
                  onPress={()=>navigation.navigate('Bag')}
                  style={{ fontSize: 15, color: 'white', fontWeight: 'bold',alignSelf:"center",justifyContent:"center",marginTop:8 }}>
                    Add to Cart
                  </Text>
                </TouchableOpacity>
              </View>
          </View>
        </View>
      </Modal>

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
        }}
      >
        <Text style={{ fontSize: 30, color: 'white', marginRight: 90 }}>
          Home
        </Text>
        <Ionicons name="search-circle" size={54} color={'white'} />
      </View>
      <ScrollView>
        <Text style={{ fontSize: 20, color: 'black', marginLeft: 10, marginTop: 20 }}>
          New collection
        </Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={DATA}
          renderItem={({ item }) => <Item pic={item.pic} setModalVisible={setModalVisible} />}
          keyExtractor={item => item.id}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Text style={{ fontSize: 20, color: 'black', marginTop: 10 }}>
            Popular Product
          </Text>
          <Text
            onPress={() => navigation.navigate('Popular')}
            style={{
              fontSize: 15,
              color: 'blue',
              marginTop: 15,
              marginLeft: 90,
            }}
          >
            More
          </Text>
        </View>
        <View style={{ height: 220 }}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={Data2}
            renderItem={({ item }) => (
              <Item2
                pic={item.pic}
                title={item.title}
                dis={item.dis}
                price={item.price}
              />
            )}
            keyExtractor={item => item.id}
          />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Text style={{ fontSize: 20, color: 'black' }}>Sale</Text>
          <Text
            onPress={() => navigation.navigate('Sale')}
            style={{
              fontSize: 15,
              color: 'blue',
              marginTop: 15,
              marginLeft: 180,
            }}
          >
            More
          </Text>
        </View>
        <View style={{ height: 220 }}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={Data3}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
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
    height: '90%',
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    fontSize: 34,
    fontWeight: 'bold',
  },
});


