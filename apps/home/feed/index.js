import React from 'react'

let { ul, li, img, h3, p } = React.DOM

class Feed extends React.Component {

  render() {
    return (
      ul({},
        this.props.tweets.map((tweet) => {
          return (
            li({},
              img({ src: tweet.img }),
              h3({}, tweet.author),
              p({}, tweet.text)
          ))
        })
    ))
  }
}

export default (props) => { return React.createElement(Feed, props) }
