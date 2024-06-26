// Define and export a function named 'test'
export const test = (req, res) => {
    // Send a JSON response with a message indicating the API is working
    res.json({
        message: "api is working"
    })
};