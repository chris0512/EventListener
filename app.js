function showAlert(){
    alert("hey function");
}

function secondFunction(){
    alert("hey second function");
}

let btn = document.getElementById("myButton");

btn.addEventListener("click", showAlert);
btn.addEventListener('click', secondFunction);
btn.removeEventListener("click", showAlert);