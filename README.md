# NexusGuard

Welcome to the **NexusGuard**, A full-stack authentication system built using the MERN stack: MongoDB, Express, React, and Node.js. The frontend is styled with Tailwind CSS.

Check it out here: https://mern-auth-z28q.onrender.com

## Table of Contents

-   [Features](#features)
-   [Prerequisites](#prerequisites)
-   [Installation](#installation)
-   [Run the application](#run-the-application)
-   [Contributing](#contributing)

## Features

-   User registration and login
-   JWT-based authentication
-   Protected routes
-   Responsive design with Tailwind CSS
-   Form validation

## Prerequisites

Make sure you have the following installed on your machine:

-   Node.js (v14 or later)
-   MongoDB (local or cloud instance)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Faraz-Ansari/mern-auth.git
    cd mern-auth
    ```

2. Install dependencies for both client and server:

    ```bash
    npm install

    cd client
    npm install
    ```

3. Create a `.env` file in the `api` directory with the following content:
    ```
    MONGO_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    ```

4. Create a `env` file in the `client` directory and add the following:

    ```
    VITE_FIREBASE_API_KEY=your_google_firebase_api_key
    ```

## Run the application

1. Start the backend server:

    ```bash
    npm start
    ```

2. Start the frontend development server:

    ```bash
    cd client
    npm start
    ```

3. Open your browser and navigate to `http://localhost:5173`.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure your code adheres to the project's coding standards.
