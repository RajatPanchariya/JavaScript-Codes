//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}
// console.log(a);


function one(){
    const username = "Rajat Panchariya"

    function two(){
        const website = "Harsidhi Haweli"
        console.log(username);
    }
    // console.log(website);

    //  two()

}
one()


if (true) {
    const username = "Rajat Panchariya"
    if (username === "Rajat Panchariya") {
        const website = " Harsidhi Haweli"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}

// addTwo(5)
const addTwo = function(num){
    return num + 2
}