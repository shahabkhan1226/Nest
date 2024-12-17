// import React, { useState } from 'react';
// import { Text, View, StatusBar, TouchableOpacity, TextInput, Alert } from 'react-native';
// import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
// import Entypo from 'react-native-vector-icons/Entypo';
// import { GoogleSignin } from '@react-native-google-signin/google-signin';
// import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
// import auth from '@react-native-firebase/auth';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// GoogleSignin.configure({
//   webClientId: '',
// });

// const Login = ({ navigation ,signEmail, signPassword}) => {
//   const [loginEmail, setLoginEmail] = useState('');
//   const [loginPass, setLoginPass] = useState('');
//   const [showPassword, setShowPassword] = useState(false);

//   // useEffect(() => {
//   //   // Check if user is already logged in
//   //   // checkLoggedIn();
//   // }, []);

//   const checkLoggedIn = async () => {
//     try {
//       const userEmail = await AsyncStorage.getItem('userEmail');
//       const userPassword = await AsyncStorage.getItem('userPassword');

//       // if (userEmail && userPassword) {
//         // setLoginEmail(userEmail);
//         // setLoginPass(userPassword);
//         if (loginEmail === userEmail && loginPass === userPassword) {

//           navigation.navigate('Home');
//         } else {
//           Alert.alert('Incorrect email or password. Please try again.');
//         }
//         // handleLogin();
//       // }
//     } catch (error) {
//       console.log('Error checking login:', error);
//     }
//   };

//   const handleLogin = async () => {

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(loginEmail)) {
//       Alert.alert('Invalid email login format');
//       return;
//     }

//     if (!loginPass.trim()) {
//       Alert.alert('Password is required');
//       return;
//     }
//     // const signEmail = 'abc@gmail.com';
//     // const signPassword = 'Aena1234';

//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

// GoogleSignin.configure({
//   webClientId: '',
// });
// async function onGoogleButtonPress() {
//   // Check if your device supports Google Play
//   await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
//   // Get the users ID token
//   const { idToken } = await GoogleSignin.signIn();

//   // Create a Google credential with the token
//   const googleCredential = auth.GoogleAuthProvider.credential(idToken);

//   // Sign-in the user with the credential
//   return auth().signInWithCredential(googleCredential);
// }

//   return (
//     <View style={{ backgroundColor: 'white', flex: 1 }}>
//       <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} translucent />
//       <View style={{ flexDirection: 'row', marginTop: '25%', backgroundColor: '' }}>
//         <View
//           style={{
//             backgroundColor: 'white',
//             height: 40,
//             width: 40,
//             justifyContent: 'center',
//             alignItems: 'center',
//             borderRadius: 60,
//             marginLeft: '10%',
//             elevation: 7,
//           }}
//         >
//           <SimpleLineIcons name='arrow-left' size={14} color={'black'} onPress={() => navigation.goBack()} />
//         </View>
//         <View style={{ marginLeft: '25%' }}>
//           <Text style={{ fontSize: 20, color: 'black' }}>Login</Text>
//         </View>
//       </View>
//       <View style={{ justifyContent: 'space-evenly' }}>
//         <Text style={{ color: 'black', paddingLeft: 10, paddingTop: 20, fontSize: 15, marginLeft: 7 }}>Email</Text>
//         <View style={{ height: '12%', width: '90%', borderWidth: 0.5, alignSelf: 'center', borderRadius: 20 ,flexDirection:"row"}}>
//           <TextInput
//             style={{ fontSize: 15, color: 'black', marginLeft: 20 }}
//             placeholder={'abcde@gmail.com'}
//             keyboardType='email-address'
//             value={loginEmail}
//             onChangeText={setLoginEmail}
//           />
//         </View>
//         <Text style={{ color: 'black', paddingLeft: 10, paddingTop: 20, fontSize: 15, marginLeft: 7 }}>Password</Text>
//         <View
//           style={{
//             height: '12%',
//             width: '90%',
//             borderWidth: 0.5,
//             alignSelf: 'center',
//             borderRadius: 20,
//             flexDirection: 'row',
//             justifyContent: 'space-around',
//             alignItems: 'center',
//           }}
//         ><View style={{backgroundColor:"white",width: '89%',flexDirection:"row",justifyContent: 'center',justifyContent:"space-between",
//         alignItems: 'center',

//         }}>

//           <TextInput
//             style={{ fontSize: 15, color: 'black',}}
//             placeholder={'6-20 Characters'}
//             secureTextEntry={!showPassword}
//             value={loginPass}
//             onChangeText={setLoginPass}
//           />

//           <Entypo name={showPassword ? 'eye-with-line' : 'eye'} size={24} color={'black'} onPress={() => setShowPassword(!showPassword)} />
//           </View>

//         </View>

//         <Text
//           style={{ fontSize: 15, alignSelf: 'center', color: 'lightblue' }}
//           onPress={() => {
//             navigation.navigate('Forgetpassword');
//           }}
//         >
//           Forget Your Password
//         </Text>
//         <TouchableOpacity
//           style={{
//             height: 40,
//             width: '90%',
//             backgroundColor: 'lightgrey',
//             elevation: 7,
//             borderRadius: 10,
//             alignSelf: 'center',
//             alignItems:"center",
//             justifyContent:"center",
//             marginTop: 20,
//           }}
//           onPress={handleLogin}
//         >
//           <Text style={{ alignSelf: 'center', fontSize: 20, color: 'black', paddingTop: 0 }}>Login</Text>
//         </TouchableOpacity>
//         <Text style={{ fontSize: 15, alignSelf: 'center', marginTop: 30 }}>Or</Text>
//         <TouchableOpacity
//           style={{
//             height: 40,
//             width: '90%',
//             backgroundColor: 'blue',
//             elevation: 7,
//             borderRadius: 10,
//             alignSelf: 'center',
//             marginTop: 20,
//           }}
//         >
//           <Text style={{ alignSelf: 'center', fontSize: 15, color: 'white', paddingTop: 10 }}>Sign in with Facebook</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
//           style={{
//             height: 40,
//             width: '90%',
//             backgroundColor: 'red',
//             elevation: 7,
//             borderRadius: 10,
//             alignSelf: 'center',
//             marginTop: 20,
//           }}
//         >
//           <Text style={{ alignSelf: 'center', fontSize: 15, color: 'white', paddingTop: 10 }}>Sign in with Google</Text>
//         </TouchableOpacity>
//       </View>
//       <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 90 }}>
//         <Text style={{ alignSelf: 'center', fontSize: 15, paddingTop: 10 }}>Don't Have an account?</Text>
//         <Text onPress={() => navigation.navigate('Signup')} style={{ alignSelf: 'center', fontSize: 15, color: 'blue', paddingTop: 10 }}>
//           Sign up
//         </Text>
//       </View>
//     </View>
//   );
// };

// export default Login;


import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Alert, Image,StatusBar
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId: '',
});

async function onGoogleButtonPress() {
  // Check if your device supports Google Play
  await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
  // Get the users ID token
  const { idToken } = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
}


const Login = ({ navigation, signEmail, signPassword}) => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPass, setLoginPass] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    // Check if user is already logged in
    // checkLoggedIn();
  }, []);

  const checkLoggedIn = async () => {
    try {
      const userEmail = await AsyncStorage.getItem('userEmail');
      const userPassword = await AsyncStorage.getItem('userPassword');

      // if (userEmail && userPassword) {
        // setLoginEmail(userEmail);
        // setLoginPass(userPassword);
        if (loginEmail === userEmail && loginPass === userPassword) {
   
          navigation.navigate('Home');
        } else {
          Alert.alert('Incorrect email or password. Please try again.');
        }
        // handleLogin();
      // }
    } catch (error) {
      console.log('Error checking login:', error);
    }
  };

  const handleLogin = async () => {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(loginEmail)) {
      Alert.alert('Invalid email login format');
      return;
    }

    if (!loginPass.trim()) {
      Alert.alert('Password is required');
      return;
    }
   
    
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };



  return (

        <View style={{ backgroundColor: 'white', flex: 1 }}>
             <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} translucent />
             <View style={{ flexDirection: 'row', marginTop: '25%', backgroundColor: '' }}>
              <View
                  style={{
                    backgroundColor: 'white',
                    height: 40,
                    width: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 60,
                    marginLeft: '10%',
                    elevation: 7,
                  }}
                >
                  <SimpleLineIcons name='arrow-left' size={14} color={'black'} onPress={() => navigation.goBack()} />
                </View>
                <View style={{ marginLeft: '25%' }}>
                  <Text style={{ fontSize: 20, color: 'black' }}>Login</Text>
                </View>
              </View>
              <View style={{ justifyContent: 'space-evenly' }}>
                <Text style={{ color: 'black', paddingLeft: 10, paddingTop: 20, fontSize: 15, marginLeft: 7 }}>Email</Text>
                <View style={{ height: '12%', width: '90%', borderWidth: 0.5, alignSelf: 'center', borderRadius: 20 ,flexDirection:"row"}}>
                  <TextInput
                    style={{ fontSize: 15, color: 'black', marginLeft: 20 }}
                    placeholder={'abcde@gmail.com'}
                    keyboardType='email-address'
                    value={loginEmail}
                    onChangeText={setLoginEmail}
                  />
                </View>
                <Text style={{ color: 'black', paddingLeft: 10, paddingTop: 20, fontSize: 15, marginLeft: 7 }}>Password</Text>
                <View
                  style={{
                    height: '12%',
                    width: '90%',
                    borderWidth: 0.5,
                    alignSelf: 'center',
                    borderRadius: 20,
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                  }}
                ><View style={{backgroundColor:"white",width: '89%',flexDirection:"row",justifyContent: 'center',justifyContent:"space-between",
                alignItems: 'center',
        
                }}>
        
                  <TextInput
                    style={{ fontSize: 15, color: 'black',}}
                    placeholder={'6-20 Characters'}
                    secureTextEntry={!showPassword}
                    value={loginPass}
                    onChangeText={setLoginPass}
                  />
        
                  <Entypo name={showPassword ? 'eye-with-line' : 'eye'} size={24} color={'black'} onPress={() => setShowPassword(!showPassword)} />
                  </View>
        
                </View>
        
                <Text
                  style={{ fontSize: 15, alignSelf: 'center', color: 'lightblue' }}
                  onPress={() => {
                    navigation.navigate('Forgetpassword');
                  }}
                >
                  Forget Your Password
                </Text>
                <TouchableOpacity
                  style={{
                    height: 40,
                    width: '90%',
                    backgroundColor: 'lightgrey',
                    elevation: 7,
                    borderRadius: 10,
                    alignSelf: 'center',
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop: 20,
                  }}
                  onPress={checkLoggedIn}
                >
                  <Text style={{ alignSelf: 'center', fontSize: 20, color: 'black', paddingTop: 0 }}>Login</Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 15, alignSelf: 'center', marginTop: 30 }}>Or</Text>
                <TouchableOpacity
                  style={{
                    height: 40,
                    width: '90%',
                    backgroundColor: 'blue',
                    elevation: 7,
                    borderRadius: 10,
                    alignSelf: 'center',
                    marginTop: 20,
                  }}
                >
                  <Text style={{ alignSelf: 'center', fontSize: 15, color: 'white', paddingTop: 10 }}>Sign in with Facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
                  style={{
                    height: 40,
                    width: '90%',
                    backgroundColor: 'red',
                    elevation: 7,
                    borderRadius: 10,
                    alignSelf: 'center',
                    marginTop: 20,
                  }}
                >
                  <Text style={{ alignSelf: 'center', fontSize: 15, color: 'white', paddingTop: 10 }}>Sign in with Google</Text>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 90 }}>
                <Text style={{ alignSelf: 'center', fontSize: 15, paddingTop: 10 }}>Don't Have an account?</Text>
                <Text onPress={() => navigation.navigate('Signup')} style={{ alignSelf: 'center', fontSize: 15, color: 'blue', paddingTop: 10 }}>
                  Sign up
                </Text>
              </View>
            </View>
  );
};

const styles = {
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    width: 260,
    borderWidth: 1,
    borderBottomWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: 'black',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 40,
    width: '100%',
    paddingLeft: 10,
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
  },
  loginButton: {
    height: 35,
    width: 200,
    backgroundColor: '#ffbf00',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  loginButtonText: {
    fontSize: 15,
    color: 'black',
    fontWeight: '600',
  },
};

export default Login;

// import { Image, StatusBar, Text, TextInput, View } from 'react-native'
// import React, { Component } from 'react'
// import Entypo from 'react-native-vector-icons/Entypo'
// import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

// export default class login extends Component {
//   render() {
//     return (
      // <View style={{backgroundColor:"white",flex:1,borderBottomRightRadius:80}}>
      //    <StatusBar barStyle={'light-content'} backgroundColor={'transparent'} translucent />
      // <View style={{backgroundColor:"#ffe4c4",flex:1,}}>

      //   <View style={{backgroundColor:'purple',borderBottomRightRadius:290,borderBottomLeftRadius:70,paddingBottom:20,justifyContent:"center",}}>
      //       <Text style={{fontSize:40,color:'white',marginTop:100,marginLeft:40}}> Create </Text>
      //       <Text style={{fontSize:40,color:'white',marginLeft:40,}}> Account </Text>
      //   </View>
      //   <View style={{justifyContent:'space-evenly'}}>
      //     <TextInput style={{elevation:4,backgroundColor:'pink',height:'15%',width:'70%',alignSelf: 'center',borderRadius:40,marginTop:0}}
      //     placeholder='name'
      //     keyboardType='numbers-and-punctuation'>

      //     </TextInput >
      //     <TextInput
      //     style={{elevation:4,backgroundColor:'pink',height:'15%',width:'70%',alignSelf: 'center',borderRadius:40,}}
      //     placeholder='Your Email'
      //     keyboardType='email-address'>

      //     </TextInput>
      //     <TextInput
      //     style={{elevation:4,backgroundColor:'pink',height:'15%',width:'70%',alignSelf: 'center',borderRadius:40,}}
      //     placeholder='Password'
      //     secureTextEntry>
      //     </TextInput>
      //     <Text style={{fontSize:30,marginLeft:45,color:'black',}}> Sign up </Text>

      //   </View>
      //   <View  style={{backgroundColor:'white',height:60,width:60, justifyContent:'center',alignItems:'center',borderRadius:60,marginLeft:-15}}>

      //       <SimpleLineIcons name='arrow-right' size={24} color={'black'}  />
      // </View>
      //   <View style={{}}>
      //   <Entypo name='arrow-long-right' size={24} color={'white'} style={{marginTop:25,backgroundColor:'purple',paddingLeft:10,padding:0,borderRadius:50,marginLeft:300,width:40,height:40,paddingTop:8,marginTop:0}}/>

      //   <Text style={{fontSize:20,alignSelf:'flex-end',color:'black',backgroundColor:'white',height:390,width:300,borderTopLeftRadius:230,borderTopRightRadius:0,paddingLeft:160,paddingTop:40,padding:50,textDecorationLine:"underline", textDecorationStyle:'solid',
      // }}> Sign in </Text>

      //   </View>
      // </View>
      // </View>
//     )
//   }
// }
