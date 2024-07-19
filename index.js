// №1
const displayMessage = (message) => {
    alert(message)
}
displayMessage('Hello World!');

// №2
const checkNumber = () => {
    const randomNumber = Math.round(Math.random() * (100 - 1) + 1);
    const askedNumber =  prompt('Вгадайте число від 1 до 100:');
    const updatedNumber = Number(askedNumber);
    if (updatedNumber === randomNumber) {
        alert('Ви вгадали!')
    } else {
        alert(`Ви не вгадали! Число яке було загадане - ${randomNumber}`)
    }
}
checkNumber();

// №3 (зробила завдання: скільки користувач клікнув ОК)
const clickOnPage = () => {
    let clickConfirm = confirm('');
    let result = 0;
    while (clickConfirm === true) {
        result += 1
        clickConfirm = confirm('');
    }
    return alert(`Стільки разів ви нажали ОК - ${result}`)
}
clickOnPage();

// №4
const applyCallbackToEachElement = (arr, callback) => {
    let newArr = [];
    for (let num of arr) {
        newArr.push(callback(num))
    }
    return newArr
}
const squareCallback = (symbol) => symbol * symbol

const arr = [1, 2, 3, 4, 5];
const result = applyCallbackToEachElement(arr, squareCallback);
console.log(result); // [1, 4, 9, 16, 25]

// №5
const calculateDiscountedPrice = (price, discount, callback) => {
    let result = price - (price / discount);
    return alert(callback(result))
};
const showDiscountedPrice = (discountedPrice) => `Discounted price: ${discountedPrice}`

calculateDiscountedPrice(100, 10, showDiscountedPrice); // Discounted price: 90