
class Estancia {

    constructor (width, height) {
        this._width = width;
        this._height = height;   
    }

    //metodo abstracto 
    //calculateValue(m2Price, hasHeating);

    calculateArea() {
        let area = this.width * this.height;
        return area;
    };
}


// COMEDOR
class DinningRoom extends Estancia {
    
    constructor(width, height, hasAirCond) {
        super(width, height);
        this._hasAirCond = hasAirCond; //boolean
    }

    displayInfo() {
        let info = `<b>Comedor</b>:<br>Ancho: ${this._width}m. Largo: ${this._height}m. Aire acondicionado: ${this._hasAirCond}.`;
        return info;
     }

    calculateValue(m2Price, hasHeating) {
        let value = this.calculateArea() * m2Price * 1.5;

        if (this._hasAirCond == true) {     //si tiene Aire Ac: value + 1000€
            value = value + 1000;
        }
        if (hasHeating == true) {    //si tiene calefaccion: value * 1.05
            value = value * 1.05;
        }
        console.log(value);
        return value;
    }
}

// COCINA

class Kitchen extends Estancia {

    constructor(width, height, hasFridge, hasDishWasher) {
        super(width, height);
        this._hasFridge = hasFridge; //boolean
        this._hasDishWasher = hasDishWasher; //boolean
    }

    displayInfo() {
        let info = `<b>Cocina</b>:<br>Ancho: ${this._width}m. Largo: ${this._height}m. Tiene nevera: ${this._hasFridge}. Tiene lavaplatos: ${this._hasDishWasher}`;
        return info;
     }

    calculateValue(m2Price, hasHeating) {
        let value = this.calculateArea() * m2Price * 1.5;
        if (this._hasFridge == true) {
            value = value + 1000;
        } 
        if (this._hasDishWasher == true) {
            value = value + 600;
        }
        if (hasHeating == true) {
            value = value * 1.05;
        }
        console.log(value);
        return value;
    }
}

// HABITACIÓN

class Bedroom extends Estancia {

    constructor(width, height, beds) {
        super(width, height);
        this._beds = beds;
    }

    displayInfo() {
        let info = `<b>Habitación</b>:<br>Ancho: ${this._width}m. Largo: ${this._height}m. Plazas: ${this._beds}.`;
        return info;
     }

    calculateValue(m2Price, hasHeating) {
        let value = this.calculateArea() * m2Price * 0.9;
        if (hasHeating == true) {
            value = value * 1.05;
        }
        console.log(value);
        return value;
    }
}

// BAÑO

class Bathroom extends Estancia {
    constructor(width, height, hasBath, hasShower) {
        super(width, height);
        this._hasBath = hasBath;
        this._hasShower = hasShower;
    }

    displayInfo() {
        let info = `<b>Baño</b>:<br>Ancho: ${this._width}m. Largo: ${this._height}m. Tiene bañera: ${this._hasBath}. Tiene ducha: ${this._hasShower}.`;
        return info;
     }

    calculateValue(m2Price, hasHeating) {
        let value = this.calculateArea() * m2Price * 0.8;

        if (this._hasBath == true) {
            value = value + 5000;
        }
        if (this._hasShower == true) {
            value = value + 3000;
        }
        if (hasHeating == true) {
            value = value * 1.05;
        }
        console.log(value);
        return value;
    }
}

//HABITATGE

class Habitatge {
    constructor(m2Price, hasHeating) {
        this._m2price = m2Price;
        this._hasHeating = hasHeating; 
        this._estancias = [];
    }

    getEstancias() {
        return this._estancias;
    }

    addEstancia(estancia) {
        this._estancias.push(estancia);
    }

    calculateTotalArea(){
        let result = 0;
        for (let i=0; i<this._estancias.length; i++) {
            result = result + this._estancias[i].calculateArea();
        }
        result = result + 15;
        console.log(result);
        return result;
    }

    calculateTotalValue(){
        let totalValue = 0;
        for (let i=0; i<this._estancias[i].length; i++) {
            totalValue = totalValue + this._estancias[i].calculateValue(this._m2price, this._hasHeating);
        }
        totalValue = totalValue + 100000;
        console.log(totalValue);
        return totalValue;
    }

    displayInfoRooms(output) {
        let rooms = this.getEstancias();
        let dinningRoomInfo;
        let kitchenInfo;
        let bedroomInfo;
        let bathroomInfo;

        for (let room of rooms) {
            if (room instanceof DinningRoom) {
               dinningRoomInfo = room.displayInfo();       
            }  
            if (room instanceof Kitchen) {
                kitchenInfo = room.displayInfo();        
            }
            if (room instanceof Bedroom) {
                bedroomInfo = room.displayInfo();      
            }
            if (room instanceof Bathroom) {
                bathroomInfo = room.displayInfo();
            }
        }
        output = `${dinningRoomInfo}<br>${kitchenInfo}<br>${bedroomInfo}<br>${bathroomInfo}`;
        return output;
    }

// MOSTRAR TODAS LAS ESTANCIAS con un indice y que el usuario use ese dato para yo poder seleccionar qué eliminar
    deleteRoom() {
        let selectRoom = prompt("Seleccione la estancia que desea eliminar: 1.Comedor - 2.Cocina - 3.Habitación - 4.Baño");
        let whichRoom;
        let rooms = this.getEstancias();
        
        for (let room of rooms) {
            if ((room instanceof DinningRoom) && (selectRoom == "1")) {
                whichRoom = "Comedor";
                rooms.splice(room,1);
                return whichRoom;
            }
            else if ((room instanceof Kitchen) && (selectRoom == "2")) {
                whichRoom = "Cocina";
                rooms.splice(room,1);
                return whichRoom;
            }
            else if ((room instanceof Bedroom) && (selectRoom == "3")) {
                whichRoom = "Habitación";
                rooms.splice(room,1);
                return whichRoom;
            }
            else if ((room instanceof Bathroom) && (selectRoom == "4")) {
                whichRoom = "Baño";
                rooms.splice(room,1);
                return whichRoom;
            }
            console.log(room);
        }
        
        return whichRoom;
    }


} //HABITATGE

