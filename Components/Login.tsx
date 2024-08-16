import React from 'react'
import { Text, View,Button } from 'react-native'
const Login = (props: { navigation: { navigate: (arg0: string, arg1: { name: string; age: number; }) => void; }; }) => {

    const name = "mohit";
    const age = 21;

    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text>
          Login
        </Text>
        <Button title='go to home screen' onPress={()=>{props.navigation.navigate("Home",{name:'mohit',age:age})}}></Button>
      </View>
    )
  }

export default Login
