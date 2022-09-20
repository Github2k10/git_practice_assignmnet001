let number = 13;

answer=primeCheck(number)
if(answer===true){
console.log(number,"is a prime num"}
else{console.log(number,"is not a prime num"}

function primeCheck(number){
if(number <= 1 || underfined)
 return false;

for(let i = 2; i <= number**0.5; i++){
if(number % i == 0){return false;}
}
return true;
}
