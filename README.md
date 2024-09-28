# Node.js CRUD App Backend

This is a simple CRUD backend application built using **Node.js**, **Express**, and **MongoDB**. It provides RESTful API endpoints for performing basic CRUD operations on data stored in a MongoDB database.

## Features

- **Create**: Add new records to the database.
- **Read**: Retrieve records from the database.
- **Update**: Modify existing records.
- **Delete**: Remove records from the database.

## Technologies

- **Node.js**: JavaScript runtime environment.
- **Express**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing application data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB.

## Setup

### Prerequisites

Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/kasasa22/CRUD_APP_Backend.git
   ```

2. Navigate to the project directory:

   ```bash
   cd CRUD_APP_Backend
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root of your project and define the following environment variables:

   ```
   PORT=5000
   MONGO_URI=<Your MongoDB connection string>
   ```

5. Start the server:

   ```bash
   npm start
   ```

   The backend will run on `http://localhost:5000`.

