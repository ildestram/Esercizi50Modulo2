// Date le variabili John e Doe mostra in console
let firstName = "John";
let lastName = "Doe";
console.log(`${firstName} ${lastName}`);

// Crea un oggetto con determinate proprieta'
const charachters = {
  name: "Ilde",
  surname: "Stramandinoli",
  email: "ildestram@gmail.com",
};
delete charachters.email;
console.log(charachters);

// Array contenente dieci stringhe
let tenStrings = [
  "Massimo",
  "Rita",
  "Fortunato",
  "Paolo",
  "Ilde",
  "Maria",
  "Francesca",
  "Mascio",
  "Marco",
  "Aaron",
];
// Mostra in console ogni stringa
console.log(tenStrings);

// Array contenente 100 numeri random
const array = Array.from({ length: 10 }, () => parseInt(Math.random() * 100));
console.log(array);
// Trovare valore massimo e valore minimo
console.log(Math.min.apply(Math, array));
console.log(Math.max.apply(Math, array));

// Creo un array di array in cui valore figlio ha dieci numeri random
let outerArray = [];
for (let i = 0; i < 2; i++) {
  let innerArray = [];

  for (let j = 0; j < 10; j++) {
    innerArray.push(Math.floor(Math.random() * 10));
  }
  outerArray.push(innerArray);
}
console.log(outerArray);

// Crea una funzione che riceve 2 array come parametri e ritorni quello con più elementi
// Prima di tutto creo una funzione che abbiamo due array come parametri
// Dentro la funzione scrivo un if else
function largestArray(arr1, arr2) {
  if (arr1.length >= arr2.length) {
    return arr1;
  } else {
    return arr2;
  }
}
console.log(largestArray([2, 3, 4, 5], [3, 4, 3]));

// Crea una funzione che riceve 2 array numerici come parametri e ritorna quello con la somma totale degli elementi maggiore
function largestNumArray(ar1, ar2) {
  let sum1 = ar1.reduce((a, b) => a + b, 0);
  let sum2 = ar2.reduce((a, b) => a + b, 0);

  if (sum1 >= sum2) {
    return ar1;
  } else {
    return ar2;
  }
}
console.log(largestNumArray([2, 4], [4, 6]));

// Seleziona l'elemento con id "container" nella pagina
console.log(document.getElementById("container"));
// Ovviamente il risultato non viene fuori, perchè io non nell'html non ho dato a nessun tag l'id container

// Seleziona tutti gli elementi di tipo <td> nella pagina
console.log(document.querySelectorAll("td"));

// Usa un ciclo per stampare in console il testo contenuto in ogni elemento <td> nella pagina
let td = document.getElementsByTagName("td");
for (let i = 0; i < td.length; i++) {
  console.log(td[i].textContent);
}

// Scrivi una funzione per cambiare il titolo della pagina
function changeTitle(newTitle) {
  document.title = newTitle;
}
// nel momento in cui andiamo a chiamare la funzione e passiamo come argomento una stringa qualunque, questo andrà a cambiare il titolo della pagina cioè la stringa che gli passiamo come argomento sarà il nuovo titolo della pagina -> grazie a document.title

// Scrivi una funzione per aggiungere una nuova riga alla tabella nella pagina
function addRowToTable(border) {
  let table = document.getElementsByClassName("border");
  let newRow = table.insertRow();

  for (let i = 0; i < table.rows[0].cells.length; i++) {
    let newCell = newRow.insertCell();
    newCell.innerHTML = "New Cell";
  }
}

// Scrivi una funzione per aggiungere la classe test ad ogni riga nella tabella
function addClassEachRows() {
  let rows = document.getElementsByTagName("tr");

  for (let i = 0; i < rows.length; i++) {
    // random è una classe immaginaria che dovrei assegnare per poi aggiungere ad ogni riga della tabella
    rows[i].classList.add("random");
  }
}

// Scrivi una funzione per aggiungere lo sfondo rosso a ogni link presente nella pagina
function addBackground() {
  let eachLinks = document.getElementsByTagName("a");

  for (let i = 0; i < eachLinks.length; i++) {
    eachLinks[i].style.backgroundColor = "red";
  }
}

// Mostra in console "Page loaded" quando la pagina ha finito di caricarsi
window.addEventListener("load", function () {
  console.log("Page loaded");
});

// Funzione per aggiungere nuovi elementi alla unordered list nella pagina
function addUnorderedList(item) {
  let pippo = document.getElementsByTagName("ul")[0];
  let baudo = document.createElement("li");

  baudo.innerHTML = item;
  pippo.appendChild(baudo);
}

// Funzione per svuotare una lista nella pagina
// function empty() {
//   let newEmpty = document.getElementsByTagName("ul")[0];
// }
