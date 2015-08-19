import React from 'react'

let { div, label, textarea } = React.DOM

class TweetBox extends React.Component {

  render() {
    return (
      div({},
        label({}, 'Write a tweet',
          textarea({})
    )))
  }
}

export default (props) => { return React.createElement(TweetBox, props) }
