// let n
// while (true) {
// n = Number (prompt ('How many legs does a spider have? 1. None 2. 4 legs 3. 8 legs 4. 12 legs'));
// if (n) {
// 	if (n==3) {
// 		alert ('Bravo, you are correct!');
// 		break;
// 	} else {
// 		alert ('Good luck next time')
// 	}
// } else {
// 	alert ('Invalid choice, the answer must be 1, 2, 3 or 4')
// }
// }

// let array = [175, 50, 25];
// let x = array.reduce ((a,b) => (a*b));
// console.log (x);

let askUser = prompt ('Enter n random integers, separated by comma');
let array = askUser.split(',');
array = array.map(Number);
for (let i=0; i<(array.length-1); i++) {
    for (let j=(array.length-1); j>=0; j--) {
        if (array[j] < array[j-1]) {
            let temp = array[j];
            array[j] = array[j-1];
            array[j-1] = temp;
        }
    } 
} alert (array);
let arrayOdd = array.filter(a => a%2==1);
let arrayEven = array.filter(a => a%2==0);
for (let i=0; i<arrayOdd.length; i++) {
    let x = arrayOdd.indexOf(arrayOdd[i]);
    console.log(x);
}