const Employee = require("../model/employee.model")

const getEmployeeData = async (req,res) => {
    try {
        const employeeData = await Employee.find()
        console.log(employeeData)
        if(!employeeData) return res.status(400).json({status:"failure"}) 
        
        return res.status(200).json({status:"success",data:employeeData})

    } catch (error) {
        return res.status(400).json({status:"failure",nessage:error}) 
    }
}

module.exports = getEmployeeData