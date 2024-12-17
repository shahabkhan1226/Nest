import React, {useState} from 'react';

import { View, Text ,Cell,TextInput,StatusBar} from 'react-native'
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {SafeAreaView,  StyleSheet} from 'react-native';

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'


const Forgetpassword = ({navigation}) => {
const CELL_COUNT =4;

  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  return (
    <View style={{backgroundColor:"white",flex:1}}>
    <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} translucent />

 <View style={{flexDirection:"row", marginTop:"25%",backgroundColor:""}}>
 <View  style={{backgroundColor:'white',height:40,width:40, justifyContent:'center',alignItems:'center',borderRadius:60,marginLeft:"10%",elevation:7}}>
       
       <SimpleLineIcons name='arrow-left' size={14} color={'black'} 
       onPress={() => navigation.goBack()} 
       />
 </View>
 <View  style={{marginLeft:"10%",}}>
       
 <Text style={{fontSize:20,color:"black"}}> Forgetpassword</Text>
 </View> 
 </View>
 <View style={{height:"10%",width:"60%",justifyContent:"center",alignSelf:"center",}}>
    <Text style={{alignself:"center",color:"black"}}> We have sent the loign code
        to your email .
        Please check your email.
        to confirm your account
        
    </Text>
 </View>
 <CodeField
        ref={ref}
        {...props}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        // textContentType="oneTimeCode"
        // autoComplete={Platform.select({ android: 'sms-otp', default: 'one-time-code' })}
        // testID="my-code-input"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            
            {symbol || (isFocused ? <Cursor/> : null)}
          </Text>)}
          />

<Text style={{fontSize:15,alignSelf:"center",color:"lightblue",marginTop:20}}>
  Resend  another code
</Text>
  </View>
  )
}
const styles = StyleSheet.create({
  root: { },
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {marginTop: 20,justifyContent:"space-around",height:"8%",width:'70%',alignSelf:"center"},
  cell: {
    width: 60,
    height: 60,
    lineHeight: 38,
    fontSize: 24,
    justifyContent:"space-around",
    borderWidth: 2,
    borderColor: '#00000030',
    textAlign: 'center',
    borderRadius:15
  },
  focusCell: {
    borderColor: '#000',
  },
});
export default Forgetpassword