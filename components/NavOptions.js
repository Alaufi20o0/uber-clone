import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';
const data = [
    {
        id: "12",
        title: "Get a ride",
        image: "https://cdn-icons-png.flaticon.com/512/832/832972.png?w=996&t=st=1689413922~exp=1689414522~hmac=db360b1a9ce02c0392d91bb967fbca6430c33f36f6bc05e6241e9141b7003618",
        screen: "MapScreen",
    },
    {

        id: "34",
        title: "Order food",
        image: "https://cdn-icons-png.flaticon.com/512/849/849588.png",
        screen: "EatsScreen",
    },
    {

        id: "56",
        title: "Car rental",
        image: "https://cdn-icons-png.flaticon.com/512/4634/4634949.png",
        screen: "CarScreen",
    },
    
    
];

const NavOptions = () => {
  const navigation = useNavigation(); 
  const origin = useSelector(selectOrigin);


  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({item}) => (
       <TouchableOpacity 
       onPress={() => navigation.navigate(item.screen)}
       style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40 `}
       disabled={!origin}
       >
         <View style={tw`${!origin && "opacity-20"}`}>
            <Image 
                style={{width:120, height:120, resizeMode:"contain"}}
                source={{
                    uri:item.image
                }}
            />
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
            <Icon 
                style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                name="arrowright"
                color="white"
                type="antdesign"
            />
         </View>
       </TouchableOpacity>
      )}
      />
  );
};

export default NavOptions;

const styles = StyleSheet.create({})

