const getFirstName = (fullName) => {
    return fullName.split(" ")[0]
}

const getFirstNameShort = (fullName) => fullName.split(" ")[0]

console.log(getFirstName("Teemu Tannerma"))
console.log(getFirstNameShort("Matti Näsä"))