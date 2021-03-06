

const express = require('express');
const router = express.Router();

// declare axios for making http requests
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';

var empSchema = require('../models/emp.js');
// var dbo = db.db("myDb");

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

// Get all posts
router.get('/posts', (req, res) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  axios.get(`${API}/posts`)
    .then(posts => {
      res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
});





// Get json data
router.get('/department', (req, res) => {
  let arr = [
    {
      id: 1,
      owner: "Amit",
      name: "Finance"
    },
    {
      id: 2,
      owner: "Rohit",
      name: "Engineer"
    }
    ,
    {
      id: 3,
      owner: "Mohit",
      name: "Manager"
    }
  ];
  res.send(arr);
});

/* ADD EMPLOYEE */
router.post("/addEmployee", (req, res) => {
  // db.emp.insert()
  //   .then(item => {
  //     res.send("item saved to database");
  //   })
  //   .catch(err => {
  //     res.status(400).send("unable to save to database");
  //   });

    var e = new empSchema();
    e.name = req.body.name;
    e.email = req.body.email;
    e.save(function (err) {
        if (err) {
            res.send(err);
        }
        res.send({ message: 'Employee Added !' })
    })

});


/* GET ALL EMPLOYEES */
router.get('/getAllEmployees', function(req, res, next) {

 
  empSchema.find(function (err, empData) {
    if (err) {
        res.send(err);
    }
    res.send(empData);
});

  // db.collection("emp").findOne({}, function(err, result) {
  //   if (err) throw err;
  //   console.log(result.name);
  //   //db.close();
  // });

  // empSchema.find(function (err, empData) {
  //   console.log('the empdataa send is',empData);
  //   if (err) return next(err);
  //   res.json(empData);
  // });
});



module.exports = router;