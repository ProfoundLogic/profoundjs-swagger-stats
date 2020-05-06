// `absolutePath` and `getAbsoluteFSPath` are both here because at one point,
// we documented having one and actually implemented the other.
// They were both retained so we don't break anyone's code.
module.exports.absolutePath = require("./absolute-path.js")
module.exports.getAbsoluteFSPath = require("./absolute-path.js")
