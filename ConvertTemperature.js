class temperature{   
    constructor(valTemperature) {
        this.valTemperature = valTemperature;
    }

    celsiusToFahrenheit(){
        return ((this.valTemperature * 1.8)+ 32);
    }
    
    fahrenheitToCelsius(){
        return (this.valTemperature - 32) * (0.55);
    }
}
module.exports = temperature

