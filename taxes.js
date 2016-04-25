

var taxFunction = function(amount) {
    if (amount > 125000) {
        return (amount - 125000) * .099 + 11015;
    }
    else if (amount > 8400) {
        return (amount - 8400) * .09 + 521;
    }
    else if (amount > 3350) {
        return (amount - 3350) * .07 + 167.5;
    } else {
        return amount * .05;
    }
};



alert(taxFunction(160000))