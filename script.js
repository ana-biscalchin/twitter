 document.getElementById("tweet").addEventListener("click", pegarMsg);

 function pegarMsg() {
     let msg = document.getElementById("text_box").value;
     console.log(msg)
     let newDiv = document.createElement("div")
     let newParagraph = document.createElement("p")
     let text = document.createTextNode(msg)
     console.log(text)
     newDiv.appendChild(newParagraph);
     newParagraph.appendChild(text);
     document.getElementById("publish").appendChild(newDiv);
 }

 function disableButton() {
     document.getElementById("tweet").disableButton = true;
 }

 function verifica() {
     if (document.getElementById("text_box").maxLength < 1) {
         document.getElementById("tweet").disableButton = true;
     }
 }


 function count() {
     let max = new Number();
     max = 10;
     let atual = document.getElementById("text_area").value;
     let valor = max - atual;
     document.getElementById()
 }

 //white-space: pre-wrap ------------- Para mudar a cor do contador document.getElementById.style.color = "red"//