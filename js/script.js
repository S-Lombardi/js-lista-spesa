"use strict";

//Scrivo la lista della spesa con un array
let lista = [
    'Pane',
    'Acqua',
    'Pasta',
    'Vino',
    'Verdure',
    'Cereali',
    'Caffè',
];

//Variabile per la condizione del ciclo while
let indice = 0;

//Recupero il tag ul tramite l'id
let ul = document.getElementById("wrap-list");

//ciclo while per incrementare il numero degli elementi della lista
while( indice < lista.length ) {
    
    //variabile che corrisponde al numero degli elementi presenti della lista
    let prodottiLista = lista[indice];
    
    //creo i tag li
    let tagLista = document.createElement("li");
    
    //inserisco gli elementi della lista nei tag li
    tagLista.innerText = prodottiLista;
    
    //inserisco la lista nell'ul del DOM
    ul.append (tagLista);
    
    //il contatore incrementa di uno fino a quando la condizione risulta vera
    indice++
}





