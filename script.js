// Length conversion function
function convertLength() {
    var value = parseFloat(document.getElementById("lengthValue").value);
    var fromUnit = document.getElementById("lengthFromUnit").value;
    var toUnit = document.getElementById("lengthToUnit").value;

    var result = convertLengthValue(value, fromUnit, toUnit);

    document.getElementById("lengthResult").value = result;
}

// Temperature conversion function
function convertTemperature() {
    var value = parseFloat(document.getElementById("tempValue").value);
    var fromUnit = document.getElementById("tempFromUnit").value;
    var toUnit = document.getElementById("tempToUnit").value;

    var result = convertTemperatureValue(value, fromUnit, toUnit);

    document.getElementById("tempResult").value = result;
}

// Weight conversion function
function convertWeight() {
    var value = parseFloat(document.getElementById("weightValue").value);
    var fromUnit = document.getElementById("weightFromUnit").value;
    var toUnit = document.getElementById("weightToUnit").value;

    var result = convertWeightValue(value, fromUnit, toUnit);

    document.getElementById("weightResult").value = result;
}

// Length conversion function
function convertLengthValue(value, fromUnit, toUnit) {
    // Length conversion rates
    var conversionRates = {
        "mm": 0.001,
        "cm": 0.01,
        "m": 1.0,
        "km": 1000.0,
        "in": 0.0254,
        "ft": 0.3048,
        "yd": 0.9144,
        "mi": 1609.34
    };
    return value * conversionRates[fromUnit] / conversionRates[toUnit];
}

// Temperature conversion function
function convertTemperatureValue(value, fromUnit, toUnit) {
    // Temperature conversion formulas
    if (fromUnit === "C") {
        if (toUnit === "F") {
            return (value * 9 / 5) + 32;
        } else if (toUnit === "K") {
            return value + 273.15;
        }
    } else if (fromUnit === "F") {
        if (toUnit === "C") {
            return (value - 32) * 5 / 9;
        } else if (toUnit === "K") {
            return (value + 459.67) * 5 / 9;
        }
    } else if (fromUnit === "K") {
        if (toUnit === "C") {
            return value - 273.15;
        } else if (toUnit === "F") {
            return (value * 9 / 5) - 459.67;
        }
    }
    return value;
}

// Weight conversion function
function convertWeightValue(value, fromUnit, toUnit) {
    // Weight conversion rates
    var conversionRates = {
        "mg": 0.001,
        "g": 1.0,
        "kg": 1000.0,
        "oz": 28.3495,
        "lb": 453.592,
        "t": 1000000.0
    };
    return value * conversionRates[fromUnit] / conversionRates[toUnit];
}

// Event listener for length conversion
document.getElementById("lengthConvertBtn").addEventListener("click", convertLength);

// Event listener for temperature conversion
document.getElementById("tempConvertBtn").addEventListener("click", convertTemperature);

// Event listener for weight conversion
document.getElementById("weightConvertBtn").addEventListener("click", convertWeight);
