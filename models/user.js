/**
 * Created by smf on 2019/6/10.
 */
var mongoose = require("./index");
var Schema = mongoose.Schema;
var UserSchema = new Schema({
  name: {type: String},
  mobile: {type: String},
  pwd: {type: String}
});
module.exports = mongoose.model('User', UserSchema);