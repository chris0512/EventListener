function showAlert(){
    alert("hey function");
}

function secondFunction(event){
    alert("hey second function");
    alert(`Coordinate: ${event.clientX} - ${event.clientY}`);
}

let btn = document.getElementById("myButton");

btn.addEventListener("click", showAlert);
btn.addEventListener('click', secondFunction);
btn.removeEventListener("click", showAlert);