const roles = require("../../../enum/roles");
const superAdmin = require("./superAdminPolicy");
const admin = require("./adminPolicy");
const user = require("./userPolicy");

const opts = {
    [roles.SUPER_ADMIN]:{
        can : superAdmin
    },
    [roles.ADMIN]:{
        can : admin
    },
    [roles.USER]:{
        can : user
    }
}
module.exports=opts