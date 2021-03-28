// //1.1
// console.log(Math.random());
// //1.2
// let array = ['hi', 'hello', 'aloha', 'ciao'];
// let randomIndex = Math.floor(Math.random()*array.length);
// console.log(array[randomIndex]);
// //1.3-1.5
// let quizList = [
//     {
//         quiz: 'What is the longest that an elephant has ever lived? (that we know of)?',
//         C1: '17 years',
//         C2: '49 years',
//         C3: '86 years',
//         C4: '162 years',
//         rightChoice: '3'
//     },
//     {
//         quiz: 'How many rings are on the Olympic flag?',
//         C1: 'none',
//         C2: '5',
//         C3: '4',
//         C4: '7',
//         rightChoice: '2'
//     },
//     {
//         quiz: 'How did Spider-Man get his powers?',
//         C1: 'military experiment',
//         C2: 'inborn',
//         C3: 'woke up with them after a strange dream',
//         C4: 'bit by radioactive spider',
//         rightChoice: '4'
//     }
// ];
// let ranIndex = Math.floor(Math.random()*quizList.length);
// let ranQuiz = quizList[ranIndex];
// let askQuiz = prompt (
//     `${ranQuiz.quiz}
//     1. ${ranQuiz.C1}
//     2. ${ranQuiz.C2}
//     3. ${ranQuiz.C3}
//     4. ${ranQuiz.C4}`
// );
// if (askQuiz==ranQuiz.rightChoice) {
//     alert ('You are correct');
// } else {
//     alert ('Sorry, that is not correct');
// }
// //1.6-1.7
// let ranQuizList = [];
// debugger
// let x = quizList.length;
// for (let i=0; i<x; i++) {
// let ranIndex = Math.floor(Math.random()*quizList.length);
// let ranQuiz = quizList[ranIndex];
//     ranQuizList.push(ranQuiz);
//     quizList.splice(ranIndex,1);
// } console.log(ranQuizList);
// console.log(quizList);
// let correctChoice = 0;
// for (let i=0; i<ranQuizList.length; i++) {
//     let askQuiz1 = prompt (
//     `${ranQuizList[i].quiz}
//     1. ${ranQuizList[i].C1}
//     2. ${ranQuizList[i].C2}
//     3. ${ranQuizList[i].C3}
//     4. ${ranQuizList[i].C4}`
//     );
//     if (askQuiz1==ranQuizList[i].rightChoice) {
//         correctChoice++;
//     }
// } alert ('We are out of questions :(');
// alert (`Your total score is ${correctChoice} out of 3`);
// //2.1
// let array = ['to', 'be', 'that', 'of', 'elon', 'to', 'this', 'now', 'back', 'cool', 'hey', 'love', 'of', 'life', 'that', 'rain', 'summer', 'color', 'now', 'of', 'hat', 'late', 'sorry', 'my', 'team'];
// let countWord = {};
// for (let i=0; i<array.length; i++) {
//     let element = array[i];
//     if (countWord[element]) {
//         countWord[element]++;
//     } else {
//         countWord[element]=1;
//     }
// } console.log(countWord);
//2.2
const inventory = [
    {
        name: 'HP Envy 13aq',
        price: 21000,
        brand: 'HP',
        quantity: 5,
    },
    {
        name: 'Dell XPS 9370',
        price: 30000,
        brand: 'Dell',
        quantity: 1,
    },
    {
        name: 'Dell Inspiron 3567',
        price: 9300,
        brand: 'Dell',
        quantity: 12,
    },
    {
        name: 'Dell Latitude E5450',
        price: 8600,
        brand: 'Dell',
        quantity: 2,
    },
    {
        name: 'Asus Zenbook',
        brand: 'Asus',
        price: 20000,
        quantity: 4,
    },
    {
        name: 'HP Pavilion',
        brand: 'HP',
        price: 14000,
        quantity: 7,
    },
];
//2.3
let inventoryByBrand = {
    // 'HP': [],
    // 'Dell': [],
    // 'Asus': []
};
for (let i=0; i<inventory.length; i++) {
    if (inventoryByBrand[inventory[i].brand]) {
        inventoryByBrand[inventory[i].brand].push(inventory[i]);
    } else {
        inventoryByBrand[inventory[i].brand] = [];
        inventoryByBrand[inventory[i].brand].push(inventory[i]);
    }
    // if (inventory[i].brand == 'HP') {
    //     inventoryByBrand['HP'].push(inventory[i]);
    // } else if (inventory[i].brand == 'Dell') {
    //     inventoryByBrand['Dell'].push(inventory[i]);
    // } else if (inventory[i].brand == 'Asus') {
    //     inventoryByBrand['Asus'].push(inventory[i]);
    // }
} console.log(inventoryByBrand);
//2.4
let askUser = prompt ('Which brand do you want to check (Dell, HP, Asus)?');
if (askUser.toLowerCase() == 'dell') {
    let arrayDell = inventoryByBrand['Dell'];
    let valueDell = (arrayDell[0].price*arrayDell[0].quantity + arrayDell[1].price*arrayDell[1].quantity + arrayDell[2].price*arrayDell[2].quantity)*1000;
    valueDell = valueDell.toLocaleString('vi-VN', {
        style: 'currency',
        currency: 'VND'
    })
    alert (
`There are ${arrayDell.length} generations of Dell in our inventory:
    ${arrayDell[0].name}
    ${arrayDell[1].name}
    ${arrayDell[2].name}
With total value: ${valueDell}`);
} else if (askUser.toLowerCase() == 'hp') {
    let arrayHP = inventoryByBrand['HP'];
    let valueHP = (arrayHP[0].price*arrayHP[0].quantity + arrayHP[1].price*arrayHP[1].quantity)*1000;
    valueHP = valueHP.toLocaleString('vi-VN', {
        style: 'currency',
        currency: 'VND'
    })
    alert (
`There are ${arrayHP.length} generations of HP in our inventory:
    ${arrayHP[0].name}
    ${arrayHP[1].name}
With total value: ${valueHP}`);
} else if (askUser.toLowerCase() == 'asus') {
    let arrayAsus = inventoryByBrand['Asus'];
    let valueAsus = (arrayAsus[0].price*arrayAsus[0].quantity)*1000;
    valueAsus = valueAsus.toLocaleString('vi-VN', {
        style: 'currency',
        currency: 'VND'
    })
    alert (
`There are ${arrayAsus.length} generations of HP in our inventory:
    ${arrayAsus[0].name}
With total value: ${valueAsus}`);
}

        

