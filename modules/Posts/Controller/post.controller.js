const Post = require("../Model/post.model");
const {statusCode} = require("http-status-codes")

//*****add post******* */
const addPost = async (req , res)=>{
    let {title , desc , createdBy , postImage} = req.body;
    console.log(req.file);
    try {
        await Post.insertMany({title , desc , createdBy , postImage : `http://localhost:3000/${req.file.path}` });
        res.json({message:"don"})
    } catch (error) {
        res.json({message:"error", error})
    }
}
//******end******** */

//******get all post******* */
const getAllPosts = async (req , res)=>{
    try {
        let posts = await Post.find().populate('createdBy')
        res.json({masseg:"sucsses" ,posts})
    } catch (error) {
        res.json({message:"error", error})
    }
}
//******end******** */

//*****update post******* */
const updatePost = async (req , res)=>{
    let {id}=req.params;
    let {title , desc , createdBy} = req.body;

    try {
        await Post.updateOne({_id:id} , {title , desc , createdBy});
        res.json({message:"sucsses"})
    } catch (error) {
        res.json({message:"error"} , error)
    }
}
//******end******** */

//*****delete post******* */
const deletePost = async (req , res)=>{
    let {id}=req.params;
    try {
        await Post.deleteOne({_id:id})
        res.json({message:"deleted sucsses"})
    } catch (error) {
        res.json({message:"error"} , error)
    }
}
//******end******** */

module.exports={
    addPost,
    getAllPosts,
    updatePost,
    deletePost
}