import React from "react";
import {StyleSheet, Text} from "react-native";

export default function Texto({ children, style }) {
    let estilo = estilos.texto;

    if (style?.fontweight === 'bold') {
        estilo = estilos.textoNegrito;
    }

    return <Text style={[style, estilo]}>{ children }</Text>
}

const estilos = StyleSheet.create({
    texto: {
        fontFamily: "MontseserratRegular",

    },
    textoNegrito: {
        fontFamily: "MontserratBold",
        fontWeight: "bold"

    }
})
