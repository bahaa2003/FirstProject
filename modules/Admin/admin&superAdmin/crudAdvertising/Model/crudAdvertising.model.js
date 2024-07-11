const mongoose = require("mongoose");
const crudAdvertisingSchema = require("../Schema/crudAdvertising.schema");

const crudAdvertising = mongoose.model("crudAdvertising",crudAdvertisingSchema);


module.exports=crudAdvertising