const fullName = require(`./names`)
const hobbies = require(`./hobbies`)


function people() {
    const fullNames = fullName("john", "dhoe")
    const hobbie = hobbies("archery")

    return {
        fullNames,
        hobbie
    }
}

const john = people()

console.log(john)