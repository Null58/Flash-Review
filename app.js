var flashcardGroups = [
    {
        name: "French Review",
        by: "Person Name",
        cards: [
            {
                type: "choice",
                question: "Question 1",
                options: [
                    {
                        text: "Option 1",
                        correct: false
                    },
                    {
                        text: "Option 2",
                        correct: false
                    },
                    {
                        text: "Option 3",
                        correct: false
                    },
                    {
                        text: "Option 4",
                        correct: true
                    }
                ]
            },
            {
                type: "choice",
                question: "G2",
                options: [
                    {
                        text: "Option 5",
                        correct: false
                    },
                    {
                        text: "Option 6",
                        correct: true
                    },
                    {
                        text: "Option 7",
                        correct: false
                    },
                    {
                        text: "Option 8",
                        correct: false
                    }
                ]
            }
        ]
    }
]
var list = document.getElementById("list")
var prep = ``;
if (location.search.includes("id")) {
    console.log(`You won a prize! If you want the answers you need to type`)
    console.log("for(var i=0;i<card.options.length;i++){if(card.options[i].correct){console.warn(card.options[i].text)}}")
    var a = location.search;
    a=a.substring(4,10)
    loadgroup(parseInt(a))
}
var grpID = 0;
var card = flashcardGroups[grpID].cards[0]
function displayQuestion() {
    var questions = document.querySelector("div.questions");
    questions.innerHTML = "";
    card = flashcardGroups[grpID].cards[Math.floor(Math.random() * flashcardGroups[grpID].cards.length)]
    for (var i = 0; i < card.options.length; i ++) {
        questions.innerHTML += `<button class="option" id="a${i}">${card.options[i].text}</button>`;
        document.querySelector(`button.option#a${i}`).addEventListener("click",function(e) {
            if (card.options[parseInt(e.target.id.substring(1,2))].correct) {
                e.target.style.background = "#0F0"
            }
        })
    }
    document.querySelector("div.content > h1").innerText = card.question
}
function loadgroup(groupID) {
    grpID=groupID
    document.body.innerHTML = `<div class="topBar">
        <h4>${flashcardGroups[grpID].name}</h4>
        <h5>By: ${flashcardGroups[grpID].by}</h5>
    </div>
    <div class="content">
        <h1>${flashcardGroups[grpID].cards[0].question}</h1>
        <div class="questions"></div>
    </div>
    `;
    displayQuestion()
}
for (var i = 0; i < flashcardGroups.length; i++) {
    prep += `<div class="flashcardGroup">
        <div>
            <h3>${flashcardGroups[i].name}</h3>
            <h5>By: ${flashcardGroups[i].by}</h5>
        </div>
        <button onclick="location.href=location+'?id=${i}'">Start</button>
    </div>`
}
list.innerHTML += prep;