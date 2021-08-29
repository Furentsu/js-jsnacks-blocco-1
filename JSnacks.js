/* #1
 * L'utente inserisce due parole in successione, con due prompt. 
 * Il software stampa prima la parola più corta, poi la parola più lunga.
 */


// const primaParola = prompt("Inserisci una parola");
// const secondaParola = prompt("Inserisci un'altra parola");

//  if (primaParola.length > secondaParola.length) {
//     console.log(secondaParola + ", " + primaParola);
//  } else if (primaParola.length < secondaParola.length) {
//     console.log(primaParola + ", " + secondaParola);
//  } else {
//      alert("Le due parole hanno la stessa lunghezza");
//  }


/* #2
 * Il software deve chiedere per 10 volte all'utente di inserire un numero.
 * Il programma stampa la somma di tutti i numeri inseriti. 
 */

// let sum = 0;

//  for (let i = 0; i < 10; i++) {
//     let number = parseInt(prompt("Give me a number please..."));
//     if (Number.isNaN(number)) {
//         alert("You must only insert numbers!!");
//         break;
//     } else {
//         sum += number;
//     }
//  }

//  console.log(sum);


/**  #3   
 *   In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
 *   chiedi all'utente il suo nome e comunicagli se può partecipare o no alla festa.
 */

// const invitati = ["Antonio", "Luca", "Giovanni", "Tommaso", "Gerardo", "Marco"];

// let nome = prompt("Mi dica il suo nome, perfavore");

// let permesso = "Ci dispiace ma il suo nome non risulta nel nostro esclusivo elenco.";

// for (let i = 0; i < invitati.length; i++) {
//     if (nome === invitati[i]) {
//         permesso = "Benvenuto all'esclusivo party del grande Gatsby!!!";
//         break;
//     }   
// }   

// alert(permesso);


/** #4
 * Crea un array vuoto.
 * Chiedi per 6 volte all'utente di inserire un numero,
 * se è dispari inseriscilo nell'array.
 */

//  let odd_array = []
//  let even_array = []

//  for (i = 0; i < 6; i++) {
//      number = parseInt(prompt("Give me a number, please"));
//      if (number % 2 == 1) {
//          odd_array.push(number);
//      } else if (number % 2 == 0) { 
//         even_array.push(number)
//      } else if (Number.isNaN(number)) {
//         alert("Please insert only numbers")
//         break;
//      }
//  }

//  console.log(odd_array);
//  console.log(even_array);


/** #5
 * Calcola la somma e la media dei primi 10 numeri
 */

 
//  let n = 0;
//  let sum = 0;

//  while (n < 10) {
//      sum += n;
//      n++;
//  }

//  console.log(sum/10);


/*  #6
 *	Crea un array vuoto.
 * 	Chiedi all'utente di inserire cinque parole.
 *	Quando una parola è scritta con tutti i caratteri in maiuscolo stampa un alert,
 *	altrimenti inseriscila nell'array.
 *
 */

//  let array = [];
//  let n = 0;

//  while (n < 5) {
//      let word = prompt("Inserisci una parola!");
     
//      if (word === word.toUpperCase()) {
//         alert("Non urlare!!!");
//         break;
//      } else {
//         array.push(word);
//         n++;
//      }
//  }

//  console.log(array);
 

/** #7
 *  Il software deve chiedere per 5 volte all'utente di inserire un numero.
 *  Il programma stampa la somma di tutti i numeri inseriti.
 *  Esegui questo programma in due versioni, con il for e con il while.
 */

//  FOR

// let sum = 0;

// for (let i = 0; i < 5; i++) {
//     sum += parseInt(prompt("Give me a number"));    
// }

// console.log(sum);

// WHILE

// let sum = 0;
// let i = 0;

// while (i < 5) {
//     number = parseInt(prompt("Give me a number"));
//     sum += number;
//     i++;
// }

// console.log(sum);


/** #8
 * 
 * Generatore di "nomi cognomi" casuali: prendendo una lista di nomi e 
 * una lista di cognomi, Gatsby vuole generare una falsa lista di 8 invitati.
 * Stampiamo la lista in modo ordinato in html come elementi <li> figli di un unico <ul>.
 * 
 */

// listaNomi = ["Adam", "Alex", "Aaron", "Ben", "Carl", "Dan", "David", "Edward", "Fred", "Frank", "George", "Hal", "Hank", "Ike", "John", "Jack", "Joe", "Larry", "Monte", "Matthew", "Mark", "Nathan", "Otto", "Paul", "Peter", "Roger", "Roger", "Steve", "Thomas", "Tim", "Ty", "Victor", "Walter"];

// listaCognomi = ["Anderson", "Ashwoon", "Aikin", "Bateman", "Bongard", "Bowers", "Boyd", "Cannon", "Cast", "Deitz", "Dewalt", "Ebner", "Frick", "Hancock", "Haworth", "Hesch", "Hoffman", "Kassing", "Knutson", "Lawless", "Lawicki", "Mccord", "McCormack", "Miller", "Myers", "Nugent", "Ortiz", "Orwig", "Ory", "Paiser", "Pak", "Pettigrew", "Quinn", "Quizoz", "Ramachandran", "Resnick", "Sagar", "Schickowski", "Schiebel", "Sellon", "Severson", "Shaffer", "Solberg", "Soloman", "Sonderling", "Soukup", "Soulis", "Stahl", "Sweeney", "Tandy", "Trebil", "Trusela", "Trussel", "Turco", "Uddin", "Uflan", "Ulrich", "Upson", "Vader", "Vail", "Valente", "Van Zandt", "Vanderpoel", "Ventotla", "Vogal", "Wagle", "Wagner", "Wakefield", "Weinstein", "Weiss", "Woo", "Yang", "Yates", "Yocum", "Zeaser", "Zeller", "Ziegler", "Bauer", "Baxster", "Casal", "Cataldi", "Caswell", "Celedon", "Chambers", "Chapman", "Christensen", "Darnell", "Davidson", "Davis", "DeLorenzo", "Dinkins", "Doran", "Dugelman", "Dugan", "Duffman", "Eastman", "Ferro", "Ferry", "Fletcher", "Fietzer", "Hylan", "Hydinger", "Illingsworth", "Ingram", "Irwin", "Jagtap", "Jenson", "Johnson", "Johnsen", "Jones", "Jurgenson", "Kalleg", "Kaskel", "Keller", "Leisinger", "LePage", "Lewis", "Linde", "Lulloff", "Maki", "Martin", "McGinnis", "Mills", "Moody", "Moore", "Napier", "Nelson", "Norquist", "Nuttle", "Olson", "Ostrander", "Reamer", "Reardon", "Reyes", "Rice", "Ripka", "Roberts", "Rogers", "Root", "Sandstrom", "Sawyer", "Schlicht", "Schmitt", "Schwager", "Schutz", "Schuster", "Tapia", "Thompson", "Tiernan", "Tisler"];

// let randomNames = [];
// let randomSurnames = [];
// let randomGuests = [];

// for (i = 0; i < 8; i++) {
//     randomIndexNames = Math.floor((Math.random() * listaNomi.length) + 1);
//     randomNames.push(listaNomi[randomIndexNames] + " ");

//     randomIndexSurnames = Math.floor((Math.random() * listaCognomi.length) + 1);
//     randomSurnames.push(listaCognomi[randomIndexSurnames] + " ");

//     randomGuests.push(randomNames[i] + " " + randomSurnames[i]);
//     document.getElementById("list").innerHTML += '<li>' + randomGuests[i] + '</li>';
// }

/** #9
 *  A)
 *   Crea due array che hanno un numero di elementi diversi (di almeno 6 elementi).
 *   Aggiungi elementi casuali all'array che ha meno elementi, fino a quando ne avrà 
 *   tanti quanti l'altro.
 * 
 *  B)
 *  Mostriamo in HTML le due liste in parallelo
 */

//  let arrayOne = [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
//  let arrayTwo = [1,2,3,4,5,6];

//  if (arrayOne.length > arrayTwo.length) {
//     while (arrayTwo.length < arrayOne.length) {
//         arrayTwo.push(Math.floor(Math.random() * 25) + 1);
//      }
//  } else if (arrayOne.length < arrayTwo.length) {
//     while (arrayTwo.length > arrayOne.length) {
//         arrayOne.push(Math.floor(Math.random() * 25) + 1);
//      }
//  } else {
//     alert("Le due liste sono uguali!")
//  }


// for (i = 0; i < arrayOne.length; i++) {
//     document.getElementById("list_one").innerHTML += '<li>' + arrayOne[i] + '</li>';
// }

// for (i = 0; i < arrayOne.length; i++) {
//     document.getElementById("list_two").innerHTML += '<li>' + arrayTwo[i] + '</li>';
// }










