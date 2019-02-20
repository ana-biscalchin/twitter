function disabledButton() {
    document.getElementById("tweet").disabled = true;
}

document.getElementById("text_box").addEventListener("keypress", verifica);

function verifica() {
    let msg = document.getElementById("text_box").value;
    console.log(msg)
    console.log(msg.length)

    if (msg.length >= 0) {
        document.getElementById("tweet").disabled = false;
    } else if (msg.length > 140) {
        document.getElementById("tweet").disabled = true;
    }

}

document.getElementById("tweet").addEventListener("click", pegarMsg);


function pegarMsg() {
    let msg = document.getElementById("text_box").value;
    console.log(msg)
    let newDiv = document.createElement("div");
    let newParagraph = document.createElement("p");
    let text = document.createTextNode(msg);

    newDiv.appendChild(newParagraph);
    newParagraph.appendChild(text);
    document.getElementById("publish").appendChild(newDiv);

    reset();
}



document.getElementById("text_box").addEventListener("keyup", count);


let countInitial = 140;

function count(counterIntial) {

    let msg = document.getElementById("text_box").value;
    let countFinal = 140 - msg.length;

    document.getElementById("counter").innerHTML = countFinal;

    console.log("contador", countFinal)

    if (countFinal < 20 & countFinal > 10) {
        document.getElementById("counter").classList.add("counter-color-blue");
    } else if (countFinal < 10) {

        document.getElementById("counter").classList.add("counter-color-red");
    }
}

function reset() {
    document.getElementById("counter").innerHTML = countInitial;
    document.getElementById("counter").classList.add("counter-color")
}




/*

 for (document.getElementById("text_box").length < 10) {
        document.getElementById("tweet").style.backgroundColor = "red";
    }

   document.getElementById("tweet").disableButton = true;

 function count() {
     let max = new Number();
     max = 10;
     let atual = document.getElementById("text_area").value;
     let valor = max - atual;
     document.getElementById()
 }

 white-space: pre-wrap ------------- Para mudar a cor do contador document.getElementById.style.color = "red"
  */