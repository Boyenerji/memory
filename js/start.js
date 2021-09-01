"use strict";

let lock = {
    name: "&#128274;",
    age: randomInteger(1, 50)
};

let fire = {
    name: "&#128293;",
    age: randomInteger(1, 10)
};

let lypa = {
    name: "&#128269;",
    age: randomInteger(1, 10)
};


let arrFive = [lock, fire, lypa];

sortByAge(arrFive);

// for (let i = 0; i < 3; i++) {
    
    
// }

document.getElementById('test').innerHTML += arrFive[0].name + ' = ' + arrFive[0].age;
setTimeout(() => document.getElementById("test").innerHTML = "", 2000);

setTimeout(() => document.getElementById('test').innerHTML += arrFive[1].name + ' = ' + arrFive[1].age, 3000);
setTimeout(() => document.getElementById("test").innerHTML = "", 5500);

setTimeout(() => document.getElementById('test').innerHTML += arrFive[2].name + ' = ' + arrFive[2].age, 8000);
setTimeout(() => document.getElementById("test").innerHTML = "", 10000);



setTimeout(() => document.getElementById('test').innerHTML += `Сколько было в ${arrFive[0].name}`, 11000);

setTimeout(() => document.getElementById('testPole').innerHTML += '<input type="text"></input>', 11500);
setTimeout(() => document.getElementById('testPole').innerHTML += '<input type="submit" onclick="check(this)"></input>', 11500);



let counter = 0;
function check(elem) {
    let input = document.querySelector('input').value;
    if (input == arrFive[0].age) {
        document.getElementById("test").innerHTML = "";
        document.getElementById('test').innerHTML += `Сколько было в ${arrFive[1].name}`;
        counter++;
    }

    if (input == arrFive[1].age) {
        document.getElementById("test").innerHTML = "";
        document.getElementById('test').innerHTML += `Сколько было в ${arrFive[2].name}`;
        counter++;
    }

    if (input == arrFive[2].age) {

        document.getElementById("test").innerHTML = "";
        counter++;
    }

    
    document.querySelector('input').value = '';
    document.querySelector('input').focus();

    if (counter == 3) {
        document.getElementById('test').innerHTML += `Правильно`; 
    }
}

function sortByAge(arrFive) {
    arrFive.sort((a, b) => a.age > b.age ? 1 : -1);
}

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}
