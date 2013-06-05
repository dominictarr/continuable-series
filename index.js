module.exports = function series (continuables) {
  if('function' === typeof continuables)
    return series([].slice.call(arguments))
  return function next (callback) {
    continuables.shift() (function (err, value) {
      if (err || !continuables.length)
        return callback(err, value)
      next (callback)
    })
  }
}
