let tweetBtn = document.getElementById("tweet");
let counter = document.getElementById("counter");
let textArea = document.getElementById("text_box")

tweetBtn.addEventListener("click", pegarMsg);
textArea.addEventListener("keydown", count);
textArea.addEventListener("keydown", verifica);
textArea.addEventListener("keydown", resize);

function message() {
    let msg = document.getElementById("text_box").value;
    return msg
}

function verifica() {

    if (message().length >= 0 && message().length <= 140) {
        tweetBtn.disabled = false;
    } else {
        tweetBtn.disabled = true;
    }
}

function publishHour() {
    let hour = moment().format('LTS');
    console.log(hour)
    let newDivHour = document.createElement("div");
    document.getElementById("publish").appendChild(newDivHour);
}

function pegarMsg() {

    let newDiv = document.createElement("div");
    let newParagraph = document.createElement("p");
    let text = document.createTextNode(message());

    newDiv.appendChild(newParagraph);
    newParagraph.appendChild(text);

    document.getElementById("publish").appendChild(newDiv);
    publishHour();
    reset();
}

function count() {
    let countFinal = 140 - message().length;

    if (countFinal <= 140 & countFinal >= 0) {
        counter.classList.add("counter-color");
    } else if (countFinal < 20 & countFinal > 10) {
        counter.classList.add("counter-color-blue");
    } else if (countFinal < 10) {
        counter.classList.add("counter-color-red");
    }
    counter.innerHTML = countFinal;
}

function reset() {
    counter.innerHTML = 140;
    counter.classList.remove("counter-color-blue", "counter-color-red");
    counter.classList.add("counter");
    tweetBtn.disabled = true;
    textArea.value = "";
}

function resize() {
    textArea.style.cssText = 'height:auto; padding:0';
    textArea.style.cssText = 'height:' + textArea.scrollHeight + 'px';
}