module.exports = function (continuables) {
  return function next (callback) {
    continuables.shift() (function (err, value) {
      if (err || !continuables.length)
        return callback(err, value)
      next (callback)
    })
  }
}
