/
- src /
   index.js // server
   models
   controllers/
   middlewares/
   services/
   utils/
   config/
   repository

- tests/[later]
- static/
- temp/


## DB DESighn
   - Airplane Table
   - Flight
   - Airport
   - City



Flights Table
 - id- uniquely identify flights

 A flight belongs to an airplane but one airplane can be used in multiple flights.

 - A city has many airports but one airport velings to a city

 - One airport can have many flights, but a flight belongs to one airport.