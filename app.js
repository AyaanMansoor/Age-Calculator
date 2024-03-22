function calculateAge(){
    let birthYear = +prompt("Enter Your Birth Year")
    let currentYear = 2024
    let age = currentYear - birthYear ;

    if (age >=0){
    Swal.fire(`Your are ${age} years old`)
    }
else{
    Swal.fire(`Invalid Input!`)
}
}
