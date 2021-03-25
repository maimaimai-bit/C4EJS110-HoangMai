//1
{
let product = {
    name: 'Xiaomi Rice Cooker',
    price: 1700,
    brand: 'Xiaomi',
    color: 'white'
};
for (let x in product) {
    // console.log(x); //return property
    console.log(`${x}: ${product[x]}`);
}
}
//2
{
let task = {
    subject: 'Implement login feature',
    createdBy: 'Hoang Ngoc Duc',
    assignTo: 'Nguyen Phuong Nam',
    dueDate: '2019-10-08 T18:00:24+0000',
    expectedHours: 0.5,
};
let {subject, dueDate, assignTo} = task; 
console.log(subject);
console.log(dueDate);
console.log(assignTo);
}
//3
{
let answer31 = 'Data type of the outermost layer is object';
console.log(answer31);
let answer32 = 'The hits property is an array';
console.log(answer32);
let answer33 = 'De truy cap job title, benefits, locations... ta dung cac lenh hits[i].jobTitle, hits[i].benefits, hits[i].locations...';
console.log(answer33);
}
//4
{
let dictionary = {
    debug: 'The process of figuring out why your program has a certain error and how to fix it',
    done: 'When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)',
    defect: 'The formal word for error',
    pm: 'The short version  of Project Manager, the person in charge of the final result of a project',
    'ui/ux' : 'UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels'
};
while (true) {
    alert ('Hi there, this is dev dictionary');
    let askUser = prompt ('Enter a keyword');
    let x = dictionary[askUser];
    if (x==null || x==undefined) {
        if (askUser==null || askUser==undefined) {
            break;
        } else {
            let newWord = prompt (`We could not find your keyword: ${askUser}, leave an explanation`);
            alert ('Done');
            dictionary[askUser] = newWord;
        }
    } else {
        alert (`${askUser}: ${dictionary[askUser]}`);
    }
}
}
//5
{
let products = [
    {
        name: 'Xiaomi portable charger 20000mah',
        brand: 'Xiaomi',
        price: '428',
        color: 'white',
        category: 'charger'
    }, 
    {
        name: 'VSmart Active 1',
        brand: 'VSmart',
        price: '5487',
        color: 'black',
        category: 'phone'
    },
    {
        name: 'IPhone X',
        brand: 'Apple',
        price: '21490',
        color: 'gray',
        category: 'phone'
    },
    {
        name: 'Samsung Galaxy A9',
        brand: 'Samsung',
        price: '8490',
        color: 'blue',
        category: 'phone'
    }
];
//5.1
for (let i=0; i<products.length; i++) {
    console.log(products[i].name);
    console.log(products[i].price);
    console.log('--------------------');
}
//5.2
for (let i=0; i<products.length; i++) {
    console.log(`#${i+1}. ${products[i].name}`);
    console.log(products[i].price);
} 
let askUser = Number (prompt ('Enter product position'));
console.clear();
for (let x in products[askUser-1]) {
    console.log(`${x}: ${products[askUser-1][x]}`)
}
//5.3
let askUser1 = prompt ('Enter product category');
for (let i=0; i<products.length; i++) {
    if (products[i].category == askUser1) {
        console.log(products[i].name);
        console.log(products[i].price);
        console.log('--------------------');
    } 
}
//5.4
products[0].providers = ['phukienzero', 'dientucc'];
products[1].providers = ['tgdd', 'ddghn', 'vhstore'];
products[2]. providers = ['tgdd'];
products[3]. providers = ['tgdd'];
for (let i=0; i<products.length; i++) {
    console.log(`#${i+1}. ${products[i].name}`);
    console.log(`price: ${products[i].price}`);
    console.log('providers: ',...products[i].providers);
}
//5.5
let askUser2 = prompt ('Enter provider');
for (let i=0; i<products.length; i++) {
    if (products[i].providers.includes(askUser2)) {
        for (let x in products[i]) {
            console.log(`${x}: ${products[i][x]}`);
        } console.log('-----------------');
    }
}
}
//6
let tasks = [
    {
        task: 'HTML',
        complete: 'false'
    },
    {
        task: 'CSS',
        complete: 'false'
    },
    {
        task: 'Basics of Javascript',
        complete: 'false'
    },
    {
        task: 'Node Package Manager (npm)',
        complete: 'false'
    },
    {
        task: 'Git',
        complete: 'false'
    }
];
//6.1
function logTask() {
    console.clear();
    console.log ('Hi there, these are your learning tasks to become a front-end developer:')
    for (let i=0; i<tasks.length; i++) {
        console.log (`${i+1}. ${tasks[i].task}`);
        console.log (`complete: ${tasks[i].complete}`);
    }
}
//6.2-6.5
while (true) {
    let askUser = prompt ('Enter your command (New, Delete, Update, Complete)');
    if (askUser.toLowerCase() == 'new') {
        let askNewTask = prompt ('Enter new task');
        let newTask = {
            task: askNewTask,
            complete: 'false'
        };
        tasks.push(newTask);
        logTask();
    } else if (askUser.toLowerCase() == 'update') {
        let posUpdate = Number (prompt ('Enter update position'));
        let taskUpdate = prompt ('Enter new title');
        tasks[posUpdate-1].task = taskUpdate;
        logTask();
    } else if (askUser.toLowerCase() == 'complete') {
        let posComplete = Number (prompt ('Enter complete position'));
        tasks[posComplete-1].complete = 'true';
        logTask();
    } else if (askUser.toLowerCase() == 'delete') {
        let posDelete = Number (prompt ('Enter delete position'));
        tasks.splice(posDelete-1,1);
        logTask();
    } else if (askUser==null || askUser==undefined) {
        break;
    } else {
        alert ('This command is not supported, try again')
    }
}
//6.6 
let tasks1 = [
    {
        task: 'HTML',
        complete: '[ ]'
    },
    {
        task: 'CSS',
        complete: '[ ]'
    }
];
for (let i=0; i<tasks1.length; i++) {
    console.log (`${i+1}. ${tasks1[i].complete} ${tasks1[i].task}`);
}
//7-8
pu();
rt(90);
fd(100);
lt(90);
fd(50);
pd();
for (let i=1; i<=4; i++) {
    fd(20);
    rt(90);
}
//9
home();
pu();
rt(90);
fd(100);
lt(90);
fd(50);
pd();
for (let i=1; i<=2; i++) {
    fd(40);
    rt(90);
    fd(20);
    rt(90);
}
//10
home();
pu();
rt(90);
fd(8);
lt(90);
fd(70);
pd();
for (let i=1; i<=2; i++) {
    fd(40);
    rt(90);
    fd(12);
    rt(90);
}
home();
pu();
rt(90);
fd(20);
lt(90);
fd(40);
pd();
for (let i=1; i<=4; i++) {
    fd(50);
    rt(90);
}
//11
pu();
rt(90);
fd(100);
lt(90);
fd(50);
pd();
arc(360,30);
//16
let oldData = {
    firedRice: {
        Price: 30,
        vnName: 'Com rang dua bo'
    },
    noddle: {
        price: 20,
        vnName: 'My tom chanh'
    },
    pho: {
        price: 35,
        vnName: 'Pho bo tai chin'
    }
};
let newData = {...oldData};
delete newData.noddle;
console.log(newData);
    