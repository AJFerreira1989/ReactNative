import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {SafeAreaView} from 'react-native';
import AppLoading from "expo-app-loading";
import {
    Montserrat_400Regular,
    Montserrat_400Regular_Italic,
    Montserrat_700Bold,
    useFonts
} from '@expo-google-fonts/montserrat';

import Index from './src/tela/Cestas';
import mock from "./src/mocks/mock";

export default function App() {
    const [fonteCArregada] = useFonts({
        "MontseserratRegular": Montserrat_400Regular,
        "MontseserratBold": Montserrat_700Bold,
        "MontseserratRegular_Italic": Montserrat_400Regular_Italic
    });

    if (!fonteCArregada) {
        return <AppLoading/>
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <StatusBar/>
            <Index {...mock}/>
        </SafeAreaView>
    );
}


