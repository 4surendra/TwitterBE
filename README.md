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

### Testing:



