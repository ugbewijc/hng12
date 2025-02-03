<h1 style="text-align: center;">HNG12 Stage 1 Backend</h1>

## Task: Number Classification API.

### Objective:
Create an API that takes a number and returns interesting mathematical properties about it, along with a fun fact.
 <!-- - ***Your registered email address (used to register on the HNG12 Slack workspace).***
 - ***The current datetime as an ISO 8601 formatted timestamp.***
 - ***The GitHub URL of the project's codebase.*** -->

<!-- [Click here to read more about the task](./task/README.md) -->

### Getting Started

Kindly download/clone this project repo and set it up on your development environment, by following the steps below.
   #### Prerequisites
   You will need the folloing to run this program successfully
   - [NodeJs](https://nodejs.org/en/download) v22.12 or higher
   - [pnpm](https://pnpm.io/installation) or [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

   #### Installation
         
   1. Clone the repo

      ```sh
      git clone https://github.com/ugbewijc/hng12.git
      ```      
   2. Change directory project directory

      ```sh
      cd hng12
      ```
   2. Create a .env file and fill in required configuration (check [.evn.example](.evn.example) for reference)

      ```sh
      touch .env
      ```
   
   3. Install NPM packages
      ```sh
      pnpm install
      ```      
   4. Start application
      ```sh
      pnpm dev 
      ```

## API Documentation
The **GET** RESTful Verb is the only request verb that is accepted by this endpoint, all other verb will **return 404 status code** 

***Kindly use any of your favourite API Testing Tool***
## Endpoint
#### ***GET*** <your-domain.com>/api/classify-number?number=<number>
- ***Note:*** 
   #### REQUEST
   **Request Header**
   
        Content Type : application/json
  
   #### RESPONSE 
   **Response  Header** 
    
        Content Type : application/json
        status code : 200
    
   **Response Body**
   ```json
        {
         "number": <query_parameters>,
         "is_prime": <false | true>,
         "is_perfect": <false | true>,
         "properties": [<"armstrong">, <"odd" | "even">],
         "digit_sum": <sum_of_its_digits>,
         "fun_fact": <"Response from the numbers API Query"> 
        }
   ```
   #### Note
   - Query Parameters must be a valid number
   - The possible combinations for the properties field:
     - ["armstrong", "odd"] - if the number is both an Armstrong number and odd
     - ["armstrong", “even”] - if the number is an Armstrong number and even
     - ["odd"] - if the number is not an Armstrong number but is odd
     - [”even”] - if the number is not an Armstrong number but is even
     
   #### Example (using curl)
      curl -X GET <your-domain.com>/api/classify-number?number=370  -H 'Content-Type: application/json' ; echo ""

## Resources
- [Fun fact API:](http://numbersapi.com/#42)
- [Parity_(mathematics)](https://en.wikipedia.org/wiki/Parity_(mathematics))