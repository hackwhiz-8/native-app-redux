
import * as React from 'react'
import { Text, View } from 'react-native'


const Home = (props: { route: { params: any; }; }) => {
    console.warn(props.route.params);
    
    return (
      <View>
        <Text>
           helllo ji kaise hoooo,

        </Text>
      </View>
    )
  }

  export default Home
