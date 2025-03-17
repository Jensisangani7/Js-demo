const accountId = 3456345
let accountEmail = "janki@gmail.com"
var accountPassword = "123456"
accountCity = "Rajkot"
let accountState;

// accountId = 34234 // not allowed
accountEmail = "jensi@gamil.cpm"
accountPassword = "87345gd"
accountCity = "jamnagar"

/*
Prefer not to use var
because of issue in block scope and function scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

