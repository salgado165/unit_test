class temperature{   
    constructor(valTemperature) {
        this.valTemperature = valTemperature;
    }

    celsiusToFarenheit(){
        return ((this.valTemperature * 1.8)+ 32);
    }
    
    farenheitToCelsius(){
        return (this.valTemperature - 32) * (0.55);
    }
}
module.exports = temperature

