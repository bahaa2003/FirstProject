const { reports } = require("../Controller/reportPost.controller");

const reportPostsRouter = require("express").Router();

reportPostsRouter.post("/reports" , reports);//report post whith user

module.exports=reportPostsRouter