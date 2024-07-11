const crudAdvertising = require("../Model/crudAdvertising.model");


const addCrudAdvertising = async (req , res)=>{
    let {title , desc } = req.body;
    try {
        await crudAdvertising.insertMany({title , desc});
        res.json({message:"don"})
    } catch (error) {
        res.json({message:"error", error})
    }
}

const getAllAdvertising = async (req , res)=>{
    try {
        let advertising = await crudAdvertising.find()
        res.json({masseg:"sucsses" ,advertising})
    } catch (error) {
        res.json({message:"error", error})
    }
}


module.exports={
    addCrudAdvertising,
    getAllAdvertising
}