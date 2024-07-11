const express = require('express')
const cors = require("cors")

const connection = require('./config/config');
const userRouter = require('./modules/Users/Routs/user.routes');
const postsRouter = require('./modules/Posts/Routes/post.routes');
const adminRouts = require('./modules/Admin/Routs/admin.routs');
const reportPostsRouter = require('./modules/Posts/ReportPost/Routes/reportPost.routes');
const advertisingRouter = require('./modules/Admin/admin&superAdmin/crudAdvertising/Routes/crudAdvertising.routes');
require('dotenv').config()
const app = express();
app.use(express.json())
app.use(cors())
const port = process.env.port;

connection();
app.use("/uploads" , express.static("uploads"))
app.use(userRouter);
app.use(postsRouter);
app.use(adminRouts);
app.use(reportPostsRouter);
app.use(advertisingRouter)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))