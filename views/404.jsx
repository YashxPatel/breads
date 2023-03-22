const React = require('react')
const Default = require('./layouts/Default')

function error (html) {
    // Confirm we are getting our bread data in the terminal.
    // console.log(bread.name)
      return (
        <Default>
            <h1>Error 404</h1>
            <li><a href="/breads">Go home</a></li>
        </Default>

    )
}

module.exports = error