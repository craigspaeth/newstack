import React from 'react'

let { ul, li, img, h3, p } = React.DOM

class Feed extends React.Component {

  render() {
    return (
      ul({ style: styles.ul },
        this.props.tweets.map((tweet) => {
          return (
            li({ style: styles.li },
              img({ src: tweet.img,  style: styles.liChildren }),
              h3({ style: styles.liChildren }, tweet.author),
              p({ style: styles.liChildren }, tweet.text)
          ))
        })
    ))
  }
}

let styles = {
  ul: {
    width: '800px',
    margin: 'auto'
  },
  li: {
    padding: '10px',
    borderBottom: '1px solid #eee',
  },
  liChildren: {
    display: 'inline-block',
    verticalAlign: 'middle',
    maxWidth: '400px',
    paddingLeft: '10px'
  }
}

export default (props) => { return React.createElement(Feed, props) }
