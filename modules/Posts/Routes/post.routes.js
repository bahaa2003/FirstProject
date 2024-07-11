const { addPost, getAllPosts, updatePost, deletePost } = require("../Controller/post.controller");
const postsRouter = require("express").Router();
const validateArr = require("../../../common/middelwear/validationRequest");
const { addPostSchema, updatePostSchema, deletePostSchema } = require("../Joi/postValidation");
const advertisingRouter = require("../../Admin/admin&superAdmin/crudAdvertising/Routes/crudAdvertising.routes");
const { getAllAdvertising } = require("../../Admin/admin&superAdmin/crudAdvertising/Controller/crudAdvertising.controller");
const isAuthorized = require("../../../common/middelwear/isAuthorized");
const { ADD_POST, VIEW_ADVERTISING, DELETE_POST, UPDATE_POST } = require("../../Users/endpoints/endpointsUser");
const { GET_ALL_POST } = require("../../Admin/endpoints/endpointsAdmin");

const multer = require("multer");
const storage = multer.diskStorage({
    destination : (req , file , cb)=>{
        cb(null , "./uploads")
    },
    filename: (req , file , cb)=>{
        // const fileName = file.originalname.toLowerCase().split(' ').join('-');
        // cb(null, `${Math.floor(Math.random() * 10000)}-${fileName}`);
        cb(null , new Date().toISOString().replace(/:/g , '-') + file.originalname)
    }
})
const uploads = multer({storage});



postsRouter.post("/addPost"  , uploads.single("postImage") , addPost);//add post whith user
postsRouter.get("/getAllPosts" , getAllPosts);//get all post whith user
postsRouter.post("/updatePost/:id" , isAuthorized(UPDATE_POST) ,validateArr(updatePostSchema) , updatePost);//update post whith user
postsRouter.delete("/deletePost/:id" , isAuthorized(DELETE_POST) ,validateArr(deletePostSchema) , deletePost);//delete post whith user
advertisingRouter.get("/getAllAdvertising" ,isAuthorized(VIEW_ADVERTISING), getAllAdvertising)//get all advertising whith user

module.exports=postsRouter