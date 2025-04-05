const accountId = 123
let accountEmail = "sova@valorant.com"
var accountPassword = "1234"
accountRole = "Initiator"

let accountAbilities

console.table([accountId, accountEmail, accountPassword, accountRole, accountAbilities])

// const = can't be re-assigned a value and can't be declared again  (block scope)
// let = can be re-assigned a value but can't be declared again (block scope)
// var = it can be re-assigned a value and it can also be declared again  (Global scope)

// Prefer not to use var because of issue in block scope and functional scope