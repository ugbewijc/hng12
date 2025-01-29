<h1 style="text-align: center;">HNG12 Stage 0 Backend</h1>

## Task: Develop a Public API to Retrieve Basic Information.

### Objective:
Develop a public API that returns the following information in JSON format.
 - ***Your registered email address (used to register on the HNG12 Slack workspace).***
 - ***The current datetime as an ISO 8601 formatted timestamp.***
 - ***The GitHub URL of the project's codebase.***

[Click here to read more about the task](./task/README.md)

<!-- 2. **Requirements:**
    - **Endpoints:**
        1. ***POST*** /causes: *Create a new cause (fields: title, description, image URL).*
        2. ***GET*** /causes: *Retrieve all causes.*
        3. ***GET*** /causes/:id: *Retrieve a specific cause by ID.*
        4. ***PUT*** /causes/:id: *Update a specific cause.*
        5. ***DELETE*** /causes/:id: *Delete a cause.*
        
    - Add an additional endpoint:
        1. ***POST*** /causes/:id/contribute: *Accept contributions to a cause (fields: name, email, amount).*
    - Use **JSON** for request and response formats. -->



### Getting Started

You can download/clone this project from this repo and set it up on your development environment, by following the steps below.
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

***For Local Dev, Kinldy use any of your favourite API Testing Tool***
## ***GET*** /
   ### REQUEST
   **Request Header**
   
        Content Type : application/json
  
   ### RESPONSE 
   **Response  Header** 
    
        Content Type : application/json
        status code : 200
    
   **Response Body**
   ```json
        {
            "email": "email@example.com",
            "current_datetime": "2025-01-30T09:30:00Z",
            "github_url": "<https://github.com/username/project-repo>"
        }
   ```