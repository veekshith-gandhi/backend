const Expenses = require("../model/expenses.model")

const expenses = async(req, res) => {
    try {
        const expenses = await Expenses.find()
        if (expenses) return res.status(200).json( expenses )
        res.status(401).json({status:"failur",msg :"no data"})
    } catch (error) {
        res.status(401).json({status:"failur",msg:error})
    }
    
}
const expensesGrouped = async(req, res) => {
    try {
        const expenses = await Expenses.aggregate([
            {
                $group: {
                    _id: "$type",
                    total: { $sum: "$amount" },
                    average: { $avg: "$amount" },
                    users:{$addToSet:"$employee_id"}
                }
            }
        ])
        if (expenses) return res.status(200).json( expenses )
       return res.status(401).json({status:"failur",msg :"no data"})
    } catch (error) {
       return res.status(401).json({status:"failur",msg:error})
    }
    
}

/**
 * basicaly like join in sql
 */
const expensesLookup= async(req, res) => {
    try {
        const expenses = await Expenses.aggregate([
            {
                $lookup: {
                    //lookup into other collection
                    //from means other collection to join particular collection
                    from: "employees",
                    localField: "employee_id",
                    foreignField: "_id",
                    //as to give a sample name 
                    as:"employee"
                }
            }
        ])
        if (expenses) return res.status(200).json( expenses )
       return res.status(401).json({status:"failur",msg :"no data"})
    } catch (error) {
        return res.status(401).json({status:"failur",msg:error})
    }
    
}
module.exports = {expenses,expensesGrouped,expensesLookup}