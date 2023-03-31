
let time = document.getElementById("cur-time");
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
  alert("Smrdí ti prdel")
}

function datum(){
  const d = new Date()

  document.getElementById("datumos").innerHTML = d.toLocaleDateString()
}