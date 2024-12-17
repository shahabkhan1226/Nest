

// // import React in our code
// import React, {useState} from 'react';

// // import all the components we are going to use
// import {
//   SafeAreaView,
//   StyleSheet,
//   View,
//   Text,
//   Image,
//   Button,
// } from 'react-native';

// //import AppIntroSlider to use it
// import AppIntroSlider from 'react-native-app-intro-slider';

// const Intro = () => {
//   const [showRealApp, setShowRealApp] = useState(false);

//   const onDone = () => {
//     // setShowRealApp(true);  
//         onPress={() => navigation.navigate('Signup')}
  

//   };

//   const onSkip = () => {
    
//     setShowRealApp(true);
//   };
  // const slides = [
  //   {
  //       key: 1,
     
  //       text: 'Hardwork',
  //       title:'All our products will be warranted within 1 year. We will repair the product as soon as there is an error.',
  //       image: require('../../src/Assets/intro1.png'),
  //     },
  //     {
  //       key: 2,
  //       text: 'Dilevery',
  //       title:'Wherever you are in this country, we will ship the furniture to you. Safe, fast and free.',
  //       image: require('../../src/Assets/intro2.png'),
  //     },
  //     {
  //       key: 3,
       
  //       text: 'Comfortable',
  //       title:'We bring consumers the best, most comfortable products, so that users can enjoy the best way.',
  //       image: require('../../src/Assets/intro3.png'),
        
  //     },
  //     {
  //       key: 4,
        
  //       text: 'Space',
  //       title:'We bring you a comfortable space with the best furniture.',
  //       image: require('../../src/Assets/intro4.png'),
  //     }
   
  // ];

//   const RenderItem = ({item}) => {
//     return (
   
      // <View style={{justifyContent:"space-evenly"}}>
      //          <Image
      //          style={{height: "50%",width: "70%",alignSelf: "center"}}
      //           source={item.image} />
      //          <Text style={{fontSize:30,color:"black",alignSelf:"center"}}>{item.text}</Text>

      //          <Text style={{fontSize:15,color:"black",alignSelf:"center",width:"90%"}}>{item.title}</Text>

      //     </View>


       
  
//     )
//   }
//   return (
//     <>
//       {showRealApp ? (
//         <SafeAreaView style={styles.container}>
//           <View style={styles.container}>
//             <Text style={styles.titleStyle}>
//               React Native App Intro Slider using AppIntroSlider
//             </Text>
            
            
//             <Button
//               title="Show Intro Slider again"
//               onPress={() => setShowRealApp(false)}
//             />
//           </View>
//         </SafeAreaView>
//       ) : (
//         <AppIntroSlider
//           data={slides}
//           renderItem={RenderItem}
//           onDone={onDone}
//           // showSkipButton={true}
//           // onSkip={onSkip}
//           bottomButton
//         />
//       )}
//     </>
//   );
//       }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     padding: 10,
//     justifyContent: 'center',
//   },
//   titleStyle: {
//     padding: 10,
//     textAlign: 'center',
//     fontSize: 68,
//     fontWeight: 'bold',
//   },
//   paragraphStyle: {
//     padding: 20,
//     textAlign: 'center',
//     fontSize: 16,
//   },
//   introImageStyle: {
//     width: 200,
//     height: 200,
//   },
//   introTextStyle: {
//     fontSize: 38,
//     color: 'black',
//     textAlign: 'center',
//     paddingVertical: 0,
//   },
//   introTitleStyle: {
//     fontSize: 25,
//     color: 'black',
//     textAlign: 'center',
//     marginBottom: 16,
//     fontWeight: 'bold',
//   },
// });



// export default Intro;



import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity, StatusBar } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
  {
      key: 1,
   
      text: 'Hardwork',
      title:'All our products will be warranted within 1 year. We will repair the product as soon as there is an error.',
      image: require('../../src/Assets/intro1.png'),
    },
    {
      key: 2,
      text: 'Dilevery',
      title:'Wherever you are in this country, we will ship the furniture to you. Safe, fast and free.',
      image: require('../../src/Assets/intro2.png'),
    },
    {
      key: 3,
     
      text: 'Comfortable',
      title:'We bring consumers the best, most comfortable products, so that users can enjoy the best way.',
      image: require('../../src/Assets/intro3.png'),
      
    },
    {
      key: 4,
      
      text: 'Space',
      title:'We bring you a comfortable space with the best furniture.',
      image: require('../../src/Assets/intro4.png'),
    }
 
];

const Intro = ({ navigation }) => {
  const [showRealApp, setShowRealApp] = useState(false);

  const _renderItem = ({ item }) => {
    return (
       <View style={{justifyContent:"space-evenly"}}>
      <Image
      style={{height: "50%",width: "70%",alignSelf: "center"}}
       source={item.image} />
      <Text style={{fontSize:30,color:"black",alignSelf:"center"}}>{item.text}</Text>

      <Text style={{fontSize:15,color:"black",alignSelf:"center",width:"90%"}}>{item.title}</Text>

 </View>
    );
  };

  // const _onDone = () => {
  //   setShowRealApp(true);
  // };

  const renderNextButton = () => (
    <View style={styles.button}>
      <Text style={styles.buttonText}>Next</Text>
    </View>
  );

  const renderDoneButton = () => (
    <TouchableOpacity style={styles.doneButton}
      onPress={() => navigation.navigate('Login')}
    >
      <Text style={styles.buttonText}>Get Started</Text>
    </TouchableOpacity>
  );

  return (
    <>
      {showRealApp ? (
        <App />
      ) : (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
          <AppIntroSlider
            renderItem={_renderItem}
            data={slides}
            bottomButton
            renderNextButton={renderNextButton}
            renderDoneButton={renderDoneButton}
            dotStyle={{ backgroundColor: 'gray' }}
            activeDotStyle={{ color:"white"}}
          />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'gray',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 20,
    marginBottom: 20,
    alignItems: 'center',
    borderRadius: 20,
    height: 50,
    width: '90%',
  },
  doneButton: {
    backgroundColor: 'gray',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 20,
    marginBottom: 20,
    alignItems: 'center',
    borderRadius: 20,
    height: 50,
    width: '90%',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
        textAlign: 'center',
        marginHorizontal: 20,
        marginBottom: 50,
        color:'black'
      },
});

export default Intro;