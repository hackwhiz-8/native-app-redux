import React, { useEffect, useState } from 'react'
import { View, Text, Image, Button } from 'react-native'
import { addToCart, removeToCart } from '../Redux/Action';
import { useDispatch, useSelector } from 'react-redux';

const Product = (props) => {
    const ele = props.item;
    const dispatch = useDispatch();
    const [isAdded, setisAdded] = useState(false)
    const cardItems = useSelector((state) => state.reducer);
    const handleAddToCart = (item) => {

        dispatch(addToCart(item))
    }
    const handleRemoveToCart = (item) => {

        dispatch(removeToCart(item.brand))
    }

    

    useEffect(() => {
        console.warn("hello");
        
       let result = cardItems.filter((element)=>{
        return element.brand === ele.brand;
       });
       if(result.length){
        setisAdded(true);
       }else{
        setisAdded(false)
       }

    }, [cardItems])

    return (
        <View key={ele.brand} style={{ borderBottomColor: 'black', borderWidth: 2, margin: 10, marginBottom: 10 }}>
            <Text>{ele.brand}</Text>
            <Text>{ele.model}</Text>
            <Text>{ele.battery}</Text>
            <Text>{ele.price}</Text>
            {/* <Image source={{ uri: url }} /> */}
            {
                isAdded ?
                    <Button title='remove to cart' onPress={() => handleRemoveToCart(ele)} />
                    :
                    <Button title='add to cart' onPress={() => handleAddToCart(ele)} />
            }
        </View>
    )
}

export default Product;