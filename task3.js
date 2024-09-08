

////////////////////////////////////////////////////
// ### Task-3: 
// Your task is to calculate the `total budget` required to buy electronics:

//         laptop = 35000 tk
//         tablet = 15000 tk
//         mobile = 20000 tk

// Write a JavaScript function named `calculateElectronicsBudget` that takes in the number of `laptop, tablets, and mobile` and returns the `total money required`.

// ---



function calculateElectronicsBudget(laptopQuantity, tabletQuantity, mobileQuantity) {

    const laptopPrice = 35000;
    const tabletPrice = 15000;
    const mobilePrice = 20000;

    let laptopTotalPrice = laptopPrice * laptopQuantity;
    let tabletTotalPrice = tabletPrice * tabletQuantity;
    let mobileTotalPrice = mobilePrice * mobileQuantity;

    let totalMoney = laptopTotalPrice + tabletTotalPrice + mobileTotalPrice;

    return totalMoney;

}

// write the quantity of laptop,tablet , mobile you need to buy

const totalMoney = calculateElectronicsBudget(1, 1, 2);

console.log(totalMoney);


