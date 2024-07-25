const Customer = require("../models/customer");

const home = (req,res)=>{
try {
    res.status(200).send('home...');
    
} catch (err) {
    throw err;
}
}
const create = async (req,res)=>{
try {
    console.log(req.body, '----------12----------')
    const {name, email, password}= req.body;
    if(!name|| !email||!password){
        return res.status(400).json({ message: `All fields are required` });
    }
     //create customer
     const newCustomer = await Customer.create({
        name,
        email,
        password,
      });
    res.status(200).json({newCustomer});
    
} catch (err) {
    return res.status(500).json({err});
}
}
const getAllCustomer = async(req,res)=>{
try {
    
     //find all customer
     const allCutomers = await Customer.findAll();
    res.status(200).json({Customer: allCutomers});
    
} catch (err) {
    return res.status(500).json({err});
}
}

module.exports = {home, create,getAllCustomer};