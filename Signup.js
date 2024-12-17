import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUp = ({ navigation }) => {
  const [name, setName] = useState('');
  const [signEmail, setSignEmail] = useState('');
  const [signPassword, setSignPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleNameChange = (text) => {
    setName(text);
    setNameError('');
  };

  const handleEmailChange = (text) => {
    setSignEmail(text);
    setEmailError('');
  };

  const handlePasswordChange = (text) => {
    setSignPassword(text);
    setPasswordError('');
  };

  const handleConfirmPasswordChange = (text) => {
    setConfirmPassword(text);
    setConfirmPasswordError('');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSignUp = async () => {
    let isValid = true;

    if (!name.trim()) {
      setNameError('Name is required');
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(signEmail)) {
      setEmailError('Invalid email format');
      isValid = false;
    }

    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (!passwordRegex.test(signPassword)) {
      setPasswordError(
        'Password must be 6-20 characters long, contain at least one digit, one lowercase letter, and one uppercase letter'
      );
      isValid = false;
    }

    if (signPassword !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      isValid = false;
    }

    if (isValid) {
      // Store email and password in AsyncStorage
      try {
        await AsyncStorage.setItem('userEmail', signEmail);
        await AsyncStorage.setItem('userPassword', signPassword);
      } catch (error) {
        console.log('Error storing data:', error);
      }

      navigation.navigate('Login');
    }
  };

  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <View
        style={{ flexDirection: 'row', marginTop: '25%', alignItems: 'center' }}>
        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            height: 40,
            width: 40,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 20,
            marginLeft: '10%',
            elevation: 7,
          }}
          onPress={() => navigation.goBack()}>
          <SimpleLineIcons name="arrow-left" size={14} color="black" />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, color: 'black', marginLeft: '25%' }}>
          Sign Up
        </Text>
      </View>
      <ScrollView>
        <View style={{ justifyContent: 'space-evenly' }}>
          <Text
            style={{
              color: 'black',
              paddingLeft: 10,
              paddingTop: 20,
              fontSize: 15,
              marginLeft: 7,
            }}>
            Name
          </Text>
          <View
            style={{
              height: 60,
              width: '90%',
              borderWidth: 0.5,
              alignSelf: 'center',
              borderRadius: 20,
              paddingHorizontal: 10,
            }}>
            <TextInput
              style={{ fontSize: 15, color: 'black' }}
              placeholderTextColor="lightgray"
              placeholder="Shahabkhan"
              keyboardType="default"
              value={name}
              onChangeText={handleNameChange}
            />
            {nameError ? (
              <Text style={{ fontSize: 15, color: 'red', marginTop: 10 }}>
                {nameError}
              </Text>
            ) : null}
          </View>

          <Text
            style={{
              color: 'black',
              paddingLeft: 10,
              paddingTop: 20,
              fontSize: 15,
              marginLeft: 7,
            }}>
            Email
          </Text>
          <View
            style={{
              height: 60,
              width: '90%',
              borderWidth: 0.5,
              alignSelf: 'center',
              borderRadius: 20,
              paddingHorizontal: 10,
            }}>
            <TextInput
              style={{ fontSize: 15, color: 'black' }}
              placeholderTextColor="lightgray"
              placeholder="abcde@gmail.com"
              keyboardType="email-address"
              value={signEmail}
              onChangeText={handleEmailChange}
            />
          </View>
          {emailError ? (
            <Text style={{ fontSize: 15, color: 'red' ,marginLeft:25}}>{emailError}</Text>
          ) : null}

          <Text
            style={{
              color: 'black',
              paddingLeft: 10,
              paddingTop: 20,
              fontSize: 15,
              marginLeft: 7,
            }}>
            Password
          </Text>
          <View
            style={{
              height: 60,
              width: '90%',
              borderWidth: 0.5,
              alignSelf: 'center',
              borderRadius: 20,
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 10,
            }}>
            <TextInput
              style={{ fontSize: 15, color: 'black', flex: 1 }}
              placeholder="Enter your password"
              value={signPassword}
              onChangeText={handlePasswordChange}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={togglePasswordVisibility}>
              <Entypo
                name={showPassword ? 'eye-with-line' : 'eye'}
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </View>
          {passwordError ? (
            <Text style={{ fontSize: 15, color: 'red' ,marginLeft:25}}>{passwordError}</Text>
          ) : null}

          <Text
            style={{
              color: 'black',
              paddingLeft: 10,
              paddingTop: 20,
              fontSize: 15,
              marginLeft: 7,
            }}>
            Repeat Password
          </Text>
          <View
            style={{
              height: 60,
              width: '90%',
              borderWidth: 0.5,
              alignSelf: 'center',
              borderRadius: 20,
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 10,
            }}>
            <TextInput
              style={{ fontSize: 15, color: 'black', flex: 1 }}
              placeholder="6-20 Words"
              secureTextEntry={!showConfirmPassword}
              value={confirmPassword}
              onChangeText={handleConfirmPasswordChange}
              placeholderTextColor="lightgray"
              keyboardType="numbers-and-punctuation"
            />
            <TouchableOpacity onPress={toggleConfirmPasswordVisibility}>
              <Entypo
                name={showConfirmPassword ? 'eye-with-line' : 'eye'}
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </View>
          {confirmPasswordError ? (
            <Text style={{ fontSize: 15, color: 'red' ,marginLeft:25}}>
              {confirmPasswordError}
            </Text>
          ) : null}

          <TouchableOpacity
            onPress={handleSignUp}
            style={{
              height: 40,
              width: '90%',
              backgroundColor: 'lightgrey',
              elevation: 7,
              borderRadius: 10,
              alignSelf: 'center',
              marginTop: 20,
              justifyContent: 'center',
            }}>
            <Text style={{ alignSelf: 'center', fontSize: 20, color: 'black' }}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUp;
