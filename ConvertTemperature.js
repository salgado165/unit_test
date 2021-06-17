class Calculator{   
    sum(value){
        if(typeof value === 'string'){
            let sum =0;
            let customDelim = value.substr(2,1);
            let delimiter = new RegExp(`${customDelim}|\n|,`)
console.log(delimiter)
            value = value.split(delimiter);
            
            value.forEach(val => {   
                if(typeof val === number){
                    sum += parseInt(val);
                }            
                
            });            
            return sum;
        }
        return 0;
    }
}



module.exports = Calculator

