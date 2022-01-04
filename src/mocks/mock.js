import React from "react";

import logo from "../../assets/logo.png";
import tomate from "../../assets/frutas/Tomate.png"
import abobora from "../../assets/frutas/Abóbora.png"
import batata from "../../assets/frutas/Batata.png"
import brocolis from "../../assets/frutas/Brócolis.png"
import pepino from "../../assets/frutas/Pepino.png"

const cesta = {
    topo: {
        titulo: "Detalhes da Loja"
    },
    detalhes: {
        nome: "Orçamento",
        logoFazenda: logo,
        nomeFazenda: "Eletronica Veterana",
        descricao: "Painel de Led da tv queimado. Para solução do problema, o painel queimado deve ser subistituido por um novo",
        preco: "R$ 100,00",
        botao: "Comprar"
    },
    itens: {
        titulo: "Item da cesta",
        lista: [
            {
                nome: "Tomate",
                imagem: tomate,
            },
            {
                nome: "Brócolis",
                imagem: brocolis,
            },
            {
                nome: "Batata",
                imagem: batata,
            },
            {
                nome: "Pepino",
                imagem: pepino,
            },
            {
                nome: "Abóbora",
                imagem: abobora,
            }
        ]
    }
}

export default cesta;
