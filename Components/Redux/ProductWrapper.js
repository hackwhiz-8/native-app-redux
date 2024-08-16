import React from 'react';
import {
    Text,
    View,
    Button,
    Image,
    ScrollView
} from 'react-native';
import Header from '../Cart/Header';
import Product from '../Cart/Product';



function ProductWrapper({navigation}) {

    const mobilePhones = [
        {
            id: 1,
            brand: "Apple",
            model: "iPhone 13",
            price: 799,
            storage: "64GB",
            color: "Space Gray",
            os: "iOS 15",
            camera: "Dual 12MP",
            battery: "4082mAh"
        },
        {
            id: 2,
            brand: "Samsung",
            model: "Galaxy S22",
            price: 899,
            storage: "128GB",
            color: "Phantom Black",
            os: "Android 11",
            camera: "Quad 50MP",
            battery: "4500mAh"
        },
        {
            id: 3,
            brand: "Google",
            model: "Pixel 6",
            price: 599,
            storage: "128GB",
            color: "Sorta Seafoam",
            os: "Android 11",
            camera: "Dual 12.2MP",
            battery: "4614mAh"
        },
        {
            id: 4,
            brand: "OnePlus",
            model: "9 Pro",
            price: 699,
            storage: "256GB",
            color: "Morning Mist",
            os: "Android 11",
            camera: "Quad 48MP",
            battery: "4500mAh"
        },
        {
            id: 5,
            brand: "Huawei",
            model: "P30 Pro",
            price: 799,
            storage: "256GB",
            color: "Aurora Blue",
            os: "Android 10",
            camera: "Quad 40MP",
            battery: "4200mAh"
        }
    ];


    return (

        <View>
            <Button title='Go to User list' onPress={()=>navigation.navigate("User")}/>
            <Header />
            <View style={{ marginBottom: 40 }}>
                <ScrollView>
                    {
                        mobilePhones.map((ele, index) => <Product item={ele} />)
                    }
                </ScrollView>
            </View>

        </View>

    );



}



export default ProductWrapper;





// <View>
//   {/* <Api/> */}
//   {/* <Api2/> */}
//   <AsyncStorage1/>
//   <Text>Hello</Text>
// </View>




// <NavigationContainer>
//   <tab.Navigator>
//     <tab.Screen name='login' component={Login}/>
//     <tab.Screen name='Home' component={Home}/>
//     {/* <tab.Screen name='Homhe' component={Home}/> */}
//   </tab.Navigator>
// </NavigationContainer>




// <NavigationContainer>
//   <stack.Navigator>
//     <stack.Screen name='Login' component={Login} options={{
//       headerStyle: {
//         backgroundColor: "red"
//       }
//     }} />
//     <stack.Screen name='Home' component={Home} options={{
//       headerStyle: {
//         backgroundColor: "blue"
//       }
//     }} />
//   </stack.Navigator>
// </NavigationContainer>