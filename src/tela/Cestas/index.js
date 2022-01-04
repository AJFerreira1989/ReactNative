import React from "react";
import {FlatList, StyleSheet, View} from "react-native";
import Topo from "./componentes/Topo";
import Detalhes from "./componentes/Detalhes";
import Item from "./componentes/Item";
import Texto from "../../componentes/Texto";

export default function Index({topo, detalhes, itens}) {
    return <>
        <FlatList
            style={estilos.lista}
            data={itens.lista}
            renderItem={Item}
            keyExtractor={({nome}) => nome}
            ListHeaderComponent={() => {
                return <>
                    <Topo {...topo}></Topo>

                    <View style={estilos.cesta}>
                        <Detalhes {...detalhes}></Detalhes>
                        <Texto style={estilos.titulo}>{itens.titulo}</Texto>
                    </View>
                </>
            }}
        />
    </>
}

const estilos = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,

    },
    titulo: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32
    },
    lista: {
        paddingHorizontal: 16
    }
});
