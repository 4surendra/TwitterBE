### Assignment Overview

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

