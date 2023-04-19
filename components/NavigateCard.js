import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination } from "../redux/slices/navSlice";
import { useNavigation } from "@react-navigation/native";
import NavFavourites from "./NavFavourites";
import { Icon } from 'react-native-elements'

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Good Morning, Oscar</Text>
      <View
        style={tw`border-t border-gray-100 flex-shrink relative z-20 bg-white`}
      >
        <View>
          <GooglePlacesAutocomplete
            placeholder="Where to?"
            styles={toInputBoxStyles}
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
            fetchDetails={true}
            enablePoweredByContainer={false}
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: "en",
            }}
            returnKeyType={"search"}
            minLength={2}
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location: details.geometry.location,
                  description: data.description,
                })

              );
              navigation.navigate("RideOptionsCard")
            }}
          />
        </View>
      </View>
      <View style={tw`px-3 bg-white relative z-10 justify-between flex-1`}>
                <NavFavourites />
                <View style={tw`mt-3 flex-row justify-evenly py-3 border-t border-gray-100`}>
                    <TouchableOpacity
                        style={tw`flex-row bg-white w-24 px-4 py-3 rounded-full border border-black`}
                    >
                        <Icon name="fast-food-outline" type="ionicon" color="black" size={16} />
                        <Text style={tw`text-black text-center pl-3`}>Food</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={tw`flex-row bg-black w-24 px-4 py-3 rounded-full border border-black`}
                        onPress={() => navigation.push('RideOptionsCard')}
                    >
                        <Icon name="car" type="font-awesome" color="white" size={16} />
                        <Text style={tw`text-white text-center pl-3`}>Ride</Text>
                    </TouchableOpacity>
                </View>
            </View>
    </SafeAreaView>
  );
};

export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: "#fff",
    paddingTop: 20,
  },
  textInput: {
    fontSize: 15,
    backgroundColor: "#F4F4F4",
    borderRadius: 5,
    borderEndWidth: 1,
    borderColor: "#ddd",
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});
