function fillBus(peopleAtBusStops,busSeats) {
   var i = 0;
   var busFull = 0;
   while (busFull< busSeats) {
   busFull += peopleAtBusStops[i];
   i += 1;} 
   return i}
console.log(fillBus(['2','4','2','3','1','2'],12))
