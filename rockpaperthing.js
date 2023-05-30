
var seed = (Math.floor(Math.random() * 1000) % 3)
var user = prompt('rock, paper, or scissors?')
console.log(seed)
if (seed === 0){
    console.log('rock')
}
if (seed === 1){
    console.log('paper')
}
if (seed === 2){
    console.log('scissors')
}