const EmailCode = require("./EmailCode.Js");
const User = require("./User");

//
EmailCode.belongsTo(User)
User.hasMany(EmailCode)