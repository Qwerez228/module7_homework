class Devices{
 constructor(deviceName, name, powerConsumption, on){
    this.deviceName = deviceName,
    this.name = name,
    this.powerConsumption = powerConsumption,
    this.on = on
}
deviceAndName( ){
    console.log(`electrical applianc ${this.deviceName} company ${this.name} `)
}

powerValue (){
    console.log(`${this.name} consumes around ${this.powerConsumption} w in hour`)
}

isOn (){
    this.on ? console.log(`${this.name} is on`) : console.log(`${this.name} is off`);
    }
}


class Monitor extends Devices{
    constructor(deviceName, name, powerConsumption, on, screen){
    super(deviceName, name, powerConsumption, on);
    this.screen = screen 
    }  
    getScreen(screen){
        console.log(`diagonal ${this.screen} inches`)
      }
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