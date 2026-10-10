// poziomy trudności (np. zakres 1–10, 1–100, 1–1000).
const MAX_ATTEMPTS = 10;

const isInRange = (n, min = 1, max = 100) =>
  n >= min && n <= max;

function getRandomNumber(max){
  return Math.floor(Math.random() * max) + 1;
}

function playGame(){
    let max = prompt("Podaj poziom trudności (10, 100, 1000)");
    switch(max){
      case "10":
        max = 10;
        break;
      case "100":
        max = 100;
        break;
      case "1000":
        max = 1000;
        break;
      default:
        return false;
  }
  
  const randomNumber = getRandomNumber(max);
  let count = 0;
  while(true){
    if(count === MAX_ATTEMPTS){
      alert("Przekroczona liczba prób. Poprawna liczba to " + randomNumber);
      return true;
    }
    const guess = prompt("Zgadnij liczbe 1-" + max);
    const thisNumber = Number(guess);
    if(guess === null){
      alert("szkoda liczba to: " + randomNumber);
      return false;
    }else if(!isInRange(thisNumber, 1, max)){
      alert("Podaj liczbe 1-" + max);
    }else if(thisNumber < randomNumber){
      count++;
      alert("za malo");
    }else if(thisNumber > randomNumber){
      count++;
      alert("za duzo");
    }else{
      count++;
      alert("trafiles w " + count + " probach");
      return true;
    }
  }
}

let runGame = true;
do{
  runGame = playGame();
  if(!runGame) break;
  runGame = confirm("Zagrac jeszcze raz?");
}while(runGame);

