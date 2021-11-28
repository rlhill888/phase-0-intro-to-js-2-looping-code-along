// Code your solutions in this file

names = ["ally","d", "james"];
function writeCards( names, event ) {
    let thankYouCards = [];
    for ( let i = 0; i < names.length; i++ ) {
      thankYouCards.push( `Thank you, ${names[i]}, for the wonderful ${event} gift!` )
    }
    console.log(thankYouCards);
    return thankYouCards
    
  }
  writeCards(names, "birthday");
 
function countDown(number){
    while( number != -1){
        console.log(number);
        number = number -1;
    }
    return number

}
countDown(10);

