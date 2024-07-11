const Admin = require("../Model/admin.model");



//*****add admin whith super admin****** */
const addAdmin= async (req , res)=>{
    let {name , email , password , cPassword , phone , location ,role} = req.body;
        try {
            const admin = await Admin.findOne({email});
            if (admin) {
                res.json({message:"gemil is aleary exists"})
            }else {
                let newAdmin = new Admin({name , email , password , cPassword , phone , location , role});
        await newAdmin.save()
        res.json({message:"sucssus"})
            }
        } catch (error) {
            res.json({message:"error", error})
        }
    
    }
//****************end****************** */

//***********get all admin whith super admin************ */
    const getAllAdmin = async (req , res)=>{
        try {
            const admin = await Admin.find();
            res.json({message:"sucsses" , admin})
        } catch (error) {
            res.json({message:"error", error})
        }
    }
//****************end****************** */

//***********gdelete admin whith super admin************ */

    const deleteAdmin = async (req , res)=>{
        let {id}=req.params;
        try {
            await Admin.deleteOne({_id:id})
            res.json({message:"deleted sucsses"})
        } catch (error) {
            res.json({message:"error"} , error)
        }
    }
//****************end****************** */

//***********block user admin whith super admin and admin************ */
    const blockUser = async (req , res )=>{
        let {id} =req.params;
        try {
            await Admin.findByIdAndUpdate({_id:id} , {blockUser : true})
            res.json({masseg:"done"})
        } catch (error) {
            res.json({message:"error", error})
        }
    }
    //****************end****************** */


module.exports={
    addAdmin,
    getAllAdmin,
    deleteAdmin,
    blockUser
}