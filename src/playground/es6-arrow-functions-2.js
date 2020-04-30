const multiplier = {
    numbers : [1, 2, 3, 4, 5, 6, 7],
    multiplyBy : 5,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy)
    }
}

console.log(multiplier.multiply())