//1
let traLoi1 = 'Trong javascript, var va const la cac cach khai bao bien. Trong khi let la cach khai bao code-blocked (bien chi dung dc trong block {}), thì var la function-blocked (neu declare bang var ngoai function thi declaration do se dung dc cho toan du an.) Trong khi do, const thuong duoc dung de khai bao nhung bien khong doi (khong the khai bao lai, khac voi let.) Ta dung cac cach khai bao tuy theo muc dich khai bao.';
console.log (traLoi1);
//2
let traLoi2 = ('Boolean la mot kieu du lieu cho gia tri true hoac false, dung de xu ly nhung bieu thuc/bien ma chi co the dung hoac sai. De tao ra kieu du lieu boolean, ta co the dat bien la boolean tu dau, dung phep so sanh, cac phep boolean hoac chuyen doi tu kieu du lieu khac.');
console.log (traLoi2);
//3a
for (let x=0; x<=7; x++) {
    console.log (x);
}
//3b
let askUser3b = Number (prompt ('Enter n'));
for (let x=0; x<askUser3b; x++) {
    console.log (x);
}
//3c
let askUser3c = Number (prompt ('Enter n'));
if (askUser3c<=3) {
    askUser3c = Number (prompt ('Please enter n>3'));
} else {
    for (let x=3; x<askUser3c; x++) {
    console.log (x);
}
}
// 3d
let c = prompt ('Enter c');
let n = prompt ('Enter n so that n>c');
for (let x=c; x<n; x++) {
    console.log (x);
}
//3e
let c = prompt ('Enter c');
let n = prompt ('Enter n so that n>c');
for (let x=c; x<n; x+=3) {
    console.log (x);
}
//3f
let c = Number (prompt ('Enter c'));
let n = Number (prompt ('Enter n so that n>c'));
let s = Number (prompt ('Enter s so that s<(n-c)'));
for (let x=c; x<n; x+=s) {
    console.log (x);
}
//4
let n = Number (prompt ('Enter n'));
let result = 1;
while (n>1) {
    result = result*n;
    n--;
}
alert (`The factorial of n is ${result}`);
//5
let age = Number (prompt ('How old are you?'));
if (age<14) {
    alert ('You are not old enough to view this content.');
}
else {
    alert ('Enjoy!');
}
//6
let x = Number (prompt('Enter a number'));
if (x>0 && x<4.5) {
    alert ('Your number is in the lower half of the 0-9 range.')
} else if (x<9) {
    alert ('Your number is in the higher half of the 0-9 range.')
}
//7
let x = Number (prompt ('Enter x'));
let n = Number (prompt ('Enter n'));
if (x>0 && x<(n/2)) {
    alert (`Number ${x} is in the lower half of ${n}`);
} else if (x<n) {
    alert (`Number ${x} is in the higher half of ${n}`);
}
//8
let x = Number (prompt ('Enter a number'));
if ((x%2)==0) {
    alert (`${x} is an even number.`);
} else {
    alert (`${x} is an odd number.`);
}
//9a
for (let x=1; x<=6; x++) {
    if (x<=3) {
        console.log ('L');
    } else {
        console.log ('H');
    }
}
//9b
let n = Number (prompt ('Enter n'));
for (let x=1; x<=n; x++) {
    if (x<=n/2) {
        console.log ('L');
    } else {
        console.log ('H');
    } 
}
//9c
for (x=1; x<=8; x++) {
    if (x%2==1) {
        console.log (0);
    } else {
        console.log (1);
    }   
}
//9d
let n = Number (prompt ('Enter n'));
for (x=1; x<=n; x++) {
    if (x%2==0) {
        console.log(0);
    } else {
        console.log(1);
    }
}
//10
let weightKg = prompt ('How much do you weigh in kilograms?');
let heightCm = prompt ('How tall are you in centimeters?');
let heightM = heightCm/100
let BMI = weightKg/(heightM*heightM);
if (BMI < 16) {
    alert ('You are severely underweight.')
} else if (BMI < 18.5) {
    alert ('You are underweight.');
} else if (BMI < 25) {
    alert ('Your weight is normal.');
} else if (BMI < 30) {
    alert ('You are overweight.');
} else {
    alert ('You are obese.');
}
//12
let n = Number (prompt ('How many edges are there?'));
for (x=1; x<=n; x++) {
  right (360/n);
  forward (90);
} 
