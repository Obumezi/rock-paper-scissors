//initilize and store the 3 elemments in an array
const rand = ["Rock", "paper", "scissors"]


//create a function that calls that array and randomly selects a string from it
function computerPlay() {

    // store the random variable use the math function to create a random number on the array and returns a random string
    const play = rand[Math.floor(Math.random() * rand.length)]

    //check for calls
    console.log(play)



}
//call function

computerPlay()
