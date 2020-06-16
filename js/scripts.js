// Business Logic for Tickets
function Tickets(movieName, showTime, age, price) {
  this.movieName = movieName,
  this.showTime = showTime,
  this.age = age,
  this.price = price
}

Tickets.prototype.ticketPrice = function(inputtedShowTime, inputtedAge) {
  let finalPrice = 15;
  if (inputtedShowTime <= 1600 || inputtedAge >= 65) {
    finalPrice -= 5;
  }
  else if (inputtedShowTime <= 1600 && inputtedAge >= 65) {
    finalPrice -= 10;
  }
  return finalPrice;
  this.price.push(finalPrice);
}