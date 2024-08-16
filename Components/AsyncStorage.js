import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Button, Text, View } from 'react-native';

const AsyncStorage1 = () => {

    const setData=async()=>{
        await AsyncStorage.setItem("name","mohit");
        console.warn("date set");
        
    }

    const getData=async()=>{
        const name = await AsyncStorage.getItem("name");
        console.warn(name);
        
    }

  return (
    <View>
        <Text>
            hello async storage
        </Text>
        <Button title='hello' onPress={setData}/>
        <Button title='getData' onPress={getData}/>
    </View>
  )
}

export default AsyncStorage1
