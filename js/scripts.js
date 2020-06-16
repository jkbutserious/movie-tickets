// Business Logic for Tickets
function Tickets(movieName, showTime, age, price) {
  this.movieName = movieName,
  this.showTime = showTime,
  this.age = age,
  this.price = price
}

Tickets.prototype.ticketPrice = function(inputtedShowTime, inputtedAge) {
  let finalPrice = 15;
  if (inputtedShowTime < 1600 || inputtedAge > 65) {
    finalPrice -= 5;
  }
  else if (inputtedShowTime === 1600 && inputtedAge === 65) {
    finalPrice -= 10;
  }
  return finalPrice;
  this.price.push(finalPrice);
}

// User Interface Logic
$(document).ready(function() {
  $("form#movieTicket").submit(function(event) {
    event.preventDefault();
    const userMovieName = $("input:radio[name=movie-name]:checked").val();
    const userShowTime = parseInt($("input:radio[name=showtime]:checked").val());
    const userAge = parseInt($("input:radio[name=age]:checked").val());
    let newTicket = new Tickets(userMovieName, userShowTime, userAge);

    newTicket.price = newTicket.ticketPrice(userShowTime, userAge);
    console.log(newTicket);
  });
})