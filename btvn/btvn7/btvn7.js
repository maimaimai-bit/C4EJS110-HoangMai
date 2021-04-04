function bai1() {
    console.log ('1-d, 2-a, 3-c, 4-b');
}
function bai2() {
    let timer = setInterval(() => alert('teehee'), 1500);
    setTimeout(() => {clearInterval(timer)}, 6000);
}
function bai3() {
    console.log ('3.1: no; 3.2: no')
}
function bai4() {
    let x = document.getElementsByTagName("li");
    console.log(x[1]);
    for (let i=0; i<x.length; i++) {
        console.log(x[i]);
    }
}
function bai5() {
    let x = document.getElementsByClassName("singer");
    console.log(x[1]);
    for (let i=0; i<x.length; i++) {
        console.log(x[i]);
    }
}
function bai6() {
    let x = document.getElementsByClassName("singer");
    x[1].remove();
}
function bai7() {
    let button1 = document.getElementById("button1");
    let button2 = document.getElementById("button2");
    button1.addEventListener('click', (e) => {
        console.log(e.target);
    });
    button2.addEventListener('click', (e) => {
        console.log(e.target);
    });   
    let input = document.getElementById("input");
    input.addEventListener('keydown', (e) => {
        console.log(e.key);
    })
}
function bai8() {
    alert ('Hi, I am Mai. One thing I wish to do this year is learning the basics of coding.');
}
function bai9() {
    function thongBao(n, w) {
    alert (`You are ${n} and one thing you wish to do this year is ${w}`);
    }
    let name = prompt ('What is your name?');
    let wish = prompt ('What is your wish?');
    thongBao(name, wish);
}   
function bai10() {
    function thongBao(n, w) {
        alert (`You are ${n} and one thing you wish to do this year is ${w}`);
    }
    let name = prompt ('What is your name?');
    let wish = prompt ('What is your wish?');
    if (wish) {
        thongBao(name, wish);
    } else {
        alert (`You are ${name} and you have no wish yet!`)
    }
}
function bai11() {
    let button11 = document.getElementById("button11");
    console.log(button11);
    button11.addEventListener ('click', (e) => {
        console.log (button11.innerText + ' just clicked');
        let name = input11.value;
        console.log ('Name of user: ' + name);
        let upperName = name.toUpperCase();
        console.log ('Name of user in uppercase: ' + upperName);
        result.innerText = upperName;
        }
    )
    let input11 = document.getElementById("input11");
    console.log(input11);
    let result = document.getElementById("result");
}
function bai12() {
//12.1-12.4
    let items = ['Backpack', 'Miband watch', 'Ring'];
    console.log(items);
    let items1 = document.getElementById("items1");
    console.log(items1);
    for (let i=0; i<items.length; i++) {
        items1.insertAdjacentHTML ('beforeend', 
        `<li>${items[i]}</li>`
        )
    }
    let test = document.getElementsByClassName("test");
    while(test.length > 0) {
        test[0].remove();
    }
//12.5-12.10
    let button12 = document.getElementById("button12");
    console.log(button12);
    let input12 = document.getElementById("input12");
    console.log(input12);
    button12.addEventListener ('click', () => {
        console.log (button12.innerText + ' button clicked');
        let newItem = input12.value;
        console.log (newItem);
        items.push (newItem);
        console.log (items);
        items1.insertAdjacentHTML ('beforeend', 
            `<li id="newitem">${newItem}</li>`
            )
        }
    )
//12.11 ->
setTimeout (() => {
    let itemReset = document.getElementById("newitem");
    itemReset.remove();
    items.splice (items.length-1, 1);
    console.log (items);}, 7000)
//12.12-12.16
let itemList = document.querySelectorAll("#items1 > li");
console.log(itemList);
let buttonList = [];
for (let i=0; i<itemList.length; i++) {
    itemList[i].insertAdjacentHTML ('beforeend',
    `<button id="remove${i}">Remove</button>`)
    var button = document.getElementById(`remove${i}`);
    buttonList.push(button);
}
for (let i=0; i<buttonList.length; i++) {
    buttonList[i].addEventListener ('click', () => {
        console.log ('Remove');
        console.log ('Index: '+ i); 
        let itemName = items[i];
        items.splice(items.indexOf(itemName),1);
        console.log(items);
        itemList[i].remove();})
    }
}
bai12();