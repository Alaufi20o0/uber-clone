import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { Icon } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';
import { Image } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { selectTravelTimeInformation } from '../slices/navSlice';

const data = [
    {
        id: "Uber-x-123",
        title: "UberX",
        multiplier: 1,
        image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_399,h_225/v1597151185/assets/e0/815670-02de-44f4-83fa-02fdab69d751/original/Pool.jpg",
    },
    {
        id: "Uber-XL-23",
        title: "UberXL",
        multiplier: 1.2,
        image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_407,h_229/v1597151080/assets/f7/281120-cc1a-4fd4-84d1-f5df2b3f518f/original/Black.jpg",
    },
    {
        id: "Uber-LUX-723",
        title: "UberX",
        multiplier: 1.75,
        image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_407,h_229/v1597151094/assets/17/0dc524-68da-46dc-8f7d-2c3134d80775/original/BlackSUV.jpg",
    }
]

const SURGE_CHARGE_RATE = 1.5;

const RideOptionsCard = () => {
    const navigation = useNavigation();
    const [selected, setSelected] = useState(null);
    const travelTimeInformation = useSelector(selectTravelTimeInformation);
  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
     <View>
        <TouchableOpacity onPress={() => navigation.navigate("NavigateCard")}
        style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}>
            <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`}>
        Select a Ride - {travelTimeInformation?.distance?.text}
        </Text>
     </View>

     <FlatList 
        data = {data}
        keyExtractor={(item)=> item.id}
        renderItem={({item: {id, title, multiplier, image}, item}) =>(
            <TouchableOpacity 
            onPress={() => setSelected(item)}
            style={tw`flex-row justify-between items-center px-10 ${id === selected?.id && "bg-gray-200"}`} >
                <Image
                style={{
                    width: 100,
                    height: 100,
                    resizeMode:"contain",
                    
                }}
                source={{ uri: image}}
                />
                <View style={tw`-ml-6`}>
                    <Text style={tw`text-xl font-semibold`}>{title}</Text>
                    <Text>
                    transit: {travelTimeInformation?.duration?.text}  
                    </Text>
                </View>
                <Text style={tw`text-xl`}>
                    {new Intl.NumberFormat("en-gb", {
                        style: "currency",
                        currency: "OMR",
                         }).format(
                            (travelTimeInformation?.duration?.value * SURGE_CHARGE_RATE * multiplier)/2500
                         )}
                </Text>
            </TouchableOpacity>
        )}
     />

     <View style={tw`mt-auto border-t border-gray-200`}>
        <TouchableOpacity 
        disabled={!selected}
        style={tw`bg-black py-3 m-3 ${!selected && "bg-gray-300"}`}>
            <Text style={tw`text-center text-white text-xl`}>Choose {selected?.title}</Text>
        </TouchableOpacity>
     </View>
    </SafeAreaView>   
  );
};

export default RideOptionsCard;

const styles= StyleSheet.create({});

