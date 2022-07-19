var carr = []
var cars = document.getElementById("cars");
var carros = document.getElementById("carros");
if (carr.length==0){
    cars.innerHTML = "No hay carros en la lista, agrega uno tuki;c";
}

function agregar(){
    carr.push(carros.value);
    cars.innerHTML = carr;
}

function eliminar(){
    carr.pop()
    cars.innerHTML = carr;
}