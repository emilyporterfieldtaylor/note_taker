const express = require("express");
const path = require("path");

// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 8002;

// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public"));

require("./routes/apiRoutes")(app);
require("./routes/htmlroutes")(app);

// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));