function sumEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0).reduce((sum, num) => sum + num, 0);
}

// 
console.log(sumEvenNumbers([10, 5, 16, 3, 9, 6]));