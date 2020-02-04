var newRoom; //habitación
var habitatge; //vivienda
var habitatges = []; //array de viviendas

function createTestData() {
    /// DATOS DE PRUEBA
    //VIVIENDA 0
    var dinningRoom1 = new DinningRoom(4, 5, true);
    var kitchen1 = new Kitchen(4, 4, true, false);
    var bedroom1 = new Bedroom(5, 6, 3);
    var bathroom1 = new Bathroom(2, 3, false, true);
    var home1 = new Habitatge(100, true);
    home1.addEstancia(dinningRoom1);
    home1.addEstancia(kitchen1);
    home1.addEstancia(bedroom1);
    home1.addEstancia(bathroom1);
    //VIVIENDA 1
    var dinningRoom2 = new DinningRoom(2, 5, false);
    var kitchen2 = new Kitchen(6, 4, false, false);
    var bedroom2 = new Bedroom(2, 3, 1);
    var bathroom2 = new Bathroom(3, 3, false, true);
    var home2 = new Habitatge(400, false);
    home2.addEstancia(dinningRoom2);
    home2.addEstancia(kitchen2);
    home2.addEstancia(bedroom2);
    home2.addEstancia(bathroom2);
    //VIVIENDA 2
    var dinningRoom3 = new DinningRoom(6, 5, true);
    var kitchen3 = new Kitchen(4, 5, true, true);
    var bedroom3 = new Bedroom(4, 4, 2);
    var bathroom3 = new Bathroom(5, 3, true, true);
    var home3 = new Habitatge(120, false);
    home3.addEstancia(dinningRoom3);
    home3.addEstancia(kitchen3);
    home3.addEstancia(bedroom3);
    home3.addEstancia(bathroom3);

    habitatges.push(home1, home2, home3);
    console.log(habitatges);
    let hideBtn = document.getElementById("testData");
    hideBtn.classList.add("d-none");
    ////
}


//extra functions
function trueOrFalse(value) {
    let isTrue;
    if (value.toLowerCase() == "s") {
        isTrue = true;
    } else if (value.toLowerCase() == "n") {
        isTrue = false;
    } else {
        alert("ERROR. Opción incorrecta.");
    }
    return isTrue;
}


// Crear VIVIENDA
function createHome() {

    //muestra el menú de botones
    let btnMenu = document.getElementById("btnMenu");
    btnMenu.classList.remove("d-none");

    let m2Price = parseInt(prompt("Precio del metro cuadrado en €:"));
    let hasHeating = prompt("Tiene calefacción? (s/n)");
    hasHeating = trueOrFalse(hasHeating);
    if (hasHeating == true) {
        habitatge = new Habitatge(m2Price, hasHeating);
        habitatges.push(habitatge);
        console.log(habitatges);
    }
}

// Crear COMEDOR
function createDinningRoom() {

    let width = parseInt(prompt("Ancho (m):"));
    let height = parseInt(prompt("Largo (m):"));
    let hasAirCond = prompt("Tiene Aire Acondicionado? (s/n)");
    hasAirCond = trueOrFalse(hasAirCond);
    //crea el Objeto
    newRoom = new DinningRoom(width, height, hasAirCond);
    //lo agrega al array de estancias
    habitatge.addEstancia(newRoom);
}

// Crear COCINA
function createKitchen() {

    let width = parseInt(prompt("Ancho (m):"));
    let height = parseInt(prompt("Largo (m):"));
    let hasFridge = prompt("Tiene Nevera? (s/n)");
    let hasDishWasher = prompt("Tiene Lavaplatos? (s/n)");
    hasFridge = trueOrFalse(hasFridge);
    hasDishWasher = trueOrFalse(hasDishWasher);

    newRoom = new Kitchen(width, height, hasFridge, hasDishWasher);
    habitatge.addEstancia(newRoom);
}

// Crear HABITACION
function createBedroom() {

    let width = parseInt(prompt("Ancho (m):"));
    let height = parseInt(prompt("Largo (m):"));
    let beds = parseInt(prompt("Cuántas plazas tiene para dormir?"));

    newRoom = new Bedroom(width, height, beds);
    habitatge.addEstancia(newRoom);
}

//Crear BAÑO
function createBathroom() {

    let width = parseInt(prompt("Ancho (m):"));
    let height = parseInt(prompt("Largo (m):"));
    let hasBath = prompt("Tiene Bañera? (s/n)");
    let hasShower = prompt("Tiene Ducha? (s/n)");
    hasBath = trueOrFalse(hasBath);
    hasShower = trueOrFalse(hasShower);

    newRoom = new Bathroom(width, height, hasBath, hasShower);
    habitatge.addEstancia(newRoom);
}

//MOSTRAR estancias  
function selectHome() {
    let selectHome = parseInt(prompt("Seleccione una vivienda con su número de index:"));
    let displayText = document.getElementById("text");

    if (selectHome > habitatges.length) {
        alert("Index inexistente");
    } else {
        for (var i = 0; i < habitatges.length; i++) {
            if (selectHome == i) {
                displayText.innerHTML = `<b><h3>Vivienda ${i}:</h3></b>${habitatges[i].displayInfoRooms(displayText)}`;
            }
        }
    }
}


//ELIMINAR Estancia
function deleteRoomFromHome() {
    let selectHome = parseInt(prompt("Seleccione una vivienda con su número de index:"));
    let displayText = document.getElementById("text");


    if (selectHome > habitatges.length) {
        alert("Index inexistente");
    } else {
        for (var i = 0; i < habitatges.length; i++) {
            if (selectHome == i) {
                // MOSTRAR TODAS LAS ESTANCIAS con un indice y que el usuario use ese dato para yo poder seleccionar qué eliminar
                let result = habitatges[i].deleteRoom();
                displayText.innerHTML = `Vivienda ${i}: Se ha eliminado la estancia ${result}.`
            }
        }
    }
}

/*
function calculateHomeAreaAndValue() {
    let selectHome = parseInt(prompt("Seleccione una vivienda con su número de index:"));
    let displayText = document.getElementById("text");

    if (selectHome > habitatges.length) {
        alert("Index inexistente");
    } else {
        for (var i=0; i<habitatges.length; i++) { 
            if(selectHome == i) { 
               let value = parseInt(habitatges[i].calculateTotalValue());
               let area = parseInt(habitatges[i].calculateTotalArea());
               displayText.innerHTML = `La vivienda ${i} tiene una superficie de ${area} y un valor total de ${value}.`;
            }
        }
    }
}*/