### Assignment Overview:

#### Purpose
The goal is to create a backend system like Twitter using Node.js and MongoDB. We want to see how well you can make a system that's fast, easy to maintain, and follows good design principles.

#### Objectives
1. **Schema Design**: Make databases for users and tweets that work well.
2. **RESTful APIs**: Create simple ways for apps to talk to your system, like for registering users or posting tweets.
3. **Authentication**: Make sure only the right people can use the system.
4. **Domain-Driven Design**: Organize the system in a smart way to keep it clean and easy to change.
5. **Pagination**: Help the system handle lots of tweets by breaking them into pages.
6. **Documentation**: Explain how to use the system

#### Essential Components
- **Users Collection**: Store user info like usernames and passwords.
- **Tweets Collection**: Keep track of tweets, who posted them, and when.

##### Example Schemas

1. **Users Collection**:
   - Save users with usernames and passwords.

2. **Tweets Collection**:
   - Store tweets with user info, tweet content, and timestamps.

##### Minimal API Endpoints

1. **User Registration**:
   - Register new users.

2. **User Login**:
   - Let users log in to the system.

3. **Post a Tweet**:
   - Allow users to share their thoughts.

4. **Fetch User Timeline**:
   - Get tweets from a specific user, one page at a time.

### How to Run the Application:

- **Install Dependencies**:
  - Open your command line interface (CLI) or terminal.
  - Navigate to the project's root directory.
  - Run the command: `npm install`
  - This command installs all necessary dependencies for the application.

- **Set Up Environment Variables**:
  -- **auth.config.js**:
  - Set the JWT_SECRET environment variable to "This is my super private secret".

- **db.config.js**:
  - Define the DB_NAME environment variable as "twitter".
  - Set the DB_URL environment variable to "mongodb://0.0.0.0/twitter".

- **server.config.js**:
  - Specify the PORT environment variable as 3001.

- **Start the Server**:
  - After setting up environment variables, start the server by running: `node server.js`
  - This command launches the application, displaying a message indicating the server is running on a specific port.

- **Access the Application**:
  - Once the server is running, open a web browser.
  - Enter the URL `http://localhost:3000` (or your specified port) in the address bar.
  - This takes you to the application's homepage, where you can interact with its features.

- **Testing**:
  - Run tests for the application using: `npm test`
  - This executes any configured tests, providing feedback on their success or failure.

- **Troubleshooting**:
  - If issues arise during setup or while running the application, refer to the "Issues and Troubleshooting" section in the README for guidance on resolving common problems.

### Dependencies: 
To run the application, you'll need the following external libraries, frameworks, and tools:

1. **Node.js**: A JavaScript runtime environment required to execute JavaScript code outside of a web browser.

2. **Express.js**: A minimal and flexible Node.js web application framework used for building web applications and APIs.

3. **MongoDB**: A NoSQL database used for storing data in a document-oriented format. Ensure MongoDB is installed and running on your system.

4. **Mongoose**: An elegant MongoDB object modeling tool designed to work in an asynchronous environment. It provides a straight-forward, schema-based solution to model application data.

5. **Bcrypt.js**: A library used for hashing passwords to securely store user credentials in the database.

6. **Jsonwebtoken**: A library used for generating and verifying JSON Web Tokens (JWT) for user authentication.

7. **Postman**: A collaboration platform for API development used for testing and debugging APIs.


#### Installation Instructions:

Ensure you have Node.js and MongoDB installed on your system. You can install Node.js from the official website, and MongoDB from the MongoDB website or through a package manager. Additionally, download Postman from the official website or app store for testing the application's APIs.
To install the required dependencies for the application, including Mongoose, Express, Bcrypt.js, and Jsonwebtoken, follow these steps:

1. **Navigate to the Project Directory**: Open a terminal or command prompt and navigate to the directory where the project code is located.

2. **Install Dependencies**: Run the following command in the terminal to install each dependency separately:
   ```bash
   npm install mongoose express bcryptjs jsonwebtoken
   ```

3. **Wait for Installation**: npm will download and install the specified dependencies and their respective dependencies. This process may take a few moments.

4. **Verify Installation**: Once the installation is complete, we can verify that the dependencies are installed by checking the `node_modules` directory in the project folder. We should see folders for each installed dependency.


### Tool
We can download Postman from the official website or the app store for your operating system. Here's how:

1. **Official Website**: Go to the [Postman website](https://www.postman.com/downloads/) and download the version compatible with your operating system (Windows, macOS, or Linux).

2. **App Store**: If you're using Windows, you can also find Postman on the Microsoft Store. For macOS, it's available on the Mac App Store.

3. **Installation**: Once the download is complete, follow the installation instructions provided by the installer. 

4. **Launch Postman**: After installation, launch the Postman application.

Now we have Postman installed on your computer and can use it to test the APIs of our application.


### Configuration:
auth.config.js:
This file contains the secret key used for authentication purposes.
The secret key is set to **"This is my super private secret"**.
This secret key is essential for securing authentication processes within the application.
db.config.js:

In db.config.js, we specify the database-related configuration.
DB_NAME is set to "twitter", indicating the name of the database used in the project.
DB_URL is set to **"mongodb://0.0.0.0/twitter"**, specifying the URL for connecting to the MongoDB database.
These settings ensure that the application connects to the correct database and performs operations accordingly.
server.config.js:

This file manages the configuration related to the server.
The PORT setting is configured to **3001**, which specifies the port number on which the server will listen for incoming requests.
Setting the port ensures that the server operates on the specified port, allowing clients to communicate with the application effectively.

### Testing:
To ensure the correctness of the application, you can run tests using the command `npm test` in your command line interface or terminal. This command executes any configured tests for the application, checking various functionalities and components for expected behavior. Running tests helps identify any bugs or issues in the codebase, ensuring that the application functions as intended across different scenarios and use cases. Regular testing is essential for maintaining the reliability and quality of the application, providing confidence in its performance and stability.

## Issues & Fixes

1. **Database Connection**:
   - **Issue**: Trouble connecting to the database.
   - **Fix**: Check database details and server status.

2. **Server Problems**:
   - **Issue**: Server not starting or listening.
   - **Fix**: Check port availability and server setup.

3. **Authentication Errors**:
   - **Issue**: Problems with user authentication.
   - **Fix**: Verify secret key and token expiration.

4. **Environment Setup**:
   - **Issue**: Incorrect or missing environment variables.
   - **Fix**: Review `config` file and loading process.

5. **Testing Troubles**:
   - **Issue**: Testing failures or errors.
   - **Fix**: Update test configurations and dependencies.

6. **Logging & Errors**:
   - **Issue**: Difficulty diagnosing issues.
   - **Fix**: Improve logging and integrate error monitoring tools.
   - 

### Contact Information:
M.no.- 9079908032,
Email Id:- surendrajat9079@gmail.com,
LinkedIn:- www.linkedin.com/in/surendra-jat-17b2b8162



