
// 1 this is how to use db in the controller.
// 2 set a db instance in every function
// 3 we request app which brings express  [ req.app.get("db") ]. express brings its setting object where db was set in the index.js. now we are telling app to get the key ("db") which bring our connectionString from the index.js

//4. then we tell our db instance to get our sql file, in this case get_users. we then invoke the sql file get_users() and give it a .then() promise and pass a response which we then send a status 200 and the response object which is the array of data from our database.

const list  = [{

  id: 1,
  name: "Nick",
  age: "28",
  message : "Hello",

}]


exports.getUsers = (req, res) => {
  let dbInstance = req.app.get("db")

  dbInstance.get_users().then( (response) => {  // response can be called anything.
    res.status(200).send(response)
  })
};
