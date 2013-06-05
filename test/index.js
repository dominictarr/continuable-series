var test = require("tape")

var series = require("../index")

test("series: applies recursively", function (assert) {
  var called = {}
  function check(name) {
    return function (cb) {
      console.log('called', name)
      called[name] = true
      cb(null, name)
    }
  }

  var cont = series([check('a'), check('b'), check('c')])

  assert.equal(typeof cont, 'function')

  cont(function (err) {
    assert.deepEqual(called, {a: true, b: true, c: true})
    assert.end()
  })

})

