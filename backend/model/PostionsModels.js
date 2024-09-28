const {model} = require("mongoose");

const {PostionsSchema} = require('../schemas/PositionsSchema');

const PostionsModel = new model("postion", PostionsSchema);

module.exports = {PostionsModel};