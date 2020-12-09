class MathUtilities {


    add(baseValue, valueToAdd){
        let sum = baseValue + valueToAdd;
        return sum;
    }

    subtract(baseValue, valueToAdd){
        let difference = baseValue - valueToAdd;
        return difference;
    }

    divide(baseValue, valueToAdd){
        const quotient = baseValue / valueToAdd;
        return quotient;
    }

    multiply(baseValue, valueToAdd){
        const product = baseValue * valueToAdd;
        return product;
    }
}

module.exports = MathUtilities;