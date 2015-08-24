import React from 'react'

let helpers = (req, res, next) => {
  res.render = (component) => {
    res.send(React.renderToString(component))
  }
  next()
}

export default helpers
