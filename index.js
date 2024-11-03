const ctof = document.getElementById("ctof");
const ftoc = document.getElementById("ftoc");
const result = document.getElementById("result");
let input= document.getElementById("input");
let temp;

document.getElementById("submit").onclick = function (){
    let restemp;
    temp = Number(input.value);
    if(ctof.checked){
        restemp = (1.8 * temp + 32);
        result.textContent = `${restemp.toFixed(2)}°F`;
    }
    else if(ftoc.checked){
        restemp = (temp - 32)/1.8;
        result.textContent = `${restemp.toFixed(2)}°C`;
    }
    else{
        result.textContent = "Select a way of conversion";
    }
}
