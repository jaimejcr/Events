// console.log("Ejercicio ------- 1");
const buttonExercise1 = document.querySelector("#ejercicio-1 > button");
function obtenerColorAleatorio() {
    const colorAleatorio = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + colorAleatorio;
  }

buttonExercise1.addEventListener("click", function(){
    const body = document.querySelector("body");
    body.style.backgroundColor = obtenerColorAleatorio();
});

// console.log("Ejercicio -------- 2");

const buttonAdd = document.querySelector(".increase");
const subtract = document.querySelector(".decrease");
const counter = document.querySelector("#counter");
let contador = 0;

function updateContador (){
    counter.textContent = contador;
}

function increaseCounter (){
    contador++;
    updateContador();
}
function decreaseCounter (){
    contador--;
    updateContador();
}

buttonAdd.addEventListener("click", function (){
   increaseCounter();
   
});
subtract.addEventListener("click", function (){
    decreaseCounter();
})

// console.log("Ejercicio ------- 3");

const hiddeButton = document.querySelector("#ejercicio-3 > button");
const texto = document.querySelector(".text");

hiddeButton.addEventListener("click", ()=> {
    if (texto.style.display === "none") {
        texto.style.display = "block";
    }else {
        texto.style.display = "none";
    }
})

// console.log("Ejercicio --------4");

const lista = document.querySelector("#ejercicio-4 > ul")
const deleteButton = document.querySelector("#ejercicio-4 > button")
let indice = 0;
console.log(deleteButton);
console.log(lista.children[0]);

function deleteParagraph () {
   deleteButton.addEventListener("click", ()=>{

   if (indice < lista.children.length) {
    lista.children[indice].style.display = "none";
    indice++;
   }
   if (indice >= lista.children.length){
    indice = 0;
    lista.children[indice].style.display = "list-item";
   }
   
   })
}
deleteParagraph();

// console.log(Ejercicio ------ 5);




































// Este array debe usarse para el ejercicio 10
const data = [
    { id: 1, name: 'bulbasaur', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' },
    { id: 2, name: 'ivysaur', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png' },
    { id: 3, name: 'venusaur', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png' },
    { id: 4, name: 'charmander', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png' },
    { id: 5, name: 'charmeleon', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png' },
    { id: 6, name: 'charizard', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png' },
    { id: 7, name: 'squirtle', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png' },
    { id: 8, name: 'wartortle', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png' },
    { id: 9, name: 'blastoise', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png' },
    { id: 10, name: 'caterpie', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png' },
    { id: 11, name: 'metapod', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png' },
    { id: 12, name: 'butterfree', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png' },
    { id: 13, name: 'weedle', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png' },
    { id: 14, name: 'kakuna', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png' },
    { id: 15, name: 'beedrill', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png' },
    { id: 16, name: 'pidgey', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png' },
    { id: 17, name: 'pidgeotto', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png' },
    { id: 18, name: 'pidgeot', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png' },
    { id: 19, name: 'rattata', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png' },
    { id: 20, name: 'raticate', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png' }
]