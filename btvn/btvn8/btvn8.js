function counter() {
    let up = document.getElementById("up");
    let down = document.getElementById("down");
    let num = document.getElementById("num");
    let numVal = Number (num.innerHTML);
    up.addEventListener ("click", () => {
        numVal++;
        num.innerHTML = numVal;
    })
    down.addEventListener ("click", () => {
        numVal--;
        num.innerHTML = numVal;
    })
}
counter();
//
function timer() {
    let time = document.getElementById("time");
    let start = document.getElementById("start");
    let stop = document.getElementById("stop");
    let display = document.getElementById("display");
    start.addEventListener ("click", () => {
        display.innerText = time.value;
        let timer0 = setInterval(() => {
            display.innerText--;
        }, 1000);
        setTimeout(() => {
            clearInterval(timer0);
            display.innerText = "Time's up";
        }, ((time.value)*1000+1000));
        stop.addEventListener ("click", () => {
            clearInterval(timer0);
            display.innerText = "Timer stopped";
        })
    })
}
timer();
//
function quoteRandomizer() {
    let quoteData = [
        {
        "quoteText": "Genius is one percent inspiration and ninety-nine percent perspiration.",
        "quoteAuthor": "Thomas Edison"
        },
        {
        "quoteText": "You can observe a lot just by watching.",
        "quoteAuthor": "Yogi Berra"
        },
        {
        "quoteText": "A house divided against itself cannot stand.",
        "quoteAuthor": "Abraham Lincoln"
        },
        {
        "quoteText": "Difficulties increase the nearer we get to the goal.",
        "quoteAuthor": "Johann Wolfgang von Goethe"
        },
        {
        "quoteText": "Fate is in your hands and no one elses",
        "quoteAuthor": "Byron Pulsifer"
        },
        {
        "quoteText": "Be the chief but never the lord.",
        "quoteAuthor": "Lao Tzu"
        },
        {
        "quoteText": "Nothing happens unless first we dream.",
        "quoteAuthor": "Carl Sandburg"
        },
        {
        "quoteText": "Well begun is half done.",
        "quoteAuthor": "Aristotle"
        },
        {
        "quoteText": "Life is a learning experience, only if you learn.",
        "quoteAuthor": "Yogi Berra"
        },
        {
        "quoteText": "Self-complacency is fatal to progress.",
        "quoteAuthor": "Margaret Sangster"
        },
        {
        "quoteText": "Peace comes from within. Do not seek it without.",
        "quoteAuthor": "Buddha"
        },
        {
        "quoteText": "What you give is what you get.",
        "quoteAuthor": "Byron Pulsifer"
        },
        {
        "quoteText": "We can only learn to love by loving.",
        "quoteAuthor": "Iris Murdoch"
        },
        {
        "quoteText": "Life is change. Growth is optional. Choose wisely.",
        "quoteAuthor": "Karen Clark"
        },
        {
        "quoteText": "You'll see it when you believe it.",
        "quoteAuthor": "Wayne Dyer"
        },
        {
        "quoteText": "Today is the tomorrow we worried about yesterday.",
        "quoteAuthor": ""
        },
        {
        "quoteText": "It's easier to see the mistakes on someone else's paper.",
        "quoteAuthor": ""
        },
        {
        "quoteText": "Every man dies. Not every man really lives.",
        "quoteAuthor": ""
        },
        {
        "quoteText": "To lead people walk behind them.",
        "quoteAuthor": "Lao Tzu"
        },
        {
        "quoteText": "Having nothing, nothing can he lose.",
        "quoteAuthor": "William Shakespeare"
        },
        {
        "quoteText": "Trouble is only opportunity in work clothes.",
        "quoteAuthor": "Henry J. Kaiser"
        },
        {
        "quoteText": "A rolling stone gathers no moss.",
        "quoteAuthor": "Publilius Syrus"
        },
        {
        "quoteText": "Ideas are the beginning points of all fortunes.",
        "quoteAuthor": "Napoleon Hill"
        },
        {
        "quoteText": "Everything in life is luck.",
        "quoteAuthor": "Donald Trump"
        },
        {
        "quoteText": "Doing nothing is better than being busy doing nothing.",
        "quoteAuthor": "Lao Tzu"
        },
        {
        "quoteText": "Trust yourself. You know more than you think you do.",
        "quoteAuthor": "Benjamin Spock"
        },
        {
        "quoteText": "Study the past, if you would divine the future.",
        "quoteAuthor": "Confucius"
        },
        {
        "quoteText": "The day is already blessed, find peace within it.",
        "quoteAuthor": ""
        },
        {
        "quoteText": "From error to error one discovers the entire truth.",
        "quoteAuthor": "Sigmund Freud"
        },
        {
        "quoteText": "Well done is better than well said.",
        "quoteAuthor": "Benjamin Franklin"
        },
        {
        "quoteText": "Bite off more than you can chew, then chew it.",
        "quoteAuthor": "Ella Williams"
        },
        {
        "quoteText": "Work out your own salvation. Do not depend on others.",
        "quoteAuthor": "Buddha"
        },
        {
        "quoteText": "One today is worth two tomorrows.",
        "quoteAuthor": "Benjamin Franklin"
        },
        {
        "quoteText": "Once you choose hope, anythings possible.",
        "quoteAuthor": "Christopher Reeve"
        },
        {
        "quoteText": "God always takes the simplest way.",
        "quoteAuthor": "Albert Einstein"
        },
        {
        "quoteText": "One fails forward toward success.",
        "quoteAuthor": "Charles Kettering"
        },
        {
        "quoteText": "From small beginnings come great things.",
        "quoteAuthor": ""
        },
        {
        "quoteText": "Learning is a treasure that will follow its owner everywhere",
        "quoteAuthor": "Chinese proverb"
        },
        {
        "quoteText": "Be as you wish to seem.",
        "quoteAuthor": "Socrates"
        },
        {
        "quoteText": "The world is always in movement.",
        "quoteAuthor": "V. Naipaul"
        },
        {
        "quoteText": "Never mistake activity for achievement.",
        "quoteAuthor": "John Wooden"
        },
        {
        "quoteText": "What worries you masters you.",
        "quoteAuthor": "Haddon Robinson"
        },
        {
        "quoteText": "One faces the future with ones past.",
        "quoteAuthor": "Pearl Buck"
        },
        {
        "quoteText": "Goals are the fuel in the furnace of achievement.",
        "quoteAuthor": "Brian Tracy"
        },
        {
        "quoteText": "Who sows virtue reaps honour.",
        "quoteAuthor": "Leonardo da Vinci"
        },
        {
        "quoteText": "Be kind whenever possible. It is always possible.",
        "quoteAuthor": "Dalai Lama"
        },
        {
        "quoteText": "Talk doesn't cook rice.",
        "quoteAuthor": "Chinese proverb"
        },
        {
        "quoteText": "He is able who thinks he is able.",
        "quoteAuthor": "Buddha"
        },
        {
        "quoteText": "Be as you wish to seem.",
        "quoteAuthor": "Socrates"
        },
        {
        "quoteText": "A goal without a plan is just a wish.",
        "quoteAuthor": "Larry Elder"
        },
        {
        "quoteText": "To succeed, we must first believe that we can.",
        "quoteAuthor": "Michael Korda"
        },
        {
        "quoteText": "Learn from yesterday, live for today, hope for tomorrow.",
        "quoteAuthor": "Albert Einstein"
        },
        {
        "quoteText": "A weed is no more than a flower in disguise.",
        "quoteAuthor": "James Lowell"
        },
        {
        "quoteText": "Do, or do not. There is no try.",
        "quoteAuthor": "Yoda"
        },
        {
        "quoteText": "All serious daring starts from within.",
        "quoteAuthor": "Harriet Beecher Stowe"
        },
        {
        "quoteText": "The best teacher is experience learned from failures.",
        "quoteAuthor": "Byron Pulsifer"
        },
        {
        "quoteText": "Think how hard physics would be if particles could think.",
        "quoteAuthor": "Murray Gell-Mann"
        },
        {
        "quoteText": "Love is the flower you've got to let grow.",
        "quoteAuthor": "John Lennon"
        },
        {
        "quoteText": "Don't wait. The time will never be just right.",
        "quoteAuthor": "Napoleon Hill"
        },
        {
        "quoteText": "One fails forward toward success.",
        "quoteAuthor": "Charles Kettering"
        },
        {
        "quoteText": "Time is the wisest counsellor of all.",
        "quoteAuthor": "Pericles"
        },
        {
        "quoteText": "You give before you get.",
        "quoteAuthor": "Napoleon Hill"
        },
        {
        "quoteText": "Wisdom begins in wonder.",
        "quoteAuthor": "Socrates"
        },
        {
        "quoteText": "Without courage, wisdom bears no fruit.",
        "quoteAuthor": "Baltasar Gracian"
        },
        {
        "quoteText": "Change in all things is sweet.",
        "quoteAuthor": "Aristotle"
        },
        {
        "quoteText": "What you fear is that which requires action to overcome.",
        "quoteAuthor": "Byron Pulsifer"
        }
        ]
    let text = document.getElementById("text");
    let author = document.getElementById("author");
    let reload = document.getElementById("reload");
    text.innerText = quoteData[0]["quoteText"];
    author.innerText = quoteData[0]["quoteAuthor"];
    reload.addEventListener ("click", () => {
        let ranIndex = Math.floor(Math.random() * quoteData.length);
        let ranQuote = quoteData[ranIndex];
        text.innerText = ranQuote["quoteText"];
        author.innerText = ranQuote["quoteAuthor"];
    })
}
quoteRandomizer();
//
//1-4
function timesheet() {
    let timeSheetData = [
        {
            project: "Learn front-end",
            task: "Learn HTML",
            timeSpent: 6
        },
        {
            project: "Learn front-end",
            task: "Learn CSS",
            timeSpent: 8
        },
        {
            project: "Learn front-end",
            task: "Learn JS Variables and Data types",
            timeSpent: 6
        },
        {
            project: "Learn Git",
            task: "Learn git basics",
            timeSpent: 2
        }
    ];
    let tableBody = document.getElementById("tbody");
    console.log(tableBody);
    for (let i=0; i<timeSheetData.length; i++) {
        tableBody.insertAdjacentHTML ("beforeend", 
            `<tr>
                <td>${timeSheetData[i].project}</td>
                <td>${timeSheetData[i].task}</td>
                <td>${timeSheetData[i].timeSpent}</td>
            </tr>`)
    }
    let placeholder = document.getElementsByTagName("tr");
    placeholder[1].remove();
//5-6
    let newProject = document.getElementById("project");
    let newTask = document.getElementById("task");
    let newTime = document.getElementById("timeSpent");
    let add = document.getElementById("add");
    add.addEventListener ("click", () => {
        let newData = {
            project: newProject.value,
            task: newTask.value,
            timeSpent: newTime.value
        }
        timeSheetData.push(newData);
        console.log(timeSheetData);
        tableBody.insertAdjacentHTML ("beforeend", 
            `<tr>
                <td>${timeSheetData[timeSheetData.length-1].project}</td>
                <td>${timeSheetData[timeSheetData.length-1].task}</td>
                <td>${timeSheetData[timeSheetData.length-1].timeSpent}</td>
            </tr>`)
    })
//7-8
    let theadRow = document.querySelectorAll("#thead > tr");
    theadRow[theadRow.length-1].insertAdjacentHTML("beforeend", 
    `<th>Actions</th>`);
    let buttonListR = [];
    let tbodyRow = document.querySelectorAll("#tbody > tr");
    for (let i=0; i<tbodyRow.length; i++) {
        tbodyRow[i].insertAdjacentHTML ("beforeend",
            `<td>
            <button id="remove${i}">x</button>
            </td>`)
        let buttonR = document.getElementById(`remove${i}`);
        buttonListR.push(buttonR);
    }
    for (let i=0; i<buttonListR.length; i++) {
        buttonListR[i].addEventListener ('click', () => {
            tbodyRow[i].remove() })
    }
//9-10
    add.insertAdjacentHTML("afterend",
        ` <button id="clear">Clear</button>`)
    let buttonCell = document.querySelectorAll("td > button");
    let buttonListU = [];
    for (let i=0; i<buttonCell.length; i++) {
        buttonCell[i].insertAdjacentHTML ("afterend",
            `<button id="update${i}" class="right">U</button>`)
        let buttonU = document.getElementById(`update${i}`);
        buttonListU.push(buttonU);
    }
    let clear = document.getElementById("clear");
    clear.addEventListener ('click', () => {
        newProject.value = "";
        newTask.value = "";
        newTime.value = "";
    })
    for (let i=0; i<buttonListU.length; i++) {;
        buttonListU[i].addEventListener ('click', () => {
            newProject.value = timeSheetData[i].project;
            newTask.value = timeSheetData[i].task;
            newTime.value = timeSheetData[i].timeSpent;
            add.outerHTML = `<button id="update">Update</button>`;
            clear.addEventListener ('click', () => {update.outerHTML = `<button id="add">Add</button>`});
            let update = document.getElementById("update");
            update.addEventListener ('click', () => {
                let upProject = newProject.value;
                let upTask = newTask.value;
                let upTime = newTime.value;
                tbodyRow[i].innerHTML =
                    `<td>${upProject}</td>
                    <td>${upTask}</td>
                    <td>${upTime}</td>
                    <td>
                        <button id="remove${i}">x</button> <button id="update${i}" class="right">U</button>
                    </td>
                </tr>`
                console.log(tbodyRow[i]);
            })
        })
    }
}
timesheet();


