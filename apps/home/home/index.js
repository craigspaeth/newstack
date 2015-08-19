import React from 'react'
import Layout from 'components/layout'
import TweetBox from '../tweetbox'
import Feed from '../feed'

let { main } = React.DOM

class Home extends React.Component {

  render() {
    return (
      Layout({
        content: [
          TweetBox(),
          Feed({ tweets: this.props.tweets })
        ]
      })
    )
  }
}

export default (props) => { return React.createElement(Home, props) }
