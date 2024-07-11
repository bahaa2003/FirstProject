const isAuthorized = require("../../../../../common/middelwear/isAuthorized");
const { allReports } = require("../../../../Posts/ReportPost/Controller/reportPost.controller");
const reportPostsRouter = require("../../../../Posts/ReportPost/Routes/reportPost.routes");
const { VIEW_REPORE_POST, ADD_ADVERTISING } = require("../../../endpoints/endpointsAdmin");
const { addCrudAdvertising} = require("../Controller/crudAdvertising.controller");

const advertisingRouter = require("express").Router();

advertisingRouter.post("/addAdvertising" ,isAuthorized(ADD_ADVERTISING), addCrudAdvertising);

reportPostsRouter.get("/allReports" , isAuthorized(VIEW_REPORE_POST),allReports)

module.exports=advertisingRouter