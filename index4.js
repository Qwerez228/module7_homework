function Devices(deviceName, name, powerConsumption, on){
    this.deviceName = deviceName,
    this.name = name,
    this.powerConsumption = powerConsumption,
    this.on = on
   
}

Devices.prototype.deviceAndName = function( ){
        console.log(`electrical applianc ${this.deviceName} company ${this.name} `)
    }

Devices.prototype.powerValue = function(){
        console.log(`${this.name} consumes around ${this.powerConsumption} w in hour`)
    }

Devices.prototype.isOn = function(){
        if (this.on === true){
            console.log(`${this.name} is on`)
        }
        else {
            console.log(`${this.name} is off`)
        }
    }

function Monitor(deviceName, name, powerConsumption, on, screen){
    this.deviceName = deviceName,
    this.name = name,
    this.powerConsumption = powerConsumption,
    this.on = on,
    this.screen = screen   
}

Monitor.prototype = new Devices()

Monitor.prototype.getScreen = function(screen){
  console.log(`diagonal ${this.screen} inches`)
}



const electricalAppliance = new Devices('hair dryer', 'dyson', 800, true);
const washingMachine = new Monitor('Monitor', 'LG',  1450,  false, 34);

electricalAppliance.deviceAndName();
electricalAppliance.powerValue();
electricalAppliance.isOn()
washingMachine.deviceAndName()
washingMachine.powerValue()
washingMachine.isOn()
washingMachine.getScreen()
