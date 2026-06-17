import { Stack, Tabs } from "expo-router";
import {View,StyleSheet} from "react-native";
import Header  from "../src/Components/Header"
import { useEffect } from "react";
import * as SplashScreen from 'expo-splash-screen';
import {useFonts} from 'expo-font';
import { DarkTheme, ThemeProvider } from "@react-navigation/native";

SplashScreen.preventAutoHideAsync();

const AppTheme = {
    ...DarkTheme,
    colors: {
        ...DarkTheme.colors,
        background: "#121414",
    },
};

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
        <ThemeProvider value={AppTheme}>
            <View style={{ flex: 1, backgroundColor: "#121414" }}>
                <Stack
                    screenOptions={{
                        header: () => <Header />,
                        contentStyle: { backgroundColor: "#121414" }
                    }}
                >
                    <Stack.Screen name="(tabs)" options={{ headerShown: true }} />
                    <Stack.Screen name="index" options={{ title: 'Home' }} />
                </Stack>
            </View>
        </ThemeProvider>
    );
}

