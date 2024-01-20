# Flights Service

## Project Setup

- clone this repository

  ```
    git clone https://github.com/ZahidMollik/Flights-Service.git

  ```

- Go inside the folder path and execute the following command:

  ```
    npm install

  ```

- In the root directory create a `.env` file and add the following variable

  ```
    PORT=<Port number of you choice>

  ```

- Go inside the `src` folder and execute the following command:

  ```
    npx sequelize init

  ```

- After executing the above command you get a `config.json` file in the `config` folder and a message already exists migrations and seeders folder ignore it and you need to modify that `config.json` file like below:
  ```
        {
      "development": {
        "username": <your mysql username>,
        "password": <your mysql password>,
        "database": <database name>,
        "host": "127.0.0.1",
        "dialect": "mysql"
      },
      "test": {
        "username": "root",
        "password": null,
        "database": "database_test",
        "host": "127.0.0.1",
        "dialect": "mysql"
      },
      "production": {
        "username": "root",
        "password": null,
        "database": "database_production",
        "host": "127.0.0.1",
        "dialect": "mysql"
      }
    }
  ```
- Go inside the `src` folder and execute the following command:

  ```
    npx sequelize db:create
  ```

- After creating the database you need to execute the following command:

  ```
    npx sequelize db:migrate
  ```

- After executing the above command you will get following table in the database:

  - Airplanes
  - Cities
  - Airports
  - Flights
  - seats

- Go inside the `src` folder and execute the following command to commit the seeds file into the database:

  ```
    npx sequelize db:seed --seed 20240109073336-add-airplanes.js
    npx sequelize db:seed --seed 20240108164804-add-seats.js

  ```

- To run the server execute:

  ```
    npn run dev

  ```

  ## API Reference

  ### Base URL

  ```
   http://localhost:<Port Number>/api/v1/
  ```

  ### Endpoints

  ### Airplanes

  `POST /airplanes`

  Description: create a new Airplane.

      POST http://localhost:<Port Number>/api/v1/airplanes

  Request Body example:
  ```javascript
  {
    modelNumber: 'Airbus A330',
    capacity: 400,
  }
  ```

  `GET /airplanes`  
  Description:Get a list of Airplanes.

      GET http://localhost:<Port Number>/api/v1/airplanes

  `GET /airplanes/{id}`  
  Description: Get a airplane details by id.

      GET http://localhost:<Port Number>/api/v1/airplanes/2

  `DELETE /airplanes/{id}`  
  Description: Delete airplane by id.

      DELETE http://localhost:<Port Number>/api/v1/airplanes/2

  `PATCH /airplanes/{id}`  
  Description: Update a airplane details by id.

      PATCH http://localhost:<Port Number>/api/v1/airplanes/2

  ### Cities

  `POST /cities`

  Description: create a new city.

      POST http://localhost:<Port Number>/api/v1/cities
  
  Request Body example:
  ```javascript
  {
    name: 'Dhaka',
  }
  ```

  `GET /cities`  
  Description:Get a list of cities.

      GET http://localhost:<Port Number>/api/v1/cities

  `GET /cities/{id}`  
  Description: Get a city details by id.

      GET http://localhost:<Port Number>/api/v1/cities/2

  `DELETE /cities/{id}`  
  Description: Delete a city by id.

      DELETE http://localhost:<Port Number>/api/v1/cities/2

  `PATCH /cities/{id}`  
  Description: Update a city by id.

      PATCH http://localhost:<Port Number>/api/v1/cities/2

  ### Airports

  `POST /airports`

  Description: create a airport.

      POST http://localhost:<Port Number>/api/v1/airports

  Request Body example:
  ```javascript
  {
    name:'Hazrat Shahjalal International Airport',
    code: 'DAC',
    address:'	Kurmitola, Dhaka-1229, Bangladesh',
    cityId:1
  }
  ```

  `GET /airports`  
  Description:Get a list of airports.

      GET http://localhost:<Port Number>/api/v1/airports

  `GET /airports/{id}`  
  Description: Get a airport details by id.

      GET http://localhost:<Port Number>/api/v1/airports/2

  `DELETE /airports/{id}`  
  Description: Delete a airport by id.

      DELETE http://localhost:<Port Number>/api/v1/airports/2

  `PATCH /airports/{id}`  
  Description: Update a airport by id.

      PATCH http://localhost:<Port Number>/api/v1/airports/2

  ### Flights

  `POST /flights`

  Description: create a new flight.

      POST http://localhost:<Port Number>/api/v1/flights
  
  Request Body example:

  ```javascript
  {
        flightNumber: "BG 704",
        airplaneId: 1,
        departureAirportId: "DAC",
        arrivalAirportId: "CGP",
        departureTime: 2024-01-13 01:15:00,
        arrivalTime: 2024-01-13 02:15:00,
        price: 3200,
        totalSeats: 300,
  }
  ```

  `GET /flights/?trips={departureAirportCode}-{arrivalAirportCode}&price={minPrice}-{maxPrice}&travellers={numberOfTravellers}&tripDate={departureTime}&sort={order}`  
  Description:Get a list of flights according to query.

      GET http://localhost:<Port Number>/api/v1/flights/?trips=DAC-ZYL&price=3000-500&travellers=2&tripDate=2023-11-11&sort=ASC

  `GET /flights/{id}`  
  Description: Get a flight details by id.

      GET http://localhost:<Port Number>/api/v1/flights/2

  `PATCH /flights/{id}/seats`  
  Description: update flight remaining seats.

      GET http://localhost:<Port Number>/api/v1/flights/2/seats
