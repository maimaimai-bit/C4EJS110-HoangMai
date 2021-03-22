//1 
{
let a = 1;
let b = 'haha';
[a, b] = [b, a]; 
console.log ([b, a]);
} {
let a = 3;
let b = 'hihi';
let temp;
temp = a;
a = b;
b = temp; 
}
//2 
{
let string1 = ('Oh hi there!');
let array1 = string1.split (' ');
console.log (array1);
}
//3 
{
let a = [4, 5, 7, -8];
console.log(...a);
console.log (Math.min(...a));
}
//4 
{
while (true) {
    let clothes = ['Jeans', 'T-shirts', 'Socks'];
    let askUser = prompt ('Hi there, welcome to shop admin panel, what do you want (C, R, U, D)?');
    function readClothes() {
        console.log ('The current items are:');
        for (i=0; i<clothes.length; i++) {
        console.log ((i+1) + '. ' + clothes[i]);
        }
    } if (askUser.toUpperCase() == 'R') {
        readClothes();
        break;
    } else if (askUser.toUpperCase() == 'C') {
        let askC = prompt ('Enter the name of the new item');
        clothes.push (askC);
        alert ('Done'); 
        readClothes();
        break;
    } else if (askUser.toUpperCase() == 'U') {
        let askU = Number (prompt ('Enter the position you want to update'));
        let askU2 = prompt ('Enter the new name');
        clothes[askU-1] = askU2;
        alert ('Done');
        readClothes();
        break;
    } else if (askUser.toUpperCase() == 'D') {
        let askD = Number (prompt ('Enter the position you want to delete'));
        clothes.splice ((askD-1), 1);
        alert ('Done');
        readClothes();
        break;
    } else {
        alert ('This command is not supported');
    }
}
}
//spread operator
{
let a = [1,2,4];
let b = [...a];
console.log (b);
}
//5 
{
let string1 = prompt ('Enter a sequence of number, separated by comma (,)');
let array1 = string1.split(',');
array1 = array1.map(Number);
let sum = array1.reduce((a, b) => a + b, 0);
alert (`The sum of them is ${sum}`);
}
//6
{
let string1 = prompt ('Enter a sequence of number, separated by comma (,)');
let array1 = string1.split(',');
alert (`The smallest number is ${Math.min(...array1)}`);
}
//7 
{
let array1 = [1, 5, -88, 75, 14, 10, 24, 33, 2];
let askUser = Number (prompt ('Enter a number'));
let i = array1.indexOf(askUser);
if (i !== -1) {
    alert (`The number ${askUser} is found in my array at index ${i}`);
} else {
    alert (`The number ${askUser} is not found in my array`);
}
}
//8 
{
let sheepSize = [1, 6, 14, 10, 29, 11, 78, 5];
console.log ('Hi, I am Mai and here is my sheep sizes:');
console.log (...sheepSize);
let bigSheep = Math.max(...sheepSize);
console.log (`Now that my biggest sheep has a size of ${bigSheep}, let's shave it!`);
sheepSize[sheepSize.indexOf(bigSheep)] = 8;
console.log ('After sheering, here is my flock:');
console.log (...sheepSize); 
for (let m=1; m<=3; m++) {
        // for (let i=0; i<sheepSize.length; i++) {
        // sheepSize[i]+=50 }
    sheepSize = sheepSize.map(a => (a+50));
    console.log (`MONTH ${m}`);
    console.log ('One month has passed. My sheep have grown, and here are there sizes:');
    console.log (...sheepSize);
} let totalSize = sheepSize.reduce((a,b) => a+b, 0);
console.log (`The total size of my flock is ${totalSize}`);
console.log (`I can sell them for ${totalSize} * 2$ = ${totalSize*2}`);
}
//9
{
setSpeed(Infinity);
setWidth(8);
let colors = ['red', 'gray', 'blue', 'purple', 'cyan'];
for (let i=0; i<colors.length; i++) {
    setColor(colors[i]);
    for (let n=1; n<=4; n++) {
        fd(100*i);
        rt(90);
    }
}
}
//10 
{
let askUser = prompt ('Enter a sequence of names, separated by comma');
let array = askUser.split(',');
array = array.map(a => `<${a}>`); 
alert (array); 
}
//11
{
let askUser = prompt ('Enter a sequence of number, separated by comma');
let array = askUser.split(',');
array = array.map(Number);
array = array.filter(a => a%2==1);
alert (array);
}