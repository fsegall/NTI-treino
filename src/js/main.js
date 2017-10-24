var $ = require('jquery') // commons js
var feature = require('./feature.js')

console.log($.fn.jquery)

$(body).click(function() {
    $(this).addClass('red')
})

x = feature.add(5,4)
y = feature.pow(2)

console.log(x)
console.log(y)
