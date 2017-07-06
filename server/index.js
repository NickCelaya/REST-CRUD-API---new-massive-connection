const express = require("express")
const bodyParser = require("body-parser")
const massive = require("massive")
const cors = require("cors")
const config = require("./config")
const mainCtrl = require("./controller");

const app = module.exports = express();


app.use(bodyParser.json());
app.use(cors());



massive(config.connectionString).then( (dbInstance) => {  // dbInstance can be called anything.
  app.set("db", dbInstance)
}; //endpoints could also go inside the objects last bracket to keep things cleaner. 



//endpoints here
// app.get("/api/users", mainCtrl.getUsers) //endpoint that would hit db function in controller.
app.get("/api/users", mainCtrl.getUsers)
app.post("/api/users", mainCtrl.addUser)
app.put("/ap/user/:id", mainCtrl.updateUser)





const PORT = 3100;
app.listen(PORT, () => {
  console.log("War on port:", PORT)
})
