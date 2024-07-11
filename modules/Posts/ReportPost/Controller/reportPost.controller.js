const reportPost = require("../Model/reportPost.model");

//*****report post****** */
const reports = async (req , res)=>{
    let {userID , postID , reportComment} = req.body;

    try {
        await reportPost.insertMany({userID , postID , reportComment});
        res.json({message:"done"})
    } catch (error) {
        res.json({message:"error"} , error)
    }
}
//*****end******** */

//****get all report post whith super admin and admin****** */
const allReports = async (req , res)=>{
    try {
        const report  = await reportPost.find().populate(["userID" , "postID"])
        res.json({message:"data" , report})
    } catch (error) {
        res.json({message:"error"} , error)
    }
}
//***end****** */

module.exports={
    reports,
    allReports
}