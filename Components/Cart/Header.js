import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { useSelector } from 'react-redux'

const Header = () => {

    const data = useSelector((state)=>state.reducer);
    const [cartData, setcartData] = useState(0)
    
    useEffect(() => {
      setcartData(data.length)

    }, [data])
    
    
    return (
        <View style={{backgroundColor:'blue'}}>
           {/* <Text style={{fontSize:20,color:"white"}}>Header</Text> */}
           <Text style={{fontSize:20,color:"white",padding:10}}>{cartData}</Text>
           
        </View>
    )
}

export default Header
