// Define a function to create custom error objects
export const errorHandler = (statusCode, message) => {
    // Create a new Error object
    const error = new Error();
    // Assign the provided status code to the error
    error.statusCode = statusCode;
    // Assign the provided message to the error
    error.message = message;
    // Return the custom error object
    return error;
};
