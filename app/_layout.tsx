import { Stack } from "expo-router";
import {View} from "react-native";
import Header  from "../src/Components/Header"
import { useEffect } from "react";
import * as SplashScreen from 'expo-splash-screen';
import {useFonts} from 'expo-font';

SplashScreen.preventAutoHideAsync();

export default function RootLayout () {
    const [loaded,error] = useFonts({
        'Libertinus-Mono': require('../src/assets/Fonts/LibertinusMono-Regular.ttf'),
    });
    useEffect (() => {
        if(error) {
            console.error("Error loading fonts", error);
        }
        if(loaded) {
            console.log("Fonts loaded successfully!");
            SplashScreen.hideAsync();
        }    
    },[loaded,error]);

    if (!loaded && !error){
        return null;
    }
    return(
        <Stack
        screenOptions={{header : () => <Header />}}>
            <Stack.Screen name="index" options={{title:'Home'}}/>
        </Stack>
    );
    return(
        <View style = {{flex :1,backgroundColor:"#121414"}}>
            <Stack screenOptions={{ contentStyle : {backgroundColor:"#121414"}}}/>
        </View>
    );
}