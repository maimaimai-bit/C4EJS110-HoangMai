//A.1
//Cho n số nguyên liên tiếp từ 0 đến n-1 được biểu diễn trên một vòng tròn, 
//khoảng cách giữa các số bằng nhau (và tất nhiên là 0 và số n-1 cũng ở cạnh nhau). 
//Biết rằng n là số nguyên dương chẵn nằm trong khoảng từ 4 đến 20
//Viết hàm findOppositeNumber(n, inputNumber) cho trước 2 tham số đầu vào là n và inputNumber
//tồn tại trong dãy. Tìm số đối diện với số inputNumber đó (0 <= inputNumber <= n - 1)
{
function findOppositeNumber(n, inputNumber) {
    if (n<4 || n>20 || n%2!=0 || n%1!=0) {
        alert ("n không hợp lệ!");
    if (inputNumber<0 || inputNumber>(n-1)) {
        alert ("inputNumber không hợp lệ!");
    }
    } else {
        if (inputNumber>=n/2) {
            return (inputNumber - n/2);
        } else {
            return (inputNumber + n/2)
        }
    }
}
let testCase1 = findOppositeNumber(10,2);
console.log(testCase1);
let testCase2 = findOppositeNumber(10,6);
console.log(testCase2);
}
//A.2
{
function merge2String (s1, s2) {
    let arr1 = s1.split("");
    let arr2 = s2.split("");
    let result = "";
    for (let i=0; i<arr1.length || i<arr2.length; i++) {
        if (arr1[i]) {
            result += arr1[i];
        }
        if (arr2[i]) {
            result += arr2[i];
        }
    }
    return result;
}
let testCase1 = merge2String("abc", "123");
console.log(testCase1);
let testCase2 = merge2String("abc", "0123");
console.log(testCase2);
let testCase3 = merge2String("abcd", "123");
console.log(testCase3);
}
//B
let input = document.getElementById("input");
let button = document.getElementById("button");
let result = document.getElementById("result");
let play = document.getElementById("play");
let song = document.getElementById("song");
let count = 3
button.addEventListener("click", () => {
    count -= 1;
    if (input.value != 5) {
        result.style.color = "red";
        result.innerText=`Con số này chưa đúng! Bạn còn ${count} lần đoán.`; 
    }
    if (count == 0) {
        play.style.display = "none";
        result.style.color = "red";
        result.innerText="Bạn đã hết lượt đoán! Con số đúng là 5."; 
    }
    if (input.value == 5) {
        play.style.display = "none";
        result.style.color = "green";
        result.innerText="Chúc mừng bạn đã đoán con số đúng! Hãy tận hưởng bài hát này!";
        song.style.display="block";
    }
})
