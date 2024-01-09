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
-  In the root directory create a `.env` file and add the following variable
  
    ```
      PORT=<Port number of you choice>
    
    ```
- Go inside the `src` folder and execute the following command:
  
  ```
    npx sequelize init
  
  ```
- After executing the above command you get a `config.json` file in the `config` folder and a message already exists  migrations and seeders folder ignore it and you need to modify that `config.json` file like below:
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
