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
    
    //creo i tag li e inserisco gli elementi della lista
    let tagLista = `<li>${prodottiLista}</li>`;
    
    //inserisco la lista nell'ul del DOM
    ul.innerHTML += tagLista;
    
    //il contatore incrementa di uno fino a quando la condizione risulta vera
    indice++
}

//recupero il pulsante e l'input
const buttonAdd = document.getElementById("add-item");
const inputAdd = document.getElementById("input-item");


buttonAdd.addEventListener("click", function() {
    
    //recupero il valore nel campo input
    let newItem = inputAdd.value ;

    //inserisco i nuovi elementi nella lista
    lista.push(newItem);
    let tagLista = `<li>${newItem}</li>`;
    ul.innerHTML += tagLista;

    inputAdd.value = '';

});
