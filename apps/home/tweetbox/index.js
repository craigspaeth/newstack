import React from 'react'

let { div, label, textarea, span } = React.DOM

class TweetBox extends React.Component {

  render() {
    return (
      div({ style: styles.div, className: 'home-tweetbox' },
        label({},
          span({ style: styles.span }, 'Write a tweet'),
          textarea({ style: styles.textarea, onSubmit: this.submit })
    )))
  }

  submit() {
    console.log('moo')
  }
}

let styles = {
  div: {
    margin: 'auto',
    marginTop: '100px',
    width: '800px'
  },
  textarea: {
    width: '100%'
  },
  span: {
    marginBottom: '10px',
    display: 'block'
  }
}

export default (props) => { return React.createElement(TweetBox, props) }
