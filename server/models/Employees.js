const mongoose = require ('mongoose')

const EmployeeSchema = new mongoose.Schema({

    EmName: String,
    EmEmail: String,
    EmAge: Number
})

const EmployeeModel = mongoose.model("employees",EmployeeSchema)
module.exports = EmployeeModel