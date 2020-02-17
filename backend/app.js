const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.post("/api/signup", (req, res, next) => {
//   const driver = req.body;
//   console.log(driver);
//   res.status(201).json({
//     message: 'Driver added successfully'
//   });
// });

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/booking", (req, res, next) => {
  const drivers = [
    {
      id: "asfgqwierh3r",
      name: "Anil Pushpan",
      price: "15Rs per km",
      language: ["Kannada", "English"],
      check: null
    },
    {
      id: "84y32urbewjtj4",
      name: "Nadeem Khan",
      price: "18Rs per km",
      language: ["Hindi", "English"],
      check: null
    },
    {
      id: "k2u4gt2hvg",
      name: "Vinod Nair",
      price: "20Rs per km",
      language: ["Kannada", "Hindi"],
      check: null
    }
  ];
  res.status(200).json({
    message: "Drivers fetched successfully!",
    drivers: drivers
  });
});

module.exports = app;