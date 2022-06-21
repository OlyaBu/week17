/*let small = check.toLowerCase();
console log (small)


let replace = ("алиса","Алиса");
console.log(replace)

 
console.log(clean)
let inputArray =input.trim(input);*/

let form = document.getElementById("inputname").value;
let clean = form.trim(form);
let inputArray = clean.split(" ");
let LastName = inputArray[0];
let Name = inputArray[1];
let GivenName = inputArray[2];

function ucFirst(LastName) {
    if (!LastName) return LastName;
    return str[0].toUpperCase() + str.slice(1);
}

function check() {
    let outputLastName = LastName[0].toUpperCase() + (LastName.slice(1)).toLowerCase();
    document.getElementById("lastName").innerHTML += outputLastName.value;
}