# MERN Authentication App

Welcome to the MERN Authentication App! This project showcases a full-stack authentication system built using the MERN stack: MongoDB, Express, React, and Node.js. The frontend is styled with Tailwind CSS.

## Table of Contents

-   [Features](#features)
-   [Prerequisites](#prerequisites)
-   [Installation](#installation)
-   [Usage](#usage)
-   [Folder Structure](#folder-structure)
-   [Contributing](#contributing)

## Features

-   User registration and login
-   JWT-based authentication
-   Protected routes
-   Responsive design with Tailwind CSS
-   Form validation

## Prerequisites

Make sure you have the following installed on your machine:

-   [Node.js](https://nodejs.org/)
-   [MongoDB](https://www.mongodb.com/)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Faraz-Ansari/mern-auth.git
    cd mern-auth
    ```

2. Install dependencies for both client and server:

    ```bash
    cd api
    npm install
    cd ../client
    npm install
    ```

3. Create a `.env` file in the `api` directory with the following content:
    ```
    MONGO_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    ```

## Usage

1. Start the backend server:

    ```bash
    cd api
    npm start
    ```

2. Start the frontend development server:

    ```bash
    cd client
    npm start
    ```

3. Open your browser and navigate to `http://localhost:3000`.

## Folder Structure

mern-auth/
├── api/ # Express server
│ ├── config/ # Database configuration
│ ├── controllers # Route controllers
│ ├── models/ # Mongoose models
│ ├── routes/ # Express routes
│ ├── middleware/ # Custom middleware
│ └── index.js # Entry point
└── client/ # React application
├── src/
│ ├── components/ # Reusable components
│ ├── pages/ # Page components
│ ├── context/ # Context API for state management
│ ├── utils/ # Utility functions
│ └── App.js # Main App component
└── tailwind.config.js

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure your code adheres to the project's coding standards.
