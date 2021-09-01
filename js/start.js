"use strict";


let lock = {
    name: "&#128274;",
    age: randomInteger(1, 12)
};

let fire = {
    name: "&#128293;",
    age: randomInteger(1, 12)
};

let lypa = {
    name: "&#128269;",
    age: randomInteger(10, 20)
};

if (lock.age == fire.age) {
    while (lock.age == fire.age) {
        lock.age = randomInteger(1, 30);
    }
}

if (lock.age == lypa.age) {
    while (lock.age == lypa.age) {
        lock.age = randomInteger(1, 30);
    }
}

if (fire.age == lypa.age) {
    while (fire.age == lypa.age) {
        fire.age = randomInteger(1, 30);
    }
}


let arrFive = [lock, fire, lypa];

sortByAge(arrFive);


document.getElementById('test').innerHTML += arrFive[0].name + ' = ' + arrFive[0].age;
setTimeout(() => document.getElementById("test").innerHTML = "", 2000);

setTimeout(() => document.getElementById('test').innerHTML += arrFive[1].name + ' = ' + arrFive[1].age, 3000);
setTimeout(() => document.getElementById("test").innerHTML = "", 5000);

setTimeout(() => document.getElementById('test').innerHTML += arrFive[2].name + ' = ' + arrFive[2].age, 7000);
setTimeout(() => document.getElementById("test").innerHTML = "", 9000);


setTimeout(() => document.getElementById('test').innerHTML += `Сколько было в ${arrFive[2].name}`, 11000);

setTimeout(() => document.getElementById('testPole').innerHTML += '<input type="text"></input>', 11500);
setTimeout(() => document.getElementById('testPole').innerHTML += '<input type="submit" onclick="check(this)"></input>', 11500);


let counter = 0;
let complete = 0;
function check(elem) {
    complete++;
    let input = document.querySelector('input').value;

    let text = document.getElementById('test').innerHTML;
    console.log(text);


    if (text == 'Сколько было в 🔍') {
        for (let index = 0; index < arrFive.length; index++) {
            if (arrFive[index].name == '&#128269;') {
                if (arrFive[index].age == input) {
                    console.log('Значение ЛУПЫ совпадает с тем что я ввел');
                    counter++;
                } else {
                    console.log('Значение в ЛУПЕ не совпадает');
                }
            document.getElementById("test").innerHTML = "";
            arrFive.splice(index, 1);
            } 
        }
    } else if (text == 'Сколько было в 🔥') {
        for (let index = 0; index < arrFive.length; index++) {
            if (arrFive[index].name == '&#128293;') {
                if (arrFive[index].age == input) {
                    console.log('Значение ОГНЯ совпадает с тем что я ввел');
                    counter++;
                } else {
                    console.log('Значение в ОГНЯ не совпадает');
                }
            document.getElementById("test").innerHTML = "";
            arrFive.splice(index, 1);
            } 
        }

    } else if (text == 'Сколько было в 🔒') {
        for (let index = 0; index < arrFive.length; index++) {
            if (arrFive[index].name == '&#128274;') {
                if (arrFive[index].age == input) {
                    console.log('Значение ЗАМКА совпадает с тем что я ввел');
                    counter++;
                } else {
                    console.log('Значение в ЗАМКА не совпадает');
                }
            document.getElementById("test").innerHTML = "";
            arrFive.splice(index, 1);
            } 
        }
    }

    if (complete == 3) {
        if (counter == 3) {
            document.getElementById('test').innerHTML += 'Без ошибок';
        } else {
            document.getElementById('test').innerHTML += 'Были ошибки';
        } 
    }

    if (arrFive.length != 0) {
        for (let one = 0; one < 1; one++) {
            document.getElementById('test').innerHTML += 'Сколько было в ' + arrFive[one].name;
        }
    }

    document.querySelector('input').value = '';
    document.querySelector('input').focus(); 
}



function sortByAge(arrFive) {
    arrFive.sort((a, b) => a.age > b.age ? 1 : -1);
}

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}
