let resetBtnEl = document.getElementById("resetBtn");
let quoteEl = document.getElementById("quoteDisplay");
let timerEl = document.getElementById("time");
let quoteInputEl = document.getElementById("quoteInput");
let submitBtnEl = document.getElementById("submitBtn");
let resultEl = document.getElementById("result");
let spinnerEl = document.getElementById("spinner");
let mainContainerEl = document.getElementById("speedTypingTest");

let counter = 1;
let uniqueId = setInterval(function() {
    timerEl.textContent = counter;
    counter = counter + 1;
}, 1000);


let url = "https://apis.ccbp.in/random-quote";
let options = {
    method: "GET"
};

fetch(url, options)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonData) {
        spinnerEl.classList.add("d-none");
        mainContainerEl.classList.remove("d-none");
        quoteEl.textContent = jsonData.content;
    });


resetBtnEl.onclick = function() {
    spinnerEl.classList.remove("d-none");
    mainContainerEl.classList.add("d-none");
    let url = "https://apis.ccbp.in/random-quote";
    let options = {
        method: "GET"
    };

    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            spinnerEl.classList.add("d-none");
            mainContainerEl.classList.remove("d-none");
            quoteEl.textContent = jsonData.content;
        });

    counter = 0;
};



submitBtnEl.onclick = function() {
    if (quoteInputEl.value === quoteEl.textContent) {
        clearInterval(uniqueId);
        resultEl.textContent = "You typed in " + (counter - 1) + " seconds";
    } else {
        resultEl.textContent = "You typed wrong sentence";
    }
}
