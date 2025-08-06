const canvas = document.getElementById("canv")
const kma = document.getElementById("kma")
const title = document.getElementById("Title")
const clicks = document.getElementById("clicks")
const cpcs = document.getElementById("cpc")
let cpc = 1
let canclick = true
clicks.value = 0

function Cgain(){
        if (canclick) {
        clicks.value = clicks.value + cpc
    clicks.innerHTML = clicks.value  
 }
 canclick = false
}
setInterval(() => {
    canclick = true
}, 200);
kma.addEventListener("pointerdown", Cgain,)

