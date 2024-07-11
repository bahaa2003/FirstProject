const { getAllUser, deactvaite, getAllUserActivate, updatePassword, sign_up, sign_in } = require("../Controller/user.controller");
const userRouter = require("express").Router();
const validateArr = require("../../../common/middelwear/validationRequest");
const {addUserSchema, signinSchema, deactivateUser, updatePasswordSchema} = require('../Joi/userValidation')
const isAuthorized = require("../../../common/middelwear/isAuthorized");
const { GET_ALL_USER } = require("../../Admin/endpoints/endpointsAdmin");
const { DEACTVAITE_USER, UPDATE_PASSWORD } = require("../endpoints/endpointsUser");

userRouter.post("/signUp" ,validateArr(addUserSchema), sign_up);//sign up user
userRouter.post("/signin" ,validateArr(signinSchema), sign_in);//sign in user
userRouter.get("/getAllUser" ,isAuthorized(GET_ALL_USER), getAllUser),//get all user whith super admin
userRouter.patch("/deactvaite/:id" , isAuthorized(DEACTVAITE_USER),validateArr(deactivateUser) , deactvaite),//deactvaite user
userRouter.get("/getAllUserActivate" , getAllUserActivate),
userRouter.patch("/updatePassword/:id/:token" ,isAuthorized(UPDATE_PASSWORD) ,validateArr(updatePasswordSchema),updatePassword)//update password whith user


module.exports=userRouter