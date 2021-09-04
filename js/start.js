"use strict";



let testText = '';
let lock = {
    name: "&#128274;",
    age: randomInteger(1, 30)
};

let fire = {
    name: "&#128293;",
    age: randomInteger(1, 30)
};

let lypa = {
    name: "&#128269;",
    age: randomInteger(1, 30)
};


if (lock.age == fire.age || lock.age == lypa.age || fire.age == lypa.age){
    while (lock.age == fire.age || lock.age == lypa.age || fire.age == lypa.age){
        lock.age = randomInteger(1, 30);
        fire.age = randomInteger(1, 30);
    }
}





let knopkiOne = {
    numberOne: `<input type="submit" id="number" value="${lypa.age}" onclick="check(this)"></input>`,
    age: randomInteger(1, 30)
};

let knopkiTwo = {
    numberOne: `<input type="submit" id="number" value="${randomInteger(1, 30)}" onclick="check(this)"></input>`,
    age: randomInteger(1, 30)
};

let knopkiThree = {
    numberOne: `<input type="submit" id="number" value="${randomInteger(1, 30)}" onclick="check(this)"></input>`,
    age: randomInteger(1, 30)
};

let knopkiFour = {
    numberOne: `<input type="submit" id="number" value="${fire.age}" onclick="check(this)"></input>`,
    age: randomInteger(1, 30)
};

let knopkiFive = {
    numberOne: `<input type="submit" id="number" value="${randomInteger(1, 30)}" onclick="check(this)"></input>`,
    age: randomInteger(1, 30)
};

let knopkiSix = {
    numberOne: `<input type="submit" id="number" value="${lock.age}" onclick="check(this)"></input>`,
    age: randomInteger(1, 30)
};

let arrKnopki = [knopkiOne, knopkiTwo, knopkiThree, knopkiFour, knopkiFive, knopkiSix];

sortByAge(arrKnopki);


const buttonReload = '<input type="submit" id="reload" value="Начать заново" onclick="update(this)"></input>';





// if (lock.age == fire.age || lock.age == lypa.age || fire.age == lypa.age){
//     while (lock.age == fire.age || lock.age == lypa.age || fire.age == lypa.age){
//         lock.age = randomInteger(1, 30);
//         fire.age = randomInteger(1, 30);
//     }
// }

// if (lock.age == fire.age) {
//     while (lock.age == fire.age) {
//         lock.age = randomInteger(1, 30);
//     }
// }

// if (lock.age == lypa.age) {
//     while (lock.age == lypa.age) {
//         lock.age = randomInteger(1, 30);
//     }
// }

// if (fire.age == lypa.age) {
//     while (fire.age == lypa.age) {
//         fire.age = randomInteger(1, 30);
//     }
// }


let arrFive = [lock, fire, lypa];
sortByAge(arrFive);




document.getElementById('test').innerHTML += '<div class="qwe">' + arrFive[0].name + ' = ' + arrFive[0].age + '</div>';
setTimeout(() => document.getElementById("test").innerHTML = "", 1500);

setTimeout(() => document.getElementById('test').innerHTML += '<div class="qwe">' + arrFive[1].name + ' = ' + arrFive[1].age + '</div>', 3000);
setTimeout(() => document.getElementById("test").innerHTML = "", 4500);

setTimeout(() => document.getElementById('test').innerHTML += '<div class="qwe">' + arrFive[2].name + ' = ' + arrFive[2].age + '</div>', 6000);
setTimeout(() => document.getElementById("test").innerHTML = "", 7500);


setTimeout(() => document.getElementById('test').innerHTML += `Сколько было в ${randomIntegerTwo(0,2)}`, 7600);



setTimeout(function() {
    for (let indexTwo = 0; indexTwo < arrKnopki.length; indexTwo++) {
        document.getElementById('testPole').innerHTML += arrKnopki[indexTwo].numberOne;
    } 
}, 7700);



let counter = 0;
let complete = 0;
let arrErrors = [];
function check(elem) {
    complete++;
    // let input = document.querySelectorAll('input');
    let input = elem.value;
    let text = document.getElementById('test').innerHTML;

    if (text == 'Сколько было в 🔍') {
        for (let index = 0; index < arrFive.length; index++) {
            if (arrFive[index].name == '&#128269;') {
                if (arrFive[index].age == input) {
                    counter++;
                }
                arrFive.splice(index, 1);
            }
        }
    } else if (text == 'Сколько было в 🔥') {
        for (let index = 0; index < arrFive.length; index++) {
            if (arrFive[index].name == '&#128293;') {
                if (arrFive[index].age == input) {
                    counter++;
                }
                arrFive.splice(index, 1);
            }
        }
    } else if (text == 'Сколько было в 🔒') {
        for (let index = 0; index < arrFive.length; index++) {
            if (arrFive[index].name == '&#128274;') {
                if (arrFive[index].age == input) {
                    counter++;
                }
                arrFive.splice(index, 1);
            }
        }
    }
    elem.remove();
    document.getElementById("test").innerHTML = "";

    if (complete == 3) {
        if (counter == 3) {
            document.getElementById('test').innerHTML += 'Без ошибок';
        } else {
            document.getElementById('test').innerHTML += 'С ошибками';
        }
        setTimeout(() => document.getElementById("testPole").innerHTML = "", 1000);
        setTimeout(() => document.getElementById('testPole').innerHTML += buttonReload, 2000);
    }

    if (arrFive.length != 0) {
        for (let one = 0; one < 1; one++) {
            document.getElementById('test').innerHTML += 'Сколько было в ' + arrFive[one].name;
        }
    }
}

function update(elem) {
    document.location.reload();
}


function sortByAge(arrFive) {
    arrFive.sort((a, b) => a.age > b.age ? 1 : -1);
}

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

function randomIntegerTwo(min, max) {
    let randTwo = Math.round(min - 0.5 + Math.random() * (max - min + 1));
    return arrFive[randTwo].name;
}


