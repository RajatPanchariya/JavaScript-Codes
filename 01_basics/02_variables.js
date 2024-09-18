const accountId = 2893
let accountEmail="rajatpanchariya2004@gmail.com"
var accountPassword="123456"
accountCity="Bikaner"
let accountState = "Rajasthan"

// accountId = 2 // not allowed


accountEmail = "ashokabishnoi2017@gmail.com"
accountPassword = "654321"
accountCity = "Jaipur"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])