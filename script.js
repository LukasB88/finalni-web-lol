let time = document.getElementById("cur-time")
let btnGamesa = document.getElementById("submitGamesa")
let outputGamesa = document.getElementById("outputGamesa")
let outputPokusyGamesa = document.getElementById("outputPokusyGamesa")


function poNacteni(){
setInterval(() =>{
  let d = new Date();
  time.innerHTML = d.toLocaleTimeString();
},1000)}

let number = [Math.floor(Math.random() * 100)]
let pokusyGamesa = 0
console.log(number)

btnGamesa.addEventListener("click", function(){
  pokusyGamesa += 1

  let inputGamesa = document.getElementById("userInputGamesa").value;
  if (inputGamesa == number){
    outputGamesa.innerHTML = `Uhodl jsi to! Tvoje číslo bylo ${number}`
    document.getElementById("userInputGamesa").readOnly = true;
  } else if(inputGamesa < number){
    outputGamesa.innerHTML = "Zkus větší číslo"
    outputPokusyGamesa.innerHTML = "Počet pokusů:"
    outputPokusyGamesa.innerHTML += pokusyGamesa
  }else if (inputGamesa > number){
    outputGamesa.innerHTML = "Zkus menší číslo"
    outputPokusyGamesa.innerHTML = "Počet pokusů:"
    outputPokusyGamesa.innerHTML += pokusyGamesa
  }
})



function barvaTlacitka(){
  
  let r = Math.round( Math.random() * 255)
  let g = Math.round( Math.random() * 255)
  let b = Math.round( Math.random() * 255)

  document.getElementById("barvaButt").style.color = "rgb(" + r + "," + g + "," + b + ")";
}

function barvaPozadi(){

  let r = Math.round( Math.random() * 255)
  let g = Math.round( Math.random() * 255)
  let b = Math.round( Math.random() * 255)

  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
  
}

function prekvapeni(){
  alert("RSnasty je cigan")
}

function datum(){
  const d = new Date()
  let butt = document.querySelector("#datumButt")

  if (butt.textContent === "Klikni pro zobrazení dnešního datumu") {
    butt.textContent = "Klikni pro skrytí dnešního datumu";
    document.getElementById("datumos").innerHTML = d.toLocaleDateString()
  } else {
    butt.textContent = "Klikni pro zobrazení dnešního datumu";
    document.getElementById("datumos").innerHTML = "&nbsp;"
  }
}

function vypis(){
  document.getElementById("dotaznikForm").addEventListener("submit", function(event) {
    event.preventDefault();  });
  let vystup = document.getElementById("vystup")
  let jmeno = document.getElementById("jmeno").value
  let prijmeni = document.getElementById("prijmeni").value
  let oblibenyPredmet = document.getElementById("vda")
  let pizza = document.getElementById("pizza").value

  if (oblibenyPredmet.checked){
    oblibenyPredmet = "Ano"
  } else {
    oblibenyPredmet = "Ne"
  }

  vystup.innerHTML = "Jméno: " + jmeno + "<br>Příjmení: " + prijmeni + "<br>VDA enjoyer: " + oblibenyPredmet + "<br>Oblíbená pizza: " + pizza
}