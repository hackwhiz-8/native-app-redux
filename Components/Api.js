import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Api = () => {
    const [data, setquote] = useState('')
    const key = '5JFEQ+HvYhMYz3SRRZAr5g==ppUcnXQpVWoVX4Me'
    const fetchData = async () => {
        const url = 'https://api.api-ninjas.com/v1/quotes'
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'X-Api-Key': key,
                'Content-Type': 'application/json'
            }
        })
        const responseData = await response.json();
        console.warn(responseData);
        setquote(responseData[0])
        // console.warn(quote)
    }

    useEffect(() => {
        fetchData();


    }, [])

    return (
        <View >
            <View style={{borderBottomWidth:1}}>
                {

                    data ? <Text>{data.quote}</Text> : <Text>Loading</Text>

                }
            </View>
        </View>
    )
}



export default Api
