const isAuthorized = require("../../../common/middelwear/isAuthorized");
const {addAdmin, getAllAdmin, deleteAdmin, blockUser } = require("../Controller/admin.controller");
const { ADD_ADMIN, GET_ALL_ADMIN, DELETE_ADMIN, BLOCK_USER } = require("../endpoints/endpointsAdmin");
const adminRouts = require("express").Router();

adminRouts.post("/addAdmin" ,isAuthorized(ADD_ADMIN) ,addAdmin);//add admin whith super admin
adminRouts.get("/getAllAdmin" ,isAuthorized(GET_ALL_ADMIN) ,getAllAdmin);//get all admin whith super admin
adminRouts.delete("/deleteAdmin/:id" ,isAuthorized(DELETE_ADMIN), deleteAdmin)//gdelete admin whith super admin
adminRouts.delete("/blockUser/:id" ,isAuthorized(BLOCK_USER), blockUser)//block user admin whith super admin and admin

module.exports=adminRouts