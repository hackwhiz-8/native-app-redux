import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { getUserList } from './Action'
import { useDispatch, useSelector } from 'react-redux'


const UserList = () => {
    const dispatch = useDispatch();
    const userList = useSelector((state)=>state.reducer)
    console.warn("in component ",userList);
    
    useEffect(() => {
      dispatch(getUserList());
    }, [])
    
    return (
        <View>
            <Text>
                Hello
            </Text>
        </View>
    )
}

export default UserList
