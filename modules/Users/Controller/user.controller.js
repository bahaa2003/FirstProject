const User = require('../Model/user.model');
const {statusCode} = require("http-status-codes")
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt")
const Cryptr = require("cryptr")
const cryptr = new Cryptr("devnami")

//*****sign up user****** */
const sign_up = async (req , res)=>{
    
    let {name , email , password , cPassword , phone  , location , role} = req.body;
    let encrypt = cryptr.encrypt(phone);//////////// encrypt phone
    let decrypt = cryptr.decrypt(encrypt);////////// decrypt phone
                console.log(encrypt);
                console.log(decrypt);
        try {
            const user = await User.findOne({email});
            if (user) {
                res.json({message:"gemil is aleary exists"})
            }if(password !== cPassword){
                res.json({message:"password not mach"})
            }else {
                let newUser = new User({name , email , password , cPassword , phone : decrypt  , location , role});
        await newUser.save()
        res.json({message:"sucssus"})
            }
        } catch (error) {
            res.json({message:"error", error})
        }
    
    }
//********end************ */

//*****sign up user****** */
    const sign_in = async (req , res)=>{
        const {email , password}=req.body;
        try {
            const user = await User.findOne({email})
            if (!user) {
                res.json({message:"email not found"})
            } else {
                const match = await bcrypt.compare(password , user.password);
                if (match) {
                    const token = jwt.sign({name:user.name , email:user.email , phone:user.phone , role:user.role , password:user.password}, "shhhhh");
                res.send(token)
                }else{
                    res.json({message:"password not found"})
                }
                
            }
        } catch (error) {
            res.json({message:"error" , error})
        }
    }
    //********end************ */

//********get all user whith super admin************ */
    const getAllUser = async (req , res)=>{
        try {
            let users = await User.find({});
            res.json({masseg:"sucsses" ,users})
        } catch (error) {
            res.json({message:"error", error})
        }
    }
//********end************ */

//********deactvaite user whith user************ */
    const deactvaite = async (req , res )=>{
        let {id} =req.params;
        try {
            await User.findByIdAndUpdate({_id:id} , {activate : false})
            res.json({masseg:"done"})
        } catch (error) {
            res.json({message:"error", error})
        }
    }
//********end************ */

//********get All User Activate************ */
    const getAllUserActivate = async (req , res)=>{
        try {
            let users = await User.find({activate:true});
            res.json({masseg:"sucsses" ,users})
        } catch (error) {
            res.json({message:"error", error})
        }
    }
//********end************ */


//********update password whith user************ */

    const updatePassword = async (req , res)=>{
        let {id , token} = req.params;
        let {oldPassword , newPassword , cNewPassword} = req.body;
        const oldPasswordHash = bcrypt.hashSync(oldPassword, 8);
        const newPasswordHash = bcrypt.hashSync(oldPassword, 8);
        const cNewPasswordHash = bcrypt.hashSync(oldPassword, 8);
        const decoded = jwt.verify(token , "shhhhh");
        try {
            if (decoded.password !== oldPasswordHash) {
                if (newPassword !== cNewPassword) {
                    res.json({message:"the new password not mach confirm new password"})
                }else{
                    await User.updateOne({_id:id} , {password:newPasswordHash , cPassword:cNewPasswordHash});
                    res.json({message:"sucsses"})
                }
            }else{
                res.json({message:"the password not mach old password"})
            }
        } catch (error) {
            res.json({message:"error", error})
        }
    }
//********end************ */


module.exports={
    sign_up,
    sign_in,
    getAllUser,
    deactvaite,
    getAllUserActivate,
    updatePassword
}