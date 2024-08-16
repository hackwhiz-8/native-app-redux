import React, { useEffect, useState } from 'react'
import { Button, FlatList, StyleSheet, Text, View } from 'react-native'

const Api2 = () => {
    const [data, setquote] = useState('')
    const key = '5JFEQ+HvYhMYz3SRRZAr5g==ppUcnXQpVWoVX4Me'

    const data1 = {
        "user": "kalu",
        "mail": "kalu.com"
    }
    const fetchData = async () => {
        const url = "http://10.0.2.2:3000/users"
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(data1)
        })
        const responseData = await response.json();
        console.warn(responseData);


    }

    const fetchData2 = async () => {
        const url = "http://10.0.2.2:3000/users"
        const response = await fetch(url)
        const responseData = await response.json();
        console.warn(responseData[0].id);
        setquote(responseData)

    }
    useEffect(() => {
        // fetchData();
        fetchData2();


    }, [])

    return (
        <View >
            {
                data?
                data.map((ele, index) => {
                    return (
                        <View key={index}>
                               <Text>{ele.user}</Text>
                        </View>
                    )
                }):null
            }

        </View>
    )
}



export default Api2
