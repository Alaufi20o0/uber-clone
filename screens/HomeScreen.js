import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAP_APIKEY} from '@env';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';
import NavFavourites from '../components/NavFavourites';


const HomeScreen = () => {
const dispatch = useDispatch();

    return (
        <SafeAreaView style={tw`bg-white h-full`}>
           <View>
             <Image 
                style={{
                    width: 100,
                    height: 100,
                    resizeMode: "contain",
                }}
                source={{
                    uri: "https://cached.imagescaler.hbpl.co.uk/resize/scaleWidth/743/cached.offlinehbpl.hbpl.co.uk/news/OMC/Uberlogo-20180925091408171.jpg",
                }}
             />

             <GooglePlacesAutocomplete 
                placeholder='where from?'
                styles={{
                    container: {
                        flex:0,
                    },
                    textInput: {
                        fontSize: 18,
                    }
                }}
                onPress={(data, details = null) => {
                    dispatch(
                        setOrigin({
                        location: details.geometry.location,
                        description: data.description,
                     })
                    )

                    dispatch(setDestination(null))
                }}
                fetchDetails={true}
                returnKeyType={"search"}
                enablePoweredByContainer={false}
                minLength={2}
                query={{
                    key: GOOGLE_MAP_APIKEY,
                    language: 'en',
                }}
                nearbyPlacesAPI='GooglePlacesSearch'
                debounce={400}
             />

             <NavOptions />
             <NavFavourites />
           </View>
        </SafeAreaView>
    )
}


export default HomeScreen

const styles = StyleSheet.create({})